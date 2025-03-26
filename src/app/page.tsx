import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 sm:bg-[url('/bg-image.png')] bg-[url('/rotatedimg.png')]"></div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="relative w-[171px] h-[130px] lg:w-[303px] lg:h-[230px] z-10">
          <Image
            fill
            src={"/coming soon.png"}
            className="object-contain"
            alt="coming soon"
          />
        </div>
        <h3 className="text-white text-[20px] lg:text-[34px] font-[300] z-10">
          Soon. It&rsquo;s becoming
        </h3>
      </div>
    </div>
  );
}
