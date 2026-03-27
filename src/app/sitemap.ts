import type { MetadataRoute } from "next";

const BASE_URL = "https://blackjack-en-ligne-gratuit.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    // Pillar pages
    { url: "/blackjack-en-ligne", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/blackjack-gratuit", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/regles-blackjack", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/strategie-blackjack", priority: 0.9, changeFrequency: "monthly" as const },
    // Variants
    { url: "/blackjack-europeen", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blackjack-americain", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blackjack-live", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blackjack-multi-mains", priority: 0.8, changeFrequency: "monthly" as const },
    // Geographic
    { url: "/blackjack-france", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blackjack-belgique", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blackjack-suisse", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blackjack-quebec", priority: 0.8, changeFrequency: "monthly" as const },
    // Blog
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    // Stratégies
    { url: "/blog/comment-gagner-au-blackjack", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/quand-doubler-blackjack", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/quand-separer-paires-blackjack", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/comptage-cartes-guide", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/gestion-bankroll-blackjack", priority: 0.7, changeFrequency: "monthly" as const },
    // Guides débutants
    { url: "/blog/erreurs-frequentes-blackjack", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/debuter-blackjack-en-ligne", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/glossaire-termes-blackjack", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/blackjack-mobile-guide", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/choisir-table-blackjack", priority: 0.7, changeFrequency: "monthly" as const },
    // Mathématiques
    { url: "/blog/blackjack-vs-autres-jeux", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/probabilites-blackjack-guide", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/avantage-maison-explique", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/variance-blackjack", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/rtp-taux-retour-joueur", priority: 0.7, changeFrequency: "monthly" as const },
    // Psychologie du jeu
    { url: "/blog/psychologie-joueur-blackjack", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/gerer-emotions-blackjack", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/discipline-mentale-blackjack", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/biais-cognitifs-jeu", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/tilt-blackjack-eviter", priority: 0.7, changeFrequency: "monthly" as const },
    // Trust
    { url: "/a-propos", priority: 0.5, changeFrequency: "yearly" as const },
    { url: "/jeu-responsable", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
