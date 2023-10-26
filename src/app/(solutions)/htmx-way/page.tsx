import { contentfulClient } from "../../../env/contentful/contentful.client";
import { fetchData } from "../../../utils/fetch-name";
import { HTMXPre } from "./constants";

export default async function Solution2() {
  const data = await fetchData();
  const title = await contentfulClient.getEntry('63Up9Hp3cYnkr7zaXEcKMd')

  return (
    <>
      <button
        className="p-2 rounded-md bg-blue-500 text-white"
        name="btn-color"
        value="blue"
        title={title.fields.ctaLabel as string}
        hx-post="/api"
        hx-swap="outerHTML"
      >
        with htmx - {data}
      </button>
      <pre className="text-left mx-auto w-1/2 mt-3">
        {HTMXPre}
      </pre>
    </>
  );
}
