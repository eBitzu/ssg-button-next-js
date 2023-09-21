/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "SSR click events",
  description: "manage your SSR click events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="https://unpkg.com/htmx.org@1.9.4" />
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
      <body>
        <header className="text-white bg-indigo-700">
          <nav className="flex justify-around items-center mx-auto h-12  md:max-w-3xl">
            <a href={"/"}>
              <span>About me</span>
            </a>
            <a href={"/problem"}>
              <span className="text-red-500">The problem</span>
            </a>
            <a href={"/solution1"}>
              <span className="text-yellow-500">Solution 1</span>
            </a>
            <a href={"/solution2"}>
              <span className="text-green-400">Solution 2</span>
            </a>
            <a href={"/solution3"}>
              <span className="text-green-600">Solution 3</span>
            </a>
          </nav>
        </header>
        <main className="text-center p-4">
          {children}
        </main>
        <div className="bg-blue-500 hidden" />
        <div className="bg-red-500 hidden" />
      </body>
    </html>
  );
}
