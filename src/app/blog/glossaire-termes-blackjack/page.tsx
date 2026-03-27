import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Glossaire du Blackjack : Tous les Termes à Connaître",
  description:
    "Dictionnaire complet du blackjack : plus de 30 termes expliqués en français. Hit, Stand, Split, Double, Bust, Push, Shoe, Insurance et bien plus.",
  alternates: { canonical: "/blog/glossaire-termes-blackjack" },
};

const faqs = [
  {
    question: "Quelle est la différence entre une main « soft » et une main « hard » ?",
    answer:
      "Une main soft contient un As compté comme 11 (par exemple As + 6 = soft 17). Elle est flexible car l'As peut passer à 1 si vous tirez une carte haute. Une main hard ne contient pas d'As ou possède un As obligatoirement compté comme 1. La distinction est cruciale car la stratégie de base diffère selon le type de main.",
  },
  {
    question: "Pourquoi le paiement 3:2 est-il si important au blackjack ?",
    answer:
      "Le paiement 3:2 pour un blackjack naturel (contre 6:5 sur certaines tables) réduit considérablement l'avantage de la maison. Avec un paiement 3:2, vous recevez 1,5 fois votre mise pour un naturel. Avec un 6:5, vous ne recevez que 1,2 fois votre mise. Cette différence augmente l'avantage de la maison d'environ 1,4 %, ce qui est énorme sur le long terme.",
  },
  {
    question: "Que signifie RTP au blackjack et pourquoi est-ce important ?",
    answer:
      "RTP signifie Return To Player (Taux de Retour au Joueur). Il indique le pourcentage théorique des mises qu'un jeu reverse aux joueurs sur le long terme. Au blackjack avec stratégie de base, le RTP atteint généralement 99,5 %, ce qui en fait l'un des jeux de casino les plus favorables au joueur.",
  },
  {
    question: "Le comptage de cartes fonctionne-t-il au blackjack en ligne ?",
    answer:
      "Le comptage de cartes est inefficace au blackjack en ligne avec RNG (générateur de nombres aléatoires) car les cartes sont mélangées virtuellement à chaque main. En revanche, il peut théoriquement fonctionner aux tables de blackjack live avec croupier réel, bien que la pénétration de deck soit souvent limitée à 50-60 %.",
  },
];

const tocItems = [
  { id: "termes-a-c", label: "A - C : Assurance à Cut Card" },
  { id: "termes-d-h", label: "D - H : Deck à House Edge" },
  { id: "termes-i-p", label: "I - P : Insurance à Push" },
  { id: "termes-r-s", label: "R - S : RNG à Surrender" },
  { id: "termes-t-u", label: "T - U : Tirer à Upcard" },
];

