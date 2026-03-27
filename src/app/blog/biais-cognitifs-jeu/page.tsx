import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Les Biais Cognitifs au Blackjack : Les Pièges de Votre Cerveau",
  description:
    "Identifiez les biais cognitifs qui sabotent votre jeu au blackjack : erreur du joueur, biais de confirmation, effet Dunning-Kruger. Apprenez à les neutraliser.",
  alternates: { canonical: "/blog/biais-cognitifs-jeu" },
};

const faqs = [
  {
    question: "Qu'est-ce qu'un biais cognitif au blackjack ?",
    answer:
      "Un biais cognitif est un raccourci mental systématique qui déforme notre jugement et nos décisions. Au blackjack, ces biais poussent les joueurs à s'écarter de la stratégie optimale en se fiant à des intuitions erronées plutôt qu'aux mathématiques. Les plus courants sont l'erreur du joueur, le biais de confirmation et l'effet de récence.",
  },
  {
    question: "Comment savoir si je suis victime d'un biais cognitif ?",
    answer:
      "Les signes révélateurs incluent : modifier votre stratégie après une série de résultats similaires, chercher des « patterns » dans les cartes distribuées, ignorer les pertes tout en mettant en avant les gains, ou penser que vous êtes meilleur que la moyenne des joueurs sans données pour le prouver. Tenir un journal de jeu objectif est le meilleur moyen de détecter ces biais.",
  },
  {
    question: "L'erreur du joueur est-elle vraiment si fréquente ?",
    answer:
      "Extrêmement fréquente. Des études en psychologie expérimentale montrent que même des personnes informées de l'erreur du joueur y succombent. Notre cerveau est câblé pour détecter des patterns et chercher l'équilibre, même dans des séquences parfaitement aléatoires. C'est pourquoi une vigilance constante est nécessaire.",
  },
  {
    question: "Peut-on éliminer complètement les biais cognitifs ?",
    answer:
      "Non, les biais cognitifs sont inhérents au fonctionnement du cerveau humain. Cependant, on peut apprendre à les reconnaître et à mettre en place des garde-fous : suivre strictement la stratégie de base (qui élimine le besoin de « juger » chaque situation), fixer des règles de mises pré-définies, et prendre des pauses régulières pour évaluer objectivement son jeu.",
  },
];

const tocItems = [
  { id: "introduction-biais", label: "Les biais cognitifs : ennemis invisibles" },
  { id: "erreur-joueur", label: "L'erreur du joueur (gambler's fallacy)" },
  { id: "main-chaude", label: "L'illusion de la main chaude" },
  { id: "biais-confirmation", label: "Le biais de confirmation" },
  { id: "cout-irrecuperable", label: "Le piège du coût irrécupérable" },
  { id: "ancrage", label: "Le biais d'ancrage" },
  { id: "heuristique-disponibilite", label: "L'heuristique de disponibilité" },
  { id: "dunning-kruger", label: "L'effet Dunning-Kruger" },
  { id: "neutraliser-biais", label: "Comment neutraliser ces biais" },
  { id: "faq", label: "Questions fréquentes" },
];

