import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site blackjack-en-ligne-gratuit.com. Informations sur l'éditeur, la politique de confidentialité et les conditions d'utilisation.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]} />

      <article className="max-w-3xl prose prose-gray">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Mentions légales</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Éditeur du site</h2>
          <p className="text-text-light leading-relaxed">
            Le site blackjack-en-ligne-gratuit.com est un site informatif et éducatif dédié au
            blackjack en ligne. Il a pour vocation de fournir des guides, des stratégies et des
            informations factuelles sur le blackjack.
          </p>
          <p className="text-text-light leading-relaxed mt-2">
            Email de contact : contact@blackjack-en-ligne-gratuit.com
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Nature du site</h2>
          <p className="text-text-light leading-relaxed">
            Ce site est un guide éducatif. Il ne propose pas de jeux d&apos;argent réel, ne
            collecte pas de mises et n&apos;est pas un casino en ligne. Les informations fournies
            sont à titre indicatif et éducatif uniquement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Hébergement</h2>
          <p className="text-text-light leading-relaxed">
            Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Propriété intellectuelle</h2>
          <p className="text-text-light leading-relaxed">
            L&apos;ensemble des contenus (textes, images, graphismes, logo, icônes) présents sur
            ce site sont protégés par le droit d&apos;auteur. Toute reproduction, représentation
            ou diffusion, en tout ou partie, du contenu de ce site sans autorisation préalable est
            interdite.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Protection des données personnelles</h2>
          <p className="text-text-light leading-relaxed mb-2">
            Conformément au Règlement Général sur la Protection des Données (RGPD), nous nous
            engageons à protéger vos données personnelles.
          </p>
          <h3 className="font-bold text-lg mt-4 mb-2">Données collectées</h3>
          <ul className="space-y-1 text-text-light">
            <li>• Adresse email (inscription newsletter)</li>
            <li>• Numéro de téléphone (optionnel, inscription newsletter)</li>
            <li>• Données de navigation (cookies analytiques)</li>
          </ul>
          <h3 className="font-bold text-lg mt-4 mb-2">Finalité</h3>
          <ul className="space-y-1 text-text-light">
            <li>• Envoi de newsletters et contenus éducatifs</li>
            <li>• Analyse de fréquentation du site</li>
            <li>• Amélioration de l&apos;expérience utilisateur</li>
          </ul>
          <h3 className="font-bold text-lg mt-4 mb-2">Vos droits</h3>
          <p className="text-text-light leading-relaxed">
            Vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et de
            portabilité de vos données. Pour exercer ces droits, contactez-nous à
            contact@blackjack-en-ligne-gratuit.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Cookies</h2>
          <p className="text-text-light leading-relaxed">
            Ce site utilise des cookies à des fins d&apos;analyse de fréquentation (Google
            Analytics) et de fonctionnement (préférences utilisateur). Vous pouvez configurer
            votre navigateur pour refuser les cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Disclaimer — Avertissement sur le jeu</h2>
          <div className="bg-card-red/10 border border-card-red/30 rounded-lg p-4">
            <p className="text-text-light leading-relaxed">
              Le jeu d&apos;argent comporte des risques : endettement, dépendance, isolement.
              Jouez de manière responsable. Ce site ne garantit aucun gain. Les stratégies
              présentées réduisent l&apos;avantage de la maison mais ne l&apos;éliminent pas.
              Le casino conserve toujours un avantage mathématique. Le jeu est interdit aux
              mineurs (18+ ou 21+ selon la juridiction).
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Limitation de responsabilité</h2>
          <p className="text-text-light leading-relaxed">
            Les informations fournies sur ce site sont données à titre indicatif. Malgré tout le
            soin apporté à leur rédaction, nous ne pouvons garantir leur exactitude à tout moment.
            L&apos;utilisateur est seul responsable de l&apos;usage qu&apos;il fait des informations
            présentées sur ce site.
          </p>
        </section>
      </article>
    </div>
  );
}
