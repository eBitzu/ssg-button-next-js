import { contentfulClient } from "../../env/contentful/contentful.client";
import { ButtonTitleEntryId } from "../../env/contentful/contentful.constants";
import { fetchData } from "../../utils/fetch-name";
import { inlinePre } from "./constants";

export default async function PageDefault() {
  const data = await fetchData();
  const title = await contentfulClient.getEntry(ButtonTitleEntryId)
  const state = true;
  return (
    <>
      <button
      title={title.fields.ctaLabel as string}
      className={`bg-${state ? "blue" : "red"}-500`}
    >
      with onClick - {data}
    </button>
      <pre>
        {inlinePre}
      </pre>
    </>
  );
}
