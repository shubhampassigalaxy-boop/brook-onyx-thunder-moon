import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Logo } from "@/components/logo";
import { imageTools, toolById, tools } from "@/lib/catalog";

export function SiteFooter() {
  const voice = [toolById.speech, toolById.tts];
  const seo = [toolById.meta, toolById.og, toolById.robots, toolById.sitemap];

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Free in-browser tools for people and businesses in the United Kingdom.
            Files stay on your device.
          </p>
        </div>
        <FooterCol title="Convert">
          {imageTools.map((id) => (
            <Link key={id} to={toolById[id].path} className="hover:text-fg">
              {toolById[id].name}
            </Link>
          ))}
        </FooterCol>
        <FooterCol title="Voice">
          {voice.map((t) => (
            <Link key={t.id} to={t.path} className="hover:text-fg">
              {t.name}
            </Link>
          ))}
        </FooterCol>
        <FooterCol title="SEO">
          {seo.map((t) => (
            <Link key={t.id} to={t.path} className="hover:text-fg">
              {t.name}
            </Link>
          ))}
        </FooterCol>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Northline. Tools run entirely in your browser.</p>
          <p>{tools.length} free tools · en-GB · no account required</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{title}</p>
      <div className="mt-3 flex flex-col gap-2 text-sm text-muted">{children}</div>
    </div>
  );
}
