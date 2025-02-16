"use server";

import { revalidateTag } from "next/cache";

export async function revalidateUsers() {
  revalidateTag("users");
}

export async function doSomething() {
  console.log("Some sensitive information");
}
