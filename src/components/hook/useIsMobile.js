"use client";
import { useState, useEffect } from "react";

export default function useIsMobile(breakpoint) {
  // Initialize the state with a boolean indicating if the viewport width is less than the breakpoint
  const windowWidth = Math.max(window?.innerWidth, window?.outerWidth, 0) || 0;
  const [isMobile, setIsMobile] = useState(windowWidth < breakpoint || false);

  useEffect(() => {
    // Define a function to handle window resize events
    const handleResize = () => {
      setIsMobile(windowWidth < breakpoint);
    };

    // Add the event listener for window resize
    window?.addEventListener("resize", handleResize);

    // Call the handler immediately to set the initial state
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
}
