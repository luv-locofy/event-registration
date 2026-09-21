import { ChevronDown, ChevronUp } from "lucide-react";
import { BENTO_PRESETS, FONT_WEIGHT_OPTIONS } from "./landing-data";

type LandingDevToolsProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  titleWeight: number;
  setTitleWeight: (weight: number) => void;
  bentoStyle: number;
  setBentoStyle: (style: number) => void;
  confettiCount: number;
  setConfettiCount: (count: number) => void;
  confettiSize: number;
  setConfettiSize: (size: number) => void;
  confettiOpacity: number;
  setConfettiOpacity: (opacity: number) => void;
  confettiSpread: number;
  setConfettiSpread: (spread: number) => void;
};

export function LandingDevTools({ open, setOpen, titleWeight, setTitleWeight, bentoStyle, setBentoStyle, confettiCount, setConfettiCount, confettiSize, setConfettiSize, confettiOpacity, setConfettiOpacity, confettiSpread, setConfettiSpread }: LandingDevToolsProps) {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-[9999]">
      <button onClick={() => setOpen(!open)} className="mx-auto flex items-center gap-1.5 bg-foreground text-background text-xs font-medium px-4 py-1.5 rounded-t-lg shadow-lg">
        🎨 Dev tools {open ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
      </button>
      {open && (
        <div className="bg-card border border-border rounded-t-xl shadow-2xl p-4 w-[340px] space-y-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Title font weight</label>
            <select value={titleWeight} onChange={(event) => setTitleWeight(Number(event.target.value))} className="w-full text-sm bg-background border border-input rounded-lg px-3 py-2 text-foreground">
              {FONT_WEIGHT_OPTIONS.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Bento colour style</label>
            <div className="flex gap-1.5">
              {BENTO_PRESETS.map((preset, index) => (
                <button key={preset.label} onClick={() => setBentoStyle(index)} className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${bentoStyle === index ? "bg-primary text-primary-foreground border-primary" : "bg-background border-input text-foreground hover:bg-muted"}`}>
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-xs font-medium text-muted-foreground">Confetti visible</span>
            <input type="checkbox" checked={confettiCount > 0} onChange={(event) => setConfettiCount(event.target.checked ? 6 : 0)} className="accent-primary w-4 h-4" />
          </label>
          <div className="border-t border-border pt-3 space-y-2">
            <label className="text-xs font-medium text-muted-foreground block">Confetti</label>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between"><span className="text-[11px] text-muted-foreground">Size</span><span className="text-[11px] text-muted-foreground w-8 text-right">{confettiSize.toFixed(1)}</span></div>
              <input type="range" min="0.3" max="2.5" step="0.1" value={confettiSize} onChange={(event) => setConfettiSize(Number(event.target.value))} className="w-full h-1.5 accent-primary" />
              <div className="flex items-center justify-between"><span className="text-[11px] text-muted-foreground">Boldness</span><span className="text-[11px] text-muted-foreground w-8 text-right">{Math.round(confettiOpacity * 100)}%</span></div>
              <input type="range" min="0.1" max="1" step="0.05" value={confettiOpacity} onChange={(event) => setConfettiOpacity(Number(event.target.value))} className="w-full h-1.5 accent-primary" />
              <div className="flex items-center justify-between"><span className="text-[11px] text-muted-foreground">Amount</span><span className="text-[11px] text-muted-foreground w-8 text-right">{confettiCount}</span></div>
              <input type="range" min="1" max="8" step="1" value={confettiCount} onChange={(event) => setConfettiCount(Number(event.target.value))} className="w-full h-1.5 accent-primary" />
              <div className="flex items-center justify-between"><span className="text-[11px] text-muted-foreground">Spread</span><span className="text-[11px] text-muted-foreground w-8 text-right">{confettiSpread.toFixed(1)}</span></div>
              <input type="range" min="0.5" max="2" step="0.1" value={confettiSpread} onChange={(event) => setConfettiSpread(Number(event.target.value))} className="w-full h-1.5 accent-primary" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
