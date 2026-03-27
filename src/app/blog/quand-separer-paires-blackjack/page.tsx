import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Quand Séparer les Paires au Blackjack : Guide Complet",
  description:
    "Maîtrisez la séparation des paires au blackjack. Pour chaque paire de 2-2 à A-A, découvrez exactement quand séparer selon la carte du croupier.",
  alternates: { canonical: "/blog/quand-separer-paires-blackjack" },
};

const faq = [
  {
    question: "Pourquoi faut-il toujours séparer les As au blackjack ?",
    answer:
      "Un total de 12 (deux As) est une main faible. En séparant, vous obtenez deux mains commençant par 11, le meilleur point de départ possible. Chaque As séparé a 31% de chances de recevoir un 10 pour un total de 21. Ne pas séparer les As est l'une des erreurs les plus coûteuses au blackjack.",
  },
  {
    question: "Pourquoi ne faut-il jamais séparer les 10 au blackjack ?",
    answer:
      "Un total de 20 gagne contre presque toutes les mains du croupier. En séparant, vous échangez une victoire quasi certaine contre deux mains incertaines. Même face à un croupier avec un 6, séparer les 10 rapporte moins sur le long terme que rester à 20.",
  },
  {
    question: "Faut-il séparer les 8 face à un As du croupier ?",
    answer:
      "Oui, même face à un As. Un total de 16 est la pire main au blackjack — vous perdez dans plus de 75% des cas. Deux mains de 8 sont nettement meilleures. Vous perdrez encore souvent face à l'As, mais moins qu'avec un 16. C'est une question de minimiser les pertes.",
  },
  {
    question: "Combien la séparation correcte réduit-elle l'avantage de la maison ?",
    answer:
      "La séparation optimale des paires réduit l'avantage de la maison d'environ 0,4 à 0,5%. Cela peut sembler modeste, mais sur 1 000€ misés, cela représente 4 à 5€ d'économie. Sur une année de jeu régulier, la différence atteint plusieurs centaines d'euros.",
  },
];

const tocItems = [
  { id: "principe-separation", label: "Le principe de la séparation" },
  { id: "toujours-separer", label: "Toujours séparer : As et 8" },
  { id: "jamais-separer", label: "Jamais séparer : 10, 5 et 4" },
  { id: "paires-conditionnelles", label: "Les paires conditionnelles" },
  { id: "role-carte-croupier", label: "Le rôle de la carte du croupier" },
  { id: "tableau-complet", label: "Tableau complet de séparation" },
];

export default function SeparerPairesBlackjackPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Séparer les paires au blackjack" },
        ]}
      />

      <article className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-accent/10 text-accent-dark text-xs font-medium px-2 py-1 rounded">
            Stratégies
          </span>
          <time className="text-xs text-text-light">16 mars 2026</time>
          <span className="text-xs text-text-light">• 10 min de lecture</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Quand séparer les paires au blackjack : guide complet
        </h1>

        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/blog/separer-paires.jpg"
            alt="Deux cartes identiques séparées sur une table de blackjack avec des jetons"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>

        <p className="text-lg text-text-light leading-relaxed mb-8">
          La séparation des paires est l&apos;une des décisions les plus mal comprises au
          blackjack. Quand vous recevez deux cartes identiques, vous avez la possibilité de
          les séparer en deux mains distinctes. Bien maîtrisée, cette option réduit
          significativement l&apos;avantage de la maison. Mal appliquée, elle double vos pertes.
        </p>

        <TableOfContents items={tocItems} />

        {/* Section 1 */}
        <h2 id="principe-separation" className="text-2xl font-bold mt-10 mb-4">
          Le principe de la séparation des paires
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Quand vos deux premières cartes sont identiques (deux 7, deux Valets, deux As...),
          vous pouvez poser une mise supplémentaire égale à votre mise initiale et séparer la
          paire en deux mains indépendantes. Chaque main reçoit alors une nouvelle carte et
          se joue séparément.
        </p>

        <p className="text-text-light leading-relaxed mb-4">
          La logique derrière la séparation est double. Premièrement, certaines paires forment
          un total défavorable qu&apos;il vaut mieux diviser (comme 8-8 = 16). Deuxièmement,
          certaines cartes sont si fortes individuellement qu&apos;il est préférable de les utiliser
          comme base pour deux mains (comme les As). La{" "}
          <Link href="/strategie-blackjack" className="text-primary hover:text-accent underline">
            stratégie de base
          </Link>{" "}
          indique précisément quand séparer selon votre paire et la carte visible du croupier.
        </p>

        <p className="text-text-light leading-relaxed mb-4">
          Attention : la séparation implique toujours une mise supplémentaire. Si vous misez 10€
          et séparez, vous avez désormais 20€ en jeu. Cette réalité financière rend la décision
          parfois anxiogène, surtout face à des situations contre-intuitives comme séparer des 8
          face à un 10 du croupier.
        </p>

        {/* Section 2 */}
        <h2 id="toujours-separer" className="text-2xl font-bold mt-10 mb-4">
          Toujours séparer : les As et les 8
        </h2>

        <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 mb-6">
          <h3 className="font-bold text-lg mb-3">Les As — La paire la plus précieuse</h3>
          <p className="text-text-light text-sm leading-relaxed">
            Deux As ensemble valent 12 (un As compte 11, l&apos;autre 1). C&apos;est une main
            difficile à jouer. En séparant, vous créez deux mains commençant par 11, le meilleur
            départ possible. Chaque As a environ 31% de chances de recevoir un 10 pour faire 21.
            La séparation des As est si puissante que la plupart des casinos imposent une restriction :
            une seule carte par As séparé. Malgré cette limitation, séparer reste la décision
            optimale dans 100% des cas, quelle que soit la carte du croupier.
          </p>
        </div>

        <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 mb-6">
          <h3 className="font-bold text-lg mb-3">Les 8 — La paire de survie</h3>
          <p className="text-text-light text-sm leading-relaxed">
            Deux 8 forment un total de 16, statistiquement la pire main au blackjack. Vous
            ne pouvez pas rester confortablement (le croupier fait mieux que 16 dans environ 70%
            des cas) et tirer est risqué (environ 62% de chances de sauter). En séparant, vous
            transformez cette main catastrophique en deux mains de 8, qui sont jouables. Oui,
            même face à un 10 ou un As du croupier, la séparation des 8 reste correcte — non
            pas parce que vous allez gagner, mais parce que vous perdrez moins.
          </p>
        </div>

        <LeadForm />

        {/* Section 3 */}
        <h2 id="jamais-separer" className="text-2xl font-bold mt-10 mb-4">
          Jamais séparer : les 10, les 5 et les 4
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Certaines paires ne devraient jamais être séparées, quelle que soit la carte du croupier :
        </p>

        <div className="space-y-4 mb-6">
          <div className="border-l-4 border-primary pl-4">
            <p className="font-bold text-sm">Paire de 10 (10, Valet, Dame, Roi) — Total : 20</p>
            <p className="text-text-light text-sm mt-1">
              Vous avez déjà l&apos;une des meilleures mains possibles. Un total de 20 ne perd que
              face à un 21 du croupier. Séparer pour « tenter de faire deux fois 20 » est un piège :
              statistiquement, vous gagnerez moins avec deux mains de 10 qu&apos;avec une main de 20.
              C&apos;est l&apos;erreur du joueur gourmand.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <p className="font-bold text-sm">Paire de 5 — Total : 10</p>
            <p className="text-text-light text-sm mt-1">
              Un total de 10 est une excellente main pour doubler (face au croupier montrant 2 à 9).
              Deux mains commençant par 5 sont faibles. Traitez une paire de 5 comme un total de 10,
              jamais comme une paire à séparer.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <p className="font-bold text-sm">Paire de 4 — Total : 8</p>
            <p className="text-text-light text-sm mt-1">
              Un total de 8 est raisonnable et peut s&apos;améliorer facilement avec un tirage.
              Deux mains de 4 sont très vulnérables. La seule exception marginale : face à un
              5 ou 6 du croupier dans certaines variantes, mais la différence est si mince que
              la règle « ne pas séparer les 4 » reste valable pour la grande majorité des joueurs.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <h2 id="paires-conditionnelles" className="text-2xl font-bold mt-10 mb-4">
          Les paires conditionnelles : ça dépend du croupier
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Les paires restantes — 2, 3, 6, 7 et 9 — se séparent uniquement dans certaines
          conditions, selon la carte visible du croupier. Voici l&apos;analyse détaillée :
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <p className="font-bold text-sm mb-1">Paire de 2 et paire de 3</p>
            <p className="text-text-light text-sm">
              Séparez face au croupier montrant 2 à 7. Ces cartes basses donnent au croupier une
              probabilité de sauter entre 35% et 42%. Vos mains individuelles de 2 ou 3 peuvent
              s&apos;améliorer significativement. Face à un 8 ou plus, le risque est trop grand :
              tirez simplement.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <p className="font-bold text-sm mb-1">Paire de 6</p>
            <p className="text-text-light text-sm">
              Séparez face au croupier montrant 2 à 6. Un total de 12 est défavorable, et deux mains
              de 6 peuvent mieux exploiter la faiblesse du croupier. Face à un 7 ou plus, restez
              avec votre 12 et espérez que le croupier saute.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <p className="font-bold text-sm mb-1">Paire de 7</p>
            <p className="text-text-light text-sm">
              Séparez face au croupier montrant 2 à 7. Avec un total de 14, votre situation est
              délicate. Deux mains de 7 offrent de meilleures perspectives, surtout quand le
              croupier est en difficulté. Face à un 8 ou plus, le croupier est trop fort —
              tirez sur votre 14.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <p className="font-bold text-sm mb-1">Paire de 9</p>
            <p className="text-text-light text-sm">
              Séparez face au croupier montrant 2 à 6, puis 8 et 9. Restez face à un 7 (votre 18
              bat probablement le 17 probable du croupier), un 10 ou un As. C&apos;est l&apos;une
              des décisions les plus subtiles car elle semble contre-intuitive : pourquoi séparer
              un bon 18 ? Parce que face à un croupier faible, deux mains de 9 rapportent encore
              plus.
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <h2 id="role-carte-croupier" className="text-2xl font-bold mt-10 mb-4">
          Le rôle crucial de la carte du croupier
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          La carte visible du croupier est le facteur déterminant de votre décision de séparation.
          Voici comment les regrouper selon les{" "}
          <Link href="/regles-blackjack" className="text-primary hover:text-accent underline">
            règles du blackjack
          </Link>{" "}
          :
        </p>

        <ul className="list-disc pl-6 space-y-3 text-text-light mb-6">
          <li>
            <strong>Croupier montre 2 à 6 (cartes faibles) :</strong> le croupier a entre 35% et
            42% de chances de sauter. C&apos;est le moment idéal pour séparer agressivement et
            maximiser le nombre de mains en jeu.
          </li>
          <li>
            <strong>Croupier montre 7 :</strong> zone de transition. Le croupier fera probablement
            17, une main modeste. Séparez les 2, 3, 7 et bien sûr les 8 et As.
          </li>
          <li>
            <strong>Croupier montre 8 ou 9 :</strong> le croupier est en bonne position. Limitez
            les séparations aux As, 8 et 9 (face au 8-9 pour les 9).
          </li>
          <li>
            <strong>Croupier montre 10 ou As :</strong> situation défavorable. Ne séparez que les
            As et les 8 — les deux seules paires qui restent optimales quelle que soit la carte
            du croupier.
          </li>
        </ul>

        {/* Section 6 */}
        <h2 id="tableau-complet" className="text-2xl font-bold mt-10 mb-4">
          Tableau complet de séparation des paires
        </h2>

        <p className="text-text-light leading-relaxed mb-4">
          Ce tableau résume toutes les décisions de séparation selon la stratégie de base.
          « S » signifie séparer, « N » signifie ne pas séparer.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-2 py-2 text-left rounded-tl-lg">Paire</th>
                <th className="px-2 py-2">2</th>
                <th className="px-2 py-2">3</th>
                <th className="px-2 py-2">4</th>
                <th className="px-2 py-2">5</th>
                <th className="px-2 py-2">6</th>
                <th className="px-2 py-2">7</th>
                <th className="px-2 py-2">8</th>
                <th className="px-2 py-2">9</th>
                <th className="px-2 py-2">10</th>
                <th className="px-2 py-2 rounded-tr-lg">As</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-center">
              <tr className="bg-white"><td className="px-2 py-2 text-left font-medium">A-A</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td></tr>
              <tr className="bg-gray-50"><td className="px-2 py-2 text-left font-medium">10-10</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td></tr>
              <tr className="bg-white"><td className="px-2 py-2 text-left font-medium">9-9</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td>N</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td>N</td><td>N</td></tr>
              <tr className="bg-gray-50"><td className="px-2 py-2 text-left font-medium">8-8</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td></tr>
              <tr className="bg-white"><td className="px-2 py-2 text-left font-medium">7-7</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td>N</td><td>N</td><td>N</td><td>N</td></tr>
              <tr className="bg-gray-50"><td className="px-2 py-2 text-left font-medium">6-6</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td></tr>
              <tr className="bg-white"><td className="px-2 py-2 text-left font-medium">5-5</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td></tr>
              <tr className="bg-gray-50"><td className="px-2 py-2 text-left font-medium">4-4</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td></tr>
              <tr className="bg-white"><td className="px-2 py-2 text-left font-medium">3-3</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td>N</td><td>N</td><td>N</td><td>N</td></tr>
              <tr className="bg-gray-50"><td className="px-2 py-2 text-left font-medium">2-2</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td className="text-primary font-bold">S</td><td>N</td><td>N</td><td>N</td><td>N</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-text-light leading-relaxed mb-4">
          Mémorisez d&apos;abord les règles absolues (toujours séparer As et 8, jamais séparer
          10, 5 et 4), puis apprenez progressivement les paires conditionnelles. Avec de la
          pratique, ces décisions deviendront automatiques.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-8">
          <h3 className="font-bold text-lg mb-3">En résumé</h3>
          <p className="text-text-light text-sm leading-relaxed">
            La séparation correcte des paires est un pilier de la{" "}
            <Link href="/strategie-blackjack" className="text-primary hover:text-accent underline">
              stratégie de base
            </Link>
            . Elle réduit l&apos;avantage de la maison d&apos;environ 0,5% et transforme des
            situations défavorables en opportunités. Ne laissez pas l&apos;émotion guider vos
            décisions : les mathématiques sont sans appel.
          </p>
        </div>

        <FAQSchema items={faq} />

        <LeadForm variant="banner" />
      </article>
    </div>
  );
}
