export type Faq = { q: string; a: string };

export type ToolId =
  | "webp"
  | "png-webp"
  | "jpg-webp"
  | "jpeg-webp"
  | "gif-webp"
  | "bmp-webp"
  | "svg-webp"
  | "speech"
  | "tts"
  | "meta"
  | "og"
  | "robots"
  | "sitemap";

export type ToolPath =
  | "/webp-converter"
  | "/png-to-webp"
  | "/jpg-to-webp"
  | "/jpeg-to-webp"
  | "/gif-to-webp"
  | "/bmp-to-webp"
  | "/svg-to-webp"
  | "/speech-to-text"
  | "/text-to-speech"
  | "/meta-tag-generator"
  | "/open-graph-generator"
  | "/robots-txt-generator"
  | "/xml-sitemap-generator";

export type Tool = {
  id: ToolId;
  path: ToolPath;
  nav: string;
  name: string;
  short: string;
  category: "images" | "voice" | "seo";
  title: string;
  description: string;
  keywords: string;
  h1: string;
  lead: string;
  intro: string;
  howToTitle: string;
  steps: string[];
  faqs: Faq[];
  related: ToolId[];
  accept?: string;
  fromLabel?: string;
};

export const SITE = {
  name: "Northline",
  tagline: "Free browser tools for the United Kingdom",
  locale: "en-GB",
  region: "GB",
};

