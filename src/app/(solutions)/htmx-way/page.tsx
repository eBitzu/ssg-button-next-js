import { contentfulClient } from "../../../env/contentful/contentful.client";
import { ButtonTitleEntryId } from "../../../env/contentful/contentful.constants";
import { fetchData } from "../../../utils/fetch-name";
import { HTMXPre } from "./constants";

export default async function Solution1() {
  const data = await fetchData();
  const title = await contentfulClient.getEntry(ButtonTitleEntryId)

  return (
    <>
      <button
        className="bg-blue-500"
        name="btn-color"
        value="blue"
        title={title.fields.ctaLabel as string}
        hx-post="/api"
        hx-swap="outerHTML"
      >
        with htmx - {data}
      </button>
      <code>
        {HTMXPre}
      </code>
    </>
  );
}
