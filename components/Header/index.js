import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-7 px-x-global">
      <Script
        src="https://kit.fontawesome.com/f6f851698f.js"
        crossorigin="anonymous"
      ></Script>
      {/* Logo */}
      <Link href={"/"} className="flex items-center">
        <Image src="/img/logo.png" width={44} height={44} className="" />
        <span className="font-black ml-4 text-3xl text-blue-3">DalatBus</span>
      </Link>

      {/* Navigation */}
      <nav className="flex items-center">
        <Link href={"/"} className="flex items-center py-2">
          <i class="fa-solid fa-bus text-2xl text-blue-2"></i>
          <span className="pl-3 text-blue-3 font-semibold">Buses</span>
        </Link>
        <div className="w-[2px] h-4 bg-zinc-300 mx-4"></div>
        <Link href={"/"} className="flex items-center py-2">
          <i class="fa-solid fa-train text-2xl text-green-2"></i>
          <span className="pl-3 text-green-3 font-semibold">Trains</span>
        </Link>
        <div className="w-[2px] h-4 bg-zinc-300 mx-4"></div>
        <Link href={"/"} className="flex items-center py-2">
          <i class="fa-solid fa-building text-2xl text-orange-2"></i>
          <span className="pl-3 font-semibold text-orange-3">Hotels</span>
        </Link>
      </nav>

      {/* User action */}
      <div className="font-semibold">
        <Link href={"/"} className=" p-2">
          English <i class="fa-solid fa-chevron-down pl-1"></i>{" "}
        </Link>
        <Link href={"/"} className=" p-2 mx-6">
          Help
        </Link>
        <Link href={"/"} className=" p-2">
          Login
        </Link>
      </div>
    </div>
  );
}
