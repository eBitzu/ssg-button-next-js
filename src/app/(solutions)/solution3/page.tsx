import { cookies } from "next/headers";
import { SignInFunction } from "../../../actions";
import { ButtonServer } from "../../../components/button.server";
import { fetchData } from "../../../utils/fetch-name";

export default async function Solution3Page() {
  const data = await fetchData();
  const color = cookies().get('x-color')?.value ?? 'blue';
  return (
    <>
      <form action={SignInFunction}>
        <input type="hidden" value={color} name="color" />
        <button
          type="submit"
          className={`p-2 rounded-md bg-${color}-500 text-white`}
        >
          with RS action - {data}
        </button>
      </form>
      <pre className="text-left mx-auto w-1/2 mt-3">
        {`
        export async function Solution3() {
          const data = await fetchData();
          const color = cookies().get('x-color')?.value ?? 'blue';
          return (
            <form action={SignInFunction}>
              <input type="hidden" value={color} name="color" />
              <button
                type="submit"
                className={\`p-2 rounded-md bg-\${color}-500 text-white\`}
              >
                with RS action - {data}
              </button>
            </form>
          );
        }
         `}
      </pre>
    </>
  );
}
