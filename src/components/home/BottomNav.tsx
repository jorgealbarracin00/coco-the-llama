

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
    <nav className="grid grid-cols-5 rounded-[2rem] bg-white/90 px-3 py-4 shadow-[0_15px_45px_rgba(120,60,30,0.14)] backdrop-blur">
      {items.map((item, index) => {
        const selected = index === selectedIndex;

        return (
          <button
            key={item.label}
            type="button"
            className={`flex flex-col items-center gap-1 rounded-xl py-1 transition-all duration-200 active:scale-95 ${
              selected ? "text-[#ff6f8f]" : "text-[#5d3428]"
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