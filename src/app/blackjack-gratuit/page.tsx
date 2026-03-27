import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Blackjack Gratuit : Jouez Sans Argent et Sans Inscription",
  description:
    "Découvrez comment jouer au blackjack gratuitement en ligne. Mode démo, entraînement sans risque, différences avec le jeu en argent réel.",
  alternates: { canonical: "/blackjack-gratuit" },
};

const toc = [
  { id: "pourquoi-gratuit", label: "Pourquoi jouer au blackjack gratuit ?" },
  { id: "comment-jouer", label: "Comment jouer gratuitement" },
  { id: "demo-vs-reel", label: "Mode démo vs argent réel" },
  { id: "avantages", label: "Les avantages du jeu gratuit" },
  { id: "limites", label: "Les limites du blackjack gratuit" },
  { id: "progresser", label: "Comment progresser avec le jeu gratuit" },
  { id: "faq", label: "Questions fréquentes" },
];

const faq = [
  { question: "Le blackjack gratuit utilise-t-il les mêmes règles que le vrai ?", answer: "Oui, les versions démo gratuites utilisent exactement les mêmes règles, probabilités et mécaniques que les versions en argent réel. Seul l'aspect financier diffère." },
  { question: "Faut-il s'inscrire pour jouer au blackjack gratuit ?", answer: "La plupart des plateformes proposent des jeux gratuits sans inscription. Il suffit d'accéder au jeu en mode démo pour commencer à jouer immédiatement." },
  { question: "Peut-on apprendre la stratégie de base en jouant gratuitement ?", answer: "Absolument. Le jeu gratuit est l'outil idéal pour mémoriser et pratiquer la stratégie de base sans pression financière. Gardez le tableau de stratégie à côté de vous pendant que vous jouez." },
  { question: "Les résultats du blackjack gratuit sont-ils aléatoires ?", answer: "Oui, les jeux gratuits utilisent le même générateur de nombres aléatoires (RNG) que les versions payantes. Les résultats sont donc parfaitement aléatoires et équitables." },
];

