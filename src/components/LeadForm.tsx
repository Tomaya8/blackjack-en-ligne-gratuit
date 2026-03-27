"use client";

import { useState } from "react";

interface LeadFormProps {
  title?: string;
  description?: string;
  variant?: "inline" | "sidebar" | "banner";
}

export default function LeadForm({
  title = "Recevez notre guide stratégie blackjack",
  description = "Tableau de stratégie optimale + astuces exclusives en PDF",
  variant = "inline",
}: LeadFormProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead:", { email, phone });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`rounded-xl p-6 text-center ${variant === "sidebar" ? "bg-felt text-white" : "bg-primary/5 border border-primary/20"}`}>
        <p className="font-bold text-lg">Merci !</p>
        <p className="text-sm mt-1 opacity-80">Vérifiez votre boîte mail.</p>
      </div>
    );
  }

  if (variant === "sidebar") {
    return (
      <div className="bg-felt text-white rounded-xl p-6 sticky top-24">
        <div className="text-2xl mb-2">♠</div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm opacity-80 mb-4">{description}</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            required
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-lg text-card-black text-sm outline-none"
          />
          <input
            type="tel"
            placeholder="Téléphone (optionnel)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 rounded-lg text-card-black text-sm outline-none"
          />
          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-dark text-card-black font-bold py-2 rounded-lg transition-colors text-sm"
          >
            Recevoir le guide PDF
          </button>
        </form>
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <div className="bg-gradient-to-r from-felt-dark to-felt text-white rounded-xl p-8 my-10">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="opacity-80 mb-6">{description}</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              required
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg text-card-black text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-accent-dark text-card-black font-bold px-6 py-3 rounded-lg transition-colors text-sm whitespace-nowrap"
            >
              Recevoir les conseils
            </button>
          </form>
        </div>
      </div>
    );
  }

  // inline
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm text-text-light mb-4">{description}</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          type="tel"
          placeholder="Téléphone (optionnel)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-accent"
        />
        <button
          type="submit"
          className="bg-accent hover:bg-accent-dark text-card-black font-bold px-6 py-2 rounded-lg transition-colors text-sm"
        >
          Recevoir
        </button>
      </form>
    </div>
  );
}
