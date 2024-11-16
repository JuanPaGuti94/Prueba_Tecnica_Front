import { useState, useEffect } from "react";
 
export function useScreenSize(): { width: number; height: number, isMobile: boolean, isTablet: boolean, isDesktop: boolean } {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
 
  const handleScreenResize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
 
  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
 
    return () => window.removeEventListener("resize", handleScreenResize);
  }, [screenSize]);

  const isMobile = screenSize.width < 1024;
  const isTablet = screenSize.width >= 1024 && screenSize.width < 1440;
  const isDesktop = screenSize.width >= 1440;

  return { ...screenSize, isMobile, isTablet, isDesktop };
}

export default useScreenSize;