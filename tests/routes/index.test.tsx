import { createHandler } from "$fresh/server.ts";
import { expect } from "jsr:@std/expect";

import manifest from "../../fresh.gen.ts";
import config from "../../fresh.config.ts";

Deno.test("GET /", async (t) => {
  const handler = await createHandler(manifest, config);
  const response = await handler(new Request("http://localhost"));

  await t.step("returns status: 200", () => {
    expect(response.status).toBe(200);
  });

  await t.step("returns content-type: text/html", () => {
    expect(response.headers.get("content-type")).toBe(
      "text/html; charset=utf-8",
    );
  });
});
