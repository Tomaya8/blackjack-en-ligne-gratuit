"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

const categories = ["Tous", "Stratégies", "Guides débutants", "Mathématiques", "Psychologie du jeu"];

export default function BlogFilter({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState("Tous");

  const filtered = active === "Tous" ? articles : articles.filter((a) => a.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              cat === active
                ? "bg-primary text-white border-primary"
                : "bg-white text-text-light border-gray-200 hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filtered.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group border border-gray-200 rounded-xl overflow-hidden hover:border-accent hover:shadow-lg transition-all"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                  {article.category}
                </span>
                <span className="text-xs text-text-light">{article.date}</span>
              </div>
              <h2 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h2>
              <p className="text-sm text-text-light line-clamp-3">{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
