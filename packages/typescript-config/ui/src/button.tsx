"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName?: string;
}

export const Button = ({ children }: any) => {
  return (
    <button
      onClick={() => alert(`Hello from your app!`)}
    >
      {children}
    </button>
  );
};
