import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      <Image
        src="/splash/coco.avif"
        alt="Coco The Llama"
        fill
        priority
        className="object-cover"
      />
    </main>
  );
}