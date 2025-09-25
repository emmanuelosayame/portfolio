'use client';

import { LazyMotion, domAnimation } from 'framer-motion';
import { ReactNode } from 'react';
import BlurryCursor from '../domains/cursor';

const Client = ({ children }: { children: ReactNode }) => {
  return (
    <LazyMotion features={domAnimation}>
      <BlurryCursor />
      {children}
    </LazyMotion>
  );
};

export default Client;
