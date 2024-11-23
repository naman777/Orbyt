import { Appbar } from "@/components/Appbar";
import { Hero } from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen pb-48 overflow-hidden">
      <Appbar />
      <div className="pt-8 flex flex-col md:flex-row justify-between md:w-full ml-4">
        <Hero />
        <div className="mt-8 md:mt-0 md:ml-12 flex justify-center ">
          <Image
            src="https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726210651/Homepage%20%E2%80%94%20Sept%202024/homepage-hero_vvpkmi.png"
            width={500}
            height={500}
            alt="main"
            className=""
          />
        </div>
      </div>
    </main>
  );
}
