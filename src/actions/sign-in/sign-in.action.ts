"use server";

import { revalidatePath } from "next/cache";
import { cookies } from 'next/headers';

export async function SignInFunction(e: FormData) {
  const formColor = e.get("color") === "blue" ? "red" : "blue";

  cookies().set('x-color', formColor);
  revalidatePath('/server-actions-way');
  return {message: formColor};
}
