"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export default function LampDemo() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <h1 className="text-5xl mx-inset-3 text-zinc-200  font-semibold">RULES</h1>
      <div className="">
              <ul className=" list-inside list-decimal pl-5">
                <li>This hunt consists of 15 questions, going from easy to hard and harder. Correctly answering the last one leads to the great surprise.</li>
                <li>You can use internet and all other related facilities</li>
                <li>Once you click Start, your time taken per question will be recorded, no matter if you close your phone or laptop.</li>
                <li>Keep your answers safe somewhere for future reference.</li>
                <li>Preferrably play on a laptop, or keep a laptop available incase it is required to clear a level.</li>
                <li>Answers can be in lowercase/uppercase/capitalize/camelcase.</li>
              </ul>
      </div>
     </div>
  );
}
