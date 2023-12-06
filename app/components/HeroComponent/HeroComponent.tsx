'use client'
import React from 'react'
import styles from './page.module.css'
import { motion, AnimatePresence } from 'framer-motion'


const HeroComponent = () => {
  return (
    <AnimatePresence>
    <div 
      className={styles.hero}
    >
      <motion.main 
        initial= {{opacity: 0, y: -500, scale: 0.5}}
        animate= {{opacity: 1, y: -10, scale: 1}}
        exit={{opacity: 0, y: 100, scale: 1}}
        transition={{delay: 0.20, duration: 0.8}}
        className={"flex min-h-screen w-full flex-col items-center justify-between p-24"}
      >
        <h1 className={"text-center text-8xl"}>Abhedya</h1>
      </motion.main>      
      <motion.h2
        initial= {{opacity: 0, y: 300}}
        animate = {{opacity: 1, y: -50}}
        transition={{delay: 1, duration: 0.5}}
        className="text-center">Find the Mystery within
      </motion.h2>
    </div>
    </AnimatePresence>
  )
}

export default HeroComponent
