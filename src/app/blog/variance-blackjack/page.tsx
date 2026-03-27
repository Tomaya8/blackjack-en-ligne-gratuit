import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "La Variance au Blackjack : Comprendre les Fluctuations",
  description:
    "Tout savoir sur la variance au blackjack : pourquoi les sessions courtes sont trompeuses, comment gérer les séries de pertes, et quelle bankroll est nécessaire pour survivre aux fluctuations.",
  alternates: { canonical: "/blog/variance-blackjack" },
};

const toc = [
  { id: "definition-variance", label: "Qu'est-ce que la variance ?" },
  { id: "ecart-type", label: "L'écart type au blackjack" },
  { id: "sessions-courtes", label: "Pourquoi les sessions courtes sont trompeuses" },
  { id: "series-normales", label: "Les séries sont normales" },
  { id: "taille-echantillon", label: "Quelle taille d'échantillon pour voir les vraies probabilités" },
  { id: "bankroll-variance", label: "Bankroll et survie face à la variance" },
  { id: "competence-vs-chance", label: "Compétence vs chance" },
];

const faq = [
  {
    question: "Qu'est-ce que la variance au blackjack ?",
    answer: "La variance au blackjack mesure l'ampleur des fluctuations de vos résultats autour de la moyenne théorique. Une variance élevée signifie que vos gains et pertes peuvent être très importants à court terme, même si sur le long terme vos résultats convergeront vers l'espérance mathématique (perte de ~0,5% avec la stratégie de base).",
  },
  {
    question: "Combien de mains faut-il jouer pour voir les vraies probabilités ?",
    answer: "Il faut environ 50 000 à 100 000 mains pour que vos résultats réels se rapprochent significativement de l'espérance mathématique. Sur 100 mains, la variance est si élevée que n'importe quel résultat est possible. C'est pourquoi on ne peut jamais juger une stratégie sur une seule session.",
  },
  {
    question: "Quelle bankroll faut-il pour survivre à la variance ?",
    answer: "La règle générale recommande une bankroll d'au moins 50 à 100 fois votre mise de base pour une session confortable. Pour un jeu régulier avec un risque de ruine acceptable (moins de 5%), il est conseillé d'avoir 200 à 300 unités de mise. Avec une mise de 10€, cela représente 2 000 à 3 000€ de bankroll dédiée.",
  },
  {
    question: "Les séries de pertes sont-elles le signe d'une mauvaise stratégie ?",
    answer: "Non, absolument pas. Les séries de pertes (et de gains) sont des phénomènes statistiquement normaux et inévitables. Même avec une stratégie parfaite, vous pouvez perdre 10 mains consécutives. Cela ne signifie pas que votre stratégie est mauvaise, c'est simplement la variance en action.",
  },
];

