# Revolt API Fetch

This package contains object types and a fully typed request builder for the Revolt API

### Disclaimer

This thing is very much unstable, I'm working on it.

### Package Usage

Importing types:

```ts
import type { Message } from '@rawrxd/revolt-api';
```

Using the request builder:

```ts
import { API } from '@rawrxd/revolt-api';

const client = new API({
    authentication: {
        revolt: "bot token here"
    }
});

// Sending a get request
const me = await client.get('/users/@me');

// sending a post request with URL parameters and body content
const channel_id = "something";
client.post(`/channels/${channel_id}/messages`, {
    content: "message :3"
});
```

### Rebuilding types

As of now this package doesn't contain an automated approach to updating the necessary `openapi.json` file. The current version can always be obtained from [the revolt api directly](https://api.revolt.chat/openapi.json), for example via wget:

```sh
wget https://api.revolt.chat/openapi.json
```

After that, rebuild the base files by running the build task through deno.

### Attribution

The `builder.ts` and `base/mod.ts` files are taken from [@insertish/oapi](https://github.com/insertish/oapi) and the `cli.js` and `src/index.ts` files respectively and adapted to run on deno and use the web standard [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).