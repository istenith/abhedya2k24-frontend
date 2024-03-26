import { BackgroundBeams } from "@/components/background-beams";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="rounded-md flex flex-col items-center justify-start gap-4 ">
        <div className="max-w-5xl ">
          <sup className="text-lg text-gray-400">30.3.24</sup>
          <h1 className="relative z-10 text-7xl md:text-9xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Abhedya 3.0
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-3xl mx-auto my-2 text-lg text-center relative">
          Embark on a cosmic adventure with Abhedya, an interstellar cryptic hunt challenging your logical, technical, and creative thinking.
          May the constellations align in your favor as you reach for the stars and strive to become the ultimate cosmic conqueror!
          </p>
        </div>
        <Link href="/game">
          <button className="shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
            Play Game
          </button>
        </Link>
      </div>
    </>
  );
}
