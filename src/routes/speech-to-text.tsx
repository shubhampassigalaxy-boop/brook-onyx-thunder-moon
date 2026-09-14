import { createFileRoute } from "@tanstack/react-router";
import { ToolScreen } from "@/components/tool-screen";
import { toolById } from "@/lib/catalog";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/speech-to-text")({
  head: () => seoHead(toolById.speech),
  component: () => <ToolScreen id="speech" />,
});
