import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Règles du Blackjack : Guide Complet des Règles Officielles",
  description:
    "Apprenez toutes les règles du blackjack : valeur des cartes, déroulement d'une partie, actions possibles. Guide clair et détaillé pour débutants et confirmés.",
  alternates: { canonical: "/regles-blackjack" },
};

const toc = [
  { id: "objectif", label: "L'objectif du blackjack" },
  { id: "valeur-cartes", label: "Valeur des cartes" },
  { id: "deroulement", label: "Déroulement d'une partie" },
  { id: "actions", label: "Les actions du joueur" },
  { id: "regles-croupier", label: "Les règles du croupier" },
  { id: "blackjack-naturel", label: "Le blackjack naturel" },
  { id: "paiements", label: "Les paiements" },
  { id: "regles-avancees", label: "Règles avancées" },
  { id: "faq", label: "Questions fréquentes" },
];

const faq = [
  { question: "Que vaut un As au blackjack ?", answer: "Un As vaut 1 ou 11 points, selon ce qui est le plus avantageux pour votre main. Si compter l'As comme 11 vous fait dépasser 21, il compte automatiquement comme 1." },
  { question: "Combien de jeux de cartes sont utilisés au blackjack ?", answer: "Cela dépend de la variante. Les versions les plus courantes utilisent entre 1 et 8 jeux de 52 cartes. Moins il y a de jeux, plus l'avantage du joueur augmente légèrement." },
  { question: "Peut-on séparer deux cartes différentes ?", answer: "Non, la séparation (split) n'est possible que lorsque vous avez deux cartes de même valeur (deux 8, deux As, etc.)." },
  { question: "Qu'est-ce que l'assurance au blackjack ?", answer: "L'assurance est un pari secondaire proposé lorsque le croupier montre un As. Elle paie 2:1 si le croupier a un blackjack. Statistiquement, c'est un mauvais pari que les experts déconseillent." },
  { question: "Quelle est la différence entre une main \"souple\" et \"rigide\" ?", answer: "Une main souple (soft) contient un As compté comme 11 (ex: As + 6 = soft 17). Une main rigide (hard) ne contient pas d'As ou l'As y compte comme 1 (ex: 10 + 7 = hard 17)." },
];

