import { cookies } from "next/headers";
import { SignInFunction } from "../actions/sign-in/sign-in.action";
import { rootURL } from "../env/route.env";

export async function ButtonServer() {
  const color = await fetch(`${rootURL}/api`, { credentials: "include" })
    .then(() => {
      return cookies().get("x-color")?.value ?? "blue";
    })
    .catch(() => 'red');
  return (
    <form action={SignInFunction}>
      <input type="hidden" value={color} name="color" />
      <button
        type="submit"
        className={`p-2 rounded-md bg-${color}-500 text-white`}
      >
        with RS action
      </button>
    </form>
  );
}
