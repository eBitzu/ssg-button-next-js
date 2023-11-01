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
export const ClientButton: FC<ClientButtonProps> = ({ data, title }) => {
  const [state, setState] = useState(true);
  const [sData, setData] = useState(data);
  const handleClick = () => {
    setState((old) => !old);
    fetchData().then(setData);
  }
  return (
    <button
      onClick={handleClick}
      title={title}
      className={\`bg-\${state ? "blue" : "red"}-500\`}
    >
      with onClick - {sData}
    </button>
  );
}`
