import { createFileRoute } from "@tanstack/react-router";
import { ToolScreen } from "@/components/tool-screen";
import { toolById } from "@/lib/catalog";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/jpeg-to-webp")({
  head: () => seoHead(toolById["jpeg-webp"]),
  component: () => <ToolScreen id="jpeg-webp" />,
});
