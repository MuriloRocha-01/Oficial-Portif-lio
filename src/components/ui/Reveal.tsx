"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/** Faz o conteúdo aparecer subindo suavemente na primeira vez que entra na tela. `delay` em segundos. */
export default function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
