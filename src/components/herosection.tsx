import React from "react";
import  cn  from "@/utils/cn";
import { Spotlight } from "./ui/spotlight";

import Link from "next/link";
import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "./ui/text-generate-effect";
const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces
`

export default function SpotlightPreview() {
  return (
    <div className="h-full w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10 w-full pt-20 md:pt-0 m-20" >
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 m-40">
 ABHEDYA 3.0
        </h1>
<div className="mt-4 font-normal text-base text-neutral-300  text-center mx-auto">
<TextGenerateEffect words={words} />

</div>


    <div className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto ">
 <Button 
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 "
      >
 

Play Game 

  </Button>
    </div>


      </div>
      <div>

      </div>
    </div>
  );
}
