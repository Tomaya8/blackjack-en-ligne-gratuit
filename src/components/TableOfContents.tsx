interface TOCItem {
  id: string;
  label: string;
}

export default function TableOfContents({ items }: { items: TOCItem[] }) {
  return (
    <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 my-8">
      <h2 className="font-bold text-sm uppercase tracking-wider text-text-light mb-3">
        Sommaire
      </h2>
      <ol className="space-y-2 text-sm">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-primary hover:text-accent transition-colors flex items-start gap-2"
            >
              <span className="text-accent font-bold">{i + 1}.</span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
