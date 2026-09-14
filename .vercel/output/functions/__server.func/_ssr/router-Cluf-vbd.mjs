import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Menu, n as TriangleAlert, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cluf-vbd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatBytes(bytes) {
	if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";
	const units = [
		"B",
		"KB",
		"MB",
		"GB"
	];
	const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
	const value = bytes / 1024 ** i;
	return `${value >= 10 || i === 0 ? value.toFixed(0) : value.toFixed(1)} ${units[i]}`;
}
function downloadBlob(blob, filename) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	a.remove();
	window.setTimeout(() => URL.revokeObjectURL(url), 1e3);
}
function downloadText(text, filename, type) {
	downloadBlob(new Blob([text], { type }), filename);
}
function replaceExt(name, ext) {
	return `${name.replace(/\.[^.]+$/, "")}.${ext}`;
}
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-7", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "8",
				className: "fill-primary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M9 23V9h3.2l7.1 9.4V9H23v14h-3.2l-7.1-9.4V23H9z",
				className: "fill-primary-fg"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M7 25h18",
				className: "stroke-primary-fg",
				strokeWidth: "1.5"
			})
		]
	});
}
function Logo({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-lg tracking-tight text-fg",
				children: "Northline"
			}), !compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-muted",
				children: "United Kingdom"
			}) : null]
		})]
	});
}
var SITE = {
	name: "Northline",
	tagline: "Free browser tools for the United Kingdom",
	locale: "en-GB",
	region: "GB"
};
var tools = [
	{
		id: "webp",
		path: "/webp-converter",
		nav: "WebP converter",
		name: "WebP Image Converter",
		short: "Turn PNG, JPG, GIF, BMP and SVG into WebP without leaving the browser.",
		category: "images",
		title: "WebP Converter UK | Convert PNG, JPG, GIF to WebP Free",
		description: "Free WebP image converter in the UK. Convert PNG, JPG, JPEG, GIF, BMP and SVG to WebP in your browser. Private, no uploads, no watermarks.",
		keywords: "webp converter uk, convert to webp uk, png to webp converter in uk, jpg to webp converter uk, free webp converter, image to webp uk, gif to webp, svg to webp",
		h1: "WebP Image Converter in the UK",
		lead: "Convert any common image to WebP in the browser. Files never leave your machine.",
		intro: "Northline’s WebP converter is a free UK tool for designers, developers and shop owners who want smaller images without sending files to a remote server. Drop in PNG, JPG, JPEG, GIF, BMP or SVG — we encode WebP with the browser’s own canvas, then you download the result. That keeps work GDPR-friendly and fast even on a slow connection.",
		howToTitle: "How to convert images to WebP",
		steps: [
			"Drop or choose PNG, JPG, GIF, BMP or SVG files.",
			"Set quality (higher keeps more detail; lower makes a smaller file).",
			"Review the size saving next to each preview.",
			"Download a single WebP, or save every converted file."
		],
		faqs: [
			{
				q: "Is this WebP converter free for UK users?",
				a: "Yes. There is no account, watermark or daily cap. Conversion runs locally in Chrome, Edge, Firefox and Safari."
			},
			{
				q: "Do my images get uploaded?",
				a: "No. FileReader and canvas handle everything on your device. Nothing is posted to a Northline server."
			},
			{
				q: "Which formats can I convert to WebP?",
				a: "PNG, JPG/JPEG, GIF (first frame), BMP and SVG. Animated GIF becomes a still WebP of the first frame."
			},
			{
				q: "Will WebP work on UK websites?",
				a: "Yes. All modern browsers used in the UK decode WebP. It is the usual next step after PNG or JPEG for page speed."
			}
		],
		related: [
			"png-webp",
			"jpg-webp",
			"gif-webp",
			"svg-webp"
		]
	},
	{
		id: "png-webp",
		path: "/png-to-webp",
		nav: "PNG to WebP",
		name: "PNG to WebP Converter",
		short: "Shrink screenshots, UI exports and graphics from PNG to WebP.",
		category: "images",
		title: "PNG to WebP Converter in UK | Free Online Tool",
		description: "PNG to WebP converter in the UK. Turn PNG screenshots, UI kits and graphics into smaller WebP files in your browser. Private and free.",
		keywords: "png to webp converter in uk, png to webp uk, convert png to webp, free png to webp, png webp converter united kingdom",
		h1: "PNG to WebP Converter in the UK",
		lead: "Drop PNG files and download WebP. Ideal for Figma exports, screenshots and UI kits.",
		intro: "PNG is the default export from Figma, Sketch and most screenshot tools — and it is often far larger than it needs to be. This UK-focused PNG to WebP converter keeps transparency where the browser can, then writes a WebP you can drop straight into a site or shop. No upload queue, no compression service in another country.",
		howToTitle: "Convert PNG to WebP",
		steps: [
			"Choose one or more .png files (drag and drop works).",
			"Pick a quality that still looks sharp on a retina display.",
			"Compare original PNG size with the WebP size.",
			"Download the .webp file and replace the PNG on your site."
		],
		faqs: [
			{
				q: "Does PNG to WebP keep transparency?",
				a: "Yes, in browsers that encode alpha WebP (Chrome, Edge, Firefox, recent Safari). Check the preview before you publish."
			},
			{
				q: "Is there a file size limit?",
				a: "Only what your device can draw to a canvas. Very large print PNGs may need shrinking first."
			},
			{
				q: "Why convert PNG to WebP in the UK?",
				a: "Faster pages, lower hosting bandwidth, and no need to send client artwork to a third-party converter."
			}
		],
		related: [
			"webp",
			"jpg-webp",
			"svg-webp"
		],
		accept: "image/png,.png",
		fromLabel: "PNG"
	},
	{
		id: "jpg-webp",
		path: "/jpg-to-webp",
		nav: "JPG to WebP",
		name: "JPG to WebP Converter",
		short: "Re-encode photographs and product shots from JPG to WebP.",
		category: "images",
		title: "JPG to WebP Converter in UK | Compress Photos Free",
		description: "JPG to WebP converter in the UK. Re-encode photos and product images to WebP in your browser for faster UK websites and shops.",
		keywords: "jpg to webp converter in uk, jpg to webp uk, jpeg to webp uk, convert jpg to webp, photo to webp converter",
		h1: "JPG to WebP Converter in the UK",
		lead: "Re-encode photographs to WebP for smaller product galleries and blog images.",
		intro: "Most UK e-commerce catalogues still ship fat JPEGs. Converting JPG to WebP typically cuts 25–40% off the file without a visible hit at 80–85% quality. Use this tool on product photography, headshots and editorial images — locally, before you upload to Shopify, WooCommerce or a CDN.",
		howToTitle: "Convert JPG to WebP",
		steps: [
			"Drop .jpg or .jpeg photos into the converter.",
			"Start around 82% quality and nudge until the preview looks right.",
			"Check the saving in kilobytes.",
			"Download the WebP and swap it in your theme or CMS."
		],
		faqs: [
			{
				q: "JPG or JPEG — is there a difference?",
				a: "No. Both are the same format. This page and the JPEG to WebP tool use the same engine."
			},
			{
				q: "Will colours look the same?",
				a: "WebP uses its own compression. At 80%+ quality, photographs stay close to the original JPEG."
			},
			{
				q: "Can I convert several photos at once?",
				a: "Yes. Select a whole folder of JPGs and download each WebP from the list."
			}
		],
		related: [
			"jpeg-webp",
			"png-webp",
			"webp"
		],
		accept: "image/jpeg,.jpg,.jpeg",
		fromLabel: "JPG"
	},
	{
		id: "jpeg-webp",
		path: "/jpeg-to-webp",
		nav: "JPEG to WebP",
		name: "JPEG to WebP Converter",
		short: "The same photo encoder, for .jpeg filenames.",
		category: "images",
		title: "JPEG to WebP Converter in UK | Free Photo Compressor",
		description: "JPEG to WebP converter in the UK. Convert .jpeg photographs to WebP in your browser. Free, private, no file upload.",
		keywords: "jpeg to webp converter in uk, jpeg to webp uk, convert jpeg to webp, jpeg webp converter united kingdom",
		h1: "JPEG to WebP Converter in the UK",
		lead: "Convert .jpeg files to WebP without an online upload.",
		intro: "Cameras and older Windows tools often save .jpeg rather than .jpg. This converter is the JPEG-specific door into the same in-browser WebP encoder — useful when you are batching a shoot for a UK brochure site or estate-agent listing.",
		howToTitle: "Convert JPEG to WebP",
		steps: [
			"Select .jpeg files from your camera roll or export folder.",
			"Set quality, convert, and preview.",
			"Download WebP versions for the web, keep JPEGs for print."
		],
		faqs: [{
			q: "Is JPEG to WebP lossless?",
			a: "WebP can be near-lossless at quality 100, but the usual win is a slightly lossy encode that still looks clean on screen."
		}, {
			q: "Should I keep the original JPEG?",
			a: "Yes if you still need print or Lightroom masters. Serve WebP on the website only."
		}],
		related: [
			"jpg-webp",
			"webp",
			"png-webp"
		],
		accept: "image/jpeg,.jpg,.jpeg",
		fromLabel: "JPEG"
	},
	{
		id: "gif-webp",
		path: "/gif-to-webp",
		nav: "GIF to WebP",
		name: "GIF to WebP Converter",
		short: "Turn GIF stills into much smaller WebP files.",
		category: "images",
		title: "GIF to WebP Converter in UK | Compress GIFs Free",
		description: "GIF to WebP converter in the UK. Convert GIF images to WebP in your browser. First-frame stills, no upload, free for UK users.",
		keywords: "gif to webp converter in uk, gif to webp uk, convert gif to webp, compress gif uk",
		h1: "GIF to WebP Converter in the UK",
		lead: "Convert GIF images to WebP. Animated GIFs export as a still of the first frame.",
		intro: "GIF is a poor fit for modern pages — 256 colours and bulky frames. This UK tool encodes a GIF into WebP using canvas. Animated GIFs become a still of frame one (browsers cannot pack animation through canvas.toBlob). For memes and simple graphics the size drop is still worth it.",
		howToTitle: "Convert GIF to WebP",
		steps: [
			"Drop .gif files into the box.",
			"Confirm the first-frame preview looks right.",
			"Download the WebP still."
		],
		faqs: [{
			q: "Does this keep GIF animation?",
			a: "No. Canvas encoding captures the first frame. For animated WebP you would need a dedicated encoder."
		}, {
			q: "Why convert GIF at all?",
			a: "Simple graphics and logos saved as GIF shrink sharply as WebP and look cleaner on retina screens."
		}],
		related: [
			"png-webp",
			"webp",
			"jpg-webp"
		],
		accept: "image/gif,.gif",
		fromLabel: "GIF"
	},
	{
		id: "bmp-webp",
		path: "/bmp-to-webp",
		nav: "BMP to WebP",
		name: "BMP to WebP Converter",
		short: "Replace bulky BMP scans and exports with WebP.",
		category: "images",
		title: "BMP to WebP Converter in UK | Convert Bitmap Free",
		description: "BMP to WebP converter in the UK. Convert Windows bitmap images to WebP in your browser. Free and private.",
		keywords: "bmp to webp converter in uk, bmp to webp uk, convert bmp to webp, bitmap to webp",
		h1: "BMP to WebP Converter in the UK",
		lead: "Turn uncompressed BMP files into web-ready WebP.",
		intro: "BMP still turns up from older Windows apps, scanners and school work. The files are huge because they store every pixel raw. Convert BMP to WebP here before you attach them to email or a website — the saving is usually dramatic.",
		howToTitle: "Convert BMP to WebP",
		steps: [
			"Choose .bmp files.",
			"Convert at your chosen quality.",
			"Download the compact WebP."
		],
		faqs: [{
			q: "Are BMP files supported in every browser?",
			a: "Chrome, Edge and Firefox decode BMP for canvas. If a file fails, re-save it as PNG first."
		}],
		related: [
			"png-webp",
			"jpg-webp",
			"webp"
		],
		accept: "image/bmp,.bmp",
		fromLabel: "BMP"
	},
	{
		id: "svg-webp",
		path: "/svg-to-webp",
		nav: "SVG to WebP",
		name: "SVG to WebP Converter",
		short: "Rasterise SVG artwork to WebP for feeds and CMS fields.",
		category: "images",
		title: "SVG to WebP Converter in UK | Rasterise SVG Free",
		description: "SVG to WebP converter in the UK. Rasterise SVG logos and icons to WebP in your browser when a CMS or social feed will not take SVG.",
		keywords: "svg to webp converter in uk, svg to webp uk, convert svg to webp, rasterise svg uk",
		h1: "SVG to WebP Converter in the UK",
		lead: "Rasterise SVG logos and illustrations to WebP when the destination cannot take vectors.",
		intro: "Keep SVG for your site whenever you can — it is still the right format for logos. Use this converter when a CMS, social card or email builder refuses SVG. We draw the vector to canvas at its native size and encode WebP, all in the browser.",
		howToTitle: "Convert SVG to WebP",
		steps: [
			"Drop an .svg file.",
			"Check the raster preview.",
			"Download WebP for the stubborn upload field."
		],
		faqs: [{
			q: "Should I replace site logos with WebP?",
			a: "No. Keep SVG (or a fallback PNG) on the website. Use WebP for platforms that block SVG."
		}, {
			q: "Do fonts inside the SVG embed?",
			a: "Only if they are outlined or already in the file. System fonts may fall back when drawn to canvas."
		}],
		related: [
			"png-webp",
			"webp",
			"jpg-webp"
		],
		accept: "image/svg+xml,.svg",
		fromLabel: "SVG"
	},
	{
		id: "speech",
		path: "/speech-to-text",
		nav: "Speech to text",
		name: "Speech to Text",
		short: "Dictate in British English with the built-in Web Speech API.",
		category: "voice",
		title: "Speech to Text UK | Free Voice Dictation in British English",
		description: "Free speech to text in the UK. Dictate in British English with your microphone. Live transcript, copy and download. Chrome, Edge and Safari.",
		keywords: "speech to text uk, voice dictation uk, speech to text in uk, british english dictation, free voice to text uk, microphone transcription",
		h1: "Speech to Text in the UK",
		lead: "Voice dictation in British English, live in the browser. No account, no audio upload from this page.",
		intro: "Northline’s speech to text tool uses the Web Speech API already in Chrome, Edge and Safari. Press start, grant the microphone, and speak — words land in the transcript as you go. Default language is English (United Kingdom). Useful for notes, emails, drafts and meeting recaps when you would rather not type.",
		howToTitle: "How to dictate with speech to text",
		steps: [
			"Open the tool in Chrome, Edge or Safari.",
			"Click Start mic and allow microphone access.",
			"Speak clearly; the transcript updates live.",
			"Copy, download, or keep editing the text."
		],
		faqs: [
			{
				q: "Which browsers work in the UK?",
				a: "Chrome, Edge and Safari support the Web Speech API. Firefox does not ship a full speech-recognition engine."
			},
			{
				q: "Is audio stored on Northline?",
				a: "This page never uploads your recording to our servers. The browser’s own recognition engine handles audio."
			},
			{
				q: "Can I use British English?",
				a: "Yes. English (United Kingdom) is the default. You can switch to other languages the browser lists."
			},
			{
				q: "Does it work on iPhone?",
				a: "Safari on iOS supports speech recognition with a microphone permission prompt. Use HTTPS (this site is)."
			}
		],
		related: ["tts", "meta"]
	},
	{
		id: "tts",
		path: "/text-to-speech",
		nav: "Text to speech",
		name: "Text to Speech",
		short: "Hear your writing read aloud with UK system voices.",
		category: "voice",
		title: "Text to Speech UK | Free Voice Reader with UK Voices",
		description: "Free text to speech in the UK. Paste text and hear it with British English system voices. Adjust rate, pitch and voice — all in the browser.",
		keywords: "text to speech uk, text to speech in uk, uk voice reader, british english tts, free text to speech uk, speech synthesis",
		h1: "Text to Speech in the UK",
		lead: "A voice reader that uses the British English voices already on your device.",
		intro: "Paste copy and press play. The tool wraps your text in SpeechSynthesisUtterance and asks the browser to speak it with a voice from speechSynthesis.getVoices() — typically including Microsoft Hazel, Google UK English or Apple voices on Mac. Rate and pitch are adjustable. Nothing is sent to a cloud TTS vendor from this page.",
		howToTitle: "How to use the voice reader",
		steps: [
			"Paste or type the text you want read aloud.",
			"Pick a UK English voice if one is installed.",
			"Set speed and pitch, then press Play.",
			"Pause, resume or stop at any time."
		],
		faqs: [
			{
				q: "Where do the voices come from?",
				a: "They are installed on your operating system and exposed by the browser. Northline does not host voice files."
			},
			{
				q: "Can I get a British accent?",
				a: "Choose a voice whose name or language code is en-GB (for example Google UK English Female, or Microsoft Hazel)."
			},
			{
				q: "Is there a character limit?",
				a: "Browsers clip very long utterances. For long articles, play a few paragraphs at a time."
			}
		],
		related: ["speech", "meta"]
	},
	{
		id: "meta",
		path: "/meta-tag-generator",
		nav: "Meta tags",
		name: "Meta Tag Generator",
		short: "Build title, description, Open Graph and Twitter tags with a live SERP preview.",
		category: "seo",
		title: "Meta Tag Generator UK | Open Graph & SERP Preview",
		description: "Free meta tag and Open Graph generator in the UK. Live Google SERP and social card preview. Copy SEO-ready HTML for your site head.",
		keywords: "meta tag generator uk, open graph generator uk, serp preview uk, twitter card generator, seo meta tags uk, og tags generator",
		h1: "Meta Tag & Open Graph Generator in the UK",
		lead: "Write title, description and social tags. Watch a Google snippet and a social card update as you type.",
		intro: "Search and social previews are the first impression of a UK page. This generator turns your title, description, canonical URL, keywords, robots rules, Open Graph fields and Twitter Card fields into a copy-paste <head> block. A live SERP mock and Facebook/X-style card sit beside the form so you can see truncated titles before you ship.",
		howToTitle: "Generate meta tags",
		steps: [
			"Fill in title, description, canonical URL and image.",
			"Add Open Graph and Twitter Card fields.",
			"Check the SERP and social previews.",
			"Copy the HTML and paste it into your document head."
		],
		faqs: [
			{
				q: "What title length should I use in the UK?",
				a: "Aim for about 50–60 characters. Google does not count characters strictly — it measures pixel width — but that range rarely truncates."
			},
			{
				q: "Do I need both Open Graph and Twitter tags?",
				a: "Open Graph covers Facebook, LinkedIn and most unfurls. Twitter/X tags still help if you want a large summary card on X."
			},
			{
				q: "Will this put my site on Google?",
				a: "Tags help the snippet. Indexing still needs a crawlable page, sensible content, and a sitemap."
			}
		],
		related: [
			"og",
			"robots",
			"sitemap"
		]
	},
	{
		id: "og",
		path: "/open-graph-generator",
		nav: "Open Graph",
		name: "Open Graph Generator",
		short: "Focused Open Graph and Twitter Card builder with a social preview.",
		category: "seo",
		title: "Open Graph Generator UK | Facebook & X Card Preview",
		description: "Open Graph generator in the UK. Build og:title, og:image and Twitter Card tags with a live social preview. Free HTML export.",
		keywords: "open graph generator uk, og tag generator uk, facebook card preview, twitter card generator uk, social share tags",
		h1: "Open Graph Generator in the UK",
		lead: "Craft Facebook, LinkedIn and X share cards before you publish.",
		intro: "A missing og:image is why so many UK brand links look bare in Slack and on LinkedIn. This page is the social-first view of the same generator: image, title, description, type and Twitter card size, with a live preview. Copy the tags into your CMS or framework head.",
		howToTitle: "Build Open Graph tags",
		steps: [
			"Add the public URL and a 1200×630 image.",
			"Write the og:title and og:description you want shared.",
			"Choose website, article or product.",
			"Copy the tag block into your <head>."
		],
		faqs: [{
			q: "What size should og:image be?",
			a: "1200×630 pixels is the usual landscape card. Keep important artwork away from the edges."
		}, {
			q: "Why is my old image still showing?",
			a: "Facebook and LinkedIn cache unfurls. Use their debugger tools after you deploy a new image URL."
		}],
		related: [
			"meta",
			"sitemap",
			"robots"
		]
	},
	{
		id: "robots",
		path: "/robots-txt-generator",
		nav: "robots.txt",
		name: "Robots.txt Generator",
		short: "Write allow, disallow and sitemap lines, then download robots.txt.",
		category: "seo",
		title: "Robots.txt Generator UK | Allow, Disallow & Sitemap",
		description: "Free robots.txt generator in the UK. Set user-agents, allow/disallow paths and sitemap URLs, then download a valid robots.txt.",
		keywords: "robots.txt generator uk, robots txt generator, disallow generator, seo robots file uk, create robots.txt",
		h1: "Robots.txt Generator in the UK",
		lead: "Build a valid robots.txt for Googlebot and Bingbot, then download the file.",
		intro: "robots.txt is the first file crawlers request. This generator formats User-agent, Allow, Disallow and Sitemap lines in the standard protocol so you can host the file at https://your-domain/robots.txt. Use it to keep /admin, /cart and thank-you pages out of the UK index without blocking CSS or the rest of the site.",
		howToTitle: "Create a robots.txt file",
		steps: [
			"Choose a preset or start from Allow all.",
			"Add user-agents and the paths they may not crawl.",
			"Point to your XML sitemap.",
			"Download robots.txt and upload it to your site root."
		],
		faqs: [
			{
				q: "Should I Disallow everything?",
				a: "No. An empty allow (or Allow: /) is correct for most public UK sites. Only disallow private or duplicate paths."
			},
			{
				q: "Does robots.txt hide a page from Google?",
				a: "It asks crawlers not to fetch the URL. The URL can still appear in results if it is linked elsewhere. Use noindex when you need that."
			},
			{
				q: "Where do I put the file?",
				a: "At the site root: https://example.co.uk/robots.txt — not in a subfolder."
			}
		],
		related: [
			"sitemap",
			"meta",
			"og"
		]
	},
	{
		id: "sitemap",
		path: "/xml-sitemap-generator",
		nav: "XML sitemap",
		name: "XML Sitemap Generator",
		short: "List your URLs and download a sitemap.xml for Search Console.",
		category: "seo",
		title: "XML Sitemap Generator UK | Create sitemap.xml Free",
		description: "Free XML sitemap generator in the UK. Add page URLs, lastmod, changefreq and priority, then download sitemap.xml for Google Search Console.",
		keywords: "xml sitemap generator uk, sitemap.xml generator, google sitemap uk, create sitemap uk, seo sitemap builder",
		h1: "XML Sitemap Generator in the UK",
		lead: "Assemble a sitemap.xml for Google Search Console and Bing Webmaster Tools.",
		intro: "A sitemap does not rank you by itself, but it helps Google discover every important URL on a UK site — especially new shops and brochure sites with weak internal links. Add paths, set lastmod / changefreq / priority, preview the XML, and download sitemap.xml. Then list it in robots.txt and submit it in Search Console.",
		howToTitle: "Build an XML sitemap",
		steps: [
			"Enter your site origin, for example https://www.example.co.uk.",
			"Add each important URL (home, services, blog posts).",
			"Optionally set lastmod, changefreq and priority.",
			"Download sitemap.xml and host it at /sitemap.xml."
		],
		faqs: [
			{
				q: "How many URLs can I include?",
				a: "This client-side builder is meant for brochure and small-business sites (hundreds of URLs). Very large catalogues need a CMS-generated sitemap."
			},
			{
				q: "Is priority required?",
				a: "No. Google has said it ignores priority. lastmod is the useful hint when it is accurate."
			},
			{
				q: "Do I still need robots.txt?",
				a: "Yes. Add a Sitemap: line pointing at this file so crawlers find it even before Search Console."
			}
		],
		related: [
			"robots",
			"meta",
			"og"
		]
	}
];
var toolById = Object.fromEntries(tools.map((t) => [t.id, t]));
Object.fromEntries(tools.map((t) => [t.path, t]));
var primaryTools = [
	"webp",
	"speech",
	"tts",
	"meta",
	"robots",
	"sitemap"
];
var imageTools = [
	"webp",
	"png-webp",
	"jpg-webp",
	"jpeg-webp",
	"gif-webp",
	"bmp-webp",
	"svg-webp"
];
function relatedTools(id) {
	return toolById[id].related.map((rid) => toolById[rid]);
}
function SiteFooter() {
	const voice = [toolById.speech, toolById.tts];
	const seo = [
		toolById.meta,
		toolById.og,
		toolById.robots,
		toolById.sitemap
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-auto border-t border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm leading-relaxed text-muted",
						children: "Free in-browser tools for people and businesses in the United Kingdom. Files stay on your device."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "Convert",
					children: imageTools.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: toolById[id].path,
						className: "hover:text-fg",
						children: toolById[id].name
					}, id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "Voice",
					children: voice.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: t.path,
						className: "hover:text-fg",
						children: t.name
					}, t.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "SEO",
					children: seo.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: t.path,
						className: "hover:text-fg",
						children: t.name
					}, t.id))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Northline. Tools run entirely in your browser."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [tools.length, " free tools · en-GB · no account required"] })]
			})
		})]
	});
}
function FooterCol({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-semibold uppercase tracking-[0.14em] text-muted",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3 flex flex-col gap-2 text-sm text-muted",
		children
	})] });
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[transform,background-color,color,box-shadow,opacity] duration-150 ease-[var(--ease-out-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg shadow-sm hover:bg-primary/90",
			secondary: "bg-surface text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			outline: "border border-border bg-transparent text-fg hover:bg-surface-2",
			ghost: "text-fg hover:bg-surface-2",
			danger: "bg-danger text-primary-fg hover:bg-danger/90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-sm",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var NAV = [
	{
		id: "webp",
		label: "WebP"
	},
	{
		id: "speech",
		label: "Dictate"
	},
	{
		id: "tts",
		label: "Reader"
	},
	{
		id: "meta",
		label: "Meta tags"
	},
	{
		id: "robots",
		label: "robots.txt"
	},
	{
		id: "sitemap",
		label: "Sitemap"
	}
];
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/80 bg-bg/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { compact: true }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => {
						const tool = tools.find((t) => t.id === item.id);
						const active = pathname === tool.path || item.id === "webp" && pathname.includes("webp") || item.id === "meta" && pathname.includes("open-graph");
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: tool.path,
							className: cn("rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150", active ? "bg-surface-2 text-fg" : "text-muted hover:bg-surface-2 hover:text-fg"),
							children: item.label
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "lg:hidden",
					"aria-expanded": open,
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-border bg-bg px-4 py-3 lg:hidden",
			"aria-label": "Mobile",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col",
				children: NAV.map((item) => {
					const tool = tools.find((t) => t.id === item.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: tool.path,
						className: "flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-fg hover:bg-surface-2",
						onClick: () => setOpen(false),
						children: tool.name
					}) }, item.id);
				})
			})
		}) : null]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-fg",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var styles_default = "/assets/styles-CBUnQH-J.css";
