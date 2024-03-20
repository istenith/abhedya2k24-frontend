"use client";
import React from "react";
import Image from "next/image";
import { BackgroundBeams } from "@/components/background-beams";

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
export default function BackgroundGradientDemo() {
  return (
    <div className="flex flex-col  items-center gap-5">
      <BackgroundBeams />
      <span className="text-4xl mt-6">Level Number Here</span>
      <div className="border my-auto bg-[#151515] rounded shadow border-white/[0.2] flex flex-col items-center max-w-[80vw] mt-8 gap-6 mx-auto p-4  h-[43rem]  ">
        <div>
          <h2 className="dark:text-white  mt-4 text-lg text-justify font-normal">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </h2>
        </div>
        <img src="https://0x0.st/XrOk.JPG" className="lg:w-[600px] sm:w-[320px] md:w-[490px]" />
        <div className="w-full gap-2 flex flex-row items-center ">
          <input
            type="text"
            placeholder="Type your answer here"
            className="rounded-full border border-neutral-800 focus:ring-2 focus:ring-teal-500 h-10 p-4 w-full relative z-10  bg-neutral-950 placeholder:text-neutral-700"
          />
          <button className="shadow-[inset_0_0_0_2px_#616467] px-5 py-2 flex items-center gap-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
