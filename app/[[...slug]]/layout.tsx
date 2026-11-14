import type { ReactNode } from "react";
import "@fontsource-variable/inter/index.css";
import "@fontsource-variable/noto-sans-thai/index.css";
import "../globals.css";

export default async function RootLayout({ children, params }: {
  children: ReactNode;
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  return <html lang={slug?.[0] === "en" ? "en" : "th"} data-theme="light" suppressHydrationWarning>
    <head><script dangerouslySetInnerHTML={{ __html: 'try{document.documentElement.dataset.theme=localStorage.getItem("trd-theme")==="dark"?"dark":"light"}catch{}' }} /></head>
    <body>{children}</body>
  </html>;
}