var APP_NAME = "Northline";
var Route$14 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#1c3d5a"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Newsreader:opsz,wght@6..72,500;6..72,600&display=swap"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en-GB",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function seoHead(tool) {
	return {
		meta: [
			{ title: tool.title },
			{
				name: "description",
				content: tool.description
			},
			{
				name: "keywords",
				content: tool.keywords
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large"
			},
			{
				name: "author",
				content: SITE.name
			},
			{
				name: "language",
				content: SITE.locale
			},
			{
				name: "geo.region",
				content: SITE.region
			},
			{
				name: "geo.placename",
				content: "United Kingdom"
			},
			{
				name: "application-name",
				content: SITE.name
			}
		],
		links: [{
			rel: "canonical",
			href: tool.path
		}]
	};
}
function homeHead() {
	return {
		meta: [
			{ title: "Northline | Free WebP, Speech & SEO Tools in the UK" },
			{
				name: "description",
				content: "Free UK browser tools: PNG to WebP converter, speech to text, text to speech, meta tag generator, robots.txt and XML sitemap builder. Private, no uploads."
			},
			{
				name: "keywords",
				content: "webp converter uk, png to webp converter in uk, speech to text uk, text to speech uk, meta tag generator uk, robots.txt generator, xml sitemap generator uk, free seo tools uk"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				name: "author",
				content: SITE.name
			},
			{
				name: "geo.region",
				content: SITE.region
			},
			{
				name: "geo.placename",
				content: "United Kingdom"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	};
}
function softwareJsonLd(tool) {
	return {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: tool.name,
		applicationCategory: "BrowserApplication",
		operatingSystem: "Windows, macOS, Linux, iOS, Android",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "GBP"
		},
		description: tool.description,
		featureList: tool.steps,
		inLanguage: "en-GB",
		audience: {
			"@type": "Audience",
			geographicArea: {
				"@type": "Country",
				name: "United Kingdom"
			}
		}
	};
}
function faqJsonLd(tool) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: tool.faqs.map((f) => ({
			"@type": "Question",
			name: f.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: f.a
			}
		}))
	};
}
function howToJsonLd(tool) {
	return {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: tool.howToTitle,
		description: tool.lead,
		step: tool.steps.map((name, i) => ({
			"@type": "HowToStep",
			position: i + 1,
			name,
			text: name
		}))
	};
}
function breadcrumbJsonLd(tool) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: "/"
		}, {
			"@type": "ListItem",
			position: 2,
			name: tool.name,
			item: tool.path
		}]
	};
}
function homeJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: SITE.name,
		description: "Free in-browser tools for the United Kingdom: image conversion, dictation, voice reading and SEO file generators.",
		inLanguage: "en-GB",
		audience: {
			"@type": "Audience",
			geographicArea: {
				"@type": "Country",
				name: "United Kingdom"
			}
		}
	};
}
var $$splitComponentImporter$13 = () => import("./routes-DM97i06U.mjs");
var Route$13 = createFileRoute("/")({
	head: homeHead,
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./bmp-to-webp-y5USBV2L.mjs");
var Route$12 = createFileRoute("/bmp-to-webp")({
	head: () => seoHead(toolById["bmp-webp"]),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./gif-to-webp-DLh5TRzn.mjs");
var Route$11 = createFileRoute("/gif-to-webp")({
	head: () => seoHead(toolById["gif-webp"]),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./jpeg-to-webp-C8McK78K.mjs");
var Route$10 = createFileRoute("/jpeg-to-webp")({
	head: () => seoHead(toolById["jpeg-webp"]),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./jpg-to-webp-C_aH3Hdx.mjs");
var Route$9 = createFileRoute("/jpg-to-webp")({
	head: () => seoHead(toolById["jpg-webp"]),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./meta-tag-generator-CYBDqJ6q.mjs");
var Route$8 = createFileRoute("/meta-tag-generator")({
	head: () => seoHead(toolById.meta),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./open-graph-generator-DkWdxSEW.mjs");
var Route$7 = createFileRoute("/open-graph-generator")({
	head: () => seoHead(toolById.og),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./png-to-webp-CBN3LoTw.mjs");
var Route$6 = createFileRoute("/png-to-webp")({
	head: () => seoHead(toolById["png-webp"]),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./robots-txt-generator-DhhguSM5.mjs");
var Route$5 = createFileRoute("/robots-txt-generator")({
	head: () => seoHead(toolById.robots),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./speech-to-text-BfU1PUD6.mjs");
var Route$4 = createFileRoute("/speech-to-text")({
	head: () => seoHead(toolById.speech),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./svg-to-webp-Cpfzyzle.mjs");
var Route$3 = createFileRoute("/svg-to-webp")({
	head: () => seoHead(toolById["svg-webp"]),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./text-to-speech-C2tjElYI.mjs");
var Route$2 = createFileRoute("/text-to-speech")({
	head: () => seoHead(toolById.tts),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./webp-converter-C5aeVpE8.mjs");
var Route$1 = createFileRoute("/webp-converter")({
	head: () => seoHead(toolById.webp),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./xml-sitemap-generator-Cii2_-TZ.mjs");
var Route = createFileRoute("/xml-sitemap-generator")({
	head: () => seoHead(toolById.sitemap),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$13.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$14
	}),
	BmpToWebpRoute: Route$12.update({
		id: "/bmp-to-webp",
		path: "/bmp-to-webp",
		getParentRoute: () => Route$14
	}),
	GifToWebpRoute: Route$11.update({
		id: "/gif-to-webp",
		path: "/gif-to-webp",
		getParentRoute: () => Route$14
	}),
	JpegToWebpRoute: Route$10.update({
		id: "/jpeg-to-webp",
		path: "/jpeg-to-webp",
		getParentRoute: () => Route$14
	}),
	JpgToWebpRoute: Route$9.update({
		id: "/jpg-to-webp",
		path: "/jpg-to-webp",
		getParentRoute: () => Route$14
	}),
	MetaTagGeneratorRoute: Route$8.update({
		id: "/meta-tag-generator",
		path: "/meta-tag-generator",
		getParentRoute: () => Route$14
	}),
	OpenGraphGeneratorRoute: Route$7.update({
		id: "/open-graph-generator",
		path: "/open-graph-generator",
		getParentRoute: () => Route$14
	}),
	PngToWebpRoute: Route$6.update({
		id: "/png-to-webp",
		path: "/png-to-webp",
		getParentRoute: () => Route$14
	}),
	RobotsTxtGeneratorRoute: Route$5.update({
		id: "/robots-txt-generator",
		path: "/robots-txt-generator",
		getParentRoute: () => Route$14
	}),
	SpeechToTextRoute: Route$4.update({
		id: "/speech-to-text",
		path: "/speech-to-text",
		getParentRoute: () => Route$14
	}),
	SvgToWebpRoute: Route$3.update({
		id: "/svg-to-webp",
		path: "/svg-to-webp",
		getParentRoute: () => Route$14
	}),
	TextToSpeechRoute: Route$2.update({
		id: "/text-to-speech",
		path: "/text-to-speech",
		getParentRoute: () => Route$14
	}),
	WebpConverterRoute: Route$1.update({
		id: "/webp-converter",
		path: "/webp-converter",
		getParentRoute: () => Route$14
	}),
	XmlSitemapGeneratorRoute: Route.update({
		id: "/xml-sitemap-generator",
		path: "/xml-sitemap-generator",
		getParentRoute: () => Route$14
	})
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { howToJsonLd as a, imageTools as c, toolById as d, cn as f, replaceExt as g, formatBytes as h, homeJsonLd as i, primaryTools as l, downloadText as m, breadcrumbJsonLd as n, softwareJsonLd as o, downloadBlob as p, faqJsonLd as r, Button as s, router_exports as t, relatedTools as u };
