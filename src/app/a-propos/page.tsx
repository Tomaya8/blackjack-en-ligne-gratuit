import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "À Propos : Notre Mission et Notre Équipe",
  description: "Découvrez l'équipe derrière blackjack-en-ligne-gratuit.com. Notre mission : fournir le guide le plus complet et fiable sur le blackjack en ligne francophone.",
  alternates: { canonical: "/a-propos" },
};

const team = [
  {
    name: "Marc Dupont",
    role: "Fondateur & Expert Stratégie",
    bio: "Passionné de mathématiques appliquées aux jeux de hasard depuis plus de 15 ans. Diplômé en statistiques de l'Université Paris-Saclay. Marc a analysé des millions de mains de blackjack pour développer des contenus fondés sur les probabilités réelles.",
  },
  {
    name: "Sophie Laurent",
    role: "Rédactrice en Chef",
    bio: "Journaliste spécialisée dans l'industrie des jeux en ligne depuis 10 ans. Ancienne rédactrice pour plusieurs publications de référence dans le secteur. Sophie veille à la qualité, l'exactitude et la clarté de tous nos contenus.",
  },
  {
    name: "Thomas Berger",
    role: "Analyste Réglementaire",
    bio: "Expert en droit des jeux de hasard dans l'espace francophone. Thomas suit les évolutions réglementaires en France, Belgique, Suisse et au Québec pour garantir l'exactitude de nos informations légales.",
  },
];

export default function AProposPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "À propos" }]} />

      <article className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">À propos de blackjack-en-ligne-gratuit.com</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Notre mission</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Blackjack-en-ligne-gratuit.com a été créé avec un objectif clair : <strong>devenir
            la ressource de référence francophone sur le blackjack en ligne</strong>. Nous croyons
            que chaque joueur mérite un accès à une information fiable, vérifiée et fondée sur les
            mathématiques.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            Trop de sites sur le blackjack sont biaisés par des intérêts commerciaux. Notre
            approche est différente : nous privilégions l&apos;éducation et la transparence.
            Chaque conseil que nous donnons est basé sur des calculs de probabilités et des
            simulations statistiques.
          </p>
          <p className="text-text-light leading-relaxed">
            Nous ne promettons pas de méthode miracle pour « gagner à coup sûr ». Nous expliquons
            honnêtement les mathématiques du jeu, les meilleures stratégies pour minimiser
            l&apos;avantage de la maison, et l&apos;importance du jeu responsable.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Nos valeurs</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
              <h3 className="font-bold mb-2">Rigueur scientifique</h3>
              <p className="text-sm text-text-light">Tous nos contenus sont fondés sur les mathématiques, les probabilités et des données vérifiables.</p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
              <h3 className="font-bold mb-2">Transparence</h3>
              <p className="text-sm text-text-light">Nous expliquons clairement l&apos;avantage de la maison et les limites de chaque stratégie.</p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
              <h3 className="font-bold mb-2">Indépendance</h3>
              <p className="text-sm text-text-light">Notre contenu est éditorial. Nous ne sommes pas influencés par des intérêts commerciaux.</p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
              <h3 className="font-bold mb-2">Jeu responsable</h3>
              <p className="text-sm text-text-light">Nous promouvons activement une approche saine et mesurée du jeu.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Notre équipe</h2>
          <div className="space-y-6">
            {team.map((member) => (
              <div key={member.name} className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-felt text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-sm text-accent-dark">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-text-light">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Notre processus éditorial</h2>
          <ol className="list-decimal list-inside space-y-3 text-text-light">
            <li><strong>Recherche approfondie</strong> — Chaque article est basé sur des sources académiques et des données statistiques.</li>
            <li><strong>Rédaction experte</strong> — Nos rédacteurs sont spécialistes du domaine.</li>
            <li><strong>Vérification des faits</strong> — Toutes les informations sont vérifiées avant publication.</li>
            <li><strong>Mise à jour régulière</strong> — Nos contenus sont révisés pour rester à jour.</li>
            <li><strong>Relecture par des pairs</strong> — Chaque contenu est relu par un second expert.</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-text-light leading-relaxed">
            Pour toute question, suggestion ou demande de collaboration éditoriale,
            vous pouvez nous contacter par email à{" "}
            <strong>contact@blackjack-en-ligne-gratuit.com</strong>.
          </p>
        </section>
      </article>
    </div>
  );
}
