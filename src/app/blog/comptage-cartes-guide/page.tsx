import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Le Comptage de Cartes au Blackjack : Guide Complet et Honnête",
  description:
    "Comment fonctionne le comptage de cartes au blackjack ? Système Hi-Lo, true count, légalité, limites en ligne — un guide complet et réaliste sans mythes.",
  alternates: { canonical: "/blog/comptage-cartes-guide" },
};

const faq = [
  {
    question: "Le comptage de cartes est-il illégal en France ?",
    answer:
      "Non, le comptage de cartes n'est pas illégal en France ni dans la plupart des pays. C'est une technique mentale, pas de la triche. Cependant, les casinos terrestres se réservent le droit de refuser l'accès à tout joueur qu'ils soupçonnent de compter les cartes, car ce sont des établissements privés.",
  },
  {
    question: "Le comptage de cartes fonctionne-t-il au blackjack en ligne ?",
    answer:
      "Non. Les blackjack en ligne classiques (RNG) remélangent le sabot virtuellement à chaque main, rendant le comptage impossible. Même au blackjack live, les casinos utilisent des sabots de 8 jeux avec coupure à 50%, ce qui réduit l'efficacité du comptage à un niveau quasi nul.",
  },
  {
    question: "Combien de temps faut-il pour apprendre à compter les cartes ?",
    answer:
      "Il faut généralement 2 à 4 semaines d'entraînement quotidien (30-60 minutes) pour maîtriser le système Hi-Lo en conditions calmes. Pouvoir compter de manière fiable dans un casino bruyant, tout en jouant la stratégie de base et en variant ses mises, demande 3 à 6 mois de pratique intensive.",
  },
  {
    question: "Quel avantage procure le comptage de cartes ?",
    answer:
      "Un compteur de cartes compétent utilisant le système Hi-Lo avec une variation de mise de 1 à 8 peut obtenir un avantage de 0,5% à 1,5% sur le casino, selon les règles de la table et la pénétration du sabot. Cela se traduit par un gain moyen de 5 à 15€ par heure pour une mise moyenne de 25€.",
  },
];

const tocItems = [
  { id: "histoire-comptage", label: "Brève histoire du comptage" },
  { id: "systeme-hi-lo", label: "Le système Hi-Lo expliqué" },
  { id: "true-count", label: "Running count vs True count" },
  { id: "comptage-en-ligne", label: "Pourquoi ça ne marche pas en ligne" },
  { id: "aspects-legaux", label: "Aspects légaux" },
  { id: "attentes-realistes", label: "Attentes réalistes" },
  { id: "alternatives", label: "Alternatives au comptage" },
];

