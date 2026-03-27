import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Blackjack Live : Jouez avec de Vrais Croupiers en Direct",
  description:
    "Guide complet du blackjack live : comment ça marche, avantages, meilleurs fournisseurs et conseils pour une expérience immersive avec de vrais croupiers.",
  alternates: { canonical: "/blackjack-live" },
};

const toc = [
  { id: "introduction", label: "Qu'est-ce que le blackjack live ?" },
  { id: "fonctionnement", label: "Comment fonctionne le blackjack live" },
  { id: "avantages", label: "Avantages et inconvénients" },
  { id: "fournisseurs", label: "Les principaux fournisseurs" },
  { id: "strategie", label: "Stratégie au blackjack live" },
  { id: "faq", label: "Questions fréquentes" },
];

const faq = [
  { question: "Le blackjack live est-il truqué ?", answer: "Les tables de blackjack live des fournisseurs régulés (Evolution, Pragmatic Play Live) sont filmées en continu et auditées par des organismes indépendants. Les cartes sont de vraies cartes physiques, rendant la manipulation extrêmement difficile et détectable." },
  { question: "Peut-on jouer au blackjack live gratuitement ?", answer: "Malheureusement, le blackjack live n'est généralement pas disponible en mode gratuit car il nécessite de vrais croupiers. Certaines plateformes permettent de regarder les tables sans jouer pour se familiariser avec l'expérience." },
  { question: "Quelle connexion internet faut-il pour le blackjack live ?", answer: "Une connexion stable d'au moins 5 Mbps est recommandée pour un streaming fluide en haute qualité. Le Wi-Fi ou la 4G/5G sont suffisants. Évitez les connexions instables pour ne pas risquer de perdre une main en cours." },
  { question: "Le comptage de cartes fonctionne-t-il au blackjack live ?", answer: "En théorie oui, car de vraies cartes sont utilisées. Cependant, la plupart des tables live utilisent des sabots de 8 jeux avec une pénétration de 50-60%, rendant le comptage peu rentable. De plus, les logiciels peuvent détecter les schémas de mise." },
];

