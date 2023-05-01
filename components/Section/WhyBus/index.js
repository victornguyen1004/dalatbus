import Image from "next/image";

export default function WhyBusSection() {
  return (
    <div className="px-x-global py-16">
      <div className="rounded-3xl px-20 py-8 flex items-center">
        <Image
          src={"/img/illustration_2.svg"}
          height={400}
          width={400}
          className="grow"
        />
        <div className="ml-8">
          <div className="font-black text-4xl">Why taking the bus?</div>
          <div className="mt-7">
            <div className="font-bold text-xl">
              Faster booking & unlimited discount
            </div>
            <div className="font-medium mt-2">
              The bus is an excellent low-cost travel choice. On average, you
              can find the best bus ticket prices by booking in advance.
            </div>
          </div>
          <div className="mt-7">
            <div className="font-bold text-xl">Hassle-free travel</div>
            <div className="font-medium mt-2">
              The bus is one of the easiest modes of transportation for
              city-to-city travel, enjoy the hassle-free travel experience the
              bus offers.
            </div>
          </div>
          <div className="mt-7">
            <div className="font-bold text-xl">Sustainability</div>
            <div className="font-medium mt-2">
              Buses have the lowest CO2 emissions of any mode of city-to-city
              transportation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
