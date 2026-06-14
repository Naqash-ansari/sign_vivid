import Script from "next/script";

const fonts = ["Modern", "Roboto", "Typewriter", "Mansion", "Binnerd"];
const colours = [
  ["Ivory", "#fff2cf"],
  ["Opal", "#f7f7f7"],
  ["Light red", "#f01818"],
  ["Red", "#ca0c05"],
  ["Orange", "#ff6a1a"],
  ["Yellow", "#ffb800"],
  ["Pink", "#dd1491"],
  ["Blue", "#0b42e8"],
  ["Green", "#11c60b"],
  ["RGB", "#fff2cf"],
];
const locations = ["Indoor Standing", "Indoor Wall", "Indoor Suspended", "Outdoor Wall"];
const glowTypes = ["Front lit", "Halo lit", "Side lit", "Non illuminated"];
const extras = ["Installation", "Remote dimmer", "Artwork proof", "Express production"];

const productConfig = {
  "glass-neon": {
    label: "Glass Neon",
    defaultText: "Glass",
    tabs: ["Design", "Size", "Colour", "Location", "Background", "Extras"],
    colourTitle: "Tube Colour",
    backgroundTitle: "Background",
    backgroundOptions: ["Clear Backboard", "Wall Mounted", "Acrylic Plate", "Raceway"],
    summary: "premium glass-style neon",
    effect: "outline",
  },
  "led-neon": {
    label: "LED Neon",
    defaultText: "Neon",
    tabs: ["Design", "Size", "Colour", "Location", "Backing", "Extras"],
    colourTitle: "LED Colour",
    backgroundTitle: "Backing",
    backgroundOptions: ["Cut to Shape", "Clear Acrylic", "Boxed Raceway", "Wall Mounted"],
    summary: "flexible LED neon",
    effect: "outline",
  },
  letters: {
    label: "Letters",
    defaultText: "Letters",
    tabs: ["Design", "Size", "Location", "Glow Type", "Glow Colour", "Background", "Extras"],
    colourTitle: "Glow Colour",
    backgroundTitle: "Background",
    backgroundOptions: ["Raceway", "Acrylic", "Moss", "Dibond Plate"],
    summary: "built-up illuminated letters",
    effect: "solid",
  },
  moss: {
    label: "Moss",
    defaultText: "Moss",
    tabs: ["Design", "Size", "Moss Type", "Location", "Logo", "Extras"],
    colourTitle: "Accent Colour",
    backgroundTitle: "Moss Type",
    backgroundOptions: ["Preserved Moss", "Mixed Plant Wall", "Moss Panel", "Logo on Moss"],
    summary: "green wall statement sign",
    effect: "moss",
  },
} as const;

type ProductKey = keyof typeof productConfig;

