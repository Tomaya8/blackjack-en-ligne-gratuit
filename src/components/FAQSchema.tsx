interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export default function FAQSchema({ items }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <details key={i} className="group border border-gray-200 rounded-lg">
              <summary className="flex items-center justify-between cursor-pointer p-4 font-medium hover:bg-gray-50">
                {item.question}
                <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 text-text-light text-sm leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
