import Script from "next/script";

export default function HTMXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script src="https://unpkg.com/htmx.org@1.9.4/dist/htmx.min.js" />
      {children}
    </>
  );
}
