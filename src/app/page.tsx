import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import FAQSchema from "@/components/FAQSchema";

const variants = [
  { href: "/blackjack-europeen", title: "Blackjack Européen", desc: "Règles classiques, une seule main pour le croupier, avantage réduit pour la maison." },
  { href: "/blackjack-americain", title: "Blackjack Américain", desc: "Le croupier reçoit deux cartes dont une face cachée. La variante la plus populaire." },
  { href: "/blackjack-live", title: "Blackjack Live", desc: "Jouez avec de vrais croupiers en direct pour une expérience immersive." },
  { href: "/blackjack-multi-mains", title: "Blackjack Multi-mains", desc: "Jouez plusieurs mains simultanément pour multiplier l'action." },
];

const strategies = [
  { icon: "📊", title: "Stratégie de base", desc: "Le tableau optimal qui réduit l'avantage de la maison à moins de 0,5%." },
  { icon: "🧮", title: "Comptage de cartes", desc: "Comprendre les principes mathématiques derrière cette technique célèbre." },
  { icon: "💰", title: "Gestion de bankroll", desc: "Comment gérer votre capital pour jouer plus longtemps et plus sereinement." },
];

const recentArticles = [
  { href: "/blog/comment-gagner-au-blackjack", title: "Comment gagner au blackjack : mythe ou réalité ?", date: "2026-03-20", image: "/images/blog/gagner-blackjack.jpg" },
  { href: "/blog/quand-doubler-blackjack", title: "Quand doubler au blackjack : guide stratégique", date: "2026-03-18", image: "/images/blog/quand-doubler.jpg" },
  { href: "/blog/erreurs-frequentes-blackjack", title: "Les 10 erreurs les plus fréquentes au blackjack", date: "2026-03-15", image: "/images/blog/erreurs-blackjack.jpg" },
  { href: "/blog/probabilites-blackjack-guide", title: "Les probabilités au blackjack : les maths du jeu", date: "2026-03-09", image: "/images/blog/probabilites.jpg" },
  { href: "/blog/psychologie-joueur-blackjack", title: "La psychologie du joueur de blackjack", date: "2026-03-04", image: "/images/blog/psychologie-joueur.jpg" },
  { href: "/blog/biais-cognitifs-jeu", title: "Les biais cognitifs : les pièges de votre cerveau", date: "2026-02-22", image: "/images/blog/biais-cognitifs.jpg" },
];

