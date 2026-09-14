import { createFileRoute } from "@tanstack/react-router";
import { ToolScreen } from "@/components/tool-screen";
import { toolById } from "@/lib/catalog";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/bmp-to-webp")({
  head: () => seoHead(toolById["bmp-webp"]),
  component: () => <ToolScreen id="bmp-webp" />,
});
