import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Stratégie Blackjack : Tableau Optimal et Conseils d'Experts",
  description:
    "Maîtrisez la stratégie de base du blackjack avec notre tableau optimal. Conseils avancés, probabilités et erreurs à éviter pour maximiser vos chances.",
  alternates: { canonical: "/strategie-blackjack" },
};

const toc = [
  { id: "introduction", label: "Qu'est-ce que la stratégie de base ?" },
  { id: "tableau", label: "Tableau de stratégie optimale" },
  { id: "mains-dures", label: "Stratégie pour les mains dures" },
  { id: "mains-souples", label: "Stratégie pour les mains souples" },
  { id: "paires", label: "Quand séparer les paires" },
  { id: "avance", label: "Stratégies avancées" },
  { id: "erreurs", label: "Les erreurs les plus courantes" },
  { id: "bankroll", label: "Gestion de bankroll" },
  { id: "faq", label: "Questions fréquentes" },
];

const faq = [
  { question: "La stratégie de base garantit-elle de gagner ?", answer: "Non, la stratégie de base ne garantit pas de gagner. Elle minimise l'avantage de la maison à environ 0,5%, mais le casino conserve toujours un léger avantage. C'est la stratégie mathématiquement optimale sur le long terme." },
  { question: "Combien de temps faut-il pour mémoriser le tableau de stratégie ?", answer: "En pratiquant régulièrement avec un jeu gratuit, la plupart des joueurs mémorisent la stratégie de base en 2 à 4 semaines. Commencez par les mains dures, puis les mains souples, et enfin les paires." },
  { question: "Le comptage de cartes est-il illégal ?", answer: "Le comptage de cartes n'est pas illégal. C'est une technique mentale, pas de la triche. Cependant, les casinos se réservent le droit de refuser les joueurs qu'ils soupçonnent de compter les cartes. En ligne, le comptage est inefficace car les cartes sont mélangées électroniquement." },
  { question: "Faut-il prendre l'assurance ?", answer: "Non, jamais. L'assurance est un pari secondaire avec un avantage de la maison d'environ 7,7%. Même quand le croupier montre un As, refuser l'assurance est la décision mathématiquement optimale." },
];

