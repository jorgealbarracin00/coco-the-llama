type HomeHeaderProps = {
  cartCount?: number;
};

export function HomeHeader({ cartCount = 0 }: HomeHeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <button
        type="button"
        aria-label="Open menu"
        className="flex h-11 w-11 items-center justify-center rounded-full text-3xl leading-none text-[#321f17] transition active:scale-95"
      >
        ≡
      </button>

      <button
        type="button"
        aria-label="Open cart"
        className="relative flex h-11 w-11 items-center justify-center rounded-full text-3xl transition active:scale-95"
      >
        🛒

        {cartCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ff6f8f] px-1 text-xs font-bold leading-none text-white shadow-sm">
            {cartCount}
          </span>
        )}
      </button>
    </header>
  );
}
