"use client";

import { actionCards, bottomNavigation, homeHeader, trustItems } from "@/data/homeMock";
import { useState } from "react";
import { BottomNav } from "./BottomNav";
import { HeroSection } from "./HeroSection";
import { HomeActionCard } from "./HomeActionCard";
import { HomeHeader } from "./HomeHeader";
import { LostDadHelperView } from "./LostDadHelperView";
import { PickyMumView } from "./PickyMumView";
import { TrustBar } from "./TrustBar";

export function HomePage() {
  const [activeView, setActiveView] = useState<"home" | "lostDad" | "pickyMum">("home");

  if (activeView === "lostDad") {
    return <LostDadHelperView onBack={() => setActiveView("home")} />;
  }

  if (activeView === "pickyMum") {
    return <PickyMumView onBack={() => setActiveView("home")} />;
  }

  return (
    <main className="min-h-screen bg-[#fff7ef] text-[#321f17]">
      <div className="mx-auto flex min-h-screen max-w-md flex-col px-6 pb-6 pt-8">
        <HomeHeader cartCount={homeHeader.cartCount} />

        <section className="mt-10 text-center">
          <h1 className="text-6xl font-black tracking-[0.12em] text-[#ff7885] drop-shadow-sm">
            COCO
          </h1>
          <h2 className="mt-1 text-2xl font-black tracking-[0.2em]">
            THE LLAMA
          </h2>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-[#5d3428]">
            Curated with love
            <br />
            for mums and bubs
          </p>
        </section>

        <HeroSection />

        <section className="mt-6 space-y-3">
          {actionCards.map((card) => (
            <HomeActionCard
              key={card.title}
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
              active={card.active}
              onClick={() => {
                if (card.title.includes("lost dad")) {
                  setActiveView("lostDad");
                }

                if (card.title.includes("picky mum")) {
                  setActiveView("pickyMum");
                }
              }}
            />
          ))}
        </section>

        <div className="mt-6">
          <TrustBar items={trustItems} />
        </div>

        <div className="mt-auto pt-6">
          <BottomNav selectedIndex={bottomNavigation.selectedIndex} />
        </div>
      </div>
    </main>
  );
}
