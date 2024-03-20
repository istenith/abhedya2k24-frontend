import Herosection from "@/components/herosection";
import Image from "next/image";
import Footer from "@/components/footer";
import { BackgroundBeams } from "@/components/background-beams";
import Rules from "@/components/rules";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import Sparkle from "@/components/sparkle";
import { Button } from "@/components/ui/moving-border";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Sign from "@/components/sign";
import Navbar from "@/components/Navbar";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces`;

export default function Home() {
  return (
    <>
      <div className="rounded-md min-h-[80vh] flex flex-col items-center justify-center gap-4 ">
        <BackgroundBeams />
        <div className="max-w-5xl ">
          <h1 className="relative z-10  text-7xl md:text-9xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Abhedya 3.0
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-xl text-center relative ">
            Write Here something about Abhedya
          </p>
        </div>
        <button className="shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          Play Game
        </button>
      </div>
    </>
  );
}
