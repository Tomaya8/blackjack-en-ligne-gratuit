import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Les 10 Erreurs les Plus Fréquentes au Blackjack",
  description:
    "Découvrez les erreurs les plus courantes au blackjack et comment les éviter. De la mauvaise stratégie à la gestion de bankroll, corrigez vos faiblesses.",
  alternates: { canonical: "/blog/erreurs-frequentes-blackjack" },
};

const errors = [
  { title: "Ne pas utiliser la stratégie de base", desc: "Jouer « au feeling » augmente l'avantage de la maison de 0,5% à 2-5%. La stratégie de base est fondée sur des millions de simulations mathématiques. L'ignorer, c'est brûler de l'argent.", fix: "Imprimez le tableau de stratégie et gardez-le à côté de vous pendant vos sessions en ligne." },
  { title: "Prendre l'assurance", desc: "L'assurance est un pari secondaire avec un avantage de la maison de 7,7%. Même quand le croupier montre un As, les mathématiques disent clairement : refusez.", fix: "Ne prenez jamais l'assurance. Jamais. C'est l'une des rares règles absolues au blackjack." },
  { title: "Ne pas séparer les 8", desc: "Un total de 16 est la pire main au blackjack (trop élevée pour tirer confortablement, trop basse pour rester). Deux mains de 8 valent bien mieux.", fix: "Séparez toujours les 8. Et toujours les As. Ce sont les deux séparations les plus importantes." },
  { title: "Séparer les 10", desc: "Un total de 20 est une main excellente. La séparer pour espérer deux mains de 20 est statistiquement perdant car vous échangez une quasi-certitude contre de l'incertitude.", fix: "Ne séparez jamais les 10, même quand le croupier montre un 5 ou un 6. Restez à 20." },
  { title: "Chercher à atteindre 21", desc: "L'objectif n'est pas d'avoir 21 mais de battre le croupier. Tirer à 15 quand le croupier montre un 6 est une erreur classique — le croupier a ~42% de chances de sauter.", fix: "Restez quand le croupier montre 2-6 (sauf avec des totaux très bas). Le croupier fera le travail pour vous." },
  { title: "Utiliser la Martingale", desc: "Doubler sa mise après chaque perte semble logique mais mène à des pertes catastrophiques. Après 8 défaites consécutives (ça arrive), la mise atteint 256× la mise initiale.", fix: "Misez de manière constante, 1-2% de votre bankroll par main. Aucun système progressif ne bat les maths." },
  { title: "Ignorer les règles de la table", desc: "Toutes les tables ne sont pas identiques. Un blackjack payé 6:5 au lieu de 3:2 augmente l'avantage de la maison de 1,4%. C'est énorme.", fix: "Vérifiez : paiement 3:2, croupier reste sur soft 17, doublement sur toute main, surrender disponible." },
  { title: "Jouer sans limites de budget", desc: "Sans limite claire, il est facile de se retrouver à « poursuivre ses pertes » — miser plus pour récupérer l'argent perdu. C'est la spirale la plus dangereuse.", fix: "Fixez une limite de perte avant de commencer. Quand elle est atteinte, arrêtez. Sans exception." },
  { title: "Jouer trop de mains simultanément", desc: "Les débutants qui passent au multi-mains trop vite font plus d'erreurs de stratégie et brûlent leur bankroll plus rapidement.", fix: "Maîtrisez une main avant de passer au multi-mains. Consultez notre guide du blackjack multi-mains." },
  { title: "Négliger le mode gratuit", desc: "Passer directement au jeu en argent réel sans s'entraîner est une erreur coûteuse. Le mode démo existe pour une raison.", fix: "Jouez au moins 500 mains en mode gratuit avant de miser de l'argent réel." },
];

const faq = [
  { question: "Quelle est l'erreur la plus coûteuse au blackjack ?", answer: "Ne pas utiliser la stratégie de base est de loin l'erreur la plus coûteuse. Elle peut augmenter l'avantage de la maison de 0,5% à 5%, soit une différence de 45€ pour 1000€ misés." },
  { question: "Comment éviter les erreurs au blackjack en ligne ?", answer: "Gardez le tableau de stratégie ouvert pendant vos sessions. L'avantage du jeu en ligne est que personne ne vous regarde — profitez-en pour consulter le tableau à chaque décision." },
];

export default function ErreursBlackjackPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Erreurs fréquentes" }]} />

      <article className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-accent/10 text-accent-dark text-xs font-medium px-2 py-1 rounded">Guides débutants</span>
          <time className="text-xs text-text-light">15 mars 2026</time>
          <span className="text-xs text-text-light">• 10 min de lecture</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Les 10 erreurs les plus fréquentes au blackjack
        </h1>

        <p className="text-lg text-text-light leading-relaxed mb-8">
          Même les joueurs expérimentés commettent des erreurs au blackjack. Certaines semblent
          anodines mais coûtent cher sur le long terme. Voici les 10 erreurs les plus courantes
          et comment les corriger.
        </p>

        <div className="space-y-8 mb-12">
          {errors.map((error, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-card-red/5 px-6 py-4 flex items-start gap-4">
                <span className="bg-card-red text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">
                  {i + 1}
                </span>
                <div>
                  <h2 className="font-bold text-lg">{error.title}</h2>
                  <p className="text-sm text-text-light mt-1">{error.desc}</p>
                </div>
              </div>
              <div className="px-6 py-4 bg-primary/5">
                <p className="text-sm"><strong className="text-primary">Solution :</strong> {error.fix}</p>
              </div>
            </div>
          ))}
        </div>

        {/* After error 5 */}
        <LeadForm />

        <div className="my-12 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold mb-4">Résumé : Les règles d&apos;or à retenir</h2>
          <ul className="space-y-2 text-text-light">
            <li>✓ <strong>Toujours</strong> utiliser la <Link href="/strategie-blackjack" className="text-primary hover:text-accent">stratégie de base</Link></li>
            <li>✓ <strong>Toujours</strong> séparer les As et les 8</li>
            <li>✓ <strong>Toujours</strong> fixer un budget et le respecter</li>
            <li>✓ <strong>Toujours</strong> s&apos;entraîner en <Link href="/blackjack-gratuit" className="text-primary hover:text-accent">mode gratuit</Link> d&apos;abord</li>
            <li>✗ <strong>Jamais</strong> prendre l&apos;assurance</li>
            <li>✗ <strong>Jamais</strong> séparer les 10</li>
            <li>✗ <strong>Jamais</strong> utiliser un système de mise progressif</li>
            <li>✗ <strong>Jamais</strong> poursuivre ses pertes</li>
          </ul>
        </div>

        <LeadForm variant="banner" title="Checklist des erreurs à éviter" description="Téléchargez notre aide-mémoire des 10 erreurs en PDF" />

        <FAQSchema items={faq} />
      </article>
    </div>
  );
}
