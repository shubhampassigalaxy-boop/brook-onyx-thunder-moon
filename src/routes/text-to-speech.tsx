import { createFileRoute } from "@tanstack/react-router";
import { ToolScreen } from "@/components/tool-screen";
import { toolById } from "@/lib/catalog";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/text-to-speech")({
  head: () => seoHead(toolById.tts),
  component: () => <ToolScreen id="tts" />,
});