const faqItems = [
  { question: "Peut-on jouer au blackjack en ligne gratuitement ?", answer: "Oui, de nombreuses plateformes proposent des versions démo gratuites qui permettent de s'entraîner sans risquer d'argent réel. C'est idéal pour apprendre les règles et tester des stratégies." },
  { question: "Quelle est la meilleure stratégie au blackjack ?", answer: "La stratégie de base, fondée sur des calculs mathématiques, est la méthode la plus efficace. Elle indique la meilleure action (tirer, rester, doubler, séparer) selon votre main et la carte visible du croupier." },
  { question: "Le blackjack en ligne est-il truqué ?", answer: "Les casinos en ligne régulés utilisent des générateurs de nombres aléatoires (RNG) certifiés par des organismes indépendants. Choisissez toujours des plateformes licenciées pour garantir l'équité du jeu." },
  { question: "Quelle est la différence entre le blackjack européen et américain ?", answer: "La différence principale est que dans le blackjack américain, le croupier reçoit deux cartes (une face cachée), tandis qu'en version européenne, il ne reçoit sa seconde carte qu'après que les joueurs ont joué." },
  { question: "Combien de temps faut-il pour apprendre le blackjack ?", answer: "Les règles de base s'apprennent en quelques minutes. Maîtriser la stratégie de base demande quelques heures de pratique. Devenir un joueur expert peut prendre plusieurs semaines d'entraînement régulier." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        <Image
          src="/images/hero-blackjack.jpg"
          alt="Table de blackjack"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-felt-dark/80" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Blackjack en ligne gratuit : Guide complet pour apprendre et jouer
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
              Découvrez les règles, les stratégies et les variantes du blackjack.
              Notre guide expert vous accompagne de vos premiers pas jusqu&apos;à la maîtrise complète du jeu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/regles-blackjack"
                className="bg-accent hover:bg-accent-dark text-card-black font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Apprendre les règles
              </Link>
              <Link
                href="/strategie-blackjack"
                className="border-2 border-white/30 hover:border-white text-white px-6 py-3 rounded-lg transition-colors"
              >
                Voir la stratégie de base
              </Link>
            </div>
          </div>

          {/* Lead capture above the fold */}
          <div className="mt-10 max-w-xl">
            <LeadForm
              variant="inline"
              title="Recevez notre guide stratégie en PDF"
              description="Tableau de stratégie optimale + astuces exclusives"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Qu&apos;est-ce que le blackjack en ligne ?
          </h2>
          <p className="text-text-light leading-relaxed mb-4">
            Le blackjack est le jeu de cartes de casino le plus populaire au monde. Contrairement à la
            plupart des jeux de hasard, le blackjack offre aux joueurs la possibilité d&apos;influencer
            le résultat grâce à leurs décisions stratégiques. L&apos;objectif est simple : obtenir une
            main dont la valeur se rapproche le plus possible de 21 sans la dépasser, tout en battant
            le croupier.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            Le blackjack en ligne permet de profiter de ce jeu passionnant depuis chez soi, avec
            l&apos;avantage de pouvoir s&apos;entraîner gratuitement. Les versions démo sont idéales
            pour apprendre les règles, tester des stratégies et comprendre les probabilités sans
            aucun risque financier.
          </p>
          <p className="text-text-light leading-relaxed">
            Sur ce site, nous vous proposons un guide complet, basé sur les mathématiques et les
            probabilités, pour vous aider à comprendre et maîtriser le blackjack. Aucun lien
            commercial — uniquement de l&apos;information fiable et vérifiée.
          </p>
        </div>
      </section>

      {/* Jouer gratuitement */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Jouer au blackjack gratuitement
          </h2>
          <div className="max-w-3xl">
            <p className="text-text-light leading-relaxed mb-4">
              Le blackjack gratuit est le meilleur moyen d&apos;apprendre sans risque. Les versions
              démo utilisent les mêmes règles et probabilités que le jeu en argent réel, ce qui en
              fait un outil d&apos;apprentissage parfait.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="text-2xl mb-2">🎓</div>
                <h3 className="font-bold mb-1">Apprendre</h3>
                <p className="text-sm text-text-light">Maîtrisez les règles à votre rythme</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="text-2xl mb-2">🧪</div>
                <h3 className="font-bold mb-1">Tester</h3>
                <p className="text-sm text-text-light">Expérimentez différentes stratégies</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="text-2xl mb-2">🔒</div>
                <h3 className="font-bold mb-1">Sans risque</h3>
                <p className="text-sm text-text-light">Aucun argent réel en jeu</p>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/blackjack-gratuit"
                className="text-primary font-semibold hover:text-accent transition-colors"
              >
                En savoir plus sur le blackjack gratuit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Variantes */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Variantes populaires du blackjack
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {variants.map((v) => (
            <Link
              key={v.href}
              href={v.href}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                {v.title}
              </h3>
              <p className="text-sm text-text-light">{v.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Stratégies */}
      <section className="bg-card-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Stratégies essentielles
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {strategies.map((s) => (
              <div key={s.title} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/strategie-blackjack"
            className="inline-block bg-accent hover:bg-accent-dark text-card-black font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Découvrir la stratégie complète
          </Link>
        </div>
      </section>

      {/* Lead capture mid-page */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <LeadForm variant="banner" />
      </section>

      {/* Articles récents */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Articles récents</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {recentArticles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group border border-gray-200 rounded-xl overflow-hidden hover:border-accent hover:shadow-lg transition-all"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <time className="text-xs text-text-light">{article.date}</time>
                <h3 className="font-bold mt-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-primary font-semibold hover:text-accent transition-colors">
            Voir tous les articles →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <FAQSchema items={faqItems} />
      </section>
    </>
  );
}
