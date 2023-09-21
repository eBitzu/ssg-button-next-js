import { ClientButton } from "../../components/button.client";
import { fetchData } from "../../utils/fetch-name";

export default async function PageDefault() {
  const data = await fetchData();
  return (
    <>
      <ClientButton data={data} />
      <pre className="text-left mx-auto w-1/2 mt-3">
        {`
// button doesn't get updated because data is not re-fetched
export default async function PageDefault() {
  const data = await fetchData();
  return (
    <>
      {/* forced 'use client' element */}
      <ClientButton data={data} />
      <pre />
    </>
  );
}
// button.client.tsx
export const ClientButton: FC<{ data: string }> = ({ data }) => {
  const [state, setState] = useState(true);
  // const [sData, setData] = useState(data); // on refetch
  const handleClick = () => {
    setState((old) => !old);
    // window.location.replace('/problem'); // forced reload?
    // fetchData().then(setData); // re-fetch manually??
  }
  return (
    <button
      onClick={handleClick}
      className={\`p-2 rounded-md bg-\${state ? "blue" : "red"}-500 text-white\`}
    >
      with onClick - {data} // or sData
    </button>
  );
}`}
      </pre>
    </>
  );
}
