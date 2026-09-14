import { Check, Copy } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Fields = {
  title: string;
  description: string;
  keywords: string;
  url: string;
  canonical: string;
  image: string;
  siteName: string;
  ogType: string;
  locale: string;
  twitterCard: string;
  twitterSite: string;
  robots: string;
  author: string;
};

const INITIAL: Fields = {
  title: "Independent bakery in Frome | Stone & Crumb",
  description:
    "Sourdough, seasonal tarts and coffee in Frome, Somerset. Order online for collection across the UK.",
  keywords: "bakery frome, sourdough uk, somerset coffee",
  url: "https://www.stoneandcrumb.co.uk/",
  canonical: "https://www.stoneandcrumb.co.uk/",
  image: "https://www.stoneandcrumb.co.uk/og.jpg",
  siteName: "Stone & Crumb",
  ogType: "website",
  locale: "en_GB",
  twitterCard: "summary_large_image",
  twitterSite: "@stoneandcrumb",
  robots: "index, follow",
  author: "Stone & Crumb",
};

function buildHead(f: Fields) {
  const lines = [
    `<title>${esc(f.title)}</title>`,
    `<meta name="description" content="${esc(f.description)}" />`,
    f.keywords ? `<meta name="keywords" content="${esc(f.keywords)}" />` : "",
    f.robots ? `<meta name="robots" content="${esc(f.robots)}" />` : "",
    f.author ? `<meta name="author" content="${esc(f.author)}" />` : "",
    f.canonical ? `<link rel="canonical" href="${esc(f.canonical)}" />` : "",
    `<meta property="og:type" content="${esc(f.ogType)}" />`,
    `<meta property="og:title" content="${esc(f.title)}" />`,
    `<meta property="og:description" content="${esc(f.description)}" />`,
    f.url ? `<meta property="og:url" content="${esc(f.url)}" />` : "",
    f.siteName ? `<meta property="og:site_name" content="${esc(f.siteName)}" />` : "",
    f.locale ? `<meta property="og:locale" content="${esc(f.locale)}" />` : "",
    f.image ? `<meta property="og:image" content="${esc(f.image)}" />` : "",
    `<meta name="twitter:card" content="${esc(f.twitterCard)}" />`,
    `<meta name="twitter:title" content="${esc(f.title)}" />`,
    `<meta name="twitter:description" content="${esc(f.description)}" />`,
    f.image ? `<meta name="twitter:image" content="${esc(f.image)}" />` : "",
    f.twitterSite ? `<meta name="twitter:site" content="${esc(f.twitterSite)}" />` : "",
  ];
  return lines.filter(Boolean).join("\n");
}

