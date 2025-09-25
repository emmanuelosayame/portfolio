'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import useMediaQuery from './use-media-query';

interface BlurryCursorProps {
  isActive?: boolean;
}

export default function BlurryCursor({ isActive = false }: BlurryCursorProps) {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || isMobile) {
    return null;
  }

  return <Component isActive={isActive} />;
}

function Component({ isActive }: BlurryCursorProps) {
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const circle = useRef<HTMLDivElement | null>(null);
  const rafId = useRef<number>(0);
  const size = isActive ? 100 : 60;

  const lerp = (start: number, end: number, alpha: number): number =>
    start + (end - start) * alpha;

  const manageMouseMove = (e: MouseEvent) => {
    mouse.current = { x: e.clientX, y: e.clientY };
  };

  const animate = () => {
    delayedMouse.current.x = lerp(delayedMouse.current.x, mouse.current.x, 0.2);
    delayedMouse.current.y = lerp(delayedMouse.current.y, mouse.current.y, 0.2);

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
    rafId.current = requestAnimationFrame(animate);
  };

  const moveCircle = (x: number, y: number) => {
    if (circle.current) {
      gsap.set(circle.current, {
        x,
        y,
        xPercent: -50,
        yPercent: -50,
      });
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [isActive]);

  return (
    <div className='inset-0 absolute pointer-events-none z-50'>
      <div
        ref={circle}
        style={{
          width: size,
          height: size,
          filter: `blur(${isActive ? 12 : 3}px)`,
          transition: 'width 0.3s ease, height 0.3s ease, filter 0.3s ease',
        }}
        className='top-0 left-0 fixed rounded-full mix-blend-difference
         bg-neutral-600/20 border border-black/20 shadow-[inset_0_0_10px_rgba(0,0,0,0.1)]'
      />
    </div>
  );
}
