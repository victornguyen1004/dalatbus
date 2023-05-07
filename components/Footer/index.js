import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-8">
      <div className="flex justify-between flex-row pt-6 pb-9 px-x-global">
        <div className="flex flex-col">
          <Link href={"/"} className="flex items-center">
            <Image src="/img/logo.png" width={0} height={0} className="w-11" alt="logo.png"/>
            <span className="font-black ml-4 text-3xl text-blue-3">
              DalatBus
            </span>
          </Link>
          <Link
            href={"/"}
            className="mt-6 flex items-center duration-200 ease-in-out text-text-secondary hover:text-[#E1306C]"
          >
            <i className="text-2xl fa-brands fa-instagram"></i>
            <span className="ml-3 text-sm font-semibold">Instagram</span>
          </Link>
          <Link
            href={"/"}
            className="mt-3 flex items-center duration-200 ease-in-out text-text-secondary hover:text-[#1778F2]"
          >
            <i className="text-2xl fa-brands fa-square-facebook"></i>
            <span className="ml-3 text-sm font-semibold">Facebook</span>
          </Link>
          <Link
            href={"/"}
            className="mt-3 flex items-center duration-200 ease-in-out text-text-secondary hover:text-[#1DA1F2]"
          >
            <i className="text-2xl fa-brands fa-square-twitter"></i>
            <span className="ml-3 text-sm font-semibold">Twitter</span>
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="text-[10px] font-black text-gray-5">
            GLOBAL COVERAGE
          </div>
          <div className="flex flex-col font-semibold text-text-primary text-sm mt-4">
            <Link href={"/"} className="">
              All bus routes
            </Link>
            <Link href={"/"} className="mt-2">
              All station
            </Link>
            <Link href={"/"} className="mt-2">
              Bus Companies
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[10px] font-black text-gray-5">COMPANY</div>
          <div className="flex flex-col font-semibold text-text-primary text-sm mt-4">
            <Link href={"/"} className="">
              About
            </Link>
            <Link href={"/"} className="mt-2">
              Careers
            </Link>
            <Link href={"/"} className="mt-2">
              Press
            </Link>
            <Link href={"/"} className="mt-2">
              Blog
            </Link>
            <Link href={"/"} className="mt-2">
              Partner with DalatBus
            </Link>
            <Link href={"/"} className="mt-2">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[10px] font-black text-gray-5">SUPPORT</div>
          <div className="flex flex-col font-semibold text-text-primary text-sm mt-4">
            <Link href={"/"} className="">
              Get help
            </Link>
          </div>
        </div>
      </div>
      <hr className="bg-gray-0" />
      <div className="flex flex-row items-center justify-between px-x-global mt-6 mb-9 text-gray-5 text-sm">
        <div className="font-medium">© DalatBus Inc., All rights reserved</div>
        <div className="font-bold">
          <Link href={""} className="">
            Terms of use
          </Link>
          <Link href={""} className="ml-8">
            Privacy
          </Link>{" "}
          <Link href={""} className="ml-8">
            Refund policy
          </Link>
        </div>
        <div className="flex">
          <Link href={""} className="">
            <Image src={"/img/appstore.svg"} width={0} height={0} className='rounded w-30' alt="appstore.svg"/>
          </Link>
          <Link href={""} className="ml-2">
            <Image src={"/img/googleplay.svg"} width={0} height={0} className='rounded w-30' alt="googleplay.svg"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