export default function ReglesBlackjackPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Règles du blackjack" }]} />

      <article className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Règles du blackjack : Le guide complet pour tout comprendre
        </h1>

        <p className="text-lg text-text-light leading-relaxed mb-8">
          Les règles du blackjack sont simples à comprendre mais offrent une profondeur stratégique
          remarquable. Ce guide vous explique tout, de la valeur des cartes au déroulement d&apos;une
          partie complète, avec des exemples concrets.
        </p>

        <TableOfContents items={toc} />

        <section id="objectif" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">L&apos;objectif du blackjack</h2>
          <p className="text-text-light leading-relaxed mb-4">
            L&apos;objectif du blackjack est simple : <strong>obtenir une main dont la valeur totale
            est supérieure à celle du croupier, sans dépasser 21</strong>. Si vous dépassez 21,
            vous « sautez » (bust) et perdez automatiquement, quelle que soit la main du croupier.
          </p>
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 text-sm">
            <strong>Attention :</strong> Contrairement à une idée reçue, l&apos;objectif n&apos;est
            pas d&apos;atteindre 21. L&apos;objectif est de <em>battre le croupier</em>. Parfois,
            rester à 12 peut être la bonne décision si le croupier risque de sauter.
          </div>
        </section>

        <section id="valeur-cartes" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Valeur des cartes</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Au blackjack, chaque carte a une valeur précise :
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-felt text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Carte</th>
                  <th className="px-4 py-3 text-left">Valeur</th>
                  <th className="px-4 py-3 text-left">Exemple</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 font-medium">2 à 10</td><td className="px-4 py-3 text-text-light">Valeur faciale</td><td className="px-4 py-3 text-text-light">Un 7 vaut 7 points</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Valet, Dame, Roi</td><td className="px-4 py-3 text-text-light">10 points</td><td className="px-4 py-3 text-text-light">Un Roi vaut 10 points</td></tr>
                <tr><td className="px-4 py-3 font-medium">As</td><td className="px-4 py-3 text-text-light">1 ou 11 points</td><td className="px-4 py-3 text-text-light">As + 6 = 17 (soft) ou 7</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-light mt-4">
            <strong>La couleur (pique, cœur, carreau, trèfle) n&apos;a aucune importance au blackjack.</strong> Seule la valeur numérique compte.
          </p>
        </section>

        <section id="deroulement" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Déroulement d&apos;une partie</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <span className="bg-accent text-card-black font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">1</span>
              <div>
                <h3 className="font-bold">Mise initiale</h3>
                <p className="text-sm text-text-light">Chaque joueur place sa mise avant la distribution des cartes.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-accent text-card-black font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">2</span>
              <div>
                <h3 className="font-bold">Distribution</h3>
                <p className="text-sm text-text-light">Le croupier distribue deux cartes face visible à chaque joueur, et deux cartes pour lui-même (une visible, une cachée).</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-accent text-card-black font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">3</span>
              <div>
                <h3 className="font-bold">Tour des joueurs</h3>
                <p className="text-sm text-text-light">Chaque joueur, de gauche à droite, choisit ses actions (tirer, rester, doubler, séparer).</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-accent text-card-black font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">4</span>
              <div>
                <h3 className="font-bold">Tour du croupier</h3>
                <p className="text-sm text-text-light">Le croupier révèle sa carte cachée et joue selon des règles fixes (généralement tire à 16, reste à 17).</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-accent text-card-black font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">5</span>
              <div>
                <h3 className="font-bold">Résultat</h3>
                <p className="text-sm text-text-light">Les mains sont comparées. Les joueurs dont la main bat celle du croupier gagnent.</p>
              </div>
            </div>
          </div>
        </section>

        <LeadForm />

        <section id="actions" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Les actions du joueur</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-bold mb-2">Tirer (Hit)</h3>
              <p className="text-sm text-text-light">Demander une carte supplémentaire. Vous pouvez tirer autant de fois que vous le souhaitez, tant que vous ne dépassez pas 21.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-bold mb-2">Rester (Stand)</h3>
              <p className="text-sm text-text-light">Garder votre main actuelle et passer au joueur suivant (ou au croupier).</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-bold mb-2">Doubler (Double Down)</h3>
              <p className="text-sm text-text-light">Doubler votre mise initiale en échange d&apos;une seule carte supplémentaire. Recommandé dans certaines situations avantageuses (ex: total de 11 contre un 6 du croupier).</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-bold mb-2">Séparer (Split)</h3>
              <p className="text-sm text-text-light">Si vos deux premières cartes ont la même valeur, vous pouvez les séparer en deux mains indépendantes, chacune avec sa propre mise.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-bold mb-2">Abandonner (Surrender)</h3>
              <p className="text-sm text-text-light">Dans certaines variantes, vous pouvez abandonner votre main et récupérer la moitié de votre mise. Utile face à une main très défavorable.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-bold mb-2">Assurance (Insurance)</h3>
              <p className="text-sm text-text-light">Pari secondaire proposé quand le croupier montre un As. Paie 2:1 si le croupier a un blackjack. <strong>Non recommandé</strong> par les experts car statistiquement défavorable.</p>
            </div>
          </div>
        </section>

        <section id="regles-croupier" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Les règles du croupier</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Contrairement aux joueurs, le croupier ne prend aucune décision. Il suit des règles strictes :
          </p>
          <ul className="space-y-2 text-text-light">
            <li>• Le croupier <strong>doit tirer</strong> tant que sa main est inférieure ou égale à 16.</li>
            <li>• Le croupier <strong>doit rester</strong> lorsque sa main atteint 17 ou plus.</li>
            <li>• <strong>Variante importante :</strong> Dans certains jeux, le croupier tire sur un « soft 17 » (As + 6). Cette règle augmente légèrement l&apos;avantage de la maison.</li>
          </ul>
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 text-sm mt-4">
            <strong>Conseil :</strong> Privilégiez toujours les tables où le croupier reste sur un soft 17 (« Dealer Stands on Soft 17 »). Cela réduit l&apos;avantage de la maison d&apos;environ 0,2%.
          </div>
        </section>

        <section id="blackjack-naturel" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Le blackjack naturel</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Un « blackjack naturel » (ou simplement « blackjack ») est une main composée d&apos;un As
            et d&apos;une carte valant 10 (10, Valet, Dame ou Roi), obtenue dès les deux premières cartes.
          </p>
          <ul className="space-y-2 text-text-light">
            <li>• Un blackjack bat toute autre main totalisant 21 (par exemple : 7 + 7 + 7).</li>
            <li>• Un blackjack est généralement payé <strong>3:2</strong> (vous gagnez 1,5 fois votre mise).</li>
            <li>• Si le croupier a aussi un blackjack, c&apos;est une égalité (push) et vous récupérez votre mise.</li>
          </ul>
          <div className="bg-card-red/10 border border-card-red/30 rounded-lg p-4 text-sm mt-4">
            <strong>Attention aux tables 6:5 !</strong> Certaines tables paient le blackjack à 6:5
            au lieu de 3:2. Cela augmente considérablement l&apos;avantage de la maison (+1,4%).
            Évitez ces tables autant que possible.
          </div>
        </section>

        <section id="paiements" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Les paiements</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-felt text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Résultat</th>
                  <th className="px-4 py-3 text-left">Paiement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3">Victoire standard</td><td className="px-4 py-3 text-text-light">1:1 (mise doublée)</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3">Blackjack naturel</td><td className="px-4 py-3 text-text-light">3:2 (mise × 2,5)</td></tr>
                <tr><td className="px-4 py-3">Assurance gagnée</td><td className="px-4 py-3 text-text-light">2:1</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3">Égalité (Push)</td><td className="px-4 py-3 text-text-light">Mise remboursée</td></tr>
                <tr><td className="px-4 py-3">Défaite</td><td className="px-4 py-3 text-text-light">Mise perdue</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="regles-avancees" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Règles avancées</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Selon la variante et le casino, certaines règles supplémentaires peuvent s&apos;appliquer :
          </p>
          <ul className="space-y-2 text-text-light">
            <li>• <strong>Double après split</strong> — Certains casinos permettent de doubler après avoir séparé une paire.</li>
            <li>• <strong>Re-split</strong> — Possibilité de séparer à nouveau si vous recevez une carte identique après un premier split.</li>
            <li>• <strong>Surrender anticipé</strong> — Abandon avant que le croupier ne vérifie un éventuel blackjack.</li>
            <li>• <strong>Nombre de jeux de cartes</strong> — Moins il y a de jeux, plus l&apos;avantage du joueur augmente.</li>
          </ul>
          <p className="text-text-light leading-relaxed mt-4">
            Pour approfondir ces notions et adapter votre jeu, consultez notre{" "}
            <Link href="/strategie-blackjack" className="text-primary hover:text-accent">guide stratégie complet</Link>.
          </p>
        </section>

        <LeadForm variant="banner" title="Mémorisez les règles facilement" description="Téléchargez notre aide-mémoire des règles du blackjack en PDF" />

        <section id="faq">
          <FAQSchema items={faq} />
        </section>
      </article>
    </div>
  );
}