export default function BlackjackGratuitPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Blackjack gratuit" }]} />

      <article className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Blackjack gratuit : Jouez sans argent et apprenez sans risque
        </h1>

        <p className="text-lg text-text-light leading-relaxed mb-8">
          Le blackjack gratuit est la meilleure façon d&apos;apprendre le jeu, de tester des
          stratégies et de se perfectionner sans risquer un centime. Découvrez comment profiter
          du mode démo et maximiser votre apprentissage.
        </p>

        <TableOfContents items={toc} />

        <section id="pourquoi-gratuit" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Pourquoi jouer au blackjack gratuit ?</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Le blackjack gratuit n&apos;est pas simplement un divertissement — c&apos;est un outil
            d&apos;apprentissage puissant. Voici pourquoi tout joueur, du débutant au confirmé,
            devrait l&apos;utiliser :
          </p>
          <ul className="space-y-3 text-text-light">
            <li><strong>Apprentissage sans stress</strong> — Apprenez les règles à votre rythme sans la pression de l&apos;argent réel.</li>
            <li><strong>Test de stratégies</strong> — Expérimentez la stratégie de base, le comptage de cartes ou d&apos;autres techniques sans conséquence financière.</li>
            <li><strong>Compréhension des probabilités</strong> — Jouez suffisamment de mains pour voir les mathématiques en action.</li>
            <li><strong>Découverte des variantes</strong> — Testez le blackjack européen, américain, multi-mains sans engagement.</li>
          </ul>
        </section>

        <section id="comment-jouer" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Comment jouer au blackjack gratuitement</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Il existe plusieurs façons de jouer au blackjack sans dépenser d&apos;argent :
          </p>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-bold mb-2">1. Modes démo des casinos en ligne</h3>
              <p className="text-sm text-text-light">La plupart des casinos en ligne proposent un mode « Play for fun » ou « Démo » qui permet de jouer avec des crédits virtuels. Aucun dépôt ni inscription nécessaire dans la majorité des cas.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-bold mb-2">2. Applications mobiles</h3>
              <p className="text-sm text-text-light">De nombreuses applications gratuites sur iOS et Android permettent de jouer au blackjack. Elles sont souvent accompagnées de tutoriels et de conseils intégrés.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-bold mb-2">3. Simulateurs en ligne</h3>
              <p className="text-sm text-text-light">Des sites spécialisés proposent des simulateurs de blackjack gratuits, parfois avec des outils d&apos;analyse pour suivre vos performances et identifier vos erreurs.</p>
            </div>
          </div>
        </section>

        <LeadForm />

        <section id="demo-vs-reel" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Mode démo vs argent réel : les différences</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-felt text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Aspect</th>
                  <th className="px-4 py-3 text-left">Mode démo</th>
                  <th className="px-4 py-3 text-left">Argent réel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 font-medium">Risque financier</td><td className="px-4 py-3 text-text-light">Aucun</td><td className="px-4 py-3 text-text-light">Oui</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Règles du jeu</td><td className="px-4 py-3 text-text-light">Identiques</td><td className="px-4 py-3 text-text-light">Identiques</td></tr>
                <tr><td className="px-4 py-3 font-medium">Probabilités</td><td className="px-4 py-3 text-text-light">Identiques (RNG)</td><td className="px-4 py-3 text-text-light">Identiques (RNG)</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Gains réels</td><td className="px-4 py-3 text-text-light">Non</td><td className="px-4 py-3 text-text-light">Oui</td></tr>
                <tr><td className="px-4 py-3 font-medium">Pression émotionnelle</td><td className="px-4 py-3 text-text-light">Faible</td><td className="px-4 py-3 text-text-light">Élevée</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Inscription requise</td><td className="px-4 py-3 text-text-light">Rarement</td><td className="px-4 py-3 text-text-light">Toujours</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-light mt-4">
            <strong>Point important :</strong> La différence majeure entre le mode démo et le jeu réel
            n&apos;est pas technique mais psychologique. En argent réel, le stress peut conduire à de
            mauvaises décisions. Le mode gratuit vous permet d&apos;automatiser les bons réflexes.
          </p>
        </section>

        <section id="avantages" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Les avantages du blackjack gratuit</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: "🎓", title: "Formation", desc: "Apprenez sans conséquence financière" },
              { icon: "🧪", title: "Expérimentation", desc: "Testez toutes les stratégies librement" },
              { icon: "⏱️", title: "Flexibilité", desc: "Jouez quand vous voulez, aussi longtemps que vous voulez" },
              { icon: "📊", title: "Données", desc: "Analysez vos décisions sans biais émotionnel" },
            ].map((item) => (
              <div key={item.title} className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-text-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="limites" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Les limites du blackjack gratuit</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Bien que le jeu gratuit soit un excellent outil, il comporte quelques limites :
          </p>
          <ul className="space-y-2 text-text-light">
            <li>• <strong>Pas de gestion émotionnelle</strong> — Sans argent en jeu, vous ne ressentez pas la pression des décisions financières.</li>
            <li>• <strong>Pas de comptage de cartes efficace</strong> — Les RNG mélangent les cartes à chaque main, rendant le comptage impossible.</li>
            <li>• <strong>Discipline différente</strong> — La gestion de bankroll ne peut pas être pratiquée de manière réaliste.</li>
          </ul>
        </section>

        <section id="progresser" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Comment progresser avec le blackjack gratuit</h2>
          <ol className="list-decimal list-inside space-y-3 text-text-light">
            <li><strong>Utilisez le tableau de stratégie</strong> — Gardez-le ouvert pendant que vous jouez. Consultez notre <Link href="/strategie-blackjack" className="text-primary hover:text-accent">page stratégie</Link>.</li>
            <li><strong>Jouez au moins 500 mains</strong> — C&apos;est le minimum pour voir les probabilités se stabiliser.</li>
            <li><strong>Notez vos erreurs</strong> — Identifiez les situations où vous hésitez le plus.</li>
            <li><strong>Changez de variante</strong> — Explorez le <Link href="/blackjack-europeen" className="text-primary hover:text-accent">blackjack européen</Link> et le <Link href="/blackjack-americain" className="text-primary hover:text-accent">blackjack américain</Link>.</li>
            <li><strong>Fixez des objectifs</strong> — Par exemple, 100 mains consécutives sans erreur de stratégie de base.</li>
          </ol>
        </section>

        <LeadForm variant="banner" title="Guide stratégie gratuit en PDF" description="Recevez le tableau optimal + les 10 erreurs à éviter au blackjack" />

        <section id="faq">
          <FAQSchema items={faq} />
        </section>
      </article>
    </div>
  );
}
