import { useRef } from "react";
import { useInView } from "framer-motion";

export const useScrollReveal = (once = true, margin = "-80px") => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });
  return { ref, isInView };
};
