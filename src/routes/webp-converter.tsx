import { createFileRoute } from "@tanstack/react-router";
import { ToolScreen } from "@/components/tool-screen";
import { toolById } from "@/lib/catalog";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/webp-converter")({
  head: () => seoHead(toolById.webp),
  component: () => <ToolScreen id="webp" />,
});
