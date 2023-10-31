import { cookies } from "next/headers";
import { SeverFunction } from "../actions/sign-in/sign-in.action";
import { fetchData } from "../utils/fetch-name";

export async function ButtonServer() {
  const data = await fetchData();
  const color = cookies().get('x-color')?.value ?? 'blue';
  return (
    <form action={SeverFunction}>
      <input type="hidden" value={color} name="color" />
      <button
        type="submit"
        className={`bg-${color}-500`}
      >
        with RS action - {data}
      </button>
    </form>
  );
}
