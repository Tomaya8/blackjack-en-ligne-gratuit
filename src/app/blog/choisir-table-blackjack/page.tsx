import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Comment Choisir sa Table de Blackjack : Les Critères Essentiels",
  description:
    "Guide expert pour choisir la meilleure table de blackjack : paiement 3:2 vs 6:5, règles du croupier, nombre de decks, options de jeu et mises min/max.",
  alternates: { canonical: "/blog/choisir-table-blackjack" },
};

const faqs = [
  {
    question: "Pourquoi éviter les tables qui paient le blackjack 6:5 ?",
    answer:
      "Une table payant 6:5 au lieu de 3:2 augmente l'avantage de la maison d'environ 1,4 %. Concrètement, pour une mise de 10 €, vous recevez 12 € avec un paiement 6:5 contre 15 € avec un paiement 3:2. Sur des centaines de mains, cette différence représente une perte significative.",
  },
  {
    question: "Est-ce qu'une table avec moins de decks est toujours meilleure ?",
    answer:
      "En théorie, moins de decks favorise le joueur (toutes règles égales). Cependant, les casinos compensent souvent en ajoutant des règles défavorables aux tables à peu de decks (paiement 6:5, pas de double après split). Il faut évaluer l'ensemble des règles, pas seulement le nombre de decks.",
  },
  {
    question: "Quelle est la différence entre le blackjack live et le blackjack RNG ?",
    answer:
      "Le blackjack RNG utilise un générateur de nombres aléatoires : vous jouez contre un ordinateur, à votre rythme, et les cartes sont mélangées à chaque main. Le blackjack live vous connecte à un vrai croupier filmé en studio : le jeu se déroule en temps réel avec un sabot physique de cartes, recréant l'ambiance d'un casino terrestre.",
  },
  {
    question: "Comment connaître les règles exactes d'une table de blackjack en ligne ?",
    answer:
      "La plupart des jeux de blackjack en ligne affichent les règles dans un menu d'aide ou d'information (icône « i » ou « ? »). Vérifiez le paiement du blackjack, les règles du croupier (S17/H17), les options de split et double, et la disponibilité du surrender avant de commencer à jouer.",
  },
];

const tocItems = [
  { id: "importance-choix", label: "Pourquoi le choix de la table est crucial" },
  { id: "paiement-blackjack", label: "Le paiement du blackjack : 3:2 vs 6:5" },
  { id: "regles-croupier", label: "Les règles du croupier : S17 vs H17" },
  { id: "nombre-decks", label: "Le nombre de decks" },
  { id: "options-jeu", label: "Les options de jeu disponibles" },
  { id: "mises-limites", label: "Mises minimales et maximales" },
  { id: "live-vs-rng", label: "Table live vs table RNG" },
  { id: "checklist", label: "Checklist pour choisir sa table" },
];

