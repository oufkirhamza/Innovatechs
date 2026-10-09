import { Link } from "react-router-dom";
import { SITE } from "../../constants/site";

const Terms = () => (
  <article className="shell min-h-[60vh] py-16">
    <Link to="/" className="text-teta hover:underline text-sm">
      ← Back to home
    </Link>
    <h1 className="text-4xl font-bold mt-6 mb-4">Terms of Service</h1>
    <p className="text-[#f5f5f5b4] mb-6 max-w-3xl leading-relaxed">
      Last updated:{" "}
      {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
    </p>
    <div className="max-w-3xl space-y-6 text-[#f5f5f5cc] leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Services</h2>
        <p>
          {SITE.name} provides websites, custom applications, integrations, automation and
          related digital services as agreed in individual project proposals or statements
          of work.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Quotes & payment</h2>
        <p>
          Pricing and timelines are confirmed in writing before work begins. Payment terms
          are defined per project (typically deposit + milestones).
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Intellectual property</h2>
        <p>
          Upon full payment, clients receive agreed usage rights to deliverables unless
          otherwise specified. {SITE.name} may showcase completed work in its portfolio
          unless a confidentiality agreement states otherwise.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Limitation</h2>
        <p>
          We are not liable for indirect damages arising from use of our services beyond the
          amount paid for the specific project, to the extent permitted by law.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Contact</h2>
        <p>
          Questions:{" "}
          <a href={`mailto:${SITE.email}`} className="text-teta hover:underline">
            {SITE.email}
          </a>{" "}
          · {SITE.phoneDisplay}
        </p>
      </section>
    </div>
  </article>
);

export default Terms;
