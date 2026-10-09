import { useState } from "react";
import { Section } from "../../../components/Section";
import { trackEvent } from "../../../utils/analytics";
import { SITE } from "../../../constants/site";

const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_FORM_ID;
const CALENDLY_URL = process.env.REACT_APP_CALENDLY_URL;
const formDeliveryConfigured =
  Boolean(FORMSPREE_ID) && FORMSPREE_ID !== "your_form_id";

export const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [mailtoHref, setMailtoHref] = useState(`mailto:${SITE.email}`);

  const whatsappHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hi Innovatechs! I'd like to discuss a project."
  )}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    if (!formDeliveryConfigured) {
      const subject = encodeURIComponent(`Project inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\n${message}`
      );
      setStatus("fallback");
      setErrorMessage("");
      setMailtoHref(`mailto:${SITE.email}?subject=${subject}&body=${body}`);
      trackEvent("form_submit", { method: "fallback_shown" });
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      trackEvent("form_submit", { method: "formspree" });
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err.message || "Could not send your message. Please try again."
      );
    }
  };

  return (
    <Section id="contact">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="text-[34px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[44px] lg:text-[50px]">
            Tell us what you&apos;re building.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted sm:text-[16px]">
            Describe the idea, the problem, or the system you want to improve. We&apos;ll reply
            with a practical next step.
          </p>
          <ul className="mt-8 border-t border-white/[0.11]">
            <li className="border-b border-white/[0.11] py-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">Email</p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-1 inline-block break-all text-[15px] transition-colors hover:text-teta"
              >
                {SITE.email}
              </a>
            </li>
            <li className="border-b border-white/[0.11] py-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">Phone</p>
              <a
                href={`tel:${SITE.phone}`}
                className="mt-1 inline-block text-[15px] transition-colors hover:text-teta"
              >
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="border-b border-white/[0.11] py-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">WhatsApp</p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-[15px] transition-colors hover:text-teta"
              >
                Message {SITE.name}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div aria-live="polite">
            {status === "success" && (
              <div
                className="mb-6 border border-emerald-500/40 bg-emerald-500/10 p-5"
                role="status"
              >
                <p className="font-semibold text-emerald-300">Message sent</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Thanks for reaching out. We&apos;ll follow up to discuss next steps.
                  {CALENDLY_URL && " You can also book a call below."}
                </p>
              </div>
            )}

            {status === "fallback" && (
              <div className="mb-6 border border-teta/40 bg-teta/10 p-5" role="status">
                <p className="font-semibold">Reach us directly by email or WhatsApp</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Online form delivery is not configured yet. Please contact us using one of the
                  options below — we will discuss next steps with you.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={mailtoHref} className="btn btn-primary btn-sm">
                    Open email draft
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="field-label">
                  Name <span className="text-teta">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="field"
                  placeholder="Your name"
                  aria-invalid={status === "error"}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="field-label">
                  Email <span className="text-teta">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="field"
                  placeholder="you@company.com"
                  aria-invalid={status === "error"}
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="contact-phone" className="field-label">
                Phone <span className="text-muted">(optional)</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="field"
                placeholder="+212 6XX XXX XXX"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="contact-message" className="field-label">
                Message <span className="text-teta">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className="field min-h-[140px] resize-y"
                placeholder="What would you like to build or improve?"
                aria-invalid={status === "error"}
              />
            </div>

            {status === "error" && (
              <p className="mt-4 text-sm text-red-400" role="alert">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn btn-primary mt-6 w-full sm:w-auto"
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>
            <p className="mt-4 text-[13px] leading-relaxed text-muted">
              By submitting, you agree we may use your details to respond to your inquiry. We do
              not sell your data to third parties.
            </p>
          </form>
        </div>
      </div>

      {CALENDLY_URL && (
        <div className="mt-14 max-w-xl">
          <h3 className="text-xl font-semibold">Prefer a call?</h3>
          <iframe
            title="Book a meeting with Innovatechs"
            src={CALENDLY_URL}
            className="mt-4 h-[520px] w-full border border-white/15"
            loading="lazy"
          />
        </div>
      )}
    </Section>
  );
};
