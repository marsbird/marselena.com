import { createHandler } from "$fresh/server.ts";
import { expect } from "jsr:@std/expect";

import manifest from "../../fresh.gen.ts";
import config from "../../fresh.config.ts";

Deno.test("GET /_404", async (t) => {
  const handler = await createHandler(manifest, config);
  const response = await handler(
    new Request("http://localhost/thispagedoesntexist"),
  );

  await t.step("returns status: 404", () => {
    expect(response.status).toBe(404);
  });

  await t.step("returns content-type: text/html", () => {
    expect(response.headers.get("content-type")).toBe(
      "text/html; charset=utf-8",
    );
  });
});