export const tools: Tool[] = [
  {
    id: "webp",
    path: "/webp-converter",
    nav: "WebP converter",
    name: "WebP Image Converter",
    short: "Turn PNG, JPG, GIF, BMP and SVG into WebP without leaving the browser.",
    category: "images",
    title: "WebP Converter UK | Convert PNG, JPG, GIF to WebP Free",
    description:
      "Free WebP image converter in the UK. Convert PNG, JPG, JPEG, GIF, BMP and SVG to WebP in your browser. Private, no uploads, no watermarks.",
    keywords:
      "webp converter uk, convert to webp uk, png to webp converter in uk, jpg to webp converter uk, free webp converter, image to webp uk, gif to webp, svg to webp",
    h1: "WebP Image Converter in the UK",
    lead: "Convert any common image to WebP in the browser. Files never leave your machine.",
    intro:
      "Northline’s WebP converter is a free UK tool for designers, developers and shop owners who want smaller images without sending files to a remote server. Drop in PNG, JPG, JPEG, GIF, BMP or SVG — we encode WebP with the browser’s own canvas, then you download the result. That keeps work GDPR-friendly and fast even on a slow connection.",
    howToTitle: "How to convert images to WebP",
    steps: [
      "Drop or choose PNG, JPG, GIF, BMP or SVG files.",
      "Set quality (higher keeps more detail; lower makes a smaller file).",
      "Review the size saving next to each preview.",
      "Download a single WebP, or save every converted file.",
    ],
    faqs: [
      {
        q: "Is this WebP converter free for UK users?",
        a: "Yes. There is no account, watermark or daily cap. Conversion runs locally in Chrome, Edge, Firefox and Safari.",
      },
      {
        q: "Do my images get uploaded?",
        a: "No. FileReader and canvas handle everything on your device. Nothing is posted to a Northline server.",
      },
      {
        q: "Which formats can I convert to WebP?",
        a: "PNG, JPG/JPEG, GIF (first frame), BMP and SVG. Animated GIF becomes a still WebP of the first frame.",
      },
      {
        q: "Will WebP work on UK websites?",
        a: "Yes. All modern browsers used in the UK decode WebP. It is the usual next step after PNG or JPEG for page speed.",
      },
    ],
    related: ["png-webp", "jpg-webp", "gif-webp", "svg-webp"],
  },
  {
    id: "png-webp",
    path: "/png-to-webp",
    nav: "PNG to WebP",
    name: "PNG to WebP Converter",
    short: "Shrink screenshots, UI exports and graphics from PNG to WebP.",
    category: "images",
    title: "PNG to WebP Converter in UK | Free Online Tool",
    description:
      "PNG to WebP converter in the UK. Turn PNG screenshots, UI kits and graphics into smaller WebP files in your browser. Private and free.",
    keywords:
      "png to webp converter in uk, png to webp uk, convert png to webp, free png to webp, png webp converter united kingdom",
    h1: "PNG to WebP Converter in the UK",
    lead: "Drop PNG files and download WebP. Ideal for Figma exports, screenshots and UI kits.",
    intro:
      "PNG is the default export from Figma, Sketch and most screenshot tools — and it is often far larger than it needs to be. This UK-focused PNG to WebP converter keeps transparency where the browser can, then writes a WebP you can drop straight into a site or shop. No upload queue, no compression service in another country.",
    howToTitle: "Convert PNG to WebP",
    steps: [
      "Choose one or more .png files (drag and drop works).",
      "Pick a quality that still looks sharp on a retina display.",
      "Compare original PNG size with the WebP size.",
      "Download the .webp file and replace the PNG on your site.",
    ],
    faqs: [
      {
        q: "Does PNG to WebP keep transparency?",
        a: "Yes, in browsers that encode alpha WebP (Chrome, Edge, Firefox, recent Safari). Check the preview before you publish.",
      },
      {
        q: "Is there a file size limit?",
        a: "Only what your device can draw to a canvas. Very large print PNGs may need shrinking first.",
      },
      {
        q: "Why convert PNG to WebP in the UK?",
        a: "Faster pages, lower hosting bandwidth, and no need to send client artwork to a third-party converter.",
      },
    ],
    related: ["webp", "jpg-webp", "svg-webp"],
    accept: "image/png,.png",
    fromLabel: "PNG",
  },
  {
    id: "jpg-webp",
    path: "/jpg-to-webp",
    nav: "JPG to WebP",
    name: "JPG to WebP Converter",
    short: "Re-encode photographs and product shots from JPG to WebP.",
    category: "images",
    title: "JPG to WebP Converter in UK | Compress Photos Free",
    description:
      "JPG to WebP converter in the UK. Re-encode photos and product images to WebP in your browser for faster UK websites and shops.",
    keywords:
      "jpg to webp converter in uk, jpg to webp uk, jpeg to webp uk, convert jpg to webp, photo to webp converter",
    h1: "JPG to WebP Converter in the UK",
    lead: "Re-encode photographs to WebP for smaller product galleries and blog images.",
    intro:
      "Most UK e-commerce catalogues still ship fat JPEGs. Converting JPG to WebP typically cuts 25–40% off the file without a visible hit at 80–85% quality. Use this tool on product photography, headshots and editorial images — locally, before you upload to Shopify, WooCommerce or a CDN.",
    howToTitle: "Convert JPG to WebP",
    steps: [
      "Drop .jpg or .jpeg photos into the converter.",
      "Start around 82% quality and nudge until the preview looks right.",
      "Check the saving in kilobytes.",
      "Download the WebP and swap it in your theme or CMS.",
    ],
    faqs: [
      {
        q: "JPG or JPEG — is there a difference?",
        a: "No. Both are the same format. This page and the JPEG to WebP tool use the same engine.",
      },
      {
        q: "Will colours look the same?",
        a: "WebP uses its own compression. At 80%+ quality, photographs stay close to the original JPEG.",
      },
      {
        q: "Can I convert several photos at once?",
        a: "Yes. Select a whole folder of JPGs and download each WebP from the list.",
      },
    ],
    related: ["jpeg-webp", "png-webp", "webp"],
    accept: "image/jpeg,.jpg,.jpeg",
    fromLabel: "JPG",
  },
  {
    id: "jpeg-webp",
    path: "/jpeg-to-webp",
    nav: "JPEG to WebP",
    name: "JPEG to WebP Converter",
    short: "The same photo encoder, for .jpeg filenames.",
    category: "images",
    title: "JPEG to WebP Converter in UK | Free Photo Compressor",
    description:
      "JPEG to WebP converter in the UK. Convert .jpeg photographs to WebP in your browser. Free, private, no file upload.",
    keywords:
      "jpeg to webp converter in uk, jpeg to webp uk, convert jpeg to webp, jpeg webp converter united kingdom",
    h1: "JPEG to WebP Converter in the UK",
    lead: "Convert .jpeg files to WebP without an online upload.",
    intro:
      "Cameras and older Windows tools often save .jpeg rather than .jpg. This converter is the JPEG-specific door into the same in-browser WebP encoder — useful when you are batching a shoot for a UK brochure site or estate-agent listing.",
    howToTitle: "Convert JPEG to WebP",
    steps: [
      "Select .jpeg files from your camera roll or export folder.",
      "Set quality, convert, and preview.",
      "Download WebP versions for the web, keep JPEGs for print.",
    ],
    faqs: [
      {
        q: "Is JPEG to WebP lossless?",
        a: "WebP can be near-lossless at quality 100, but the usual win is a slightly lossy encode that still looks clean on screen.",
      },
      {
        q: "Should I keep the original JPEG?",
        a: "Yes if you still need print or Lightroom masters. Serve WebP on the website only.",
      },
    ],
    related: ["jpg-webp", "webp", "png-webp"],
    accept: "image/jpeg,.jpg,.jpeg",
    fromLabel: "JPEG",
  },
  {
    id: "gif-webp",
    path: "/gif-to-webp",
    nav: "GIF to WebP",
    name: "GIF to WebP Converter",
    short: "Turn GIF stills into much smaller WebP files.",
    category: "images",
    title: "GIF to WebP Converter in UK | Compress GIFs Free",
    description:
      "GIF to WebP converter in the UK. Convert GIF images to WebP in your browser. First-frame stills, no upload, free for UK users.",
    keywords:
      "gif to webp converter in uk, gif to webp uk, convert gif to webp, compress gif uk",
    h1: "GIF to WebP Converter in the UK",
    lead: "Convert GIF images to WebP. Animated GIFs export as a still of the first frame.",
    intro:
      "GIF is a poor fit for modern pages — 256 colours and bulky frames. This UK tool encodes a GIF into WebP using canvas. Animated GIFs become a still of frame one (browsers cannot pack animation through canvas.toBlob). For memes and simple graphics the size drop is still worth it.",
    howToTitle: "Convert GIF to WebP",
    steps: [
      "Drop .gif files into the box.",
      "Confirm the first-frame preview looks right.",
      "Download the WebP still.",
    ],
    faqs: [
      {
        q: "Does this keep GIF animation?",
        a: "No. Canvas encoding captures the first frame. For animated WebP you would need a dedicated encoder.",
      },
      {
        q: "Why convert GIF at all?",
        a: "Simple graphics and logos saved as GIF shrink sharply as WebP and look cleaner on retina screens.",
      },
    ],
    related: ["png-webp", "webp", "jpg-webp"],
    accept: "image/gif,.gif",
    fromLabel: "GIF",
  },
  {
    id: "bmp-webp",
    path: "/bmp-to-webp",
    nav: "BMP to WebP",
    name: "BMP to WebP Converter",
    short: "Replace bulky BMP scans and exports with WebP.",
    category: "images",
    title: "BMP to WebP Converter in UK | Convert Bitmap Free",
    description:
      "BMP to WebP converter in the UK. Convert Windows bitmap images to WebP in your browser. Free and private.",
    keywords:
      "bmp to webp converter in uk, bmp to webp uk, convert bmp to webp, bitmap to webp",
    h1: "BMP to WebP Converter in the UK",
    lead: "Turn uncompressed BMP files into web-ready WebP.",
    intro:
      "BMP still turns up from older Windows apps, scanners and school work. The files are huge because they store every pixel raw. Convert BMP to WebP here before you attach them to email or a website — the saving is usually dramatic.",
    howToTitle: "Convert BMP to WebP",
    steps: [
      "Choose .bmp files.",
      "Convert at your chosen quality.",
      "Download the compact WebP.",
    ],
    faqs: [
      {
        q: "Are BMP files supported in every browser?",
        a: "Chrome, Edge and Firefox decode BMP for canvas. If a file fails, re-save it as PNG first.",
      },
    ],
    related: ["png-webp", "jpg-webp", "webp"],
    accept: "image/bmp,.bmp",
    fromLabel: "BMP",
  },
  {
    id: "svg-webp",
    path: "/svg-to-webp",
    nav: "SVG to WebP",
    name: "SVG to WebP Converter",
    short: "Rasterise SVG artwork to WebP for feeds and CMS fields.",
    category: "images",
    title: "SVG to WebP Converter in UK | Rasterise SVG Free",
    description:
      "SVG to WebP converter in the UK. Rasterise SVG logos and icons to WebP in your browser when a CMS or social feed will not take SVG.",
    keywords:
      "svg to webp converter in uk, svg to webp uk, convert svg to webp, rasterise svg uk",
    h1: "SVG to WebP Converter in the UK",
    lead: "Rasterise SVG logos and illustrations to WebP when the destination cannot take vectors.",
    intro:
      "Keep SVG for your site whenever you can — it is still the right format for logos. Use this converter when a CMS, social card or email builder refuses SVG. We draw the vector to canvas at its native size and encode WebP, all in the browser.",
    howToTitle: "Convert SVG to WebP",
    steps: [
      "Drop an .svg file.",
      "Check the raster preview.",
      "Download WebP for the stubborn upload field.",
    ],
    faqs: [
      {
        q: "Should I replace site logos with WebP?",
        a: "No. Keep SVG (or a fallback PNG) on the website. Use WebP for platforms that block SVG.",
      },
      {
        q: "Do fonts inside the SVG embed?",
        a: "Only if they are outlined or already in the file. System fonts may fall back when drawn to canvas.",
      },
    ],
    related: ["png-webp", "webp", "jpg-webp"],
    accept: "image/svg+xml,.svg",
    fromLabel: "SVG",
  },
  {
    id: "speech",
    path: "/speech-to-text",
    nav: "Speech to text",
    name: "Speech to Text",
    short: "Dictate in British English with the built-in Web Speech API.",
    category: "voice",
    title: "Speech to Text UK | Free Voice Dictation in British English",
    description:
      "Free speech to text in the UK. Dictate in British English with your microphone. Live transcript, copy and download. Chrome, Edge and Safari.",
    keywords:
      "speech to text uk, voice dictation uk, speech to text in uk, british english dictation, free voice to text uk, microphone transcription",
    h1: "Speech to Text in the UK",
    lead: "Voice dictation in British English, live in the browser. No account, no audio upload from this page.",
    intro:
      "Northline’s speech to text tool uses the Web Speech API already in Chrome, Edge and Safari. Press start, grant the microphone, and speak — words land in the transcript as you go. Default language is English (United Kingdom). Useful for notes, emails, drafts and meeting recaps when you would rather not type.",
    howToTitle: "How to dictate with speech to text",
    steps: [
      "Open the tool in Chrome, Edge or Safari.",
      "Click Start mic and allow microphone access.",
      "Speak clearly; the transcript updates live.",
      "Copy, download, or keep editing the text.",
    ],
    faqs: [
      {
        q: "Which browsers work in the UK?",
        a: "Chrome, Edge and Safari support the Web Speech API. Firefox does not ship a full speech-recognition engine.",
      },
      {
        q: "Is audio stored on Northline?",
        a: "This page never uploads your recording to our servers. The browser’s own recognition engine handles audio.",
      },
      {
        q: "Can I use British English?",
        a: "Yes. English (United Kingdom) is the default. You can switch to other languages the browser lists.",
      },
      {
        q: "Does it work on iPhone?",
        a: "Safari on iOS supports speech recognition with a microphone permission prompt. Use HTTPS (this site is).",
      },
    ],
    related: ["tts", "meta"],
  },
  {
    id: "tts",
    path: "/text-to-speech",
    nav: "Text to speech",
    name: "Text to Speech",
    short: "Hear your writing read aloud with UK system voices.",
    category: "voice",
    title: "Text to Speech UK | Free Voice Reader with UK Voices",
    description:
      "Free text to speech in the UK. Paste text and hear it with British English system voices. Adjust rate, pitch and voice — all in the browser.",
    keywords:
      "text to speech uk, text to speech in uk, uk voice reader, british english tts, free text to speech uk, speech synthesis",
    h1: "Text to Speech in the UK",
    lead: "A voice reader that uses the British English voices already on your device.",
    intro:
      "Paste copy and press play. The tool wraps your text in SpeechSynthesisUtterance and asks the browser to speak it with a voice from speechSynthesis.getVoices() — typically including Microsoft Hazel, Google UK English or Apple voices on Mac. Rate and pitch are adjustable. Nothing is sent to a cloud TTS vendor from this page.",
    howToTitle: "How to use the voice reader",
    steps: [
      "Paste or type the text you want read aloud.",
      "Pick a UK English voice if one is installed.",
      "Set speed and pitch, then press Play.",
      "Pause, resume or stop at any time.",
    ],
    faqs: [
      {
        q: "Where do the voices come from?",
        a: "They are installed on your operating system and exposed by the browser. Northline does not host voice files.",
      },
      {
        q: "Can I get a British accent?",
        a: "Choose a voice whose name or language code is en-GB (for example Google UK English Female, or Microsoft Hazel).",
      },
      {
        q: "Is there a character limit?",
        a: "Browsers clip very long utterances. For long articles, play a few paragraphs at a time.",
      },
    ],
    related: ["speech", "meta"],
  },
  {
    id: "meta",
    path: "/meta-tag-generator",
    nav: "Meta tags",
    name: "Meta Tag Generator",
    short: "Build title, description, Open Graph and Twitter tags with a live SERP preview.",
    category: "seo",
    title: "Meta Tag Generator UK | Open Graph & SERP Preview",
    description:
      "Free meta tag and Open Graph generator in the UK. Live Google SERP and social card preview. Copy SEO-ready HTML for your site head.",
    keywords:
      "meta tag generator uk, open graph generator uk, serp preview uk, twitter card generator, seo meta tags uk, og tags generator",
    h1: "Meta Tag & Open Graph Generator in the UK",
    lead: "Write title, description and social tags. Watch a Google snippet and a social card update as you type.",
    intro:
      "Search and social previews are the first impression of a UK page. This generator turns your title, description, canonical URL, keywords, robots rules, Open Graph fields and Twitter Card fields into a copy-paste <head> block. A live SERP mock and Facebook/X-style card sit beside the form so you can see truncated titles before you ship.",
    howToTitle: "Generate meta tags",
    steps: [
      "Fill in title, description, canonical URL and image.",
      "Add Open Graph and Twitter Card fields.",
      "Check the SERP and social previews.",
      "Copy the HTML and paste it into your document head.",
    ],
    faqs: [
      {
        q: "What title length should I use in the UK?",
        a: "Aim for about 50–60 characters. Google does not count characters strictly — it measures pixel width — but that range rarely truncates.",
      },
      {
        q: "Do I need both Open Graph and Twitter tags?",
        a: "Open Graph covers Facebook, LinkedIn and most unfurls. Twitter/X tags still help if you want a large summary card on X.",
      },
      {
        q: "Will this put my site on Google?",
        a: "Tags help the snippet. Indexing still needs a crawlable page, sensible content, and a sitemap.",
      },
    ],
    related: ["og", "robots", "sitemap"],
  },
  {
    id: "og",
    path: "/open-graph-generator",
    nav: "Open Graph",
    name: "Open Graph Generator",
    short: "Focused Open Graph and Twitter Card builder with a social preview.",
    category: "seo",
    title: "Open Graph Generator UK | Facebook & X Card Preview",
    description:
      "Open Graph generator in the UK. Build og:title, og:image and Twitter Card tags with a live social preview. Free HTML export.",
    keywords:
      "open graph generator uk, og tag generator uk, facebook card preview, twitter card generator uk, social share tags",
    h1: "Open Graph Generator in the UK",
    lead: "Craft Facebook, LinkedIn and X share cards before you publish.",
    intro:
      "A missing og:image is why so many UK brand links look bare in Slack and on LinkedIn. This page is the social-first view of the same generator: image, title, description, type and Twitter card size, with a live preview. Copy the tags into your CMS or framework head.",
    howToTitle: "Build Open Graph tags",
    steps: [
      "Add the public URL and a 1200×630 image.",
      "Write the og:title and og:description you want shared.",
      "Choose website, article or product.",
      "Copy the tag block into your <head>.",
    ],
    faqs: [
      {
        q: "What size should og:image be?",
        a: "1200×630 pixels is the usual landscape card. Keep important artwork away from the edges.",
      },
      {
        q: "Why is my old image still showing?",
        a: "Facebook and LinkedIn cache unfurls. Use their debugger tools after you deploy a new image URL.",
      },
    ],
    related: ["meta", "sitemap", "robots"],
  },
  {
    id: "robots",
    path: "/robots-txt-generator",
    nav: "robots.txt",
    name: "Robots.txt Generator",
    short: "Write allow, disallow and sitemap lines, then download robots.txt.",
    category: "seo",
    title: "Robots.txt Generator UK | Allow, Disallow & Sitemap",
    description:
      "Free robots.txt generator in the UK. Set user-agents, allow/disallow paths and sitemap URLs, then download a valid robots.txt.",
    keywords:
      "robots.txt generator uk, robots txt generator, disallow generator, seo robots file uk, create robots.txt",
    h1: "Robots.txt Generator in the UK",
    lead: "Build a valid robots.txt for Googlebot and Bingbot, then download the file.",
    intro:
      "robots.txt is the first file crawlers request. This generator formats User-agent, Allow, Disallow and Sitemap lines in the standard protocol so you can host the file at https://your-domain/robots.txt. Use it to keep /admin, /cart and thank-you pages out of the UK index without blocking CSS or the rest of the site.",
    howToTitle: "Create a robots.txt file",
    steps: [
      "Choose a preset or start from Allow all.",
      "Add user-agents and the paths they may not crawl.",
      "Point to your XML sitemap.",
      "Download robots.txt and upload it to your site root.",
    ],
    faqs: [
      {
        q: "Should I Disallow everything?",
        a: "No. An empty allow (or Allow: /) is correct for most public UK sites. Only disallow private or duplicate paths.",
      },
      {
        q: "Does robots.txt hide a page from Google?",
        a: "It asks crawlers not to fetch the URL. The URL can still appear in results if it is linked elsewhere. Use noindex when you need that.",
      },
      {
        q: "Where do I put the file?",
        a: "At the site root: https://example.co.uk/robots.txt — not in a subfolder.",
      },
    ],
    related: ["sitemap", "meta", "og"],
  },
  {
    id: "sitemap",
    path: "/xml-sitemap-generator",
    nav: "XML sitemap",
    name: "XML Sitemap Generator",
    short: "List your URLs and download a sitemap.xml for Search Console.",
    category: "seo",
    title: "XML Sitemap Generator UK | Create sitemap.xml Free",
    description:
      "Free XML sitemap generator in the UK. Add page URLs, lastmod, changefreq and priority, then download sitemap.xml for Google Search Console.",
    keywords:
      "xml sitemap generator uk, sitemap.xml generator, google sitemap uk, create sitemap uk, seo sitemap builder",
    h1: "XML Sitemap Generator in the UK",
    lead: "Assemble a sitemap.xml for Google Search Console and Bing Webmaster Tools.",
    intro:
      "A sitemap does not rank you by itself, but it helps Google discover every important URL on a UK site — especially new shops and brochure sites with weak internal links. Add paths, set lastmod / changefreq / priority, preview the XML, and download sitemap.xml. Then list it in robots.txt and submit it in Search Console.",
    howToTitle: "Build an XML sitemap",
    steps: [
      "Enter your site origin, for example https://www.example.co.uk.",
      "Add each important URL (home, services, blog posts).",
      "Optionally set lastmod, changefreq and priority.",
      "Download sitemap.xml and host it at /sitemap.xml.",
    ],
    faqs: [
      {
        q: "How many URLs can I include?",
        a: "This client-side builder is meant for brochure and small-business sites (hundreds of URLs). Very large catalogues need a CMS-generated sitemap.",
      },
      {
        q: "Is priority required?",
        a: "No. Google has said it ignores priority. lastmod is the useful hint when it is accurate.",
      },
      {
        q: "Do I still need robots.txt?",
        a: "Yes. Add a Sitemap: line pointing at this file so crawlers find it even before Search Console.",
      },
    ],
    related: ["robots", "meta", "og"],
  },
];

export const toolById = Object.fromEntries(tools.map((t) => [t.id, t])) as Record<
  ToolId,
  Tool
>;

export const toolByPath = Object.fromEntries(tools.map((t) => [t.path, t])) as Record<
  string,
  Tool
>;

export const primaryTools: ToolId[] = ["webp", "speech", "tts", "meta", "robots", "sitemap"];

export const imageTools: ToolId[] = [
  "webp",
  "png-webp",
  "jpg-webp",
  "jpeg-webp",
  "gif-webp",
  "bmp-webp",
  "svg-webp",
];

export function relatedTools(id: ToolId): Tool[] {
  return toolById[id].related.map((rid) => toolById[rid]);
}
