import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Blackjack en Ligne : Guide Complet pour Jouer",
  description:
    "Tout savoir sur le blackjack en ligne : comment jouer, avantages, inconvénients et conseils d'experts. Guide complet pour les joueurs francophones.",
  alternates: { canonical: "/blackjack-en-ligne" },
};

const toc = [
  { id: "introduction", label: "Introduction au blackjack en ligne" },
  { id: "comment-jouer", label: "Comment jouer au blackjack en ligne" },
  { id: "avantages", label: "Avantages du blackjack en ligne" },
  { id: "inconvenients", label: "Inconvénients à connaître" },
  { id: "choisir-plateforme", label: "Comment choisir une plateforme" },
  { id: "conseils", label: "Conseils pour bien débuter" },
  { id: "faq", label: "Questions fréquentes" },
];

const faq = [
  { question: "Le blackjack en ligne est-il légal en France ?", answer: "Le blackjack en ligne en argent réel est régulé par l'ANJ (Autorité Nationale des Jeux) en France. Seuls les opérateurs détenant une licence française sont autorisés. Les versions gratuites (démo) sont accessibles sans restriction." },
  { question: "Peut-on gagner de l'argent au blackjack en ligne ?", answer: "Il est possible de gagner à court terme, mais la maison conserve toujours un avantage statistique. La stratégie de base permet de réduire cet avantage à environ 0,5%, ce qui fait du blackjack le jeu de casino le plus favorable au joueur." },
  { question: "Quelle est la différence entre blackjack en ligne et en casino physique ?", answer: "Le blackjack en ligne offre plus de variantes, des mises plus flexibles et la possibilité de jouer gratuitement. Le casino physique propose l'ambiance et l'interaction sociale. Le blackjack live combine les deux expériences." },
];

