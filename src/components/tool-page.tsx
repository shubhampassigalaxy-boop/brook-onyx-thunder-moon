import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/json-ld";
import { relatedTools, type Tool } from "@/lib/catalog";
import { breadcrumbJsonLd, faqJsonLd, howToJsonLd, softwareJsonLd } from "@/lib/seo";

export function ToolPage({ tool, children }: { tool: Tool; children: ReactNode }) {
  const related = relatedTools(tool.id);

  return (
    <main id="main" className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <JsonLd data={softwareJsonLd(tool)} />
      <JsonLd data={faqJsonLd(tool)} />
      <JsonLd data={howToJsonLd(tool)} />
      <JsonLd data={breadcrumbJsonLd(tool)} />

      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-sm text-muted">
        <Link to="/" className="hover:text-fg">
          Home
        </Link>
        <ChevronRight className="size-3.5" aria-hidden="true" />
        <span className="text-fg">{tool.name}</span>
      </nav>

      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          Free UK tool · in-browser
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">
          {tool.h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{tool.lead}</p>
      </header>

      <section className="mt-8">{children}</section>

      <section className="mt-14 max-w-3xl">
        <h2 className="font-display text-2xl font-medium tracking-tight">
          {tool.name} for the United Kingdom
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted">{tool.intro}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-medium tracking-tight">{tool.howToTitle}</h2>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2">
          {tool.steps.map((step, i) => (
            <li
              key={step}
              className="flex gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]"
            >
              <span className="font-display text-xl tabular-nums text-primary">{i + 1}</span>
              <span className="text-sm leading-relaxed text-fg">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="font-display text-2xl font-medium tracking-tight">
          Questions about {tool.name}
        </h2>
        <div className="mt-4 divide-y divide-border border-y border-border">
          {tool.faqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none text-base font-medium text-fg marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {f.q}
                  <span className="mt-0.5 text-muted transition-transform duration-150 group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-2 pr-8 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {related.length ? (
        <section className="mt-12">
          <h2 className="font-display text-2xl font-medium tracking-tight">Related tools</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <li key={r.id}>
                <Link
                  to={r.path}
                  className="block rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
                >
                  <p className="text-sm font-medium text-fg">{r.name}</p>
                  <p className="mt-1 text-sm text-muted">{r.short}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
