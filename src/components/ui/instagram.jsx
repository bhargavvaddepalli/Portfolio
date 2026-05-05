'use client';
import { motion, useAnimation } from 'motion/react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/lib/utils';

const InstagramIcon = forwardRef(({ onMouseEnter, onMouseLeave, className, size = 25, ...props }, ref) => {
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
    <div
      className={cn(
        `cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center`,
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
        {/* Outer rounded rectangle */}
        <motion.rect
          width="20"
          height="20"
          x="2"
          y="2"
          rx="5"
          ry="5"
          variants={{
            normal: { rx: 5, scale: 1 },
            animate: { rx: 7, scale: 1.05 },
          }}
          animate={controls}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        />
        {/* Center circle */}
        <motion.circle
          cx="12"
          cy="12"
          r="4"
          variants={{
            normal: { r: 4, opacity: 1 },
            animate: { r: 4.5, opacity: 1 },
          }}
          animate={controls}
          transition={{ type: 'spring', stiffness: 500, damping: 25, delay: 0.1 }}
        />
        {/* Top-right dot */}
        <motion.circle
          cx="17.5"
          cy="6.5"
          r="0.8"
          fill="currentColor"
          stroke="none"
          variants={{
            normal: { scale: 1, opacity: 1 },
            animate: { scale: 1.8, opacity: 1 },
          }}
          animate={controls}
          transition={{ type: 'spring', stiffness: 600, damping: 15, delay: 0.15 }}
        />
      </svg>
    </div>
  );
});

InstagramIcon.displayName = 'InstagramIcon';

export default InstagramIcon;
