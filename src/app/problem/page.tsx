import { ClientButton } from "../../components/button.client";
import { fetchData } from "../../utils/fetch-name";

export default async function PageDefault() {
  const data = await fetchData();
  return (
    <>
      <ClientButton data={data} />
      <pre className="text-left mx-auto w-1/2 mt-3">
        {`
export default async function PageDefault() {
    const data = await fetchData();
    return (
      <>
        {/* forced 'use client' element */}
        <ClientButton data={data} />
        <pre />
      </>
    );
}`}
      </pre>
    </>
  );
}
