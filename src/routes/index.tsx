import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { imageTools, primaryTools, toolById } from "@/lib/catalog";
import { homeHead, homeJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: homeHead,
  component: Home,
});

function Home() {
  return (
    <main id="main">
      <JsonLd data={homeJsonLd()} />
      <section className="mx-auto max-w-6xl px-4 pb-8 pt-12 sm:px-6 sm:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Northline · United Kingdom
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium tracking-tight text-fg sm:text-6xl">
          Free browser tools that never leave the machine.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Convert PNG to WebP, dictate in British English, read copy aloud, and
          generate meta tags, robots.txt and XML sitemaps. Built for UK designers,
          marketers and developers — no accounts, no uploads, no watermarks.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          Main tools
        </h2>
        <ul className="mt-4 divide-y divide-border border-y border-border">
          {primaryTools.map((id, i) => {
            const t = toolById[id];
            return (
              <li key={id}>
                <Link
                  to={t.path}
                  className="group flex items-start gap-4 py-5 transition-colors duration-150 hover:bg-surface/80 sm:gap-8"
                >
                  <span className="w-8 font-display text-xl tabular-nums text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2 font-display text-2xl tracking-tight text-fg">
                      {t.name}
                      <ArrowUpRight className="size-4 text-muted transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                    <span className="mt-1 block max-w-xl text-sm leading-relaxed text-muted">
                      {t.short}
                    </span>
                  </span>
                  <span className="hidden text-xs font-medium uppercase tracking-wider text-subtle sm:block">
                    {t.category}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-medium tracking-tight">
          PNG to WebP converter in the UK — and every other format
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Dedicated pages for people searching a specific conversion. Same private
          canvas encoder, unique guidance for PNG, JPG, JPEG, GIF, BMP and SVG.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {imageTools.map((id) => {
            const t = toolById[id];
            return (
              <li key={id}>
                <Link
                  to={t.path}
                  className="block h-full rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
                >
                  <p className="text-sm font-medium text-fg">{t.name}</p>
                  <p className="mt-1 text-sm text-muted">{t.short}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-3">
        <article>
          <h2 className="font-display text-xl font-medium">Private by design</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Images are read with FileReader and drawn to a hidden canvas. Speech uses
            the browser’s own APIs. SEO files are strings you download. Nothing is
            posted to a Northline server.
          </p>
        </article>
        <article>
          <h2 className="font-display text-xl font-medium">Made for UK search</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Each tool has its own URL, British English copy, and structured data —
            so a query like “PNG to WebP converter in UK” can land on a real page,
            not a generic homepage.
          </p>
        </article>
        <article>
          <h2 className="font-display text-xl font-medium">No install, no fee</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Works in Chrome, Edge, Firefox and Safari on a laptop or phone. Speech
            to text needs Chrome, Edge or Safari. Everything else is free to use
            on this site.
          </p>
        </article>
      </section>
    </main>
  );
}
