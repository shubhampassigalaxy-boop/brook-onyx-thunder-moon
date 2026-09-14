import { createFileRoute } from "@tanstack/react-router";
import { ToolScreen } from "@/components/tool-screen";
import { toolById } from "@/lib/catalog";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/meta-tag-generator")({
  head: () => seoHead(toolById.meta),
  component: () => <ToolScreen id="meta" />,
});
