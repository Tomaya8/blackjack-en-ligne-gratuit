import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Les Probabilités au Blackjack : Comprendre les Maths du Jeu",
  description:
    "Découvrez toutes les probabilités au blackjack : chances d'obtenir un blackjack naturel (4,8%), risque de bust, probabilités du croupier et valeurs espérées de chaque décision.",
  alternates: { canonical: "/blog/probabilites-blackjack-guide" },
};

const toc = [
  { id: "probabilite-blackjack-naturel", label: "Probabilité d'un blackjack naturel" },
  { id: "probabilite-bust", label: "Probabilité de bust selon votre total" },
  { id: "probabilites-croupier", label: "Probabilités de bust du croupier" },
  { id: "valeurs-esperees", label: "Valeurs espérées des décisions" },
  { id: "pourquoi-maths", label: "Pourquoi les maths dictent vos décisions" },
  { id: "tables-probabilites", label: "Tables de probabilités essentielles" },
];

const faq = [
  {
    question: "Quelle est la probabilité d'obtenir un blackjack naturel ?",
    answer: "La probabilité d'obtenir un blackjack naturel (un As + une carte valant 10) est d'environ 4,83% avec un seul jeu de 52 cartes. Ce pourcentage varie légèrement avec le nombre de jeux utilisés : environ 4,75% avec 6 jeux et 4,77% avec 8 jeux.",
  },
  {
    question: "Quel est le risque de bust si je tire à 16 ?",
    answer: "Si votre total est de 16, la probabilité de dépasser 21 en tirant une carte supplémentaire est d'environ 62%. C'est pourquoi la stratégie de base recommande parfois de rester à 16 face à certaines cartes du croupier, notamment les 2 à 6.",
  },
  {
    question: "Les probabilités changent-elles selon le nombre de jeux de cartes ?",
    answer: "Oui, mais les variations sont faibles. Avec un seul jeu, la probabilité de blackjack est de 4,83%. Avec 6 jeux, elle descend à 4,75%. Le nombre de jeux affecte surtout les situations de doublement et de séparation. Globalement, moins il y a de jeux, plus les probabilités sont favorables au joueur.",
  },
  {
    question: "Comment les probabilités influencent-elles la stratégie de base ?",
    answer: "La stratégie de base est entièrement construite sur les probabilités. Chaque décision (tirer, rester, doubler, séparer) a été calculée par simulation de millions de mains pour trouver l'option qui offre la meilleure valeur espérée. Suivre la stratégie de base, c'est suivre les mathématiques.",
  },
];

export default function ProbabilitesBlackjackPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Les Probabilités au Blackjack" }]} />

      <article className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-accent/10 text-accent-dark text-xs font-medium px-2 py-1 rounded">Mathématiques</span>
          <time className="text-xs text-text-light">9 mars 2026</time>
          <span className="text-xs text-text-light">• 12 min de lecture</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Les probabilités au blackjack : comprendre les maths du jeu
        </h1>

        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image src="/images/blog/probabilites.jpg" alt="Probabilités et mathématiques au blackjack avec cartes et statistiques" fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" priority />
        </div>

        <p className="text-lg text-text-light leading-relaxed mb-8">
          Le blackjack est le seul jeu de casino où les mathématiques peuvent réellement guider vos
          décisions. Contrairement à la roulette ou aux machines à sous, chaque choix que vous faites
          a un impact mesurable sur vos chances de gagner. Dans ce guide, nous allons décortiquer
          toutes les probabilités essentielles que chaque joueur devrait connaître.
        </p>

        <TableOfContents items={toc} />

        <section id="probabilite-blackjack-naturel" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Probabilité d&apos;un blackjack naturel</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Le blackjack naturel — un As accompagné d&apos;une carte valant 10 (10, Valet, Dame ou Roi) —
            est la main la plus convoitée du jeu. Avec un seul jeu de 52 cartes, la probabilité de
            recevoir cette combinaison est d&apos;environ <strong>4,83%</strong>, soit environ une main
            sur 21.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            Voici comment ce calcul fonctionne : dans un jeu de 52 cartes, il y a 4 As et 16 cartes
            valant 10. La probabilité de recevoir un As en premier est de 4/52, puis une carte valant
            10 est de 16/51. Multipliez par 2 (car l&apos;ordre peut être inversé) et vous obtenez
            2 x (4/52) x (16/51) = 4,83%.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-felt text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Nombre de jeux</th>
                  <th className="px-4 py-3 text-left">Probabilité de blackjack</th>
                  <th className="px-4 py-3 text-left">Fréquence approximative</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 font-medium">1 jeu</td><td className="px-4 py-3 text-primary font-bold">4,83%</td><td className="px-4 py-3 text-text-light">1 sur 20,7</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">2 jeux</td><td className="px-4 py-3 text-primary font-bold">4,78%</td><td className="px-4 py-3 text-text-light">1 sur 20,9</td></tr>
                <tr><td className="px-4 py-3 font-medium">6 jeux</td><td className="px-4 py-3 text-primary font-bold">4,75%</td><td className="px-4 py-3 text-text-light">1 sur 21,1</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">8 jeux</td><td className="px-4 py-3 text-primary font-bold">4,74%</td><td className="px-4 py-3 text-text-light">1 sur 21,1</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed">
            Un point crucial : un blackjack naturel est généralement payé <strong>3:2</strong> (soit
            1,5 fois votre mise), ce qui représente un avantage significatif. Méfiez-vous des tables
            qui paient 6:5 — elles augmentent l&apos;avantage de la maison de près de 1,4%.
          </p>
        </section>

        <section id="probabilite-bust" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Probabilité de bust selon votre total</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Le « bust » (dépasser 21) est le risque principal lorsque vous décidez de tirer une carte
            supplémentaire. Ce risque varie considérablement selon votre total actuel. Connaître ces
            probabilités est fondamental pour prendre de bonnes décisions.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-felt text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Votre total</th>
                  <th className="px-4 py-3 text-left">Probabilité de bust</th>
                  <th className="px-4 py-3 text-left">Commentaire</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 font-medium">11 ou moins</td><td className="px-4 py-3 text-primary font-bold">0%</td><td className="px-4 py-3 text-text-light">Aucun risque, tirez toujours</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">12</td><td className="px-4 py-3 text-accent-dark font-bold">31%</td><td className="px-4 py-3 text-text-light">Risque modéré</td></tr>
                <tr><td className="px-4 py-3 font-medium">13</td><td className="px-4 py-3 text-accent-dark font-bold">39%</td><td className="px-4 py-3 text-text-light">Risque significatif</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">14</td><td className="px-4 py-3 text-accent-dark font-bold">56%</td><td className="px-4 py-3 text-text-light">Plus d&apos;une chance sur deux</td></tr>
                <tr><td className="px-4 py-3 font-medium">15</td><td className="px-4 py-3 text-card-red font-bold">58%</td><td className="px-4 py-3 text-text-light">Risque élevé</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">16</td><td className="px-4 py-3 text-card-red font-bold">62%</td><td className="px-4 py-3 text-text-light">La main la plus délicate</td></tr>
                <tr><td className="px-4 py-3 font-medium">17</td><td className="px-4 py-3 text-card-red font-bold">69%</td><td className="px-4 py-3 text-text-light">Restez presque toujours</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">18</td><td className="px-4 py-3 text-card-red font-bold">77%</td><td className="px-4 py-3 text-text-light">Restez toujours</td></tr>
                <tr><td className="px-4 py-3 font-medium">19</td><td className="px-4 py-3 text-card-red font-bold">85%</td><td className="px-4 py-3 text-text-light">Main forte</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">20</td><td className="px-4 py-3 text-card-red font-bold">92%</td><td className="px-4 py-3 text-text-light">Restez toujours</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-sm">
            <strong>Point clé :</strong> La zone 12-16 est appelée la « zone de danger ». C&apos;est
            dans cette fourchette que vos décisions sont les plus déterminantes. La{" "}
            <Link href="/strategie-blackjack" className="text-primary hover:text-accent">stratégie de base</Link>{" "}
            vous guide précisément dans ces situations en tenant compte de la carte visible du croupier.
          </div>
        </section>

        <section id="probabilites-croupier" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Probabilités de bust du croupier par carte visible</h2>
          <p className="text-text-light leading-relaxed mb-4">
            La carte visible du croupier est votre meilleure source d&apos;information. Elle détermine
            en grande partie la probabilité que le croupier dépasse 21. Le croupier doit tirer
            obligatoirement jusqu&apos;à obtenir au moins 17, ce qui crée des situations très
            différentes selon sa carte de départ.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-felt text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Carte visible</th>
                  <th className="px-4 py-3 text-left">Probabilité de bust</th>
                  <th className="px-4 py-3 text-left">Interprétation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 font-medium">2</td><td className="px-4 py-3 text-accent-dark font-bold">35,3%</td><td className="px-4 py-3 text-text-light">Carte faible</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">3</td><td className="px-4 py-3 text-accent-dark font-bold">37,6%</td><td className="px-4 py-3 text-text-light">Carte faible</td></tr>
                <tr><td className="px-4 py-3 font-medium">4</td><td className="px-4 py-3 text-primary font-bold">40,3%</td><td className="px-4 py-3 text-text-light">Carte très faible</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">5</td><td className="px-4 py-3 text-primary font-bold">42,9%</td><td className="px-4 py-3 text-text-light">Carte la plus faible</td></tr>
                <tr><td className="px-4 py-3 font-medium">6</td><td className="px-4 py-3 text-primary font-bold">42,1%</td><td className="px-4 py-3 text-text-light">Carte très faible</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">7</td><td className="px-4 py-3 text-accent-dark font-bold">26,2%</td><td className="px-4 py-3 text-text-light">Carte neutre</td></tr>
                <tr><td className="px-4 py-3 font-medium">8</td><td className="px-4 py-3 text-accent-dark font-bold">24,4%</td><td className="px-4 py-3 text-text-light">Carte neutre</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">9</td><td className="px-4 py-3 text-accent-dark font-bold">23,3%</td><td className="px-4 py-3 text-text-light">Carte forte</td></tr>
                <tr><td className="px-4 py-3 font-medium">10/Figure</td><td className="px-4 py-3 text-card-red font-bold">21,4%</td><td className="px-4 py-3 text-text-light">Carte forte</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">As</td><td className="px-4 py-3 text-card-red font-bold">11,7%</td><td className="px-4 py-3 text-text-light">Carte la plus forte</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed">
            On observe un schéma clair : les cartes 4, 5 et 6 donnent au croupier la plus haute
            probabilité de bust (plus de 40%). C&apos;est la raison pour laquelle la stratégie de base
            vous recommande de rester sur des totaux plus faibles (comme 12) lorsque le croupier
            montre ces cartes. À l&apos;inverse, face à un As, le croupier ne bust que dans 11,7% des
            cas, ce qui rend votre situation beaucoup plus délicate.
          </p>
        </section>

        <LeadForm />

        <section id="valeurs-esperees" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Valeurs espérées des décisions</h2>
          <p className="text-text-light leading-relaxed mb-4">
            La valeur espérée (EV, pour « Expected Value ») représente le gain ou la perte moyenne
            que vous pouvez attendre d&apos;une décision sur un très grand nombre de mains. C&apos;est
            le concept le plus puissant pour comprendre pourquoi certaines décisions sont meilleures
            que d&apos;autres.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            Par exemple, considérons un total de 11 face à un 6 du croupier. Si vous tirez simplement,
            votre valeur espérée est d&apos;environ +0,24 (vous gagnez en moyenne 24 centimes par euro
            misé). Mais si vous doublez, votre EV monte à environ +0,39, car vous misez le double dans
            une situation favorable. C&apos;est pourquoi la stratégie de base recommande de doubler ici.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-sm mb-4">
            <strong>Comprendre l&apos;EV :</strong> Une EV de +0,10 signifie que vous gagnez en moyenne
            10 centimes par euro misé. Une EV de -0,15 signifie que vous perdez 15 centimes par euro
            misé. La stratégie de base choisit toujours l&apos;option avec l&apos;EV la plus élevée.
          </div>
          <p className="text-text-light leading-relaxed mb-4">
            Voici quelques exemples concrets de valeurs espérées qui illustrent l&apos;importance de
            chaque décision :
          </p>
          <ul className="space-y-2 text-text-light mb-4">
            <li>• <strong>Séparer les As</strong> : EV d&apos;environ +0,18 contre rester à 12 (EV de -0,50). La différence est massive.</li>
            <li>• <strong>Séparer les 8</strong> : Deux mains commençant à 8 ont une EV bien supérieure à garder un 16 (la pire main du jeu).</li>
            <li>• <strong>Ne jamais séparer les 10</strong> : Un total de 20 a une EV de +0,64, bien supérieure à deux mains de 10.</li>
            <li>• <strong>Doubler sur 11 contre un 5</strong> : L&apos;EV du doublement (+0,56) est presque le double de celle d&apos;un simple tirage (+0,30).</li>
          </ul>
          <p className="text-text-light leading-relaxed">
            Chaque situation au blackjack possède une EV calculable pour chaque option possible.
            Consultez nos tableaux de{" "}
            <Link href="/strategie-blackjack" className="text-primary hover:text-accent">stratégie de base</Link>{" "}
            pour connaître la décision optimale dans chaque cas.
          </p>
        </section>

        <section id="pourquoi-maths" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Pourquoi les maths dictent vos décisions</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Beaucoup de joueurs font confiance à leur « instinct » plutôt qu&apos;aux mathématiques.
            C&apos;est une erreur coûteuse. L&apos;instinct est biaisé par nos émotions, nos
            souvenirs sélectifs et nos croyances erronées. Les probabilités, elles, ne mentent jamais.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            Prenons un exemple classique : vous avez 16 et le croupier montre un 10. Votre instinct
            vous dit de rester (« je vais bust si je tire »). Mais les maths montrent que tirer est
            moins mauvais que rester. Si vous restez, vous perdez en moyenne 54 centimes par euro misé.
            Si vous tirez, vous ne perdez que 41 centimes. Tirer est donc la « moins mauvaise » option.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            C&apos;est un point essentiel : au blackjack, la bonne décision n&apos;est pas toujours
            celle qui vous fait gagner. C&apos;est celle qui <strong>minimise votre perte</strong> ou
            <strong> maximise votre gain espéré</strong> sur un grand nombre de mains identiques.
          </p>
          <p className="text-text-light leading-relaxed">
            Pour approfondir les{" "}
            <Link href="/regles-blackjack" className="text-primary hover:text-accent">règles du blackjack</Link>{" "}
            et comprendre comment elles influencent les probabilités, consultez notre guide complet.
          </p>
        </section>

        <section id="tables-probabilites" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Tables de probabilités essentielles</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Pour résumer les probabilités les plus importantes à retenir, voici les chiffres clés
            que tout joueur de blackjack sérieux devrait connaître :
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-felt text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Événement</th>
                  <th className="px-4 py-3 text-left">Probabilité</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 font-medium">Obtenir un blackjack naturel</td><td className="px-4 py-3 text-primary font-bold">4,8%</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Gagner une main donnée</td><td className="px-4 py-3 text-primary font-bold">42,2%</td></tr>
                <tr><td className="px-4 py-3 font-medium">Perdre une main donnée</td><td className="px-4 py-3 text-card-red font-bold">49,1%</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Obtenir une égalité (push)</td><td className="px-4 py-3 text-accent-dark font-bold">8,5%</td></tr>
                <tr><td className="px-4 py-3 font-medium">Recevoir une paire</td><td className="px-4 py-3 text-primary font-bold">14,3%</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Recevoir un total de 20</td><td className="px-4 py-3 text-primary font-bold">9,2%</td></tr>
                <tr><td className="px-4 py-3 font-medium">Le croupier obtient un blackjack</td><td className="px-4 py-3 text-card-red font-bold">4,8%</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Le croupier bust</td><td className="px-4 py-3 text-primary font-bold">28,4%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mb-4">
            Un chiffre saute aux yeux : vous perdez plus souvent que vous ne gagnez (49,1% contre
            42,2%). Mais grâce au paiement 3:2 sur les blackjacks naturels, aux doublements réussis
            et aux séparations avantageuses, la perte nette avec une stratégie optimale n&apos;est que
            de 0,5% environ. C&apos;est la magie des mathématiques du blackjack.
          </p>
          <p className="text-text-light leading-relaxed">
            Ces probabilités sont calculées pour un jeu standard avec les{" "}
            <Link href="/regles-blackjack" className="text-primary hover:text-accent">règles classiques du blackjack</Link>.
            Les variantes de règles peuvent modifier légèrement ces chiffres, mais les ordres de
            grandeur restent les mêmes.
          </p>
        </section>

        <LeadForm variant="banner" title="Maîtrisez les probabilités" description="Recevez nos tableaux de probabilités complets et la stratégie de base en PDF gratuit" />

        <section>
          <FAQSchema items={faq} />
        </section>
      </article>
    </div>
  );
}
