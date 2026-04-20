export interface Casino {
  slug: string;
  name: string;
  bonus: string;
  bonusAmount: number;
  wagering: number;
  rating: number;
  blackjackTables: number;
  liveBlackjackTables: number;
  blackjackVariants: string[];
  features: string[];
  affiliateUrl: string;
  license: string;
  founded: number;
  minDeposit: string;
  withdrawalTime: string;
  providers: string[];
  paymentMethods: string[];
  pros: string[];
  cons: string[];
  summary: string;
  fullReview: string;
  metaTitle: string;
  metaDescription: string;
}

export const casinos: Casino[] = [
  {
    slug: "casinostars",
    name: "CasinoStars",
    bonus: "500€ + 200 tours gratuits",
    bonusAmount: 500,
    wagering: 40,
    rating: 4.7,
    blackjackTables: 45,
    liveBlackjackTables: 18,
    blackjackVariants: ["Blackjack classique", "Blackjack Switch", "Infinite Blackjack", "Power Blackjack", "Blackjack Party"],
    features: ["18 tables blackjack live FR", "+5000 jeux", "Support 24/7", "Crypto"],
    affiliateUrl: "https://record.mematoaffiliates.com/_sfCEU0EZF3-YnVqGHN08XWNd7ZgqdRLk/1/",
    license: "Curaçao",
    founded: 2022,
    minDeposit: "20€",
    withdrawalTime: "24-48h",
    providers: ["Evolution Gaming", "Pragmatic Play Live", "NetEnt", "Play'n GO"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "Ethereum", "USDT"],
    pros: [
      "18 tables de blackjack en direct avec croupiers francophones",
      "Plusieurs variantes de blackjack dont Infinite et Power Blackjack",
      "Tables accessibles dès 0,50€ jusqu'aux tables VIP à 5 000€",
      "Support francophone 24/7 pour les questions techniques live",
    ],
    cons: [
      "Contribution du blackjack à 10% au wagering du bonus",
      "Pas de licence européenne (ANJ ou MGA)",
      "Wagering x40 sur le bonus de bienvenue",
    ],
    summary:
      "CasinoStars propose 45 tables de blackjack dont 18 animées en direct par Evolution Gaming avec croupiers francophones. Excellente option pour les joueurs qui veulent combiner grand choix de variantes et support FR.",
    fullReview: `CasinoStars est l'un des casinos les plus riches en tables de blackjack pour les joueurs francophones. Sur 45 tables disponibles, 18 sont animées en direct par Evolution Gaming, avec des croupiers francophones disponibles à différentes heures de la journée. Les variantes classiques (européen, américain) côtoient des formats innovants comme Infinite Blackjack, Power Blackjack, Blackjack Switch et Blackjack Party.

Le bonus de bienvenue de 100% jusqu'à 500€ + 200 tours gratuits est intéressant mais attention à la contribution : comme sur la plupart des plateformes, les jeux de blackjack contribuent à seulement 10% au wagering, contre 100% pour les machines à sous. Pour un bonus de 500€ avec wagering x40, il faudrait miser 200 000€ au blackjack pour débloquer les gains — peu réaliste. Les chasseurs de bonus passeront par les slots.

Au-delà du bonus, l'expérience blackjack est solide : les mises vont de 0,50€ à 5 000€ selon les tables, la qualité de diffusion HD est excellente et les règles sont clairement affichées (payout 3:2 sur les tables classiques). Le casino opère sous licence Curaçao — pas de recours européen en cas de litige, mais l'équipement live est celui des plus grands opérateurs (Evolution Gaming).`,
    metaTitle: "CasinoStars Blackjack Avis 2026 : 45 Tables, 18 Live FR",
    metaDescription:
      "Avis CasinoStars pour le blackjack : 45 tables dont 18 live FR avec Evolution Gaming, variantes Infinite et Power, bonus 500€. Notre test détaillé.",
  },
  {
    slug: "casino-orca",
    name: "Casino Orca",
    bonus: "500€ + 100 tours gratuits",
    bonusAmount: 500,
    wagering: 35,
    rating: 4.6,
    blackjackTables: 38,
    liveBlackjackTables: 14,
    blackjackVariants: ["Blackjack européen", "Blackjack américain", "Speed Blackjack", "Infinite Blackjack"],
    features: ["Retraits 24h", "14 tables live", "Wagering x35", "Crypto"],
    affiliateUrl: "https://record.mematoaffiliates.com/_sfCEU0EZF3_eD2ODgvck4mNd7ZgqdRLk/1/",
    license: "Curaçao",
    founded: 2022,
    minDeposit: "20€",
    withdrawalTime: "24h",
    providers: ["Evolution Gaming", "Pragmatic Play Live", "Yggdrasil", "NetEnt"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "Ethereum", "Litecoin", "USDT"],
    pros: [
      "Retraits en 24h tenus lors de notre test — idéal pour encaisser les gains blackjack",
      "14 tables de blackjack en direct avec plusieurs variantes",
      "Wagering x35 plus favorable que la moyenne",
      "Speed Blackjack disponible pour des mains plus rapides",
    ],
    cons: [
      "Moins de tables live que certains concurrents premium",
      "Licence Curaçao uniquement",
      "Vérification KYC obligatoire avant le premier retrait",
    ],
    summary:
      "Casino Orca mise sur la vitesse : retraits en 24h tenus dans notre test et tables Speed Blackjack pour accélérer les mains. Wagering x35 plus favorable que la moyenne.",
    fullReview: `Casino Orca se distingue des autres casinos francophones par la vitesse de ses paiements : la promesse des retraits en 24 heures a été tenue dans notre test de 18 jours, avec des paiements crypto confirmés en 4 à 8 heures. Pour les joueurs de blackjack qui encaissent leurs gains régulièrement, c'est un avantage concret.

La sélection blackjack compte 38 tables dont 14 animées en direct par Evolution Gaming. Les variantes disponibles couvrent le blackjack européen, américain, Speed Blackjack (mains accélérées) et Infinite Blackjack (nombre illimité de joueurs par table). L'interface live est fluide, la qualité vidéo HD, et plusieurs tables francophones fonctionnent en soirée.

Le bonus de bienvenue de 100% jusqu'à 500€ + 100 tours avec wagering x35 est plus favorable que la moyenne (nombreux concurrents à x40), mais le blackjack contribue à 10% seulement au wagering — comme sur toutes les plateformes. Pour maximiser la valeur du bonus, mieux vaut le déclencher sur les machines à sous puis jouer au blackjack avec l'argent libre.`,
    metaTitle: "Casino Orca Blackjack Avis 2026 : Retraits 24h, 14 Tables Live",
    metaDescription:
      "Avis Casino Orca pour le blackjack : 38 tables dont 14 live, retraits en 24h confirmés, Speed Blackjack et Infinite Blackjack. Notre test complet.",
  },
  {
    slug: "art-casino",
    name: "Art Casino",
    bonus: "1 500€ + 150 tours gratuits",
    bonusAmount: 1500,
    wagering: 40,
    rating: 4.5,
    blackjackTables: 42,
    liveBlackjackTables: 16,
    blackjackVariants: ["Blackjack classique", "Blackjack VIP", "Salon Privé", "Free Bet Blackjack", "Infinite Blackjack"],
    features: ["Tables VIP blackjack", "Bonus 1500€", "Salon Privé", "VIP 6 niveaux"],
    affiliateUrl: "https://record.mematoaffiliates.com/_sfCEU0EZF38eR0indqtVW2Nd7ZgqdRLk/1/",
    license: "Curaçao",
    founded: 2023,
    minDeposit: "20€",
    withdrawalTime: "24-48h",
    providers: ["Evolution Gaming", "Pragmatic Play Live", "NetEnt", "BGaming"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "Ethereum", "USDT", "MiFinity"],
    pros: [
      "Tables VIP blackjack accessibles dès 50€ de mise",
      "Salon Privé sur invitation pour les high rollers",
      "Plafonds de retrait hebdomadaires élevés (7 500€)",
      "Programme VIP à 6 niveaux avec manager personnel",
    ],
    cons: [
      "Conditions de mise x40 sur le bonus",
      "Pas de licence européenne",
      "Dépôt minimum de 20€",
    ],
    summary:
      "Art Casino propose une expérience blackjack premium avec tables VIP Evolution, Salon Privé sur invitation et plafonds de retrait hebdomadaires élevés à 7 500€.",
    fullReview: `Art Casino est un casino récent (lancement 2023) positionné sur le segment premium. Pour les joueurs de blackjack, la plateforme propose 42 tables dont 16 animées en direct par Evolution Gaming, avec un accent particulier sur les tables VIP accessibles dès 50€ de mise par main. Les Salon Privé, réservés sur invitation aux high rollers, offrent une expérience plus intime avec des limites relevées.

Le bonus de bienvenue de 100% jusqu'à 1 500€ est l'un des plus généreux du secteur, mais les conditions de mise à x40 rendent sa conversion difficile — surtout pour les joueurs de blackjack (contribution 10%). Le programme VIP à 6 niveaux est plus intéressant sur le long terme : cashback, manager personnel, retraits prioritaires et invitations à des événements.

Les plafonds de retrait hebdomadaires standards sont de 7 500€, plus élevés que la moyenne du secteur — un avantage pour les joueurs qui font gonfler leur bankroll au blackjack. Les délais de retrait observés dans notre test : 10 heures pour les cryptos, 24 heures pour les e-wallets.`,
    metaTitle: "Art Casino Blackjack Avis 2026 : Tables VIP, Salon Privé",
    metaDescription:
      "Avis Art Casino pour le blackjack : 42 tables dont 16 live, tables VIP dès 50€, Salon Privé sur invitation et bonus 1 500€. Expérience premium.",
  },
  {
    slug: "betroom24",
    name: "Betroom24",
    bonus: "500€ + 100 tours gratuits",
    bonusAmount: 500,
    wagering: 35,
    rating: 4.4,
    blackjackTables: 32,
    liveBlackjackTables: 12,
    blackjackVariants: ["Blackjack européen", "Blackjack américain", "Infinite Blackjack", "Blackjack VIP"],
    features: ["Cashback quotidien", "Wagering x35", "Live 24/7", "Support FR"],
    affiliateUrl: "https://record.mematoaffiliates.com/_sfCEU0EZF39ZSuvhn4yj1mNd7ZgqdRLk/1/",
    license: "Curaçao",
    founded: 2022,
    minDeposit: "20€",
    withdrawalTime: "24-48h",
    providers: ["Evolution Gaming", "Pragmatic Play Live", "NetEnt", "Red Tiger"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "Ethereum", "USDT", "Trustly"],
    pros: [
      "Cashback quotidien applicable aux pertes au blackjack",
      "Tables live ouvertes 24/7",
      "Wagering x35 plus favorable que la moyenne",
      "Support FR réactif avec temps de réponse de 2-4 minutes",
    ],
    cons: [
      "Catalogue live plus limité que les concurrents premium",
      "Pas de programme VIP structuré à paliers",
      "Retraits légèrement plus lents (30h moyenne)",
    ],
    summary:
      "Betroom24 est le seul casino de notre panel à proposer un cashback quotidien applicable aux pertes blackjack — 5 à 10% selon la fidélité. Idéal pour limiter la variance.",
    fullReview: `Betroom24 se distingue pour les joueurs de blackjack par une particularité rare : un cashback quotidien de 5 à 10% (selon le niveau de fidélité) applicable aux pertes nettes, y compris sur les tables de blackjack. Pour un jeu à variance élevée comme le blackjack, cette récupération partielle atténue les séries perdantes.

La sélection blackjack compte 32 tables dont 12 animées en direct par Evolution Gaming. Les variantes couvrent le classique européen, l'américain, l'Infinite Blackjack et les tables VIP. Les tables fonctionnent 24/7 avec des croupiers francophones disponibles en soirée — cohérent avec le concept « salle 24/7 » de la marque.

Le bonus de bienvenue de 100% jusqu'à 500€ + 100 tours avec wagering x35 est correct. La contribution du blackjack au wagering reste de 10% comme sur toutes les plateformes. Les retraits ont pris 30 heures en moyenne dans notre test — plus lent que Casino Orca mais dans les délais annoncés.`,
    metaTitle: "Betroom24 Blackjack Avis 2026 : Cashback Quotidien, 12 Tables Live",
    metaDescription:
      "Avis Betroom24 pour le blackjack : cashback quotidien applicable aux pertes, 32 tables dont 12 live 24/7, wagering x35. Notre analyse complète.",
  },
  {
    slug: "thor-casino",
    name: "Thor Casino",
    bonus: "1 000€ + 100 tours gratuits",
    bonusAmount: 1000,
    wagering: 40,
    rating: 4.6,
    blackjackTables: 35,
    liveBlackjackTables: 14,
    blackjackVariants: ["Blackjack européen", "Infinite Blackjack", "Blackjack VIP Asgard", "Power Blackjack"],
    features: ["Thème nordique", "Tables Asgard VIP", "Programme Runes", "Retraits crypto 8h"],
    affiliateUrl: "https://record.mematoaffiliates.com/_sfCEU0EZF3_6PBA04iUMN2Nd7ZgqdRLk/1/",
    license: "Curaçao",
    founded: 2022,
    minDeposit: "20€",
    withdrawalTime: "24-48h",
    providers: ["Evolution Gaming", "Pragmatic Play Live", "NetEnt", "Nolimit City"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "Ethereum", "Litecoin", "USDT"],
    pros: [
      "Tables VIP « Asgard » avec limites élevées pour high rollers",
      "Retraits crypto rapides (8 heures en moyenne dans notre test)",
      "Programme de fidélité Runes de la Fortune par paliers",
      "Power Blackjack et Infinite Blackjack disponibles",
    ],
    cons: [
      "Conditions de mise x40 sur le bonus",
      "Pas de licence européenne",
      "Tables standard moins nombreuses que CasinoStars",
    ],
    summary:
      "Thor Casino propose 35 tables de blackjack dont 14 live, avec des tables VIP « Asgard » pour les high rollers et un programme de fidélité Runes de la Fortune par paliers.",
    fullReview: `Thor Casino s'appuie sur un thème mythologique nordique avec une interface runique cohérente. Pour les joueurs de blackjack, la plateforme propose 35 tables dont 14 animées en direct par Evolution Gaming, incluant les variantes populaires (européen, Infinite Blackjack, Power Blackjack) et des tables VIP « Asgard » pour les high rollers.

Le bonus de bienvenue « Bonus d'Asgard » offre 100% jusqu'à 1 000€ + 100 tours gratuits avec wagering x40. Comme sur les autres plateformes, la contribution blackjack au wagering est de 10%. Le programme « Runes de la Fortune » est structuré en paliers avec cashback, freespins et augmentation des limites de retrait — l'un des plus lisibles de notre panel.

Les retraits crypto ont été traités en 8 heures en moyenne dans notre test de 20 jours, un délai très compétitif. Pour un joueur de blackjack qui encaisse ses gains régulièrement, c'est un critère qui compte. Thor Casino convient particulièrement aux joueurs qui apprécient les thèmes immersifs et qui souhaitent progresser dans un programme VIP structuré sur la durée.`,
    metaTitle: "Thor Casino Blackjack Avis 2026 : Tables Asgard VIP, 14 Live",
    metaDescription:
      "Avis Thor Casino pour le blackjack : 35 tables dont 14 live, tables VIP Asgard, Bonus d'Asgard 1 000€ et programme Runes de la Fortune. Notre test.",
  },
  {
    slug: "mond-casino",
    name: "Mond Casino",
    bonus: "500€ + 200 tours gratuits",
    bonusAmount: 500,
    wagering: 35,
    rating: 4.5,
    blackjackTables: 40,
    liveBlackjackTables: 15,
    blackjackVariants: ["Blackjack européen", "Blackjack VIP", "Speed Blackjack", "Infinite Blackjack"],
    features: ["Wagering x35", "15 tables live FR", "Thème lunaire", "Crypto"],
    affiliateUrl: "https://record.mematoaffiliates.com/_sfCEU0EZF3-YkdHVp7xCcmNd7ZgqdRLk/1/",
    license: "Curaçao",
    founded: 2023,
    minDeposit: "20€",
    withdrawalTime: "24-48h",
    providers: ["Evolution Gaming", "Pragmatic Play Live", "NetEnt", "Yggdrasil"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "Ethereum", "USDT", "MiFinity"],
    pros: [
      "15 tables blackjack live avec croupiers francophones dédiés",
      "Wagering x35 parmi les plus favorables du secteur",
      "Plateforme 100% traduite en français",
      "Speed Blackjack et Infinite Blackjack disponibles",
    ],
    cons: [
      "Pas de licence européenne",
      "Programme VIP accessible uniquement sur invitation",
      "Pas d'application mobile native",
    ],
    summary:
      "Mond Casino propose 40 tables de blackjack dont 15 live avec croupiers francophones dédiés, et un wagering x35 parmi les plus favorables du secteur Curaçao.",
    fullReview: `Mond Casino (« Mond » signifie lune en allemand) propose une expérience de jeu nocturne élégante avec 40 tables de blackjack dont 15 animées en direct par Evolution Gaming. Les tables avec croupiers francophones sont disponibles aux heures de pointe, et la qualité de diffusion HD est au niveau attendu.

Le « Bonus Lune » est de 100% jusqu'à 500€ + 200 tours gratuits avec un wagering x35 — parmi les plus favorables de notre panel face aux x40 de la plupart des concurrents. C'est 12,5% de mises en moins pour débloquer les gains. Les 200 tours gratuits sont distribués sur 5 jours, ce qui permet d'étaler la valeur du bonus.

Pour les joueurs de blackjack, le wagering x35 compétitif reste théorique (contribution 10%), mais la plateforme 100% traduite en français, les croupiers francophones et la clarté des règles font de Mond Casino un bon choix pour les débutants francophones. Le principal bémol est l'opacité du programme VIP, accessible uniquement sur invitation.`,
    metaTitle: "Mond Casino Blackjack Avis 2026 : 15 Tables Live FR, Wagering x35",
    metaDescription:
      "Avis Mond Casino pour le blackjack : 40 tables dont 15 live FR, wagering x35 compétitif, Speed Blackjack et Infinite Blackjack. Notre analyse complète.",
  },
];

export function getCasinoBySlug(slug: string): Casino | undefined {
  return casinos.find((c) => c.slug === slug);
}
