import React from 'react'
import Link from 'next/link'
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div>
      <div className="fixed inset-x-0 mx-auto flex justify-around flex-row w-1/4 rounded-b-2xl p-2 text-center bg-zinc-800 border-r-2 border-b-2 border-l-2">   
        <p>
        <Link href="/play/">Play</Link>

        </p>
        <Link href="/rules">Rules</Link>
      </div>      
    </div>
  )
}
export default Navbar
