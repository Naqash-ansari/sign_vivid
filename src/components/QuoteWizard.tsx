import Link from "next/link";
import Script from "next/script";

const productFamilies = [
  {
    title: "Neon",
    description: "LED neon-style signs for walls, shops, events, and interiors.",
    visual: "from-orange-100 via-white to-slate-100",
    mark: "NEON",
  },
  {
    title: "Letters & Logos",
    description: "Built-up letters, flat cut logos, acrylic, metal, and illuminated branding.",
    visual: "from-zinc-100 via-white to-zinc-200",
    mark: "LOGO",
  },
  {
    title: "Lightboxes",
    description: "Illuminated display boxes for retail, reception, and exterior signs.",
    visual: "from-neutral-200 via-white to-neutral-300",
    mark: "BOX",
  },
  {
    title: "Moss & Plant Walls",
    description: "Statement green walls with integrated branding or illuminated lettering.",
    visual: "from-lime-950 via-green-700 to-lime-900",
    mark: "VIVID",
  },
  {
    title: "Full concept",
    description: "Complete signage concept, design support, production, and installation.",
    visual: "from-slate-950 via-slate-800 to-brand-dark",
    mark: "SIGN",
  },
  {
    title: "I'm not sure yet",
    description: "Tell us what you need and we will recommend the right signage route.",
    visual: "from-zinc-100 via-white to-zinc-300",
    mark: "?",
  },
];

const steps = ["Product", "Specification", "Design", "Offer"];

