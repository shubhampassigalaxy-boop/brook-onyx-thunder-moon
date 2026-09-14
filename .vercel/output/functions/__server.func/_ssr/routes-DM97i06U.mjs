import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { c as imageTools, d as toolById, i as homeJsonLd, l as primaryTools } from "./router-Cluf-vbd.mjs";
import { t as JsonLd } from "./json-ld-2dnvi90N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DM97i06U.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: homeJsonLd() }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 pb-8 pt-12 sm:px-6 sm:pt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary",
						children: "Northline · United Kingdom"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl font-display text-4xl font-medium tracking-tight text-fg sm:text-6xl",
						children: "Free browser tools that never leave the machine."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-lg leading-relaxed text-muted",
						children: "Convert PNG to WebP, dictate in British English, read copy aloud, and generate meta tags, robots.txt and XML sitemaps. Built for UK designers, marketers and developers — no accounts, no uploads, no watermarks."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-semibold uppercase tracking-[0.16em] text-muted",
					children: "Main tools"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-border border-y border-border",
					children: primaryTools.map((id, i) => {
						const t = toolById[id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: t.path,
							className: "group flex items-start gap-4 py-5 transition-colors duration-150 hover:bg-surface/80 sm:gap-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-8 font-display text-xl tabular-nums text-primary",
									children: String(i + 1).padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2 font-display text-2xl tracking-tight text-fg",
										children: [t.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-muted transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block max-w-xl text-sm leading-relaxed text-muted",
										children: t.short
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden text-xs font-medium uppercase tracking-wider text-subtle sm:block",
									children: t.category
								})
							]
						}) }, id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto mt-14 max-w-6xl px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium tracking-tight",
						children: "PNG to WebP converter in the UK — and every other format"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
						children: "Dedicated pages for people searching a specific conversion. Same private canvas encoder, unique guidance for PNG, JPG, JPEG, GIF, BMP and SVG."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
						children: imageTools.map((id) => {
							const t = toolById[id];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: t.path,
								className: "block h-full rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-fg",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: t.short
								})]
							}) }, id);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto mt-16 grid max-w-6xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-medium",
						children: "Private by design"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: "Images are read with FileReader and drawn to a hidden canvas. Speech uses the browser’s own APIs. SEO files are strings you download. Nothing is posted to a Northline server."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-medium",
						children: "Made for UK search"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: "Each tool has its own URL, British English copy, and structured data — so a query like “PNG to WebP converter in UK” can land on a real page, not a generic homepage."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-medium",
						children: "No install, no fee"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: "Works in Chrome, Edge, Firefox and Safari on a laptop or phone. Speech to text needs Chrome, Edge or Safari. Everything else is free to use on this site."
					})] })
				]
			})
		]
	});
}
//#endregion
export { Home as component };
