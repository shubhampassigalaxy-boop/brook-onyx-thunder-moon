import { Download, Plus, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { downloadText } from "@/lib/utils";

type Page = {
  id: string;
  path: string;
  lastmod: string;
  changefreq: string;
  priority: string;
};

const FREQS = ["", "always", "hourly", "daily", "weekly", "monthly", "yearly", "never"];

function rid() {
  return Math.random().toString(36).slice(2);
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function joinUrl(base: string, path: string) {
  const origin = base.replace(/\/+$/, "");
  if (!path || path === "/") return `${origin}/`;
  if (/^https?:\/\//i.test(path)) return path;
  return `${origin}/${path.replace(/^\/+/, "")}`;
}

function xmlEscape(s: string) {
  return s
    .replace(/&/g, "&" + "amp;")
    .replace(/</g, "&" + "lt;")
    .replace(/>/g, "&" + "gt;")
    .replace(/"/g, "&" + "quot;");
}

export function SitemapGenerator() {
  const [base, setBase] = useState("https://www.example.co.uk");
  const [pages, setPages] = useState<Page[]>([
    { id: rid(), path: "/", lastmod: today(), changefreq: "weekly", priority: "1.0" },
    { id: rid(), path: "/about", lastmod: today(), changefreq: "monthly", priority: "0.8" },
    { id: rid(), path: "/contact", lastmod: today(), changefreq: "monthly", priority: "0.7" },
    { id: rid(), path: "/services", lastmod: today(), changefreq: "weekly", priority: "0.9" },
  ]);
  const [bulk, setBulk] = useState("");

  const xml = useMemo(() => {
    const urls = pages
      .filter((p) => p.path.trim())
      .map((p) => {
        const loc = xmlEscape(joinUrl(base || "https://example.co.uk", p.path.trim()));
        const bits = ["  <url>", `    <loc>${loc}</loc>`];
        if (p.lastmod) bits.push(`    <lastmod>${xmlEscape(p.lastmod)}</lastmod>`);
        if (p.changefreq) bits.push(`    <changefreq>${xmlEscape(p.changefreq)}</changefreq>`);
        if (p.priority) bits.push(`    <priority>${xmlEscape(p.priority)}</priority>`);
        bits.push("  </url>");
        return bits.join("\n");
      });
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;
  }, [base, pages]);

  const addBulk = () => {
    const extras = bulk
      .split(/[\n,]+/)
      .map((s) => s.trim())
      .filter(Boolean)
      .map((path) => ({
        id: rid(),
        path,
        lastmod: today(),
        changefreq: "monthly",
        priority: "0.6",
      }));
    if (!extras.length) return;
    setPages((prev) => [...prev, ...extras]);
    setBulk("");
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div className="grid min-w-0 gap-4">
        <div className="rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
          <Label htmlFor="base">Site origin</Label>
          <Input
            id="base"
            className="mt-1.5"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            placeholder="https://www.example.co.uk"
          />
          <p className="mt-1.5 text-xs text-subtle">
            Use your live https:// address, including www if you use it.
          </p>
        </div>

        <div className="grid gap-3">
          {pages.map((p) => (
            <div key={p.id} className="rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:p-4">
              <div className="flex items-start gap-2">
                <div className="min-w-0 flex-1">
                  <Label htmlFor={`path-${p.id}`}>Path or URL</Label>
                  <Input
                    id={`path-${p.id}`}
                    className="mt-1.5"
                    value={p.path}
                    onChange={(e) =>
                      setPages((prev) =>
                        prev.map((x) => (x.id === p.id ? { ...x, path: e.target.value } : x)),
                      )
                    }
                    placeholder="/about"
                  />
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="mt-6"
                  aria-label="Remove URL"
                  onClick={() => setPages((prev) => prev.filter((x) => x.id !== p.id))}
                >
                  <Trash2 />
                </Button>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                <div>
                  <Label htmlFor={`mod-${p.id}`}>lastmod</Label>
                  <Input
                    id={`mod-${p.id}`}
                    className="mt-1.5"
                    type="date"
                    value={p.lastmod}
                    onChange={(e) =>
                      setPages((prev) =>
                        prev.map((x) => (x.id === p.id ? { ...x, lastmod: e.target.value } : x)),
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor={`freq-${p.id}`}>changefreq</Label>
                  <select
                    id={`freq-${p.id}`}
                    className="mt-1.5 h-11 w-full rounded-md border border-border bg-surface px-2 text-sm"
                    value={p.changefreq}
                    onChange={(e) =>
                      setPages((prev) =>
                        prev.map((x) => (x.id === p.id ? { ...x, changefreq: e.target.value } : x)),
                      )
                    }
                  >
                    {FREQS.map((f) => (
                      <option key={f} value={f}>
                        {f || "—"}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor={`pri-${p.id}`}>priority</Label>
                  <Input
                    id={`pri-${p.id}`}
                    className="mt-1.5"
                    value={p.priority}
                    onChange={(e) =>
                      setPages((prev) =>
                        prev.map((x) => (x.id === p.id ? { ...x, priority: e.target.value } : x)),
                      )
                    }
                  />
                </div>
              </div>
            </div>
          ))}
          <Button
            variant="outline"
            onClick={() =>
              setPages((prev) => [
                ...prev,
                { id: rid(), path: "/", lastmod: today(), changefreq: "monthly", priority: "0.5" },
              ])
            }
          >
            <Plus />
            Add URL
          </Button>
        </div>

        <div className="rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
          <Label htmlFor="bulk">Paste extra paths</Label>
          <textarea
            id="bulk"
            className="mt-1.5 min-h-24 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
            value={bulk}
            onChange={(e) => setBulk(e.target.value)}
            placeholder={"/blog\n/pricing\n/faq"}
          />
          <Button className="mt-3" variant="secondary" size="sm" onClick={addBulk}>
            Add from list
          </Button>
        </div>
      </div>

      <div className="h-fit min-w-0 rounded-2xl bg-ink p-4 text-primary-fg shadow-[var(--shadow-border)] sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-fg/70">
            sitemap.xml · {pages.filter((p) => p.path.trim()).length} URLs
          </p>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => downloadText(xml, "sitemap.xml", "application/xml")}
          >
            <Download />
            Download
          </Button>
        </div>
        <pre className="mt-3 max-h-[32rem] max-w-full overflow-auto whitespace-pre-wrap break-all font-mono text-xs leading-relaxed text-primary-fg/90">
          {xml}
        </pre>
      </div>
    </div>
  );
}