export default function QuoteWizard() {
  return (
    <section id="quote-wizard" className="min-h-screen bg-[#f6f6f4] px-4 pb-20 pt-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-brand-orange">
              Sign Vivid Quote Studio
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] text-brand-dark md:text-6xl">
              Plan your signage project with a clear brief.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-mid md:text-lg">
              Answer a few focused questions and our team will prepare a practical offer for
              design, production, and installation.
            </p>
          </div>

          <div className="rounded-lg bg-brand-dark p-5 text-white shadow-xl">
            <p className="text-sm font-semibold text-brand-orange">What you get</p>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              <p>Free project review</p>
              <p>Material and finish guidance</p>
              <p>Clear next-step offer</p>
            </div>
            <Link
              href="/configurator-selection"
              className="mt-5 block rounded bg-brand-orange px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Open configurator
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
          <div className="grid lg:grid-cols-[280px_1fr]">
            <aside className="bg-brand-dark p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
                Quote progress
              </p>
              <Stepper />

              <div className="mt-10 rounded-lg border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                  Selected product
                </p>
                <p data-selected-product className="mt-2 text-xl font-bold">
                  Not selected yet
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Choose the closest option. If you are unsure, we will recommend the best
                  route after reviewing your brief.
                </p>
              </div>

              <div className="mt-6 rounded-lg bg-brand-orange p-5">
                <p className="text-sm font-bold">Need it fast?</p>
                <p className="mt-2 text-sm text-white/85">
                  Add your deadline in the notes and we will factor it into the offer.
                </p>
              </div>
            </aside>

            <form data-quote-form className="p-5 md:p-8 lg:p-10">
              <input type="hidden" name="selectedProduct" data-selected-product-input />
              <div data-sent className="mx-auto hidden max-w-xl rounded-lg border border-green-200 bg-green-50 p-10 text-center">
                <p className="mb-2 text-3xl font-bold text-brand-dark">Request received</p>
                <p className="text-brand-mid">
                  Thank you. We will review your project and send your free offer shortly.
                </p>
              </div>

              <StepPanel step={0}>
                <SectionIntro
                  kicker="Step 1"
                  title="Choose a product family"
                  text="Select the closest match so we can tailor the next questions."
                />

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {productFamilies.map((product) => (
                    <button
                      key={product.title}
                      type="button"
                      data-product={product.title}
                      className="group overflow-hidden rounded-lg border border-gray-200 bg-white text-left transition hover:-translate-y-1 hover:border-brand-orange hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    >
                      <div className={`relative h-36 bg-gradient-to-br ${product.visual}`}>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.72),transparent_30%),linear-gradient(135deg,transparent,rgba(0,0,0,0.16))]" />
                        <div className="absolute inset-x-5 bottom-5 rounded bg-white/85 px-4 py-3 shadow-sm backdrop-blur">
                          <span className="text-2xl font-black tracking-tight text-brand-dark">
                            {product.mark}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-orange">
                          {product.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-brand-mid">
                          {product.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </StepPanel>

              <StepPanel step={1} hidden>
                <FormPanel>
                  <SectionIntro
                    kicker="Step 2"
                    title="Project specification"
                    text="Tell us the practical details for your selected product."
                  />
                  <p className="mb-5 rounded bg-orange-50 px-4 py-3 text-sm font-semibold text-brand-orange">
                    Selected product: <span data-selected-inline>Not selected yet</span>
                  </p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field numeric name="approxWidth" label="Approx width" placeholder="e.g. 1200" suffix="mm" />
                    <Field numeric name="approxHeight" label="Approx height" placeholder="e.g. 600" suffix="mm" />
                    <Field numeric name="quantity" label="Quantity" placeholder="e.g. 1" />
                    <Field name="postcode" label="Installation postcode" placeholder="e.g. B12 0AB" />
                  </div>
                  <TextArea
                    label="Project notes"
                    name="projectNotes"
                    placeholder="Indoor/outdoor, wall type, lighting, deadline, access details, or any special requirement"
                    rows={4}
                  />
                  <StepActions back={0} next={2} />
                </FormPanel>
              </StepPanel>

              <StepPanel step={2} hidden>
                <FormPanel>
                  <SectionIntro
                    kicker="Step 3"
                    title="Design direction"
                    text="Tell us how your signage should look and feel."
                  />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-6 transition hover:border-brand-orange hover:bg-orange-50">
                      <span className="block text-sm font-bold text-brand-dark">Upload artwork</span>
                      <span className="mt-2 block text-sm text-brand-mid">
                        Logo, sketch, reference, or brand file.
                      </span>
                      <input name="artwork" type="file" className="mt-5 w-full text-sm text-brand-mid" />
                    </label>
                    <label className="rounded-lg border border-gray-200 bg-white p-6">
                      <span className="block text-sm font-bold text-brand-dark">Design support</span>
                      <span className="mt-2 block text-sm text-brand-mid">
                        Let us know how much help you need.
                      </span>
                      <select name="designSupport" className="mt-5 w-full rounded border border-gray-200 px-4 py-3 text-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-orange-100">
                        <option>I have artwork</option>
                        <option>I need design support</option>
                        <option>I&apos;m not sure yet</option>
                      </select>
                    </label>
                  </div>
                  <TextArea
                    label="Design brief"
                    name="designBrief"
                    placeholder="Describe your style, colours, materials, reference signs, or brand requirements"
                    rows={5}
                  />
                  <StepActions back={1} next={3} />
                </FormPanel>
              </StepPanel>

              <StepPanel step={3} hidden>
                  <FormPanel>
                    <SectionIntro
                      kicker="Step 4"
                      title="Where should we send the offer?"
                      text="Final step for your signage request."
                    />
                    <p data-form-status className="mb-5 hidden rounded px-4 py-3 text-sm font-semibold" />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field required name="fullName" label="Full name" placeholder="Jane Smith" />
                      <Field name="company" label="Company" placeholder="Your Company Ltd" />
                      <Field required name="email" type="email" label="Email" placeholder="jane@company.com" />
                      <Field name="phone" type="tel" label="Phone" placeholder="07700 900000" />
                    </div>
                    <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="button"
                        data-goto-step="2"
                        className="rounded border border-gray-300 px-6 py-3 font-semibold text-brand-dark transition hover:border-brand-orange hover:text-brand-orange"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="rounded bg-brand-orange px-8 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600"
                      >
                        Request Free Offer
                      </button>
                    </div>
                  </FormPanel>
              </StepPanel>
            </form>
          </div>
        </div>
      </div>
      <Script id="quote-wizard-script" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: quoteWizardScript }} />
    </section>
  );
}

