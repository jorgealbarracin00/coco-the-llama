

import Image from "next/image";

const audienceOptions = [
  {
    image: "/images/lost-dad-girl.avif",
    label: "Girl",
  },
  {
    image: "/images/lost-dad-boy.avif",
    label: "Boy",
  },
  {
    image: "/images/lost-dad-baby.avif",
    label: "Baby",
  },
  {
    image: "/images/lost-dad-not-sure.avif",
    label: "Not sure",
  },
];

const buyingOptions = [
  {
    image: "/images/lost-dad-outfit.avif",
    label: "Outfit",
  },
  {
    image: "/images/lost-dad-gift.avif",
    label: "Gift",
  },
  {
    image: "/images/lost-dad-everyday.avif",
    label: "Everyday clothes",
  },
  {
    image: "/images/lost-dad-special.avif",
    label: "Something special",
  },
];

type LostDadOptionProps = {
  image: string;
  label: string;
};

function LostDadOption({ image, label }: LostDadOptionProps) {
  return (
    <button
      type="button"
      className="flex min-h-36 flex-col items-center justify-center rounded-3xl border border-[#efe0d8] bg-white px-3 py-4 text-center shadow-sm transition active:scale-[0.98]"
    >
      <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-[#fff7ef] shadow-sm">
        <Image src={image} alt={label} fill className="object-cover" />
      </div>
      <span className="mt-3 text-base font-black text-[#321f17]">{label}</span>
    </button>
  );
}

type LostDadHelperViewProps = {
  onBack: () => void;
};

export function LostDadHelperView({ onBack }: LostDadHelperViewProps) {
return (
    <main className="min-h-screen bg-[#fff7ef] text-[#321f17]">
      <div className="mx-auto flex min-h-screen max-w-md flex-col px-5 pb-8 pt-6">
        <header className="flex items-center justify-between">
          <button
            <button
  type="button"
  onClick={onBack}
  className="flex items-center gap-2 text-lg font-bold text-[#ff6f8f] active:scale-95"
>
            <span className="text-3xl">‹</span>
            Back
          </button>

          <div className="text-center">
            <p className="text-3xl font-black tracking-tight text-[#ff6f8f]">
              Coco
            </p>
            <p className="text-xs font-bold text-[#6f5146]">
              The kids' shopping helper
            </p>
          </div>

          <button
            type="button"
            className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0f4] text-3xl shadow-sm active:scale-95"
            aria-label="Open cart"
          >
            🛒
            <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ff6f8f] px-1 text-xs font-bold text-white">
              2
            </span>
          </button>
        </header>

        <section className="mt-8 grid items-center gap-5 sm:grid-cols-[1fr_180px]">
          <div>
            <h1 className="text-5xl font-black leading-tight tracking-tight text-[#16213e]">
              No idea what
              <br />
              to buy? 😅
            </h1>
            <p className="mt-5 text-lg font-medium leading-8 text-[#6f5146]">
              No worries, Dad! Tell me a little and I'll find something safe,
              cute and mum-approved.
            </p>
          </div>

          <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full bg-[#ffe9f0]">
            <Image
              src="/images/home1.avif"
              alt="Lost dad helper"
              fill
              priority
              className="object-cover"
            />
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] bg-white p-5 shadow-[0_18px_50px_rgba(120,60,30,0.10)]">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff6f8f] text-xl font-black text-white">
              1
            </span>
            <h2 className="text-2xl font-black text-[#16213e]">Who is it for?</h2>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {audienceOptions.map((option) => (
              <LostDadOption
                key={option.label}
                image={option.image}
                label={option.label}
              />
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-[2rem] bg-white p-5 shadow-[0_18px_50px_rgba(120,60,30,0.10)]">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff6f8f] text-xl font-black text-white">
              2
            </span>
            <h2 className="text-2xl font-black text-[#16213e]">
              What are you buying?
            </h2>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {buyingOptions.map((option) => (
              <LostDadOption
                key={option.label}
                image={option.image}
                label={option.label}
              />
            ))}
          </div>
        </section>

        <button
          type="button"
          className="mt-7 rounded-full bg-[#ff4f87] px-6 py-5 text-xl font-black text-white shadow-[0_14px_35px_rgba(255,79,135,0.35)] transition active:scale-[0.98]"
        >
          Find safe picks ✨
        </button>

        <p className="mt-4 text-center text-sm font-semibold text-[#8a746b]">
          🔒 We only show dad-friendly options
        </p>
      </div>
    </main>
  );
}