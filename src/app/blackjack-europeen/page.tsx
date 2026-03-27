import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Blackjack Européen : Règles, Stratégie et Différences",
  description:
    "Tout savoir sur le blackjack européen : règles spécifiques, différences avec l'américain, stratégie optimale et conseils pour maximiser vos chances.",
  alternates: { canonical: "/blackjack-europeen" },
};

const toc = [
  { id: "introduction", label: "Qu'est-ce que le blackjack européen ?" },
  { id: "regles", label: "Règles spécifiques" },
  { id: "differences", label: "Différences avec le blackjack américain" },
  { id: "avantages", label: "Avantages et inconvénients" },
  { id: "strategie", label: "Stratégie adaptée" },
  { id: "faq", label: "Questions fréquentes" },
];

const faq = [
  { question: "Le blackjack européen est-il plus avantageux que l'américain ?", answer: "L'avantage de la maison est légèrement plus élevé au blackjack européen (environ 0,6%) comparé à l'américain avec surrender (environ 0,4%). Cela s'explique par l'absence de la carte cachée du croupier et les restrictions sur le doublement et la séparation." },
  { question: "Peut-on compter les cartes au blackjack européen ?", answer: "Le comptage de cartes est théoriquement possible si le jeu utilise un sabot classique. Cependant, de nombreuses versions européennes utilisent 2 jeux de cartes seulement, ce qui influence le compte. En ligne, le comptage est inefficace." },
  { question: "Le blackjack européen se joue-t-il avec combien de jeux de cartes ?", answer: "Le blackjack européen se joue traditionnellement avec 2 jeux de 52 cartes, contrairement au blackjack américain qui utilise généralement 6 à 8 jeux. Moins de jeux signifie un avantage légèrement meilleur pour le joueur." },
];

export default function BlackjackEuropeenPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Variantes", href: "/blackjack-en-ligne" }, { label: "Blackjack européen" }]} />

      <article className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Blackjack européen : Règles, stratégie et tout ce qu&apos;il faut savoir
        </h1>

        <p className="text-lg text-text-light leading-relaxed mb-8">
          Le blackjack européen est la variante la plus jouée dans les casinos d&apos;Europe. Avec
          ses règles spécifiques — notamment l&apos;absence de carte cachée pour le croupier — il
          offre une expérience différente du blackjack américain classique.
        </p>

        <TableOfContents items={toc} />

        <section id="introduction" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce que le blackjack européen ?</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Le blackjack européen est la variante standard pratiquée dans les casinos européens.
            Sa particularité principale est que le croupier ne reçoit qu&apos;une seule carte face
            visible lors de la distribution initiale. La seconde carte n&apos;est tirée qu&apos;après
            que tous les joueurs ont terminé leurs actions.
          </p>
          <p className="text-text-light leading-relaxed">
            Cette règle a un impact significatif sur la stratégie, car les joueurs ne savent pas
            si le croupier a un blackjack avant de prendre leurs décisions de doublement ou de
            séparation.
          </p>
        </section>

        <section id="regles" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Règles spécifiques du blackjack européen</h2>
          <ul className="space-y-3 text-text-light">
            <li>• <strong>2 jeux de cartes</strong> — Le blackjack européen se joue généralement avec 2 jeux de 52 cartes.</li>
            <li>• <strong>Carte unique du croupier</strong> — Le croupier ne reçoit qu&apos;une carte face visible. Pas de carte cachée (« hole card »).</li>
            <li>• <strong>Croupier reste sur soft 17</strong> — Le croupier reste toujours à 17 ou plus, y compris sur un soft 17.</li>
            <li>• <strong>Doublement limité</strong> — Le doublement n&apos;est généralement permis que sur des totaux de 9, 10 ou 11.</li>
            <li>• <strong>Pas de surrender</strong> — L&apos;option d&apos;abandon n&apos;est généralement pas disponible.</li>
            <li>• <strong>Séparation limitée</strong> — On ne peut séparer qu&apos;une seule fois, et pas de doublement après séparation dans la version classique.</li>
            <li>• <strong>Blackjack paie 3:2</strong> — Le paiement standard s&apos;applique.</li>
          </ul>
        </section>

        <section id="differences" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Différences avec le blackjack américain</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-felt text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Aspect</th>
                  <th className="px-4 py-3 text-left">Européen</th>
                  <th className="px-4 py-3 text-left">Américain</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 font-medium">Jeux de cartes</td><td className="px-4 py-3 text-text-light">2</td><td className="px-4 py-3 text-text-light">6-8</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Carte cachée</td><td className="px-4 py-3 text-text-light">Non</td><td className="px-4 py-3 text-text-light">Oui</td></tr>
                <tr><td className="px-4 py-3 font-medium">Doublement</td><td className="px-4 py-3 text-text-light">9, 10, 11 seulement</td><td className="px-4 py-3 text-text-light">Toute main</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Surrender</td><td className="px-4 py-3 text-text-light">Non</td><td className="px-4 py-3 text-text-light">Souvent oui</td></tr>
                <tr><td className="px-4 py-3 font-medium">Re-split</td><td className="px-4 py-3 text-text-light">Non</td><td className="px-4 py-3 text-text-light">Généralement oui</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Avantage maison</td><td className="px-4 py-3 text-text-light">~0,6%</td><td className="px-4 py-3 text-text-light">~0,4-0,5%</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <LeadForm />

        <section id="avantages" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Avantages et inconvénients</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-primary mb-3">Avantages</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>✓ Moins de jeux de cartes = meilleur suivi</li>
                <li>✓ Règles simples et claires</li>
                <li>✓ Croupier reste sur soft 17</li>
                <li>✓ Rythme de jeu agréable</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-card-red mb-3">Inconvénients</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>✗ Pas de carte cachée (risque accru)</li>
                <li>✗ Doublement limité</li>
                <li>✗ Pas d&apos;abandon possible</li>
                <li>✗ Avantage maison légèrement plus élevé</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="strategie" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Stratégie adaptée au blackjack européen</h2>
          <p className="text-text-light leading-relaxed mb-4">
            La stratégie de base doit être légèrement ajustée pour le blackjack européen en raison
            de l&apos;absence de carte cachée :
          </p>
          <ul className="space-y-2 text-text-light">
            <li>• <strong>Soyez plus prudent avec les doubles</strong> — Sans carte cachée, le risque de blackjack du croupier est plus grand. Évitez de doubler ou séparer avec de grosses mises quand le croupier montre un 10 ou un As.</li>
            <li>• <strong>Ne séparez jamais les 8 contre un As ou un 10</strong> — Contrairement au blackjack américain, le risque est trop élevé car vous pourriez perdre deux mises si le croupier a un blackjack.</li>
            <li>• <strong>Suivez la stratégie de base modifiée</strong> — Le tableau standard doit être ajusté en tenant compte des restrictions de doublement.</li>
          </ul>
          <p className="text-text-light leading-relaxed mt-4">
            Consultez notre{" "}
            <Link href="/strategie-blackjack" className="text-primary hover:text-accent">guide stratégie complet</Link>{" "}
            pour le tableau optimal adapté.
          </p>
        </section>

        <LeadForm variant="banner" title="Guide stratégie blackjack européen" description="Recevez le tableau de stratégie adapté au blackjack européen en PDF" />

        <section id="faq">
          <FAQSchema items={faq} />
        </section>
      </article>
    </div>
  );
}
