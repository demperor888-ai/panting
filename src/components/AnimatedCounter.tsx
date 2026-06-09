'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ end, suffix = '', duration = 2, className = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  const count = useMotionValue(0);
  const spring = useSpring(count, { duration: duration * 1000, bounce: 0 });
  const rounded = useTransform(spring, (val) => Math.round(val));

  useEffect(() => {
    if (isInView) {
      count.set(end);
    }
  }, [isInView, end, count]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <motion.span>{rounded}</motion.span>{suffix}
    </motion.span>
  );
}
