type BottomNavItem = {
  icon: string;
  label: string;
};

type BottomNavProps = {
  selectedIndex?: number;
};

const items: BottomNavItem[] = [
  { icon: "🏠", label: "Home" },
  { icon: "▦", label: "Categories" },
  { icon: "♡", label: "Favorites" },
  { icon: "🛍️", label: "Orders" },
  { icon: "👤", label: "Account" },
];

export function BottomNav({ selectedIndex = 0 }: BottomNavProps) {
  return (
    <nav className="grid grid-cols-5 rounded-[2.25rem] border border-white/70 bg-white/90 px-4 py-3 shadow-[0_18px_55px_rgba(120,60,30,0.18)] backdrop-blur-xl">
      {items.map((item, index) => {
        const selected = index === selectedIndex;

        return (
          <button
            key={item.label}
            type="button"
            className={`flex flex-col items-center gap-1 rounded-2xl px-2 py-2 transition-all duration-200 active:scale-95 ${
              selected
                ? "bg-[#fff0f4] text-[#ff4f87]"
                : "text-[#5d3428] hover:bg-[#fff7ef]"
            }`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-[11px] font-semibold">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}