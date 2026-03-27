import Link from "next/link";

const footerLinks = [
  {
    title: "Guide Blackjack",
    links: [
      { href: "/blackjack-en-ligne", label: "Blackjack en ligne" },
      { href: "/blackjack-gratuit", label: "Jouer gratuit" },
      { href: "/regles-blackjack", label: "Règles du blackjack" },
      { href: "/strategie-blackjack", label: "Stratégie de base" },
    ],
  },
  {
    title: "Variantes",
    links: [
      { href: "/blackjack-europeen", label: "Blackjack européen" },
      { href: "/blackjack-americain", label: "Blackjack américain" },
      { href: "/blackjack-live", label: "Blackjack live" },
      { href: "/blackjack-multi-mains", label: "Blackjack multi-mains" },
    ],
  },
  {
    title: "Par pays",
    links: [
      { href: "/blackjack-france", label: "France" },
      { href: "/blackjack-belgique", label: "Belgique" },
      { href: "/blackjack-suisse", label: "Suisse" },
      { href: "/blackjack-quebec", label: "Québec" },
    ],
  },
  {
    title: "Informations",
    links: [
      { href: "/a-propos", label: "À propos" },
      { href: "/blog", label: "Blog" },
      { href: "/jeu-responsable", label: "Jeu responsable" },
      { href: "/mentions-legales", label: "Mentions légales" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-card-black text-text-on-dark">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-accent font-bold mb-3 text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-accent text-xl">♠</span>
              <span className="font-bold">blackjack-en-ligne-gratuit.com</span>
            </div>
            <p className="text-xs text-gray-500 text-center max-w-xl">
              Ce site est un guide éducatif sur le blackjack. Nous ne proposons pas de jeux d&apos;argent
              réel. Le jeu comporte des risques. Jouez de manière responsable. 18+
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
