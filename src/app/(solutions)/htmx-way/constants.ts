export const HTMXPre = `
// use htmx to replace data anywhere in the HTML
export default async function Solution2() {
  const data = await fetchData();
  return (<>
    <button
      className="bg-blue-500"
      name="btn-color"
      value="blue"
      hx-post="/api"
      hx-swap="outerHTML"
    >
      with htmx - {data}
    </button>
    <pre />
 </>);`
