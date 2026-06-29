

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="mt-8 rounded-[2rem] bg-gradient-to-br from-[#fff0e8] to-[#ffe7ef] p-6 shadow-[0_20px_60px_rgba(120,60,30,0.12)]">
      <div className="flex flex-col items-center text-center">
        <div className="relative h-64 w-full max-w-[260px]">
          <Image
            src="/splash/coco.avif"
            alt="Coco the Llama"
            fill
            priority
            className="object-contain"
          />
        </div>

        <h1 className="mt-4 text-4xl font-black text-[#321f17]">
          Hi there! 👋
        </h1>

        <p className="mt-2 text-xl font-bold text-[#321f17]">
          How can we help you today?
        </p>

        <p className="mt-3 max-w-sm text-base leading-7 text-[#6f5146]">
          Tell us what you're looking for and we'll show you our best picks.
        </p>
      </div>
    </section>
  );
}