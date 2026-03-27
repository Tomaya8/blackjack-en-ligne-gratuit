import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopupNewsletter from "@/components/PopupNewsletter";

export const metadata: Metadata = {
  metadataBase: new URL("https://blackjack-en-ligne-gratuit.com"),
  title: {
    default: "Blackjack en Ligne Gratuit : Guide Expert pour Apprendre et Jouer",
    template: "%s | Blackjack en Ligne Gratuit",
  },
  description:
    "Guide complet et gratuit pour apprendre le blackjack en ligne. Règles, stratégies, variantes et conseils d'experts pour les joueurs francophones.",
  keywords: [
    "blackjack en ligne gratuit",
    "jouer blackjack gratuit",
    "règles blackjack",
    "stratégie blackjack",
    "blackjack sans argent",
    "blackjack en ligne",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Blackjack en Ligne Gratuit",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://blackjack-en-ligne-gratuit.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <PopupNewsletter />
      </body>
    </html>
  );
}
