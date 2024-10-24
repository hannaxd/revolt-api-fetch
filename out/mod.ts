// deno-lint-ignore-file no-explicit-any
import type { APIRoutes } from "./routes.ts";

import { defaultBaseURL } from "./baseURL.ts";
import { pathResolve, queryParams } from "./params.ts";

export * from "./types.ts";

type Methods = APIRoutes["method"];
type PickRoutes<Method extends Methods> = APIRoutes & { method: Method };

type GetRoutes = PickRoutes<"get">;
type PatchRoutes = PickRoutes<"patch">;
type PutRoutes = PickRoutes<"put">;
type DeleteRoutes = PickRoutes<"delete">;
type PostRoutes = PickRoutes<"post">;

type Count<
  Str extends string,
  SubStr extends string,
  Matches extends null[] = [],
> = Str extends `${infer _}${SubStr}${infer After}`
  ? Count<After, SubStr, [...Matches, null]>
  : Matches["length"];

/**
 * Get the specific path name of any given path.
 * @param anyPath Any path
 * @returns Specific path
 */
export function getPathName(anyPath: string) {
  const segments = anyPath.split("/");

  const list =
    (pathResolve as unknown as Record<string, (string | [string])[]>)[
      (segments.length - 1).toString()
    ] || [];
  for (const entry of list) {
    let i = 1;
    const copy = [...segments];
    for (i; i < segments.length; i++) {
      if (Array.isArray(entry[i - 1])) {
        copy[i] = entry[i - 1];
        continue;
      } else if (entry[i - 1] !== segments[i]) break;
    }

    if (i === segments.length) return copy.join("/");
  }
}

/**
 * Client configuration options
 */
export interface Options {
  /**
   * Base URL of the Revolt node
   */
  baseURL: string;
  /**
   * Authentication used for requests
   */
  authentication: {
    rauth?: string | undefined;
    revolt?: { token: string } | string | undefined;
    headers?: Record<string, string> | undefined; // Adjusted from AxiosRequestConfig['headers']
  };
}

/**
 * API Client
 */
export class API {
  private baseURL: Options["baseURL"];
  private authentication: Options["authentication"];

  constructor({ baseURL, authentication }: Partial<Options> = {}) {
    this.baseURL = baseURL || defaultBaseURL;
    this.authentication = authentication || {};
  }

  /**
   * Generate authentication options.
   */
  get auth(): Record<string, string> {
    const headers: Record<string, string> = {};
    if (this.authentication.rauth) {
      if (typeof this.authentication.rauth === "string") {
        headers["X-Session-Token"] = this.authentication.rauth;
      }
    } else if (this.authentication.revolt) {
      switch (typeof this.authentication.revolt) {
        case "string": {
          headers["X-Bot-Token"] = this.authentication.revolt;
          break;
        }
        case "object": {
          headers["X-Session-Token"] = this.authentication.revolt.token;
          break;
        }
      }
    }

    if (this.authentication.headers) {
      Object.assign(headers, this.authentication.headers);
    }

    return headers;
  }

  /**
   * Send any arbitrary request.
   * @param method HTTP Method
   * @param path Path
   * @param params Body or Query Parameters
   * @returns Typed Response Data
   */
  async req<
    Method extends Methods,
    Routes extends PickRoutes<Method>,
    Path extends Routes["path"],
    Route extends Routes & { path: Path; parts: Count<Path, "/"> },
  >(
    method: Method,
    path: Path,
    params?: Route["params"], // Allow params to be optional
    config?: RequestInit,
  ): Promise<Route["response"]> {
    let query: Record<string, any> | undefined;
    let body: Record<string, any> | undefined;
    const named = getPathName(path);

    if (named && typeof params === "object") {
      const route = queryParams[named as keyof typeof queryParams];
      const allowed_query =
        (route as unknown as Record<Method, string[]>)[method];

      for (const parameter of Object.keys(params)) {
        if (allowed_query?.includes(parameter)) {
          query = {
            ...(query || {}),
            [parameter]: (params as Record<any, any>)[parameter],
          };
        } else {
          body = {
            ...(body || {}),
            [parameter]: (params as Record<any, any>)[parameter],
          };
        }
      }
    }

    const url = new URL(path, this.baseURL);
    const headers = this.auth;

    if (query) {
      const queryString = new URLSearchParams(query).toString();
      url.search = queryString;
    }

    const response = await fetch(url.toString(), {
      method: method.toUpperCase() as string,
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json() as Promise<Route["response"]>;
  }

  // The get, patch, put, delete, and post methods remain the same, replacing Axios calls
  get<
    Path extends GetRoutes["path"],
    Route extends GetRoutes & { path: Path; parts: Count<Path, "/"> },
  >(
    path: Path,
    params: Route["params"],
    config?: RequestInit,
  ): Promise<Route["response"]>;

  get<
    Path extends (GetRoutes & { params: undefined })["path"],
    Route extends GetRoutes & { path: Path; parts: Count<Path, "/"> },
  >(path: Path): Promise<Route["response"]>;

  get<
    Path extends GetRoutes["path"],
    Route extends GetRoutes & { path: Path; parts: Count<Path, "/"> },
  >(
    path: Path,
    params?: Route["params"] | undefined,
    config?: RequestInit,
  ): Promise<Route["response"]> {
    return this.req("get", path, params as Route["params"], config);
  }

  patch<
    Path extends PatchRoutes["path"],
    Route extends PatchRoutes & { path: Path; parts: Count<Path, "/"> },
  >(
    path: Path,
    params: Route["params"],
    config?: RequestInit,
  ): Promise<Route["response"]>;

  patch<
    Path extends (PatchRoutes & { params: undefined })["path"],
    Route extends PatchRoutes & { path: Path; parts: Count<Path, "/"> },
  >(path: Path): Promise<Route["response"]>;

  patch(path: any, params?: any, config?: RequestInit): Promise<any> {
    return this.req("patch", path, params, config);
  }

  put<
    Path extends PutRoutes["path"],
    Route extends PutRoutes & { path: Path; parts: Count<Path, "/"> },
  >(
    path: Path,
    params: Route["params"],
    config?: RequestInit,
  ): Promise<Route["response"]>;

  put<
    Path extends (PutRoutes & { params: undefined })["path"],
    Route extends PutRoutes & { path: Path; parts: Count<Path, "/"> },
  >(path: Path): Promise<Route["response"]>;

  put(path: any, params?: any, config?: RequestInit): Promise<any> {
    return this.req("put", path, params, config);
  }

  delete<
    Path extends DeleteRoutes["path"],
    Route extends DeleteRoutes & { path: Path; parts: Count<Path, "/"> },
  >(path: Path, params?: any, config?: RequestInit): Promise<Route["response"]>;

  delete<
    Path extends (DeleteRoutes & { params: undefined })["path"],
    Route extends DeleteRoutes & { path: Path; parts: Count<Path, "/"> },
  >(path: Path, params?: any): Promise<Route["response"]>;

  delete(path: any, params?: any, config?: RequestInit): Promise<any> {
    return this.req("delete", path, params, config);
  }

  post<
    Path extends PostRoutes["path"],
    Route extends PostRoutes & { path: Path; parts: Count<Path, "/"> },
  >(
    path: Path,
    params: Route["params"],
    config?: RequestInit,
  ): Promise<Route["response"]>;

  post<
    Path extends (PostRoutes & { params: undefined })["path"],
    Route extends PostRoutes & { path: Path; parts: Count<Path, "/"> },
  >(path: Path): Promise<Route["response"]>;

  post(path: any, params?: any, config?: RequestInit): Promise<any> {
    return this.req("post", path, params, config);
  }
}
