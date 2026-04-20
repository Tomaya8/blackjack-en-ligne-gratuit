import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import TopBlackjackCasinos from "@/components/TopBlackjackCasinos";

export const metadata: Metadata = {
  title: "Meilleurs Casinos Blackjack en Ligne 2026 — Avis & Comparatif",
  description:
    "Sélection des meilleurs casinos en ligne pour jouer au blackjack : tables live, variantes, bonus et wagering. Avis détaillés par notre équipe.",
  alternates: {
    canonical: "https://blackjack-en-ligne-gratuit.com/casinos-blackjack",
  },
};

export default function CasinosBlackjackPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Casinos Blackjack" },
        ]}
      />

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Meilleurs casinos blackjack en ligne 2026
        </h1>
        <p className="text-gray-600 max-w-3xl leading-relaxed">
          Six casinos testés par notre équipe pour leur offre blackjack : nombre de tables live,
          variantes disponibles, qualité des croupiers francophones, vitesse des retraits et
          transparence des conditions de bonus. Tous sont licenciés à Curaçao — nous précisons
          systématiquement les points de vigilance à connaître avant de s&apos;inscrire.
        </p>
      </header>

      <TopBlackjackCasinos />

      <section className="mt-12 rounded-xl bg-gray-50 p-6 border border-gray-200">
        <h2 className="text-xl font-bold mb-3">Note sur le blackjack et les bonus de casino</h2>
        <p className="text-gray-600 leading-relaxed text-sm">
          Sur la plupart des casinos en ligne, le blackjack contribue à 10% seulement au
          wagering des bonus de bienvenue (contre 100% pour les machines à sous). Si vous
          jouez principalement au blackjack, la stratégie la plus rentable est souvent de
          refuser le bonus ou de déclencher le wagering sur les slots avant de passer au
          blackjack avec de l&apos;argent libre. Notre guide de la{" "}
          <a href="/strategie-blackjack" className="text-amber-600 hover:underline">
            stratégie de base
          </a>{" "}
          reste votre meilleur atout pour limiter l&apos;avantage de la maison à moins de
          0,5%.
        </p>
      </section>
    </div>
  );
}
