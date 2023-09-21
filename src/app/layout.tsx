/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
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
            document.querySelector('#click-btn')?.addEventListener('click', (e) => {
              const state = e.currentTarget.value === "blue" ? "red" : "blue"
              e.currentTarget.classList = "p-2 rounded-md bg-" + state + "-500";
              e.currentTarget.value = state;
            })
          `}
      </Script>
      <body>
        <header className="text-white bg-indigo-700">
          <nav className="flex justify-around items-center mx-auto h-12  md:max-w-3xl">
            <Link href={"/"}>
              <span>About me</span>
            </Link>
            <Link href={"/problem"}>
              <span>The problem</span>
            </Link>
            <Link href={"/solution1"} prefetch={false}>
              <span>Solution 1</span>
            </Link>
            <Link href={"/solution2"} prefetch={false}>
              <span>Solution 2</span>
            </Link>
            <Link href={"/solution3"} prefetch={false}>
              <span>Solution 3</span>
            </Link>
            <Link href={"/all"} prefetch={false}>
              <span>All Solutions</span>
            </Link>
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
