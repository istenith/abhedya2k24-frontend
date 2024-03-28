"use client";
import React, {useState, useEffect} from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";

import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { BackgroundBeams } from "@/components/background-beams";
import { baseUrl } from "@/utils/config";

export default function SignupFormDemo() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setusername] = useState('')
  const [userRegistered, setUserRegistered] = useState(false)

  const handleRegister = async (e: any) => {
    if(!firstName || !lastName || !email || !username) {
      alert('Please fill in all the fields')
      return
    }
    e.preventDefault()
    
    console.log(baseUrl)

    fetch(`${baseUrl}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, email, firstName, lastName})
    }).then(res => {
        if(res.status == 200) {

          setFirstName('')
          setLastName('')
          setEmail('')
          setusername('')
          setUserRegistered(true)

          console.log(res)                  
          return res
        } else if (res.status == 400) {          
          alert('user already exists. Please check your email (also spam folder) for the login link.')
          setFirstName('')
          setLastName('')
          setEmail('')
          setusername('')       
        } else if (res.status == 422) {
          alert("Please enter you college email id.")
          setEmail('')
        } else if (res.status == 421) {
          alert("Username already taken.")
          setEmail('')
        }
      })
  }

  return (
      <div className="antialiased bd-grid-white/[0.02]">
        <div className="max-w-md w-full mt-12 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          {
            !userRegistered ? (
              <>
                <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 text-center">Sign Up to Abhedya2k24
                </h2>
                
                <form className="my-8">
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">                  
                  <input
                      onChange={(e)=>setFirstName(e.target.value)}
                      type="text"
                      value={firstName}
                      placeholder="First Name"
                      className="rounded-full border text-white border-neutral-600 focus:ring-2 focus:ring-teal-500 h-10 p-4 w-full relative z-10  bg-neutral-950 placeholder:text-neutral-500"
                    />
                    <input
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      value={lastName}
                      placeholder="Last Name"
                      className="rounded-full border text-white border-neutral-600 focus:ring-2 focus:ring-teal-500 h-10 p-4 w-full relative z-10  bg-neutral-950 placeholder:text-neutral-500"
                    />
                  </div>
                  <input
                      onChange={(e) => setusername(e.target.value)}
                      type="text"
                      value={username}
                      placeholder="Username"
                      className="mb-5 rounded-full text-white border border-neutral-600 focus:ring-2 focus:ring-teal-500 h-10 p-4 w-full relative z-10  bg-neutral-950 placeholder:text-neutral-500"
                    />
                    <input
                      onChange={(e)=> setEmail(e.target.value)}
                      type="text"
                      value={email}
                      placeholder="College E-mail ID"
                      className="mb-5 rounded-full text-white border border-neutral-600 focus:ring-2 focus:ring-teal-500 h-10 p-4 w-full relative z-10  bg-neutral-950 placeholder:text-neutral-500"
                    />
                  
                  
                  <div className="flex flex-col items-center justify-center">
                    <button
                      className="hover:bg-gray-700 tracking-widest font-extrabold duration-200 border border-accent-800 rounded-full w-full h-10 "
                      onClick={handleRegister}
                    >
                      Register
                      <BottomGradient />
                    </button>
                  </div>      
                </form>
              </>
            ) : (
              <div className="text-lg text-gray-300">
                <h1>Bingo! You are now <span className=" text-green-500">registered</span> for <big className="font-bold text-white">Abhedya</big> - <u>the biggest online cryptic hunt</u> @ NIT Hamirpur</h1><br />
                <p>
                  You will shortly recieve an email with a login link (make sure to check the spam folder!).<br /> Click on that link to start playing.<br /> All the best! <br/>
                </p>
              </div>
            )}
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
