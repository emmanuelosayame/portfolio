"use client";

import { LazyMotion, domMax } from "framer-motion";
import { ReactNode } from "react";

const Client = ({ children }: { children: ReactNode }) => {
  return <LazyMotion features={domMax}>{children}</LazyMotion>;
};

export default Client;
