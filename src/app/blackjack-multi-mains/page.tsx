import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Blackjack Multi-Mains : Jouez Plusieurs Mains Simultanément",
  description:
    "Guide complet du blackjack multi-mains : règles, stratégie, avantages et conseils pour jouer plusieurs mains en même temps et maximiser votre expérience.",
  alternates: { canonical: "/blackjack-multi-mains" },
};

const toc = [
  { id: "introduction", label: "Qu'est-ce que le blackjack multi-mains ?" },
  { id: "fonctionnement", label: "Comment ça fonctionne" },
  { id: "avantages", label: "Avantages et inconvénients" },
  { id: "strategie", label: "Stratégie multi-mains" },
  { id: "bankroll", label: "Gestion de bankroll" },
  { id: "faq", label: "Questions fréquentes" },
];

const faq = [
  { question: "Combien de mains peut-on jouer simultanément ?", answer: "Selon la variante, vous pouvez jouer de 2 à 5 mains simultanément. Certaines versions en ligne permettent même jusqu'à 7 mains, mais 3 est le nombre le plus courant et recommandé pour les débutants." },
  { question: "Le blackjack multi-mains augmente-t-il les chances de gagner ?", answer: "Non, chaque main a les mêmes probabilités qu'au blackjack standard. Jouer plusieurs mains augmente la variance (gains et pertes plus importants) mais ne change pas l'avantage mathématique de la maison." },
  { question: "Faut-il adapter sa stratégie pour le multi-mains ?", answer: "La stratégie de base reste identique pour chaque main individuelle. La principale adaptation concerne la gestion de bankroll : réduisez la mise par main proportionnellement au nombre de mains jouées." },
];

export default function BlackjackMultiMainsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Variantes", href: "/blackjack-en-ligne" }, { label: "Blackjack multi-mains" }]} />

      <article className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Blackjack multi-mains : Jouez plusieurs mains en même temps
        </h1>

        <p className="text-lg text-text-light leading-relaxed mb-8">
          Le blackjack multi-mains permet de jouer plusieurs mains simultanément contre un même
          croupier. Cette variante dynamique multiplie l&apos;action et peut lisser la variance,
          mais demande une bonne gestion de bankroll.
        </p>

        <TableOfContents items={toc} />

        <section id="introduction" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce que le blackjack multi-mains ?</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Le blackjack multi-mains (ou Multi-Hand Blackjack) est une variante qui vous permet
            de jouer entre 2 et 5 mains simultanément contre le même croupier. Chaque main est
            indépendante et traitée séparément, avec sa propre mise.
          </p>
          <p className="text-text-light leading-relaxed">
            Cette variante est particulièrement populaire en ligne car elle permet d&apos;accélérer
            le jeu et d&apos;augmenter le volume de mains jouées par session, ce qui est idéal
            pour l&apos;entraînement à la <Link href="/strategie-blackjack" className="text-primary hover:text-accent">stratégie de base</Link>.
          </p>
        </section>

        <section id="fonctionnement" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Comment fonctionne le blackjack multi-mains</h2>
          <ol className="list-decimal list-inside space-y-3 text-text-light">
            <li><strong>Choix du nombre de mains</strong> — Sélectionnez combien de mains vous souhaitez jouer (2 à 5 typiquement).</li>
            <li><strong>Placement des mises</strong> — Placez une mise sur chaque main. Les mises peuvent être identiques ou différentes.</li>
            <li><strong>Distribution</strong> — Toutes vos mains reçoivent deux cartes, ainsi que le croupier.</li>
            <li><strong>Jeu séquentiel</strong> — Vous jouez chaque main l&apos;une après l&apos;autre, de gauche à droite.</li>
            <li><strong>Tour du croupier</strong> — Le croupier joue sa main une seule fois, contre toutes vos mains.</li>
            <li><strong>Résultats</strong> — Chaque main est comparée individuellement à celle du croupier.</li>
          </ol>
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 text-sm mt-4">
            <strong>Point clé :</strong> Les cartes sont tirées du même sabot pour toutes les mains.
            Cela signifie que les mains ne sont pas totalement indépendantes statistiquement, bien
            que l&apos;impact soit minime avec un sabot de 6-8 jeux.
          </div>
        </section>

        <section id="avantages" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Avantages et inconvénients</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-primary mb-3">Avantages</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>✓ Plus d&apos;action et d&apos;excitation</li>
                <li>✓ Entraînement accéléré à la stratégie</li>
                <li>✓ Variance lissée sur le court terme</li>
                <li>✓ Possibilité de varier les mises</li>
                <li>✓ Idéal pour les joueurs expérimentés</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-card-red mb-3">Inconvénients</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>✗ Bankroll consommée plus rapidement</li>
                <li>✗ Décisions plus rapides nécessaires</li>
                <li>✗ Risque de pertes multipliées</li>
                <li>✗ Plus complexe pour les débutants</li>
              </ul>
            </div>
          </div>
        </section>

        <LeadForm />

        <section id="strategie" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Stratégie au blackjack multi-mains</h2>
          <p className="text-text-light leading-relaxed mb-4">
            La stratégie de base ne change pas en multi-mains. Chaque main doit être jouée
            indépendamment selon le <Link href="/strategie-blackjack" className="text-primary hover:text-accent">tableau de stratégie optimal</Link>.
          </p>
          <ul className="space-y-2 text-text-light">
            <li>• <strong>Ne changez pas de stratégie</strong> — Le résultat d&apos;une main n&apos;influence pas les décisions sur les autres.</li>
            <li>• <strong>Commencez par 2 mains</strong> — Augmentez progressivement quand vous êtes à l&apos;aise.</li>
            <li>• <strong>Attention aux splits et doubles</strong> — Ils peuvent augmenter rapidement votre exposition totale.</li>
            <li>• <strong>Gardez une trace mentale</strong> — Sachez combien de mains sont gagnantes/perdantes pour ajuster si besoin.</li>
          </ul>
        </section>

        <section id="bankroll" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Gestion de bankroll en multi-mains</h2>
          <p className="text-text-light leading-relaxed mb-4">
            La gestion de bankroll est cruciale en multi-mains. Voici les principes essentiels :
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-felt text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Nombre de mains</th>
                  <th className="px-4 py-3 text-left">Mise recommandée / main</th>
                  <th className="px-4 py-3 text-left">Bankroll minimum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 font-medium">1 main</td><td className="px-4 py-3 text-text-light">2% de la bankroll</td><td className="px-4 py-3 text-text-light">50× la mise</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">2 mains</td><td className="px-4 py-3 text-text-light">1% de la bankroll</td><td className="px-4 py-3 text-text-light">100× la mise</td></tr>
                <tr><td className="px-4 py-3 font-medium">3 mains</td><td className="px-4 py-3 text-text-light">0,7% de la bankroll</td><td className="px-4 py-3 text-text-light">150× la mise</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">5 mains</td><td className="px-4 py-3 text-text-light">0,4% de la bankroll</td><td className="px-4 py-3 text-text-light">250× la mise</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-light mt-4">
            <strong>Règle d&apos;or :</strong> Divisez votre mise unitaire standard par le nombre
            de mains jouées. Si vous misez normalement 10€ par main, misez 5€ sur chacune de vos
            2 mains, ou ~3€ sur chacune de vos 3 mains.
          </p>
        </section>

        <LeadForm variant="banner" />

        <section id="faq">
          <FAQSchema items={faq} />
        </section>
      </article>
    </div>
  );
}