export default function GlossaireTermesBlackjack() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Glossaire du Blackjack" },
        ]}
      />

      <div className="flex items-center gap-3 mb-4">
        <span className="bg-accent/10 text-accent-dark text-xs font-medium px-2 py-1 rounded">
          Guides débutants
        </span>
        <time className="text-xs text-text-light">11 mars 2026</time>
        <span className="text-xs text-text-light">• 8 min de lecture</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Glossaire du Blackjack : Tous les Termes à Connaître
      </h1>

      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
        <Image
          src="/images/blog/glossaire-blackjack.jpg"
          alt="Glossaire du blackjack - cartes et jetons sur table verte avec termes de jeu"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </div>

      <p className="text-lg text-text-light mb-8">
        Que vous soyez débutant ou joueur intermédiaire, maîtriser le vocabulaire du blackjack est
        indispensable pour comprendre les règles, suivre les conversations entre joueurs et
        appliquer correctement la stratégie de base. Ce glossaire regroupe plus de 30 termes
        essentiels du blackjack, expliqués clairement en français avec des exemples concrets.
      </p>

      <TableOfContents items={tocItems} />

      <section className="mt-10">
        <h2 id="termes-a-c" className="text-2xl font-bold mb-4">
          A - C
        </h2>

        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-bold text-lg">Assurance (Insurance)</dt>
            <dd className="text-text-light ml-4">
              Pari secondaire proposé lorsque la carte visible du croupier est un As. L&apos;assurance
              coûte la moitié de votre mise initiale et paie 2:1 si le croupier a un blackjack.
              Mathématiquement, c&apos;est un pari défavorable avec un avantage de la maison
              supérieur à 7 %. La stratégie de base recommande de toujours refuser l&apos;assurance.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Avantage de la maison (House Edge)</dt>
            <dd className="text-text-light ml-4">
              Pourcentage mathématique représentant le profit moyen du casino sur chaque mise à long
              terme. Au blackjack avec stratégie de base, il est d&apos;environ 0,5 %, l&apos;un des
              plus bas parmi tous les jeux de casino.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Blackjack (Naturel)</dt>
            <dd className="text-text-light ml-4">
              Main composée d&apos;un As et d&apos;une carte valant 10 (10, Valet, Dame, Roi),
              obtenue dès la distribution initiale. Un blackjack bat toute autre main de valeur 21
              obtenue avec plus de deux cartes. Il est traditionnellement payé 3:2, soit 1,5 fois la
              mise.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Brûler (Burn)</dt>
            <dd className="text-text-light ml-4">
              Action de retirer la première carte du sabot et de la placer face cachée dans la
              défausse avant de commencer à distribuer. C&apos;est une mesure de sécurité standard
              dans les casinos.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Bust (Buster / Crever)</dt>
            <dd className="text-text-light ml-4">
              Dépasser 21 avec la valeur totale de sa main. Le joueur qui buste perd immédiatement
              sa mise, indépendamment du résultat du croupier. C&apos;est cette règle qui confère
              l&apos;avantage structurel au casino.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Carte fermée (Hole Card)</dt>
            <dd className="text-text-light ml-4">
              La carte face cachée du croupier dans le blackjack américain. Le croupier ne la révèle
              qu&apos;après que tous les joueurs ont joué leurs mains. Dans le blackjack européen,
              cette carte n&apos;est pas distribuée avant la fin du tour des joueurs.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Carte de coupe (Cut Card)</dt>
            <dd className="text-text-light ml-4">
              Carte en plastique coloré insérée dans le sabot pour indiquer quand il faut mélanger.
              Sa position détermine la pénétration du deck, un facteur important pour les compteurs
              de cartes.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Comptage de cartes (Card Counting)</dt>
            <dd className="text-text-light ml-4">
              Technique avancée consistant à suivre mentalement le ratio entre cartes hautes et
              basses restant dans le sabot. Le système Hi-Lo est le plus connu : les cartes 2-6
              comptent +1, les 7-9 comptent 0, et les 10-As comptent -1. Pour en savoir plus,
              consultez nos{" "}
              <Link href="/strategie-blackjack" className="text-accent hover:underline">
                stratégies avancées
              </Link>.
            </dd>
          </div>
        </dl>
      </section>

      <LeadForm />

      <section className="mt-10">
        <h2 id="termes-d-h" className="text-2xl font-bold mb-4">
          D - H
        </h2>

        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-bold text-lg">Deck (Jeu de cartes)</dt>
            <dd className="text-text-light ml-4">
              Un jeu standard de 52 cartes. Le blackjack se joue habituellement avec 1 à 8 decks.
              Moins il y a de decks, plus l&apos;avantage penche vers le joueur (toutes choses
              égales par ailleurs).
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Doubler (Double Down)</dt>
            <dd className="text-text-light ml-4">
              Doubler sa mise initiale en échange d&apos;une seule carte supplémentaire. C&apos;est
              particulièrement avantageux lorsque vous avez un total de 10 ou 11 face à une carte
              faible du croupier. Certaines tables limitent le double à certaines valeurs de main.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Even Money</dt>
            <dd className="text-text-light ml-4">
              Proposition faite au joueur qui a un blackjack naturel lorsque le croupier montre un
              As. Au lieu de risquer une égalité (push) si le croupier a aussi un blackjack, le
              joueur accepte un paiement 1:1 immédiat. Mathématiquement, c&apos;est équivalent à
              prendre l&apos;assurance et donc déconseillé.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Flat Bet (Mise plate)</dt>
            <dd className="text-text-light ml-4">
              Stratégie de mise consistant à parier toujours le même montant, quelle que soit la
              situation. C&apos;est l&apos;approche recommandée pour les débutants car elle simplifie
              la gestion de bankroll.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Hand (Main)</dt>
            <dd className="text-text-light ml-4">
              L&apos;ensemble des cartes détenues par un joueur ou le croupier. Au blackjack, on
              distingue les mains « hard » (sans As flexible) et les mains « soft » (avec un As
              compté comme 11).
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Hard Hand (Main dure)</dt>
            <dd className="text-text-light ml-4">
              Main sans As, ou dont l&apos;As est obligatoirement compté comme 1 pour ne pas
              dépasser 21. Par exemple, 10-7 est un hard 17, et As-6-10 est également un hard 17
              (l&apos;As vaut 1). Consultez les{" "}
              <Link href="/regles-blackjack" className="text-accent hover:underline">
                règles complètes
              </Link>{" "}
              pour comprendre les implications stratégiques.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Hit (Tirer)</dt>
            <dd className="text-text-light ml-4">
              Demander une carte supplémentaire au croupier. C&apos;est l&apos;action de base
              lorsque votre main est trop faible pour rivaliser avec celle du croupier.
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-10">
        <h2 id="termes-i-p" className="text-2xl font-bold mb-4">
          I - P
        </h2>

        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-bold text-lg">Main soft (Soft Hand)</dt>
            <dd className="text-text-light ml-4">
              Main contenant un As compté comme 11. Par exemple, As-6 est un soft 17. L&apos;avantage
              est que vous ne pouvez pas buster en tirant une carte supplémentaire : si le total
              dépasse 21, l&apos;As passe automatiquement à 1.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Mise latérale (Side Bet)</dt>
            <dd className="text-text-light ml-4">
              Pari optionnel placé en plus de la mise principale, comme le « Perfect Pairs » ou le
              « 21+3 ». Ces paris offrent des gains élevés mais ont un avantage de la maison
              nettement supérieur à celui du blackjack classique. Ils sont à éviter pour les joueurs
              soucieux de leur bankroll.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Pénétration du deck (Deck Penetration)</dt>
            <dd className="text-text-light ml-4">
              Le pourcentage de cartes distribuées avant le mélange. Une pénétration élevée (75 % ou
              plus) est favorable aux compteurs de cartes. En ligne avec RNG, ce concept n&apos;a
              pas de pertinence car les cartes sont virtuellement mélangées en permanence.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Push (Égalité)</dt>
            <dd className="text-text-light ml-4">
              Situation où le joueur et le croupier ont le même total sans dépasser 21. La mise est
              alors rendue au joueur. Un push n&apos;est ni un gain ni une perte.
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-10">
        <h2 id="termes-r-s" className="text-2xl font-bold mb-4">
          R - S
        </h2>

        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-bold text-lg">RNG (Générateur de nombres aléatoires)</dt>
            <dd className="text-text-light ml-4">
              Algorithme informatique qui détermine l&apos;ordre des cartes au blackjack en ligne.
              Les RNG certifiés sont audités par des organismes indépendants (eCOGRA, iTech Labs,
              GLI) pour garantir l&apos;équité du jeu.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">RTP (Return to Player / Taux de retour au joueur)</dt>
            <dd className="text-text-light ml-4">
              Pourcentage théorique des mises reversé aux joueurs sur le long terme. Un RTP de 99,5 %
              signifie que pour 100 € misés, le joueur récupère en moyenne 99,50 €. C&apos;est
              l&apos;inverse de l&apos;avantage de la maison.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Sabot (Shoe)</dt>
            <dd className="text-text-light ml-4">
              Dispositif contenant plusieurs decks de cartes mélangés ensemble, utilisé par le
              croupier pour distribuer les cartes. Le sabot standard contient 6 ou 8 jeux de cartes.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Séparer (Split)</dt>
            <dd className="text-text-light ml-4">
              Lorsque vos deux premières cartes sont de même valeur, vous pouvez les séparer en deux
              mains distinctes en ajoutant une mise égale à l&apos;originale. Chaque main est ensuite
              jouée indépendamment. La stratégie de base définit précisément quand séparer.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">S17 / H17</dt>
            <dd className="text-text-light ml-4">
              S17 (Stand on Soft 17) : le croupier reste sur un soft 17. H17 (Hit on Soft 17) : le
              croupier tire sur un soft 17. La règle S17 est plus favorable au joueur, réduisant
              l&apos;avantage de la maison d&apos;environ 0,2 %.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Stand (Rester)</dt>
            <dd className="text-text-light ml-4">
              Décider de ne pas prendre de carte supplémentaire et conserver sa main actuelle.
              C&apos;est la décision à prendre lorsque votre main est suffisamment forte ou que le
              risque de buster est trop élevé.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Surrender (Abandon)</dt>
            <dd className="text-text-light ml-4">
              Option permettant d&apos;abandonner sa main et de récupérer la moitié de sa mise. Il
              existe deux formes : le « early surrender » (avant que le croupier vérifie son
              blackjack) et le « late surrender » (après vérification). C&apos;est une option
              stratégiquement précieuse lorsque votre main a moins de 25 % de chances de gagner.
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-10">
        <h2 id="termes-t-u" className="text-2xl font-bold mb-4">
          T - U
        </h2>

        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-bold text-lg">Tirer (Hit)</dt>
            <dd className="text-text-light ml-4">
              Synonyme français de « Hit ». Demander au croupier de distribuer une carte
              supplémentaire. En ligne, il suffit de cliquer sur le bouton correspondant.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">True Count (Compte réel)</dt>
            <dd className="text-text-light ml-4">
              Dans le comptage de cartes, le running count divisé par le nombre estimé de decks
              restants dans le sabot. Le true count donne une mesure plus précise de l&apos;avantage
              du joueur dans un jeu multi-deck.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-lg">Upcard (Carte visible)</dt>
            <dd className="text-text-light ml-4">
              La carte du croupier qui est face visible. Toute la stratégie de base repose sur la
              comparaison entre votre main et l&apos;upcard du croupier. C&apos;est l&apos;information
              clé pour prendre vos décisions.
            </dd>
          </div>
        </dl>

        <p className="mb-4">
          Ce glossaire couvre les termes les plus courants du blackjack. Pour mettre ces connaissances
          en pratique, consultez nos{" "}
          <Link href="/regles-blackjack" className="text-accent hover:underline">
            règles détaillées du blackjack
          </Link>{" "}
          et notre{" "}
          <Link href="/strategie-blackjack" className="text-accent hover:underline">
            guide de la stratégie de base
          </Link>.
        </p>
      </section>

      <section className="mt-12 mb-10">
        <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-card rounded-lg border border-border">
              <summary className="flex items-center justify-between p-4 cursor-pointer font-medium">
                {faq.question}
                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-4 pb-4 text-text-light">{faq.answer}</div>
            </details>
          ))}
        </div>
      </section>

      <FAQSchema items={faqs} />

      <LeadForm variant="banner" />
    </div>
  );
}