export default function BlackjackLivePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Variantes", href: "/blackjack-en-ligne" }, { label: "Blackjack live" }]} />

      <article className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Blackjack live : Jouez avec de vrais croupiers en direct
        </h1>

        <p className="text-lg text-text-light leading-relaxed mb-8">
          Le blackjack live combine le meilleur du casino physique et du jeu en ligne : de vrais
          croupiers, de vraies cartes, le tout filmé en haute définition et accessible depuis
          chez vous. Découvrez comment fonctionne cette expérience immersive.
        </p>

        <TableOfContents items={toc} />

        <section id="introduction" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce que le blackjack live ?</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Le blackjack live (ou blackjack en direct) est une expérience de jeu en ligne où de
            vrais croupiers professionnels distribuent de vraies cartes sur de vraies tables, le
            tout filmé en streaming haute définition depuis des studios professionnels.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            Les joueurs participent via leur ordinateur ou mobile, prenant leurs décisions à
            l&apos;aide d&apos;une interface numérique tout en regardant le croupier en temps réel.
            Un chat en direct permet d&apos;interagir avec le croupier et les autres joueurs.
          </p>
          <p className="text-text-light leading-relaxed">
            Cette technologie a explosé ces dernières années, devenant l&apos;un des segments les
            plus populaires du casino en ligne. Elle répond à la demande des joueurs qui recherchent
            l&apos;authenticité du casino sans se déplacer.
          </p>
        </section>

        <section id="fonctionnement" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Comment fonctionne le blackjack live</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <span className="bg-accent text-card-black font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">1</span>
              <div>
                <h3 className="font-bold">Streaming en direct</h3>
                <p className="text-sm text-text-light">Des caméras HD filment la table, les cartes et le croupier sous plusieurs angles. La qualité vidéo est généralement en 1080p.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-accent text-card-black font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">2</span>
              <div>
                <h3 className="font-bold">Interface de jeu</h3>
                <p className="text-sm text-text-light">Vous prenez vos décisions via des boutons (Hit, Stand, Double, Split) superposés sur le flux vidéo. Le temps de décision est limité (15-25 secondes).</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-accent text-card-black font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">3</span>
              <div>
                <h3 className="font-bold">Reconnaissance optique (OCR)</h3>
                <p className="text-sm text-text-light">La technologie OCR lit automatiquement les cartes distribuées et met à jour l&apos;interface en temps réel. Cela garantit la précision.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-accent text-card-black font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">4</span>
              <div>
                <h3 className="font-bold">Chat en direct</h3>
                <p className="text-sm text-text-light">Interagissez avec le croupier et les autres joueurs grâce au chat intégré. Les croupiers sont formés pour parler plusieurs langues, dont le français.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="avantages" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Avantages et inconvénients</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-primary mb-3">Avantages</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>✓ Authenticité — vraies cartes, vrai croupier</li>
                <li>✓ Transparence — tout est visible en direct</li>
                <li>✓ Interaction sociale avec le croupier</li>
                <li>✓ Ambiance de casino depuis chez vous</li>
                <li>✓ Tables VIP et high roller disponibles</li>
                <li>✓ Horaires étendus (souvent 24h/24)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-card-red mb-3">Inconvénients</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>✗ Pas de mode gratuit</li>
                <li>✗ Mises minimales plus élevées</li>
                <li>✗ Nécessite une bonne connexion internet</li>
                <li>✗ Rythme imposé par le croupier</li>
                <li>✗ Temps de décision limité</li>
              </ul>
            </div>
          </div>
        </section>

        <LeadForm />

        <section id="fournisseurs" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Les principaux fournisseurs de blackjack live</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Plusieurs studios spécialisés produisent les jeux de blackjack live que vous retrouvez
            sur les différentes plateformes :
          </p>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-bold mb-2">Evolution Gaming</h3>
              <p className="text-sm text-text-light">Le leader incontesté du casino live. Propose des dizaines de tables de blackjack avec des variantes innovantes comme Lightning Blackjack, Infinite Blackjack et Speed Blackjack.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-bold mb-2">Pragmatic Play Live</h3>
              <p className="text-sm text-text-light">Challenger d&apos;Evolution avec des tables de qualité et des mises souvent plus accessibles. Studios basés en Europe.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-bold mb-2">Playtech Live</h3>
              <p className="text-sm text-text-light">Pionnier du casino en direct avec une offre complète de tables de blackjack, incluant des tables en français.</p>
            </div>
          </div>
        </section>

        <section id="strategie" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Stratégie au blackjack live</h2>
          <p className="text-text-light leading-relaxed mb-4">
            La stratégie de base s&apos;applique exactement de la même façon au blackjack live.
            Quelques conseils spécifiques :
          </p>
          <ul className="space-y-2 text-text-light">
            <li>• <strong>Préparez vos décisions</strong> — Le temps est limité. Connaissez le <Link href="/strategie-blackjack" className="text-primary hover:text-accent">tableau de stratégie</Link> par cœur.</li>
            <li>• <strong>Choisissez le bon nombre de places</strong> — En mode « Bet Behind », vous pouvez miser sur la main d&apos;un autre joueur.</li>
            <li>• <strong>Attention aux paris secondaires</strong> — Perfect Pairs, 21+3, etc. ont un avantage de la maison élevé (2-10%).</li>
            <li>• <strong>Gérez votre bankroll</strong> — Les mises minimales sont souvent de 5-10€ minimum.</li>
          </ul>
        </section>

        <LeadForm variant="banner" title="Maîtrisez le blackjack live" description="Recevez nos conseils exclusifs et le tableau de stratégie en PDF" />

        <section id="faq">
          <FAQSchema items={faq} />
        </section>
      </article>
    </div>
  );
}
