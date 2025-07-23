"use client";
import { useEffect } from "react";
import { useInView } from "framer-motion";

export const useSectionInView = (
  ref: React.RefObject<HTMLElement>,
  setBg: (color: string) => void,
  color: string
) => {
  const inView = useInView(ref, { threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setBg(color);
    }
  }, [inView, color, setBg]);
};
