

import Image from "next/image";

const trustItems = [
  {
    icon: "♡",
    title: "Curated with love",
    subtitle: "Every item is carefully chosen",
  },
  {
    icon: "✿",
    title: "Quality you can trust",
    subtitle: "Good pieces that last",
  },
  {
    icon: "▣",
    title: "Packed with care",
    subtitle: "Thoughtful packaging just for you",
  },
  {
    icon: "🚚",
    title: "Fast & reliable shipping",
    subtitle: "Quick delivery, right to your door",
  },
];

const newArrivals = [
  {
    image: "/images/picky-new-dress.avif",
    badge: "NEW",
    title: "Floral Ruffle Dress",
    age: "6–12m",
    price: "$29.95",
  },
  {
    image: "/images/picky-new-cardigan.avif",
    badge: "NEW",
    title: "Knit Cardigan",
    age: "1–2y",
    price: "$34.95",
  },
  {
    image: "/images/picky-new-overalls.avif",
    badge: "NEW",
    title: "Linen Overalls",
    age: "2–3y",
    price: "$36.95",
  },
  {
    image: "/images/picky-new-swaddle.avif",
    badge: "NEW",
    title: "Muslin Swaddle",
    age: "One Size",
    price: "$22.95",
  },
];

const categories = [
  {
    image: "/images/picky-category-baby-girl.avif",
    title: "Baby Girl",
    accent: "♡",
  },
  {
    image: "/images/picky-category-baby-boy.avif",
    title: "Baby Boy",
    accent: "♡",
  },
  {
    image: "/images/picky-category-toys-books.avif",
    title: "Toys & Books",
    accent: "▣",
  },
  {
    image: "/images/picky-category-accessories.avif",
    title: "Accessories",
    accent: "♡",
  },
  {
    image: "/images/picky-category-home-more.avif",
    title: "Home & More",
    accent: "⌂",
  },
];

type PickyMumViewProps = {
  onBack: () => void;
};

export function PickyMumView({ onBack }: PickyMumViewProps) {
  return (
    <main className="min-h-screen bg-[#fff7ef] text-[#321f17]">
      <div className="mx-auto flex min-h-screen max-w-md flex-col px-5 pb-8 pt-6">
        <header className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-lg font-bold text-[#ff6f8f] active:scale-95"
          >
            <span className="text-3xl">‹</span>
            Back
          </button>

          <div className="text-center">
            <p className="text-4xl font-black tracking-[0.08em] text-[#ff6f8f]">
              COCO
            </p>
            <p className="text-sm font-bold text-[#ff6f8f]">
              Curated with love 💗
            </p>
          </div>

          <button
            type="button"
            className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0f4] text-3xl shadow-sm active:scale-95"
            aria-label="Open cart"
          >
            🛍️
            <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ff6f8f] px-1 text-xs font-bold text-white">
              2
            </span>
          </button>
        </header>

        <section className="mt-7 overflow-hidden rounded-[2rem] bg-[#fff0f4] shadow-[0_18px_50px_rgba(120,60,30,0.10)]">
          <div className="grid grid-cols-[1fr_44%] items-stretch">
            <div className="p-6">
              <h1 className="text-4xl font-black leading-tight tracking-tight text-[#3b1747]">
                Handpicked
                <br />
                with love.
              </h1>

              <div className="mt-5 flex items-center gap-3 text-[#ff6f8f]">
                <span className="h-px w-12 bg-[#ff6f8f]" />
                <span>♡</span>
                <span className="h-px w-12 bg-[#ff6f8f]" />
              </div>

              <p className="mt-5 text-base font-medium leading-7 text-[#6f5146]">
                Beautiful clothes and cute things, chosen with care just for you.
              </p>

              <button
                type="button"
                className="mt-7 rounded-2xl bg-[#ff4f87] px-5 py-4 text-base font-black text-white shadow-[0_12px_28px_rgba(255,79,135,0.32)] active:scale-[0.98]"
              >
                Shop New Arrivals ›
              </button>
            </div>

            <div className="relative min-h-72">
              <Image
                src="/images/picky-hero-rack.avif"
                alt="Curated clothes rack"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mt-5 grid grid-cols-2 gap-3 rounded-[2rem] bg-white p-4 shadow-[0_18px_50px_rgba(120,60,30,0.10)]">
          {trustItems.map((item) => (
            <div key={item.title} className="rounded-3xl bg-[#fff7fb] p-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#ffe1ea] text-3xl text-[#ff6f8f]">
                {item.icon}
              </div>
              <h2 className="mt-3 text-sm font-black leading-5 text-[#3b1747]">
                {item.title}
              </h2>
              <p className="mt-2 text-xs font-medium leading-5 text-[#6f5146]">
                {item.subtitle}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-7">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-[#3b1747]">New Arrivals ♡</h2>
            <button type="button" className="font-bold text-[#ff6f8f]">
              See all ›
            </button>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            {newArrivals.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl bg-white shadow-[0_12px_35px_rgba(120,60,30,0.10)]"
              >
                <div className="relative h-40 bg-[#fff0f4]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[#ff6f8f] px-3 py-1 text-xs font-black text-white">
                    {item.badge}
                  </span>
                  <button
                    type="button"
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-lg text-[#ff6f8f] shadow-sm"
                  >
                    ♡
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-black leading-5 text-[#321f17]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#8a746b]">{item.age}</p>
                  <p className="mt-2 text-base font-black text-[#ff4f87]">
                    {item.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-7">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-[#3b1747]">
              Browse by Category
            </h2>
            <button type="button" className="font-bold text-[#ff6f8f]">
              See all ›
            </button>
          </div>

          <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.title}
                type="button"
                className="w-36 shrink-0 overflow-hidden rounded-3xl bg-white shadow-[0_12px_35px_rgba(120,60,30,0.10)] active:scale-[0.98]"
              >
                <div className="relative h-28 bg-[#fff0f4]">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 px-3 py-3 text-sm font-black text-[#3b1747]">
                  <span className="text-[#ff6f8f]">{category.accent}</span>
                  {category.title}
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-6 flex items-center gap-4 rounded-[2rem] bg-[#ffe8f0] p-5 shadow-sm">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-3xl bg-white">
            <Image
              src="/images/picky-coco-note.avif"
              alt="Coco note"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-black text-[#3b1747]">Hi! I'm Coco 💗</h2>
            <p className="mt-2 text-sm font-medium leading-6 text-[#6f5146]">
              I look for beautiful, practical and joy-sparking finds for little ones.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}