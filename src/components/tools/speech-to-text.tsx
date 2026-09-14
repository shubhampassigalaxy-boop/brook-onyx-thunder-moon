import { Copy, Download, Mic, Square } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { downloadText } from "@/lib/utils";

type RecCtor = new () => SpeechRecognitionLike;

type SpeechRecognitionLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((ev: SpeechRecEvent) => void) | null;
  onerror: ((ev: { error: string }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

type SpeechRecEvent = {
  resultIndex: number;
  results: ArrayLike<{ isFinal: boolean; 0: { transcript: string } }>;
};

const LANGS = [
  { value: "en-GB", label: "English (United Kingdom)" },
  { value: "en-US", label: "English (United States)" },
  { value: "en-IE", label: "English (Ireland)" },
  { value: "en-AU", label: "English (Australia)" },
  { value: "cy-GB", label: "Welsh" },
  { value: "gd-GB", label: "Scottish Gaelic" },
  { value: "hi-IN", label: "Hindi" },
  { value: "ur-PK", label: "Urdu" },
  { value: "pl-PL", label: "Polish" },
  { value: "ro-RO", label: "Romanian" },
  { value: "fr-FR", label: "French" },
  { value: "es-ES", label: "Spanish" },
];

function getCtor(): RecCtor | null {
  const w = window as unknown as {
    SpeechRecognition?: RecCtor;
    webkitSpeechRecognition?: RecCtor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function SpeechToText() {
  const [supported, setSupported] = useState(true);
  const [listening, setListening] = useState(false);
  const [lang, setLang] = useState("en-GB");
  const [finalText, setFinalText] = useState("");
  const [interim, setInterim] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const recRef = useRef<SpeechRecognitionLike | null>(null);
  const wantRef = useRef(false);

  useEffect(() => {
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
      if (fin) {
        setFinalText((prev) => (prev ? `${prev} ${fin.trim()}` : fin.trim()));
      }
      setInterim(mid);
    };
    rec.onerror = (ev) => {
      if (ev.error === "not-allowed") {
        setError("Microphone permission was blocked. Allow it in the browser address bar.");
      } else if (ev.error !== "no-speech" && ev.error !== "aborted") {
        setError(ev.error.replace(/-/g, " "));
      }
    };
    rec.onend = () => {
      if (wantRef.current) {
        try {
          rec.start();
        } catch {
          setListening(false);
        }
      } else {
        setListening(false);
      }
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

  if (!supported) {
    return (
      <div className="rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)]">
        <p className="text-base font-medium">Speech recognition is not available here</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Use Chrome, Edge or Safari — they ship the Web Speech API. Firefox does not include a
          speech-recognition engine, so dictation cannot run in that browser.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_16rem]">
      <div className="rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-medium">
            {listening ? "Listening…" : "Ready to dictate"}
          </p>
          {listening ? (
            <Button variant="danger" onClick={stop}>
              <Square />
              Stop mic
            </Button>
          ) : (
            <Button onClick={start}>
              <Mic />
              Start mic
            </Button>
          )}
        </div>
        <Textarea
          className="mt-4 min-h-56 font-sans text-base"
          value={display}
          onChange={(e) => {
            setFinalText(e.target.value);
            setInterim("");
          }}
          placeholder="Your words will appear here as you speak…"
          aria-label="Transcript"
        />
        {error ? <p className="mt-2 text-sm text-danger">{error}</p> : null}
        <div className="mt-3 flex flex-wrap gap-2">
          <Button variant="secondary" size="sm" onClick={() => void copy()} disabled={!display}>
            <Copy />
            {copied ? "Copied" : "Copy"}
          </Button>
          <Button
            variant="secondary"
            size="sm"
            disabled={!display}
            onClick={() => downloadText(display, "transcript.txt", "text/plain")}
          >
            <Download />
            Download .txt
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setFinalText("");
              setInterim("");
            }}
          >
            Clear
          </Button>
        </div>
      </div>
      <aside className="h-fit rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <Label htmlFor="lang">Recognition language</Label>
        <select
          id="lang"
          className="mt-2 h-11 w-full rounded-md border border-border bg-surface px-3 text-sm"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          disabled={listening}
        >
          {LANGS.map((l) => (
            <option key={l.value} value={l.value}>
              {l.label}
            </option>
          ))}
        </select>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          English (United Kingdom) is the default. The browser’s own engine does the listening —
          this page never posts audio to Northline.
        </p>
      </aside>
    </div>
  );
}
