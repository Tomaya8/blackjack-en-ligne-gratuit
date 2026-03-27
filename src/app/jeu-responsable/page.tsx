import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Jeu Responsable : Conseils et Ressources d'Aide",
  description: "Le jeu doit rester un divertissement. Découvrez nos conseils pour jouer de manière responsable et les ressources d'aide en cas de besoin.",
  alternates: { canonical: "/jeu-responsable" },
};

export default function JeuResponsablePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Jeu responsable" }]} />

      <article className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Jeu responsable</h1>

        <div className="bg-card-red/10 border border-card-red/30 rounded-xl p-6 mb-8">
          <p className="font-bold text-lg mb-2">Le jeu doit rester un divertissement.</p>
          <p className="text-text-light">
            Si vous ou un proche avez un problème avec le jeu, des ressources d&apos;aide
            existent. N&apos;hésitez pas à les contacter.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Nos principes</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Chez blackjack-en-ligne-gratuit.com, nous prenons le jeu responsable très au sérieux.
            Notre objectif est d&apos;éduquer les joueurs, pas de les encourager à jouer de manière
            excessive. Voici nos engagements :
          </p>
          <ul className="space-y-2 text-text-light">
            <li>• Nous ne faisons jamais de promesses irréalistes sur les gains.</li>
            <li>• Nous expliquons toujours l&apos;avantage mathématique de la maison.</li>
            <li>• Nous encourageons le jeu gratuit comme outil d&apos;apprentissage.</li>
            <li>• Nous incluons des messages de prévention dans nos contenus.</li>
            <li>• Nous fournissons des liens vers des ressources d&apos;aide.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Conseils pour jouer de manière responsable</h2>
          <div className="space-y-4">
            {[
              { title: "Fixez un budget", desc: "Déterminez à l'avance le montant maximum que vous êtes prêt à perdre. Ne dépassez jamais cette limite, quelles que soient les circonstances." },
              { title: "Fixez une limite de temps", desc: "Décidez combien de temps vous allez jouer et respectez cette limite. Le temps passe vite quand on joue." },
              { title: "Ne poursuivez jamais vos pertes", desc: "Si vous avez perdu votre budget, arrêtez. Augmenter les mises pour \"récupérer\" est le comportement le plus dangereux." },
              { title: "Ne jouez pas sous l'influence", desc: "L'alcool et les drogues altèrent votre jugement et vos décisions stratégiques." },
              { title: "Le jeu n'est pas un revenu", desc: "Ne comptez jamais sur le jeu comme source de revenus. L'avantage de la maison garantit que vous perdrez à long terme." },
              { title: "Faites des pauses régulières", desc: "Levez-vous, bougez, faites autre chose. Les sessions prolongées peuvent mener à de mauvaises décisions." },
              { title: "Ne jouez pas pour fuir vos problèmes", desc: "Si vous jouez pour échapper au stress, à l'ennui ou à des problèmes personnels, c'est un signe d'alerte." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-text-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Signes d&apos;un problème de jeu</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Reconnaître un problème est la première étape vers la guérison. Posez-vous ces questions :
          </p>
          <ul className="space-y-2 text-text-light">
            <li>• Jouez-vous avec de l&apos;argent destiné à vos besoins essentiels ?</li>
            <li>• Mentez-vous à vos proches sur vos activités de jeu ?</li>
            <li>• Ressentez-vous le besoin de jouer des montants de plus en plus élevés ?</li>
            <li>• Avez-vous tenté d&apos;arrêter de jouer sans y parvenir ?</li>
            <li>• Le jeu affecte-t-il votre travail, vos études ou vos relations ?</li>
            <li>• Empruntez-vous de l&apos;argent pour jouer ?</li>
            <li>• Vous sentez-vous anxieux, irritable ou déprimé quand vous ne jouez pas ?</li>
          </ul>
          <p className="text-text-light leading-relaxed mt-4">
            Si vous avez répondu « oui » à une ou plusieurs de ces questions, nous vous encourageons
            fortement à contacter une ressource d&apos;aide.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Ressources d&apos;aide par pays</h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-3">France</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>• <strong>Joueurs Info Service</strong> — 09 74 75 13 13 (appel non surtaxé) — joueurs-info-service.fr</li>
                <li>• <strong>SOS Joueurs</strong> — 09 69 39 55 12</li>
                <li>• <strong>ANJ</strong> — anj.fr — Autorité Nationale des Jeux</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-3">Belgique</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>• <strong>Commission des Jeux de Hasard</strong> — gamingcommission.be</li>
                <li>• <strong>Aide aux joueurs</strong> — 0800 35 777</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-3">Suisse</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>• <strong>Addiction Suisse</strong> — 0800 104 104</li>
                <li>• <strong>CFMJ</strong> — esbk.admin.ch</li>
                <li>• <strong>Rien ne va plus</strong> — riennevaplus.ch</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-3">Québec / Canada</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>• <strong>Jeu : aide et référence</strong> — 1-800-461-0140 — jeu-aidereference.qc.ca</li>
                <li>• <strong>Gamblers Anonymous</strong> — gamblersanonymous.org</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Outils d&apos;auto-exclusion</h2>
          <p className="text-text-light leading-relaxed mb-4">
            La plupart des plateformes de jeu en ligne proposent des outils d&apos;auto-exclusion.
            Ces outils vous permettent de :
          </p>
          <ul className="space-y-2 text-text-light">
            <li>• Fixer des limites de dépôt (quotidiennes, hebdomadaires, mensuelles).</li>
            <li>• Fixer des limites de temps de jeu.</li>
            <li>• Vous auto-exclure temporairement (24h, 7 jours, 30 jours).</li>
            <li>• Vous auto-exclure définitivement.</li>
          </ul>
          <p className="text-text-light leading-relaxed mt-4">
            N&apos;hésitez pas à utiliser ces outils si vous sentez que votre pratique de jeu
            devient problématique.
          </p>
        </section>

        <div className="bg-felt text-white rounded-xl p-8 text-center">
          <p className="text-2xl mb-2">18+</p>
          <p className="font-bold text-lg mb-2">Le jeu est interdit aux mineurs.</p>
          <p className="text-sm opacity-80">
            Le jeu comporte des risques : endettement, dépendance, isolement.
            Appelez le 09 74 75 13 13 pour être accompagné (France).
          </p>
        </div>
      </article>
    </div>
  );
}
