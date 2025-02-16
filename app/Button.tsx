"use client";

import { doSomething } from "./actions";

export default function Button() {
  return <button onClick={() => doSomething()}>Click me to see Magic</button>;
}
