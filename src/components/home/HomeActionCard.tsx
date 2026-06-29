

type HomeActionCardProps = {
  icon: string;
  title: string;
  subtitle: string;
  active?: boolean;
  onClick?: () => void;
};

export function HomeActionCard({
  icon,
  title,
  subtitle,
  active = false,
  onClick,
}: HomeActionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-4 rounded-3xl border p-4 text-left shadow-sm transition-all duration-200 active:scale-[0.98] ${
        active
          ? "border-[#ff7f9a] bg-[#fff0f4]"
          : "border-[#eedfd5] bg-white hover:bg-[#fffaf8]"
      }`}
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-4xl shadow-sm">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-black text-[#321f17]">{title}</h3>
        <p className="mt-1 text-sm leading-5 text-[#6f5146]">
          {subtitle}
        </p>
      </div>

      <div className="text-3xl text-[#ff6f8f]">›</div>
    </button>
  );
}