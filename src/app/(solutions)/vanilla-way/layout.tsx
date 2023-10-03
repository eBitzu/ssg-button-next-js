import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Script id="btn-loader" strategy="afterInteractive">
        {`
            const el = document.querySelector('#click-btn');
            el?.addEventListener('click', (e) => {
              const state = e.currentTarget.value === "blue" ? "red" : "blue";
              e.currentTarget.classList = "p-2 rounded-md bg-" + state + "-500";
              e.currentTarget.value = state;
              fetch('/api').then((res) => res.text()).then((val) => {
                el.innerText = "with JS event listener - " + val;
              }).catch((er) => {
                console.log('failed', er);
              })
            })
          `}
      </Script>
      {children}
    </>
  );
}
