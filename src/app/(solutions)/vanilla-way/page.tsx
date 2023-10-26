import { contentfulClient } from "../../../env/contentful/contentful.client";
import { fetchData } from "../../../utils/fetch-name";
import { VanillaPre } from "./constants";

export default async function Solution1() {
  const data = await fetchData();
  const title = await contentfulClient.getEntry('63Up9Hp3cYnkr7zaXEcKMd')

  return (
    <>
      <button
        id="click-btn"
        title={title.fields.ctaLabel as string}
        value="blue"
        className="p-2 rounded-md bg-blue-500 text-white"
      >
        with JS event listener - {data}
      </button>
      <pre className="text-left mx-auto w-1/2 mt-3">
        {VanillaPre}
      </pre>
    </>
  );
}
