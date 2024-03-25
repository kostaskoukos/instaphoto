import { createServerClient, serialize, parse } from "@supabase/ssr";

export function createSupa(request: Request) {
  const cookies = parse(request.headers.get("Cookie") ?? "");
  const headers = new Headers();

  return [
    createServerClient(
      import.meta.env.PROD
        ? process.env.SUPABASE_URL!
        : process.env.SUPABASE_URL_DEV!,
      process.env.SUPABASE_KEY!,
      {
        cookies: {
          get(key) {
            return cookies[key];
          },
          set(key, value, options) {
            headers.append("Set-Cookie", serialize(key, value, options));
          },
          remove(key, options) {
            headers.append("Set-Cookie", serialize(key, "", options));
          },
        },
      }
    ),
    headers,
  ] as const;
}
