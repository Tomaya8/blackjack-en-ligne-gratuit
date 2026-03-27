import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">♠</div>
        <h1 className="text-4xl font-bold text-primary mb-4">404</h1>
        <p className="text-lg text-text-light mb-8">
          Oups ! Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent hover:bg-accent-dark text-card-black font-bold px-8 py-3 rounded-lg transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
