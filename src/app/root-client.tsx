"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { ReactNode } from "react";

const Client = ({ children }: { children: ReactNode }) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

export default Client;
