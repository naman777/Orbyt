import { Appbar } from "@/components/Appbar";
import { Hero } from "@/components/Hero";
import { HeroVideo } from "@/components/HeroVideo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen pb-48 overflow-hidden">  {/* Changed className here */}
      <Appbar />
      <div className="pt-8 flex justify-between">
        <Hero />
        <Image
          src="https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726210651/Homepage%20%E2%80%94%20Sept%202024/homepage-hero_vvpkmi.png"
          width={500}
          height={500}
          alt="main"
          className="mr-12"
        />
      </div>
    </main>
  );
}
