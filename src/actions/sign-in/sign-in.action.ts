'use server';

import { revalidatePath } from "next/cache";
import { Color } from "../../app/state/color.state";

export async function SignInFunction(e: FormData) {
    const formColor = e.get('color') === 'blue' ? 'red' : 'blue';
    await Color(formColor);
    revalidatePath('/');
}