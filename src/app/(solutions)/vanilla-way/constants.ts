export const VanillaPre = `
// fix with external JS
export default function Solution1() {
  const data = await fetchData();
  return (<>
    <button id="click-btn"
      value="blue"
      className="bg-blue-500"
    >
      with JS event listener - {data}
    </button>
    <pre/>
  </>);
 }
 ***
 // layout.tsx
 <Script id="btn-loader" strategy="afterInteractive">
 {\`
   const el = document.querySelector('#click-btn');
   el?.addEventListener('click', (e) => {
     const state = e.currentTarget.value === "blue" ? "red" : "blue";
     e.currentTarget.classList = "bg-" + state + "-500";
     e.currentTarget.value = state;
     fetch('/api').then((res) => res.text()).then((val) => {
       el.innerText = "with JS event listener - " + val;
     }).catch((er) => {
       console.log('failed', er);
     })
   })
 \`}
</Script>`
