import type { NextConfig } from "next";

const staticExport = process.env.TRD_STATIC_EXPORT === "1";
const config: NextConfig = {
  poweredByHeader: false,
  ...(staticExport ? { output: "export", images: { unoptimized: true } } : {}),
};
export default config;
