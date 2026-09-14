import { Download, Plus, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { downloadText } from "@/lib/utils";

type Rule = { id: string; agent: string; allow: string; disallow: string };

const PRESETS: Record<string, { rules: Omit<Rule, "id">[]; sitemap: string; extra: string }> = {
  open: {
    rules: [{ agent: "*", allow: "/", disallow: "" }],
    sitemap: "https://www.example.co.uk/sitemap.xml",
    extra: "",
  },
  standard: {
    rules: [{ agent: "*", allow: "/", disallow: "/admin/\n/cart/\n/checkout/\n/thank-you/" }],
    sitemap: "https://www.example.co.uk/sitemap.xml",
    extra: "",
  },
  wordpress: {
    rules: [{ agent: "*", allow: "/", disallow: "/wp-admin/\n/wp-includes/" }],
    sitemap: "https://www.example.co.uk/sitemap_index.xml",
    extra: "Allow: /wp-admin/admin-ajax.php",
  },
  ai: {
    rules: [
      { agent: "*", allow: "/", disallow: "" },
      { agent: "GPTBot", allow: "", disallow: "/" },
      { agent: "CCBot", allow: "", disallow: "/" },
      { agent: "Google-Extended", allow: "", disallow: "/" },
    ],
    sitemap: "https://www.example.co.uk/sitemap.xml",
    extra: "",
  },
};

function rid() {
  return Math.random().toString(36).slice(2);
}

function lines(block: string) {
  return block
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function RobotsGenerator() {
  const [rules, setRules] = useState<Rule[]>([
    { id: rid(), agent: "*", allow: "/", disallow: "/admin/\n/cart/" },
  ]);
  const [sitemap, setSitemap] = useState("https://www.example.co.uk/sitemap.xml");
  const [extra, setExtra] = useState("");

  const text = useMemo(() => {
    const chunks: string[] = [
      "# Generated with Northline robots.txt generator (UK)",
    ];
    for (const r of rules) {
      chunks.push(`User-agent: ${r.agent.trim() || "*"}`);
      for (const a of lines(r.allow)) chunks.push(`Allow: ${a}`);
      for (const d of lines(r.disallow)) chunks.push(`Disallow: ${d}`);
      chunks.push("");
    }
    if (extra.trim()) {
      chunks.push(extra.trim(), "");
    }
    if (sitemap.trim()) {
      chunks.push(`Sitemap: ${sitemap.trim()}`);
    }
    return chunks.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
  }, [rules, sitemap, extra]);

  const applyPreset = (key: string) => {
    const p = PRESETS[key];
    if (!p) return;
    setRules(p.rules.map((r) => ({ ...r, id: rid() })));
    setSitemap(p.sitemap);
    setExtra(p.extra);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid min-w-0 gap-4">
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="secondary" onClick={() => applyPreset("open")}>
            Allow all
          </Button>
          <Button size="sm" variant="secondary" onClick={() => applyPreset("standard")}>
            Typical UK site
          </Button>
          <Button size="sm" variant="secondary" onClick={() => applyPreset("wordpress")}>
            WordPress
          </Button>
          <Button size="sm" variant="secondary" onClick={() => applyPreset("ai")}>
            Block AI crawlers
          </Button>
        </div>

        {rules.map((r, i) => (
          <div key={r.id} className="rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">User-agent {i + 1}</p>
              {rules.length > 1 ? (
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label="Remove rule"
                  onClick={() => setRules((prev) => prev.filter((x) => x.id !== r.id))}
                >
                  <Trash2 />
                </Button>
              ) : null}
            </div>
            <Label htmlFor={`agent-${r.id}`} className="mt-3 block">
              User-agent
            </Label>
            <Input
              id={`agent-${r.id}`}
              className="mt-1.5"
              value={r.agent}
              onChange={(e) =>
                setRules((prev) => prev.map((x) => (x.id === r.id ? { ...x, agent: e.target.value } : x)))
              }
              placeholder="*"
            />
            <Label htmlFor={`allow-${r.id}`} className="mt-3 block">
              Allow (one path per line)
            </Label>
            <textarea
              id={`allow-${r.id}`}
              className="mt-1.5 min-h-20 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
              value={r.allow}
              onChange={(e) =>
                setRules((prev) => prev.map((x) => (x.id === r.id ? { ...x, allow: e.target.value } : x)))
              }
            />
            <Label htmlFor={`disallow-${r.id}`} className="mt-3 block">
              Disallow (one path per line)
            </Label>
            <textarea
              id={`disallow-${r.id}`}
              className="mt-1.5 min-h-24 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
              value={r.disallow}
              onChange={(e) =>
                setRules((prev) =>
                  prev.map((x) => (x.id === r.id ? { ...x, disallow: e.target.value } : x)),
                )
              }
            />
          </div>
        ))}

        <Button
          variant="outline"
          onClick={() =>
            setRules((prev) => [...prev, { id: rid(), agent: "*", allow: "", disallow: "" }])
          }
        >
          <Plus />
          Add user-agent
        </Button>

        <div className="rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
          <Label htmlFor="sitemap">Sitemap URL</Label>
          <Input
            id="sitemap"
            className="mt-1.5"
            value={sitemap}
            onChange={(e) => setSitemap(e.target.value)}
            placeholder="https://www.example.co.uk/sitemap.xml"
          />
          <Label htmlFor="extra" className="mt-3 block">
            Extra lines (optional)
          </Label>
          <textarea
            id="extra"
            className="mt-1.5 min-h-20 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
            value={extra}
            onChange={(e) => setExtra(e.target.value)}
            placeholder="Crawl-delay: 10"
          />
        </div>
      </div>

      <div className="h-fit min-w-0 rounded-2xl bg-ink p-4 text-primary-fg shadow-[var(--shadow-border)] sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-fg/70">
            robots.txt
          </p>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => downloadText(text, "robots.txt", "text/plain")}
          >
            <Download />
            Download
          </Button>
        </div>
        <pre className="mt-3 max-w-full overflow-x-auto whitespace-pre-wrap break-all font-mono text-xs leading-relaxed text-primary-fg/90">
          {text}
        </pre>
      </div>
    </div>
  );
}