export default function BlackjackEnLignePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Blackjack en ligne" }]} />

      <article className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Blackjack en ligne : Le guide complet pour jouer et gagner
        </h1>

        <p className="text-lg text-text-light leading-relaxed mb-8">
          Le blackjack en ligne est devenu l&apos;un des jeux de casino les plus populaires sur internet.
          Que vous soyez débutant ou joueur expérimenté, ce guide vous explique tout ce que vous devez
          savoir pour profiter du blackjack en ligne de manière éclairée et responsable.
        </p>

        <TableOfContents items={toc} />

        <section id="introduction" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Introduction au blackjack en ligne</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Le blackjack, aussi appelé « 21 », est un jeu de cartes où chaque joueur affronte le
            croupier. L&apos;objectif est d&apos;obtenir une main dont la valeur totale se rapproche
            le plus de 21 sans la dépasser. Ce qui rend le blackjack unique parmi les jeux de casino,
            c&apos;est la part de stratégie : vos décisions ont un impact direct sur vos chances de gagner.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            L&apos;avènement d&apos;internet a transformé l&apos;accès au blackjack. Aujourd&apos;hui,
            des millions de joueurs à travers le monde profitent du blackjack en ligne, avec des avantages
            considérables : accessibilité 24h/24, variété de tables, possibilité de jouer gratuitement
            et mises adaptées à tous les budgets.
          </p>
          <p className="text-text-light leading-relaxed">
            Le marché francophone (France, Belgique, Suisse, Québec) connaît une croissance constante
            de l&apos;intérêt pour le blackjack en ligne, avec des réglementations de plus en plus
            structurées pour protéger les joueurs.
          </p>
        </section>

        <section id="comment-jouer" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Comment jouer au blackjack en ligne</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Jouer au blackjack en ligne suit les mêmes principes que le jeu en casino physique.
            Voici les étapes principales :
          </p>
          <ol className="list-decimal list-inside space-y-3 text-text-light mb-4">
            <li><strong>Choisir une plateforme fiable</strong> — Optez pour un site licencié avec de bonnes évaluations.</li>
            <li><strong>Sélectionner une table</strong> — Choisissez la variante et les limites de mise qui vous conviennent.</li>
            <li><strong>Placer votre mise</strong> — Définissez le montant que vous souhaitez parier.</li>
            <li><strong>Recevoir vos cartes</strong> — Vous recevez deux cartes face visible, le croupier une face visible et une face cachée.</li>
            <li><strong>Prendre vos décisions</strong> — Tirer (Hit), Rester (Stand), Doubler (Double), Séparer (Split) ou Abandonner (Surrender).</li>
            <li><strong>Résultat</strong> — Le croupier révèle sa main et le résultat est déterminé.</li>
          </ol>
          <p className="text-text-light leading-relaxed">
            La beauté du blackjack en ligne réside dans la possibilité de consulter un tableau de
            stratégie en temps réel, ce qui est impossible dans un casino physique. C&apos;est un
            avantage considérable pour les joueurs qui apprennent.
          </p>
        </section>

        <LeadForm />

        <section id="avantages" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Avantages du blackjack en ligne</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Accessibilité", desc: "Jouez 24h/24 depuis n'importe où, sur ordinateur ou mobile." },
              { title: "Versions gratuites", desc: "Entraînez-vous sans risque avec les modes démo." },
              { title: "Variété", desc: "Des dizaines de variantes disponibles en un clic." },
              { title: "Mises flexibles", desc: "Des tables à partir de 0,10€ jusqu'aux high rollers." },
              { title: "Bonus", desc: "Les plateformes offrent régulièrement des bonus de bienvenue." },
              { title: "Rythme personnel", desc: "Prenez le temps de réfléchir à chaque décision sans pression." },
            ].map((item) => (
              <div key={item.title} className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <h3 className="font-bold mb-1">✓ {item.title}</h3>
                <p className="text-sm text-text-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="inconvenients" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Inconvénients à connaître</h2>
          <ul className="space-y-3 text-text-light">
            <li className="flex gap-3"><span className="text-card-red font-bold">✗</span> <span><strong>Absence d&apos;ambiance</strong> — L&apos;expérience sociale du casino physique est absente (sauf en mode live).</span></li>
            <li className="flex gap-3"><span className="text-card-red font-bold">✗</span> <span><strong>Risque d&apos;addiction</strong> — L&apos;accès facile peut favoriser le jeu excessif. Fixez-vous des limites.</span></li>
            <li className="flex gap-3"><span className="text-card-red font-bold">✗</span> <span><strong>Rythme rapide</strong> — Les parties en ligne sont plus rapides, ce qui peut entraîner des pertes accélérées.</span></li>
            <li className="flex gap-3"><span className="text-card-red font-bold">✗</span> <span><strong>Sites non régulés</strong> — Certains sites opèrent sans licence. Vérifiez toujours la régulation.</span></li>
          </ul>
        </section>

        <section id="choisir-plateforme" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Comment choisir une plateforme de blackjack en ligne</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Voici les critères essentiels pour évaluer une plateforme de blackjack en ligne :
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-felt text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Critère</th>
                  <th className="px-4 py-3 text-left">Pourquoi c&apos;est important</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 font-medium">Licence</td><td className="px-4 py-3 text-text-light">Garantit l&apos;équité et la sécurité</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">RTP affiché</td><td className="px-4 py-3 text-text-light">Le taux de retour doit être supérieur à 99%</td></tr>
                <tr><td className="px-4 py-3 font-medium">Variantes proposées</td><td className="px-4 py-3 text-text-light">Plus de choix = meilleure expérience</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Mode démo</td><td className="px-4 py-3 text-text-light">Permet de tester avant de miser</td></tr>
                <tr><td className="px-4 py-3 font-medium">Support client</td><td className="px-4 py-3 text-text-light">Disponibilité en français appréciable</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="conseils" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Conseils pour bien débuter</h2>
          <ol className="list-decimal list-inside space-y-3 text-text-light">
            <li><strong>Commencez en mode gratuit</strong> — Apprenez les bases sans pression financière.</li>
            <li><strong>Apprenez la stratégie de base</strong> — C&apos;est le fondement de tout jeu intelligent.</li>
            <li><strong>Fixez un budget</strong> — Ne jouez jamais avec de l&apos;argent que vous ne pouvez pas perdre.</li>
            <li><strong>Évitez l&apos;assurance</strong> — C&apos;est un pari secondaire statistiquement défavorable.</li>
            <li><strong>Choisissez des tables avec peu de jeux de cartes</strong> — L&apos;avantage de la maison diminue.</li>
          </ol>
        </section>

        <LeadForm variant="banner" title="Téléchargez le guide complet en PDF" description="Stratégie de base + tableau optimal + erreurs à éviter" />

        <section id="faq">
          <FAQSchema items={faq} />
        </section>
      </article>
    </div>
  );
}
