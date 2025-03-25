import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url('/bg-image.png')] h-screen w-full">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="relative w-[289px] h-[222px] lg:w-[489px] lg:h-[311px] z-10">
          <Image
            fill
            src={"/coming soon.png"}
            className="object-contain"
            alt="coming soon"
          />
        </div>
        <h3 className="text-white text-[33px] lg:text-[51px] font-[300]">
          Soon. It&rsquo;s becoming
        </h3>
      </div>
    </div>
  );
}
