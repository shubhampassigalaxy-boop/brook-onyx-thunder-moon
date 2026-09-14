import { createFileRoute } from "@tanstack/react-router";
import { ToolScreen } from "@/components/tool-screen";
import { toolById } from "@/lib/catalog";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/xml-sitemap-generator")({
  head: () => seoHead(toolById.sitemap),
  component: () => <ToolScreen id="sitemap" />,
});
