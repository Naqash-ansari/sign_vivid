import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const supportRequests = [
  {
    title: "Order & Delivery Tracking",
    text: "Need an update on your order, dispatch status or delivery window? Send your project reference and postcode.",
    details: ["Order or quote reference", "Delivery postcode", "Best contact number"],
  },
  {
    title: "Installation Booking",
    text: "Book fitting support or ask about access, wall type, fixings, surveys and installation timing.",
    details: ["Site address", "Photos of the wall or area", "Preferred installation dates"],
  },
  {
    title: "Claim Resolution",
    text: "Report delivery damage, production concerns, warranty questions or accounting issues.",
    details: ["Photos or videos", "Order reference", "Clear description of the issue"],
  },
  {
    title: "New Project Support",
    text: "Starting a new sign project? Share the brief and we will guide you to the right quote route.",
    details: ["Product type", "Approx size", "Artwork or inspiration"],
  },
];

const faqs = [
  {
    question: "How does the order process work?",
    answer: "Send your brief, receive a quote and preview, approve artwork, then we move into production and delivery.",
  },
  {
    question: "Can Sign Vivid install my sign?",
    answer: "Yes, where suitable. We may ask for photos, postcode, measurements and wall/access details before confirming fitting.",
  },
  {
    question: "How does delivery work?",
    answer: "Most orders are shipped by UK courier or direct delivery depending on size, fragility and location.",
  },
];

export const metadata = {
  title: "Support | Sign Vivid",
  description: "Get help with Sign Vivid orders, delivery tracking, installation booking, claims and project support.",
};

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-16 text-brand-dark">
        <section className="bg-brand-grey px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-brand-orange">
              Support
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              How can Sign Vivid help?
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-mid">
              Our support team helps with active orders, delivery updates, installation information,
              claims and new project questions. To resolve things faster, please include the relevant
              details when you contact us.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:projects@signvivid.com"
                className="rounded bg-brand-orange px-7 py-3 font-bold text-white transition hover:bg-orange-600"
              >
                Email Support
              </a>
              <Link
                href="/quote"
                className="rounded border border-brand-dark px-7 py-3 font-bold text-brand-dark transition hover:border-brand-orange hover:text-brand-orange"
              >
                Start a New Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionIntro
              eyebrow="Support Requests"
              title="Choose the right route"
              text="Sending the right information first time helps us answer faster and avoid back-and-forth."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {supportRequests.map((item) => (
                <article key={item.title} className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="mb-5 h-2 w-2 rounded-full bg-brand-orange" />
                  <h2 className="text-2xl font-black">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-brand-mid">{item.text}</p>
                  <div className="mt-5 rounded bg-brand-grey p-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                      Include if possible
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-brand-mid">
                      {item.details.map((detail) => (
                        <li key={detail}>- {detail}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-dark px-6 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <SectionIntro
              eyebrow="Help Centre"
              title="Useful answers before you contact us"
              text="These are the most common questions customers ask during a signage project."
              dark
            />
            <div className="grid gap-5 md:grid-cols-3">
              {faqs.map((item) => (
                <article key={item.question} className="rounded-lg border border-white/10 p-6">
                  <h2 className="text-xl font-black">{item.question}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1fr_1fr]">
            <div className="rounded-lg bg-brand-grey p-7">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand-orange">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-black">Speak to support</h2>
              <div className="mt-5 space-y-3 text-brand-mid">
                <p>
                  Project and support requests:
                  <a className="ml-1 font-semibold text-brand-dark underline underline-offset-4" href="mailto:projects@signvivid.com">
                    projects@signvivid.com
                  </a>
                </p>
                <p>
                  Cooperations and media:
                  <a className="ml-1 font-semibold text-brand-dark underline underline-offset-4" href="mailto:media@signvivid.com">
                    media@signvivid.com
                  </a>
                </p>
                <p>
                  Phone:
                  <a className="ml-1 font-semibold text-brand-dark underline underline-offset-4" href="tel:+447876097226">
                    +44 7876097226
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-brand-orange p-7 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/75">
                Need it fast?
              </p>
              <h2 className="mt-3 text-3xl font-black">Send clear project details</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/85">
                Include your order reference, deadline, photos, measurements and postcode. The more
                context we have, the quicker we can route your request.
              </p>
              <Link
                href="/quote"
                className="mt-6 inline-flex rounded bg-white px-6 py-3 text-sm font-bold text-brand-dark transition hover:bg-brand-dark hover:text-white"
              >
                Submit Project Details
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.28em] text-brand-orange">{eyebrow}</p>
      <h2 className={`text-4xl font-black ${dark ? "text-white" : "text-brand-dark"}`}>{title}</h2>
      <p className={`mt-3 max-w-2xl text-sm leading-relaxed md:text-base ${dark ? "text-white/65" : "text-brand-mid"}`}>
        {text}
      </p>
    </div>
  );
}
