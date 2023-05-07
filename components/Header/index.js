import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Header() {
  const router = useRouter();

  function logout() {
    Cookies.remove("token"); // Remove token from local storage
    Cookies.remove("username"); // Remove username from local storage
    router.push("/");
  }

  function renderUserAction() {
    if (Cookies.get("token")) {
      return (
        <div className="text-sm">
          Logged in as{" "}
          <Link href="/" className="font-medium">
            {Cookies.get("username")}
          </Link>
          ,
          <button onClick={logout} className="p-2 font-semibold text-red-600">
            Logout?
          </button>
        </div>
      );
    } else {
      return (
        <Link href={"/login"} className=" p-2">
          Login
        </Link>
      );
    }
  }

  return (
    <div className="flex justify-between items-center py-7 px-x-global">
      <Script
        src="https://kit.fontawesome.com/f6f851698f.js"
        crossorigin="anonymous"
      ></Script>
      {/* Logo */}
      <Link href={"/"} className="flex items-center">
        <Image
          src="/img/logo.png"
          width={88}
          height={90}
          className="w-11"
          alt="logo.png"
        />
        <span className="font-black ml-4 text-3xl text-blue-3">DalatBus</span>
      </Link>

      {/* Navigation */}
      <nav className="flex items-center">
        <Link href={"/"} className="flex items-center py-2">
          <i className="fa-solid fa-bus text-2xl text-blue-2"></i>
          <span className="pl-3 text-blue-3 font-semibold">Buses</span>
        </Link>
        <div className="w-[2px] h-4 bg-zinc-300 mx-4"></div>
        <Link href={"/"} className="flex items-center py-2">
          <i className="fa-solid fa-train text-2xl text-green-2"></i>
          <span className="pl-3 text-green-3 font-semibold">Trains</span>
        </Link>
        <div className="w-[2px] h-4 bg-zinc-300 mx-4"></div>
        <Link href={"/"} className="flex items-center py-2">
          <i className="fa-solid fa-building text-2xl text-orange-2"></i>
          <span className="pl-3 font-semibold text-orange-3">Hotels</span>
        </Link>
      </nav>

      {/* User action */}
      <div className="font-semibold flex items-center ">
        <Link href={"/"} className=" p-2">
          English <i className="fa-solid fa-chevron-down pl-1"></i>{" "}
        </Link>
        <Link href={"/"} className=" p-2 mx-6">
          Help
        </Link>
        {renderUserAction()}
      </div>
    </div>
  );
}
