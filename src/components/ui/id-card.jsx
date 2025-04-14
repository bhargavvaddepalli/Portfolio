'use client';;
import { motion, useAnimation } from 'motion/react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/lib/utils';

const Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.3,
      delay: custom * 0.1,
    },
  }),
};

const IdCardIcon = forwardRef(({ onMouseEnter, onMouseLeave, className, size = 30, ...props }, ref) => {
  const controls = useAnimation();
  const isControlledRef = useRef(false);

  useImperativeHandle(ref, () => {
    isControlledRef.current = true;

    return {
      startAnimation: () => controls.start('animate'),
      stopAnimation: () => controls.start('normal'),
    };
  });

  const handleMouseEnter = useCallback((e) => {
    if (!isControlledRef.current) {
      controls.start('animate');
    } else {
      onMouseEnter?.(e);
    }
  }, [controls, onMouseEnter]);

  const handleMouseLeave = useCallback((e) => {
    if (!isControlledRef.current) {
      controls.start('normal');
    } else {
      onMouseLeave?.(e);
    }
  }, [controls, onMouseLeave]);

  return (
    (<div
      className={cn(
        `cursor-pointer select-none  hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center`,
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <motion.path d="M16 10h2" variants={Variants} animate={controls} custom={2} />
        <motion.path d="M16 14h2" variants={Variants} animate={controls} custom={2} />
        <motion.path
          d="M6.17 15a3 3 0 0 1 5.66 0"
          variants={Variants}
          animate={controls}
          custom={0} />
        <motion.circle cx="9" cy="11" r="2" variants={Variants} animate={controls} custom={1} />
        <rect x="2" y="5" width="20" height="14" rx="2" />
      </svg>
    </div>)
  );
});

IdCardIcon.displayName = 'IdCardIcon';

export default IdCardIcon;