export default function BiaisCognitifsJeu() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Les Biais Cognitifs au Blackjack" },
        ]}
      />

      <div className="flex items-center gap-3 mb-4">
        <span className="bg-accent/10 text-accent-dark text-xs font-medium px-2 py-1 rounded">
          Psychologie du jeu
        </span>
        <time className="text-xs text-text-light">22 février 2026</time>
        <span className="text-xs text-text-light">• 11 min de lecture</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Les Biais Cognitifs au Blackjack : Les Pièges de Votre Cerveau
      </h1>

      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
        <Image
          src="/images/blog/biais-cognitifs.jpg"
          alt="Illustration conceptuelle d'un cerveau face à des cartes de blackjack représentant les biais cognitifs"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </div>

      <p className="text-lg text-text-light mb-8">
        Votre cerveau est une machine extraordinaire — mais au blackjack, il peut devenir votre pire ennemi. Les biais cognitifs, ces raccourcis mentaux qui nous aident dans la vie quotidienne, se retournent contre nous à la table de jeu. Ils nous font voir des patterns inexistants, ignorer les statistiques et prendre des décisions irrationnelles en toute confiance. Comprendre ces pièges est la première étape pour les déjouer et appliquer une{" "}
        <Link href="/strategie-blackjack" className="text-accent hover:underline">stratégie optimale</Link>.
      </p>

      <TableOfContents items={tocItems} />

      <section id="introduction-biais" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Les biais cognitifs : vos ennemis invisibles</h2>
        <p className="mb-4">
          Les biais cognitifs ont été identifiés et catalogués par les psychologues Daniel Kahneman et Amos Tversky dans les années 1970. Leurs travaux, récompensés par un prix Nobel d&apos;économie en 2002, ont révélé que le cerveau humain utilise des heuristiques — des raccourcis mentaux — pour prendre des décisions rapidement. Ces raccourcis fonctionnent bien dans la plupart des situations quotidiennes, mais ils échouent systématiquement face au hasard et aux probabilités.
        </p>
        <p className="mb-4">
          Au blackjack, les biais cognitifs sont particulièrement dangereux car ils agissent de manière inconsciente. Le joueur qui en est victime est sincèrement convaincu de prendre des décisions rationnelles. Il ne sait pas que son cerveau le trompe. C&apos;est pourquoi la connaissance théorique de ces biais est nécessaire mais insuffisante : il faut aussi mettre en place des systèmes concrets pour les contrer.
        </p>
      </section>

      <section id="erreur-joueur" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">L&apos;erreur du joueur (gambler&apos;s fallacy)</h2>
        <p className="mb-4">
          L&apos;erreur du joueur est le biais le plus célèbre et le plus destructeur au casino. Il consiste à croire que les événements aléatoires passés influencent les événements futurs. « J&apos;ai perdu sept mains d&apos;affilée, il est temps que ça tourne » — cette pensée est mathématiquement erronée.
        </p>
        <p className="mb-4">
          L&apos;exemple historique le plus frappant s&apos;est produit au Casino de Monte-Carlo le 18 août 1913. La bille de la roulette est tombée sur le noir 26 fois consécutives. À mesure que la série s&apos;allongeait, les joueurs ont misé des sommes de plus en plus importantes sur le rouge, convaincus qu&apos;il « devait » sortir. Ils ont perdu des millions. La roulette n&apos;a pas de mémoire, et le sabot de blackjack non plus (avec un mélangeur continu).
        </p>
        <p className="mb-4">
          Au blackjack, ce biais pousse les joueurs à augmenter leurs mises après des pertes (la martingale) ou à modifier leur stratégie en fonction des résultats récents. Ces deux comportements augmentent l&apos;avantage de la maison et le risque de pertes importantes.
        </p>
      </section>

      <section id="main-chaude" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">L&apos;illusion de la main chaude (hot hand fallacy)</h2>
        <p className="mb-4">
          L&apos;illusion de la main chaude est le miroir de l&apos;erreur du joueur. Elle consiste à croire qu&apos;une série de succès va se poursuivre parce que vous êtes « dans une bonne phase ». Ce biais tire son nom du basketball, où les joueurs et spectateurs croient qu&apos;un joueur qui a réussi plusieurs tirs consécutifs a plus de chances de réussir le suivant.
        </p>
        <p className="mb-4">
          Au blackjack, la main chaude se manifeste quand un joueur gagnant augmente ses mises en pensant être « en veine ». Il interprète une séquence favorable — qui est parfaitement explicable par la variance normale — comme le signe d&apos;une tendance qui va se poursuivre. Le résultat est prévisible : quand la série gagnante s&apos;interrompt naturellement, les pertes sont amplifiées par les mises surélevées.
        </p>
        <p className="mb-4">
          La réalité est que les séquences gagnantes et perdantes sont des artefacts statistiques normaux. Dans une suite de lancers à pile ou face, des séries de 5, 6 ou 7 résultats identiques apparaissent régulièrement — sans qu&apos;aucune « force » ne les provoque.
        </p>
      </section>

      <LeadForm />

      <section id="biais-confirmation" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Le biais de confirmation</h2>
        <p className="mb-4">
          Le biais de confirmation est notre tendance à chercher, interpréter et mémoriser les informations qui confirment nos croyances préexistantes, tout en ignorant celles qui les contredisent. Au blackjack, ce biais est omniprésent.
        </p>
        <p className="mb-4">
          Un joueur qui croit que la place numéro 3 est la « meilleure place » à la table retiendra toutes les sessions où il a gagné à cette place et oubliera celles où il a perdu. Un joueur convaincu qu&apos;il ne faut « jamais tirer sur un 12 » se souviendra de chaque fois où il a busté en tirant et oubliera les fois où il a amélioré sa main. Ce tri sélectif des souvenirs renforce des croyances fausses et cristallise de mauvaises habitudes.
        </p>
        <p className="mb-4">
          Le remède au biais de confirmation est la tenue de statistiques objectives. Un journal de jeu détaillé, avec les résultats réels de chaque décision, ne ment pas. Il peut confronter vos croyances à la réalité des données — une expérience parfois inconfortable mais toujours bénéfique.
        </p>
      </section>

      <section id="cout-irrecuperable" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Le piège du coût irrécupérable (sunk cost fallacy)</h2>
        <p className="mb-4">
          Le biais du coût irrécupérable vous pousse à continuer un comportement à cause de l&apos;investissement déjà réalisé, plutôt qu&apos;en fonction des perspectives futures. « J&apos;ai déjà perdu 300 €, je ne peux pas m&apos;arrêter maintenant » — cette pensée est l&apos;incarnation même de ce biais.
        </p>
        <p className="mb-4">
          Au blackjack, ce biais prolonge les sessions perdantes bien au-delà du raisonnable. Le joueur qui a perdu sa limite s&apos;autorise « encore quelques mains » pour tenter de récupérer. Or, les 300 € perdus sont un coût irrécupérable — ils ne doivent en aucun cas influencer votre décision de continuer ou d&apos;arrêter. La seule question pertinente est : « Si j&apos;étais frais et reposé, choisirais-je de commencer une nouvelle session dans mon état mental actuel ? » Si la réponse est non, arrêtez.
        </p>
        <p className="mb-4">
          Pour un cadre complet de pratique protectrice, consultez notre page sur le{" "}
          <Link href="/jeu-responsable" className="text-accent hover:underline">jeu responsable</Link>.
        </p>
      </section>

      <section id="ancrage" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Le biais d&apos;ancrage</h2>
        <p className="mb-4">
          Le biais d&apos;ancrage est notre tendance à nous accrocher à la première information reçue pour prendre des décisions ultérieures. Au blackjack, l&apos;ancrage se manifeste de multiples façons.
        </p>
        <p className="mb-4">
          Si votre première session se termine avec un gain de 500 €, ce montant devient votre « ancre ». Les sessions suivantes seront inconsciemment évaluées par rapport à ce référentiel. Un gain de 100 € vous semblera décevant, même s&apos;il est parfaitement conforme aux attentes mathématiques. De même, si vous commencez une session avec des mises de 25 € et passez à 10 €, les petites mises vous sembleront « pas sérieuses » — un jugement irrationnel basé sur l&apos;ancrage.
        </p>
        <p className="mb-4">
          Le remède est de toujours revenir aux fondamentaux mathématiques. Votre mise devrait être déterminée par votre bankroll et les probabilités, jamais par un montant de référence arbitraire ancré dans votre mémoire.
        </p>
      </section>

      <section id="heuristique-disponibilite" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">L&apos;heuristique de disponibilité</h2>
        <p className="mb-4">
          L&apos;heuristique de disponibilité nous pousse à juger la probabilité d&apos;un événement en fonction de la facilité avec laquelle des exemples nous viennent à l&apos;esprit. Les événements récents, spectaculaires ou émotionnellement marquants sont surévalués.
        </p>
        <p className="mb-4">
          Un joueur qui a busté de manière spectaculaire sur un 12 lors de sa dernière session surévaluera la probabilité de buster sur 12 lors de la session suivante. En réalité, la probabilité reste exactement la même (31 %). Mais le souvenir vivace du bust crée une impression de fréquence supérieure à la réalité, poussant le joueur à rester au lieu de tirer.
        </p>
        <p className="mb-4">
          De même, le joueur qui se souvient d&apos;une victoire spectaculaire après un split de 8 contre un As (situation statistiquement défavorable) pourra être tenté de dévier de la stratégie dans des situations similaires, influencé par un souvenir saillant mais non représentatif.
        </p>
      </section>

      <section id="dunning-kruger" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">L&apos;effet Dunning-Kruger appliqué au blackjack</h2>
        <p className="mb-4">
          L&apos;effet Dunning-Kruger est un phénomène par lequel les personnes peu compétentes dans un domaine surestiment leurs compétences, tandis que les experts tendent à les sous-estimer. Au blackjack, cet effet est flagrant.
        </p>
        <p className="mb-4">
          Le joueur débutant qui a gagné lors de ses premières sessions pense avoir « compris le truc ». Il ne réalise pas que ses gains sont probablement dus à la variance favorable et non à sa compétence. Il refuse d&apos;étudier la stratégie de base car il pense déjà savoir jouer. Ce joueur est au sommet de ce que Dunning et Kruger appellent la « montagne de l&apos;ignorance ».
        </p>
        <p className="mb-4">
          À l&apos;inverse, le joueur expérimenté qui a étudié les probabilités, la stratégie de base et la gestion de bankroll est davantage conscient de la complexité du jeu et des limites de ses connaissances. Il sait ce qu&apos;il ne sait pas, et cette humilité le rend paradoxalement plus performant.
        </p>
        <p className="mb-4">
          L&apos;antidote à l&apos;effet Dunning-Kruger est l&apos;éducation continue et l&apos;évaluation objective. Testez régulièrement votre connaissance de la{" "}
          <Link href="/strategie-blackjack" className="text-accent hover:underline">stratégie de base</Link>{" "}
          et analysez honnêtement vos résultats sur le long terme.
        </p>
      </section>

      <section id="neutraliser-biais" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Comment neutraliser ces biais au quotidien</h2>
        <p className="mb-4">
          La première étape est la <strong>prise de conscience</strong>. Le simple fait de connaître ces biais réduit leur influence. Relisez régulièrement cette liste avant vos sessions de jeu pour garder ces pièges à l&apos;esprit.
        </p>
        <p className="mb-4">
          La deuxième étape est la <strong>systématisation</strong>. Remplacez le jugement humain par des règles pré-définies chaque fois que possible. Suivez la stratégie de base sans déviation. Fixez vos mises selon une formule mathématique, pas selon votre « feeling ». Définissez vos limites avant la session, pas pendant.
        </p>
        <p className="mb-4">
          La troisième étape est la <strong>vérification externe</strong>. Tenez un journal de jeu avec des données objectives. Discutez de vos décisions avec d&apos;autres joueurs informés. Utilisez des simulateurs de blackjack pour tester vos intuitions contre les mathématiques. Votre cerveau vous mentira — les chiffres, jamais.
        </p>
      </section>

      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
        <FAQSchema items={faqs} />
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-surface rounded-lg p-5">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-text-light text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <LeadForm variant="banner" />
    </div>
  );
}
