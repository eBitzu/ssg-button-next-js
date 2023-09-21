import { fetchData } from "../../../utils/fetch-name";

export default async function Solution2() {
  const data = await fetchData();
  return (
    <>
      <button
        className="p-2 rounded-md bg-blue-500 text-white"
        name="btn-color"
        value="blue"
        hx-post="/api"
        hx-swap="outerHTML"
      >
        with htmx - {data}
      </button>
      <pre className="text-left mx-auto w-1/2 mt-3">
        {`
// use htmx to replace data anywhere in the HTML
export default async function Solution2() {
  const data = await fetchData();
  return (<>
    <button
      className="p-2 rounded-md bg-blue-500 text-white"
      name="btn-color"
      value="blue"
      hx-post="/api"
      hx-swap="outerHTML"
    >
      with htmx - {data}
    </button>
    <pre />
 </>);
         `}
      </pre>
    </>
  );
}
