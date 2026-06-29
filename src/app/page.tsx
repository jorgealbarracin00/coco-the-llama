"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.45em] text-yellow-200/70">
          Coco The Llama
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-7xl">
          Llama is in town! 😎
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
          Welcome to a unique place for building ideas, projects, memories,
          agents, and useful AI workflows.
        </p>

        <div className="mt-10 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left backdrop-blur">
            <p className="text-sm uppercase tracking-[0.25em] text-yellow-200/60">
              Chat
            </p>
            <h2 className="mt-3 text-xl font-medium">Talk with Coco</h2>
            <p className="mt-2 text-sm leading-6 text-white/55">
              A calm AI workspace for questions, plans, drafts, and decisions.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left backdrop-blur">
            <p className="text-sm uppercase tracking-[0.25em] text-yellow-200/60">
              Projects
            </p>
            <h2 className="mt-3 text-xl font-medium">Build things</h2>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Organize ideas, apps, experiments, and long-term creative work.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left backdrop-blur">
            <p className="text-sm uppercase tracking-[0.25em] text-yellow-200/60">
              Memory
            </p>
            <h2 className="mt-3 text-xl font-medium">Remember context</h2>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Coco will eventually remember what matters and help you continue.
            </p>
          </div>
        </div>
      </section>

      {showSplash && (
        <div className="fixed inset-0 z-50 bg-black transition-opacity duration-500">
          <Image
            src="/splash/coco.avif"
            alt="Coco The Llama"
            fill
            priority
            className="object-cover"
          />
        </div>
      )}
    </main>
  );
}