export default function ChoisirTableBlackjack() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Choisir sa Table de Blackjack" },
        ]}
      />

      <div className="flex items-center gap-3 mb-4">
        <span className="bg-accent/10 text-accent-dark text-xs font-medium px-2 py-1 rounded">
          Guides débutants
        </span>
        <time className="text-xs text-text-light">5 mars 2026</time>
        <span className="text-xs text-text-light">• 10 min de lecture</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Comment Choisir sa Table de Blackjack : Les Critères Essentiels
      </h1>

      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
        <Image
          src="/images/blog/choisir-table.jpg"
          alt="Choisir la meilleure table de blackjack - vue de plusieurs tables de jeu en casino"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </div>

      <p className="text-lg text-text-light mb-8">
        Toutes les tables de blackjack ne se valent pas. Derrière une apparence similaire, les
        règles varient considérablement d&apos;une table à l&apos;autre, et ces différences ont un
        impact direct sur l&apos;avantage de la maison — et donc sur vos chances de gagner. Savoir
        identifier et choisir la bonne table est une compétence aussi importante que la maîtrise de
        la stratégie de base. Ce guide vous apprend à décoder chaque critère pour optimiser vos
        sessions de jeu.
      </p>

      <TableOfContents items={tocItems} />

      <section className="mt-10">
        <h2 id="importance-choix" className="text-2xl font-bold mb-4">
          Pourquoi le choix de la table est crucial
        </h2>
        <p className="mb-4">
          L&apos;avantage de la maison au blackjack n&apos;est pas fixe. Il varie entre 0,2 % et
          plus de 2 % selon les règles appliquées à la table. Un joueur appliquant parfaitement la
          stratégie de base sur une table avec des règles favorables (paiement 3:2, S17, 6 decks,
          double après split autorisé) fait face à un avantage de la maison d&apos;environ 0,4 %. La
          même stratégie sur une table défavorable (paiement 6:5, H17, pas de surrender) affronte un
          avantage de la maison de 1,8 % ou plus.
        </p>
        <p className="mb-4">
          Cette différence est colossale sur le long terme. Sur 1 000 mains à 10 € de mise, la
          table favorable vous coûte en moyenne 40 €, tandis que la table défavorable vous coûte
          180 €. Choisir la bonne table revient à récupérer 140 € de valeur sans aucun effort
          supplémentaire de votre part.
        </p>
        <p className="mb-4">
          Avant de vous asseoir à une table, que ce soit en ligne ou en casino physique, prenez
          systématiquement le temps d&apos;examiner les règles affichées. C&apos;est un investissement
          de quelques minutes qui rapporte gros. Pour maîtriser la stratégie à appliquer ensuite,
          consultez notre{" "}
          <Link href="/strategie-blackjack" className="text-accent hover:underline">
            guide de la stratégie de base
          </Link>.
        </p>
      </section>

      <section className="mt-10">
        <h2 id="paiement-blackjack" className="text-2xl font-bold mb-4">
          Le paiement du blackjack : 3:2 vs 6:5
        </h2>
        <p className="mb-4">
          C&apos;est le critère le plus important et le premier que vous devez vérifier. Un blackjack
          naturel (As + carte valant 10) est traditionnellement payé 3:2, ce qui signifie que vous
          recevez 1,5 fois votre mise. Une mise de 10 € vous rapporte donc 15 €.
        </p>
        <p className="mb-4">
          De nombreux casinos, en ligne comme terrestres, ont introduit des tables payant le blackjack
          6:5. Dans ce cas, une mise de 10 € ne vous rapporte que 12 €. Cette modification apparemment
          mineure augmente l&apos;avantage de la maison d&apos;environ 1,4 %. C&apos;est la plus
          grosse arnaque du blackjack moderne.
        </p>
        <p className="mb-4">
          Règle absolue : ne jouez jamais à une table qui paie le blackjack 6:5. Peu importe les
          autres règles, le bonus offert ou l&apos;ambiance de la table. Le paiement 3:2 est non
          négociable pour tout joueur sérieux. Certaines tables offrent même un paiement 1:1 (even
          money) pour le blackjack naturel — fuyez-les encore plus rapidement.
        </p>
      </section>

      <section className="mt-10">
        <h2 id="regles-croupier" className="text-2xl font-bold mb-4">
          Les règles du croupier : S17 vs H17
        </h2>
        <p className="mb-4">
          Le croupier suit des règles strictes qui déterminent quand il doit tirer ou rester. Le point
          critique concerne le « soft 17 » — une main contenant un As compté comme 11, totalisant 17
          (par exemple As + 6).
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>S17 (Stand on Soft 17)</strong> : le croupier reste sur tout 17, y compris un
            soft 17. C&apos;est la règle la plus favorable pour le joueur.
          </li>
          <li>
            <strong>H17 (Hit on Soft 17)</strong> : le croupier tire une carte supplémentaire sur un
            soft 17. Cette règle augmente l&apos;avantage de la maison d&apos;environ 0,2 %.
          </li>
        </ul>
        <p className="mb-4">
          Pourquoi cette différence ? Lorsque le croupier tire sur un soft 17, il a une chance
          d&apos;améliorer sa main (en obtenant un As, 2, 3 ou 4) sans risque de buster
          immédiatement puisque l&apos;As peut repasser à 1. Statistiquement, cette possibilité
          d&apos;amélioration profite à la banque.
        </p>
        <p className="mb-4">
          En ligne, cette information est généralement indiquée sur le tapis virtuel ou dans les
          règles du jeu. Recherchez la mention « Le croupier tire sur un soft 17 » ou « Le croupier
          reste sur tout 17 ».
        </p>
      </section>

      <LeadForm />

      <section className="mt-10">
        <h2 id="nombre-decks" className="text-2xl font-bold mb-4">
          Le nombre de decks
        </h2>
        <p className="mb-4">
          Le nombre de jeux de cartes utilisés influence l&apos;avantage de la maison. En règle
          générale, moins il y a de decks, plus c&apos;est favorable au joueur. Voici l&apos;impact
          approximatif par rapport à un jeu à 8 decks (toutes autres règles étant égales) :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>1 deck</strong> : -0,48 % (très favorable au joueur)</li>
          <li><strong>2 decks</strong> : -0,19 %</li>
          <li><strong>4 decks</strong> : -0,06 %</li>
          <li><strong>6 decks</strong> : -0,02 %</li>
          <li><strong>8 decks</strong> : référence (0 %)</li>
        </ul>
        <p className="mb-4">
          Attention toutefois : les casinos le savent et compensent souvent l&apos;avantage d&apos;un
          faible nombre de decks par des règles moins favorables. Une table à 1 deck payant 6:5 est
          bien pire qu&apos;une table à 6 decks payant 3:2. Évaluez toujours l&apos;ensemble des
          règles avant de tirer des conclusions.
        </p>
        <p className="mb-4">
          En ligne, la plupart des jeux de blackjack RNG utilisent 6 ou 8 decks avec un mélange
          après chaque main. Les tables live utilisent généralement 8 decks dans un sabot physique
          avec une pénétration de 50 à 75 %.
        </p>
      </section>

      <section className="mt-10">
        <h2 id="options-jeu" className="text-2xl font-bold mb-4">
          Les options de jeu disponibles
        </h2>
        <p className="mb-4">
          Au-delà du paiement et des règles du croupier, d&apos;autres options de jeu influencent
          significativement l&apos;avantage de la maison :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Double après split (DAS)</strong> : pouvoir doubler après avoir séparé une paire
            réduit l&apos;avantage de la maison d&apos;environ 0,14 %. C&apos;est une option très
            favorable au joueur. Privilégiez les tables qui l&apos;autorisent.
          </li>
          <li>
            <strong>Re-split des As</strong> : pouvoir séparer à nouveau si vous recevez un autre As
            après un premier split d&apos;As. Cette option est rare mais réduit l&apos;avantage de la
            maison d&apos;environ 0,08 %.
          </li>
          <li>
            <strong>Surrender (abandon)</strong> : pouvoir abandonner votre main et récupérer la
            moitié de votre mise dans des situations très défavorables (comme un 16 contre un 10).
            Le late surrender réduit l&apos;avantage de la maison d&apos;environ 0,08 %, et
            l&apos;early surrender d&apos;environ 0,39 %.
          </li>
          <li>
            <strong>Restrictions sur le double</strong> : certaines tables limitent le double aux
            totaux de 9, 10 et 11, voire uniquement à 10 et 11. Chaque restriction supprime des
            opportunités rentables et augmente l&apos;avantage de la maison.
          </li>
          <li>
            <strong>Nombre de splits autorisés</strong> : pouvoir séparer jusqu&apos;à 3 ou 4 fois
            (créant 4 mains) est préférable à être limité à un seul split.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 id="mises-limites" className="text-2xl font-bold mb-4">
          Mises minimales et maximales
        </h2>
        <p className="mb-4">
          Les limites de mise ne changent pas l&apos;avantage de la maison, mais elles impactent
          directement votre gestion de bankroll et votre longévité à la table. Voici les principes
          à respecter :
        </p>
        <p className="mb-4">
          La mise minimale ne devrait jamais dépasser 1 à 2 % de votre bankroll totale. Avec un
          budget de 200 €, cherchez des tables à 2 € ou moins de mise minimum. Cette règle vous
          garantit suffisamment de mains pour traverser les fluctuations naturelles du jeu sans
          épuiser votre bankroll prématurément.
        </p>
        <p className="mb-4">
          La mise maximale est moins critique pour la plupart des joueurs, mais elle doit être
          suffisante pour permettre le double et le split sans restriction. Si la table autorise des
          mises de 5 € à 500 €, vous avez largement de quoi manœuvrer.
        </p>
        <p className="mb-4">
          En ligne, l&apos;avantage est que vous trouverez des tables avec des mises minimales très
          basses, à partir de 0,10 € sur certaines plateformes. Pour explorer les options
          disponibles, visitez notre page{" "}
          <Link href="/blackjack-en-ligne" className="text-accent hover:underline">
            blackjack en ligne
          </Link>.
        </p>
      </section>

      <section className="mt-10">
        <h2 id="live-vs-rng" className="text-2xl font-bold mb-4">
          Table live vs table RNG : que choisir ?
        </h2>
        <p className="mb-4">
          Le choix entre une table avec croupier en direct et une table RNG dépend de vos priorités.
          Chaque format a ses spécificités :
        </p>
        <h3 className="text-xl font-semibold mb-3">Tables RNG (contre l&apos;ordinateur)</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Vous jouez à votre rythme, sans pression du temps</li>
          <li>Mises minimales très basses (à partir de 0,10 €)</li>
          <li>Mode gratuit disponible pour s&apos;entraîner</li>
          <li>Les cartes sont mélangées après chaque main (pas de comptage possible)</li>
          <li>Idéal pour les débutants et pour apprendre la stratégie de base</li>
        </ul>
        <h3 className="text-xl font-semibold mb-3">Tables live (croupier en direct)</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Ambiance authentique avec un vrai croupier et des cartes physiques</li>
          <li>Interaction sociale via le chat en direct</li>
          <li>Mises minimales plus élevées (généralement 5 € à 10 € minimum)</li>
          <li>Rythme imposé par le croupier — vous devez décider rapidement</li>
          <li>Pas de mode gratuit disponible</li>
        </ul>
        <p className="mb-4">
          Notre recommandation : commencez par les tables RNG pour maîtriser la stratégie de base à
          votre rythme, puis passez aux tables live lorsque vous êtes à l&apos;aise. Pour en savoir
          plus, consultez notre guide{" "}
          <Link href="/blackjack-live" className="text-accent hover:underline">
            blackjack live
          </Link>.
        </p>
      </section>

      <section className="mt-10">
        <h2 id="checklist" className="text-2xl font-bold mb-4">
          Checklist pour choisir sa table
        </h2>
        <p className="mb-4">
          Avant de miser votre premier jeton, passez en revue cette checklist systématique. Elle
          classe les critères par ordre d&apos;importance :
        </p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>
            <strong>Paiement du blackjack</strong> : vérifiez que la table paie 3:2. C&apos;est le
            critère éliminatoire numéro un. Si c&apos;est 6:5 ou 1:1, changez de table.
          </li>
          <li>
            <strong>Règle du croupier</strong> : S17 est préférable à H17. Cherchez la mention sur
            le tapis ou dans les règles du jeu.
          </li>
          <li>
            <strong>Options de jeu</strong> : double après split autorisé, surrender disponible,
            re-split autorisé — plus il y a d&apos;options, mieux c&apos;est.
          </li>
          <li>
            <strong>Nombre de decks</strong> : moins c&apos;est mieux, mais seulement si les autres
            règles restent favorables.
          </li>
          <li>
            <strong>Mise minimale</strong> : adaptée à votre bankroll (1 à 2 % maximum).
          </li>
          <li>
            <strong>Ambiance et confort</strong> : en live, choisissez un croupier agréable et un
            rythme qui vous convient.
          </li>
        </ol>
        <p className="mb-4">
          En appliquant méthodiquement ces critères, vous identifierez les tables les plus favorables
          et maximiserez vos chances de succès à long terme. Combinez ce choix éclairé avec une
          application rigoureuse de la{" "}
          <Link href="/strategie-blackjack" className="text-accent hover:underline">
            stratégie de base
          </Link>{" "}
          et vous disposerez des meilleures armes possibles face au casino.
        </p>
      </section>

      <section className="mt-12 mb-10">
        <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-card rounded-lg border border-border">
              <summary className="flex items-center justify-between p-4 cursor-pointer font-medium">
                {faq.question}
                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-4 pb-4 text-text-light">{faq.answer}</div>
            </details>
          ))}
        </div>
      </section>

      <FAQSchema items={faqs} />

      <LeadForm variant="banner" />
    </div>
  );
}
