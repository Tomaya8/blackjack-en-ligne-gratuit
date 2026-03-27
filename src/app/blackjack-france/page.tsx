import type { Metadata } from "next";
import GeoPage from "@/components/GeoPage";

export const metadata: Metadata = {
  title: "Blackjack en Ligne en France : Légalité, Options et Guide",
  description: "Tout savoir sur le blackjack en ligne en France : législation ANJ, options disponibles, particularités du marché français et conseils pour les joueurs.",
  alternates: { canonical: "/blackjack-france" },
};

export default function BlackjackFrancePage() {
  return (
    <GeoPage
      country="France"
      slug="blackjack-france"
      intro="Le blackjack en ligne en France est encadré par l'Autorité Nationale des Jeux (ANJ). Découvrez le cadre légal, les options disponibles et les particularités du marché français pour jouer de manière éclairée et responsable."
      legalStatus="Le blackjack en ligne en argent réel est régulé par l'ANJ depuis 2010 (ex-ARJEL). Seuls les opérateurs détenant une licence française sont autorisés. Les jeux de table en ligne (dont le blackjack) sont autorisés uniquement sous licence."
      legalDetails={[
        "L'ANJ (Autorité Nationale des Jeux) régule le marché des jeux en ligne depuis 2020.",
        "Les opérateurs doivent détenir une licence ANJ pour proposer du blackjack en argent réel.",
        "Les joueurs doivent être majeurs (18+) et résider en France.",
        "Les gains de jeux de casino en ligne sont soumis à la fiscalité française (prélèvement forfaitaire).",
        "Les jeux gratuits (démo) sont accessibles sans restriction sur les plateformes licenciées.",
        "La publicité pour les jeux de casino en ligne est strictement encadrée.",
      ]}
      popularity="Le blackjack est le deuxième jeu de table le plus populaire en France après la roulette. L'intérêt pour le blackjack en ligne a considérablement augmenté ces dernières années, notamment grâce aux tables live avec croupiers francophones. Les joueurs français apprécient particulièrement le blackjack européen, joué traditionnellement dans les casinos du pays."
      options={[
        "Plateformes licenciées ANJ proposant du blackjack en argent réel",
        "Modes démo gratuits sur les sites licenciés pour s'entraîner",
        "Tables de blackjack live avec croupiers parlant français",
        "Applications mobiles de blackjack (iOS et Android)",
        "Variantes populaires : européen, américain, live, multi-mains",
      ]}
      particularities={[
        "La France a une longue tradition de jeux de cartes (le « 21 » ou « Vingt-et-un » est considéré comme l'ancêtre du blackjack).",
        "Les casinos physiques français proposent principalement la variante européenne.",
        "L'ANJ impose des limites de dépôt et des outils d'auto-exclusion sur toutes les plateformes licenciées.",
        "Les bonus de bienvenue sont plafonnés et encadrés par la réglementation.",
        "Le marché français est l'un des plus régulés d'Europe, offrant une protection solide aux joueurs.",
      ]}
      faq={[
        { question: "Le blackjack en ligne est-il légal en France ?", answer: "Oui, le blackjack en ligne est légal en France sur les plateformes détenant une licence ANJ. Les jeux gratuits sont accessibles sans restriction. Pour le jeu en argent réel, vérifiez toujours la présence du logo ANJ sur le site." },
        { question: "Quels impôts sur les gains au blackjack en France ?", answer: "En France, les gains de casino en ligne sont soumis à un prélèvement forfaitaire. Les gains supérieurs à 1 500€ sont soumis à une CSG de 12%. Il est recommandé de consulter un conseiller fiscal pour les gains importants." },
        { question: "L'ANJ protège-t-elle les joueurs français ?", answer: "Oui, l'ANJ impose des mesures de protection : vérification d'identité, limites de dépôt, outils d'auto-exclusion, interdiction du jeu aux mineurs, et lutte contre l'addiction. Les joueurs peuvent s'inscrire au fichier des interdits de jeux." },
      ]}
    />
  );
}
