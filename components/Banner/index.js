import Image from "next/image";

export default function Banner() {
  return (
    <div className="px-x-global py-12 flex">
      {/* Slogan */}
      <div className="w-full">
        <div className="text-5xl font-extrabold">
          Find your <br className="" /> bus route in <br className="" /> Da Lat,
          Lam Dong
        </div>
        <div className="font-bold text-2xl text-text-secondary mt-4">
          Let DalatBus accompany your trip in Da Lat - the Thousand Flowers
          City. Find the bus ticket that fits your journey best.
        </div>
        <div className="mt-12 w-full pl-6  flex bg-white rounded-lg border-1 border-zinc-500">
          <div className="grow-1 py-2">
            <label
              htmlFor=""
              className="text-[10px] font-black text-text-secondary"
            >
              ORIGIN
            </label>
            <input
              type="text"
              className="py-1 outline-0 w-full font-medium text-sm placeholder:text-zinc-400"
              placeholder="Your origin..."
            />
          </div>
          <button className="mx-4">
            <i className="fa-solid p-2 text- fa-arrow-right-arrow-left"></i>
          </button>
          <div className="grow-1 py-2">
            <label
              htmlFor=""
              className="text-[10px] font-black text-text-secondary"
            >
              DESTINATION
            </label>
            <input
              type="text"
              className="py-1 outline-0 w-full font-medium text-sm placeholder:text-zinc-400"
              placeholder="Your destination..."
            />
          </div>
          <button className="grow-1 ml-4 bg-blue-2 rounded-r-lg px-4 flex items-center justify-center">
            <i className="fa-solid fa-magnifying-glass text-2xl text-blue-0"></i>
            <span className="ml-3 font-extrabold text-white">Search</span>
          </button>
        </div>
      </div>

      {/* Banner Image */}
      <div className="w-full flex justify-center">
        <Image
          src={"/img/bus.svg"}
          width={392}
          height={368}
          className="w-2/3"
          priority
          alt="bus.svg"
        />
      </div>
    </div>
  );
}
