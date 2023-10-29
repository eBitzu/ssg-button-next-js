export const inlinePre = `
// we have a button showing data from BE and label from CMS
export default async function PageDefault() {
  const data = await fetchData();
  const title = await contentfulClient.getEntry(ButtonTitleEntryId);
  const state = true;
  return (
    <>
      <button title={title.fields.ctaLabel as string}
        className={\`bg-\${state ? "blue" : "red"}-500\`}
      >
        with onClick - {data}
      </button>
      <pre />
    </>
  );
}`