export default function VarianceBlackjackPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Blog", href: "/blog" }, { label: "La Variance au Blackjack" }]} />

      <article className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-accent/10 text-accent-dark text-xs font-medium px-2 py-1 rounded">Mathématiques</span>
          <time className="text-xs text-text-light">3 mars 2026</time>
          <span className="text-xs text-text-light">• 10 min de lecture</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          La variance au blackjack : comprendre les fluctuations
        </h1>

        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image src="/images/blog/variance.jpg" alt="Graphique de variance et fluctuations au blackjack" fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" priority />
        </div>

        <p className="text-lg text-text-light leading-relaxed mb-8">
          Vous appliquez la stratégie de base à la perfection et pourtant vous venez de perdre 8
          mains d&apos;affilée. Votre stratégie est-elle mauvaise ? Non. C&apos;est la variance,
          un concept mathématique fondamental que tout joueur de blackjack doit comprendre pour
          éviter les erreurs de jugement et les réactions émotionnelles coûteuses.
        </p>

        <TableOfContents items={toc} />

        <section id="definition-variance" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce que la variance ?</h2>
          <p className="text-text-light leading-relaxed mb-4">
            La variance est une mesure statistique qui quantifie la dispersion des résultats autour
            de la moyenne. En termes simples, elle décrit à quel point vos résultats réels peuvent
            s&apos;éloigner du résultat théorique attendu.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            Au blackjack, le résultat attendu avec la stratégie de base est une perte d&apos;environ
            0,5% de vos mises totales. Mais ce chiffre est une <strong>moyenne sur des dizaines de
            milliers de mains</strong>. Sur une session de 100 mains, vos résultats seront très
            éloignés de cette moyenne — dans un sens comme dans l&apos;autre.
          </p>
          <p className="text-text-light leading-relaxed">
            Imaginez que vous lancez une pièce de monnaie 10 fois. Vous pourriez obtenir 7 faces et
            3 piles, ou l&apos;inverse. Cela ne signifie pas que la pièce est truquée — c&apos;est
            simplement la variance à l&apos;oeuvre. Au blackjack, le même principe s&apos;applique,
            mais avec des conséquences financières réelles.
          </p>
        </section>

        <section id="ecart-type" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">L&apos;écart type au blackjack</h2>
          <p className="text-text-light leading-relaxed mb-4">
            L&apos;écart type (standard deviation) est la racine carrée de la variance. C&apos;est
            la mesure la plus pratique pour comprendre l&apos;amplitude de vos fluctuations. Au
            blackjack, l&apos;écart type par main est d&apos;environ <strong>1,15 unité de mise</strong>.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            Qu&apos;est-ce que cela signifie concrètement ? Après N mains, votre écart type total
            est d&apos;environ 1,15 x racine carrée de N. Voici quelques exemples avec une mise de 10€ :
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-felt text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Nombre de mains</th>
                  <th className="px-4 py-3 text-left">Perte attendue</th>
                  <th className="px-4 py-3 text-left">Écart type</th>
                  <th className="px-4 py-3 text-left">Fourchette probable (68%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 font-medium">100</td><td className="px-4 py-3 text-text-light">-5€</td><td className="px-4 py-3 text-primary font-bold">115€</td><td className="px-4 py-3 text-text-light">-120€ à +110€</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">500</td><td className="px-4 py-3 text-text-light">-25€</td><td className="px-4 py-3 text-primary font-bold">257€</td><td className="px-4 py-3 text-text-light">-282€ à +232€</td></tr>
                <tr><td className="px-4 py-3 font-medium">1 000</td><td className="px-4 py-3 text-text-light">-50€</td><td className="px-4 py-3 text-primary font-bold">364€</td><td className="px-4 py-3 text-text-light">-414€ à +314€</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">10 000</td><td className="px-4 py-3 text-text-light">-500€</td><td className="px-4 py-3 text-primary font-bold">1 150€</td><td className="px-4 py-3 text-text-light">-1 650€ à +650€</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-sm">
            <strong>Point clé :</strong> Après 100 mains à 10€, votre perte attendue est de seulement
            5€, mais votre écart type est de 115€. Cela signifie que votre résultat est dominé par
            la chance, pas par l&apos;avantage de la maison. C&apos;est pourquoi les sessions
            courtes ne prouvent rien.
          </div>
        </section>

        <section id="sessions-courtes" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Pourquoi les sessions courtes sont trompeuses</h2>
          <p className="text-text-light leading-relaxed mb-4">
            C&apos;est l&apos;erreur la plus répandue chez les joueurs de blackjack : tirer des
            conclusions d&apos;une seule session. « J&apos;ai gagné 200€ ce soir, ma technique
            fonctionne ! » ou « J&apos;ai perdu 300€, la stratégie de base ne marche pas ».
            Ces deux affirmations sont également invalides.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            Le ratio signal/bruit illustre bien le problème. Le « signal » (l&apos;avantage de la
            maison de 0,5%) est extrêmement faible comparé au « bruit » (la variance). Sur 100 mains,
            le bruit est environ 23 fois plus fort que le signal. Il faut jouer des milliers de mains
            pour que le signal commence à émerger du bruit.
          </p>
          <p className="text-text-light leading-relaxed">
            En pratique, cela signifie que la plupart des joueurs récréatifs ne joueront jamais
            assez de mains pour que leurs résultats reflètent les probabilités théoriques. Et c&apos;est
            une bonne nouvelle : cela signifie que la variance peut jouer en votre faveur aussi
            souvent qu&apos;en votre défaveur sur une session donnée.
          </p>
        </section>

        <LeadForm />

        <section id="series-normales" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Les séries de gains et de pertes sont normales</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Les êtres humains sont câblés pour détecter des « patterns » même là où il n&apos;y en
            a pas. Quand vous perdez 6 mains d&apos;affilée, votre cerveau vous crie que quelque
            chose ne va pas. Pourtant, les mathématiques montrent que ces séries sont parfaitement
            normales.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            Voici les probabilités de séries consécutives au blackjack (en considérant un taux de
            victoire d&apos;environ 42%) :
          </p>
          <ul className="space-y-2 text-text-light mb-4">
            <li>• <strong>3 pertes consécutives</strong> : environ 20% de chance — arrive une fois sur cinq tentatives.</li>
            <li>• <strong>5 pertes consécutives</strong> : environ 7% de chance — arrive régulièrement sur une session de 100 mains.</li>
            <li>• <strong>8 pertes consécutives</strong> : environ 1,5% de chance — rare mais inévitable sur un grand nombre de sessions.</li>
            <li>• <strong>10 pertes consécutives</strong> : environ 0,5% de chance — arrive environ une fois toutes les 200 séquences.</li>
          </ul>
          <p className="text-text-light leading-relaxed">
            Le piège est de réagir émotionnellement à ces séries en changeant de stratégie ou en
            augmentant ses mises pour « se refaire ». C&apos;est exactement ce qu&apos;il ne faut
            pas faire. La{" "}
            <Link href="/strategie-blackjack" className="text-primary hover:text-accent">stratégie de base</Link>{" "}
            reste optimale quelle que soit la séquence précédente de résultats.
          </p>
        </section>

        <section id="taille-echantillon" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Quelle taille d&apos;échantillon pour voir les vraies probabilités ?</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Les statisticiens utilisent le concept de « convergence vers la moyenne » pour décrire
            comment les résultats se rapprochent de l&apos;espérance mathématique à mesure que le
            nombre d&apos;essais augmente. Mais combien de mains faut-il réellement ?
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            Pour qu&apos;il y ait une probabilité de 95% que vos résultats se situent dans une
            fourchette de plus ou moins 1% autour de l&apos;espérance théorique, il faut environ
            <strong> 50 000 mains</strong>. Pour une précision de plus ou moins 0,5%, il faut
            environ <strong>100 000 mains</strong>.
          </p>
          <p className="text-text-light leading-relaxed">
            Pour mettre ces chiffres en perspective : un joueur récréatif qui joue 2 heures par
            semaine à environ 80 mains par heure met plus de 6 ans pour atteindre 50 000 mains.
            Cela illustre pourquoi les résultats individuels sont largement gouvernés par la variance
            et non par l&apos;avantage de la maison.
          </p>
        </section>

        <section id="bankroll-variance" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Bankroll et survie face à la variance</h2>
          <p className="text-text-light leading-relaxed mb-4">
            La gestion de bankroll est votre bouclier contre la variance. Sans une bankroll
            suffisante, une série de pertes normale peut vous éliminer du jeu avant que la variance
            ne tourne en votre faveur.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            La règle fondamentale est de ne jamais miser plus de 1 à 2% de votre bankroll totale
            par main. Cela vous donne suffisamment de marge pour absorber les fluctuations inévitables.
            Voici les recommandations en fonction de votre tolérance au risque :
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-felt text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Profil</th>
                  <th className="px-4 py-3 text-left">Bankroll recommandée</th>
                  <th className="px-4 py-3 text-left">Risque de ruine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 font-medium">Conservateur</td><td className="px-4 py-3 text-primary font-bold">300 x mise de base</td><td className="px-4 py-3 text-text-light">Moins de 1%</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Modéré</td><td className="px-4 py-3 text-accent-dark font-bold">200 x mise de base</td><td className="px-4 py-3 text-text-light">Environ 5%</td></tr>
                <tr><td className="px-4 py-3 font-medium">Session unique</td><td className="px-4 py-3 text-accent-dark font-bold">50-100 x mise de base</td><td className="px-4 py-3 text-text-light">10-20%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed">
            Pour en savoir plus sur la gestion optimale de votre capital, consultez notre guide
            complet sur la{" "}
            <Link href="/blog/gestion-bankroll-blackjack" className="text-primary hover:text-accent">gestion de bankroll au blackjack</Link>.
          </p>
        </section>

        <section id="competence-vs-chance" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Compétence vs chance : savoir faire la différence</h2>
          <p className="text-text-light leading-relaxed mb-4">
            L&apos;un des plus grands défis pour un joueur de blackjack est de distinguer ce qui
            relève de la compétence de ce qui relève de la chance. Cette confusion mène à deux
            erreurs symétriques et également dangereuses.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            <strong>Erreur 1 : attribuer un gain à la compétence.</strong> Vous gagnez 300€ en une
            session et vous pensez avoir « trouvé le truc ». En réalité, c&apos;est probablement
            la variance favorable. Cela peut conduire à une surconfiance et à des mises plus élevées,
            ce qui est dangereux.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            <strong>Erreur 2 : attribuer une perte à l&apos;incompétence.</strong> Vous perdez 200€
            malgré une stratégie parfaite et vous abandonnez la stratégie de base pour « essayer
            autre chose ». C&apos;est exactement le contraire de ce qu&apos;il faut faire.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            La vérité est que la compétence au blackjack se mesure uniquement par la <strong>qualité
            de vos décisions</strong>, pas par vos résultats à court terme. Un joueur qui prend
            systématiquement la bonne décision (selon la stratégie de base) est un joueur compétent,
            qu&apos;il gagne ou qu&apos;il perde sur une session donnée.
          </p>
          <p className="text-text-light leading-relaxed">
            Accepter la variance, c&apos;est accepter que vous ne contrôlez pas les résultats à court
            terme. Vous contrôlez uniquement vos décisions et votre gestion de bankroll. C&apos;est
            cette maturité qui distingue un joueur éclairé d&apos;un joueur impulsif.
          </p>
        </section>

        <LeadForm variant="banner" title="Gérez la variance intelligemment" description="Recevez notre calculateur de bankroll et guide de gestion des fluctuations en PDF gratuit" />

        <section>
          <FAQSchema items={faq} />
        </section>
      </article>
    </div>
  );
}
