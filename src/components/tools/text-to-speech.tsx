import { Pause, Play, Square } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Voice = SpeechSynthesisVoice;

export function TextToSpeech() {
  const [text, setText] = useState(
    "Northline reads this aloud with the voices already installed on your device. Choose a British English voice if you have one.",
  );
  const [voices, setVoices] = useState<Voice[]>([]);
  const [voiceUri, setVoiceUri] = useState("");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [status, setStatus] = useState<"idle" | "speaking" | "paused">("idle");

  useEffect(() => {
    const load = () => {
      const list = window.speechSynthesis.getVoices();
      setVoices(list);
      setVoiceUri((prev) => {
        if (prev && list.some((v) => v.voiceURI === prev)) return prev;
        const uk = list.find((v) => v.lang.toLowerCase().startsWith("en-gb"));
        return uk?.voiceURI ?? list.find((v) => v.default)?.voiceURI ?? list[0]?.voiceURI ?? "";
      });
    };
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", load);
      window.speechSynthesis.cancel();
    };
  }, []);

  const grouped = useMemo(() => {
    const uk = voices.filter((v) => v.lang.toLowerCase().startsWith("en-gb"));
    const other = voices.filter((v) => !v.lang.toLowerCase().startsWith("en-gb"));
    return { uk, other };
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
    } else {
      u.lang = "en-GB";
    }
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

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
      <div className="rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
        <Label htmlFor="tts-text">Text to read</Label>
        <Textarea
          id="tts-text"
          className="mt-2 min-h-56 text-base"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="mt-4 flex flex-wrap gap-2">
          {status === "idle" ? (
            <Button onClick={speak} disabled={!text.trim()}>
              <Play />
              Play
            </Button>
          ) : null}
          {status === "speaking" ? (
            <Button onClick={pause}>
              <Pause />
              Pause
            </Button>
          ) : null}
          {status === "paused" ? (
            <Button onClick={resume}>
              <Play />
              Resume
            </Button>
          ) : null}
          <Button variant="secondary" onClick={stop} disabled={status === "idle"}>
            <Square />
            Stop
          </Button>
        </div>
      </div>
      <aside className="h-fit rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <Label htmlFor="voice">Voice</Label>
        <select
          id="voice"
          className="mt-2 h-11 w-full rounded-md border border-border bg-surface px-3 text-sm"
          value={voiceUri}
          onChange={(e) => setVoiceUri(e.target.value)}
        >
          {grouped.uk.length ? (
            <optgroup label="United Kingdom">
              {grouped.uk.map((v) => (
                <option key={v.voiceURI} value={v.voiceURI}>
                  {v.name}
                </option>
              ))}
            </optgroup>
          ) : null}
          {grouped.other.length ? (
            <optgroup label="Other voices">
              {grouped.other.map((v) => (
                <option key={v.voiceURI} value={v.voiceURI}>
                  {v.name} ({v.lang})
                </option>
              ))}
            </optgroup>
          ) : null}
        </select>
        {!voices.length ? (
          <p className="mt-2 text-xs text-muted">
            Voices load a moment after the page opens. If the list stays empty, the browser has none
            installed.
          </p>
        ) : null}

        <Label htmlFor="rate" className="mt-5 block">
          Speed · {rate.toFixed(1)}×
        </Label>
        <input
          id="rate"
          type="range"
          min={0.5}
          max={2}
          step={0.1}
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="mt-2 h-11 w-full accent-primary"
        />
        <Label htmlFor="pitch" className="mt-3 block">
          Pitch · {pitch.toFixed(1)}
        </Label>
        <input
          id="pitch"
          type="range"
          min={0.5}
          max={2}
          step={0.1}
          value={pitch}
          onChange={(e) => setPitch(Number(e.target.value))}
          className="mt-2 h-11 w-full accent-primary"
        />
      </aside>
    </div>
  );
}
