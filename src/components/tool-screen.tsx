import type { ReactNode } from "react";
import { ToolPage } from "@/components/tool-page";
import { MetaGenerator } from "@/components/tools/meta-generator";
import { RobotsGenerator } from "@/components/tools/robots-generator";
import { SitemapGenerator } from "@/components/tools/sitemap-generator";
import { SpeechToText } from "@/components/tools/speech-to-text";
import { TextToSpeech } from "@/components/tools/text-to-speech";
import { WebpConverter } from "@/components/tools/webp-converter";
import { toolById, type ToolId } from "@/lib/catalog";

export function ToolScreen({ id }: { id: ToolId }) {
  const tool = toolById[id];
  let body: ReactNode;
  if (tool.category === "images") {
    body = <WebpConverter accept={tool.accept} fromLabel={tool.fromLabel} />;
  } else if (id === "speech") {
    body = <SpeechToText />;
  } else if (id === "tts") {
    body = <TextToSpeech />;
  } else if (id === "meta") {
    body = <MetaGenerator />;
  } else if (id === "og") {
    body = <MetaGenerator focus="og" />;
  } else if (id === "robots") {
    body = <RobotsGenerator />;
  } else {
    body = <SitemapGenerator />;
  }
  return <ToolPage tool={tool}>{body}</ToolPage>;
}
