import { createFileRoute } from "@tanstack/react-router";
import { ToolScreen } from "@/components/tool-screen";
import { toolById } from "@/lib/catalog";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/svg-to-webp")({
  head: () => seoHead(toolById["svg-webp"]),
  component: () => <ToolScreen id="svg-webp" />,
});
