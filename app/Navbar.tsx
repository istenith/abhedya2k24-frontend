"use client"
import React from 'react'
import Link from 'next/link'
import {motion} from "framer-motion"


const Navbar = () => {
  return (
      <motion.div 
        initial={{y: -100}}
        animate={{y: 0}}
        exit={{y: -100}}
        transition={{duration: 0.8, delay: 2}}
        className={"fixed z-50 inset-x-0 mx-auto flex justify-around flex-row w-1/4 rounded-b-2xl p-2 text-center bg-zinc-900 border-r-2 border-b-2 border-l-2"}>   
        <p>
        <Link href="/play/">Play</Link>
        </p>
        <Link href="/rules">Rules</Link>
      </motion.div>      
  )
}
export default Navbar
