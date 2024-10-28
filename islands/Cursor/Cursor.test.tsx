import { expect } from "jsr:@std/expect/expect";

import { Cursor } from "./Cursor.tsx";

Deno.test("Cursor",() => {
  const component = <Cursor text="placeholder" delay={100} />

  expect(1).toBe(1)
  expect(component).not.toBeUndefined();
})