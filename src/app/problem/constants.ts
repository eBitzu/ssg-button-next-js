export const inlinePre = `
// button doesn't get updated because data is not re-fetched

export default async function PageDefault() {
  const title = await contentfulClient.getEntry(ButtonTitleEntryId);
  const data = await fetchData();
  return (
    <>
      // forced 'use client' element
      <ClientButton data={data} />
      <pre />
    </>
  );
}
// button.client.tsx
export const ClientButton: FC<ClientButtonProps> = ({ data, extended }) => {
  const [state, setState] = useState(true);
  const [sData, setData] = useState(data);
  const handleClick = () => {
    setState((old) => !old);
    if(extended) {
      fetchData().then(setData);
    }
  }
  return (
    <button
      onClick={handleClick}
      className={\`bg-\${state ? "blue" : "red"}-500\`}
    >
      with onClick - {sData}
    </button>
  );
}`
