import { fetchData } from "../../../utils/fetch-name";

export default async function Solution1() {
  return (
    <>
      <button
        id="click-btn"
        value="blue"
        className="p-2 rounded-md bg-blue-500 text-white"
      >
        with JS event listener - build data
      </button>
      <pre className="text-left mx-auto w-1/2 mt-3">
        {`
            export default function Solution1() {
                const data = await fetchData();
                return (
                  <button id="click-btn"
                    value="blue"
                    className="p-2 rounded-md bg-blue-500 text-white"
                  >
                    with JS event listener - build data
                  </button>
                 );
             }
             ***
             // layout.tsx
             <Script id="btn-loader" strategy="afterInteractive">
             {\`
                 document.querySelector('#click-btn')?.addEventListener('click', (e) => {
                   const state = e.currentTarget.value === "blue" ? "red" : "blue"
                   e.currentTarget.classList = "p-2 rounded-md bg-" + state + "-500";
                   e.currentTarget.value = state;
                 })
               \`}
           </Script>
            `}
      </pre>
    </>
  );
}
