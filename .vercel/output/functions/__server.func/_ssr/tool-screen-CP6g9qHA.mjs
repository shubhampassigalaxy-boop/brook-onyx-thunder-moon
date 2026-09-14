import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Plus, c as Mic, d as ImagePlus, f as Download, h as Check, i as Square, m as ChevronRight, o as Play, p as Copy, r as Trash2, s as Pause, u as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as howToJsonLd, d as toolById, f as cn, g as replaceExt, h as formatBytes, m as downloadText, n as breadcrumbJsonLd, o as softwareJsonLd, p as downloadBlob, r as faqJsonLd, s as Button, u as relatedTools } from "./router-Cluf-vbd.mjs";
import { t as JsonLd } from "./json-ld-2dnvi90N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tool-screen-CP6g9qHA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ToolPage({ tool, children }) {
	const related = relatedTools(tool.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: softwareJsonLd(tool) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: faqJsonLd(tool) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: howToJsonLd(tool) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: breadcrumbJsonLd(tool) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Breadcrumb",
				className: "mb-6 flex flex-wrap items-center gap-1 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-fg",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
						className: "size-3.5",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-fg",
						children: tool.name
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.16em] text-primary",
						children: "Free UK tool · in-browser"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl",
						children: tool.h1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed text-muted",
						children: tool.lead
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-8",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14 max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-2xl font-medium tracking-tight",
					children: [tool.name, " for the United Kingdom"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base leading-relaxed text-muted",
					children: tool.intro
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium tracking-tight",
					children: tool.howToTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-5 grid gap-3 sm:grid-cols-2",
					children: tool.steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl tabular-nums text-primary",
							children: i + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm leading-relaxed text-fg",
							children: step
						})]
					}, step))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-2xl font-medium tracking-tight",
					children: ["Questions about ", tool.name]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 divide-y divide-border border-y border-border",
					children: tool.faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
							className: "cursor-pointer list-none text-base font-medium text-fg marker:content-none [&::-webkit-details-marker]:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-start justify-between gap-4",
								children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 text-muted transition-transform duration-150 group-open:rotate-45",
									children: "+"
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 pr-8 text-sm leading-relaxed text-muted",
							children: f.a
						})]
					}, f.q))
				})]
			}),
			related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium tracking-tight",
					children: "Related tools"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: r.path,
						className: "block rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-fg",
							children: r.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: r.short
						})]
					}) }, r.id))
				})]
			}) : null
		]
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	type,
	className: cn("flex h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg shadow-sm transition-[box-shadow,border-color] duration-150 placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
	ref,
	...props
}));
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
	ref,
	className: cn("text-sm font-medium text-fg", className),
	...props
}));
Label.displayName = "Label";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
	className: cn("flex min-h-32 w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-fg shadow-sm transition-[box-shadow,border-color] duration-150 placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
	ref,
	...props
}));
Textarea.displayName = "Textarea";
var INITIAL = {
	title: "Independent bakery in Frome | Stone & Crumb",
	description: "Sourdough, seasonal tarts and coffee in Frome, Somerset. Order online for collection across the UK.",
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
	author: "Stone & Crumb"
};
function buildHead(f) {
	return [
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
		f.twitterSite ? `<meta name="twitter:site" content="${esc(f.twitterSite)}" />` : ""
	].filter(Boolean).join("\n");
}
function esc(s) {
	return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}
