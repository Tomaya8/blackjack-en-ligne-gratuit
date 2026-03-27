"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">♠</div>
        <h1 className="text-2xl font-bold text-primary mb-4">Une erreur est survenue</h1>
        <p className="text-text-light mb-8">
          Quelque chose ne s&apos;est pas passé comme prévu. Veuillez réessayer.
        </p>
        <button
          onClick={reset}
          className="inline-block bg-accent hover:bg-accent-dark text-card-black font-bold px-8 py-3 rounded-lg transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}
