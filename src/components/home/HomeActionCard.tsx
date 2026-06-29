import Image from "next/image";

type HomeActionCardProps = {
  image: string;
  title: string;
  subtitle: string;
  active?: boolean;
  onClick?: () => void;
};

export function HomeActionCard({
  image,
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
      <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm">
     <Image
      src={image}
        alt={title}
       width={80}
        height={80}
        className="h-full w-full object-cover"
    />
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