function Field({ label, id, value, onChange, hint, multiline }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: id,
			children: label
		}),
		multiline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
			id,
			className: "mt-1.5 min-h-24",
			value,
			onChange: (e) => onChange(id, e.target.value)
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id,
			className: "mt-1.5",
			value,
			onChange: (e) => onChange(id, e.target.value)
		}),
		hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-subtle",
			children: hint
		}) : null
	] });
}
function MetaGenerator({ focus = "all" }) {
	const [f, setF] = (0, import_react.useState)(INITIAL);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const html = (0, import_react.useMemo)(() => buildHead(f), [f]);
	const set = (id, v) => setF((prev) => ({
		...prev,
		[id]: v
	}));
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "grid min-w-0 gap-4 rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
			onSubmit: (e) => e.preventDefault(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Title",
					id: "title",
					value: f.title,
					onChange: set,
					hint: `${f.title.length} characters · aim for 50–60`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Meta description",
					id: "description",
					value: f.description,
					onChange: set,
					multiline: true,
					hint: `${f.description.length} characters · aim for 140–160`
				}),
				focus === "all" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Keywords",
						id: "keywords",
						value: f.keywords,
						onChange: set
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Canonical URL",
						id: "canonical",
						value: f.canonical,
						onChange: set
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Robots",
						id: "robots",
						value: f.robots,
						onChange: set
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Author",
						id: "author",
						value: f.author,
						onChange: set
					})
				] }) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Page URL",
					id: "url",
					value: f.url,
					onChange: set
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Share image URL",
					id: "image",
					value: f.image,
					onChange: set,
					hint: "1200 × 630 px works best"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Site name",
					id: "siteName",
					value: f.siteName,
					onChange: set
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "ogType",
						children: "Open Graph type"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "ogType",
						className: "mt-1.5 h-11 w-full rounded-md border border-border bg-surface px-3 text-sm",
						value: f.ogType,
						onChange: (e) => set("ogType", e.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "website",
								children: "website"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "article",
								children: "article"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "product",
								children: "product"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "profile",
								children: "profile"
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "twitterCard",
						children: "Twitter / X card"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "twitterCard",
						className: "mt-1.5 h-11 w-full rounded-md border border-border bg-surface px-3 text-sm",
						value: f.twitterCard,
						onChange: (e) => set("twitterCard", e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "summary_large_image",
							children: "summary_large_image"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "summary",
							children: "summary"
						})]
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Locale",
					id: "locale",
					value: f.locale,
					onChange: set,
					hint: "en_GB for the United Kingdom"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Twitter / X site",
					id: "twitterSite",
					value: f.twitterSite,
					onChange: set
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-w-0 gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.14em] text-muted",
						children: "Google SERP preview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-ok",
								children: [
									host,
									" › ",
									host.split(".")[0]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xl text-primary",
								children: f.title || "Untitled page"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted",
								children: f.description || "Add a description to see how it wraps in search."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-5 pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted",
						children: "Social card preview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "m-4 overflow-hidden rounded-lg bg-bg shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex aspect-video items-center justify-center bg-surface-2 text-xs text-subtle",
							children: f.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: f.image,
								alt: "",
								className: "size-full object-cover",
								onError: (e) => {
									e.currentTarget.style.display = "none";
								}
							}) : "og:image"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-3 py-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.65rem] uppercase tracking-wider text-subtle",
									children: host
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-medium",
									children: f.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-xs text-muted",
									children: f.description
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-ink p-4 text-primary-fg shadow-[var(--shadow-border)] sm:p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.14em] text-primary-fg/70",
							children: ["HTML for ", "<head>"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => void copy(),
							children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), copied ? "Copied" : "Copy"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-3 max-w-full overflow-x-auto whitespace-pre-wrap break-all font-mono text-xs leading-relaxed text-primary-fg/90",
						children: html
					})]
				})
			]
		})]
	});
}
var PRESETS = {
	open: {
		rules: [{
			agent: "*",
			allow: "/",
			disallow: ""
		}],
		sitemap: "https://www.example.co.uk/sitemap.xml",
		extra: ""
	},
	standard: {
		rules: [{
			agent: "*",
			allow: "/",
			disallow: "/admin/\n/cart/\n/checkout/\n/thank-you/"
		}],
		sitemap: "https://www.example.co.uk/sitemap.xml",
		extra: ""
	},
	wordpress: {
		rules: [{
			agent: "*",
			allow: "/",
			disallow: "/wp-admin/\n/wp-includes/"
		}],
		sitemap: "https://www.example.co.uk/sitemap_index.xml",
		extra: "Allow: /wp-admin/admin-ajax.php"
	},
	ai: {
		rules: [
			{
				agent: "*",
				allow: "/",
				disallow: ""
			},
			{
				agent: "GPTBot",
				allow: "",
				disallow: "/"
			},
			{
				agent: "CCBot",
				allow: "",
				disallow: "/"
			},
			{
				agent: "Google-Extended",
				allow: "",
				disallow: "/"
			}
		],
		sitemap: "https://www.example.co.uk/sitemap.xml",
		extra: ""
	}
};
function rid$1() {
	return Math.random().toString(36).slice(2);
}
function lines(block) {
	return block.split("\n").map((s) => s.trim()).filter(Boolean);
}
function RobotsGenerator() {
	const [rules, setRules] = (0, import_react.useState)([{
		id: rid$1(),
		agent: "*",
		allow: "/",
		disallow: "/admin/\n/cart/"
	}]);
	const [sitemap, setSitemap] = (0, import_react.useState)("https://www.example.co.uk/sitemap.xml");
	const [extra, setExtra] = (0, import_react.useState)("");
	const text = (0, import_react.useMemo)(() => {
		const chunks = ["# Generated with Northline robots.txt generator (UK)"];
		for (const r of rules) {
			chunks.push(`User-agent: ${r.agent.trim() || "*"}`);
			for (const a of lines(r.allow)) chunks.push(`Allow: ${a}`);
			for (const d of lines(r.disallow)) chunks.push(`Disallow: ${d}`);
			chunks.push("");
		}
		if (extra.trim()) chunks.push(extra.trim(), "");
		if (sitemap.trim()) chunks.push(`Sitemap: ${sitemap.trim()}`);
		return chunks.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
	}, [
		rules,
		sitemap,
		extra
	]);
	const applyPreset = (key) => {
		const p = PRESETS[key];
		if (!p) return;
		setRules(p.rules.map((r) => ({
			...r,
			id: rid$1()
		})));
		setSitemap(p.sitemap);
		setExtra(p.extra);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-w-0 gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => applyPreset("open"),
							children: "Allow all"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => applyPreset("standard"),
							children: "Typical UK site"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => applyPreset("wordpress"),
							children: "WordPress"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => applyPreset("ai"),
							children: "Block AI crawlers"
						})
					]
				}),
				rules.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-medium",
								children: ["User-agent ", i + 1]
							}), rules.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: "ghost",
								"aria-label": "Remove rule",
								onClick: () => setRules((prev) => prev.filter((x) => x.id !== r.id)),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: `agent-${r.id}`,
							className: "mt-3 block",
							children: "User-agent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: `agent-${r.id}`,
							className: "mt-1.5",
							value: r.agent,
							onChange: (e) => setRules((prev) => prev.map((x) => x.id === r.id ? {
								...x,
								agent: e.target.value
							} : x)),
							placeholder: "*"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: `allow-${r.id}`,
							className: "mt-3 block",
							children: "Allow (one path per line)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: `allow-${r.id}`,
							className: "mt-1.5 min-h-20 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm",
							value: r.allow,
							onChange: (e) => setRules((prev) => prev.map((x) => x.id === r.id ? {
								...x,
								allow: e.target.value
							} : x))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: `disallow-${r.id}`,
							className: "mt-3 block",
							children: "Disallow (one path per line)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: `disallow-${r.id}`,
							className: "mt-1.5 min-h-24 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm",
							value: r.disallow,
							onChange: (e) => setRules((prev) => prev.map((x) => x.id === r.id ? {
								...x,
								disallow: e.target.value
							} : x))
						})
					]
				}, r.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => setRules((prev) => [...prev, {
						id: rid$1(),
						agent: "*",
						allow: "",
						disallow: ""
					}]),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Add user-agent"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "sitemap",
							children: "Sitemap URL"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "sitemap",
							className: "mt-1.5",
							value: sitemap,
							onChange: (e) => setSitemap(e.target.value),
							placeholder: "https://www.example.co.uk/sitemap.xml"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "extra",
							className: "mt-3 block",
							children: "Extra lines (optional)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "extra",
							className: "mt-1.5 min-h-20 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm",
							value: extra,
							onChange: (e) => setExtra(e.target.value),
							placeholder: "Crawl-delay: 10"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "h-fit min-w-0 rounded-2xl bg-ink p-4 text-primary-fg shadow-[var(--shadow-border)] sm:p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.14em] text-primary-fg/70",
					children: "robots.txt"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: "secondary",
					onClick: () => downloadText(text, "robots.txt", "text/plain"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Download"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "mt-3 max-w-full overflow-x-auto whitespace-pre-wrap break-all font-mono text-xs leading-relaxed text-primary-fg/90",
				children: text
			})]
		})]
	});
}
var FREQS = [
	"",
	"always",
	"hourly",
	"daily",
	"weekly",
	"monthly",
	"yearly",
	"never"
];
function rid() {
	return Math.random().toString(36).slice(2);
}
function today() {
	return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function joinUrl(base, path) {
	const origin = base.replace(/\/+$/, "");
	if (!path || path === "/") return `${origin}/`;
	if (/^https?:\/\//i.test(path)) return path;
	return `${origin}/${path.replace(/^\/+/, "")}`;
}
function xmlEscape(s) {
	return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function SitemapGenerator() {
	const [base, setBase] = (0, import_react.useState)("https://www.example.co.uk");
	const [pages, setPages] = (0, import_react.useState)([
		{
			id: rid(),
			path: "/",
			lastmod: today(),
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			id: rid(),
			path: "/about",
			lastmod: today(),
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			id: rid(),
			path: "/contact",
			lastmod: today(),
			changefreq: "monthly",
			priority: "0.7"
		},
		{
			id: rid(),
			path: "/services",
			lastmod: today(),
			changefreq: "weekly",
			priority: "0.9"
		}
	]);
	const [bulk, setBulk] = (0, import_react.useState)("");
	const xml = (0, import_react.useMemo)(() => {
		return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.filter((p) => p.path.trim()).map((p) => {
			const bits = ["  <url>", `    <loc>${xmlEscape(joinUrl(base || "https://example.co.uk", p.path.trim()))}</loc>`];
			if (p.lastmod) bits.push(`    <lastmod>${xmlEscape(p.lastmod)}</lastmod>`);
			if (p.changefreq) bits.push(`    <changefreq>${xmlEscape(p.changefreq)}</changefreq>`);
			if (p.priority) bits.push(`    <priority>${xmlEscape(p.priority)}</priority>`);
			bits.push("  </url>");
			return bits.join("\n");
		}).join("\n")}
</urlset>
`;
	}, [base, pages]);
	const addBulk = () => {
		const extras = bulk.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean).map((path) => ({
			id: rid(),
			path,
			lastmod: today(),
			changefreq: "monthly",
			priority: "0.6"
		}));
		if (!extras.length) return;
		setPages((prev) => [...prev, ...extras]);
		setBulk("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-w-0 gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "base",
							children: "Site origin"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "base",
							className: "mt-1.5",
							value: base,
							onChange: (e) => setBase(e.target.value),
							placeholder: "https://www.example.co.uk"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-xs text-subtle",
							children: "Use your live https:// address, including www if you use it."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [pages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: `path-${p.id}`,
									children: "Path or URL"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: `path-${p.id}`,
									className: "mt-1.5",
									value: p.path,
									onChange: (e) => setPages((prev) => prev.map((x) => x.id === p.id ? {
										...x,
										path: e.target.value
									} : x)),
									placeholder: "/about"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: "ghost",
								className: "mt-6",
								"aria-label": "Remove URL",
								onClick: () => setPages((prev) => prev.filter((x) => x.id !== p.id)),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 grid gap-3 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: `mod-${p.id}`,
									children: "lastmod"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: `mod-${p.id}`,
									className: "mt-1.5",
									type: "date",
									value: p.lastmod,
									onChange: (e) => setPages((prev) => prev.map((x) => x.id === p.id ? {
										...x,
										lastmod: e.target.value
									} : x))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: `freq-${p.id}`,
									children: "changefreq"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									id: `freq-${p.id}`,
									className: "mt-1.5 h-11 w-full rounded-md border border-border bg-surface px-2 text-sm",
									value: p.changefreq,
									onChange: (e) => setPages((prev) => prev.map((x) => x.id === p.id ? {
										...x,
										changefreq: e.target.value
									} : x)),
									children: FREQS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: f,
										children: f || "—"
									}, f))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: `pri-${p.id}`,
									children: "priority"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: `pri-${p.id}`,
									className: "mt-1.5",
									value: p.priority,
									onChange: (e) => setPages((prev) => prev.map((x) => x.id === p.id ? {
										...x,
										priority: e.target.value
									} : x))
								})] })
							]
						})]
					}, p.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => setPages((prev) => [...prev, {
							id: rid(),
							path: "/",
							lastmod: today(),
							changefreq: "monthly",
							priority: "0.5"
						}]),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Add URL"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "bulk",
							children: "Paste extra paths"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "bulk",
							className: "mt-1.5 min-h-24 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm",
							value: bulk,
							onChange: (e) => setBulk(e.target.value),
							placeholder: "/blog\n/pricing\n/faq"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-3",
							variant: "secondary",
							size: "sm",
							onClick: addBulk,
							children: "Add from list"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "h-fit min-w-0 rounded-2xl bg-ink p-4 text-primary-fg shadow-[var(--shadow-border)] sm:p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.14em] text-primary-fg/70",
					children: [
						"sitemap.xml · ",
						pages.filter((p) => p.path.trim()).length,
						" URLs"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: "secondary",
					onClick: () => downloadText(xml, "sitemap.xml", "application/xml"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Download"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "mt-3 max-h-[32rem] max-w-full overflow-auto whitespace-pre-wrap break-all font-mono text-xs leading-relaxed text-primary-fg/90",
				children: xml
			})]
		})]
	});
}
var LANGS = [
	{
		value: "en-GB",
		label: "English (United Kingdom)"
	},
	{
		value: "en-US",
		label: "English (United States)"
	},
	{
		value: "en-IE",
		label: "English (Ireland)"
	},
	{
		value: "en-AU",
		label: "English (Australia)"
	},
	{
		value: "cy-GB",
		label: "Welsh"
	},
	{
		value: "gd-GB",
		label: "Scottish Gaelic"
	},
	{
		value: "hi-IN",
		label: "Hindi"
	},
	{
		value: "ur-PK",
		label: "Urdu"
	},
	{
		value: "pl-PL",
		label: "Polish"
	},
	{
		value: "ro-RO",
		label: "Romanian"
	},
	{
		value: "fr-FR",
		label: "French"
	},
	{
		value: "es-ES",
		label: "Spanish"
	}
];
function getCtor() {
	const w = window;
	return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}
function SpeechToText() {
	const [supported, setSupported] = (0, import_react.useState)(true);
	const [listening, setListening] = (0, import_react.useState)(false);
	const [lang, setLang] = (0, import_react.useState)("en-GB");
	const [finalText, setFinalText] = (0, import_react.useState)("");
	const [interim, setInterim] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const recRef = (0, import_react.useRef)(null);
	const wantRef = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		setSupported(Boolean(getCtor()));
	}, []);
	const stop = () => {
		wantRef.current = false;
		recRef.current?.stop();
		setListening(false);
		setInterim("");
	};
	const start = () => {
		const Ctor = getCtor();
		if (!Ctor) {
			setSupported(false);
			return;
		}
		setError(null);
		wantRef.current = true;
		const rec = new Ctor();
		rec.lang = lang;
		rec.continuous = true;
		rec.interimResults = true;
		rec.onresult = (ev) => {
			let fin = "";
			let mid = "";
			for (let i = ev.resultIndex; i < ev.results.length; i++) {
				const piece = ev.results[i][0].transcript;
				if (ev.results[i].isFinal) fin += piece;
				else mid += piece;
			}
			if (fin) setFinalText((prev) => prev ? `${prev} ${fin.trim()}` : fin.trim());
			setInterim(mid);
		};
		rec.onerror = (ev) => {
			if (ev.error === "not-allowed") setError("Microphone permission was blocked. Allow it in the browser address bar.");
			else if (ev.error !== "no-speech" && ev.error !== "aborted") setError(ev.error.replace(/-/g, " "));
		};
		rec.onend = () => {
			if (wantRef.current) try {
				rec.start();
			} catch {
				setListening(false);
			}
			else setListening(false);
		};
		recRef.current = rec;
		rec.start();
		setListening(true);
	};
	const copy = async () => {
		const text = [finalText, interim].filter(Boolean).join(" ").trim();
		if (!text) return;
		await navigator.clipboard.writeText(text);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1500);
	};
	const display = [finalText, interim].filter(Boolean).join(finalText && interim ? " " : "");
	if (!supported) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-base font-medium",
			children: "Speech recognition is not available here"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children: "Use Chrome, Edge or Safari — they ship the Web Speech API. Firefox does not include a speech-recognition engine, so dictation cannot run in that browser."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_16rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: listening ? "Listening…" : "Ready to dictate"
					}), listening ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "danger",
						onClick: stop,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, {}), "Stop mic"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: start,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, {}), "Start mic"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					className: "mt-4 min-h-56 font-sans text-base",
					value: display,
					onChange: (e) => {
						setFinalText(e.target.value);
						setInterim("");
					},
					placeholder: "Your words will appear here as you speak…",
					"aria-label": "Transcript"
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-danger",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							size: "sm",
							onClick: () => void copy(),
							disabled: !display,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), copied ? "Copied" : "Copy"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							size: "sm",
							disabled: !display,
							onClick: () => downloadText(display, "transcript.txt", "text/plain"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Download .txt"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => {
								setFinalText("");
								setInterim("");
							},
							children: "Clear"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "h-fit rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "lang",
					children: "Recognition language"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					id: "lang",
					className: "mt-2 h-11 w-full rounded-md border border-border bg-surface px-3 text-sm",
					value: lang,
					onChange: (e) => setLang(e.target.value),
					disabled: listening,
					children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: l.value,
						children: l.label
					}, l.value))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs leading-relaxed text-muted",
					children: "English (United Kingdom) is the default. The browser’s own engine does the listening — this page never posts audio to Northline."
				})
			]
		})]
	});
}
function TextToSpeech() {
	const [text, setText] = (0, import_react.useState)("Northline reads this aloud with the voices already installed on your device. Choose a British English voice if you have one.");
	const [voices, setVoices] = (0, import_react.useState)([]);
	const [voiceUri, setVoiceUri] = (0, import_react.useState)("");
	const [rate, setRate] = (0, import_react.useState)(1);
	const [pitch, setPitch] = (0, import_react.useState)(1);
	const [status, setStatus] = (0, import_react.useState)("idle");
	(0, import_react.useEffect)(() => {
		const load = () => {
			const list = window.speechSynthesis.getVoices();
			setVoices(list);
			setVoiceUri((prev) => {
				if (prev && list.some((v) => v.voiceURI === prev)) return prev;
				return list.find((v) => v.lang.toLowerCase().startsWith("en-gb"))?.voiceURI ?? list.find((v) => v.default)?.voiceURI ?? list[0]?.voiceURI ?? "";
			});
		};
		load();
		window.speechSynthesis.addEventListener("voiceschanged", load);
		return () => {
			window.speechSynthesis.removeEventListener("voiceschanged", load);
			window.speechSynthesis.cancel();
		};
	}, []);
	const grouped = (0, import_react.useMemo)(() => {
		return {
			uk: voices.filter((v) => v.lang.toLowerCase().startsWith("en-gb")),
			other: voices.filter((v) => !v.lang.toLowerCase().startsWith("en-gb"))
		};
	}, [voices]);
	const speak = () => {
		const trimmed = text.trim();
		if (!trimmed) return;
		window.speechSynthesis.cancel();
		const u = new SpeechSynthesisUtterance(trimmed);
		const voice = voices.find((v) => v.voiceURI === voiceUri);
		if (voice) {
			u.voice = voice;
			u.lang = voice.lang;
		} else u.lang = "en-GB";
		u.rate = rate;
		u.pitch = pitch;
		u.onend = () => setStatus("idle");
		u.onerror = () => setStatus("idle");
		window.speechSynthesis.speak(u);
		setStatus("speaking");
	};
	const pause = () => {
		window.speechSynthesis.pause();
		setStatus("paused");
	};
	const resume = () => {
		window.speechSynthesis.resume();
		setStatus("speaking");
	};
	const stop = () => {
		window.speechSynthesis.cancel();
		setStatus("idle");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "tts-text",
					children: "Text to read"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "tts-text",
					className: "mt-2 min-h-56 text-base",
					value: text,
					onChange: (e) => setText(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [
						status === "idle" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: speak,
							disabled: !text.trim(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {}), "Play"]
						}) : null,
						status === "speaking" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: pause,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {}), "Pause"]
						}) : null,
						status === "paused" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: resume,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {}), "Resume"]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							onClick: stop,
							disabled: status === "idle",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, {}), "Stop"]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "h-fit rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "voice",
					children: "Voice"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "voice",
					className: "mt-2 h-11 w-full rounded-md border border-border bg-surface px-3 text-sm",
					value: voiceUri,
					onChange: (e) => setVoiceUri(e.target.value),
					children: [grouped.uk.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
						label: "United Kingdom",
						children: grouped.uk.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: v.voiceURI,
							children: v.name
						}, v.voiceURI))
					}) : null, grouped.other.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
						label: "Other voices",
						children: grouped.other.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: v.voiceURI,
							children: [
								v.name,
								" (",
								v.lang,
								")"
							]
						}, v.voiceURI))
					}) : null]
				}),
				!voices.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted",
					children: "Voices load a moment after the page opens. If the list stays empty, the browser has none installed."
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
					htmlFor: "rate",
					className: "mt-5 block",
					children: [
						"Speed · ",
						rate.toFixed(1),
						"×"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "rate",
					type: "range",
					min: .5,
					max: 2,
					step: .1,
					value: rate,
					onChange: (e) => setRate(Number(e.target.value)),
					className: "mt-2 h-11 w-full accent-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
					htmlFor: "pitch",
					className: "mt-3 block",
					children: ["Pitch · ", pitch.toFixed(1)]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "pitch",
					type: "range",
					min: .5,
					max: 2,
					step: .1,
					value: pitch,
					onChange: (e) => setPitch(Number(e.target.value)),
					className: "mt-2 h-11 w-full accent-primary"
				})
			]
		})]
	});
}
var DEFAULT_ACCEPT = "image/png,image/jpeg,image/gif,image/bmp,image/svg+xml,image/webp,.png,.jpg,.jpeg,.gif,.bmp,.svg,.webp";
function encodeWebp(file, quality) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onerror = () => reject(/* @__PURE__ */ new Error("Could not read that file."));
		reader.onload = () => {
			const src = String(reader.result);
			const img = new Image();
			img.onload = () => {
				const canvas = document.createElement("canvas");
				const w = img.naturalWidth || img.width;
				const h = img.naturalHeight || img.height;
				if (!w || !h) {
					reject(/* @__PURE__ */ new Error("Image has no dimensions."));
					return;
				}
				canvas.width = w;
				canvas.height = h;
				const ctx = canvas.getContext("2d");
				if (!ctx) {
					reject(/* @__PURE__ */ new Error("Canvas is not available."));
					return;
				}
				ctx.drawImage(img, 0, 0);
				canvas.toBlob((blob) => {
					if (!blob) {
						reject(/* @__PURE__ */ new Error("This browser could not encode WebP. Try Chrome, Edge, or up-to-date Safari."));
						return;
					}
					resolve(blob);
				}, "image/webp", quality);
			};
			img.onerror = () => reject(/* @__PURE__ */ new Error("Could not decode that image."));
			img.src = src;
		};
		reader.readAsDataURL(file);
	});
}
function WebpConverter({ accept = DEFAULT_ACCEPT, fromLabel }) {
	const [items, setItems] = (0, import_react.useState)([]);
	const [quality, setQuality] = (0, import_react.useState)(82);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [drag, setDrag] = (0, import_react.useState)(false);
	const inputRef = (0, import_react.useRef)(null);
	const itemsRef = (0, import_react.useRef)(items);
	itemsRef.current = items;
	const addFiles = (0, import_react.useCallback)((list) => {
		const files = Array.from(list).filter((f) => f.type.startsWith("image/") || /\.(png|jpe?g|gif|bmp|svg|webp)$/i.test(f.name));
		if (!files.length) return;
		const next = files.map((file) => ({
			id: `${file.name}-${file.size}-${file.lastModified}-${Math.random()}`,
			file,
			preview: URL.createObjectURL(file),
			status: "queued",
			origBytes: file.size
		}));
		setItems((prev) => [...next, ...prev]);
	}, []);
	const convertOne = (0, import_react.useCallback)(async (id, q) => {
		const current = itemsRef.current.find((it) => it.id === id);
		if (!current) return;
		setItems((prev) => prev.map((it) => it.id === id ? {
			...it,
			status: "working",
			error: void 0
		} : it));
		try {
			const blob = await encodeWebp(current.file, q);
			const url = URL.createObjectURL(blob);
			setItems((prev) => prev.map((it) => it.id === id ? {
				...it,
				status: "done",
				webp: blob,
				webpUrl: url,
				webpBytes: blob.size
			} : it));
		} catch (err) {
			setItems((prev) => prev.map((it) => it.id === id ? {
				...it,
				status: "error",
				error: err instanceof Error ? err.message : "Conversion failed."
			} : it));
		}
	}, []);
	const convertAll = async () => {
		setBusy(true);
		const q = quality / 100;
		const ids = itemsRef.current.map((it) => it.id);
		for (const id of ids) await convertOne(id, q);
		setBusy(false);
	};
	const remove = (id) => {
		setItems((prev) => {
			const it = prev.find((x) => x.id === id);
			if (it?.preview) URL.revokeObjectURL(it.preview);
			if (it?.webpUrl) URL.revokeObjectURL(it.webpUrl);
			return prev.filter((x) => x.id !== id);
		});
	};
	const downloadAll = () => {
		items.filter((it) => it.webp).forEach((it, i) => {
			window.setTimeout(() => {
				downloadBlob(it.webp, replaceExt(it.file.name, "webp"));
			}, i * 180);
		});
	};
	const done = items.filter((it) => it.status === "done");
	const label = fromLabel ? `${fromLabel} files` : "PNG, JPG, GIF, BMP or SVG";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onDragOver: (e) => {
				e.preventDefault();
				setDrag(true);
			},
			onDragLeave: () => setDrag(false),
			onDrop: (e) => {
				e.preventDefault();
				setDrag(false);
				addFiles(e.dataTransfer.files);
			},
			className: cn("relative flex min-h-52 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed px-6 py-10 text-center transition-[background-color,border-color] duration-150", drag ? "border-primary bg-surface-2" : "border-border bg-surface"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: inputRef,
					type: "file",
					accept,
					multiple: true,
					className: "absolute inset-0 z-10 cursor-pointer opacity-0",
					"aria-label": `Upload ${label}`,
					onChange: (e) => {
						if (e.target.files) addFiles(e.target.files);
						e.target.value = "";
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "size-8 text-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-base font-medium",
					children: [
						"Drop ",
						label,
						" here"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "or click to browse — conversion stays on this device"
				})
			]
		}), items.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-5 grid gap-3",
			children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex flex-col gap-3 rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 flex-1 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: it.webpUrl ?? it.preview,
						alt: "",
						className: "size-16 shrink-0 rounded-md object-cover outline outline-1 -outline-offset-1 outline-ink/10"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-medium",
								children: it.file.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-0.5 text-xs tabular-nums text-muted",
								children: [formatBytes(it.origBytes), it.webpBytes != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									" ",
									"→ ",
									formatBytes(it.webpBytes),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-ok",
										children: it.webpBytes < it.origBytes ? `−${Math.round((1 - it.webpBytes / it.origBytes) * 100)}%` : "same size"
									})
								] }) : null]
							}),
							it.status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-danger",
								children: it.error
							}) : null
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [it.status === "done" && it.webp ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: () => downloadBlob(it.webp, replaceExt(it.file.name, "webp")),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "WebP"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "secondary",
						disabled: it.status === "working",
						onClick: () => void convertOne(it.id, quality / 100),
						children: [it.status === "working" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : null, "Convert"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						variant: "ghost",
						"aria-label": "Remove",
						onClick: () => remove(it.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
					})]
				})]
			}, it.id))
		}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "h-fit rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
					htmlFor: "quality",
					children: [
						"Quality · ",
						quality,
						"%"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "quality",
					type: "range",
					min: 10,
					max: 100,
					step: 1,
					value: quality,
					onChange: (e) => setQuality(Number(e.target.value)),
					className: "mt-3 h-11 w-full accent-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs leading-relaxed text-muted",
					children: "Around 80–85% is the usual sweet spot for UK web pages. 100% is near-lossless."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => void convertAll(),
						disabled: !items.length || busy,
						children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : null, items.length ? `Convert ${items.length} to WebP` : "Convert to WebP"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						onClick: downloadAll,
						disabled: !done.length,
						children: [
							"Download all (",
							done.length,
							")"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs leading-relaxed text-subtle",
					children: "Animated GIFs export the first frame. SVG is rasterised at its native size."
				})
			]
		})]
	});
}
function ToolScreen({ id }) {
	const tool = toolById[id];
	let body;
	if (tool.category === "images") body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WebpConverter, {
		accept: tool.accept,
		fromLabel: tool.fromLabel
	});
	else if (id === "speech") body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeechToText, {});
	else if (id === "tts") body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextToSpeech, {});
	else if (id === "meta") body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaGenerator, {});
	else if (id === "og") body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaGenerator, { focus: "og" });
	else if (id === "robots") body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RobotsGenerator, {});
	else body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitemapGenerator, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolPage, {
		tool,
		children: body
	});
}
//#endregion
export { ToolScreen as t };
