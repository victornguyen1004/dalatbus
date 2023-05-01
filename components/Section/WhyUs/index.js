import Image from "next/image";
import Link from "next/link";

export default function WhyUsSection() {
  return (
    <div className="px-x-global py-16">
      <div className="bg-green-0 rounded-3xl px-20 py-8 flex items-center">
        <div className="grow">
          <div className="font-black text-4xl">Why join DalatBus?</div>
          <div className="font-bold text-xl mt-7">
            Faster booking & unlimited discount
          </div>
          <ul className="list-disc ml-8 mt-4 font-medium">
            <li className="">Manage and cancel your trips with ease</li>
            <li className="">Get monthly discount up to 50%</li>
            <li className="">Keep track of bus arrival time & leaving time</li>
          </ul>
          <Link
            href={"/"}
            className="inline-block px-10 py-6 mt-8 bg-blue-2 text-white font-bold rounded-2xl"
          >
            Create an account
          </Link>
        </div>
        <Image
          src={"/img/illustration_1.svg"}
          height={400}
          width={400}
          className="grow ml-8"
        />
      </div>
    </div>
  );
}
