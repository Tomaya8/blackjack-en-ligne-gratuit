"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] bg-card-black text-white p-4 shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm flex-1">
          Ce site utilise des cookies pour améliorer votre expérience.
          Consultez notre{" "}
          <Link href="/mentions-legales" className="underline text-accent">
            politique de confidentialité
          </Link>
          .
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-accent text-card-black font-bold rounded-lg hover:bg-accent-dark transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
