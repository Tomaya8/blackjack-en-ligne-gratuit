import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Blackjack Américain : Règles, Stratégie et Guide Complet",
  description:
    "Guide complet du blackjack américain : règles avec carte cachée, stratégie optimale, avantages et différences avec le blackjack européen.",
  alternates: { canonical: "/blackjack-americain" },
};

const toc = [
  { id: "introduction", label: "Qu'est-ce que le blackjack américain ?" },
  { id: "regles", label: "Règles du blackjack américain" },
  { id: "hole-card", label: "La règle de la carte cachée" },
  { id: "differences", label: "Différences avec les autres variantes" },
  { id: "avantages", label: "Avantages et inconvénients" },
  { id: "strategie", label: "Stratégie optimale" },
  { id: "faq", label: "Questions fréquentes" },
];

const faq = [
  { question: "Le blackjack américain est-il meilleur que l'européen ?", answer: "Du point de vue mathématique, le blackjack américain offre généralement un avantage de la maison légèrement inférieur (0,4-0,5% contre 0,6%) grâce à la règle de la carte cachée et aux options supplémentaires comme le surrender." },
  { question: "Qu'est-ce que le 'peek' au blackjack américain ?", answer: "Le 'peek' (ou vérification) est le moment où le croupier vérifie s'il a un blackjack lorsque sa carte visible est un As ou un 10. Si oui, la main se termine immédiatement, protégeant les joueurs qui ont doublé ou séparé." },
  { question: "Combien de jeux de cartes utilise le blackjack américain ?", answer: "Le blackjack américain se joue généralement avec 6 à 8 jeux de cartes, distribués depuis un sabot. Certaines tables à 1 ou 2 jeux existent mais sont plus rares et ont souvent des règles moins favorables pour compenser." },
];

export default function BlackjackAmericainPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Variantes", href: "/blackjack-en-ligne" }, { label: "Blackjack américain" }]} />

      <article className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Blackjack américain : Règles, stratégie et guide complet
        </h1>

        <p className="text-lg text-text-light leading-relaxed mb-8">
          Le blackjack américain est la variante la plus populaire au monde. Sa caractéristique
          distinctive — la carte cachée du croupier — crée une dynamique de jeu unique et offre
          des opportunités stratégiques supplémentaires.
        </p>

        <TableOfContents items={toc} />

        <section id="introduction" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce que le blackjack américain ?</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Le blackjack américain, aussi appelé « Classic Blackjack » ou « Vegas Strip Blackjack »,
            est la version standard jouée dans les casinos de Las Vegas et dans la majorité des
            casinos en ligne. C&apos;est la variante de référence pour la stratégie de base.
          </p>
          <p className="text-text-light leading-relaxed">
            Sa particularité clé : le croupier reçoit deux cartes dès le départ, dont une face
            cachée (la « hole card »). Cette règle protège le joueur car le croupier vérifie
            immédiatement s&apos;il a un blackjack.
          </p>
        </section>

        <section id="regles" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Règles du blackjack américain</h2>
          <ul className="space-y-3 text-text-light">
            <li>• <strong>6 à 8 jeux de cartes</strong> — Distribués depuis un sabot.</li>
            <li>• <strong>Carte cachée (hole card)</strong> — Le croupier reçoit une carte face visible et une face cachée.</li>
            <li>• <strong>Doublement sur toute main</strong> — Vous pouvez doubler quel que soit votre total.</li>
            <li>• <strong>Séparation jusqu&apos;à 4 mains</strong> — Possibilité de re-séparer les paires.</li>
            <li>• <strong>Late surrender</strong> — Abandon possible après que le croupier a vérifié son blackjack.</li>
            <li>• <strong>Blackjack paie 3:2</strong> — Sur les bonnes tables (évitez le 6:5).</li>
            <li>• <strong>Assurance proposée</strong> — Pari secondaire quand le croupier montre un As.</li>
          </ul>
        </section>

        <section id="hole-card" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">La règle de la carte cachée</h2>
          <p className="text-text-light leading-relaxed mb-4">
            La carte cachée (hole card) est l&apos;élément central du blackjack américain. Voici
            comment cela fonctionne :
          </p>
          <ol className="list-decimal list-inside space-y-3 text-text-light">
            <li>Le croupier reçoit une carte face visible et une face cachée.</li>
            <li>Si la carte visible est un As ou un 10, le croupier vérifie sa carte cachée.</li>
            <li>S&apos;il a un blackjack, la main se termine immédiatement.</li>
            <li>Les joueurs qui n&apos;ont pas de blackjack perdent uniquement leur mise initiale (pas les doubles ou splits).</li>
          </ol>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-sm mt-4">
            <strong>Avantage clé :</strong> Cette règle protège vos mises supplémentaires (doubles
            et splits). Au blackjack européen, vous pourriez perdre vos mises de doublement si le
            croupier révèle un blackjack ensuite.
          </div>
        </section>

        <LeadForm />

        <section id="differences" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Différences avec les autres variantes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-felt text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Règle</th>
                  <th className="px-4 py-3 text-left">Américain</th>
                  <th className="px-4 py-3 text-left">Européen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 font-medium">Jeux de cartes</td><td className="px-4 py-3 text-text-light">6-8</td><td className="px-4 py-3 text-text-light">2</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Hole card</td><td className="px-4 py-3 text-primary font-bold">Oui</td><td className="px-4 py-3 text-card-red font-bold">Non</td></tr>
                <tr><td className="px-4 py-3 font-medium">Double sur</td><td className="px-4 py-3 text-text-light">Toute main</td><td className="px-4 py-3 text-text-light">9, 10, 11</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Surrender</td><td className="px-4 py-3 text-primary font-bold">Oui (late)</td><td className="px-4 py-3 text-card-red font-bold">Non</td></tr>
                <tr><td className="px-4 py-3 font-medium">Re-split</td><td className="px-4 py-3 text-primary font-bold">Oui</td><td className="px-4 py-3 text-card-red font-bold">Non</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="avantages" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Avantages et inconvénients</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-primary mb-3">Avantages</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>✓ Carte cachée protège les mises supplémentaires</li>
                <li>✓ Doublement sur toute main</li>
                <li>✓ Option surrender disponible</li>
                <li>✓ Avantage maison plus faible</li>
                <li>✓ La variante la mieux documentée</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-card-red mb-3">Inconvénients</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>✗ Plus de jeux de cartes (6-8)</li>
                <li>✗ Certaines tables paient 6:5</li>
                <li>✗ L&apos;assurance est tentante mais défavorable</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="strategie" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Stratégie optimale pour le blackjack américain</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Le blackjack américain est la variante pour laquelle la stratégie de base a été
            initialement développée. Les tableaux standard s&apos;appliquent directement.
          </p>
          <ul className="space-y-2 text-text-light">
            <li>• Consultez le <Link href="/strategie-blackjack" className="text-primary hover:text-accent">tableau de stratégie complet</Link></li>
            <li>• Profitez du surrender quand il est disponible (16 contre 9, 10, As)</li>
            <li>• Doublez agressivement quand les conditions sont favorables</li>
            <li>• Séparez toujours les As et les 8</li>
            <li>• Refusez toujours l&apos;assurance</li>
          </ul>
        </section>

        <LeadForm variant="banner" />

        <section id="faq">
          <FAQSchema items={faq} />
        </section>
      </article>
    </div>
  );
}
