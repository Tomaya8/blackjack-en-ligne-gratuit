import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import BlogFilter from "@/components/BlogFilter";

export const metadata: Metadata = {
  title: "Blog Blackjack : Articles, Stratégies et Conseils d'Experts",
  description:
    "Retrouvez nos articles experts sur le blackjack : stratégies, guides débutants, probabilités, psychologie du jeu et actualités du blackjack en ligne.",
  alternates: { canonical: "/blog" },
};

const articles = [
  // Stratégies
  {
    slug: "comment-gagner-au-blackjack",
    title: "Comment gagner au blackjack : mythe ou réalité ?",
    excerpt: "Peut-on réellement gagner au blackjack sur le long terme ? Analyse mathématique, stratégies et vérités sur les chances du joueur face à la maison.",
    category: "Stratégies",
    date: "2026-03-20",
    image: "/images/blog/gagner-blackjack.jpg",
  },
  {
    slug: "quand-doubler-blackjack",
    title: "Quand doubler au blackjack : le guide stratégique complet",
    excerpt: "Maîtrisez l'art du doublement au blackjack. Quand doubler sur les mains dures, souples, et les erreurs à éviter pour maximiser vos gains.",
    category: "Stratégies",
    date: "2026-03-18",
    image: "/images/blog/quand-doubler.jpg",
  },
  {
    slug: "quand-separer-paires-blackjack",
    title: "Quand séparer les paires au blackjack : guide complet",
    excerpt: "Analyse détaillée de chaque paire au blackjack : quand séparer, quand garder, et pourquoi. Toujours les As et les 8, jamais les 10 et les 5.",
    category: "Stratégies",
    date: "2026-03-16",
    image: "/images/blog/separer-paires.jpg",
  },
  {
    slug: "comptage-cartes-guide",
    title: "Le comptage de cartes au blackjack : guide complet et honnête",
    excerpt: "Tout comprendre sur le comptage de cartes : système Hi-Lo, true count, limites réelles et pourquoi ça ne fonctionne pas en ligne.",
    category: "Stratégies",
    date: "2026-03-12",
    image: "/images/blog/comptage-cartes.jpg",
  },
  {
    slug: "gestion-bankroll-blackjack",
    title: "Gestion de bankroll au blackjack : protégez votre capital",
    excerpt: "Les règles d'or de la gestion de bankroll : budget, mise par main, limites de session, et pourquoi la Martingale ne fonctionne pas.",
    category: "Stratégies",
    date: "2026-03-08",
    image: "/images/blog/gestion-bankroll.jpg",
  },
  // Guides débutants
  {
    slug: "erreurs-frequentes-blackjack",
    title: "Les 10 erreurs les plus fréquentes au blackjack",
    excerpt: "De la mauvaise gestion de bankroll au refus de séparer les 8, découvrez les erreurs qui coûtent le plus cher aux joueurs de blackjack.",
    category: "Guides débutants",
    date: "2026-03-15",
    image: "/images/blog/erreurs-blackjack.jpg",
  },
  {
    slug: "debuter-blackjack-en-ligne",
    title: "Débuter au blackjack en ligne : guide pas à pas",
    excerpt: "Tout ce qu'un nouveau joueur doit savoir pour commencer le blackjack en ligne : choix de plateforme, premiers pas et conseils essentiels.",
    category: "Guides débutants",
    date: "2026-03-14",
    image: "/images/blog/debuter-blackjack.jpg",
  },
  {
    slug: "glossaire-termes-blackjack",
    title: "Glossaire du blackjack : tous les termes à connaître",
    excerpt: "Dictionnaire complet du blackjack : de « Hit » à « Surrender », tous les termes expliqués clairement pour ne plus jamais être perdu.",
    category: "Guides débutants",
    date: "2026-03-11",
    image: "/images/blog/glossaire-blackjack.jpg",
  },
  {
    slug: "blackjack-mobile-guide",
    title: "Blackjack sur mobile : guide complet pour smartphone",
    excerpt: "Jouez au blackjack sur votre smartphone : apps vs navigateur, avantages du mobile, conseils d'interface tactile et meilleures pratiques.",
    category: "Guides débutants",
    date: "2026-03-07",
    image: "/images/blog/blackjack-mobile.jpg",
  },
  {
    slug: "choisir-table-blackjack",
    title: "Comment choisir sa table de blackjack : les critères essentiels",
    excerpt: "3:2 vs 6:5, S17 vs H17, nombre de jeux de cartes... Apprenez à repérer les tables les plus favorables au joueur.",
    category: "Guides débutants",
    date: "2026-03-05",
    image: "/images/blog/choisir-table.jpg",
  },
  // Mathématiques
  {
    slug: "blackjack-vs-autres-jeux",
    title: "Blackjack vs autres jeux de casino : pourquoi le blackjack est unique",
    excerpt: "Comparaison détaillée du blackjack avec la roulette, le poker, le baccarat et les machines à sous. Avantage de la maison, stratégie et probabilités.",
    category: "Mathématiques",
    date: "2026-03-10",
    image: "/images/blog/blackjack-vs-casino.jpg",
  },
  {
    slug: "probabilites-blackjack-guide",
    title: "Les probabilités au blackjack : comprendre les maths du jeu",
    excerpt: "Probabilité de recevoir un blackjack, de sauter à chaque total, probabilités du croupier... Les chiffres clés expliqués simplement.",
    category: "Mathématiques",
    date: "2026-03-09",
    image: "/images/blog/probabilites.jpg",
  },
  {
    slug: "avantage-maison-explique",
    title: "L'avantage de la maison au blackjack : tout comprendre",
    excerpt: "Comment l'avantage de la maison est calculé, comment les règles l'influencent, et comment la stratégie de base le réduit à 0,5%.",
    category: "Mathématiques",
    date: "2026-03-06",
    image: "/images/blog/avantage-maison.jpg",
  },
  {
    slug: "variance-blackjack",
    title: "La variance au blackjack : comprendre les fluctuations",
    excerpt: "Pourquoi vous pouvez perdre même en jouant parfaitement, et gagner en jouant mal. La variance expliquée avec des exemples concrets.",
    category: "Mathématiques",
    date: "2026-03-03",
    image: "/images/blog/variance.jpg",
  },
  {
    slug: "rtp-taux-retour-joueur",
    title: "Le RTP au blackjack : taux de retour au joueur expliqué",
    excerpt: "Qu'est-ce que le RTP (Return to Player), pourquoi le blackjack affiche 99,5%, et comment cela se traduit concrètement pour votre portefeuille.",
    category: "Mathématiques",
    date: "2026-03-01",
    image: "/images/blog/rtp-retour.jpg",
  },
  // Psychologie du jeu
  {
    slug: "psychologie-joueur-blackjack",
    title: "La psychologie du joueur de blackjack : comprendre votre mental",
    excerpt: "Le mental est aussi important que la stratégie. Découvrez comment votre psychologie influence chaque décision à la table.",
    category: "Psychologie du jeu",
    date: "2026-03-04",
    image: "/images/blog/psychologie-joueur.jpg",
  },
  {
    slug: "gerer-emotions-blackjack",
    title: "Gérer ses émotions au blackjack : clé de la réussite",
    excerpt: "Excitation, frustration, cupidité, peur... Apprenez à maîtriser vos émotions pour prendre de meilleures décisions à chaque main.",
    category: "Psychologie du jeu",
    date: "2026-02-28",
    image: "/images/blog/gerer-emotions.jpg",
  },
  {
    slug: "discipline-mentale-blackjack",
    title: "La discipline mentale au blackjack : comment rester rigoureux",
    excerpt: "Comment maintenir la discipline face aux tentations : respecter la stratégie, les limites et les routines de jeu.",
    category: "Psychologie du jeu",
    date: "2026-02-25",
    image: "/images/blog/discipline-mentale.jpg",
  },
  {
    slug: "biais-cognitifs-jeu",
    title: "Les biais cognitifs au blackjack : les pièges de votre cerveau",
    excerpt: "Erreur du joueur, biais de confirmation, coût irrécupérable... Identifiez les biais cognitifs qui sabotent vos décisions au blackjack.",
    category: "Psychologie du jeu",
    date: "2026-02-22",
    image: "/images/blog/biais-cognitifs.jpg",
  },
  {
    slug: "tilt-blackjack-eviter",
    title: "Le tilt au blackjack : comment l'identifier et l'éviter",
    excerpt: "Le tilt, emprunté au poker, peut ruiner vos sessions de blackjack. Apprenez à le reconnaître et à vous en protéger.",
    category: "Psychologie du jeu",
    date: "2026-02-19",
    image: "/images/blog/tilt-eviter.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Blog" }]} />

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Blog Blackjack : Stratégies, guides et conseils d&apos;experts
      </h1>
      <p className="text-lg text-text-light mb-8 max-w-2xl">
        Articles éducatifs sur le blackjack : stratégies avancées, probabilités,
        psychologie du jeu et guides pour tous les niveaux.
      </p>

      <BlogFilter articles={articles} />

      <LeadForm variant="banner" title="Recevez nos meilleurs articles par email" description="Stratégies, astuces et analyses directement dans votre boîte mail" />
    </div>
  );
}
