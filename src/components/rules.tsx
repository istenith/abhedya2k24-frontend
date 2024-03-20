"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export  default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}  className="text-gray-400  "
      >
      

<div className="rounded mt-20 ">
<ul className="list-disc p-40 fontfamily-font-serif">
        <li >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae corrupti doloribus suscipit? Minima dolorem aut natus, accusantium nisi nam temporibus laudantium, ducimus reiciendis, obcaecati sint rem sapiente incidunt? Quibusdam?</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quo deserunt praesentium eligendi reiciendis reprehenderit hic quos quis odit iure.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur explicabo iusto optio sit at sint modi perferendis ut, harum suscipit!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et incidunt iusto saepe dolore quam numquam libero non fugit, hic laboriosam.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat eum esse error non quisquam sint aliquid eos? Repudiandae, reprehenderit facere.</li>
     </ul>
</div>
   

      </motion.h1>
    </LampContainer>
  );
}
