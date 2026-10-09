import { Link } from "react-router-dom";
import { SITE } from "../../constants/site";

const Privacy = () => (
  <article className="shell min-h-[60vh] py-16">
    <Link to="/" className="text-teta hover:underline text-sm">
      ← Back to home
    </Link>
    <h1 className="text-4xl font-bold mt-6 mb-4">Privacy Policy</h1>
    <p className="text-[#f5f5f5b4] mb-6 max-w-3xl leading-relaxed">
      Last updated:{" "}
      {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
    </p>
    <div className="max-w-3xl space-y-6 text-[#f5f5f5cc] leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Who we are</h2>
        <p>
          {SITE.name} provides websites, custom software, integrations and practical AI
          automation for businesses. Contact:{" "}
          <a href={`mailto:${SITE.email}`} className="text-teta hover:underline">
            {SITE.email}
          </a>
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Data we collect</h2>
        <p>
          When you use our contact form, we collect your name, email, phone (optional),
          and message solely to respond to your inquiry.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How we use it</h2>
        <p>
          We use your information to communicate about your project. We do not sell your
          personal data to third parties.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Analytics</h2>
        <p>
          We may use privacy-friendly analytics (e.g. Google Analytics) to understand site
          usage. You can use browser settings to limit tracking.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Your rights</h2>
        <p>
          You may request access, correction, or deletion of your data by emailing{" "}
          <a href={`mailto:${SITE.email}`} className="text-teta hover:underline">
            {SITE.email}
          </a>
          .
        </p>
      </section>
    </div>
  </article>
);

export default Privacy;