function SectionIntro({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <div className="mb-7">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-brand-orange">
        {kicker}
      </p>
      <h2 className="text-3xl font-black text-brand-dark md:text-4xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-mid md:text-base">{text}</p>
    </div>
  );
}

function FormPanel({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-3xl">{children}</div>;
}

function StepPanel({ step, hidden = false, children }: { step: number; hidden?: boolean; children: React.ReactNode }) {
  return (
    <div data-step-panel={step} className={hidden ? "hidden" : ""}>
      {children}
    </div>
  );
}

function Field({
  name,
  label,
  placeholder,
  suffix,
  type = "text",
  numeric = false,
  required = false,
}: {
  name: string;
  label: string;
  placeholder: string;
  suffix?: string;
  type?: string;
  numeric?: boolean;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-dark">
        {label}
      </span>
      <div className="relative">
        <input
          name={name}
          required={required}
          type={type}
          inputMode={numeric ? "numeric" : undefined}
          pattern={numeric ? "[0-9]*" : undefined}
          data-numeric={numeric ? "true" : undefined}
          placeholder={placeholder}
          className={`w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm transition placeholder:text-gray-400 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-orange-100 ${
            suffix ? "pr-12" : ""
          }`}
        />
        {suffix && (
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-brand-mid">
            {suffix}
          </span>
        )}
      </div>
      {numeric && (
        <span data-error-for={name} className="mt-1 hidden text-xs font-semibold text-red-600">
          Numbers only.
        </span>
      )}
    </label>
  );
}

function TextArea({ name, label, placeholder, rows }: { name: string; label: string; placeholder: string; rows: number }) {
  return (
    <label className="mt-5 block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-dark">
        {label}
      </span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="w-full resize-none rounded border border-gray-200 bg-white px-4 py-3 text-sm transition placeholder:text-gray-400 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-orange-100"
      />
    </label>
  );
}

function StepActions({ back, next }: { back: number; next: number }) {
  return (
    <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
      <button
        type="button"
        data-goto-step={back}
        className="rounded border border-gray-300 px-6 py-3 font-semibold text-brand-dark transition hover:border-brand-orange hover:text-brand-orange"
      >
        Back
      </button>
      <button
        type="button"
        data-goto-step={next}
        className="rounded bg-brand-orange px-8 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600"
      >
        Continue
      </button>
    </div>
  );
}

function Stepper() {
  return (
    <div className="mt-6 space-y-4">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-3">
          <span
            data-step-dot={index}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
              index === 0 ? "bg-brand-orange text-white" : "bg-white/10 text-white/50"
            }`}
          >
            {index + 1}
          </span>
          <span data-step-label={index} className={`text-sm font-semibold ${index === 0 ? "text-white" : "text-white/45"}`}>
            {step}
          </span>
        </div>
      ))}
    </div>
  );
}

const quoteWizardScript = `
(function () {
  window.setTimeout(function () {
  var root = document.getElementById("quote-wizard");
  if (!root || root.__signVividQuoteWizardReady) return;
  root.__signVividQuoteWizardReady = true;

  var activeStep = 0;
  var selectedProduct = "";
  var panels = Array.prototype.slice.call(root.querySelectorAll("[data-step-panel]"));
  var sent = root.querySelector("[data-sent]");
  var selectedProductEls = Array.prototype.slice.call(root.querySelectorAll("[data-selected-product], [data-selected-inline]"));
  var selectedProductInput = root.querySelector("[data-selected-product-input]");
  var status = root.querySelector("[data-form-status]");

  function cleanNumericField(field) {
    var next = (field.value || "").replace(/[^0-9]/g, "");
    var error = root.querySelector("[data-error-for='" + field.name + "']");
    var changed = next !== field.value;

    field.value = next;
    field.classList.toggle("border-red-400", changed);
    field.classList.toggle("focus:border-red-500", changed);
    if (error) error.classList.toggle("hidden", !changed);

    if (changed) {
      window.setTimeout(function () {
        field.classList.remove("border-red-400", "focus:border-red-500");
        if (error) error.classList.add("hidden");
      }, 1600);
    }
  }

  function showStep(step) {
    activeStep = Number(step);
    panels.forEach(function (panel) {
      panel.classList.toggle("hidden", Number(panel.dataset.stepPanel) !== activeStep);
    });
    if (sent) sent.classList.add("hidden");

    Array.prototype.slice.call(root.querySelectorAll("[data-step-dot]")).forEach(function (dot) {
      var done = Number(dot.dataset.stepDot) <= activeStep;
      dot.className = "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold " + (done ? "bg-brand-orange text-white" : "bg-white/10 text-white/50");
    });

    Array.prototype.slice.call(root.querySelectorAll("[data-step-label]")).forEach(function (label) {
      var done = Number(label.dataset.stepLabel) <= activeStep;
      label.className = "text-sm font-semibold " + (done ? "text-white" : "text-white/45");
    });
  }

  function setSelectedProduct(product) {
    selectedProduct = product;
    if (selectedProductInput) selectedProductInput.value = selectedProduct;
    selectedProductEls.forEach(function (el) {
      el.textContent = selectedProduct || "Not selected yet";
    });
  }

  root.addEventListener("click", function (event) {
    var productButton = event.target.closest("[data-product]");
    if (productButton && root.contains(productButton)) {
      setSelectedProduct(productButton.dataset.product || "");
      showStep(1);
      root.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    var stepButton = event.target.closest("[data-goto-step]");
    if (stepButton && root.contains(stepButton)) {
      showStep(stepButton.dataset.gotoStep);
      root.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  root.addEventListener("input", function (event) {
    if (event.target && event.target.matches("[data-numeric='true']")) {
      cleanNumericField(event.target);
    }
  });

  var form = root.querySelector("[data-quote-form]");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var submit = form.querySelector("button[type='submit']");
      var data = new FormData(form);
      Array.prototype.slice.call(root.querySelectorAll("input[name], textarea[name], select[name]")).forEach(function (field) {
        if (field.matches && field.matches("[data-numeric='true']")) {
          cleanNumericField(field);
        }
        if (field.type === "file") {
          if ((field.files || []).length) {
            data.delete(field.name);
            Array.prototype.slice.call(field.files || []).forEach(function (file) {
              data.append(field.name, file);
            });
          }
        } else {
          data.set(field.name, field.value || "");
        }
      });
      data.set("selectedProduct", selectedProduct);

      if (status) {
        status.className = "mb-5 rounded bg-orange-50 px-4 py-3 text-sm font-semibold text-brand-orange";
        status.textContent = "Sending your quote request...";
      }
      if (submit) {
        submit.disabled = true;
        submit.textContent = "Sending...";
      }

      fetch("/api/quote", {
        method: "POST",
        body: data
      }).then(function (response) {
        if (!response.ok) {
          return response.json().catch(function () { return {}; }).then(function (body) {
            throw new Error(body.error || "Email could not be sent.");
          });
        }
        showStep(3);
        panels.forEach(function (panel) { panel.classList.add("hidden"); });
        if (status) {
          status.className = "hidden";
          status.textContent = "";
        }
        if (sent) sent.classList.remove("hidden");
      }).catch(function (error) {
        if (status) {
          status.className = "mb-5 rounded bg-red-50 px-4 py-3 text-sm font-semibold text-red-700";
          status.textContent = error.message || "Email could not be sent.";
        }
      }).finally(function () {
        if (submit) {
          submit.disabled = false;
          submit.textContent = "Request Free Offer";
        }
      });
    });
  }
  }, 0);
})();
`;
