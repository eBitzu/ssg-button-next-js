import { ClientButton } from "../../components/button.client";
import { contentfulClient } from "../../env/contentful/contentful.client";
import { fetchData } from "../../utils/fetch-name";
import { inlinePre } from "./constants";

export default async function PageDefault() {
  const data = await fetchData();
  const title = await contentfulClient.getEntry('63Up9Hp3cYnkr7zaXEcKMd')
  return (
    <>
      <ClientButton title={title.fields.ctaLabel as string} data={data} />
      <pre className="text-left mx-auto w-1/2 mt-3">
        {inlinePre}
      </pre>
    </>
  );
}
