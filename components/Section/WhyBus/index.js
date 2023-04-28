import Image from "next/image";

export default function WhyBusSection() {
    return (
      <div className="px-x-global py-16">
        <div className="rounded-3xl px-20 py-8 flex items-center">
          <div className="">
            <Image
              src={"/img/illustration_2.svg"}
              height={400}
              width={400}
              className=""
            />
          </div>
        </div>
      </div>
    );
}