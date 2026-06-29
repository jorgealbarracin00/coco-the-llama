type TrustItem = {
  icon: string;
  label: string;
};

type TrustBarProps = {
  items?: TrustItem[];
};

const defaultItems: TrustItem[] = [
  { icon: "♡", label: "Curated\nwith love" },
  { icon: "✿", label: "Great\nquality" },
  { icon: "⚡", label: "Easy &\nfast" },
  { icon: "🛡️", label: "Safe &\ntrusted" },
];

export function TrustBar({ items = defaultItems }: TrustBarProps) {
  return (
    <section className="grid grid-cols-4 gap-2 rounded-3xl bg-[#ffe1e4] p-4 shadow-sm">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center justify-center gap-2 text-center"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
            {item.icon}
          </div>

          <p className="whitespace-pre-line text-xs font-semibold leading-4 text-[#5d3428]">
            {item.label}
          </p>
        </div>
      ))}
    </section>
  );
}
