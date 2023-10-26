import "./globals.css";
import type { Metadata } from "next";

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
      <body>
        <header className="text-white bg-indigo-700">
          <nav className="flex justify-around items-center mx-auto h-12  md:max-w-3xl">
            <a href={"/"}>
              <span>About me</span>
            </a>
            <a href={"/problem"}>
              <span className="text-white">The problem</span>
            </a>
            <a href={"/vanilla-way"}>
              <span className="text-white">Step one</span>
            </a>
            <a href={"/htmx-way"}>
              <span className="text-white">Solution 1</span>
            </a>
            <a href={"/server-actions-way"}>
              <span className="text-white">Solution 2</span>
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
