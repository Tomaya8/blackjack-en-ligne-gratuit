import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Gestion de Bankroll au Blackjack : Protégez Votre Capital",
  description:
    "Apprenez à gérer votre bankroll au blackjack. Budgets, limites de session, pourquoi la Martingale échoue, flat betting, critère de Kelly — guide complet.",
  alternates: { canonical: "/blog/gestion-bankroll-blackjack" },
};

const faq = [
  {
    question: "Quel pourcentage de ma bankroll dois-je miser par main au blackjack ?",
    answer:
      "La règle standard est de miser entre 1% et 2% de votre bankroll totale par main. Avec une bankroll de 500€, misez entre 5€ et 10€ par main. Cette approche vous permet de traverser les séquences de pertes inévitables sans épuiser votre capital. Les joueurs plus conservateurs peuvent descendre à 0,5%.",
  },
  {
    question: "La Martingale fonctionne-t-elle au blackjack ?",
    answer:
      "Non. La Martingale (doubler après chaque perte) ne fonctionne pas sur le long terme. Après 8 pertes consécutives avec une mise de départ de 10€, vous devriez miser 2 560€ pour récupérer 10€ de profit. Les limites de table et l'épuisement de votre bankroll rendent ce système catastrophique.",
  },
  {
    question: "Combien faut-il de bankroll pour jouer au blackjack en ligne ?",
    answer:
      "Pour une session confortable, prévoyez au minimum 50 fois votre mise par main. Si vous jouez à 5€ par main, il vous faut au moins 250€ de bankroll dédiée au blackjack. Pour un jeu régulier avec une bonne résistance à la variance, 200 fois la mise est préférable, soit 1 000€ pour des mises de 5€.",
  },
  {
    question: "Faut-il augmenter ses mises quand on gagne au blackjack ?",
    answer:
      "Pas dans un système progressif automatique. Cependant, vous pouvez augmenter légèrement vos mises si votre bankroll globale a augmenté, en maintenant toujours le ratio de 1-2% par main. C'est différent d'un système de progression : vous ajustez simplement la taille de vos mises à la taille réelle de votre capital.",
  },
];

const tocItems = [
  { id: "definition-bankroll", label: "Qu'est-ce que la gestion de bankroll ?" },
  { id: "fixer-budget", label: "Fixer son budget" },
  { id: "regle-pourcentage", label: "La règle du pourcentage par main" },
  { id: "limites-session", label: "Limites de session : stop-loss et objectifs" },
  { id: "martingale-echec", label: "Pourquoi la Martingale échoue" },
  { id: "flat-betting", label: "Le flat betting : la méthode qui fonctionne" },
  { id: "critere-kelly", label: "Le critère de Kelly simplifié" },
  { id: "discipline-emotionnelle", label: "La discipline émotionnelle" },
];

export default function GestionBankrollBlackjackPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Gestion de bankroll au blackjack" },
        ]}
      />

      <article className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-accent/10 text-accent-dark text-xs font-medium px-2 py-1 rounded">
            Stratégies
          </span>
          <time className="text-xs text-text-light">8 mars 2026</time>
          <span className="text-xs text-text-light">• 10 min de lecture</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Gestion de bankroll au blackjack : protégez votre capital
        </h1>

        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/blog/gestion-bankroll.jpg"
            alt="Jetons de casino empilés soigneusement à côté de billets représentant une gestion de bankroll disciplinée"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>

        <p className="text-lg text-text-light leading-relaxed mb-8">
          Vous pouvez connaître la{" "}
          <Link href="/strategie-blackjack" className="text-primary hover:text-accent underline">
            stratégie de base
          </Link>{" "}
          par coeur et prendre la bonne décision à chaque main — si vous ne gérez pas votre
          bankroll, vous finirez perdant. La gestion de bankroll est la compétence la plus
          importante et la plus négligée au blackjack. Ce guide vous donne les outils concrets
          pour protéger votre capital.
        </p>

        <TableOfContents items={tocItems} />

        {/* Section 1 */}
        <h2 id="definition-bankroll" className="text-2xl font-bold mt-10 mb-4">
          Qu&apos;est-ce que la gestion de bankroll ?
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          La gestion de bankroll est l&apos;ensemble des règles que vous vous imposez pour
          contrôler votre argent de jeu. Votre « bankroll » est le montant total que vous avez
          dédié au blackjack — pas votre épargne, pas votre salaire, pas l&apos;argent du
          loyer. C&apos;est un budget de divertissement séparé que vous pouvez vous permettre
          de perdre intégralement sans impact sur votre vie quotidienne.
        </p>

        <p className="text-text-light leading-relaxed mb-4">
          La gestion de bankroll couvre trois aspects fondamentaux : combien vous allouez au
          jeu au total, combien vous misez par main, et quand vous arrêtez de jouer (en gain
          comme en perte). Sans ces trois piliers, même le meilleur joueur technique finira par
          dilapider son capital à cause de la variance naturelle du jeu.
        </p>

        <p className="text-text-light leading-relaxed mb-4">
          La variance est le concept clé ici. Au blackjack, même avec un jeu parfait, vous
          traverserez des séquences de 10, 15, voire 20 mains perdantes consécutives. Ce
          n&apos;est pas de la malchance — c&apos;est mathématiquement normal. Votre bankroll
          doit être suffisamment solide pour absorber ces fluctuations sans s&apos;épuiser.
        </p>

        {/* Section 2 */}
        <h2 id="fixer-budget" className="text-2xl font-bold mt-10 mb-4">
          Fixer son budget : la première étape
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Avant de placer la moindre mise, posez-vous une question honnête : combien pouvez-vous
          vous permettre de perdre sans que cela affecte votre qualité de vie ? La réponse à
          cette question est votre bankroll maximale. Il est essentiel de traiter cette somme
          comme une dépense de loisir, au même titre qu&apos;un abonnement sportif ou des sorties
          au restaurant.
        </p>

        <p className="text-text-light leading-relaxed mb-4">
          Voici une approche concrète en trois étapes :
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <p className="font-bold text-sm mb-1">Étape 1 : Calculez votre revenu disponible mensuel</p>
            <p className="text-text-light text-sm">
              Après toutes vos charges fixes (loyer, factures, alimentation, épargne),
              combien reste-t-il pour les loisirs ? Si la réponse est 400€, votre budget
              de jeu ne devrait pas dépasser 10 à 20% de ce montant, soit 40 à 80€ par mois.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <p className="font-bold text-sm mb-1">Étape 2 : Constituez votre bankroll de départ</p>
            <p className="text-text-light text-sm">
              Idéalement, accumulez 3 à 6 mois de budget de jeu avant de commencer. Avec 60€
              par mois, cela donne une bankroll de 180 à 360€. Cette réserve vous protège contre
              les mauvaises séries et vous permet de jouer sereinement.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <p className="font-bold text-sm mb-1">Étape 3 : Séparez complètement votre argent de jeu</p>
            <p className="text-text-light text-sm">
              Utilisez un compte ou un portefeuille électronique dédié. Ne mélangez jamais
              votre bankroll avec votre argent quotidien. Cette séparation physique est un
              garde-fou psychologique puissant, conforme aux principes du{" "}
              <Link href="/jeu-responsable" className="text-primary hover:text-accent underline">
                jeu responsable
              </Link>.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <h2 id="regle-pourcentage" className="text-2xl font-bold mt-10 mb-4">
          La règle du pourcentage par main
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          La règle la plus importante de la gestion de bankroll est de ne jamais miser plus
          de 1 à 2% de votre bankroll totale sur une seule main. Cette règle simple garantit
          que vous pouvez encaisser de longues séries de pertes sans vous ruiner.
        </p>

        <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 mb-6">
          <h3 className="font-bold text-center mb-4">Exemples concrets</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
            <div>
              <p className="font-bold text-lg text-primary">300€</p>
              <p className="text-text-light">Bankroll</p>
              <p className="font-medium mt-1">Mise : 3 à 6€</p>
            </div>
            <div>
              <p className="font-bold text-lg text-primary">500€</p>
              <p className="text-text-light">Bankroll</p>
              <p className="font-medium mt-1">Mise : 5 à 10€</p>
            </div>
            <div>
              <p className="font-bold text-lg text-primary">1 000€</p>
              <p className="text-text-light">Bankroll</p>
              <p className="font-medium mt-1">Mise : 10 à 20€</p>
            </div>
          </div>
        </div>

        <p className="text-text-light leading-relaxed mb-4">
          Pourquoi 1-2% et pas 5% ou 10% ? Les mathématiques sont impitoyables. Avec des mises
          à 5% de votre bankroll, une série de 15 pertes (événement qui arrive plus souvent
          qu&apos;on ne le croit) engloutit 54% de votre capital. Avec des mises à 2%, la même
          série ne coûte que 26%. Avec 1%, seulement 14%. La différence entre survie et
          élimination se joue dans ces pourcentages.
        </p>

        <LeadForm />

        {/* Section 4 */}
        <h2 id="limites-session" className="text-2xl font-bold mt-10 mb-4">
          Limites de session : stop-loss et objectifs de gain
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Au-delà de la mise par main, vous devez définir des limites pour chaque session de
          jeu. Ces limites transforment un loisir potentiellement dangereux en activité contrôlée.
        </p>

        <div className="space-y-4 mb-6">
          <div className="border-l-4 border-card-red pl-4">
            <p className="font-bold text-sm">Le stop-loss (limite de perte)</p>
            <p className="text-text-light text-sm mt-1">
              Fixez un montant maximum que vous acceptez de perdre en une session. La recommandation
              standard est 20% de votre bankroll. Avec une bankroll de 500€, votre stop-loss est
              de 100€. Quand ce seuil est atteint, vous arrêtez. Sans négociation, sans exception.
              C&apos;est la règle la plus difficile à respecter et la plus importante.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <p className="font-bold text-sm">L&apos;objectif de gain (win goal)</p>
            <p className="text-text-light text-sm mt-1">
              Fixez également un objectif de gain raisonnable, par exemple 30 à 50% de votre
              buy-in de session. Si vous commencez avec 100€ et atteignez 130-150€, envisagez
              de vous arrêter ou de sécuriser vos gains en ne jouant qu&apos;avec le profit.
              L&apos;objectif de gain protège vos profits contre le phénomène de « restitution »
              — la tendance à continuer jusqu&apos;à tout perdre.
            </p>
          </div>
          <div className="border-l-4 border-accent pl-4">
            <p className="font-bold text-sm">La limite de temps</p>
            <p className="text-text-light text-sm mt-1">
              Fixez une durée maximale de session (1 à 2 heures). La fatigue dégrade la qualité
              de vos décisions. Après 2 heures de jeu, même un bon joueur commence à faire des
              erreurs de stratégie de base. Les casinos en ligne offrent souvent des rappels de
              temps — activez-les.
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <h2 id="martingale-echec" className="text-2xl font-bold mt-10 mb-4">
          Pourquoi la Martingale échoue systématiquement
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          La Martingale est le système de mise le plus populaire et le plus dangereux. Le
          principe est simple : doublez votre mise après chaque perte pour récupérer toutes
          vos pertes précédentes avec un seul gain. En théorie, c&apos;est séduisant. En
          pratique, c&apos;est catastrophique.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-red text-white">
                <th className="px-3 py-2 text-left rounded-tl-lg">Main</th>
                <th className="px-3 py-2 text-right">Mise</th>
                <th className="px-3 py-2 text-right">Perte cumulée</th>
                <th className="px-3 py-2 text-right rounded-tr-lg">Profit si gain</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white"><td className="px-3 py-2">1</td><td className="px-3 py-2 text-right">10€</td><td className="px-3 py-2 text-right">10€</td><td className="px-3 py-2 text-right">10€</td></tr>
              <tr className="bg-gray-50"><td className="px-3 py-2">2</td><td className="px-3 py-2 text-right">20€</td><td className="px-3 py-2 text-right">30€</td><td className="px-3 py-2 text-right">10€</td></tr>
              <tr className="bg-white"><td className="px-3 py-2">3</td><td className="px-3 py-2 text-right">40€</td><td className="px-3 py-2 text-right">70€</td><td className="px-3 py-2 text-right">10€</td></tr>
              <tr className="bg-gray-50"><td className="px-3 py-2">4</td><td className="px-3 py-2 text-right">80€</td><td className="px-3 py-2 text-right">150€</td><td className="px-3 py-2 text-right">10€</td></tr>
              <tr className="bg-white"><td className="px-3 py-2">5</td><td className="px-3 py-2 text-right">160€</td><td className="px-3 py-2 text-right">310€</td><td className="px-3 py-2 text-right">10€</td></tr>
              <tr className="bg-gray-50"><td className="px-3 py-2">6</td><td className="px-3 py-2 text-right">320€</td><td className="px-3 py-2 text-right">630€</td><td className="px-3 py-2 text-right">10€</td></tr>
              <tr className="bg-white"><td className="px-3 py-2">7</td><td className="px-3 py-2 text-right">640€</td><td className="px-3 py-2 text-right">1 270€</td><td className="px-3 py-2 text-right">10€</td></tr>
              <tr className="bg-gray-50"><td className="px-3 py-2">8</td><td className="px-3 py-2 text-right font-bold text-card-red">1 280€</td><td className="px-3 py-2 text-right font-bold text-card-red">2 550€</td><td className="px-3 py-2 text-right">10€</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-text-light leading-relaxed mb-4">
          Après 8 pertes consécutives (un événement qui se produit environ une fois toutes les
          170 séquences), vous devez miser 1 280€ pour espérer récupérer... 10€ de profit. Le
          ratio risque/récompense est absurde. De plus, les tables ont des limites de mise
          maximale qui empêchent physiquement de poursuivre la progression. La Martingale
          ne « bat » pas les mathématiques — elle concentre le risque en événements rares mais
          dévastateurs.
        </p>

        {/* Section 6 */}
        <h2 id="flat-betting" className="text-2xl font-bold mt-10 mb-4">
          Le flat betting : la méthode qui fonctionne
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Le flat betting (mise constante) est la méthode recommandée pour la grande majorité
          des joueurs de blackjack en ligne. Le principe est élémentaire : vous misez le même
          montant à chaque main, quel que soit le résultat précédent. Pas de progression, pas
          de système, pas de calcul compliqué.
        </p>

        <p className="text-text-light leading-relaxed mb-4">
          Pourquoi le flat betting est-il supérieur aux systèmes progressifs ? Parce qu&apos;il
          minimise l&apos;impact de la variance sur votre bankroll. Avec une mise constante de
          10€, une série de 10 pertes consécutives vous coûte exactement 100€. Avec la
          Martingale, la même série vous coûte 10 230€. Le flat betting ne vous fera pas gagner
          plus (aucun système de mise ne change l&apos;avantage mathématique de la maison),
          mais il protège votre capital contre les fluctuations destructrices.
        </p>

        <p className="text-text-light leading-relaxed mb-4">
          Le seul ajustement acceptable est de recalculer votre mise quand votre bankroll change
          significativement. Si votre bankroll passe de 500€ à 700€ grâce à de bonnes sessions,
          vous pouvez augmenter votre mise de 10€ à 14€ (toujours 2%). Inversement, si elle
          descend à 350€, réduisez à 7€. C&apos;est une adaptation rationnelle, pas une
          progression émotionnelle.
        </p>

        {/* Section 7 */}
        <h2 id="critere-kelly" className="text-2xl font-bold mt-10 mb-4">
          Le critère de Kelly simplifié
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Le critère de Kelly est une formule mathématique développée par John L. Kelly Jr. en
          1956, utilisée à l&apos;origine dans les télécommunications puis adoptée par les
          joueurs professionnels et les investisseurs. Il détermine la fraction optimale de
          votre bankroll à miser pour maximiser la croissance à long terme.
        </p>

        <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 mb-6">
          <p className="font-bold text-center text-lg mb-2">Fraction Kelly = (bp - q) / b</p>
          <p className="text-text-light text-sm text-center mb-3">
            b = cote nette (1 au blackjack) | p = probabilité de gain | q = probabilité de perte (1-p)
          </p>
          <p className="text-text-light text-sm text-center">
            Au blackjack avec stratégie de base : p ≈ 0,495, q ≈ 0,505 → Kelly recommande de ne pas miser
            (avantage négatif). C&apos;est pourquoi la gestion de bankroll est défensive, pas agressive.
          </p>
        </div>

        <p className="text-text-light leading-relaxed mb-4">
          Le critère de Kelly confirme ce que nous savons intuitivement : au blackjack (où le
          casino a un léger avantage), aucune stratégie de mise ne peut transformer un jeu à
          espérance négative en jeu gagnant. Le Kelly nous dit de miser le minimum et de compter
          sur la stratégie de base pour réduire les pertes au maximum. C&apos;est exactement
          ce que fait le flat betting avec la règle des 1-2%.
        </p>

        {/* Section 8 */}
        <h2 id="discipline-emotionnelle" className="text-2xl font-bold mt-10 mb-4">
          La discipline émotionnelle : le vrai défi
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Toutes les règles de bankroll du monde ne servent à rien si vous ne les respectez
          pas. Et les respecter est bien plus difficile qu&apos;il n&apos;y paraît, car votre
          cerveau conspire contre vous. Deux pièges émotionnels guettent chaque joueur :
        </p>

        <ul className="list-disc pl-6 space-y-3 text-text-light mb-6">
          <li>
            <strong>La poursuite des pertes (chasing losses) :</strong> après une série de pertes,
            l&apos;instinct vous pousse à augmenter les mises pour « récupérer ». C&apos;est le
            piège le plus destructeur du jeu. Le sabot n&apos;a pas de mémoire — vos chances à
            la prochaine main sont exactement les mêmes, que vous ayez perdu 5 ou 50 mains
            d&apos;affilée.
          </li>
          <li>
            <strong>L&apos;excès de confiance en cas de gains :</strong> après une bonne série,
            vous vous sentez invincible et augmentez les mises. C&apos;est aussi dangereux que
            la poursuite des pertes, car la variance finira par se corriger et vos mises
            surdimensionnées amplifieront la chute.
          </li>
        </ul>

        <p className="text-text-light leading-relaxed mb-4">
          La solution est mécanique : écrivez vos règles avant de jouer et respectez-les sans
          exception. Montant par main, stop-loss, objectif de gain, durée de session. Traitez
          ces règles comme des lois, pas comme des suggestions. Quand l&apos;émotion monte
          (frustration, excitation, envie de « se refaire »), c&apos;est le signal qu&apos;il
          faut arrêter, pas continuer.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-8">
          <h3 className="font-bold text-lg mb-3">Les 5 règles d&apos;or de la bankroll</h3>
          <ul className="space-y-2 text-text-light text-sm">
            <li>1. Ne jouez qu&apos;avec de l&apos;argent que vous pouvez perdre</li>
            <li>2. Misez 1-2% de votre bankroll par main, jamais plus</li>
            <li>3. Fixez un stop-loss de 20% par session et respectez-le</li>
            <li>4. Aucun système de progression ne bat les mathématiques</li>
            <li>
              5. Quand l&apos;émotion prend le dessus, arrêtez — consultez nos ressources de{" "}
              <Link href="/jeu-responsable" className="text-primary hover:text-accent underline">
                jeu responsable
              </Link>
            </li>
          </ul>
        </div>

        <FAQSchema items={faq} />

        <LeadForm variant="banner" />
      </article>
    </div>
  );
}
