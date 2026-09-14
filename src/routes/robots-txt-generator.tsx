import { createFileRoute } from "@tanstack/react-router";
import { ToolScreen } from "@/components/tool-screen";
import { toolById } from "@/lib/catalog";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/robots-txt-generator")({
  head: () => seoHead(toolById.robots),
  component: () => <ToolScreen id="robots" />,
});
