"use client"
import { motion, useScroll, useSpring } from "framer-motion"

export function ReadingProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 z-50 origin-left"
      style={{ scaleX }}
    />
  )
}

export default ReadingProgressBar
