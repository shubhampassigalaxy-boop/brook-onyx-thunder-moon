import { createFileRoute } from "@tanstack/react-router";
import { ToolScreen } from "@/components/tool-screen";
import { toolById } from "@/lib/catalog";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/open-graph-generator")({
  head: () => seoHead(toolById.og),
  component: () => <ToolScreen id="og" />,
});
