import { createFileRoute } from "@tanstack/react-router";
import { ToolScreen } from "@/components/tool-screen";
import { toolById } from "@/lib/catalog";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/gif-to-webp")({
  head: () => seoHead(toolById["gif-webp"]),
  component: () => <ToolScreen id="gif-webp" />,
});