export default function LettersConfigurator({ product = "letters" }: { product?: ProductKey }) {
  const config = productConfig[product];
  const rootId = `configurator-${product}`;
  const defaultColour = colours[0][1];

  return (
    <main
      id={rootId}
      data-product={product}
      data-label={config.label}
      data-summary={config.summary}
      data-effect={config.effect}
      data-default-text={config.defaultText}
      className="min-h-screen bg-brand-dark text-brand-dark"
    >
      <div className="grid min-h-[calc(100vh-4rem)] lg:grid-cols-[1fr_430px]">
        <section className="relative flex min-h-[720px] flex-col overflow-hidden p-4 md:p-6">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:220px_220px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(232,114,12,0.22),transparent_38%)]" />

          <div className="relative z-10 flex flex-wrap gap-4 rounded-lg bg-white/95 p-3 shadow-xl backdrop-blur">
            {config.tabs.map((tab, index) => (
              <a
                key={tab}
                href={`#${rootId}-${slug(tab)}`}
                data-tab={tab}
                className={`rounded-full px-6 py-2 text-sm font-bold transition ${
                  index === 0
                    ? "bg-brand-orange text-white"
                    : "bg-gray-100 text-gray-400 hover:bg-orange-50 hover:text-brand-orange"
                }`}
              >
                {tab}
              </a>
            ))}
          </div>

          <div className="relative z-10 flex flex-1 items-center justify-center">
            <div className="text-center">
              <div className="relative inline-block">
                <div
                  data-preview-bar
                  className="absolute left-0 right-0 top-1/2 h-2 -translate-y-1/2 bg-white/80"
                  style={{ boxShadow: `0 0 18px ${defaultColour}` }}
                />
                <h1
                  data-preview-text
                  className="relative px-8 font-black leading-none tracking-tight drop-shadow-[0_6px_3px_rgba(0,0,0,0.45)]"
                  style={{
                    color: config.effect === "outline" ? "transparent" : defaultColour,
                    fontSize: "clamp(4rem, 12.5vw, 9.5rem)",
                    WebkitTextStroke: config.effect === "outline" ? `6px ${defaultColour}` : undefined,
                    textShadow: `0 0 18px ${defaultColour}, 0 8px 3px rgba(0,0,0,.45)`,
                  }}
                >
                  {config.defaultText}
                </h1>
              </div>
              <p data-summary-line className="mt-10 text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
                {config.summary} - Ivory - Indoor Wall - {config.backgroundOptions[0]}
              </p>
            </div>
          </div>

          <div className="relative z-10 mb-4 hidden flex-wrap items-center gap-4 md:flex">
            <button
              type="button"
              data-download
              className="rounded bg-white px-5 py-3 text-sm font-bold text-brand-dark transition hover:bg-orange-50 hover:text-brand-orange"
            >
              Download
            </button>
            <button
              type="button"
              data-send
              className="rounded bg-brand-orange px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Request design update
            </button>
          </div>
        </section>

        <aside data-panel-scroll className="max-h-[calc(100vh-4rem)] overflow-y-auto bg-brand-grey p-6 shadow-2xl">
          {config.tabs.map((tab) => (
            <Panel key={tab} id={`${rootId}-${slug(tab)}`} title={panelTitle(tab, config)} subtitle={panelSubtitle(tab, config.label)}>
              {renderPanel(tab, config)}
            </Panel>
          ))}
        </aside>
      </div>

      <Script
        id={`${rootId}-script`}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: configuratorScript(rootId) }}
      />
    </main>
  );
}

