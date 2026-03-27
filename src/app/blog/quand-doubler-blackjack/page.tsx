import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Quand Doubler au Blackjack : Le Guide Stratégique Complet",
  description:
    "Apprenez exactement quand doubler au blackjack pour maximiser vos gains. Main dure, main souple, erreurs à éviter — le guide complet basé sur les mathématiques.",
  alternates: { canonical: "/blog/quand-doubler-blackjack" },
};

const faq = [
  {
    question: "Quand faut-il toujours doubler au blackjack ?",
    answer:
      "Vous devez toujours doubler avec un total dur de 11, quelle que soit la carte visible du croupier (sauf un As dans certaines variantes). C'est la situation de doublement la plus rentable, car vous avez une forte probabilité de tirer un 10 et d'obtenir 21.",
  },
  {
    question: "Peut-on doubler sur n'importe quelle main au blackjack ?",
    answer:
      "Cela dépend des règles de la table. Certains casinos autorisent le doublement sur n'importe quel total, d'autres le limitent aux totaux de 9, 10 et 11. Vérifiez toujours les règles avant de jouer, car la possibilité de doubler sur les mains souples (soft doubles) réduit l'avantage de la maison d'environ 0,13%.",
  },
  {
    question: "Doubler au blackjack est-il risqué ?",
    answer:
      "Le doublement implique de miser le double sur une seule carte supplémentaire, ce qui comporte un risque. Cependant, quand il est effectué selon la stratégie de base, le doublement est mathématiquement avantageux sur le long terme. Le risque à court terme est compensé par un gain espéré supérieur.",
  },
  {
    question: "Faut-il doubler avec un soft 18 (As-7) ?",
    answer:
      "Oui, quand le croupier montre un 3, 4, 5 ou 6, doubler un soft 18 est la décision optimale. Vous avez déjà une bonne main, mais la possibilité d'améliorer vers 19, 20 ou 21 tout en doublant votre mise rend cette action plus rentable que de simplement rester.",
  },
];

const tocItems = [
  { id: "principe-doublement", label: "Le principe du doublement" },
  { id: "doubler-main-dure", label: "Doubler sur main dure" },
  { id: "doubler-main-souple", label: "Doubler sur main souple" },
  { id: "quand-ne-pas-doubler", label: "Quand NE PAS doubler" },
  { id: "erreurs-courantes", label: "Erreurs courantes" },
  { id: "impact-avantage-maison", label: "Impact sur l'avantage de la maison" },
];

export default function QuandDoublerBlackjackPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Quand doubler au blackjack" },
        ]}
      />

      <article className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-accent/10 text-accent-dark text-xs font-medium px-2 py-1 rounded">
            Stratégies
          </span>
          <time className="text-xs text-text-light">18 mars 2026</time>
          <span className="text-xs text-text-light">• 10 min de lecture</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Quand doubler au blackjack : le guide stratégique complet
        </h1>

        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/blog/quand-doubler.jpg"
            alt="Joueur doublant sa mise au blackjack avec des jetons sur le tapis vert"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>

        <p className="text-lg text-text-light leading-relaxed mb-8">
          Le doublement est l&apos;une des armes les plus puissantes du joueur de blackjack.
          Bien utilisé, il permet de doubler votre mise exactement quand les probabilités
          sont en votre faveur. Mal utilisé, il accélère vos pertes. Ce guide vous explique
          précisément quand doubler — et quand résister à la tentation.
        </p>

        <TableOfContents items={tocItems} />

        {/* Section 1 */}
        <h2 id="principe-doublement" className="text-2xl font-bold mt-10 mb-4">
          Le principe du doublement au blackjack
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Doubler (ou « double down » en anglais) signifie doubler votre mise initiale en échange
          d&apos;une seule carte supplémentaire. Après avoir reçu cette carte, votre main est
          terminée — vous ne pouvez plus tirer. C&apos;est une décision irréversible qui engage
          le double de votre argent sur un seul tirage.
        </p>

        <p className="text-text-light leading-relaxed mb-4">
          L&apos;intérêt du doublement repose sur un principe mathématique simple : quand votre
          main est dans une position favorable et que le croupier est en difficulté, vous voulez
          maximiser votre mise. Le doublement est essentiellement un investissement calculé dans
          les moments où la balance des probabilités penche nettement en votre faveur.
        </p>

        <p className="text-text-light leading-relaxed mb-4">
          Selon les statistiques, environ 9,5% des mains au blackjack devraient être doublées
          quand on suit la{" "}
          <Link href="/strategie-blackjack" className="text-primary hover:text-accent underline">
            stratégie de base optimale
          </Link>
          . Ignorer ces opportunités augmente l&apos;avantage de la maison d&apos;environ 1,6%.
          Autrement dit, ne jamais doubler vous coûte 16€ par tranche de 1 000€ misés.
        </p>

        {/* Section 2 */}
        <h2 id="doubler-main-dure" className="text-2xl font-bold mt-10 mb-4">
          Doubler sur main dure : les situations clés
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Une main dure est une main sans As comptant pour 11, ou avec un As forcé à compter
          pour 1. Voici les trois totaux durs sur lesquels le doublement est recommandé :
        </p>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
          <h3 className="font-bold text-lg mb-3">Total dur de 11 — Doublez toujours</h3>
          <p className="text-text-light text-sm leading-relaxed">
            C&apos;est la meilleure main pour doubler. Avec 11, environ 31% de chance de tirer
            un 10 ou une figure pour atteindre 21. Même si vous tirez un 7, 8 ou 9, vous obtenez
            un total solide de 18 à 20. Le doublement sur 11 est rentable face à toutes les cartes
            du croupier, y compris l&apos;As dans les variantes où le croupier reste sur soft 17.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
          <h3 className="font-bold text-lg mb-3">Total dur de 10 — Doublez sauf contre 10 ou As</h3>
          <p className="text-text-light text-sm leading-relaxed">
            Avec un total de 10, vous avez une forte probabilité d&apos;obtenir 20. Doublez
            quand le croupier montre 2 à 9. Face à un 10 ou un As, le croupier a trop de chances
            d&apos;avoir une main forte — contentez-vous de tirer une carte.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
          <h3 className="font-bold text-lg mb-3">Total dur de 9 — Doublez contre 3 à 6</h3>
          <p className="text-text-light text-sm leading-relaxed">
            Le doublement sur 9 est plus sélectif. Il n&apos;est profitable que lorsque le croupier
            montre une carte faible (3, 4, 5 ou 6). Ces cartes donnent au croupier une probabilité
            élevée de sauter (bust). Face à un 2 ou un 7+, tirez simplement une carte.
          </p>
        </div>

        <LeadForm />

        {/* Section 3 */}
        <h2 id="doubler-main-souple" className="text-2xl font-bold mt-10 mb-4">
          Doubler sur main souple (soft doubles)
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Les mains souples contiennent un As comptant pour 11. Le doublement sur main souple
          est souvent négligé par les joueurs, mais c&apos;est une source importante de profit.
          L&apos;avantage : vous ne pouvez pas sauter (bust) en tirant une carte sur une main souple.
        </p>

        <p className="text-text-light leading-relaxed mb-4">
          Les règles varient selon les{" "}
          <Link href="/regles-blackjack" className="text-primary hover:text-accent underline">
            règles spécifiques de la table
          </Link>
          , mais voici les situations les plus courantes :
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-4 py-2 text-left rounded-tl-lg">Votre main</th>
                <th className="px-4 py-2 text-left">Carte du croupier</th>
                <th className="px-4 py-2 text-left rounded-tr-lg">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-2 font-medium">A-2, A-3</td>
                <td className="px-4 py-2">5–6</td>
                <td className="px-4 py-2 text-primary font-medium">Doubler</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 font-medium">A-4, A-5</td>
                <td className="px-4 py-2">4–6</td>
                <td className="px-4 py-2 text-primary font-medium">Doubler</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 font-medium">A-6</td>
                <td className="px-4 py-2">3–6</td>
                <td className="px-4 py-2 text-primary font-medium">Doubler</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 font-medium">A-7</td>
                <td className="px-4 py-2">3–6</td>
                <td className="px-4 py-2 text-primary font-medium">Doubler</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-text-light leading-relaxed mb-4">
          Le soft 17 (A-6) est particulièrement intéressant. Beaucoup de joueurs restent à 17,
          pensant que c&apos;est une main correcte. En réalité, 17 est une main perdante sur le
          long terme. Doubler quand le croupier montre 3 à 6 transforme une main médiocre en
          situation profitable. Vous pouvez obtenir 18, 19, 20 ou 21 — et dans le pire des cas,
          l&apos;As redevient 1 et vous avez un total jouable.
        </p>

        {/* Section 4 */}
        <h2 id="quand-ne-pas-doubler" className="text-2xl font-bold mt-10 mb-4">
          Quand NE PAS doubler
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Savoir quand ne pas doubler est aussi important que savoir quand le faire. Voici les
          situations où le doublement est une erreur :
        </p>

        <ul className="list-disc pl-6 space-y-3 text-text-light mb-6">
          <li>
            <strong>Avec un total dur de 12 ou plus :</strong> le risque de sauter est trop élevé.
            Tirer un 10 sur un 12 vous donne 22 — et vous perdez le double de votre mise.
          </li>
          <li>
            <strong>Quand le croupier montre un As :</strong> l&apos;As est la carte la plus
            dangereuse pour le croupier. Il a environ 36% de chances de faire blackjack ou
            d&apos;obtenir 20-21. Sauf avec un 11 dur, évitez de doubler.
          </li>
          <li>
            <strong>Avec un soft 19 ou soft 20 :</strong> ces mains sont déjà excellentes.
            Les transformer en risquant le double est mathématiquement perdant.
          </li>
          <li>
            <strong>Quand votre bankroll ne le permet pas :</strong> doubler nécessite une mise
            supplémentaire. Si cette mise met en danger votre session, il est plus sage de
            simplement tirer une carte.
          </li>
        </ul>

        {/* Section 5 */}
        <h2 id="erreurs-courantes" className="text-2xl font-bold mt-10 mb-4">
          Les erreurs courantes de doublement
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Même les joueurs réguliers commettent des erreurs de doublement. Voici les plus
          fréquentes et les plus coûteuses :
        </p>

        <div className="space-y-4 mb-6">
          <div className="border-l-4 border-card-red pl-4">
            <p className="font-bold text-sm">Erreur n°1 : Doubler sur 11 face à un As du croupier... puis ne plus jamais doubler sur 11</p>
            <p className="text-text-light text-sm mt-1">
              Perdre un doublement face à un As est douloureux, mais ça ne change pas les maths.
              Sur 11, le doublement reste correct face à presque toutes les cartes. Un échec
              ponctuel ne doit pas modifier votre stratégie à long terme.
            </p>
          </div>
          <div className="border-l-4 border-card-red pl-4">
            <p className="font-bold text-sm">Erreur n°2 : Doubler un 12 dur « parce que le croupier a un 6 »</p>
            <p className="text-text-light text-sm mt-1">
              Un croupier avec un 6 est en mauvaise posture, c&apos;est vrai. Mais avec un 12 dur,
              tirer un 10 (31% de probabilité) vous fait sauter immédiatement. Contentez-vous
              de rester et laissez le croupier prendre le risque.
            </p>
          </div>
          <div className="border-l-4 border-card-red pl-4">
            <p className="font-bold text-sm">Erreur n°3 : Ignorer les soft doubles par méconnaissance</p>
            <p className="text-text-light text-sm mt-1">
              Beaucoup de joueurs ne doublent que sur 10 et 11. En ignorant les soft doubles
              (A-2 à A-7 dans les bonnes situations), ils laissent de l&apos;argent sur la table.
              Les soft doubles représentent environ 0,13% de réduction de l&apos;avantage maison.
            </p>
          </div>
        </div>

        {/* Section 6 */}
        <h2 id="impact-avantage-maison" className="text-2xl font-bold mt-10 mb-4">
          Impact du doublement sur l&apos;avantage de la maison
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          L&apos;option de doubler réduit l&apos;avantage de la maison d&apos;environ 1,6%.
          C&apos;est considérable. Sans cette option, le blackjack serait un jeu nettement
          moins favorable au joueur. Voici comment se décompose cet avantage :
        </p>

        <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 mb-6">
          <ul className="space-y-2 text-text-light text-sm">
            <li>
              <strong>Doublement sur main dure :</strong> environ 1,43% de réduction de
              l&apos;avantage maison
            </li>
            <li>
              <strong>Doublement sur main souple :</strong> environ 0,13% de réduction
              supplémentaire
            </li>
            <li>
              <strong>Restriction au doublement sur 10-11 uniquement :</strong> coûte environ
              0,18% au joueur par rapport au doublement libre
            </li>
          </ul>
        </div>

        <p className="text-text-light leading-relaxed mb-4">
          Ces chiffres peuvent sembler modestes, mais sur des milliers de mains, ils font une
          différence substantielle. Un joueur qui mise 10€ par main et joue 200 mains par session
          économise en moyenne 32€ par session grâce au doublement correct, comparé à un joueur
          qui ne double jamais.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-8">
          <h3 className="font-bold text-lg mb-3">Conseil pratique</h3>
          <p className="text-text-light text-sm leading-relaxed">
            Si vous jouez en ligne, vous avez l&apos;avantage de pouvoir consulter un tableau
            de{" "}
            <Link href="/strategie-blackjack" className="text-primary hover:text-accent underline">
              stratégie de base
            </Link>{" "}
            pendant la partie. Gardez-le ouvert dans un onglet séparé et vérifiez chaque décision
            de doublement jusqu&apos;à ce que les réflexes soient acquis. Il faut généralement
            500 à 1 000 mains d&apos;entraînement pour maîtriser automatiquement les situations
            de doublement.
          </p>
        </div>

        <FAQSchema items={faq} />

        <LeadForm variant="banner" />
      </article>
    </div>
  );
}
