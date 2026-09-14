import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { tools, type ToolId } from "@/lib/catalog";
import { cn } from "@/lib/utils";

const NAV: { id: ToolId; label: string }[] = [
  { id: "webp", label: "WebP" },
  { id: "speech", label: "Dictate" },
  { id: "tts", label: "Reader" },
  { id: "meta", label: "Meta tags" },
  { id: "robots", label: "robots.txt" },
  { id: "sitemap", label: "Sitemap" },
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo compact />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const tool = tools.find((t) => t.id === item.id)!;
            const active =
              pathname === tool.path ||
              (item.id === "webp" && pathname.includes("webp")) ||
              (item.id === "meta" && pathname.includes("open-graph"));
            return (
              <Link
                key={item.id}
                to={tool.path}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150",
                  active ? "bg-surface-2 text-fg" : "text-muted hover:bg-surface-2 hover:text-fg",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open ? (
        <nav
          className="border-t border-border bg-bg px-4 py-3 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {NAV.map((item) => {
              const tool = tools.find((t) => t.id === item.id)!;
              return (
                <li key={item.id}>
                  <Link
                    to={tool.path}
                    className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-fg hover:bg-surface-2"
                    onClick={() => setOpen(false)}
                  >
                    {tool.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
