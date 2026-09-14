import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-7", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" className="fill-primary" />
      <path
        d="M9 23V9h3.2l7.1 9.4V9H23v14h-3.2l-7.1-9.4V23H9z"
        className="fill-primary-fg"
      />
      <path d="M7 25h18" className="stroke-primary-fg" strokeWidth="1.5" />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Mark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg tracking-tight text-fg">Northline</span>
        {!compact ? (
          <span className="mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-muted">
            United Kingdom
          </span>
        ) : null}
      </span>
    </Link>
  );
}
