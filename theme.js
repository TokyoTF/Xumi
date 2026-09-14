// Xumi - settings button in navbar + player icon toggles
(function () {
  const KEY = "xumi:player-visibility";
  const OPTIONS = [
    { id: "shuffle", label: "Shuffle", icon: '<svg viewBox="0 0 16 16"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a1.75 1.75 0 0 1 1.338-.623h2.334l-1.016 1.017a.75.75 0 0 0 1.06 1.061L15.83 3.5 13.151.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.677 1.155-1.672-2.01A3.75 3.75 0 0 0 .39 3.5zM13.109 13h2.031l-2.677-3.176a.75.75 0 0 0-1.06-1.06l1.016 1.017H11.16a1.75 1.75 0 0 1-1.338-.623l-.677-1.155-1.449 2.454a3.75 3.75 0 0 0 2.873 1.34H11.16l-1.018 1.017a.75.75 0 1 0 1.06 1.06L13.109 13z"/></svg>' },
    { id: "prev", label: "Previous", icon: '<svg viewBox="0 0 16 16"><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"/></svg>' },
    { id: "play", label: "Play / Pause", icon: '<svg viewBox="0 0 16 16"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 1.054.606l9.838-6.325a.7.7 0 0 0 0-1.212L3.055.744A.7.7 0 0 0 2.7 1z"/></svg>' },
    { id: "next", label: "Next", icon: '<svg viewBox="0 0 16 16"><path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05.107A.7.7 0 0 0 1 .713v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"/></svg>' },
    { id: "repeat", label: "Repeat", icon: '<svg viewBox="0 0 16 16"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.47 12.38a.75.75 0 0 1 0-1.06l3.298-3.295a.75.75 0 1 1 1.06 1.06l-1.019 1.018h2.44a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"/></svg>' },
    { id: "lyrics", label: "Lyrics", icon: '<svg viewBox="0 0 16 16"><path d="M12.5 2a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0V3h1.25a.75.75 0 0 0 0-1.5H12.5zM9.5 4.5v6.09L5.174 8.77a.3.3 0 0 0-.49.232v4.152c0 .191.185.31.354.214l4.862-2.733V14.5a.75.75 0 0 0 1.5 0v-9a1 1 0 0 0-1-1h-.9zM4 9.5H1.5a.75.75 0 0 0 0 1.5H4V9.5zm0 3H1.5a.75.75 0 0 0 0 1.5H4v-1.5z"/></svg>' },
    { id: "mini", label: "Mini player", icon: '<svg viewBox="0 0 16 16"><path d="M2 1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm0 1.5h6V11H2V2.5zm7.5-.5a.75.75 0 0 1 .75-.75h2.5a1.25 1.25 0 0 1 1.25 1.25v6.5a1.25 1.25 0 0 1-1.25 1.25h-2.5a.75.75 0 0 1-.75-.75v-7.5z"/></svg>' },
    { id: "volume", label: "Volume", icon: '<svg viewBox="0 0 16 16"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.75 3.75 0 0 1-1.906-3.26V6.08a3.75 3.75 0 0 1 1.906-3.26l6.925-4a.75.75 0 0 1 .75 0zm.25 2.636-6 3.464v4.1l6 3.464V3.486zM12.5 8a4.5 4.5 0 0 0-1.263-3.122.75.75 0 1 0-1.06 1.061A3 3 0 0 1 11 8a3 3 0 0 1-.823 2.061.75.75 0 0 0 1.06 1.06A4.5 4.5 0 0 0 12.5 8z"/></svg>' },
    { id: "devices", label: "Devices", icon: '<svg viewBox="0 0 16 16"><path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25v-1.5H1.75A1.75 1.75 0 0 1 0 10V3.5C0 2.784.784 2 1.75 2H6v.75zm0 1.5H1.75a.25.25 0 0 0-.25.25V10a.25.25 0 0 0 .25.25H6v-6zM7.75 2.5H6v10.75h8.25a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25H7.75z"/></svg>' },
    { id: "queue", label: "Queue", icon: '<svg viewBox="0 0 16 16"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"/></svg>' },
    { id: "fullscreen", label: "Fullscreen", icon: '<svg viewBox="0 0 16 16"><path d="M6.53.75A.75.75 0 0 1 7.28.25h8.47a.75.75 0 0 1 .75.75v8.47a.75.75 0 0 1-1.5 0V2.81L8.53 9.28a.75.75 0 0 1-1.06-1.06L13.94 1.75H7.28a.75.75 0 0 1-.75-.75zm-5.78 8.47a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.5a.75.75 0 0 1 1.5 0v6.66L8.22.69a.75.75 0 0 1 1.06 1.06L2.81 8.22v.53z"/></svg>' },
    { id: "cover", label: "Cover art", icon: '<svg viewBox="0 0 16 16"><path d="M16 4a4 4 0 0 0-8 0v7.32A3.42 3.42 0 0 0 11.42 14h1.16A4.42 4.42 0 0 0 17 9.58V4h-1zm-1.5 5.58a2.92 2.92 0 0 1-2.92 2.92h-1.16a1.92 1.92 0 0 1-1.92-1.92V4.5a2.5 2.5 0 0 1 5-1v6.08zM0 4a4 4 0 0 1 4-4h7.5v1.5H4a2.5 2.5 0 0 0-2.5 2.5V11H0V4z"/></svg>' },
  ];

  const GENERAL = [
    { id: "closeNpv", label: "Hide Now Playing view on startup", icon: '<svg viewBox="0 0 16 16"><path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm0 1.5h12V14H2V2.5zM8 5.5h5.5v1.5H8V5.5zM8 9h5.5v1.5H8V9z"/></svg>' },
    { id: "hideNpv", label: "Hide Now Playing view (display none)", icon: '<svg viewBox="0 0 16 16"><path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm0 1.5h12V14H2V2.5zM8 5.5h5.5v1.5H8V5.5zM8 9h5.5v1.5H8V9z"/></svg>' },
    { id: "customWc", label: "Custom window buttons", icon: '<svg viewBox="0 0 16 16"><path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm0 1.5h12V14H2V2.5z"/></svg>' },
  ];
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch { return {}; }
  }
  function save(s) { localStorage.setItem(KEY, JSON.stringify(s)); }
  function playerRoot() {
    return document.querySelector("footer.main-nowPlayingBar-nowPlayingBar, .main-nowPlayingBar-container footer, .main-nowPlayingBar-container");
  }
  function findEl(id) {
    const root = playerRoot();
    if (!root) return null;
    const strict = (sel) => root.querySelector(sel);
    const btns = Array.from(root.querySelectorAll("button"));
    const byLabel = (re) => btns.find((b) => re.test((b.getAttribute("aria-label") || "") + " " + (b.getAttribute("title") || "")));
    switch (id) {
      case "shuffle": {
        const s = strict('[data-testid="control-button-shuffle"]') || byLabel(/shuffle|aleatorio/i);
        if (s) return s;
        // By position: first button in the control group
        const ctrls = root.querySelector('[data-testid="player-controls"]');
        if (ctrls) { const b = ctrls.querySelectorAll("button")[0]; if (b) return b; }
        const all = Array.from(root.querySelectorAll("footer button, button"));
        return all[0] || null;
      }
      case "prev": return strict('[data-testid="control-button-skip-back"]') || byLabel(/^(previous|anterior)/i);
      case "play": {
        const s =
          strict('[data-testid="control-button-play"]') ||
          strict('[data-testid="control-button-playpause"]') ||
          strict('button[data-testid*="play" i]');
        if (s) return s;
        // By position: the middle button in the control group
        const ctrls = root.querySelector('[data-testid="player-controls"]') || root;
        const all = Array.from(ctrls.querySelectorAll("button")).filter((b) => b.offsetParent !== null || true);
        // The typical group is [shuffle, prev, play, next, repeat]
        const sh = all.findIndex((b) => /shuffle|aleatorio/i.test(b.getAttribute("aria-label") || "") || /shuffle/i.test(b.getAttribute("data-testid") || ""));
        if (sh !== -1 && all[sh + 2]) return all[sh + 2];
        return byLabel(/reproduc|pause|play/i);
      }
      case "next": return strict('[data-testid="control-button-skip-forward"]') || byLabel(/^(next|siguiente)/i);
      case "repeat": return strict('[data-testid="control-button-repeat"]') || byLabel(/^repetir|^repeat/i);
      case "lyrics": return strict('[data-testid="control-button-lyrics"]') || byLabel(/lyrics|letra/i);
      case "mini": return strict('[data-testid="control-button-miniplayer"], [data-testid="mini-player"]') || byLabel(/mini/i);
      case "volume": return strict('[data-testid="volume-bar"]') || root.querySelector('input[type="range"]')?.closest("div");
      case "devices": return strict('[data-testid="control-button-connect"]') || byLabel(/dispositiv|device|connect/i);
      case "queue": return strict('[data-testid="control-button-queue"]') || byLabel(/^cola$|^queue$/i);
      case "fullscreen": return byLabel(/pantalla completa|full screen/i);
      case "cover": return strict('[data-testid="cover-art-image"]') || root.querySelector("img");
      default: return null;
    }
  }
  // Official fixed icons (not cloned: clones came out distorted / with tick state)
  const FIXED_ICONS = {
    play: '<svg viewBox="0 0 16 16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"/></svg>',
  };
  function realIcon(id) {
    if (FIXED_ICONS[id]) return FIXED_ICONS[id];
    if (id === "cover") {
      const el = findEl("cover");
      const img = el && (el.tagName === "IMG" ? el : el.querySelector("img"));
      if (img && img.src) return '<img src="' + img.src + '" style="width:18px;height:18px;border-radius:50%;object-fit:cover;flex-shrink:0;" />';
      return (OPTIONS.find((o) => o.id === id) || {}).icon || "";
    }
    const el = findEl(id);
    const svg = el && (el.tagName === "SVG" ? el : el.querySelector("svg"));
    if (svg) {
      const c = svg.cloneNode(true);
      c.setAttribute("width", "18"); c.setAttribute("height", "18");
      return c.outerHTML;
    }
    return (OPTIONS.find((o) => o.id === id) || {}).icon || "";
  }
  function apply(state) {
    OPTIONS.forEach((o) => {
      const hide = state[o.id] === false;
      document.body.classList.toggle("xumi-hide-" + o.id, hide);
      const el = findEl(o.id);
      if (el) el.style.display = hide ? "none" : "";
    });
    // Hide Now Playing view via CSS (enabled by default)
    document.body.classList.toggle("xumi-hide-npv", state.hideNpv !== false);
    // Custom window controls mode: used to collapse the native titlebar via CSS
    document.body.classList.toggle("xumi-custom-wc", state.customWc !== false);
  }

  function openModal(state) {
    closeModal();
    document.body.classList.add("xumi-modal-open");
    const overlay = document.createElement("div");
    overlay.id = "xumi-modal-overlay";
    const modal = document.createElement("div");
    modal.id = "xumi-modal";
    modal.innerHTML = "<h2>Xumi · Player</h2><p>Show or hide each player icon.</p>";
    OPTIONS.forEach((o) => {
      const row = document.createElement("div");
      row.className = "xumi-row";
      const checked = state[o.id] !== false ? "checked" : "";
      row.innerHTML =
        '<span class="xumi-label">' + realIcon(o.id) + "<span>" + o.label + "</span></span>" +
        '<label class="xumi-switch"><input type="checkbox" data-id="' + o.id + '" ' + checked + '><span class="xumi-slider"></span></label>';
      row.querySelector("input").addEventListener("change", (e) => {
        state[o.id] = e.target.checked;
        save(state);
        apply(state);
      });
      modal.appendChild(row);
    });
    const h3 = document.createElement("h2");
    h3.textContent = "General";
    h3.style.marginTop = "16px";
    modal.appendChild(h3);
    GENERAL.forEach((o) => {
      const row = document.createElement("div");
      row.className = "xumi-row";
      const checked = state[o.id] !== false ? "checked" : "";
      row.innerHTML =
        '<span class="xumi-label">' + o.icon + "<span>" + o.label + "</span></span>" +
        '<label class="xumi-switch"><input type="checkbox" data-id="' + o.id + '" ' + checked + '><span class="xumi-slider"></span></label>';
      row.querySelector("input").addEventListener("change", (e) => {
        state[o.id] = e.target.checked;
        save(state);
        apply(state);
      });
      modal.appendChild(row);
    });
    overlay.appendChild(modal);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
    // Keep wheel events inside the modal so it scrolls without a prior click
    modal.addEventListener("wheel", (e) => { e.stopPropagation(); }, { passive: true });
    document.body.appendChild(overlay);
    modal.setAttribute("tabindex", "-1");
    modal.focus({ preventScroll: true });
  }
  function closeModal() { document.getElementById("xumi-modal-overlay")?.remove(); document.body.classList.remove("xumi-modal-open"); }

  function injectProfileItem(state) {
    // The profile menu is a .main-contextMenu-menu containing "Preferencias"/"Preferences"/"Configuración"
    const menus = document.querySelectorAll(".main-contextMenu-menu");
    menus.forEach((menu) => {
      if (menu.querySelector("[data-xumi-item]")) return;
      const items = Array.from(menu.querySelectorAll("button, a, [role='menuitem']"));
      const prefIdx = items.findIndex((el) =>
        /preferencia|preference|configuraci|ajustes|settings/i.test(el.textContent || "")
      );
      if (prefIdx === -1) return; // not the profile menu
      const tpl = items[prefIdx].cloneNode(true);
      tpl.setAttribute("data-xumi-item", "1");
      tpl.removeAttribute("href");
      // Replace text with "Configure Xumi"
      const span = tpl.querySelector("span") || tpl;
      // If it has multiple spans, change the first one with text
      const textSpan = Array.from(tpl.querySelectorAll("span")).find((s) => s.textContent.trim().length > 1) || tpl;
      textSpan.textContent = "Configure Xumi";
      tpl.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        // Close the menu (backdrop click / Escape)
        document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
        document.body.click();
        setTimeout(() => openModal(state), 100);
      });
      // Insert below Preferences
      const prefEl = items[prefIdx];
      prefEl.parentElement.insertBefore(tpl, prefEl.nextSibling);
    });
  }

  // App-wide background from the current cover (fade proof)
  let lastCover = "";
  let fading = false;
  let pendingSrc = "";
  function updateBg() {
    let bg = document.getElementById("xumi-bg");
    if (!bg) {
      bg = document.createElement("div");
      bg.id = "xumi-bg";
      document.body.prepend(bg);
    }
    document.getElementById("xumi-bg-top")?.remove(); // leftover from the previous crossfade
    const img = document.querySelector('[data-testid="cover-art-image"]') || document.querySelector(".main-nowPlayingBar-container img, footer img");
    const src = img && img.src ? img.src : "";
    if (!src || src === lastCover) return;
    if (fading) { pendingSrc = src; return; }
    // First paint: instant, nothing to fade from
    if (!lastCover) {
      lastCover = src;
      bg.style.backgroundImage = 'url("' + src + '")';
      return;
    }
    lastCover = src;
    fading = true;
    const pre = new Image();
    pre.decoding = "async";
    pre.src = src;
    const swap = () => {
      bg.classList.add("xumi-bg-fadeout"); // 0.6 -> 0
      setTimeout(() => {
        bg.style.backgroundImage = 'url("' + src + '")';
        bg.classList.remove("xumi-bg-fadeout"); // 0 -> 0.6
        setTimeout(() => {
          fading = false;
          if (pendingSrc && pendingSrc !== lastCover) {
            const s = pendingSrc; pendingSrc = "";
            lastCover = "";
            const cur = document.querySelector('[data-testid="cover-art-image"]');
            if (cur && cur.src === s) updateBg();
            else lastCover = s;
          }
        }, 500);
      }, 450);
    };
    const ready = () => (pre.decode ? pre.decode().then(swap).catch(swap) : swap());
    if (pre.complete && pre.naturalWidth) ready();
    else { pre.onload = ready; pre.onerror = swap; }
  }

  // Custom window controls (DesktopWindowState via FocusMainWindowAPI)
  function wc() {
    return Spicetify.Platform?.FocusMainWindowAPI?._windowStateClient || null;
  }
  async function winAction(kind, btn) {
    if (btn) { btn.style.outline = "2px solid #7c5cff"; setTimeout(() => (btn.style.outline = ""), 500); }
    const c = wc();
    try {
      if (c) {
        if (kind === "minimize") return await c.setWindowState({ state: 3 });
        if (kind === "close") return await c.closeWindow({});
        if (kind === "maximize") {
          const cur = (await c.getWindowState({})).state;
          return await c.setWindowState({ state: cur === 2 ? 1 : 2 });
        }
      }
    } catch (e) { console.warn("[xumi-wc]", e); }
    if (kind === "close") window.close();
  }
  let wcMode = null; // 'custom' | 'native'
  function platformReady() {
    return !!(
      Spicetify.Platform?.ControlMessageAPI?._updateUiClient ||
      Spicetify.Platform?.UpdateAPI?._updateUiClient ||
      Spicetify.Platform?.NativeAPI?.setWindowButtonsVisibility
    );
  }
  function setNativeButtons(show, attempt) {
    // Our own logic: hide natives when customs are on, bring them back when off.
    // The native strip must collapse to 1px in custom mode: even hidden, its
    // hit-test area otherwise covers our buttons and kills their hover.
    // Height first, then visibility. Retried: Spotify resets it during startup.
    // Fire-and-forget in parallel: a stalled call must not block the rest.
    const jobs = [];
    const height = show ? 64 : 1; // 64px = Spotify default titlebar
    for (const api of [Spicetify.Platform?.ControlMessageAPI, Spicetify.Platform?.UpdateAPI]) {
      const client = api?._updateUiClient;
      if (!client) continue;
      try {
        const p = client.updateTitlebarHeight({ height });
        if (p?.catch) jobs.push(p.catch(() => {}));
      } catch (e) {}
    }
    try {
      const p = Spicetify.Platform?.NativeAPI?.setWindowButtonsVisibility?.(show);
      if (p?.catch) jobs.push(p.catch(() => {}));
    } catch (e) {}
    for (const api of [Spicetify.Platform?.ControlMessageAPI, Spicetify.Platform?.UpdateAPI]) {
      const client = api?._updateUiClient;
      if (!client) continue;
      try {
        const p = client.setButtonsVisibility({ showButtons: show });
        if (p?.catch) jobs.push(p.catch(() => {}));
      } catch (e) {}
    }
    if (jobs.length) Promise.allSettled(jobs).catch(() => {});
    // Retry the collapse while in custom mode: early calls lose the startup race
    if (!show && (attempt || 0) < 4 && wcMode === "custom") {
      setTimeout(() => { if (wcMode === "custom") setNativeButtons(false, (attempt || 0) + 1); }, [1000, 2000, 4000, 8000][attempt || 0]);
    }
  }
  function injectWindowControls(state) {
    if (state.customWc === false) {
      document.getElementById("xumi-wc")?.remove();
      // Native mode: only restore if WE hid them before.
      if (wcMode === "custom") {
        wcMode = "native";
        setNativeButtons(true);
        setTimeout(() => { if (wcMode === "native") setNativeButtons(true); }, 3000);
      } else if (wcMode === null) {
        wcMode = "native";
      }
      return;
    }
    // Hide natives ASAP, but only once the Platform API exists.
    // Otherwise the call is silently skipped and never retried.
    if (wcMode !== "custom" && platformReady()) {
      wcMode = "custom";
      setNativeButtons(false);
    }
    if (document.getElementById("xumi-wc")) return;
    const nav = document.querySelector(".Root__globalNav, div[class*='Root__globalNav']");
    if (!nav) return;
    const wrap = document.createElement("div");
    wrap.id = "xumi-wc";
    wrap.innerHTML =
      '<button data-xumi-wc="minimize" title="Minimize"><svg viewBox="0 0 12 12"><path d="M1 6h10" stroke="currentColor" stroke-width="1.2" fill="none"/></svg></button>' +
      '<button data-xumi-wc="maximize" title="Maximize"><svg viewBox="0 0 12 12"><rect x="1.5" y="1.5" width="9" height="9" rx="1" stroke="currentColor" stroke-width="1.2" fill="none"/></svg></button>' +
      '<button data-xumi-wc="close" title="Close"><svg viewBox="0 0 12 12"><path d="M1.5 1.5l9 9M10.5 1.5l-9 9" stroke="currentColor" stroke-width="1.2" fill="none"/></svg></button>';
    wrap.querySelectorAll("button").forEach((b) =>
      b.addEventListener("click", (e) => { e.stopPropagation(); winAction(b.getAttribute("data-xumi-wc"), b); })
    );
    // Right side: native strip must stay collapsed (see setNativeButtons retries)
    nav.appendChild(wrap);
  }
  const GITHUB_SVG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>';
  function processThemeCards() {
    // Theme cards: title link hijacks the click (opens GitHub instead of the
    // readme view). Replace it with plain text + a dedicated GitHub button.
    document.querySelectorAll(".main-card-card.marketplace-card--theme:not([data-xumi-gh])").forEach((card) => {
      card.setAttribute("data-xumi-gh", "1");
      const link = card.querySelector(".main-cardHeader-link");
      if (!link || link.tagName !== "A") return;
      const href = link.getAttribute("href");
      const title = link.getAttribute("title") || link.textContent.trim();
      // Plain text title: card click now opens the readme view as intended
      const span = document.createElement("span");
      span.className = "main-cardHeader-text main-type-balladBold";
      span.textContent = title;
      link.replaceWith(span);
      if (!href || href === "##") return;
      const gh = document.createElement("a");
      gh.className = "xumi-gh-btn";
      gh.href = href;
      gh.target = "_blank";
      gh.rel = "noopener noreferrer";
      gh.title = "GitHub";
      gh.setAttribute("aria-label", "GitHub");
      gh.innerHTML = GITHUB_SVG;
      gh.addEventListener("click", (e) => e.stopPropagation());
      const meta = card.querySelector(".main-card-cardMetadata");
      meta?.appendChild(gh);
    });
  }
  function closeNowPlayingOnStart(state) {
    if (npvClosed || state.closeNpv === false) return;
    const peek = document.querySelector(".Root__right-sidebar-peekContent");
    if (!peek || peek.offsetParent === null) return;
    const btns = Array.from(document.querySelectorAll("button"));
    const toggle =
      document.querySelector('[data-testid="control-button-now-playing-view"], [data-testid="now-playing-view-button"]') ||
      btns.find((b) => /now playing view/i.test(b.getAttribute("aria-label") || "")) ||
      btns.find((b) => /vista.*(reproducci|escuchando)|panel.*derech/i.test(b.getAttribute("aria-label") || ""));
    if (toggle) {
      toggle.click();
      npvClosed = true;
    }
  }

  const state = Object.assign({}, load());
  apply(state);
  updateBg();
  new MutationObserver(() => { injectProfileItem(state); apply(state); updateBg(); processThemeCards(); injectWindowControls(state); }).observe(document.body, { childList: true, subtree: true });
  injectWindowControls(state); // first paint ASAP, don't wait for the interval
  setInterval(() => { injectProfileItem(state); apply(state); updateBg(); closeNowPlayingOnStart(state); injectWindowControls(state); processThemeCards(); }, 1000);
  setTimeout(() => { npvClosed = true; }, 30000); // only tries during the first 30s
})();
