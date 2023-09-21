import { cookies } from "next/headers";
import { SignInFunction } from "../actions/sign-in/sign-in.action";
import { fetchData } from "../utils/fetch-name";

export async function Solution3() {
  const data = await fetchData();
  const color = cookies().get('x-color')?.value ?? 'blue';
  return (
    <form action={SignInFunction}>
      <input type="hidden" value={color} name="color" />
      <button
        type="submit"
        className={`p-2 rounded-md bg-${color}-500 text-white`}
      >
        with RS action - {data}
      </button>
    </form>
  );
}
