'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedCardProps {
  children: React.ReactNode
  delay?: number
  className?: string
  hoverLift?: boolean
}

export default function AnimatedCard({
  children,
  delay = 0,
  className = '',
  hoverLift = false,
}: AnimatedCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hoverLift ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  )
}
