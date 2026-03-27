"use client";

import { useState, useEffect, useRef } from "react";
import { submitLead } from "@/lib/submitLead";

export default function PopupNewsletter() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dismissedRef = useRef(false);
  const shownOnceRef = useRef(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("popup_dismissed");
    if (dismissed) {
      dismissedRef.current = true;
      return;
    }

    const showPopup = () => {
      if (dismissedRef.current || shownOnceRef.current) return;
      shownOnceRef.current = true;
      setVisible(true);
    };

    // Show once after 10 seconds
    const timer = setTimeout(showPopup, 10000);

    // Or on exit intent (whichever comes first)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) showPopup();
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    dismissedRef.current = true;
    localStorage.setItem("popup_dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitLead({
        email,
        phone: phone || undefined,
        source: "popup-newsletter",
      });
    } catch (err) {
      console.error("Lead submission failed:", err);
    }
    setSubmitted(true);
    localStorage.setItem("popup_dismissed", "true");
    setTimeout(() => setVisible(false), 3000);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-[fadeIn_0.3s_ease-out]">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl leading-none"
          aria-label="Fermer"
        >
          &times;
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="text-4xl mb-3">✓</div>
            <h3 className="text-xl font-bold text-primary mb-2">Merci !</h3>
            <p className="text-text-light">
              Vous recevrez nos meilleures stratégies très bientôt.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">♠</div>
              <h3 className="text-xl font-bold text-primary">
                Recevez nos meilleures stratégies blackjack
              </h3>
              <p className="text-text-light text-sm mt-2">
                + astuces exclusives et tableau de stratégie optimale en PDF
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                required
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none text-sm"
              />
              <input
                type="tel"
                placeholder="Téléphone (optionnel)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none text-sm"
              />
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-card-black font-bold py-3 rounded-lg transition-colors text-sm"
              >
                Recevoir les conseils
              </button>
              <p className="text-[11px] text-gray-400 text-center">
                Pas de spam. Désabonnement en 1 clic.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