export default function ComptageCartesGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Comptage de cartes au blackjack" },
        ]}
      />

      <article className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-accent/10 text-accent-dark text-xs font-medium px-2 py-1 rounded">
            Stratégies
          </span>
          <time className="text-xs text-text-light">12 mars 2026</time>
          <span className="text-xs text-text-light">• 12 min de lecture</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Le comptage de cartes au blackjack : guide complet et honnête
        </h1>

        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/blog/comptage-cartes.jpg"
            alt="Cartes de blackjack étalées sur une table avec un joueur concentré en arrière-plan"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>

        <p className="text-lg text-text-light leading-relaxed mb-8">
          Le comptage de cartes fascine depuis des décennies. Popularisé par le livre « Beat the
          Dealer » et le film « Las Vegas 21 », il est entouré de mythes et d&apos;exagérations.
          Ce guide vous explique honnêtement comment il fonctionne, ses limites réelles et
          pourquoi il est inutile dans le blackjack en ligne.
        </p>

        <TableOfContents items={tocItems} />

        {/* Section 1 */}
        <h2 id="histoire-comptage" className="text-2xl font-bold mt-10 mb-4">
          Brève histoire du comptage de cartes
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Le comptage de cartes trouve ses origines dans les travaux du mathématicien Edward O.
          Thorp. En 1962, il publie « Beat the Dealer », un ouvrage révolutionnaire qui démontre
          pour la première fois qu&apos;un joueur peut obtenir un avantage mathématique sur le
          casino au blackjack. Sa méthode repose sur une observation simple : quand le sabot
          contient proportionnellement plus de cartes hautes (10, figures, As), le joueur est
          avantagé.
        </p>

        <p className="text-text-light leading-relaxed mb-4">
          Cette découverte a déclenché une guerre d&apos;intelligence entre compteurs et casinos
          qui dure encore aujourd&apos;hui. Les casinos ont réagi en multipliant le nombre de
          jeux dans les sabots (passant de 1 à 6 ou 8 jeux), en introduisant le mélange continu
          et en formant leurs employés à détecter les compteurs. L&apos;équipe du MIT, rendue
          célèbre par le livre « Bringing Down the House », a démontré dans les années 1990
          qu&apos;il était encore possible de gagner avec des techniques de groupe sophistiquées.
        </p>

        <p className="text-text-light leading-relaxed mb-4">
          Aujourd&apos;hui, le comptage de cartes reste une technique valide en théorie, mais
          les conditions pour en tirer profit se sont considérablement dégradées. Comprendre
          pourquoi nécessite d&apos;abord de comprendre comment le système fonctionne.
        </p>

        {/* Section 2 */}
        <h2 id="systeme-hi-lo" className="text-2xl font-bold mt-10 mb-4">
          Le système Hi-Lo expliqué pas à pas
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Le système Hi-Lo (High-Low) est le système de comptage le plus populaire et le plus
          enseigné. Il est dit « équilibré » car si vous comptez un jeu entier de 52 cartes,
          le total revient à zéro. Voici comment il fonctionne :
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-4 py-2 text-left rounded-tl-lg">Cartes</th>
                <th className="px-4 py-2 text-left">Valeur Hi-Lo</th>
                <th className="px-4 py-2 text-left rounded-tr-lg">Logique</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-2 font-medium">2, 3, 4, 5, 6</td>
                <td className="px-4 py-2 text-primary font-bold">+1</td>
                <td className="px-4 py-2 text-text-light">Leur sortie favorise le joueur</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 font-medium">7, 8, 9</td>
                <td className="px-4 py-2 font-bold">0</td>
                <td className="px-4 py-2 text-text-light">Cartes neutres, pas d&apos;impact</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 font-medium">10, V, D, R, As</td>
                <td className="px-4 py-2 text-card-red font-bold">-1</td>
                <td className="px-4 py-2 text-text-light">Leur sortie défavorise le joueur</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-text-light leading-relaxed mb-4">
          Le compteur maintient un « running count » (compte courant) en additionnant les valeurs
          de chaque carte qu&apos;il voit. Un running count positif signifie que plus de cartes
          basses sont sorties, donc le sabot restant est riche en cartes hautes — situation
          favorable au joueur. Un running count négatif indique le contraire.
        </p>

        <p className="text-text-light leading-relaxed mb-4">
          Pourquoi les cartes hautes favorisent-elles le joueur ? Pour trois raisons :
          premièrement, les blackjacks naturels (payés 3:2) sont plus fréquents. Deuxièmement,
          les doublements ont plus de chances de recevoir un 10. Troisièmement, le croupier,
          obligé de tirer jusqu&apos;à 17, saute plus souvent quand le sabot est riche en
          cartes hautes.
        </p>

        <LeadForm />

        {/* Section 3 */}
        <h2 id="true-count" className="text-2xl font-bold mt-10 mb-4">
          Running count vs True count : la distinction cruciale
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Le running count seul est insuffisant pour prendre des décisions précises. Un running
          count de +5 ne signifie pas la même chose dans un sabot de 6 jeux dont il reste 5 jeux
          que dans un sabot de 2 jeux dont il reste un demi-jeu. C&apos;est pourquoi les
          compteurs sérieux calculent le « true count » (compte vrai).
        </p>

        <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 mb-6">
          <p className="font-bold text-center text-lg mb-2">True Count = Running Count / Nombre de jeux restants</p>
          <p className="text-text-light text-sm text-center">
            Exemple : Running count de +6 avec 3 jeux restants = True count de +2
          </p>
        </div>

        <p className="text-text-light leading-relaxed mb-4">
          Le true count est ce qui guide les décisions de mise. La règle générale est de miser
          proportionnellement au true count : mise minimale à un true count de +1 ou moins,
          puis augmentation progressive. Un true count de +2 correspond à un avantage d&apos;environ
          0,5% pour le joueur. À +3, l&apos;avantage monte à environ 1%. À +5, il peut atteindre
          2% ou plus.
        </p>

        <p className="text-text-light leading-relaxed mb-4">
          Estimer le nombre de jeux restants nécessite de l&apos;entraînement. Les compteurs
          expérimentés observent la défausse et estiment visuellement combien de cartes ont été
          jouées. C&apos;est l&apos;une des compétences les plus difficiles à acquérir dans
          un environnement de casino réel.
        </p>

        {/* Section 4 */}
        <h2 id="comptage-en-ligne" className="text-2xl font-bold mt-10 mb-4">
          Pourquoi le comptage ne fonctionne pas en ligne
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          C&apos;est le point le plus important de ce guide : le comptage de cartes est
          fondamentalement inutile dans le blackjack en ligne classique. Voici pourquoi :
        </p>

        <ul className="list-disc pl-6 space-y-3 text-text-light mb-6">
          <li>
            <strong>Les jeux RNG (générateur de nombres aléatoires) :</strong> chaque main est
            distribuée à partir d&apos;un sabot virtuel complet, fraîchement mélangé. Il n&apos;y
            a pas de « sabot » qui s&apos;épuise. Le comptage n&apos;a strictement aucun effet.
          </li>
          <li>
            <strong>Le{" "}
            <Link href="/blackjack-live" className="text-primary hover:text-accent underline">
              blackjack live
            </Link>{" "}
            avec croupier réel :</strong> les casinos utilisent 8 jeux avec une carte de coupe
            placée à 50% du sabot. Cela signifie que 4 jeux ne sont jamais distribués. Cette
            « pénétration » de 50% rend le comptage extrêmement peu rentable — les mathématiciens
            estiment qu&apos;il faudrait une pénétration d&apos;au moins 75% pour que le comptage
            devienne viable.
          </li>
          <li>
            <strong>Certaines tables live utilisent des mélangeurs continus (CSM) :</strong> les
            cartes jouées sont réintroduites dans le sabot après chaque main. Le comptage est
            alors totalement impossible.
          </li>
        </ul>

        <p className="text-text-light leading-relaxed mb-4">
          Nous insistons sur ce point car de nombreux sites vendent des « systèmes de comptage
          pour le blackjack en ligne ». C&apos;est une arnaque. Ne payez jamais pour un tel
          produit. La{" "}
          <Link href="/strategie-blackjack" className="text-primary hover:text-accent underline">
            stratégie de base
          </Link>{" "}
          est la seule approche mathématiquement valide pour le jeu en ligne.
        </p>

        {/* Section 5 */}
        <h2 id="aspects-legaux" className="text-2xl font-bold mt-10 mb-4">
          Aspects légaux du comptage de cartes
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Le comptage de cartes est légal dans la plupart des juridictions, y compris en France.
          Compter les cartes est une compétence mentale, pas de la triche. Vous n&apos;utilisez
          aucun dispositif externe — juste votre cerveau. Les tribunaux ont confirmé à plusieurs
          reprises que le comptage ne constitue pas une infraction pénale.
        </p>

        <p className="text-text-light leading-relaxed mb-4">
          Cependant, légalité ne signifie pas acceptation. Les casinos terrestres sont des
          établissements privés qui peuvent refuser l&apos;entrée à qui ils veulent. Ils
          disposent de contre-mesures efficaces : logiciels de reconnaissance faciale, analyse
          des patterns de mises, personnel formé à la détection des compteurs. Si un casino vous
          identifie comme compteur, il vous demandera poliment (ou fermement) de quitter la
          table de blackjack, voire l&apos;établissement. En France, les casinos peuvent vous
          interdire d&apos;accès sans avoir à se justifier.
        </p>

        {/* Section 6 */}
        <h2 id="attentes-realistes" className="text-2xl font-bold mt-10 mb-4">
          Attentes réalistes : ce que le comptage rapporte vraiment
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Les films et livres glamourisent le comptage de cartes. La réalité est nettement
          moins excitante. Un compteur compétent avec un spread de mise de 1 à 8 (mise minimale
          de 25€, maximum 200€) peut espérer un avantage de 0,5% à 1,5% selon les conditions.
        </p>

        <p className="text-text-light leading-relaxed mb-4">
          Concrètement, cela se traduit par un gain moyen de 10 à 25€ par heure dans des
          conditions favorables. Soustrayez le temps d&apos;entraînement (des centaines d&apos;heures),
          le stress, les frais de déplacement et le risque d&apos;être interdit, et le comptage
          de cartes s&apos;apparente plus à un travail mal payé qu&apos;à un chemin vers la
          richesse. De plus, la variance est considérable : il est tout à fait possible de perdre
          pendant des semaines malgré un jeu parfait.
        </p>

        {/* Section 7 */}
        <h2 id="alternatives" className="text-2xl font-bold mt-10 mb-4">
          Alternatives au comptage pour le joueur en ligne
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Plutôt que de poursuivre le mirage du comptage de cartes en ligne, concentrez vos
          efforts sur des approches qui fonctionnent réellement :
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <p className="font-bold text-sm mb-1">Maîtriser parfaitement la stratégie de base</p>
            <p className="text-text-light text-sm">
              La{" "}
              <Link href="/strategie-blackjack" className="text-primary hover:text-accent underline">
                stratégie de base
              </Link>{" "}
              réduit l&apos;avantage de la maison à environ 0,5%. C&apos;est la fondation
              indispensable. La plupart des joueurs pensent la connaître mais font encore 3 à 5
              erreurs par heure.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <p className="font-bold text-sm mb-1">Choisir les meilleures tables</p>
            <p className="text-text-light text-sm">
              Les règles varient d&apos;un casino à l&apos;autre. Cherchez les tables avec
              paiement 3:2, croupier reste sur soft 17, doublement autorisé sur toute main et
              surrender disponible. La différence entre les meilleures et les pires tables peut
              atteindre 1% d&apos;avantage maison.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <p className="font-bold text-sm mb-1">Exploiter les bonus des casinos en ligne</p>
            <p className="text-text-light text-sm">
              Les bonus de bienvenue et promotions récurrentes offrent une valeur réelle quand
              les conditions de mise sont raisonnables. Un bonus de 100€ avec un wagering de 30x
              sur le blackjack peut représenter une valeur théorique positive.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <p className="font-bold text-sm mb-1">Pratiquer une gestion de bankroll rigoureuse</p>
            <p className="text-text-light text-sm">
              La discipline financière a plus d&apos;impact sur vos résultats que n&apos;importe
              quelle technique de comptage. Limitez vos mises à 1-2% de votre bankroll et
              respectez vos limites de session.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-8">
          <h3 className="font-bold text-lg mb-3">Le mot de la fin</h3>
          <p className="text-text-light text-sm leading-relaxed">
            Le comptage de cartes est une technique intellectuellement fascinante et
            mathématiquement valide — mais uniquement dans des conditions très spécifiques qui
            n&apos;existent pas dans le{" "}
            <Link href="/blackjack-live" className="text-primary hover:text-accent underline">
              blackjack en ligne
            </Link>
            . Investissez votre temps dans la maîtrise de la stratégie de base, le choix des
            bonnes tables et la discipline de bankroll. Ces compétences vous serviront réellement.
          </p>
        </div>

        <FAQSchema items={faq} />

        <LeadForm variant="banner" />
      </article>
    </div>
  );
}
