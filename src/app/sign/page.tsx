"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { BackgroundBeams } from "@/components/background-beams";

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
 <div className=" antialiased bd-grid-white/[0.02]">
     <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black mt-20">
      <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 text-center">
      Sign Up to Abhedya2k24
      </h2>
      

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
         
        <input
        
            type="text"
            placeholder="First Name"
            className="rounded-full border border-neutral-800 focus:ring-2 focus:ring-teal-500 h-10 p-4 w-full relative z-10  bg-neutral-950 placeholder:text-neutral-700"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="rounded-full border border-neutral-800 focus:ring-2 focus:ring-teal-500 h-10 p-4 w-full relative z-10  bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
        <input
        
            type="text"
            placeholder="Username"
            className="mb-5 rounded-full border border-neutral-800 focus:ring-2 focus:ring-teal-500 h-10 p-4 w-full relative z-10  bg-neutral-950 placeholder:text-neutral-700"
          />
          <input
            type="text"
            placeholder="Email"
            className="mb-5 rounded-full border border-neutral-800 focus:ring-2 focus:ring-teal-500 h-10 p-4 w-full relative z-10  bg-neutral-950 placeholder:text-neutral-700"
          />
        
        
    <div className="flex flex-col items-center justify-center">
        <button
          className="hover:bg-gray-700 border border-neutral-800 rounded-full w-1/2 h-10 "
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
        </div> 

      
      </form>
    </div>
 </div>

  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
