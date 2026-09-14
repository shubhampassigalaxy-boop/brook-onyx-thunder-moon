import { createFileRoute } from "@tanstack/react-router";
import { ToolScreen } from "@/components/tool-screen";
import { toolById } from "@/lib/catalog";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/png-to-webp")({
  head: () => seoHead(toolById["png-webp"]),
  component: () => <ToolScreen id="png-webp" />,
});
