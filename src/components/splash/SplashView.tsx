

"use client";

import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";

type SplashViewProps = {
  children: ReactNode;
};

export function SplashView({ children }: SplashViewProps) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {children}

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-700 ${
          showSplash
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <Image
          src="/splash/coco.avif"
          alt="Coco The Llama"
          fill
          priority
          className="object-cover"
        />
      </div>
    </>
  );
}