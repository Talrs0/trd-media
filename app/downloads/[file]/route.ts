import { files, serveDownload } from "@/content/downloads";

export const dynamic = "force-static";
export const dynamicParams = false;
export const generateStaticParams = () => files.map(file => ({ file }));

export async function GET(_request: Request, { params }: { params: Promise<{ file: string }> }) {
  return serveDownload("th", (await params).file);
}
