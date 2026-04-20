import { useState, useEffect, useRef, useCallback } from "react";

// ── Themes ───────────────────────────────────────────────────────────────────
const THEMES = {
  dayGame: {
    name: "Day Game",
    phoneBg:        "#1a3a2a",
    phoneRing:      "#2a4a36",
    wallBg:         "#0d2318",
    scrollBg:       "#1a3a2a",
    scrollBgBreak:  "#224d38",
    settingsBg:     "#0f2a1c",
    statusColor:    "#e8f0e4",
    navbarName:     "#ffffff",
    editIcon:       "#ffffff",
    navbarIcon:     "#7a9e7a",
    soundIconColor: "#ffffff",
    navbarIconHover:"#e8f0e4",
    nameInputBg:    "rgba(255,255,255,0.1)",
    nameInputBorder:"#e8c547",
    cardBg:         "rgba(255,255,255,0.07)",
    cardDate:       "#e8c547",
    statDivider:    "rgba(255,255,255,0.1)",
    statKey:        "#b0d0b0",
    statValDim:     "#92b892",
    statValActive:  "#e8c547",
    tickerBg:       "rgba(255,255,255,0.05)",
    tickerChipsBg:  "rgba(0,0,0,0.2)",
    tickerChipBorder:"rgba(255,255,255,0.1)",
    tickerChipBg:   "rgba(255,255,255,0.07)",
    tickerDot:      "#e8c547",
    tickerText:     "#c8d8c8",
    chipKey:        "#e8c547",
    chipTime:       "#aacaaa",
    modeTabsBg:     "rgba(0,0,0,0.28)",
    modeTabColor:   "#5a7a5a",
    modeTabWorkBg:  "#2e7d4f",
    modeTabWorkText:"#ffffff",
modeTabBreakBg: "#8C6238",
    modeTabBreakText:"#ffffff",
    focusOutline:   "#e8c547",
    liveLabel:      "#e8f0e4",
    breakLabel:     "#90ccb0",
    timerDigits:    "#ffffff",
    timerModeLbl:   "#6a8a6a",
    arcTrack:       "rgba(255,255,255,0.12)",
    arcWork:        "#2e7d4f",
    arcBreak:       "#8C6238",
    statPopName:    "#e8c547",
    btnWorkBg:      "#2e7d4f",
    btnWorkText:    "#ffffff",
    btnWorkHover:   "#246e3e",
    btnBreakBg:     "#8C6238",
    btnBreakText:   "#ffffff",
    btnBreakHover:  "#7a5230",
    btnResetBg:     "rgba(255,255,255,0.06)",
    btnResetBorder: "rgba(255,255,255,0.13)",
    btnResetColor:  "#aac8aa",
    btnResetHover:  "rgba(255,255,255,0.11)",
    btnResetHoverColor:"#e8f0e4",
    settingsHeader: "rgba(255,255,255,0.08)",
    settingsTitle:  "#ffffff",
    settingsSectionTitle:"#7aaa7a",
    settingsDivider:"rgba(255,255,255,0.06)",
    stepperLabel:   "#e8f0e4",
    stepperSublabel:"#7aaa7a",
    stepperBtnBg:   "rgba(255,255,255,0.1)",
    stepperBtnBorder:"rgba(255,255,255,0.15)",
    stepperBtnColor:"#e8f0e4",
    stepperVal:     "#e8c547",
    stepperUnit:    "#9ab89a",
    lifetimeLabel:  "#9ab89a",
    lifetimeVal:    "#e8c547",
    lifetimeGridBg: "rgba(255,255,255,0.06)",
    lifetimeCellBg: "#0f2a1c",
    lifetimeKey:    "#6a8a6a",
    toggleOffBg:    "rgba(255,255,255,0.15)",
    toggleOnBg:     "#2d6b42",
    comingSoonColor:"#c8d8c8",
    badgeBg:        "#2d6b42",
    badgeColor:     "#e8f0e4",
    badgeSoonBg:    "rgba(255,255,255,0.1)",
    badgeSoonColor: "#6a8a6a",
    resetColor:        "#ff9980",
    resetConfirmColor: "#ffaa90",
    chipBg:            "#8C6238",
    chipText:          "#ffffff",
    chipHRBg:          "#ffd700",
    chipHRText:        "#1a3a2a",
  },
  bananas: {
    name: "Bananas",
    phoneBg:        "#1a1a1a",
    phoneRing:      "#2a2a2a",
    wallBg:         "#111111",
    scrollBg:       "#1a1a1a",
    scrollBgBreak:  "#222222",
    settingsBg:     "#111111",
    statusColor:    "#F4D000",
    navbarName:     "#ffffff",
    editIcon:       "#ffffff",
    navbarIcon:     "#969696",
    soundIconColor: "#ffffff",
    navbarIconHover:"#ffffff",
    nameInputBg:    "rgba(244,208,0,0.12)",
    nameInputBorder:"#F4D000",
    cardBg:         "rgba(255,255,255,0.06)",
    cardDate:       "#00C4A0",
    statDivider:    "rgba(255,255,255,0.1)",
    statKey:        "#969696",
    statValDim:     "#808080",
    statValActive:  "#F4D000",
    tickerBg:       "rgba(255,255,255,0.05)",
    tickerChipsBg:  "rgba(0,0,0,0.3)",
    tickerChipBorder:"rgba(0,196,160,0.25)",
    tickerChipBg:   "rgba(0,196,160,0.08)",
    tickerDot:      "#00C4A0",
    tickerText:     "#969696",
    chipKey:        "#00C4A0",
    chipTime:       "#969696",
    modeTabsBg:     "rgba(0,0,0,0.35)",
    modeTabColor:   "#969696",
    modeTabWorkBg:  "#F4D000",
    modeTabWorkText:"#1a1a1a",
    modeTabBreakBg: "#FF5FA0",
    modeTabBreakText:"#1a1a1a",
    focusOutline:   "#F4D000",
    liveLabel:      "#ffffff",
    breakLabel:     "#FF5FA0",
    timerDigits:    "#ffffff",
    timerModeLbl:   "#969696",
    arcTrack:       "rgba(255,255,255,0.1)",
    arcWork:        "#F4D000",
    arcBreak:       "#FF5FA0",
    statPopName:    "#F4D000",
    btnWorkBg:      "#F4D000",
    btnWorkText:    "#1a1a1a",
    btnWorkHover:   "#e0bc00",
    btnBreakBg:     "#FF5FA0",
    btnBreakText:   "#1a1a1a",
    btnBreakHover:  "#e04e8a",
    btnResetBg:     "rgba(255,255,255,0.06)",
    btnResetBorder: "rgba(255,255,255,0.13)",
    btnResetColor:  "#969696",
    btnResetHover:  "rgba(255,255,255,0.11)",
    btnResetHoverColor:"#ffffff",
    settingsHeader: "rgba(255,255,255,0.06)",
    settingsTitle:  "#ffffff",
    settingsSectionTitle:"#969696",
    settingsDivider:"rgba(255,255,255,0.08)",
    stepperLabel:   "#ffffff",
    stepperSublabel:"#969696",
    stepperBtnBg:   "rgba(255,255,255,0.1)",
    stepperBtnBorder:"rgba(255,255,255,0.15)",
    stepperBtnColor:"#ffffff",
    stepperVal:     "#F4D000",
    stepperUnit:    "#969696",
    lifetimeLabel:  "#969696",
    lifetimeVal:    "#00C4A0",
    lifetimeGridBg: "rgba(255,255,255,0.06)",
    lifetimeCellBg: "#111111",
    lifetimeKey:    "#969696",
    toggleOffBg:    "rgba(255,255,255,0.15)",
    toggleOnBg:     "#00C4A0",
    comingSoonColor:"#969696",
    badgeBg:        "#00C4A0",
    badgeColor:     "#1a1a1a",
    badgeSoonBg:    "rgba(255,255,255,0.1)",
    badgeSoonColor: "#969696",
    resetColor:        "#e07070",
    resetConfirmColor: "#e07070",
    chipBg:            "#00C4A0",
    chipText:          "#1a1a1a",
    chipHRBg:          "#F4D000",
    chipHRText:        "#1a1a1a",
  },
  statsheet: {
    name: "Statsheet",
    phoneBg:        "#ece5d0",
    phoneRing:      "#c4bfb0",
    wallBg:         "#b4ae9e",
    scrollBg:       "#ece5d0",
    scrollBgBreak:  "#f5ede2",
    settingsBg:     "#e4deca",
    statusColor:    "#2a2724",
    navbarName:     "#2a2724",
    editIcon:       "#3a3632",
    navbarIcon:     "#555250",
    soundIconColor: "#3a3632",
    navbarIconHover:"#1a1a1a",
    nameInputBg:    "rgba(0,0,0,0.08)",
    nameInputBorder:"#2a2724",
    cardBg:         "rgba(0,0,0,0.07)",
    cardDate:       "#6b5518",
    statDivider:    "rgba(0,0,0,0.1)",
    statKey:        "#555250",
    statValDim:     "#686460",
    statValActive:  "#7a3030",
    tickerBg:       "rgba(0,0,0,0.07)",
    tickerChipsBg:  "rgba(0,0,0,0.09)",
    tickerChipBorder:"rgba(0,0,0,0.12)",
    tickerChipBg:   "rgba(0,0,0,0.04)",
    tickerDot:      "#7a3030",
    tickerText:     "#5a5652",
    chipKey:        "#7a3030",
    chipTime:       "#5a5652",
    modeTabsBg:     "rgba(0,0,0,0.11)",
    modeTabColor:   "#555250",
    modeTabWorkBg:  "#2a2724",
    modeTabWorkText:"#f5f0e8",
    modeTabBreakBg: "#7a3030",
    modeTabBreakText:"#f5f0e8",
    focusOutline:   "#7a3030",
    liveLabel:      "#2a2724",
    breakLabel:     "#6a5a50",
    timerDigits:    "#2a2724",
    timerModeLbl:   "#636058",
    arcTrack:       "rgba(0,0,0,0.12)",
    arcWork:        "#2a2724",
    arcBreak:       "#7a3030",
    statPopName:    "#7a3030",
    btnWorkBg:      "#2a2724",
    btnWorkText:    "#ffffff",
    btnWorkHover:   "#4a4642",
    btnBreakBg:     "#7a3030",
    btnBreakText:   "#ffffff",
    btnBreakHover:  "#622020",
    btnResetBg:     "rgba(0,0,0,0.05)",
    btnResetBorder: "rgba(0,0,0,0.15)",
    btnResetColor:  "#4a4a4a",
    btnResetHover:  "rgba(0,0,0,0.1)",
    btnResetHoverColor:"#1a1a1a",
    settingsHeader: "rgba(0,0,0,0.06)",
    settingsTitle:  "#2a2724",
    settingsSectionTitle:"#636058",
    settingsDivider:"rgba(0,0,0,0.08)",
    stepperLabel:   "#2a2724",
    stepperSublabel:"#636058",
    stepperBtnBg:   "rgba(0,0,0,0.09)",
    stepperBtnBorder:"rgba(0,0,0,0.15)",
    stepperBtnColor:"#2a2724",
    stepperVal:     "#7a3030",
    stepperUnit:    "#555250",
    lifetimeLabel:  "#555250",
    lifetimeVal:    "#7a3030",
    lifetimeGridBg: "rgba(0,0,0,0.09)",
    lifetimeCellBg: "#e4deca",
    lifetimeKey:    "#636058",
    toggleOffBg:    "rgba(0,0,0,0.15)",
    toggleOnBg:     "#7a3030",
    comingSoonColor:"#5a5652",
    badgeBg:        "#7a3030",
    badgeColor:     "#f5f0e8",
    badgeSoonBg:    "rgba(0,0,0,0.08)",
    badgeSoonColor: "#636058",
    resetColor:        "#5a3030",
    resetConfirmColor: "#5a3030",
    chipBg:            "#7a3030",
    chipText:          "#ffffff",
    chipHRBg:          "#E0A800",
    chipHRText:        "#2a2724",
  },
};