function esc(s: string) {
  return s
    .replace(/&/g, "&" + "amp;")
    .replace(/"/g, "&" + "quot;")
    .replace(/</g, "&" + "lt;");
}

function Field({
  label,
  id,
  value,
  onChange,
  hint,
  multiline,
}: {
  label: string;
  id: keyof Fields;
  value: string;
  onChange: (id: keyof Fields, v: string) => void;
  hint?: string;
  multiline?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      {multiline ? (
        <Textarea
          id={id}
          className="mt-1.5 min-h-24"
          value={value}
          onChange={(e) => onChange(id, e.target.value)}
        />
      ) : (
        <Input id={id} className="mt-1.5" value={value} onChange={(e) => onChange(id, e.target.value)} />
      )}
      {hint ? <p className="mt-1 text-xs text-subtle">{hint}</p> : null}
    </div>
  );
}

export function MetaGenerator({ focus = "all" }: { focus?: "all" | "og" }) {
  const [f, setF] = useState<Fields>(INITIAL);
  const [copied, setCopied] = useState(false);
  const html = useMemo(() => buildHead(f), [f]);
  const set = (id: keyof Fields, v: string) => setF((prev) => ({ ...prev, [id]: v }));
  const host = (() => {
    try {
      return new URL(f.url || "https://example.co.uk").host.replace(/^www\./, "");
    } catch {
      return "example.co.uk";
    }
  })();

  const copy = async () => {
    await navigator.clipboard.writeText(html);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <form
        className="grid min-w-0 gap-4 rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <Field label="Title" id="title" value={f.title} onChange={set} hint={`${f.title.length} characters · aim for 50–60`} />
        <Field
          label="Meta description"
          id="description"
          value={f.description}
          onChange={set}
          multiline
          hint={`${f.description.length} characters · aim for 140–160`}
        />
        {focus === "all" ? (
          <>
            <Field label="Keywords" id="keywords" value={f.keywords} onChange={set} />
            <Field label="Canonical URL" id="canonical" value={f.canonical} onChange={set} />
            <Field label="Robots" id="robots" value={f.robots} onChange={set} />
            <Field label="Author" id="author" value={f.author} onChange={set} />
          </>
        ) : null}
        <Field label="Page URL" id="url" value={f.url} onChange={set} />
        <Field label="Share image URL" id="image" value={f.image} onChange={set} hint="1200 × 630 px works best" />
        <Field label="Site name" id="siteName" value={f.siteName} onChange={set} />
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="ogType">Open Graph type</Label>
            <select
              id="ogType"
              className="mt-1.5 h-11 w-full rounded-md border border-border bg-surface px-3 text-sm"
              value={f.ogType}
              onChange={(e) => set("ogType", e.target.value)}
            >
              <option value="website">website</option>
              <option value="article">article</option>
              <option value="product">product</option>
              <option value="profile">profile</option>
            </select>
          </div>
          <div>
            <Label htmlFor="twitterCard">Twitter / X card</Label>
            <select
              id="twitterCard"
              className="mt-1.5 h-11 w-full rounded-md border border-border bg-surface px-3 text-sm"
              value={f.twitterCard}
              onChange={(e) => set("twitterCard", e.target.value)}
            >
              <option value="summary_large_image">summary_large_image</option>
              <option value="summary">summary</option>
            </select>
          </div>
        </div>
        <Field label="Locale" id="locale" value={f.locale} onChange={set} hint="en_GB for the United Kingdom" />
        <Field label="Twitter / X site" id="twitterSite" value={f.twitterSite} onChange={set} />
      </form>

      <div className="grid min-w-0 gap-4">
        <div className="rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Google SERP preview
          </p>
          <div className="mt-4 max-w-xl">
            <p className="text-sm text-ok">
              {host} › {host.split(".")[0]}
            </p>
            <p className="mt-1 text-xl text-primary">{f.title || "Untitled page"}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {f.description || "Add a description to see how it wraps in search."}
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]">
          <p className="px-5 pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Social card preview
          </p>
          <div className="m-4 overflow-hidden rounded-lg bg-bg shadow-[var(--shadow-border)]">
            <div className="flex aspect-video items-center justify-center bg-surface-2 text-xs text-subtle">
              {f.image ? (
                <img src={f.image} alt="" className="size-full object-cover" onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }} />
              ) : (
                "og:image"
              )}
            </div>
            <div className="px-3 py-2">
              <p className="text-[0.65rem] uppercase tracking-wider text-subtle">{host}</p>
              <p className="truncate text-sm font-medium">{f.title}</p>
              <p className="truncate text-xs text-muted">{f.description}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-ink p-4 text-primary-fg shadow-[var(--shadow-border)] sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-fg/70">
              HTML for {"<head>"}
            </p>
            <Button size="sm" variant="secondary" onClick={() => void copy()}>
              {copied ? <Check /> : <Copy />}
              {copied ? "Copied" : "Copy"}
            </Button>
          </div>
          <pre className="mt-3 max-w-full overflow-x-auto whitespace-pre-wrap break-all font-mono text-xs leading-relaxed text-primary-fg/90">
            {html}
          </pre>
        </div>
      </div>
    </div>
  );
}
