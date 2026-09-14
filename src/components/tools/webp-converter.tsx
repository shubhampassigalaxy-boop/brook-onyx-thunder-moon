import { Download, ImagePlus, LoaderCircle, Trash2 } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn, downloadBlob, formatBytes, replaceExt } from "@/lib/utils";

type Item = {
  id: string;
  file: File;
  preview: string;
  status: "queued" | "working" | "done" | "error";
  error?: string;
  webp?: Blob;
  webpUrl?: string;
  origBytes: number;
  webpBytes?: number;
};

const DEFAULT_ACCEPT =
  "image/png,image/jpeg,image/gif,image/bmp,image/svg+xml,image/webp,.png,.jpg,.jpeg,.gif,.bmp,.svg,.webp";

function encodeWebp(file: File, quality: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read that file."));
    reader.onload = () => {
      const src = String(reader.result);
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const w = img.naturalWidth || img.width;
        const h = img.naturalHeight || img.height;
        if (!w || !h) {
          reject(new Error("Image has no dimensions."));
          return;
        }
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Canvas is not available."));
          return;
        }
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(
                new Error(
                  "This browser could not encode WebP. Try Chrome, Edge, or up-to-date Safari.",
                ),
              );
              return;
            }
            resolve(blob);
          },
          "image/webp",
          quality,
        );
      };
      img.onerror = () => reject(new Error("Could not decode that image."));
      img.src = src;
    };
    reader.readAsDataURL(file);
  });
}

export function WebpConverter({
  accept = DEFAULT_ACCEPT,
  fromLabel,
}: {
  accept?: string;
  fromLabel?: string;
}) {
  const [items, setItems] = useState<Item[]>([]);
  const [quality, setQuality] = useState(82);
  const [busy, setBusy] = useState(false);
  const [drag, setDrag] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const itemsRef = useRef(items);
  itemsRef.current = items;

  const addFiles = useCallback((list: FileList | File[]) => {
    const files = Array.from(list).filter(
      (f) => f.type.startsWith("image/") || /\.(png|jpe?g|gif|bmp|svg|webp)$/i.test(f.name),
    );
    if (!files.length) return;
    const next: Item[] = files.map((file) => ({
      id: `${file.name}-${file.size}-${file.lastModified}-${Math.random()}`,
      file,
      preview: URL.createObjectURL(file),
      status: "queued",
      origBytes: file.size,
    }));
    setItems((prev) => [...next, ...prev]);
  }, []);

  const convertOne = useCallback(async (id: string, q: number) => {
    const current = itemsRef.current.find((it) => it.id === id);
    if (!current) return;
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, status: "working", error: undefined } : it)),
    );
    try {
      const blob = await encodeWebp(current.file, q);
      const url = URL.createObjectURL(blob);
      setItems((prev) =>
        prev.map((it) =>
          it.id === id
            ? { ...it, status: "done", webp: blob, webpUrl: url, webpBytes: blob.size }
            : it,
        ),
      );
    } catch (err) {
      setItems((prev) =>
        prev.map((it) =>
          it.id === id
            ? {
                ...it,
                status: "error",
                error: err instanceof Error ? err.message : "Conversion failed.",
              }
            : it,
        ),
      );
    }
  }, []);

  const convertAll = async () => {
    setBusy(true);
    const q = quality / 100;
    const ids = itemsRef.current.map((it) => it.id);
    for (const id of ids) {
      await convertOne(id, q);
    }
    setBusy(false);
  };

  const remove = (id: string) => {
    setItems((prev) => {
      const it = prev.find((x) => x.id === id);
      if (it?.preview) URL.revokeObjectURL(it.preview);
      if (it?.webpUrl) URL.revokeObjectURL(it.webpUrl);
      return prev.filter((x) => x.id !== id);
    });
  };

  const downloadAll = () => {
    items
      .filter((it) => it.webp)
      .forEach((it, i) => {
        window.setTimeout(() => {
          downloadBlob(it.webp!, replaceExt(it.file.name, "webp"));
        }, i * 180);
      });
  };

  const done = items.filter((it) => it.status === "done");
  const label = fromLabel ? `${fromLabel} files` : "PNG, JPG, GIF, BMP or SVG";

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
      <div>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDrag(true);
          }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDrag(false);
            addFiles(e.dataTransfer.files);
          }}
          className={cn(
            "relative flex min-h-52 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed px-6 py-10 text-center transition-[background-color,border-color] duration-150",
            drag ? "border-primary bg-surface-2" : "border-border bg-surface",
          )}
        >
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple
            className="absolute inset-0 z-10 cursor-pointer opacity-0"
            aria-label={`Upload ${label}`}
            onChange={(e) => {
              if (e.target.files) addFiles(e.target.files);
              e.target.value = "";
            }}
          />
          <ImagePlus className="size-8 text-primary" />
          <p className="mt-3 text-base font-medium">Drop {label} here</p>
          <p className="mt-1 text-sm text-muted">
            or click to browse — conversion stays on this device
          </p>
        </div>

        {items.length ? (
          <ul className="mt-5 grid gap-3">
            {items.map((it) => (
              <li
                key={it.id}
                className="flex flex-col gap-3 rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:flex-row sm:items-center"
              >
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <img
                    src={it.webpUrl ?? it.preview}
                    alt=""
                    className="size-16 shrink-0 rounded-md object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{it.file.name}</p>
                    <p className="mt-0.5 text-xs tabular-nums text-muted">
                      {formatBytes(it.origBytes)}
                      {it.webpBytes != null ? (
                        <>
                          {" "}
                          → {formatBytes(it.webpBytes)}{" "}
                          <span className="text-ok">
                            {it.webpBytes < it.origBytes
                              ? `−${Math.round((1 - it.webpBytes / it.origBytes) * 100)}%`
                              : "same size"}
                          </span>
                        </>
                      ) : null}
                    </p>
                    {it.status === "error" ? (
                      <p className="mt-1 text-xs text-danger">{it.error}</p>
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {it.status === "done" && it.webp ? (
                    <Button
                      size="sm"
                      onClick={() => downloadBlob(it.webp!, replaceExt(it.file.name, "webp"))}
                    >
                      <Download />
                      WebP
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="secondary"
                      disabled={it.status === "working"}
                      onClick={() => void convertOne(it.id, quality / 100)}
                    >
                      {it.status === "working" ? <LoaderCircle className="animate-spin" /> : null}
                      Convert
                    </Button>
                  )}
                  <Button size="icon" variant="ghost" aria-label="Remove" onClick={() => remove(it.id)}>
                    <Trash2 />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <aside className="h-fit rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <Label htmlFor="quality">Quality · {quality}%</Label>
        <input
          id="quality"
          type="range"
          min={10}
          max={100}
          step={1}
          value={quality}
          onChange={(e) => setQuality(Number(e.target.value))}
          className="mt-3 h-11 w-full accent-primary"
        />
        <p className="mt-2 text-xs leading-relaxed text-muted">
          Around 80–85% is the usual sweet spot for UK web pages. 100% is near-lossless.
        </p>
        <div className="mt-5 flex flex-col gap-2">
          <Button onClick={() => void convertAll()} disabled={!items.length || busy}>
            {busy ? <LoaderCircle className="animate-spin" /> : null}
            {items.length ? `Convert ${items.length} to WebP` : "Convert to WebP"}
          </Button>
          <Button variant="secondary" onClick={downloadAll} disabled={!done.length}>
            Download all ({done.length})
          </Button>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-subtle">
          Animated GIFs export the first frame. SVG is rasterised at its native size.
        </p>
      </aside>
    </div>
  );
}