const STATS = [
  { key: "1B", label: "Single",   emoji: "⚾", weight: 45 },
  { key: "2B", label: "Double",   emoji: "✌️", weight: 30 },
  { key: "3B", label: "Triple",   emoji: "🏃", weight: 15 },
  { key: "HR", label: "Home Run", emoji: "💥", weight: 10 },
];

const HR_CALLS  = ["Gone! Way back and GONE!", "See ya later!", "Out of the park!", "Absolutely crushed!", "It's outta here!"];
const HIT_CALLS = {
  "2B": ["Into the gap!", "Off the wall!", "Extra bases!"],
  "3B": ["Rounding second — three bases!", "Legs flying!"],
  "1B": ["Solid contact.", "Up the middle.", "Clean hit."],
};

function getRandomStat() {
  const total = STATS.reduce((s, st) => s + st.weight, 0);
  let r = Math.random() * total;
  for (const st of STATS) { r -= st.weight; if (r <= 0) return st; }
  return STATS[0];
}
function getCall(key) {
  const arr = key === "HR" ? HR_CALLS : (HIT_CALLS[key] || HIT_CALLS["1B"]);
  return arr[Math.floor(Math.random() * arr.length)];
}

function Confetti({ active }) {
  const pieces = useRef(Array.from({ length: 60 }, (_, i) => ({
    id: i, x: Math.random() * 100, delay: Math.random() * 0.8,
    size: 6 + Math.random() * 7,
    color: ["#e8c547","#2d6b42","#c0392b","#fff","#f5dfa0"][i % 5],
  })));
  if (!active) return null;
  return (
    <div style={{ position:"absolute",inset:0,overflow:"hidden",borderRadius:"44px",pointerEvents:"none",zIndex:50 }}>
      {pieces.current.map(p => (
        <div key={p.id} style={{
          position:"absolute", left:`${p.x}%`, top:"-14px",
          width:`${p.size}px`, height:`${p.size}px`,
          background: p.color,
          borderRadius: p.id % 2 === 0 ? "50%" : "2px",
          animation:`confettiFall 2.8s ease-in ${p.delay}s forwards`,
        }} />
      ))}
    </div>
  );
}

function fmt(s) {
  return `${Math.floor(s/60).toString().padStart(2,"0")}:${(s%60).toString().padStart(2,"0")}`;
}

function PlayerName({ name, onChange, T }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(name);
  const ref = useRef();
  useEffect(() => { if (editing) ref.current?.focus(); }, [editing]);
  const commit = () => {
    const v = draft.trim() || "Player";
    onChange(v); setDraft(v); setEditing(false);
  };
  if (editing) return (
    <input ref={ref} value={draft} className="name-input"
      onChange={e => setDraft(e.target.value)} onBlur={commit} maxLength={20}
      onKeyDown={e => { if (e.key==="Enter") commit(); if (e.key==="Escape"){ setDraft(name); setEditing(false); }}}
      aria-label="Edit player name" />
  );
  return (
    <button className="name-btn" onClick={() => setEditing(true)} aria-label={`Player: ${name}. Tap to edit.`}>
      {name.toUpperCase()}
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{color: T ? T.editIcon : "#7a9e7a", flexShrink:0, transition:"color 0.5s ease"}}>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    </button>
  );
}

