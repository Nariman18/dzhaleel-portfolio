"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function HomeClient() {
  const [vh, setVh] = useState("100vh");

  useEffect(() => {
    const handleResize = () => {
      setVh(`${window.innerHeight}px`);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{ height: vh }}
      className="sm:bg-[url('/bg-image.png')] bg-[url('/rotatedimg.png')] bg-cover w-full"
    >
      <div
        style={{ height: vh }}
        className="flex flex-col items-center justify-center"
      >
        <div className="relative w-[171px] h-[130px] lg:w-[303px] lg:h-[230px] z-10">
          <Image
            fill
            src={"/coming soon.png"}
            className="object-contain"
            alt="coming soon"
            priority
          />
        </div>
        <h3 className="text-white text-[20px] lg:text-[34px] font-[300]">
          Soon. It&rsquo;s becoming
        </h3>
      </div>
    </div>
  );
}

export default HomeClient;
