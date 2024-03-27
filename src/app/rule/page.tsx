"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
  
      </motion.h1>
      <h1 className="text-5xl mx-inset-3 text-zinc-200  font-semibold">RULES</h1>
      <div className="m ">
      <ul className="list-disc text-2xl justify-center  text-zinc-200 items-center py-2">
        <li>You can use internet and all other related facilities</li>
        <li>Once you click Start, your time taken oer question will be recorded, no matter if you close you phone or laptop.</li>
      </ul>
      </div>


    </LampContainer>
  );
}