export default function StrategieBlackjackPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Stratégie blackjack" }]} />

      <article className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Stratégie blackjack : Tableau optimal et conseils d&apos;experts
        </h1>

        <p className="text-lg text-text-light leading-relaxed mb-8">
          La stratégie de base du blackjack est fondée sur les mathématiques et les probabilités.
          En suivant ce tableau optimal, vous pouvez réduire l&apos;avantage de la maison à moins
          de 0,5% — faisant du blackjack le jeu de casino le plus favorable au joueur.
        </p>

        <TableOfContents items={toc} />

        <section id="introduction" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce que la stratégie de base ?</h2>
          <p className="text-text-light leading-relaxed mb-4">
            La stratégie de base du blackjack est un ensemble de décisions mathématiquement optimales
            pour chaque situation possible. Elle a été développée dans les années 1960 par des
            mathématiciens utilisant des simulations informatiques de millions de mains.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            Pour chaque combinaison de votre main et de la carte visible du croupier, la stratégie
            de base indique la meilleure action : <strong>Tirer (T), Rester (R), Doubler (D),
            Séparer (Sp) ou Abandonner (Ab)</strong>.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-sm">
            <strong>Fait mathématique :</strong> Sans stratégie, l&apos;avantage de la maison est
            d&apos;environ 2 à 5%. Avec la stratégie de base, il tombe à environ 0,5%. C&apos;est
            la différence entre perdre 50€ et 5€ sur 1 000€ misés en moyenne.
          </div>
        </section>

        <section id="tableau" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Tableau de stratégie optimale</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Voici le tableau de stratégie de base pour un jeu standard à 4-8 jeux de cartes
            (le croupier reste sur soft 17) :
          </p>

          {/* Hard Hands Table */}
          <h3 className="font-bold text-lg mb-3">Mains dures (Hard Hands)</h3>
          <p className="text-xs text-text-light italic mb-2 sm:hidden">← Faites défiler le tableau →</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-felt text-white">
                <tr>
                  <th className="px-2 py-2 text-left">Votre main</th>
                  <th className="px-2 py-2">2</th>
                  <th className="px-2 py-2">3</th>
                  <th className="px-2 py-2">4</th>
                  <th className="px-2 py-2">5</th>
                  <th className="px-2 py-2">6</th>
                  <th className="px-2 py-2">7</th>
                  <th className="px-2 py-2">8</th>
                  <th className="px-2 py-2">9</th>
                  <th className="px-2 py-2">10</th>
                  <th className="px-2 py-2">As</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-center">
                {[
                  ["17-20", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R"],
                  ["16", "R", "R", "R", "R", "R", "T", "T", "Ab", "Ab", "Ab"],
                  ["15", "R", "R", "R", "R", "R", "T", "T", "T", "Ab", "T"],
                  ["14", "R", "R", "R", "R", "R", "T", "T", "T", "T", "T"],
                  ["13", "R", "R", "R", "R", "R", "T", "T", "T", "T", "T"],
                  ["12", "T", "T", "R", "R", "R", "T", "T", "T", "T", "T"],
                  ["11", "D", "D", "D", "D", "D", "D", "D", "D", "D", "T"],
                  ["10", "D", "D", "D", "D", "D", "D", "D", "D", "T", "T"],
                  ["9", "T", "D", "D", "D", "D", "T", "T", "T", "T", "T"],
                  ["5-8", "T", "T", "T", "T", "T", "T", "T", "T", "T", "T"],
                ].map((row) => (
                  <tr key={row[0]} className="even:bg-gray-50">
                    <td className="px-2 py-2 text-left font-medium">{row[0]}</td>
                    {row.slice(1).map((cell, i) => (
                      <td
                        key={i}
                        className={`px-2 py-2 font-bold ${
                          cell === "R" ? "text-primary" :
                          cell === "T" ? "text-card-red" :
                          cell === "D" ? "text-accent-dark" :
                          cell === "Ab" ? "text-gray-500" : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Soft Hands Table */}
          <h3 className="font-bold text-lg mb-3">Mains souples (Soft Hands)</h3>
          <p className="text-xs text-text-light italic mb-2 sm:hidden">← Faites défiler le tableau →</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-felt text-white">
                <tr>
                  <th className="px-2 py-2 text-left">Votre main</th>
                  <th className="px-2 py-2">2</th>
                  <th className="px-2 py-2">3</th>
                  <th className="px-2 py-2">4</th>
                  <th className="px-2 py-2">5</th>
                  <th className="px-2 py-2">6</th>
                  <th className="px-2 py-2">7</th>
                  <th className="px-2 py-2">8</th>
                  <th className="px-2 py-2">9</th>
                  <th className="px-2 py-2">10</th>
                  <th className="px-2 py-2">As</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-center">
                {[
                  ["A,9", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R"],
                  ["A,8", "R", "R", "R", "R", "D", "R", "R", "R", "R", "R"],
                  ["A,7", "D", "D", "D", "D", "D", "R", "R", "T", "T", "T"],
                  ["A,6", "T", "D", "D", "D", "D", "T", "T", "T", "T", "T"],
                  ["A,5", "T", "T", "D", "D", "D", "T", "T", "T", "T", "T"],
                  ["A,4", "T", "T", "D", "D", "D", "T", "T", "T", "T", "T"],
                  ["A,3", "T", "T", "T", "D", "D", "T", "T", "T", "T", "T"],
                  ["A,2", "T", "T", "T", "D", "D", "T", "T", "T", "T", "T"],
                ].map((row) => (
                  <tr key={row[0]} className="even:bg-gray-50">
                    <td className="px-2 py-2 text-left font-medium">{row[0]}</td>
                    {row.slice(1).map((cell, i) => (
                      <td
                        key={i}
                        className={`px-2 py-2 font-bold ${
                          cell === "R" ? "text-primary" :
                          cell === "T" ? "text-card-red" :
                          cell === "D" ? "text-accent-dark" : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pairs Table */}
          <h3 className="font-bold text-lg mb-3">Paires (Splits)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-felt text-white">
                <tr>
                  <th className="px-2 py-2 text-left">Paire</th>
                  <th className="px-2 py-2">2</th>
                  <th className="px-2 py-2">3</th>
                  <th className="px-2 py-2">4</th>
                  <th className="px-2 py-2">5</th>
                  <th className="px-2 py-2">6</th>
                  <th className="px-2 py-2">7</th>
                  <th className="px-2 py-2">8</th>
                  <th className="px-2 py-2">9</th>
                  <th className="px-2 py-2">10</th>
                  <th className="px-2 py-2">As</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-center">
                {[
                  ["A,A", "Sp", "Sp", "Sp", "Sp", "Sp", "Sp", "Sp", "Sp", "Sp", "Sp"],
                  ["10,10", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R"],
                  ["9,9", "Sp", "Sp", "Sp", "Sp", "Sp", "R", "Sp", "Sp", "R", "R"],
                  ["8,8", "Sp", "Sp", "Sp", "Sp", "Sp", "Sp", "Sp", "Sp", "Sp", "Sp"],
                  ["7,7", "Sp", "Sp", "Sp", "Sp", "Sp", "Sp", "T", "T", "T", "T"],
                  ["6,6", "Sp", "Sp", "Sp", "Sp", "Sp", "T", "T", "T", "T", "T"],
                  ["5,5", "D", "D", "D", "D", "D", "D", "D", "D", "T", "T"],
                  ["4,4", "T", "T", "T", "Sp", "Sp", "T", "T", "T", "T", "T"],
                  ["3,3", "Sp", "Sp", "Sp", "Sp", "Sp", "Sp", "T", "T", "T", "T"],
                  ["2,2", "Sp", "Sp", "Sp", "Sp", "Sp", "Sp", "T", "T", "T", "T"],
                ].map((row) => (
                  <tr key={row[0]} className="even:bg-gray-50">
                    <td className="px-2 py-2 text-left font-medium">{row[0]}</td>
                    {row.slice(1).map((cell, i) => (
                      <td
                        key={i}
                        className={`px-2 py-2 font-bold ${
                          cell === "R" ? "text-primary" :
                          cell === "T" ? "text-card-red" :
                          cell === "D" ? "text-accent-dark" :
                          cell === "Sp" ? "text-blue-600" : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap gap-4 mt-4 text-xs">
            <span><span className="font-bold text-card-red">T</span> = Tirer</span>
            <span><span className="font-bold text-primary">R</span> = Rester</span>
            <span><span className="font-bold text-accent-dark">D</span> = Doubler</span>
            <span><span className="font-bold text-blue-600">Sp</span> = Séparer</span>
            <span><span className="font-bold text-gray-500">Ab</span> = Abandonner</span>
          </div>
        </section>

        <LeadForm
          title="Téléchargez ce tableau en PDF"
          description="Format imprimable pour l'avoir toujours sous les yeux pendant vos parties"
        />

        <section id="mains-dures" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Stratégie pour les mains dures</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Les mains dures sont les plus fréquentes. Voici les principes clés :
          </p>
          <ul className="space-y-2 text-text-light">
            <li>• <strong>Total 17 ou plus</strong> — Restez toujours. Le risque de sauter est trop élevé.</li>
            <li>• <strong>Total 12-16</strong> — Restez si le croupier montre 2-6 (il risque de sauter). Tirez si le croupier montre 7 ou plus.</li>
            <li>• <strong>Total 11</strong> — Doublez presque toujours. C&apos;est la meilleure situation pour doubler.</li>
            <li>• <strong>Total 10</strong> — Doublez si le croupier montre 2-9.</li>
            <li>• <strong>Total 9</strong> — Doublez si le croupier montre 3-6.</li>
            <li>• <strong>Total 8 ou moins</strong> — Tirez toujours.</li>
          </ul>
        </section>

        <section id="mains-souples" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Stratégie pour les mains souples</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Les mains souples (contenant un As compté comme 11) offrent plus de flexibilité :
          </p>
          <ul className="space-y-2 text-text-light">
            <li>• <strong>Soft 19-20</strong> — Restez toujours.</li>
            <li>• <strong>Soft 18</strong> — Doublez contre 3-6, restez contre 2, 7, 8. Tirez contre 9, 10, As.</li>
            <li>• <strong>Soft 17</strong> — Doublez contre 3-6, sinon tirez.</li>
            <li>• <strong>Soft 15-16</strong> — Doublez contre 4-6, sinon tirez.</li>
            <li>• <strong>Soft 13-14</strong> — Doublez contre 5-6, sinon tirez.</li>
          </ul>
        </section>

        <section id="paires" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Quand séparer les paires</h2>
          <p className="text-text-light leading-relaxed mb-4">
            La séparation des paires est souvent la décision la plus complexe. Retenez ces règles essentielles :
          </p>
          <ul className="space-y-2 text-text-light">
            <li>• <strong>Toujours séparer les As</strong> — Deux mains commençant à 11, c&apos;est idéal.</li>
            <li>• <strong>Toujours séparer les 8</strong> — Un total de 16 est la pire main au blackjack.</li>
            <li>• <strong>Ne jamais séparer les 10</strong> — Un total de 20 est excellent, ne le cassez pas.</li>
            <li>• <strong>Ne jamais séparer les 5</strong> — Un total de 10 est parfait pour doubler.</li>
          </ul>
        </section>

        <section id="avance" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Stratégies avancées</h2>
          <h3 className="font-bold text-lg mb-3">Le comptage de cartes</h3>
          <p className="text-text-light leading-relaxed mb-4">
            Le comptage de cartes est une technique qui consiste à suivre le ratio de cartes hautes
            et basses restant dans le sabot. Le système Hi-Lo est le plus connu :
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-felt text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Cartes</th>
                  <th className="px-4 py-3 text-left">Valeur de comptage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3">2, 3, 4, 5, 6</td><td className="px-4 py-3 text-primary font-bold">+1</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3">7, 8, 9</td><td className="px-4 py-3 font-bold">0</td></tr>
                <tr><td className="px-4 py-3">10, V, D, R, As</td><td className="px-4 py-3 text-card-red font-bold">-1</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mb-4">
            <strong>Important :</strong> Le comptage de cartes ne fonctionne qu&apos;en casino
            physique avec un sabot non mélangé en permanence. En ligne, les RNG rendent cette
            technique inefficace.
          </p>

          <h3 className="font-bold text-lg mb-3">Choisir les bonnes tables</h3>
          <p className="text-text-light leading-relaxed">
            Les règles de la table ont un impact significatif sur l&apos;avantage de la maison.
            Privilégiez : blackjack payé 3:2, croupier reste sur soft 17, doublement sur n&apos;importe
            quelles cartes, abandon tardif disponible, et le moins de jeux de cartes possible.
          </p>
        </section>

        <section id="erreurs" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Les erreurs les plus courantes</h2>
          <ol className="list-decimal list-inside space-y-3 text-text-light">
            <li><strong>Prendre l&apos;assurance</strong> — C&apos;est un pari avec 7,7% d&apos;avantage pour la maison.</li>
            <li><strong>Rester sur 16 contre un 10</strong> — Tirer est statistiquement meilleur (ou abandonner si possible).</li>
            <li><strong>Ne pas séparer les 8</strong> — 16 est la pire main, deux mains de 8 sont meilleures.</li>
            <li><strong>Jouer au « feeling »</strong> — Les intuitions sont moins efficaces que les mathématiques.</li>
            <li><strong>Augmenter les mises après des pertes</strong> — Le système Martingale ne fonctionne pas à long terme.</li>
            <li><strong>Chercher à atteindre 21</strong> — L&apos;objectif est de battre le croupier, pas d&apos;atteindre 21.</li>
          </ol>
        </section>

        <section id="bankroll" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Gestion de bankroll</h2>
          <p className="text-text-light leading-relaxed mb-4">
            La gestion de votre capital est aussi importante que la stratégie de jeu :
          </p>
          <ul className="space-y-2 text-text-light">
            <li>• <strong>Définissez un budget fixe</strong> — Ne jouez jamais avec de l&apos;argent que vous ne pouvez pas perdre.</li>
            <li>• <strong>Misez 1 à 2% de votre bankroll par main</strong> — Cela vous permet de survivre aux séries de pertes.</li>
            <li>• <strong>Fixez des limites de gains et de pertes</strong> — Arrêtez-vous quand vous atteignez votre objectif ou votre limite.</li>
            <li>• <strong>Ne poursuivez jamais vos pertes</strong> — C&apos;est la règle d&apos;or du jeu responsable.</li>
          </ul>
          <p className="text-sm text-text-light mt-4">
            Pour plus d&apos;informations sur le jeu responsable, consultez notre{" "}
            <Link href="/jeu-responsable" className="text-primary hover:text-accent">page dédiée</Link>.
          </p>
        </section>

        <LeadForm variant="banner" title="Tableau de stratégie imprimable" description="Recevez le tableau complet en PDF haute résolution + guide des erreurs à éviter" />

        <section id="faq">
          <FAQSchema items={faq} />
        </section>
      </article>
    </div>
  );
}
