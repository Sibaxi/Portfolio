import { useState, useEffect } from "react";

function getWidth() {
  if (typeof window === "undefined") {
    return 0;
  }

  return window.innerWidth;
}

function getHeight() {
  if (typeof window === "undefined") {
    return 0;
  }

  return window.innerHeight;
}

export default function useDetectSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(getWidth());
      setHeight(getHeight());
    }
    setWidth(getWidth());
    setHeight(getHeight());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width, height };
}
