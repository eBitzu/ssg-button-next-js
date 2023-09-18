'use server';
export async function SignInFunction(e: FormData) {
    console.log(e.get('provider'));
}