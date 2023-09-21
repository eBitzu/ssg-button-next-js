import { Solution3 } from "../../../components/button.server";

export default async function Solution3Page() {
  return (
    <>
      <Solution3 />
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
