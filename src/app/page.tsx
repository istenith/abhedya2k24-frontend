import { BackgroundBeams } from "@/components/background-beams";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="rounded-md min-h-[80vh] flex flex-col items-center justify-center gap-4 ">
        <div className="max-w-5xl ">
          <h1 className="relative z-10  text-7xl md:text-9xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Abhedya 3.0
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-xl text-center relative ">
            Write Here something about Abhedya
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