function Ticker({ log }) {
  const [open, setOpen] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (open && scrollRef.current) scrollRef.current.scrollLeft = 0;
  }, [log.length, open]);

  if (!log.length) return <div style={{height:"10px"}} />;
  const latest = log[0];

  return (
    <div className="ticker-wrap">
      <button className="ticker-bar" onClick={() => setOpen(o => !o)}
        aria-expanded={open} aria-label={open ? "Collapse history" : "Expand play by play history"}>
        <span className="ticker-dot" aria-hidden="true" />
        <span className="ticker-latest">
{latest.stat.label}{latest.stat.key === "HR" && latest.distance ? ` · ${latest.distance} ft` : latest.time ? ` · ${latest.time}` : ""}
        </span>
        <span style={{color:"#6a8a6a",display:"flex",alignItems:"center",transition:"transform 0.25s",transform:open?"rotate(180deg)":"rotate(0deg)"}} aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 4l4 4 4-4"/></svg>
        </span>
      </button>
      {open && (
        <div ref={scrollRef} className="ticker-chips" role="list" aria-label="Play by play history">
          {log.map((entry, i) => (
            <div key={i} className="ticker-chip" role="listitem"
              aria-label={`AB ${log.length - i}: ${entry.stat.label}${entry.stat.key === "HR" && entry.distance ? ` · ${entry.distance} ft` : entry.time ? ` at ${entry.time}` : ""}`}>
              <span className="chip-key">{entry.stat.key}</span>
              <span className="chip-time">{entry.stat.key === "HR" && entry.distance ? `${entry.distance} ft` : entry.time}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Duration stepper ─────────────────────────────────────────────────────────
function DurationStepper({ label, sublabel, value, min, max, onChange }) {
  return (
    <div className="stepper-row">
      <div className="stepper-labels">
        <span className="stepper-label">{label}</span>
        <span className="stepper-sublabel">{sublabel}</span>
      </div>
      <div className="stepper-controls">
        <button
          className="stepper-btn"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          aria-label={`Decrease ${label} by 1 minute`}
        >−</button>
        <span className="stepper-value" aria-label={`${value} minutes`}>{value}<span className="stepper-unit">min</span></span>
        <button
          className="stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          aria-label={`Increase ${label} by 1 minute`}
        >+</button>
      </div>
    </div>
  );
}

// ── Settings panel ────────────────────────────────────────────────────────────
function SettingsPanel({ open, onClose, workMins, breakMins, onWorkChange, onBreakChange, soundOn, onSoundToggle, lifetime, onResetLifetime, themeKey, onThemeChange, T }) {
  const [confirmReset, setConfirmReset] = useState(false);

  useEffect(() => {
    if (!open) setConfirmReset(false);
  }, [open]);

  const handleReset = () => {
    if (confirmReset) {
      onResetLifetime();
      setConfirmReset(false);
    } else {
      setConfirmReset(true);
    }
  };

  const fmtFocusTime = (secs) => {
    const s = Math.floor(secs || 0);
    const h = Math.floor(s / 3600);
    if (h >= 10000) return "9999h+";
    const m   = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    const mm  = String(m).padStart(2, "0");
    const ss  = String(sec).padStart(2, "0");
    return h > 0 ? `${h}:${mm}:${ss}` : `${m}:${ss}`;
  };

  return (
    <>
      {/* Backdrop — always rendered so click-outside works reliably */}
      <div
        className="settings-backdrop"
        onClick={onClose}
        aria-hidden="true"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Slide-in panel */}
      <div className={`settings-panel${open ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Settings">

        {/* Panel header */}
        <div className="settings-header">
          <span className="settings-title">Settings</span>
          <button className="settings-close" onClick={onClose} aria-label="Close settings">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Section: Timer durations */}
        <div className="settings-section">
          <div className="settings-section-title">Timer Durations</div>
          <DurationStepper label="At Plate" sublabel="Focus session" value={workMins} min={1} max={60} onChange={onWorkChange} />
          <div className="settings-divider" />
          <DurationStepper label="Dugout" sublabel="Break session" value={breakMins} min={1} max={30} onChange={onBreakChange} />
        </div>


        {/* Section: Sound */}
        <div className="settings-section">
          <div className="settings-section-title">Sound</div>
          <div className="stepper-row">
            <div className="stepper-labels">
              <span className="stepper-label">Sound Effects</span>
              <span className="stepper-sublabel">Button taps &amp; hit sounds</span>
            </div>
            <button onClick={onSoundToggle}
              aria-label={soundOn ? "Mute sounds" : "Enable sounds"}
              style={{background:"none",border:"none",cursor:"pointer",padding:"6px",borderRadius:"8px",color:T.soundIconColor,display:"flex",alignItems:"center",justifyContent:"center",transition:"color 0.2s"}}>
              {soundOn ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <line x1="23" y1="9" x2="17" y2="15"/>
                  <line x1="17" y1="9" x2="23" y2="15"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Section: Theme */}
        <div className="settings-section">
          <div className="settings-section-title">Theme</div>
          {[
            { key:"dayGame",   label:"Day Game"  },
            { key:"statsheet", label:"Statsheet" },
            { key:"bananas",   label:"Bananas"   },
          ].map(({ key, label }, i, arr) => (
            <div key={key}>
              <div className="stepper-row" style={{padding:"8px 0"}}>
                <span className="stepper-label">{label}</span>
                <button
                  className={`toggle-btn${themeKey===key ? " on" : ""}`}
                  onClick={() => onThemeChange(key)}
                  role="radio"
                  aria-checked={themeKey===key}
                  aria-label={`Select ${label} theme`}
                >
                  <span className="toggle-knob" />
                </button>
              </div>
              {i < arr.length - 1 && <div className="settings-divider" />}
            </div>
          ))}
        </div>

        {/* Section: Career stats */}
        <div className="settings-section">
          <div className="settings-section-title">Career Stats</div>
          <div className="lifetime-row-single">
            <span className="lifetime-row-label">Focus Time</span>
            <span className="lifetime-row-val">{fmtFocusTime(lifetime.focusSecs)}</span>
          </div>
          <div className="settings-divider" />
          <div className="lifetime-hits-grid">
            {[
              { key:"1B", label:"1B" },
              { key:"2B", label:"2B" },
              { key:"3B", label:"3B" },
              { key:"HR", label:"HR" },
            ].map(({ key, label }) => (
              <div key={key} className="lifetime-cell">
                <span className="lifetime-val">{lifetime.hits[key]}</span>
                <span className="lifetime-key">{label}</span>
              </div>
            ))}
          </div>
          <button
            className={`reset-btn${confirmReset ? " confirm" : ""}`}
            onClick={handleReset}
            aria-label={confirmReset ? "Confirm reset career stats" : "Reset career stats"}
          >
            {confirmReset ? "Are you sure? Tap to confirm" : "Reset Career Stats"}
          </button>
        </div>

      </div>
    </>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function BaseballPomodoro() {
  const PREFS_KEY = "ballpark_prefs_v1";
  const loadPrefs = () => {
    try {
      const s = localStorage.getItem("ballpark_prefs_v1");
      if (s) { const p = JSON.parse(s); return { work: p.workMins || 25, brk: p.breakMins || 5, theme: p.theme || "dayGame" }; }
    } catch(e) {}
    return { work: 25, brk: 5, theme: "dayGame" };
  };
  const initPrefs = loadPrefs();
  const [workMins,  setWorkMins]  = useState(initPrefs.work);
  const [breakMins, setBreakMins] = useState(initPrefs.brk);
  const [themeKey,  setThemeKey]  = useState(initPrefs.theme);
  const T = THEMES[themeKey] || THEMES.dayGame;

  const [isMobile, setIsMobile] = useState(() => {
    try { return typeof window !== "undefined" && window.innerWidth <= 500; } catch(e) { return false; }
  });
  useEffect(() => {
    try {
      const handler = () => setIsMobile(window.innerWidth <= 500);
      window.addEventListener("resize", handler);
      handler();
      return () => window.removeEventListener("resize", handler);
    } catch(e) {}
  }, []);



  // Splash screen — shows on first open after hard close (sessionStorage clears on hard close)
  const [showSplash, setShowSplash] = useState(() => {
    try { return !sessionStorage.getItem("ballpark_launched"); } catch(e) { return false; }
  });
  const [splashFading, setSplashFading] = useState(false);
  useEffect(() => {
    if (!showSplash) return;
    try { sessionStorage.setItem("ballpark_launched", "1"); } catch(e) {}
    // Start fade at 1.5s, fully hidden at 2s
    const fadeTimer = setTimeout(() => setSplashFading(true), 1500);
    const hideTimer = setTimeout(() => setShowSplash(false), 2000);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, []);

  // Inject base reset into document.head
  useEffect(() => {
    try {
      const id = "baseball-mobile-reset";
      let el = document.getElementById(id);
      if (!el) {
        el = document.createElement("style");
        el.id = id;
        document.head.appendChild(el);
      }
      el.textContent = `
        html, body, #root {
          margin: 0; padding: 0;
          width: 100%;
          height: 100%;
        }
        body {
          overflow: hidden;
          background: transparent;
        }
      `;
    } catch(e) {}
  }, []);

  const WORK  = workMins  * 60;
  const BREAK = breakMins * 60;

  const [mode, setMode]             = useState("work");
  const [timeLeft, setTimeLeft]     = useState(WORK);
  const [running, setRunning]       = useState(false);
  const todayKey = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
  const [atBats, setAtBats] = useState(() => {
    try {
      const s = JSON.parse(localStorage.getItem("ballpark_today"));
      return s?.date === todayKey ? (s.atBats || 0) : 0;
    } catch(e) { return 0; }
  });
  const [stats, setStats] = useState(() => {
    try {
      const s = JSON.parse(localStorage.getItem("ballpark_today"));
      return s?.date === todayKey ? (s.stats || {"1B":0,"2B":0,"3B":0,"HR":0}) : {"1B":0,"2B":0,"3B":0,"HR":0};
    } catch(e) { return {"1B":0,"2B":0,"3B":0,"HR":0}; }
  });
  const [lastStat, setLastStat]     = useState(null);
  const [confetti, setConfetti]     = useState(false);
  const [call, setCall]             = useState("");
  const [log, setLog]               = useState([]);
  const [playerName, setPlayerName] = useState(() => {
    try { return localStorage.getItem("ballpark_name") || "Player"; } catch(e) { return "Player"; }
  });

  const handleNameChange = (name) => {
    setPlayerName(name);
    try { localStorage.setItem("ballpark_name", name); } catch(e) {}
  };
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  // Lifetime stats — persisted to localStorage
  const LIFETIME_KEY = "ballpark_lifetime_v1";
  const emptyLifetime = () => ({ focusSecs: 0, hits: { "1B":0,"2B":0,"3B":0,HR:0 } });
  const loadLifetime  = () => {
    try { const s = localStorage.getItem(LIFETIME_KEY); return s ? JSON.parse(s) : emptyLifetime(); }
    catch(e) { return emptyLifetime(); }
  };
  const [lifetime, setLifetime] = useState(loadLifetime);

  const saveLifetime = (updated) => {
    setLifetime(updated);
    try { localStorage.setItem(LIFETIME_KEY, JSON.stringify(updated)); } catch(e) {}
  };

  // Persist today's scorecard whenever it changes
  useEffect(() => {
    try { localStorage.setItem("ballpark_today", JSON.stringify({ date: todayKey, atBats, stats })); } catch(e) {}
  }, [atBats, stats]);

  const intervalRef  = useRef(null);
  const animTimerRef = useRef(null);
  const [floatingChips, setFloatingChips] = useState([]);
  const [activeBanner, setActiveBanner] = useState(null); // { text } currently showing
  const bannerQueueRef = useRef([]);       // pending banners to show
  const bannerTimerRef = useRef(null);
  const arcRef       = useRef(null);
  const rafRef       = useRef(null);
  const audioCtxRef  = useRef(null);
  const [soundOn, setSoundOn] = useState(() => { try { const p = JSON.parse(localStorage.getItem("ballpark_prefs_v1")); return p?.sound !== false; } catch(e) { return true; } });

  // When durations change while not running, update the display
  useEffect(() => {
    if (!running) {
      setTimeLeft(mode === "work" ? WORK : BREAK);
    }
  }, [workMins, breakMins]);

  // ── Sound engine ─────────────────────────────────────────────────────────────
  const getCtx = () => {
    if (!audioCtxRef.current)
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  };

  // Sharp mechanical click — Play Ball / Resume / Start Break
  const sfxTap = useCallback((pitch = 1.0) => {
    try {
      const ctx = getCtx();
      // Two-layer click: high transient + low body
      const bufSize = Math.floor(ctx.sampleRate * 0.003);
      const buf  = ctx.createBuffer(1, bufSize, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / bufSize);
      const src = ctx.createBufferSource();
      const hp  = ctx.createBiquadFilter();
      const g   = ctx.createGain();
      src.buffer = buf;
      hp.type = "highpass"; hp.frequency.value = 3000 * pitch;
      g.gain.setValueAtTime(0.5, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      src.connect(hp); hp.connect(g); g.connect(ctx.destination);
      src.start();
      // Low body thud underneath
      const osc = ctx.createOscillator();
      const og  = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(300 * pitch, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80 * pitch, ctx.currentTime + 0.04);
      og.gain.setValueAtTime(0.3, ctx.currentTime);
      og.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(og); og.connect(ctx.destination);
      osc.start(); osc.stop(ctx.currentTime + 0.06);
    } catch(e) {}
  }, []);

  // Ball hitting glove — for pause
  const sfxPause = useCallback(() => {
    try {
      const ctx = getCtx();
      // Noise thud — leather impact
      const bufSize = Math.floor(ctx.sampleRate * 0.06);
      const buf  = ctx.createBuffer(1, bufSize, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufSize, 1.5);
      const src = ctx.createBufferSource();
      const lp  = ctx.createBiquadFilter();
      const g   = ctx.createGain();
      src.buffer = buf;
      lp.type = "lowpass"; lp.frequency.value = 600; lp.Q.value = 1.5;
      g.gain.setValueAtTime(0.5, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      src.connect(lp); lp.connect(g); g.connect(ctx.destination);
      src.start();
      // Low pitched thud body
      const osc = ctx.createOscillator();
      const og  = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(55, ctx.currentTime + 0.07);
      og.gain.setValueAtTime(0.35, ctx.currentTime);
      og.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.connect(og); og.connect(ctx.destination);
      osc.start(); osc.stop(ctx.currentTime + 0.12);
    } catch(e) {}
  }, []);

  // Clock tick — for reset
  const sfxReset = useCallback(() => {
    try {
      const ctx = getCtx();
      // Two ticks — like a clock resetting
      [0, 0.1].forEach((delay) => {
        const bufSize = Math.floor(ctx.sampleRate * 0.004);
        const buf  = ctx.createBuffer(1, bufSize, ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / bufSize);
        const src = ctx.createBufferSource();
        const bp  = ctx.createBiquadFilter();
        const g   = ctx.createGain();
        src.buffer = buf;
        bp.type = "bandpass"; bp.frequency.value = 4000; bp.Q.value = 2;
        const t = ctx.currentTime + delay;
        g.gain.setValueAtTime(0.4, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.03);
        src.connect(bp); bp.connect(g); g.connect(ctx.destination);
        src.start(t);
      });
    } catch(e) {}
  }, []);

  // Bat crack — sharp transient
  const sfxCrack = useCallback((ctx) => {
    // Noise burst for the crack
    const bufSize = ctx.sampleRate * 0.04;
    const buf  = ctx.createBuffer(1, bufSize, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / bufSize);
    const src = ctx.createBufferSource();
    const hp  = ctx.createBiquadFilter();
    const g   = ctx.createGain();
    src.buffer = buf;
    hp.type = "highpass"; hp.frequency.value = 2000;
    g.gain.setValueAtTime(0.9, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
    src.connect(hp); hp.connect(g); g.connect(ctx.destination);
    src.start();
    // Low woody thud underneath
    const osc = ctx.createOscillator();
    const og  = ctx.createGain();
    osc.type = "sine"; osc.frequency.setValueAtTime(220, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.05);
    og.gain.setValueAtTime(0.6, ctx.currentTime);
    og.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.connect(og); og.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime + 0.1);
  }, []);

  // Synthesized crowd cheer of variable intensity
  const sfxCrowd = useCallback((ctx, intensity, duration) => {
    // Layered noise bands pitched to sound like voices
    [400, 800, 1400, 2200].forEach((freq, i) => {
      const bufSize = ctx.sampleRate * duration;
      const buf  = ctx.createBuffer(1, bufSize, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let j = 0; j < bufSize; j++) data[j] = Math.random() * 2 - 1;
      const src = ctx.createBufferSource();
      const bp  = ctx.createBiquadFilter();
      const g   = ctx.createGain();
      src.buffer = buf;
      bp.type = "bandpass"; bp.frequency.value = freq; bp.Q.value = 1.2;
      const vol = intensity * [0.22, 0.18, 0.12, 0.08][i];
      // Swell envelope — builds then fades
      g.gain.setValueAtTime(0, ctx.currentTime);
      g.gain.linearRampToValueAtTime(vol, ctx.currentTime + duration * 0.2);
      g.gain.setValueAtTime(vol, ctx.currentTime + duration * 0.6);
      g.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);
      src.connect(bp); bp.connect(g); g.connect(ctx.destination);
      src.start(); src.stop(ctx.currentTime + duration + 0.05);
    });
  }, []);

  // Hit-specific sounds
  const sfxHit = useCallback((key) => {
    try {
      const ctx = getCtx();
      sfxCrack(ctx);
      // Each hit type gets a different crowd intensity and duration
      const config = {
        "1B": { intensity: 0.4, duration: 1.2 },
        "2B": { intensity: 0.6, duration: 1.8 },
        "3B": { intensity: 0.8, duration: 2.5 },
        "HR": { intensity: 1.2, duration: 3.8 },
      };
      const { intensity, duration } = config[key] || config["1B"];
      // Slight delay after crack so crowd reacts
      setTimeout(() => sfxCrowd(ctx, intensity, duration), 80);
      // HR gets an extra fanfare — ascending 4-note chime
      if (key === "HR") {
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const g   = ctx.createGain();
          osc.type = "sine"; osc.frequency.value = freq;
          const t = ctx.currentTime + 0.1 + i * 0.12;
          g.gain.setValueAtTime(0, t);
          g.gain.linearRampToValueAtTime(0.3, t + 0.04);
          g.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
          osc.connect(g); g.connect(ctx.destination);
          osc.start(t); osc.stop(t + 0.45);
        });
      }
    } catch(e) {}
  }, [sfxCrack, sfxCrowd]);

  // Enqueue a banner message — shows sequentially, never overlapping
  const enqueueBanner = useCallback((text) => {
    bannerQueueRef.current.push(text);
    if (bannerQueueRef.current.length === 1) {
      // Nothing currently showing — start immediately
      const show = () => {
        const next = bannerQueueRef.current[0];
        if (!next) { setActiveBanner(null); return; }
        setActiveBanner({ text: next });
        bannerTimerRef.current = setTimeout(() => {
          setActiveBanner(null);
          bannerQueueRef.current.shift();
          setTimeout(show, 300); // brief gap between sequential banners
        }, 4000);
      };
      show();
    }
  }, []);

  const awardStat = useCallback(() => {
    const stat = getRandomStat();
    if (soundOn) sfxHit(stat.key);
    setLastStat(stat);
    setAtBats(a => a+1);
    setStats(p => ({...p,[stat.key]:p[stat.key]+1}));
    const hrDistance = stat.key === "HR" ? Math.floor(Math.random() * (550 - 350 + 1)) + 350 : null;
    const logTime = new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});
    setLog(prev => [{ stat, time: logTime, distance: hrDistance }, ...prev.slice(0,49)]);
    if (stat.key==="HR"){
      setConfetti(true);
      setTimeout(()=>setConfetti(false),3200);
      if (hrDistance) enqueueBanner(`💥 ${hrDistance} ft`);
    }
    // Launch floating chip
    const chipId = Date.now();
    const durations = { "1B": 1200, "2B": 1400, "3B": 1600, "HR": 2000 };
    const dur = durations[stat.key] || 1400;
    setFloatingChips(prev => [...prev, { id: chipId, stat: {...stat}, dur }]);
    setTimeout(() => setFloatingChips(prev => prev.filter(c => c.id !== chipId)), dur + 100);
    // Compute new lifetime totals inline (don't rely on async state)
    setLifetime(prev => {
      const newHits = { ...prev.hits, [stat.key]: prev.hits[stat.key] + 1 };
      const updated = { ...prev, hits: newHits };
      try { localStorage.setItem(LIFETIME_KEY, JSON.stringify(updated)); } catch(e) {}

      // Milestone checks against new totals
      const totalHits = newHits["1B"] + newHits["2B"] + newHits["3B"] + newHits["HR"];
      const newHRs    = newHits["HR"];

      // HR milestone — every 100
      if (newHRs > 0 && newHRs % 100 === 0) {
        setTimeout(() => enqueueBanner(`🏆 ${newHRs.toLocaleString()} Career Home Runs`), 0);
      }
      // Hit milestone — every 1000
      if (totalHits > 0 && totalHits % 1000 === 0) {
        setTimeout(() => enqueueBanner(`🏆 ${totalHits.toLocaleString()} Career Hits`), 0);
      }

      return updated;
    });
  },[sfxHit, soundOn, enqueueBanner]);

  useEffect(()=>{
    if (!running){ clearInterval(intervalRef.current); return; }
    intervalRef.current = setInterval(()=>{
      // Accumulate focus time every minute tick
      if (mode === "work") {
        setLifetime(prev => {
          const updated = { ...prev, focusSecs: (prev.focusSecs || 0) + 1 };
          try { localStorage.setItem(LIFETIME_KEY, JSON.stringify(updated)); } catch(e) {}
          return updated;
        });
      }
      setTimeLeft(t=>{
        if (t<=1){
          clearInterval(intervalRef.current); setRunning(false);
          if (mode==="work"){ awardStat(); setMode("break"); setTimeLeft(BREAK); }
          else { setMode("work"); setTimeLeft(WORK); }
          return 0;
        }
        return t-1;
      });
    },1000);
    return ()=>clearInterval(intervalRef.current);
  },[running,mode,awardStat,WORK,BREAK]);

  // rAF loop — updates arc DOM directly at 60fps, no React re-render
  useEffect(() => {
    const CIRCUMFERENCE = 2 * Math.PI * 126;
    const cancelRaf = () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };

    if (!running) {
      cancelRaf();
      // Snap arc to current position when paused/stopped
      if (arcRef.current) {
        arcRef.current.style.strokeDashoffset =
          -CIRCUMFERENCE * (1 - timeLeft / (mode === "work" ? WORK : BREAK)); // negative = clockwise
      }
      return;
    }

    // Record start of this run segment
    const startTime   = performance.now();
    const total       = (mode === "work" ? WORK : BREAK);
    const elapsed     = 1 - timeLeft / total;           // fraction already done
    const startOffset = -CIRCUMFERENCE * elapsed;       // negative = clockwise
    const endOffset   = -CIRCUMFERENCE;                 // fully drained
    const duration    = timeLeft * 1000; // ms

    const tick = (now) => {
      const elapsed  = now - startTime;
      const fraction = Math.min(elapsed / duration, 1);
      const offset   = startOffset + (endOffset - startOffset) * fraction;
      if (arcRef.current) arcRef.current.style.strokeDashoffset = offset;
      if (fraction < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return cancelRaf;
  }, [running, mode, timeLeft === (mode === "work" ? WORK : BREAK)]); // only restart rAF on play/pause/reset

  // ── Audio engine ─────────────────────────────────────────────────────────────

  const switchMode = (m) => {
    if (m===mode) return;
    if (soundOn) sfxTap(0.6);
    clearInterval(intervalRef.current);
    setRunning(false); setMode(m);
    setTimeLeft(m==="work"?WORK:BREAK);
  };

  const toggle = () => { if (running) { if (soundOn) sfxPause(); } else { if (soundOn) sfxTap(); } setRunning(r=>!r); };
  const reset  = () => {
    if (soundOn) sfxReset();
    clearInterval(intervalRef.current);
    setRunning(false);
    setTimeLeft(mode==="work"?WORK:BREAK);
  };

  const savePrefs = (w, b, tk, snd) => {
    try { localStorage.setItem("ballpark_prefs_v1", JSON.stringify({ workMins: w, breakMins: b, theme: tk, sound: snd })); } catch(e) {}
  };
  const handleWorkChange = (val) => {
    setWorkMins(val);
    if (!running && mode==="work") setTimeLeft(val*60);
    savePrefs(val, breakMins, themeKey, soundOn);
  };
  const handleBreakChange = (val) => {
    setBreakMins(val);
    if (!running && mode==="break") setTimeLeft(val*60);
    savePrefs(workMins, val, themeKey, soundOn);
  };
  const handleThemeChange = (tk) => {
    setThemeKey(tk);
    savePrefs(workMins, breakMins, tk, soundOn);
  };

  const today     = new Date().toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});
  const isAtStart = timeLeft===(mode==="work"?WORK:BREAK) && !running;
  const btnLabel  = running ? "PAUSE" : isAtStart ? (mode==="work" ? "PLAY BALL" : "START BREAK") : "RESUME";
  const isLive    = running;
  const progress   = 1 - timeLeft / (mode==="work" ? WORK : BREAK); // 0=start, 1=done

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600&display=swap');
        *,*::before,*::after { box-sizing:border-box; margin:0; padding:0; }
        body { background:${T.wallBg}; display:flex; align-items:center; justify-content:center; min-height:100vh; font-family:'Barlow',sans-serif; }

        /* ── Phone ── */
        .phone { width:375px; height:812px; border-radius:44px; box-shadow: 0 0 0 2px ${T.phoneRing}, 0 0 0 7px #111, 0 40px 100px rgba(0,0,0,0.55); position:relative; overflow:hidden; display:flex; flex-direction:column; transition:background 0.5s ease; }
        .phone::before { content:''; position:absolute; right:-3px; top:120px; width:3px; height:60px; background:#0e0e0e; border-radius:0 2px 2px 0; box-shadow:0 80px 0 #0e0e0e; }
        .phone::after  { content:''; position:absolute; left:-3px; top:100px; width:3px; height:36px; background:#0e0e0e; border-radius:2px 0 0 2px; box-shadow:0 52px 0 #0e0e0e, 0 96px 0 #0e0e0e; }
        .notch { position:absolute; top:0; left:50%; transform:translateX(-50%); width:126px; height:34px; background:#0e0e0e; border-radius:0 0 22px 22px; z-index:100; }

        /* ── Status bar ── */
        .status { height:44px; flex-shrink:0; z-index:10; position:relative; display:flex; align-items:flex-end; justify-content:space-between; padding:0 28px 6px; }
        .s-time { font-family:'Barlow',sans-serif; font-size:15px; font-weight:700; color:${T.statusColor}; letter-spacing:0.02em; }
        .s-icons { display:flex; gap:4px; align-items:center; color:${T.statusColor}; }

        /* ── Scroll ── */
        .scroll { flex:1; overflow-y:auto; display:flex; flex-direction:column; padding:0 26px; scrollbar-width:none; background:${mode==="work" ? T.scrollBg : T.scrollBgBreak}; transition:background 0.5s ease; }
        .scroll::-webkit-scrollbar { display:none; }

        /* ── Navbar ── */
        .navbar { display:flex; align-items:center; justify-content:space-between; padding:12px 0 16px; }
        .name-btn { display:flex; align-items:center; gap:7px; background:none; border:none; cursor:pointer; padding:0; font-family:'Barlow Condensed',sans-serif; font-size:22px; font-weight:800; color:${T.navbarName}; transition:color 0.5s ease; letter-spacing:0.04em; }
        .name-btn:focus-visible { outline:3px solid ${T.focusOutline}; outline-offset:3px; border-radius:3px; }
        .name-input { font-family:'Barlow Condensed',sans-serif; font-size:22px; font-weight:800; color:${T.navbarName}; background:${T.nameInputBg}; border:1.5px solid ${T.nameInputBorder}; border-radius:6px; padding:2px 10px; outline:none; letter-spacing:0.04em; width:190px; }
        .settings-btn { background:none; border:none; cursor:pointer; color:${T.navbarIcon}; padding:4px; min-width:44px; min-height:44px; display:flex; align-items:center; justify-content:center; border-radius:8px; transition:color 0.2s; }
        .settings-btn:hover { color:${T.navbarIconHover}; }
        .settings-btn:focus-visible { outline:3px solid ${T.focusOutline}; outline-offset:3px; border-radius:8px; }

        /* ── Stat card ── */
        .stat-card-wrap { background:${T.cardBg}; transition:background 0.5s ease; border-radius:14px; padding:14px 8px 12px; margin-bottom:10px; }
        .stat-date { font-family:'Silkscreen',sans-serif; font-size:13px; font-weight:400; color:${T.cardDate}; letter-spacing:0.05em; text-transform:uppercase; text-align:center; margin-bottom:12px; }
        .stat-row { display:flex; align-items:flex-start; }
        .stat-col { flex:1; text-align:center; position:relative; }
        .stat-col+.stat-col::before { content:''; position:absolute; left:0; top:50%; transform:translateY(-50%); width:1px; height:55%; background:${T.statDivider}; }
        .stat-col-key { font-family:'Barlow Condensed',sans-serif; font-size:13px; font-weight:700; color:${T.statKey}; letter-spacing:0.14em; text-transform:uppercase; margin-bottom:5px; }
        .stat-col-val { font-family:'Silkscreen',sans-serif; font-size:22px; font-weight:400; line-height:1; color:${T.statValDim}; transition:color 0.3s; }
        .stat-col-val.active { color:${T.statValActive}; }
        .stat-col-val.flash  { animation:numPop 0.4s cubic-bezier(0.34,1.56,0.64,1); }

        /* ── Ticker ── */
        .ticker-wrap { margin-bottom:14px; border-radius:10px; overflow:hidden; }
        .ticker-bar { width:100%; display:flex; align-items:center; gap:8px; padding:9px 13px; background:${T.tickerBg}; transition:background 0.5s ease; border:none; cursor:pointer; text-align:left; min-height:40px; border-radius:10px; }
        .ticker-bar:focus-visible { outline:3px solid ${T.focusOutline}; outline-offset:-2px; }
        .ticker-dot { width:6px; height:6px; border-radius:50%; background:${T.tickerDot}; flex-shrink:0; }
        .ticker-latest { flex:1; font-size:13px; color:${T.tickerText}; font-style:italic; }
        .ticker-chips { display:flex; flex-direction:row; gap:6px; padding:8px 12px; background:${T.tickerChipsBg}; border-top:1px solid ${T.tickerChipBorder}; overflow-x:auto; overflow-y:hidden; scrollbar-width:none; border-radius:0 0 10px 10px; }
        .ticker-chips::-webkit-scrollbar { display:none; }
        .ticker-chip { display:flex; flex-direction:column; align-items:center; gap:3px; flex-shrink:0; background:${T.tickerChipBg}; border:1px solid ${T.tickerChipBorder}; border-radius:8px; padding:8px 12px; min-width:54px; cursor:default; }
        .chip-key { font-family:'Barlow Condensed',sans-serif; font-size:13px; font-weight:700; color:${T.chipKey}; letter-spacing:0.08em; }
        .chip-time { font-size:9.5px; color:${T.chipTime}; font-style:italic; white-space:nowrap; }

        /* ── Mode tabs ── */
        .mode-tabs { display:flex; background:${T.modeTabsBg}; transition:background 0.5s ease; border-radius:12px; padding:3px; margin-bottom:16px; }
        .mode-tab { flex:1; padding:10px 0; border:none; cursor:pointer; border-radius:9px; font-family:'Barlow Condensed',sans-serif; font-size:15px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; transition:background 0.2s,color 0.2s; min-height:44px; background:transparent; color:${T.modeTabColor}; }
        .mode-tab:focus-visible { outline:3px solid ${T.focusOutline}; outline-offset:-3px; }
        .mode-tab.active.work  { background:${T.modeTabWorkBg};  color:${T.modeTabWorkText}; }
        .mode-tab.active.break { background:${T.modeTabBreakBg}; color:${T.modeTabBreakText}; }

        /* ── LIVE indicator ── */
        .live-bar { display:flex; align-items:center; justify-content:center; gap:7px; min-height:22px; }
        .live-dot { width:8px; height:8px; border-radius:50%; background:#c0392b; flex-shrink:0; animation:livePulse 1.8s ease-in-out infinite; }
        .break-dot { width:8px; height:8px; border-radius:50%; background:${T.breakLabel}; flex-shrink:0; animation:breakPulse 2.8s ease-in-out infinite; }
        .break-label { font-family:'Barlow Condensed',sans-serif; font-size:13px; font-weight:800; color:${T.liveLabel}; letter-spacing:0.22em; }
        .live-label { font-family:'Barlow Condensed',sans-serif; font-size:13px; font-weight:800; color:${T.liveLabel}; letter-spacing:0.22em; }

        /* ── Timer ── */
        .timer-wrap { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:0; }
        .timer-ring { position:relative; display:flex; align-items:center; justify-content:center; }
        .timer-ring svg { position:absolute; top:0; left:0; }
        .timer-inner { position:relative; z-index:1; display:flex; flex-direction:column; align-items:center; justify-content:center; width:280px; height:280px; }
        .timer-digits { font-family:'Barlow Condensed',sans-serif; font-size:96px; font-weight:800; color:${T.timerDigits}; transition:color 0.5s ease; letter-spacing:-0.02em; line-height:1; }
        .timer-mode-lbl { font-family:'Barlow Condensed',sans-serif; font-size:12px; font-weight:700; color:${T.timerModeLbl}; letter-spacing:0.18em; text-transform:uppercase; margin-top:4px; }
        @keyframes bannerFadeIn { from { opacity:0; } to { opacity:1; } }
        .hr-banner-wrap { height:48px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .hr-banner { text-align:center; font-family:'Barlow Condensed',sans-serif; font-size:23px; font-weight:800; letter-spacing:0.18em; text-transform:uppercase; color:${T.statValActive}; animation:bannerFadeIn 0.35s ease forwards; }
        .stat-announce { height:44px; flex-shrink:0; }
        .floating-chip-wrap { position:absolute; inset:0; pointer-events:none; overflow:hidden; border-radius:44px; z-index:100; }
        .floating-chip { position:absolute; left:50%; transform:translateX(-50%); white-space:nowrap; border-radius:999px; font-family:'Barlow Condensed',sans-serif; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; display:flex; align-items:center; gap:6px; }
        .floating-chip.size-1b { font-size:16px; padding:6px 16px; }
        .floating-chip.size-2b { font-size:19px; padding:7px 18px; }
        .floating-chip.size-3b { font-size:22px; padding:8px 20px; }
        .floating-chip.size-hr { font-size:26px; padding:10px 24px; box-shadow:0 4px 20px rgba(0,0,0,0.25); }

        /* ── Buttons ── */
        .btn-stack { display:flex; flex-direction:column; gap:10px; width:100%; padding:0 0 32px; }
        .btn-primary { width:100%; min-height:58px; border-radius:14px; border:none; font-family:'Barlow Condensed',sans-serif; font-size:20px; font-weight:800; letter-spacing:0.12em; cursor:pointer; transition:background 0.15s, transform 0.1s; }
        .btn-primary:focus-visible { outline:3px solid ${T.focusOutline}; outline-offset:3px; }
        .btn-primary.work  { background:${T.btnWorkBg}; transition:background 0.5s ease, transform 0.1s;  color:${T.btnWorkText}; }
        .btn-primary.work:hover  { background:${T.btnWorkHover};  transform:translateY(-1px); }
        .btn-primary.break { background:${T.btnBreakBg}; transition:background 0.5s ease, transform 0.1s; color:${T.btnBreakText}; }
        .btn-primary.break:hover { background:${T.btnBreakHover}; transform:translateY(-1px); }
        .btn-reset { width:100%; min-height:46px; background:${T.btnResetBg}; transition:background 0.5s ease, color 0.5s ease; border:1px solid ${T.btnResetBorder}; border-radius:12px; font-family:'Barlow Condensed',sans-serif; font-size:15px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:${T.btnResetColor}; cursor:pointer; transition:background 0.15s, color 0.15s; }
        .btn-reset:hover { background:${T.btnResetHover}; color:${T.btnResetHoverColor}; }
        .btn-reset:focus-visible { outline:3px solid ${T.focusOutline}; outline-offset:3px; }

        /* ── Settings panel ── */
        .settings-backdrop { position:absolute; inset:0; background:rgba(0,0,0,0.45); z-index:200; border-radius:44px; }
        .settings-panel { position:absolute; top:0; right:0; bottom:0; width:88%; background:${T.settingsBg}; transition:background 0.5s ease; border-radius:0 44px 44px 0; z-index:201; transform:translateX(100%); transition:transform 0.3s cubic-bezier(0.4,0,0.2,1); display:flex; flex-direction:column; overflow-y:auto; -webkit-overflow-scrolling:touch; overscroll-behavior:none; scrollbar-width:none; border-left:1px solid ${T.settingsDivider}; }
        .settings-panel::-webkit-scrollbar { display:none; }
        .settings-panel.open { transform:translateX(0); }
        .settings-header { display:flex; align-items:center; justify-content:space-between; padding:0px 24px 20px; border-bottom:1px solid ${T.settingsDivider}; flex-shrink:0; }
        .settings-title { font-family:'Barlow Condensed',sans-serif; font-size:22px; font-weight:800; color:${T.settingsTitle}; letter-spacing:0.06em; text-transform:uppercase; }
        .settings-close { background:${T.settingsHeader}; border:none; cursor:pointer; color:${T.navbarIcon}; width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; transition:background 0.2s, color 0.2s; }
        .settings-close:hover { background:${T.cardBg}; color:${T.settingsTitle}; }
        .settings-close:focus-visible { outline:3px solid ${T.focusOutline}; outline-offset:3px; }
        .settings-section { padding:20px 24px; border-bottom:1px solid ${T.settingsDivider}; }
        .settings-section-title { font-family:'Barlow Condensed',sans-serif; font-size:13px; font-weight:700; color:${T.settingsSectionTitle}; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:16px; }
        .settings-divider { height:1px; background:${T.settingsDivider}; margin:12px 0; }

        /* Stepper */
        .stepper-row { display:flex; align-items:center; justify-content:space-between; }
        .stepper-labels { display:flex; flex-direction:column; gap:2px; }
        .stepper-label { font-family:'Barlow Condensed',sans-serif; font-size:17px; font-weight:700; color:${T.stepperLabel}; letter-spacing:0.04em; }
        .stepper-sublabel { font-size:12px; color:${T.stepperSublabel}; font-style:italic; }
        .stepper-controls { display:flex; align-items:center; gap:12px; }
        .stepper-btn { width:36px; height:36px; border-radius:50%; background:${T.stepperBtnBg}; border:1px solid ${T.stepperBtnBorder}; color:${T.stepperBtnColor}; font-size:20px; font-weight:300; line-height:1; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background 0.15s, color 0.15s; flex-shrink:0; }
        .stepper-btn:hover:not(:disabled) { background:${T.cardBg}; }
        .stepper-btn:disabled { opacity:0.3; cursor:not-allowed; }
        .stepper-btn:focus-visible { outline:3px solid ${T.focusOutline}; outline-offset:3px; }
        .stepper-value { font-family:'Silkscreen',sans-serif; font-size:22px; font-weight:400; color:${T.stepperVal}; min-width:52px; text-align:center; letter-spacing:0em; }
        .stepper-unit { font-size:14px; font-weight:400; color:${T.stepperUnit}; margin-left:4px; }

        /* Lifetime stats */
        .lifetime-row-single { display:flex; align-items:center; justify-content:space-between; padding:10px 4px; margin-bottom:4px; }
        .lifetime-row-label { font-size:17px; font-weight:700; color:${T.lifetimeLabel}; letter-spacing:0.04em; font-family:'Barlow Condensed',sans-serif; }
        .lifetime-row-val { font-family:'Silkscreen',sans-serif; font-size:17px; font-weight:400; color:${T.lifetimeVal}; letter-spacing:0em; }
        .lifetime-hits-grid { display:grid; grid-template-columns:1fr 1fr 1fr 1fr; gap:1px; background:${T.lifetimeGridBg}; border-radius:12px; overflow:hidden; margin:12px 0 16px; }
        .lifetime-cell { background:${T.lifetimeCellBg}; padding:12px 4px; text-align:center; display:flex; flex-direction:column; gap:4px; }
        .lifetime-val { font-family:'Silkscreen',sans-serif; font-size:22px; font-weight:400; color:${T.lifetimeVal}; letter-spacing:0em; line-height:1; }
        .lifetime-key { font-size:11px; font-weight:400; color:${T.lifetimeKey}; letter-spacing:0.05em; text-transform:uppercase; }
        .reset-btn { width:100%; min-height:40px; background:rgba(192,57,43,0.12); border:1px solid rgba(192,57,43,0.25); border-radius:10px; font-family:'Barlow Condensed',sans-serif; font-size:13px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:${T.resetColor}; cursor:pointer; transition:background 0.2s, color 0.2s; }
        .reset-btn:hover { background:rgba(192,57,43,0.22); }
        .reset-btn.confirm { background:rgba(192,57,43,0.18); color:${T.resetConfirmColor}; border-color:rgba(192,57,43,0.4); font-size:12px; }
        .reset-btn:focus-visible { outline:3px solid ${T.focusOutline}; outline-offset:3px; }

        /* Toggle */
        .toggle-btn { position:relative; width:46px; height:26px; border-radius:13px; border:none; cursor:pointer; background:${T.toggleOffBg}; transition:background 0.25s; flex-shrink:0; padding:0; }
        .toggle-btn.on { background:${T.toggleOnBg}; }
        .toggle-btn:focus-visible { outline:3px solid ${T.focusOutline}; outline-offset:3px; }
        .toggle-knob { position:absolute; top:3px; left:3px; width:20px; height:20px; border-radius:50%; background:#fff; transition:transform 0.25s; display:block; }
        .toggle-btn.on .toggle-knob { transform:translateX(20px); }

        /* Theme rows */
        /* Badges */
        .settings-coming-soon { display:flex; align-items:center; justify-content:space-between; padding:10px 4px; font-family:'Barlow',sans-serif; font-size:16px; font-weight:400; color:${T.comingSoonColor}; letter-spacing:0.02em; }
        .settings-badge { font-size:10px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase; background:${T.badgeBg}; color:${T.badgeColor}; padding:3px 8px; border-radius:6px; }
        .settings-badge-soon { font-size:10px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase; background:${T.badgeSoonBg}; color:${T.badgeSoonColor}; padding:3px 8px; border-radius:6px; }

        /* ── Mobile full-screen override ── */
        @media (max-width: 480px) {
          body { background:${mode==="work" ? T.scrollBg : T.scrollBgBreak}; min-height:100dvh; align-items:stretch; }
          .app-outer { display:block !important; min-height:calc(100dvh + 50px) !important; padding:0 !important; margin-bottom:-50px !important; background:${mode==="work" ? T.scrollBg : T.scrollBgBreak} !important; }
          .phone { width:100% !important; height:100dvh !important; border-radius:0 !important; box-shadow:none !important; overflow:hidden !important; overscroll-behavior:none !important; }
          .phone::before, .phone::after { display:none !important; }
          .notch { display:none !important; }
          .status { display:none !important; }
          .scroll {
            overflow:hidden !important;
            display:flex !important;
            flex-direction:column !important;
            height:100% !important;
            padding: env(safe-area-inset-top, 16px) 24px env(safe-area-inset-bottom, 16px) 24px !important;
            overscroll-behavior:none !important;
            -webkit-overflow-scrolling:touch !important;
            overflow-y:auto !important;
          }
          .navbar { padding:8px 0 10px; flex:0 0 auto; }
          .stat-card-wrap { padding:12px 12px 10px; margin-bottom:10px; flex:0 0 auto; width:100%; }
          .stat-date { margin-bottom:8px; }
          .stat-col-val { font-size:28px !important; }
          .ticker-wrap { margin-bottom:10px; flex:0 0 auto; }
          .mode-tabs { margin-bottom:8px; flex:0 0 auto; width:100%; }
          .hr-banner-wrap { height:26px !important; flex:0 0 26px; }
          .hr-banner { font-size:16px !important; }
          .timer-wrap { flex:1 1 0 !important; min-height:0 !important; padding:0 0 40px 0 !important; justify-content:center !important; overflow:hidden; width:100%; }
          .live-bar { min-height:18px !important; margin-bottom:6px !important; }
          .timer-ring { width:270px !important; height:270px !important; flex-shrink:0; }
          .timer-ring svg { width:270px !important; height:270px !important; }
          .timer-inner { width:270px !important; height:270px !important; }
          .timer-digits { font-size:82px !important; }
          .floating-chip-wrap { border-radius:0 !important; }
          .stat-announce { display:none !important; }
          .btn-stack { flex:0 0 auto; padding:10px 0 16px !important; gap:10px; width:100%; }
          .btn-primary { min-height:54px !important; width:100% !important; }
          .btn-reset { min-height:44px !important; width:100% !important; }
          .settings-backdrop { border-radius:0 !important; }
          .settings-panel { 
            position:absolute !important;
            top:0 !important;
            right:0 !important;
            bottom:-50px !important;
            width:88% !important;
            border-radius:0 !important;
            padding-top:calc(env(safe-area-inset-top, 0px) + 8px) !important;
            padding-bottom:calc(env(safe-area-inset-bottom, 0px) + 32px) !important;
            overscroll-behavior:none !important;
            -webkit-overflow-scrolling:touch !important;
            overflow-y:auto !important;
          }
          .settings-backdrop {
            border-radius:0 !important;
            bottom:-50px !important;
          }
        }

        /* ── Help Modal ── */
        .help-backdrop { position:absolute; inset:0; background:rgba(0,0,0,0.55); z-index:200; border-radius:44px; }
        .help-modal { position:absolute; left:0; right:0; bottom:0; max-height:88%; background:${T.settingsBg}; border-radius:28px 28px 0 0; z-index:201; display:flex; flex-direction:column; transform:translateY(100%); transition:transform 0.35s cubic-bezier(0.4,0,0.2,1); overflow:hidden; }
        .help-modal.open { transform:translateY(0); }
        .help-modal-header { display:flex; align-items:center; justify-content:space-between; padding:20px 24px 16px; border-bottom:1px solid ${T.settingsDivider}; flex-shrink:0; }
        .help-modal-title { font-family:'Barlow Condensed',sans-serif; font-size:20px; font-weight:800; color:${T.settingsTitle}; letter-spacing:0.06em; text-transform:uppercase; }
        .help-modal-body { overflow-y:auto; -webkit-overflow-scrolling:touch; overscroll-behavior:none; padding:20px 24px 40px; display:flex; flex-direction:column; gap:20px; }
        .help-section-title { font-family:'Barlow Condensed',sans-serif; font-size:13px; font-weight:700; color:${T.statValActive}; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:6px; }
        .help-text { font-family:'Barlow',sans-serif; font-size:16px; font-weight:400; color:${T.stepperLabel}; line-height:1.65; }
        .help-table { width:100%; border-collapse:collapse; margin-top:6px; }
        .help-table td { font-family:'Barlow',sans-serif; font-size:15px; color:${T.stepperLabel}; padding:6px 0; vertical-align:top; line-height:1.5; }
        .help-table td:first-child { font-family:'Barlow Condensed',sans-serif; font-weight:700; color:${T.statValActive}; width:36%; letter-spacing:0.04em; }
        .help-divider { height:1px; background:${T.settingsDivider}; }
        .help-privacy-link { font-family:'Barlow Condensed',sans-serif; font-size:13px; font-weight:700; color:${T.statValActive}; letter-spacing:0.1em; text-decoration:none; text-transform:uppercase; }
        @media (max-width: 480px) {
          .help-backdrop { border-radius:0 !important; position:fixed !important; }
          .help-modal { position:fixed !important; border-radius:28px 28px 0 0 !important; max-height:92% !important; }
        }

        /* ── Keyframes ── */
        @keyframes splashBallPop { 0% { transform:scale(0.4); opacity:0; } 100% { transform:scale(1); opacity:1; } }
        @keyframes splashTextFade { 0% { opacity:0; transform:translateY(10px); } 100% { opacity:1; transform:translateY(0); } }
        @keyframes confettiFall { 0% { transform:translateY(0) rotate(0deg); opacity:1; } 100% { transform:translateY(950px) rotate(720deg); opacity:0; } }
        @keyframes floatUp1b { 0% { bottom:38%; opacity:1; transform:translateX(-50%) scale(0.8); } 15% { transform:translateX(-50%) scale(1.05); } 85% { opacity:1; } 100% { bottom:88%; opacity:0; transform:translateX(-50%) scale(0.95); } }
        @keyframes floatUp2b { 0% { bottom:38%; opacity:1; transform:translateX(-50%) scale(0.8); } 15% { transform:translateX(-50%) scale(1.08); } 85% { opacity:1; } 100% { bottom:88%; opacity:0; transform:translateX(-50%) scale(0.95); } }
        @keyframes floatUp3b { 0% { bottom:38%; opacity:1; transform:translateX(-50%) scale(0.8); } 15% { transform:translateX(-50%) scale(1.1); } 85% { opacity:1; } 100% { bottom:88%; opacity:0; transform:translateX(-50%) scale(0.95); } }
        @keyframes floatUpHR { 0% { bottom:38%; opacity:1; transform:translateX(-50%) scale(0.7); } 12% { transform:translateX(-50%) scale(1.15); } 20% { transform:translateX(-50%) scale(0.95); } 28% { transform:translateX(-50%) scale(1.05); } 85% { opacity:1; } 100% { bottom:90%; opacity:0; transform:translateX(-50%) scale(1); } }
        @keyframes numPop { 0%,100% { transform:scale(1); } 45% { transform:scale(1.18); } }
        @keyframes livePulse { 0% { box-shadow:0 0 0 0 rgba(192,57,43,0.8); } 65% { box-shadow:0 0 0 8px rgba(192,57,43,0); } 100% { box-shadow:0 0 0 0 rgba(192,57,43,0); } }
        @keyframes breakPulse { 0%,100% { opacity:0.5; } 50% { opacity:1; } }
      `}</style>

      {/* ── Splash Screen ── */}
      {showSplash && (
        <div style={{
          position:"fixed", inset:0, zIndex:9999,
          background:"#1a3a2a",
          display:"flex", flexDirection:"column",
          alignItems:"center", justifyContent:"center", gap:"24px",
          opacity: splashFading ? 0 : 1,
          transition: splashFading ? "opacity 0.5s ease" : "none",
          pointerEvents:"none",
        }}>
          {/* PomoBall logo */}
          <img
            src="data:image/png;base64,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"
            alt="PomoBall"
            style={{
              width:"120px", height:"120px",
              imageRendering:"pixelated",
              animation:"splashBallPop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards",
            }}
          />
          {/* App name */}
          <div style={{
            display:"flex", flexDirection:"column", alignItems:"center", gap:"6px",
            animation:"splashTextFade 0.5s ease 0.25s both",
          }}>
            <div style={{
              fontFamily:"'Barlow Condensed',sans-serif",
              fontSize:"48px", fontWeight:800,
              letterSpacing:"0.06em",
              textTransform:"uppercase",
            }}>
              <span style={{color:"#ffffff"}}>Pomo</span><span style={{color:"#e8c547"}}>Ball</span>
            </div>
          </div>
        </div>
      )}

      <div className="app-outer" style={isMobile ? {display:"block",width:"100%",minHeight:"100dvh",background:mode==="work"?T.scrollBg:T.scrollBgBreak} : {display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100dvh",background:T.wallBg}}>
        <div className="phone" role="main" aria-label="Ballpark Focus Pomodoro Timer" style={isMobile ? {width:"100%",height:"100dvh",maxHeight:"100dvh",display:"flex",flexDirection:"column",borderRadius:0,boxShadow:"none",background:mode==="work"?T.scrollBg:T.scrollBgBreak,transition:"background 0.5s ease"} : {background:mode==="work"?T.scrollBg:T.scrollBgBreak,transition:"background 0.5s ease"}}>
          <Confetti active={confetti} />
          <div className="notch" aria-hidden="true" />

          {/* Settings panel */}
          <SettingsPanel
            open={settingsOpen}
            onClose={() => setSettingsOpen(false)}
            workMins={workMins}
            breakMins={breakMins}
            onWorkChange={handleWorkChange}
            soundOn={soundOn}
            onSoundToggle={() => {
              const next = !soundOn;
              setSoundOn(next);
              savePrefs(workMins, breakMins, themeKey, next);
              if (next) {
                // Small confirmation chime — two ascending notes
                try {
                  const ctx = audioCtxRef.current || new (window.AudioContext || window.webkitAudioContext)();
                  if (!audioCtxRef.current) audioCtxRef.current = ctx;
                  if (ctx.state === "suspended") ctx.resume();
                  // Double clock tick confirmation
                  [0, 0.1].forEach((delay) => {
                    const bufSize = Math.floor(ctx.sampleRate * 0.004);
                    const buf  = ctx.createBuffer(1, bufSize, ctx.sampleRate);
                    const data = buf.getChannelData(0);
                    for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / bufSize);
                    const src = ctx.createBufferSource();
                    const bp  = ctx.createBiquadFilter();
                    const g   = ctx.createGain();
                    src.buffer = buf;
                    bp.type = "bandpass"; bp.frequency.value = 4000; bp.Q.value = 2;
                    const t = ctx.currentTime + delay;
                    g.gain.setValueAtTime(0.4, t);
                    g.gain.exponentialRampToValueAtTime(0.001, t + 0.03);
                    src.connect(bp); bp.connect(g); g.connect(ctx.destination);
                    src.start(t);
                  });
                } catch(e) {}
              }
            }}
            onBreakChange={handleBreakChange}
            lifetime={lifetime}
            onResetLifetime={() => saveLifetime(emptyLifetime())}
            themeKey={themeKey}
            onThemeChange={handleThemeChange}
            T={T}
          />

          {/* Help Modal */}
          {helpOpen && (
            <div className="help-backdrop" onClick={() => setHelpOpen(false)} aria-hidden="true" />
          )}
          <div className={`help-modal${helpOpen ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Help">
            <div className="help-modal-header">
              <span className="help-modal-title">⚾ How PomoBall Works</span>
              <button className="settings-close" onClick={() => setHelpOpen(false)} aria-label="Close help">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="help-modal-body">

              <div>
                <div className="help-section-title">What is the Pomodoro Method?</div>
                <p className="help-text">The Pomodoro Technique is a time management method where you work in focused intervals — typically 25 minutes — followed by a short break. The idea is simple: deep focus for a set time, then rest, then repeat. Over time, these intervals add up to serious progress.</p>
              </div>

              <div className="help-divider" />

              <div>
                <div className="help-section-title">The Baseball Twist</div>
                <p className="help-text">In PomoBall, every focus session is an at-bat. Complete your session and you step up to the plate — the result is a randomly awarded hit. Most sessions are Singles, but every now and then you crack a Home Run.</p>
                <table className="help-table" style={{marginTop:"12px"}}>
                  <tbody>
                    <tr><td>At Plate</td><td>Your active focus session</td></tr>
                    <tr><td>Dugout</td><td>Your break — rest between at-bats</td></tr>
                    <tr><td>Single</td><td>Solid, dependable work</td></tr>
                    <tr><td>Double</td><td>A strong session</td></tr>
                    <tr><td>Triple</td><td>A standout effort</td></tr>
                    <tr><td>Home Run</td><td>The rarest — celebrate it</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="help-divider" />

              <div>
                <div className="help-section-title">Why I Built This</div>
                <p className="help-text">I'm a lifelong baseball fan who's been using Pomodoro timers for years. The idea came to me while grinding through some work with a baseball game on in the background — I started thinking about how similar the two really are. Every at-bat is a fresh chance. Every pitch is a decision. Every session at your desk is the same way: a moment of focus, a shot at something good.</p>
                <p className="help-text" style={{marginTop:"10px"}}>PomoBall is built around that idea. Each Pomodoro isn't just a timer — it's an at-bat. And each at-bat is a chance for progress and productivity when you're at the plate.</p>
              </div>

              <div className="help-divider" />

              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <span className="help-text" style={{fontSize:"12px", opacity:0.7}}>Privacy Policy</span>
                <a href="YOUR_NOTION_URL_HERE" target="_blank" rel="noopener noreferrer" className="help-privacy-link">View →</a>
              </div>

            </div>
          </div>

          {/* Status bar */}
          <div className="status" aria-hidden="true">
            <span className="s-time">9:41</span>
            <div className="s-icons">
              <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor"><rect x="0" y="3" width="3" height="9" rx="1"/><rect x="4.5" y="2" width="3" height="10" rx="1"/><rect x="9" y="0.5" width="3" height="11.5" rx="1"/><rect x="13.5" y="0" width="3" height="12" rx="1"/></svg>
              <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor"><path d="M8 2.4C10.5 2.4 12.7 3.5 14.2 5.2L15.5 3.7C13.6 1.6 11 .4 8 .4S2.4 1.6.5 3.7l1.3 1.5C3.3 3.5 5.5 2.4 8 2.4z"/><path d="M8 5.2c1.7 0 3.2.7 4.3 1.8l1.3-1.5C12.1 4 10.2 3.2 8 3.2S3.9 4 2.4 5.5l1.3 1.5C4.8 5.9 6.3 5.2 8 5.2z"/><circle cx="8" cy="10" r="1.8"/></svg>
              <svg width="26" height="12" viewBox="0 0 26 12" fill="currentColor"><rect x="0" y="1" width="22" height="10" rx="3" fillOpacity=".35"/><rect x="1" y="2" width="18" height="8" rx="2"/><path d="M23 4v4a2 2 0 000-4z"/></svg>
            </div>
          </div>

          <div className="scroll" style={isMobile ? {padding:"env(safe-area-inset-top, 16px) 24px env(safe-area-inset-bottom, 16px) 24px", overflow:"hidden", display:"flex", flexDirection:"column", flex:"1 1 0", minHeight:0} : {}}>


            {/* Navbar */}
            <div className="navbar">
              <PlayerName name={playerName} onChange={handleNameChange} T={T} />
              <div style={{display:"flex", alignItems:"center", gap:"4px"}}>
                <button className="settings-btn" onClick={() => setHelpOpen(true)} aria-label="Open help">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </button>
                <button className="settings-btn" onClick={() => setSettingsOpen(true)} aria-label="Open settings">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </button>
              </div>
            </div>

            {/* Stat card */}
            <div className="stat-card-wrap" aria-label="Today's stats">
              <div className="stat-date">Today's Scorecard · {today}</div>
              <div className="stat-row" role="list">
                <div className="stat-col" role="listitem" aria-label={`At bats: ${atBats}`}>
                  <div className="stat-col-key">AB</div>
                  <div className={`stat-col-val${atBats>0?" active":""}`} aria-hidden="true">{atBats}</div>
                </div>
                {STATS.map(stat => {
                  const val   = stats[stat.key];
                  const isNew = false;
                  return (
                    <div key={stat.key} className="stat-col" role="listitem" aria-label={`${stat.label}: ${val}`}>
                      <div className="stat-col-key">{stat.key}</div>
                      <div className={`stat-col-val${val>0?" active":""}${isNew?" flash":""}`} aria-hidden="true">{val}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Ticker */}
            <Ticker log={log} />

            {/* Mode tabs */}
            <div className="mode-tabs" role="tablist" aria-label="Timer mode">
              <button className={`mode-tab${mode==="work"?" active work":""}`}
                role="tab" aria-selected={mode==="work"} onClick={()=>switchMode("work")}>
                At Plate
              </button>
              <button className={`mode-tab${mode==="break"?" active break":""}`}
                role="tab" aria-selected={mode==="break"} onClick={()=>switchMode("break")}>
                Dugout
              </button>
            </div>

            {/* HR Distance Banner — fixed height so nothing shifts */}
            <div className="hr-banner-wrap" role="status" aria-live="polite">
              {activeBanner && <span className="hr-banner">{activeBanner.text}</span>}
            </div>

            {/* Timer */}
            <div className="timer-wrap">
              {isLive
                ? (mode === "work"
                    ? <div className="live-bar" style={{marginBottom:"10px"}} aria-label="Timer is live"><span className="live-dot" aria-hidden="true" /><span className="live-label">LIVE</span></div>
                    : <div className="live-bar" style={{marginBottom:"10px"}} aria-label="Changing sides"><span className="break-dot" aria-hidden="true" /><span className="break-label">CHANGING SIDES</span></div>)
                : <div className="live-bar" aria-hidden="true" style={{opacity:0,marginBottom:"10px"}} />
              }

              {/* Progress ring — rAF driven for 60fps smoothness */}
              <div className="timer-ring" style={isMobile ? {width:"270px",height:"270px"} : {width:"280px",height:"280px",maxWidth:"100%"}}>
                <svg width="280" height="280" viewBox="0 0 280 280" aria-hidden="true" style={isMobile ? {width:"270px",height:"270px"} : {}}>
                  <circle cx="140" cy="140" r="126" fill="none" stroke={T.arcTrack} strokeWidth="6" transform="rotate(-90 140 140)" />
                  <circle
                    ref={arcRef}
                    cx="140" cy="140" r="126"
                    fill="none"
                    stroke={mode==="work" ? T.arcWork : T.arcBreak}
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 126}
                    strokeDashoffset={-2 * Math.PI * 126 * progress}
                    transform="rotate(-90 140 140)"
                  />
                </svg>
                <div className="timer-inner" style={isMobile ? {width:"270px",height:"270px"} : {}}>
                  <div className="timer-digits" role="timer" aria-label={`${fmt(timeLeft)} remaining`}
                    style={isMobile ? {fontSize:"90px"} : {}}>
                    {fmt(timeLeft)}
                  </div>
                  <div className="timer-mode-lbl">{mode==="work" ? "Focus" : "Rest"}</div>
                </div>
              </div>
            </div>

            {/* Floating chip overlay */}
            <div className="floating-chip-wrap" aria-live="assertive" aria-atomic="true">
              {floatingChips.map(({ id, stat, dur }) => {
                const sizeClass = { "1B":"size-1b","2B":"size-2b","3B":"size-3b","HR":"size-hr" }[stat.key] || "size-1b";
                const animName  = { "1B":"floatUp1b","2B":"floatUp2b","3B":"floatUp3b","HR":"floatUpHR" }[stat.key] || "floatUp1b";
                const bgColor   = stat.key==="HR" ? T.chipHRBg : T.chipBg;
                const textColor = stat.key==="HR" ? T.chipHRText : T.chipText;
                return (
                  <div key={id} role="alert"
                    className={`floating-chip ${sizeClass}`}
                    style={{ background:bgColor, color:textColor, animation:`${animName} ${dur}ms cubic-bezier(0.22,1,0.36,1) forwards` }}>
                    <span aria-hidden="true">{stat.emoji}</span>{stat.label}!
                  </div>
                );
              })}
            </div>
            <div className="stat-announce" />

            {/* Buttons */}
            <div className="btn-stack" style={isMobile ? {flexShrink:0,padding:`10px 0 16px`,gap:"10px"} : {}}>
              <button className={`btn-primary ${mode}`} onClick={toggle}
                aria-label={running?"Pause timer":isAtStart?"Start timer":"Resume timer"}>
                {btnLabel}
              </button>
              <button className="btn-reset" onClick={reset} aria-label="Reset timer">
                Reset Timer
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
