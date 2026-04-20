import Link from "next/link";
import { casinos } from "@/data/casinos";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-yellow-500 text-sm" aria-label={`${rating}/5`}>
      {"★".repeat(Math.round(rating))}
      {"☆".repeat(5 - Math.round(rating))}
    </span>
  );
}

export default function TopBlackjackCasinos({ limit }: { limit?: number }) {
  const list = limit ? casinos.slice(0, limit) : casinos;

  return (
    <section className="my-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">
        Où jouer au blackjack en ligne : notre sélection
      </h2>
      <p className="text-sm text-gray-600 mb-6 max-w-2xl">
        Casinos testés par notre équipe, avec tables live en direct et croupiers francophones.
        Tous sont licenciés à Curaçao — consultez notre méthodologie pour comprendre nos critères.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {list.map((casino, i) => (
          <article
            key={casino.slug}
            className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                    #{i + 1}
                  </span>
                  <h3 className="text-lg font-bold">{casino.name}</h3>
                </div>
                <Stars rating={casino.rating} />
              </div>
              <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded whitespace-nowrap">
                {casino.liveBlackjackTables} tables live
              </span>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-3 mb-3 border border-amber-100">
              <p className="text-xs text-amber-700 uppercase tracking-wider font-semibold">
                Bonus
              </p>
              <p className="font-bold text-gray-900">{casino.bonus}</p>
              <p className="text-xs text-gray-500 mt-1">
                Wagering x{casino.wagering} · Dépôt min. {casino.minDeposit}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {casino.blackjackVariants.slice(0, 3).map((v) => (
                <span
                  key={v}
                  className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2 py-0.5 rounded"
                >
                  {v}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <Link
                href={`/casinos-blackjack/${casino.slug}`}
                className="flex-1 text-center py-2 px-3 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                Lire l&apos;avis
              </Link>
              <a
                href={casino.affiliateUrl}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="flex-1 text-center py-2 px-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-colors text-sm"
              >
                Jouer →
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-6">
        18+ | Les conditions générales s&apos;appliquent. Les jeux d&apos;argent comportent
        des risques. Liens sponsorisés — nous percevons une commission sur les inscriptions,
        sans surcoût pour vous. Joueurs-info-service : 09 74 75 13 13.
      </p>
    </section>
  );
}
