// This file was auto-generated by @rawrxd/revolt-api - do not edit manually
export const pathResolve = {
  "1": [[""]],
  "2": [
    ["users", "@me"],
    ["users", ["{target}"]],
    ["users", "dms"],
    ["users", "friend"],
    ["bots", "create"],
    ["bots", ["{bot}"]],
    ["bots", "@me"],
    ["bots", ["{target}"]],
    ["channels", ["{target}"]],
    ["channels", "create"],
    ["servers", "create"],
    ["servers", ["{target}"]],
    ["invites", ["{target}"]],
    ["safety", "report"],
    ["onboard", "hello"],
    ["onboard", "complete"],
    ["push", "subscribe"],
    ["push", "unsubscribe"],
    ["sync", "unreads"],
  ],
  "3": [
    ["users", ["{target}"], "flags"],
    ["users", "@me", "username"],
    ["users", ["{target}"], "default_avatar"],
    ["users", ["{target}"], "profile"],
    ["users", ["{target}"], "dm"],
    ["users", ["{target}"], "mutual"],
    ["users", ["{target}"], "friend"],
    ["users", ["{target}"], "block"],
    ["bots", ["{target}"], "invite"],
    ["channels", ["{target}"], "members"],
    ["channels", ["{target}"], "invites"],
    ["channels", ["{target}"], "messages"],
    ["channels", ["{target}"], "search"],
    ["channels", ["{target}"], "join_call"],
    ["channels", ["{target}"], "webhooks"],
    ["channels", ["{channel_id}"], "webhooks"],
    ["servers", ["{target}"], "ack"],
    ["servers", ["{server}"], "channels"],
    ["servers", ["{target}"], "members"],
    ["servers", ["{target}"], "members_experimental_query"],
    ["servers", ["{target}"], "bans"],
    ["servers", ["{target}"], "invites"],
    ["servers", ["{target}"], "roles"],
    ["servers", ["{target}"], "emojis"],
    ["custom", "emoji", ["{id}"]],
    ["custom", "emoji", ["{emoji_id}"]],
    ["auth", "account", "create"],
    ["auth", "account", "reverify"],
    ["auth", "account", "delete"],
    ["auth", "account", ""],
    ["auth", "account", "disable"],
    ["auth", "account", "reset_password"],
    ["auth", "session", "login"],
    ["auth", "session", "logout"],
    ["auth", "session", "all"],
    ["auth", "session", ["{id}"]],
    ["auth", "mfa", "ticket"],
    ["auth", "mfa", ""],
    ["auth", "mfa", "recovery"],
    ["auth", "mfa", "methods"],
    ["auth", "mfa", "totp"],
    ["sync", "settings", "fetch"],
    ["sync", "settings", "set"],
  ],
  "4": [
    ["channels", ["{target}"], "ack", ["{message}"]],
    ["channels", ["{target}"], "messages", ["{msg}"]],
    ["channels", ["{target}"], "messages", "bulk"],
    ["channels", ["{group_id}"], "recipients", ["{member_id}"]],
    ["channels", ["{target}"], "recipients", ["{member}"]],
    ["channels", ["{target}"], "permissions", ["{role_id}"]],
    ["channels", ["{target}"], "permissions", "default"],
    ["servers", ["{target}"], "members", ["{member}"]],
    ["servers", ["{server}"], "members", ["{target}"]],
    ["servers", ["{server}"], "bans", ["{target}"]],
    ["servers", ["{target}"], "roles", ["{role_id}"]],
    ["servers", ["{target}"], "permissions", ["{role_id}"]],
    ["servers", ["{target}"], "permissions", "default"],
    ["auth", "account", "change", "password"],
    ["auth", "account", "change", "email"],
    ["auth", "account", "verify", ["{code}"]],
  ],
  "5": [["channels", ["{target}"], "messages", ["{msg}"], "reactions"]],
  "6": [["channels", ["{target}"], "messages", ["{msg}"], "reactions", [
    "{emoji}",
  ]]],
};
export const queryParams = {
  "/": { "get": [] },
  "/users/@me": { "get": [] },
  "/users/{target}": { "get": [], "patch": [] },
  "/users/{target}/flags": { "get": [] },
  "/users/@me/username": { "patch": [] },
  "/users/{target}/default_avatar": { "get": [] },
  "/users/{target}/profile": { "get": [] },
  "/users/dms": { "get": [] },
  "/users/{target}/dm": { "get": [] },
  "/users/{target}/mutual": { "get": [] },
  "/users/{target}/friend": { "put": [], "delete": [] },
  "/users/{target}/block": { "put": [], "delete": [] },
  "/users/friend": { "post": [] },
  "/bots/create": { "post": [] },
  "/bots/{target}/invite": { "get": [], "post": [] },
  "/bots/{bot}": { "get": [] },
  "/bots/@me": { "get": [] },
  "/bots/{target}": { "delete": [], "patch": [] },
  "/channels/{target}/ack/{message}": { "put": [] },
  "/channels/{target}": {
    "get": [],
    "delete": ["leave_silently"],
    "patch": [],
  },
  "/channels/{target}/members": { "get": [] },
  "/channels/{target}/invites": { "post": [] },
  "/channels/{target}/messages": {
    "get": ["limit", "before", "after", "sort", "nearby", "include_users"],
    "post": [],
  },
  "/channels/{target}/search": { "post": [] },
  "/channels/{target}/messages/{msg}": { "get": [], "delete": [], "patch": [] },
  "/channels/{target}/messages/bulk": { "delete": [] },
  "/channels/create": { "post": [] },
  "/channels/{group_id}/recipients/{member_id}": { "put": [] },
  "/channels/{target}/recipients/{member}": { "delete": [] },
  "/channels/{target}/join_call": { "post": [] },
  "/channels/{target}/permissions/{role_id}": { "put": [] },
  "/channels/{target}/permissions/default": { "put": [] },
  "/channels/{target}/messages/{msg}/reactions/{emoji}": {
    "put": [],
    "delete": ["user_id", "remove_all"],
  },
  "/channels/{target}/messages/{msg}/reactions": { "delete": [] },
  "/channels/{target}/webhooks": { "post": [] },
  "/channels/{channel_id}/webhooks": { "get": [] },
  "/servers/create": { "post": [] },
  "/servers/{target}": {
    "get": ["include_channels"],
    "delete": ["leave_silently"],
    "patch": [],
  },
  "/servers/{target}/ack": { "put": [] },
  "/servers/{server}/channels": { "post": [] },
  "/servers/{target}/members": { "get": ["exclude_offline"] },
  "/servers/{target}/members/{member}": { "get": ["roles"], "delete": [] },
  "/servers/{server}/members/{target}": { "patch": [] },
  "/servers/{target}/members_experimental_query": {
    "get": ["query", "experimental_api"],
  },
  "/servers/{server}/bans/{target}": { "put": [], "delete": [] },
  "/servers/{target}/bans": { "get": [] },
  "/servers/{target}/invites": { "get": [] },
  "/servers/{target}/roles": { "post": [] },
  "/servers/{target}/roles/{role_id}": { "get": [], "delete": [], "patch": [] },
  "/servers/{target}/permissions/{role_id}": { "put": [] },
  "/servers/{target}/permissions/default": { "put": [] },
  "/servers/{target}/emojis": { "get": [] },
  "/invites/{target}": { "get": [], "post": [], "delete": [] },
  "/custom/emoji/{id}": { "put": [] },
  "/custom/emoji/{emoji_id}": { "get": [], "delete": [] },
  "/safety/report": { "post": [] },
  "/auth/account/create": { "post": [] },
  "/auth/account/reverify": { "post": [] },
  "/auth/account/delete": { "put": [], "post": [] },
  "/auth/account/": { "get": [] },
  "/auth/account/disable": { "post": [] },
  "/auth/account/change/password": { "patch": [] },
  "/auth/account/change/email": { "patch": [] },
  "/auth/account/verify/{code}": { "post": [] },
  "/auth/account/reset_password": { "post": [], "patch": [] },
  "/auth/session/login": { "post": [] },
  "/auth/session/logout": { "post": [] },
  "/auth/session/all": { "get": [], "delete": ["revoke_self"] },
  "/auth/session/{id}": { "delete": [], "patch": [] },
  "/auth/mfa/ticket": { "put": [] },
  "/auth/mfa/": { "get": [] },
  "/auth/mfa/recovery": { "post": [], "patch": [] },
  "/auth/mfa/methods": { "get": [] },
  "/auth/mfa/totp": { "put": [], "post": [], "delete": [] },
  "/onboard/hello": { "get": [] },
  "/onboard/complete": { "post": [] },
  "/push/subscribe": { "post": [] },
  "/push/unsubscribe": { "post": [] },
  "/sync/settings/fetch": { "post": [] },
  "/sync/settings/set": { "post": ["timestamp"] },
  "/sync/unreads": { "get": [] },
};
