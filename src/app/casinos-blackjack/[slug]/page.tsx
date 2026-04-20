import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { casinos, getCasinoBySlug } from "@/data/casinos";
import Breadcrumb from "@/components/Breadcrumb";

export async function generateStaticParams() {
  return casinos.map((c) => ({ slug: c.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const casino = getCasinoBySlug(slug);
  if (!casino) return {};
  return {
    title: casino.metaTitle,
    description: casino.metaDescription,
    alternates: {
      canonical: `https://blackjack-en-ligne-gratuit.com/casinos-blackjack/${casino.slug}`,
    },
    openGraph: {
      title: casino.metaTitle,
      description: casino.metaDescription,
      type: "article",
    },
  };
}

export default async function CasinoReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const casino = getCasinoBySlug(slug);
  if (!casino) notFound();

  const paragraphs = casino.fullReview.split("\n\n").filter(Boolean);

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: casino.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: casino.rating,
      bestRating: 5,
    },
    reviewBody: casino.summary,
    author: { "@type": "Organization", name: "blackjack-en-ligne-gratuit.com" },
    publisher: { "@type": "Organization", name: "blackjack-en-ligne-gratuit.com" },
    positiveNotes: {
      "@type": "ItemList",
      itemListElement: casino.pros.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p,
      })),
    },
    negativeNotes: {
      "@type": "ItemList",
      itemListElement: casino.cons.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Casinos Blackjack", href: "/casinos-blackjack" },
            { label: casino.name },
          ]}
        />

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            {casino.name} Blackjack — Avis {new Date().getFullYear()}
          </h1>
          <div className="flex items-center gap-3 flex-wrap mb-4">
            <span className="text-yellow-500" aria-label={`${casino.rating}/5`}>
              {"★".repeat(Math.round(casino.rating))}
              {"☆".repeat(5 - Math.round(casino.rating))}
            </span>
            <span className="text-sm text-gray-500">{casino.rating.toFixed(1)} / 5</span>
            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">
              {casino.license}
            </span>
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              Depuis {casino.founded}
            </span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
              {casino.liveBlackjackTables} tables live
            </span>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">{casino.summary}</p>
          <div className="mt-6">
            <a
              href={casino.affiliateUrl}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-colors"
            >
              Visiter {casino.name} →
            </a>
          </div>
        </header>

        <section className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-10 border border-amber-100">
          <p className="text-xs text-amber-700 font-semibold uppercase tracking-wider mb-1">
            Bonus de bienvenue
          </p>
          <p className="text-3xl font-bold text-gray-900 mb-2">{casino.bonus}</p>
          <p className="text-sm text-gray-600">
            Wagering x{casino.wagering} · Dépôt min. {casino.minDeposit} · Retraits : {casino.withdrawalTime}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Note : le blackjack contribue généralement à 10% au wagering des bonus.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3">L&apos;offre blackjack</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider">Total tables</p>
              <p className="text-2xl font-bold">{casino.blackjackTables}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider">Tables live</p>
              <p className="text-2xl font-bold">{casino.liveBlackjackTables}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-2">Variantes disponibles :</p>
          <div className="flex flex-wrap gap-2">
            {casino.blackjackVariants.map((v) => (
              <span
                key={v}
                className="text-sm bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1 rounded"
              >
                {v}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Notre avis détaillé</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section className="grid sm:grid-cols-2 gap-6 mb-10">
          <div>
            <h2 className="text-xl font-bold mb-3">Points forts</h2>
            <ul className="space-y-2">
              {casino.pros.map((p) => (
                <li key={p} className="flex gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">+</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3">Points faibles</h2>
            <ul className="space-y-2">
              {casino.cons.map((c) => (
                <li key={c} className="flex gap-2 text-gray-700">
                  <span className="text-red-600 font-bold">−</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Méthodes de paiement</h2>
          <div className="flex flex-wrap gap-2">
            {casino.paymentMethods.map((p) => (
              <span key={p} className="text-sm bg-gray-50 border border-gray-200 text-gray-600 px-3 py-1 rounded">
                {p}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-6 mb-10 text-center">
          <p className="text-lg font-bold mb-2">Prêt à essayer {casino.name} ?</p>
          <p className="text-gray-600 mb-4">{casino.bonus}</p>
          <a
            href={casino.affiliateUrl}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-colors"
          >
            Réclamer le bonus →
          </a>
          <p className="text-xs text-gray-500 mt-3">
            18+ | Les conditions générales s&apos;appliquent | Jouez responsablement
          </p>
        </section>

        <section className="rounded-xl bg-gray-50 p-6 border border-gray-200 text-sm text-gray-600 leading-relaxed">
          <p className="font-semibold text-gray-900 mb-2">Transparence</p>
          <p>
            Cet article contient des liens d&apos;affiliation. Notre site perçoit une
            commission sur les inscriptions réalisées via ces liens, sans surcoût pour vous.
            Cela n&apos;influence pas la note ni la teneur de l&apos;analyse — nos tests
            sont réalisés de manière indépendante. Les jeux d&apos;argent comportent des
            risques. Joueurs-info-service : 09 74 75 13 13 (appel non surtaxé).
          </p>
        </section>

        <div className="border-t border-gray-200 pt-6 mt-10">
          <Link href="/casinos-blackjack" className="text-amber-600 hover:underline">
            ← Retour aux casinos blackjack
          </Link>
        </div>
      </div>
    </>
  );
}
