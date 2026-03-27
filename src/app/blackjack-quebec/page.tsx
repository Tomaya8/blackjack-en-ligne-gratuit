import type { Metadata } from "next";
import GeoPage from "@/components/GeoPage";

export const metadata: Metadata = {
  title: "Blackjack en Ligne au Québec : Légalité et Guide Complet",
  description: "Guide du blackjack en ligne au Québec : réglementation, Loto-Québec, options disponibles et conseils pour les joueurs québécois.",
  alternates: { canonical: "/blackjack-quebec" },
};

export default function BlackjackQuebecPage() {
  return (
    <GeoPage
      country="Québec"
      slug="blackjack-quebec"
      intro="Le Québec possède un marché des jeux en ligne unique au Canada, opéré par Loto-Québec via sa plateforme Espacejeux. Découvrez comment jouer au blackjack en ligne de manière légale et responsable au Québec."
      legalStatus="Au Québec, les jeux de casino en ligne sont exploités exclusivement par Loto-Québec via la plateforme Espacejeux.com. C'est le seul opérateur légal de jeux en ligne dans la province."
      legalDetails={[
        "Loto-Québec, société d'État, détient le monopole des jeux de hasard en ligne au Québec.",
        "Espacejeux.com est la seule plateforme légale pour le blackjack en ligne au Québec.",
        "Les joueurs doivent être majeurs (18+) et résider au Québec.",
        "Les sites de jeux en ligne étrangers ne sont pas techniquement bloqués mais ne sont pas autorisés.",
        "Les gains de jeux de hasard ne sont pas imposables au Canada (y compris au Québec).",
        "Loto-Québec investit dans la prévention du jeu compulsif.",
      ]}
      popularity="Le blackjack est l'un des jeux de table les plus populaires au Québec. La province compte quatre casinos physiques (dont le Casino de Montréal, l'un des plus grands au Canada) où le blackjack est très prisé. La version en ligne sur Espacejeux attire de plus en plus de joueurs, particulièrement depuis la pandémie de 2020."
      options={[
        "Espacejeux.com — plateforme officielle de Loto-Québec avec blackjack en ligne",
        "Blackjack live avec croupiers francophones sur Espacejeux",
        "Mode démo gratuit disponible après inscription",
        "Variantes disponibles : classique, européen, multi-mains",
        "Application mobile Espacejeux (iOS et Android)",
      ]}
      particularities={[
        "Le Québec est la seule province canadienne entièrement francophone, et toutes les plateformes sont en français.",
        "Loto-Québec reverse ses profits au gouvernement provincial pour financer des services publics.",
        "Les gains de jeux de hasard ne sont pas imposés au Canada — un avantage majeur pour les joueurs.",
        "Le Casino de Montréal est l'un des plus grands casinos au monde.",
        "Les Québécois ont une culture du jeu bien établie, avec Loto-Québec comme institution de confiance.",
        "Le programme d'aide aux joueurs compulsifs (Gamblers Anonymous Québec) est très actif.",
      ]}
      faq={[
        { question: "Espacejeux est-il le seul site légal au Québec ?", answer: "Oui, Espacejeux.com, opéré par Loto-Québec, est la seule plateforme de jeux de casino en ligne légale au Québec. Bien que des sites étrangers soient accessibles, ils ne sont pas régulés par les autorités québécoises." },
        { question: "Les gains de blackjack sont-ils imposés au Québec ?", answer: "Non, les gains provenant de jeux de hasard (dont le blackjack) ne sont pas imposables au Canada, y compris au Québec. C'est un avantage considérable par rapport à la France ou la Belgique." },
        { question: "Quel est l'âge minimum pour jouer au blackjack au Québec ?", answer: "L'âge minimum est de 18 ans au Québec pour les jeux en ligne et les casinos physiques. Une vérification d'identité est effectuée lors de l'inscription sur Espacejeux." },
      ]}
    />
  );
}
