import type { APIRoutes } from "./routes.ts";
import { defaultBaseURL } from "./baseURL.ts";

export * from "./types.ts";

type Methods = APIRoutes["method"];

type RouteForMethodAndPath<
  Method extends Methods,
  Path extends string,
> = Extract<APIRoutes, { method: Method; path: Path }>;

export interface Options {
  baseURL: string;
  authentication?: {
    rauth?: string;
    revolt?: { token: string } | string;
    headers?: Record<string, string>;
  };
}

export class API {
  private baseURL: string;
  private authentication: Options["authentication"];

  constructor({ baseURL, authentication }: Partial<Options> = {}) {
    this.baseURL = baseURL || defaultBaseURL;
    this.authentication = authentication || {};
  }

  get auth(): Record<string, string> {
    const headers: Record<string, string> = {};
    if (this.authentication?.rauth) {
      headers["X-Session-Token"] = this.authentication.rauth;
    } else if (this.authentication?.revolt) {
      if (typeof this.authentication.revolt === "string") {
        headers["X-Bot-Token"] = this.authentication.revolt;
      } else {
        headers["X-Session-Token"] = this.authentication.revolt.token;
      }
    }

    if (this.authentication?.headers) {
      Object.assign(headers, this.authentication.headers);
    }

    return headers;
  }

  async req<
    Method extends Methods,
    Path extends Extract<APIRoutes, { method: Method }>["path"],
    Route extends RouteForMethodAndPath<Method, Path>,
    Params = Route extends { params: unknown } ? Route["params"] : undefined,
    Response = Route extends { response: unknown } ? Route["response"] : void,
  >(
    method: Method,
    path: Path,
    params?: Params,
    config?: RequestInit,
  ): Promise<Response> {
    const url = new URL(path as string, this.baseURL);
    const headers = this.auth;

    let body: string | undefined;
    let query: URLSearchParams | undefined;

    if (params && typeof params === "object") {
      if (method === "get" || method === "delete") {
        query = new URLSearchParams();
        for (
          const [key, value] of Object.entries(
            params as Record<string, unknown>,
          )
        ) {
          if (value !== undefined && value !== null) {
            query.append(key, String(value));
          }
        }
      } else {
        body = JSON.stringify(params);
      }
    }

    if (query) {
      url.search = query.toString();
    }

    const response = await fetch(url.toString(), {
      method: method.toUpperCase(),
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body,
      ...config,
    });

    const contentType = response.headers.get("content-type");
    let responseBody: unknown;

    if (contentType && contentType.includes("application/json")) {
      responseBody = await response.json();
    } else {
      responseBody = await response.text();
    }

    return responseBody as Response;
  }

  get<
    Path extends Extract<APIRoutes, { method: "get" }>["path"],
    Route extends RouteForMethodAndPath<"get", Path>,
    Params = Route extends { params: unknown } ? Route["params"] : undefined,
    Response = Route extends { response: unknown } ? Route["response"] : void,
  >(
    path: Path,
    params?: Params,
    config?: RequestInit,
  ): Promise<Response> {
    return this.req("get", path, params, config);
  }

  post<
    Path extends Extract<APIRoutes, { method: "post" }>["path"],
    Route extends RouteForMethodAndPath<"post", Path>,
    Params = Route extends { params: unknown } ? Route["params"] : undefined,
    Response = Route extends { response: unknown } ? Route["response"] : void,
  >(
    path: Path,
    params?: Params,
    config?: RequestInit,
  ): Promise<Response> {
    return this.req("post", path, params, config);
  }

  patch<
    Path extends Extract<APIRoutes, { method: "patch" }>["path"],
    Route extends RouteForMethodAndPath<"patch", Path>,
    Params = Route extends { params: unknown } ? Route["params"] : undefined,
    Response = Route extends { response: unknown } ? Route["response"] : void,
  >(
    path: Path,
    params?: Params,
    config?: RequestInit,
  ): Promise<Response> {
    return this.req("patch", path, params, config);
  }

  put<
    Path extends Extract<APIRoutes, { method: "put" }>["path"],
    Route extends RouteForMethodAndPath<"put", Path>,
    Params = Route extends { params: unknown } ? Route["params"] : undefined,
    Response = Route extends { response: unknown } ? Route["response"] : void,
  >(
    path: Path,
    params?: Params,
    config?: RequestInit,
  ): Promise<Response> {
    return this.req("put", path, params, config);
  }

  delete<
    Path extends Extract<APIRoutes, { method: "delete" }>["path"],
    Route extends RouteForMethodAndPath<"delete", Path>,
    Params = Route extends { params: unknown } ? Route["params"] : undefined,
    Response = Route extends { response: unknown } ? Route["response"] : void,
  >(
    path: Path,
    params?: Params,
    config?: RequestInit,
  ): Promise<Response> {
    return this.req("delete", path, params, config);
  }
}
