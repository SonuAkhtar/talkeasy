"use client";

import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Major_Mono_Display, Yatra_One } from "next/font/google";
import "./pageLoader.css";

const loadingText = Major_Mono_Display({
  weight: "400",
  subsets: ["latin"],
});

const loadingCount = Yatra_One({
  weight: "400",
  subsets: ["latin"],
});

const PageLoader = () => {
  const [countVal, setCountVal] = useState<number>(0);
  const countRef = useRef<number>();
  const pathname = usePathname();

  useEffect(() => {
    countRef.current = window.setInterval(() => {
      setCountVal((prev) => prev + 1);
    }, 20);

    return () => {
      clearInterval(countRef.current);
    };
  }, []);

  useEffect(() => {
    if (countVal === 100) clearInterval(countRef.current);
  }, [countVal]);

  return (
    <>
      <div
        className={`pageLoader ${pathname !== "/" && "pages"} ${
          loadingText.className
        } ${countVal === 100 && "complete"}`}
      >
        <div className={`counter ${loadingCount.className}`}>{countVal}</div>
      </div>
    </>
  );
};

export default PageLoader;
