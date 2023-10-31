import { contentfulClient } from "../../../env/contentful/contentful.client";
import { ButtonTitleEntryId } from "../../../env/contentful/contentful.constants";
import { fetchData } from "../../../utils/fetch-name";
import { VanillaPre } from "./constants";

export default async function InitialIdea() {
  const data = await fetchData();
  const title = await contentfulClient.getEntry(ButtonTitleEntryId);
  return (
    <>
      <button
        id="click-btn"
        title={title.fields.ctaLabel as string}
        value="blue"
        className="bg-blue-500"
      >
        with JS event listener - {data}
      </button>
      <pre>
        {VanillaPre}
      </pre>
    </>
  );
}