function renderPanel(tab: string, config: (typeof productConfig)[ProductKey]) {
  if (tab === "Design") {
    return (
      <>
        <div className="grid grid-cols-2 gap-3">
          <button type="button" className="rounded border border-orange-300 bg-white px-4 py-3 text-sm font-bold text-brand-dark shadow-[0_0_12px_rgba(232,114,12,0.35)]">
            Enter text
          </button>
          <button type="button" className="rounded border border-gray-200 px-4 py-3 text-sm font-bold text-brand-mid">
            Upload design
          </button>
        </div>
        <textarea
          data-text-input
          defaultValue={config.defaultText}
          rows={4}
          className="mt-4 w-full resize-none rounded border border-gray-200 px-4 py-3 text-sm focus:border-brand-orange focus:outline-none"
        />
        <p className="mt-2 text-xs font-semibold text-brand-mid">
          Live preview text: <span data-live-text>{config.defaultText}</span>
        </p>
        <OptionGrid>
          {fonts.map((font, index) => (
            <OptionButton key={font} active={index === 0} dataAttrs={{ "data-font": font }}>
              <span className="block text-4xl font-black">Ag</span>
              <span>{font}</span>
            </OptionButton>
          ))}
        </OptionGrid>
      </>
    );
  }

  if (tab === "Size") {
    return (
      <>
        <div className="rounded-full bg-gray-100 p-1">
          <div className="grid grid-cols-2">
            {["Width", "Height"].map((mode, index) => (
              <button
                key={mode}
                type="button"
                data-size-mode={mode}
                className={`rounded-full py-3 font-bold transition ${
                  index === 0 ? "bg-white text-brand-dark shadow" : "text-gray-400 hover:text-brand-orange"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-5 flex items-end gap-3">
          <input
            data-size-input
            defaultValue="125"
            inputMode="numeric"
            pattern="[0-9]*"
            aria-describedby={`${config.label.toLowerCase().replace(/\s+/g, "-")}-size-error`}
            className="w-full rounded border border-gray-200 px-4 py-4 text-xl transition focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-orange-100"
          />
          <span className="border-b border-gray-400 px-4 py-4 text-brand-mid">cm</span>
        </div>
        <p
          id={`${config.label.toLowerCase().replace(/\s+/g, "-")}-size-error`}
          data-size-error
          className="mt-2 hidden text-xs font-semibold text-red-600"
        >
          Numbers only.
        </p>
      </>
    );
  }

  if (tab === "Location") {
    return (
      <OptionGrid>
        {locations.map((location, index) => (
          <OptionButton key={location} active={index === 1} dataAttrs={{ "data-location": location }}>
            <span className="block h-16 rounded bg-gray-100" />
            <span>{location}</span>
          </OptionButton>
        ))}
      </OptionGrid>
    );
  }

  if (tab === "Colour" || tab === "Glow Colour") {
    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {colours.map(([name, value], index) => (
          <button
            key={name}
            type="button"
            data-colour-name={name}
            data-colour-value={value}
            className={`overflow-hidden rounded border bg-white text-sm shadow-sm transition ${
              index === 0 ? "border-orange-300 shadow-[0_0_12px_rgba(232,114,12,0.35)]" : "border-gray-200 hover:border-brand-orange"
            }`}
          >
            <span
              className="block h-16"
              style={{ background: name === "RGB" ? "linear-gradient(135deg,#16e46a,#44d7ff,#ff4bd8)" : value }}
            />
            <span className="block py-3">{name}</span>
          </button>
        ))}
      </div>
    );
  }

  if (tab === "Glow Type") {
    return (
      <OptionGrid>
        {glowTypes.map((item, index) => (
          <OptionButton key={item} active={index === 0} dataAttrs={{ "data-glow-type": item }}>
            <span className="block h-16 rounded bg-gradient-to-br from-gray-100 to-orange-100" />
            <span>{item}</span>
          </OptionButton>
        ))}
      </OptionGrid>
    );
  }

  if (tab === "Background" || tab === "Backing" || tab === "Moss Type") {
    return (
      <OptionGrid>
        {config.backgroundOptions.map((item, index) => (
          <OptionButton key={item} active={index === 0} dataAttrs={{ "data-background": item }}>
            <span className={`block h-24 rounded ${item.includes("Moss") ? "bg-green-700" : "bg-gray-100"}`} />
            <span>{item}</span>
          </OptionButton>
        ))}
      </OptionGrid>
    );
  }

  if (tab === "Logo") {
    return (
      <OptionGrid>
        {["Text only", "Upload logo later", "Logo plus text", "Icon mark"].map((item, index) => (
          <OptionButton key={item} active={index === 0} dataAttrs={{ "data-logo": item }}>
            <span className="block h-16 rounded bg-gray-100" />
            <span>{item}</span>
          </OptionButton>
        ))}
      </OptionGrid>
    );
  }

  return (
    <>
      <div className="grid gap-3">
        {extras.map((extra) => (
          <button
            key={extra}
            type="button"
            data-extra={extra}
            className="rounded border border-gray-200 bg-white px-4 py-3 text-left text-sm font-bold text-brand-mid transition hover:border-brand-orange hover:text-brand-orange"
          >
            {extra}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button type="button" data-download className="rounded bg-brand-dark px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-orange">
          Download
        </button>
        <button type="button" data-send className="rounded bg-brand-orange px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600">
          Request design update
        </button>
      </div>
    </>
  );
}

function Panel({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} data-panel className="mb-7 scroll-mt-6 rounded-xl bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.12)]">
      <h2 className="text-center text-4xl font-light">{title}</h2>
      {subtitle && <p className="mx-auto mt-4 max-w-sm text-center text-lg leading-relaxed text-brand-mid">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}

function OptionGrid({ children }: { children: React.ReactNode }) {
  return <div className="mt-5 grid grid-cols-2 gap-3">{children}</div>;
}

function OptionButton({
  active,
  dataAttrs,
  children,
}: {
  active?: boolean;
  dataAttrs: Record<string, string>;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      {...dataAttrs}
      className={`rounded border bg-white p-3 text-center text-sm font-semibold shadow-sm transition ${
        active ? "border-orange-300 shadow-[0_0_12px_rgba(232,114,12,0.35)]" : "border-gray-200 hover:border-brand-orange"
      }`}
    >
      {children}
    </button>
  );
}

function panelTitle(tab: string, config: (typeof productConfig)[ProductKey]) {
  if (tab === "Design") return `${config.label} Design`;
  if (tab === "Colour" || tab === "Glow Colour") return config.colourTitle;
  if (tab === "Background" || tab === "Backing" || tab === "Moss Type") return config.backgroundTitle;
  return tab;
}

function panelSubtitle(tab: string, label: string) {
  if (tab === "Size") return "Specify either the width or the height.";
  if (tab === "Location") return "Choose location and mounting option.";
  if (tab === "Colour" || tab === "Glow Colour") return `Choose the colour for your ${label.toLowerCase()}.`;
  if (tab === "Glow Type") return "Choose how the letters should illuminate.";
  if (tab === "Background" || tab === "Backing") return "Type, material and colour of the backdrop.";
  if (tab === "Moss Type") return "Choose the moss finish for your green wall sign.";
  if (tab === "Logo") return "Choose how your logo should be included.";
  if (tab === "Extras") return "Add finishing options for your sign.";
  return undefined;
}

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function configuratorScript(rootId: string) {
  return `
(function () {
  var root = document.getElementById(${JSON.stringify(rootId)});
  if (!root || root.__signVividConfiguratorReady) return;
  root.__signVividConfiguratorReady = true;

  var state = {
    text: root.dataset.defaultText || "",
    font: "Modern",
    sizeMode: "Width",
    sizeValue: "125",
    colourName: "Ivory",
    colourValue: "#fff2cf",
    location: "Indoor Wall",
    background: root.querySelector("[data-background]") ? root.querySelector("[data-background]").dataset.background : "",
    glowType: "Front lit",
    logo: "Text only",
    extras: []
  };
  var effect = root.dataset.effect || "solid";
  var preview = root.querySelector("[data-preview-text]");
  var bar = root.querySelector("[data-preview-bar]");
  var summary = root.querySelector("[data-summary-line]");
  var input = root.querySelector("[data-text-input]");
  var live = root.querySelector("[data-live-text]");
  var scroller = root.querySelector("[data-panel-scroll]");
  var tabs = Array.prototype.slice.call(root.querySelectorAll("[data-tab]"));
  var panels = Array.prototype.slice.call(root.querySelectorAll("[data-panel]"));

  function setActive(group, activeEl) {
    Array.prototype.slice.call(root.querySelectorAll(group)).forEach(function (el) {
      el.classList.remove("border-orange-300", "text-brand-orange", "shadow-[0_0_12px_rgba(232,114,12,0.35)]", "shadow-[0_0_12px_rgba(232,114,12,0.25)]", "bg-white", "text-brand-dark", "shadow");
      if (!el.hasAttribute("data-size-mode")) {
        el.classList.add("border-gray-200");
      }
    });
    activeEl.classList.add("border-orange-300", "shadow-[0_0_12px_rgba(232,114,12,0.35)]");
    activeEl.classList.remove("border-gray-200");
  }

  function setActiveTab(tab) {
    tabs.forEach(function (link) {
      var isActive = link.dataset.tab === tab;
      link.className = "rounded-full px-6 py-2 text-sm font-bold transition " + (isActive ? "bg-brand-orange text-white" : "bg-gray-100 text-gray-400 hover:bg-orange-50 hover:text-brand-orange");
    });
  }

  function updatePreview() {
    var text = state.text || root.dataset.defaultText || "";
    preview.textContent = text;
    if (live) live.textContent = text;

    preview.style.fontFamily = state.font === "Typewriter" ? "monospace" : state.font === "Mansion" || state.font === "Binnerd" ? "serif" : "sans-serif";
    preview.style.fontStyle = state.font === "Mansion" ? "italic" : "normal";
    preview.style.letterSpacing = state.font === "Binnerd" || state.font === "Roboto" ? "0.04em" : "0";
    preview.style.fontSize = "clamp(4rem, " + Math.max(6.4, Math.min(15, Number(state.sizeValue || 125) / 10)) + "vw, 9.5rem)";
    preview.style.color = effect === "outline" ? "transparent" : state.colourValue;
    preview.style.webkitTextStroke = effect === "outline" ? "6px " + state.colourValue : "";
    preview.style.textShadow = state.glowType === "Non illuminated" ? "0 8px 3px rgba(0,0,0,.45)" : "0 0 18px " + state.colourValue + ", 0 8px 3px rgba(0,0,0,.45)";
    if (bar) bar.style.boxShadow = state.glowType === "Non illuminated" ? "none" : "0 0 18px " + state.colourValue;
    if (summary) {
      summary.textContent = [root.dataset.summary, state.colourName, state.location, state.background].filter(Boolean).join(" - ");
    }
  }

  if (input) {
    input.addEventListener("input", function () {
      state.text = input.value;
      updatePreview();
    });
  }

  tabs.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var panel = root.querySelector(link.getAttribute("href"));
      setActiveTab(link.dataset.tab);
      if (scroller && panel) scroller.scrollTo({ top: panel.offsetTop - 16, behavior: "smooth" });
      else if (panel) panel.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  if (scroller) {
    scroller.addEventListener("scroll", function () {
      var active = tabs[0] ? tabs[0].dataset.tab : "";
      var best = Infinity;
      panels.forEach(function (panel) {
        var dist = Math.abs(panel.offsetTop - scroller.scrollTop - 16);
        if (dist < best) {
          best = dist;
          var id = panel.id;
          var link = tabs.find(function (tab) { return tab.getAttribute("href") === "#" + id; });
          if (link) active = link.dataset.tab;
        }
      });
      setActiveTab(active);
    });
  }

  root.addEventListener("click", function (event) {
    var target = event.target.closest("button");
    if (!target || !root.contains(target)) return;

    if (target.dataset.font) {
      state.font = target.dataset.font;
      setActive("[data-font]", target);
      updatePreview();
    }
    if (target.dataset.sizeMode) {
      state.sizeMode = target.dataset.sizeMode;
      Array.prototype.slice.call(root.querySelectorAll("[data-size-mode]")).forEach(function (el) {
        el.className = "rounded-full py-3 font-bold transition text-gray-400 hover:text-brand-orange";
      });
      target.className = "rounded-full py-3 font-bold transition bg-white text-brand-dark shadow";
    }
    if (target.dataset.colourName) {
      state.colourName = target.dataset.colourName;
      state.colourValue = target.dataset.colourValue || "#fff2cf";
      setActive("[data-colour-name]", target);
      updatePreview();
    }
    if (target.dataset.location) {
      state.location = target.dataset.location;
      setActive("[data-location]", target);
      updatePreview();
    }
    if (target.dataset.background) {
      state.background = target.dataset.background;
      setActive("[data-background]", target);
      updatePreview();
    }
    if (target.dataset.glowType) {
      state.glowType = target.dataset.glowType;
      setActive("[data-glow-type]", target);
      updatePreview();
    }
    if (target.dataset.logo) {
      state.logo = target.dataset.logo;
      setActive("[data-logo]", target);
    }
    if (target.dataset.extra) {
      if (state.extras.indexOf(target.dataset.extra) >= 0) {
        state.extras = state.extras.filter(function (item) { return item !== target.dataset.extra; });
        target.className = "rounded border border-gray-200 bg-white px-4 py-3 text-left text-sm font-bold text-brand-mid transition hover:border-brand-orange hover:text-brand-orange";
      } else {
        state.extras.push(target.dataset.extra);
        target.className = "rounded border border-orange-300 bg-white px-4 py-3 text-left text-sm font-bold text-brand-orange shadow-[0_0_12px_rgba(232,114,12,0.25)] transition";
      }
    }
    if (target.hasAttribute("data-download")) downloadDesign();
    if (target.hasAttribute("data-send")) sendDesign(target);
  });

  var sizeInput = root.querySelector("[data-size-input]");
  var sizeError = root.querySelector("[data-size-error]");
  if (sizeInput) {
    sizeInput.addEventListener("input", function () {
      var next = sizeInput.value.replace(/[^0-9]/g, "");
      var changed = next !== sizeInput.value;
      sizeInput.value = next;
      sizeInput.classList.toggle("border-red-400", changed);
      sizeInput.classList.toggle("focus:border-red-500", changed);
      if (sizeError) sizeError.classList.toggle("hidden", !changed);
      if (changed) {
        window.setTimeout(function () {
          sizeInput.classList.remove("border-red-400", "focus:border-red-500");
          if (sizeError) sizeError.classList.add("hidden");
        }, 1600);
      }
      state.sizeValue = sizeInput.value || "125";
      updatePreview();
    });
  }

  function designSummary() {
    return [
      root.dataset.label,
      "Text: " + (state.text || root.dataset.defaultText || ""),
      state.sizeMode + ": " + state.sizeValue + "cm",
      "Font: " + state.font,
      "Colour: " + state.colourName,
      "Location: " + state.location,
      "Finish: " + state.background,
      state.extras.length ? "Extras: " + state.extras.join(", ") : ""
    ].filter(Boolean).join(" | ");
  }

  function createDesignCanvas() {
    var canvas = document.createElement("canvas");
    canvas.width = 1400;
    canvas.height = 900;
    var ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.fillStyle = "#2d2d2d";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(255,255,255,0.12)";
    for (var x = 0; x < canvas.width; x += 180) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke(); }
    for (var y = 0; y < canvas.height; y += 180) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke(); }
    ctx.font = "900 170px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = state.colourValue;
    ctx.shadowBlur = state.glowType === "Non illuminated" ? 0 : 32;
    if (effect === "outline") {
      ctx.strokeStyle = state.colourValue;
      ctx.lineWidth = 10;
      ctx.strokeText(state.text || root.dataset.defaultText || "", canvas.width / 2, 390);
    } else {
      ctx.fillStyle = state.colourValue;
      ctx.fillText(state.text || root.dataset.defaultText || "", canvas.width / 2, 390);
    }
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#fff";
    ctx.font = "600 34px sans-serif";
    ctx.fillText(root.dataset.label || "Sign Vivid", canvas.width / 2, 610);
    ctx.fillStyle = "#ddd";
    ctx.font = "400 28px sans-serif";
    ctx.fillText(designSummary().slice(0, 120), canvas.width / 2, 675);
    return canvas;
  }

  function getFileName() {
    return (root.dataset.label || "design").toLowerCase().replace(/\\s+/g, "-") + "-design.png";
  }

  function downloadDesign() {
    var canvas = createDesignCanvas();
    if (!canvas) return;
    var link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = getFileName();
    link.click();
  }

  function sendDesign(button) {
    var canvas = createDesignCanvas();
    var message = "Hi Sign Vivid, I have created a design in the configurator. Please review the attached design image, suggest any updates, and send me the next steps or quote. " + designSummary();
    if (!canvas) {
      window.open("https://wa.me/447876097226?text=" + encodeURIComponent(message), "_blank", "noopener,noreferrer");
      return;
    }

    if (button) {
      button.textContent = "Preparing image...";
      button.disabled = true;
    }

    canvas.toBlob(function (blob) {
      if (!blob) {
        if (button) {
          button.textContent = "Request design update";
          button.disabled = false;
        }
        window.open("https://wa.me/447876097226?text=" + encodeURIComponent(message), "_blank", "noopener,noreferrer");
        return;
      }

      var file = new File([blob], getFileName(), { type: "image/png" });

      if (navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
        navigator.share({
          files: [file],
          title: "Sign Vivid design",
          text: message
        }).catch(function () {
          downloadDesign();
          window.open("https://wa.me/447876097226?text=" + encodeURIComponent(message + " I have downloaded the design image and will attach it here."), "_blank", "noopener,noreferrer");
        }).finally(function () {
          if (button) {
            button.textContent = "Request design update";
            button.disabled = false;
          }
        });
        return;
      }

      downloadDesign();
      window.open("https://wa.me/447876097226?text=" + encodeURIComponent(message + " The design image has downloaded on my device; I will attach it in this chat."), "_blank", "noopener,noreferrer");
      if (button) {
        button.textContent = "Request design update";
        button.disabled = false;
      }
    }, "image/png");
  }

  updatePreview();
})();
`;
}
