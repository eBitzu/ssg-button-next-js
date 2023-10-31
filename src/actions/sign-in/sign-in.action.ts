"use server";

import { revalidatePath } from "next/cache";
import { cookies } from 'next/headers';

export async function SeverFunction(e: FormData) {
  const formColor = e.get("color") === "blue" ? "red" : "blue";

  cookies().set('x-color', formColor);
  revalidatePath('/server-actions-way');
  return {message: formColor};
}

export async function SeverFunction2(e: FormData) {
  const formColor = e.get("color") === "blue" ? "red" : "blue";

  cookies().set('x-color', formColor);
  revalidatePath('/form-action-way');
  return {message: formColor};
}
