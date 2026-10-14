import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function Reveal({ children, className, id, delay = 0 }: {
  children: ReactNode; className?: string; id?: string; delay?: number
}) {
  const reduced = useReducedMotion()
  return (
    <motion.section
      id={id}
      className={className}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: reduced ? 0 : 0.45, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.section>
  )
}
