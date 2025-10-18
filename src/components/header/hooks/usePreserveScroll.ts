import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const usePreserveScroll = () => {
  const { pathname } = useLocation();
  const scrollPos = useRef(window.scrollY);

  useLayoutEffect(() => {
    // Restore previous scroll position after navigation
    window.scrollTo(0, scrollPos.current);
  }, [pathname]);

  const saveScroll = () => {
    scrollPos.current = window.scrollY;
  };

  return saveScroll;
};
