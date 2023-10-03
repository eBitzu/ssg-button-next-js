import { ClientButton } from "../../components/button.client";
import { fetchData } from "../../utils/fetch-name";
import { inlinePre } from "./constants";

export default async function PageDefault() {
  const data = await fetchData();
  return (
    <>
      <ClientButton data={data} />
      <pre className="text-left mx-auto w-1/2 mt-3">
        {inlinePre}
      </pre>
    </>
  );
}
