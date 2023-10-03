export const ServerActionPre = `
// with React server actions - experimental
export async function Solution3Page() {
  const data = await fetchData();
  const color = cookies().get('x-color')?.value ?? 'blue';
  return (<>
    <form action={SignInFunction}>
      <input type="hidden" value={color} name="color" />
      <button
        type="submit"
        className={\`p-2 rounded-md bg-\${color}-500 text-white\`}
      >
        with RS action - {data}
      </button>
    </form>
    <pre/>
  </>);
}`
