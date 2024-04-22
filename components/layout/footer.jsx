import { Image } from "@nextui-org/react";
import "./navBar.css"
export default function Footer() {
  return (
    <div className="h-32 w-full bg-gray-800 flex item-center justify-between px-5 md:px-10 lg:px-16">

      <div className="flex h-full items-center ">
        <Image isZoomed src="/imgs/innminds.jpeg" alt="innminds" width={100} />
      </div>

      <div className="flex items-center flex-col text-gray-500 gap-2 mt-5">
        <button className="">Privacy Policy</button>
        <button>Return Policy</button>
        <button>Shipping Policy</button>

      </div>

      <div className="flex items-center flex-col text-gray-500 gap-2 mt-5">
        <button>Terms of Service</button>
        <button>Candle Safety Guidelines</button>
      </div>
    </div>
  );
}
