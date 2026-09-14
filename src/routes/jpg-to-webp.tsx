import { createFileRoute } from "@tanstack/react-router";
import { ToolScreen } from "@/components/tool-screen";
import { toolById } from "@/lib/catalog";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/jpg-to-webp")({
  head: () => seoHead(toolById["jpg-webp"]),
  component: () => <ToolScreen id="jpg-webp" />,
});
