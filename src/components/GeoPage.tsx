import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

interface GeoPageProps {
  country: string;
  slug: string;
  intro: string;
  legalStatus: string;
  legalDetails: string[];
  popularity: string;
  options: string[];
  particularities: string[];
  faq: { question: string; answer: string }[];
}

export default function GeoPage({
  country,
  slug,
  intro,
  legalStatus,
  legalDetails,
  popularity,
  options,
  particularities,
  faq,
}: GeoPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: `Blackjack ${country}` }]} />

      <article className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Blackjack en ligne en {country} : Guide complet
        </h1>

        <p className="text-lg text-text-light leading-relaxed mb-8">{intro}</p>

        <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 my-8">
          <h2 className="font-bold text-sm uppercase tracking-wider text-text-light mb-3">Sommaire</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#legalite" className="text-primary hover:text-accent"><span className="text-accent font-bold">1.</span> Légalité du blackjack en {country}</a></li>
            <li><a href="#popularite" className="text-primary hover:text-accent"><span className="text-accent font-bold">2.</span> Popularité du blackjack</a></li>
            <li><a href="#options" className="text-primary hover:text-accent"><span className="text-accent font-bold">3.</span> Options en ligne</a></li>
            <li><a href="#particularites" className="text-primary hover:text-accent"><span className="text-accent font-bold">4.</span> Particularités locales</a></li>
            <li><a href="#faq" className="text-primary hover:text-accent"><span className="text-accent font-bold">5.</span> Questions fréquentes</a></li>
          </ol>
        </nav>

        <section id="legalite" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Légalité du blackjack en ligne en {country}</h2>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-sm mb-4">
            <strong>Statut actuel :</strong> {legalStatus}
          </div>
          <ul className="space-y-2 text-text-light">
            {legalDetails.map((detail, i) => (
              <li key={i}>• {detail}</li>
            ))}
          </ul>
        </section>

        <section id="popularite" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Popularité du blackjack en {country}</h2>
          <p className="text-text-light leading-relaxed">{popularity}</p>
        </section>

        <LeadForm />

        <section id="options" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Options de blackjack en ligne</h2>
          <ul className="space-y-2 text-text-light">
            {options.map((option, i) => (
              <li key={i}>• {option}</li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/blackjack-gratuit" className="text-sm text-primary hover:text-accent font-medium">Jouer gratuitement →</Link>
            <Link href="/blackjack-live" className="text-sm text-primary hover:text-accent font-medium">Blackjack live →</Link>
          </div>
        </section>

        <section id="particularites" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Particularités locales</h2>
          <ul className="space-y-2 text-text-light">
            {particularities.map((p, i) => (
              <li key={i}>• {p}</li>
            ))}
          </ul>
        </section>

        <LeadForm
          variant="banner"
          title={`Guide blackjack ${country}`}
          description="Stratégie de base + tableau optimal en PDF gratuit"
        />

        <section id="faq">
          <FAQSchema items={faq} />
        </section>
      </article>
    </div>
  );
}
