import Image from "next/image";

export default function TopTravelledSection() {
  return (
    <div className="px-x-global py-16 bg-gray-0">
      <div className="text-center mb-14">
        <span className="rounded-3xl text-2xl font-bold px-9 py-3 bg-gray-0">
          Top travelled bus routes
        </span>
      </div>
      <div className="grid grid-cols-12 gap-x-8 gap-y-12">
        <div className="col-span-4 relative h-56">
          <Image
          alt="toptravelled.png"
            src={"/img/route_1.png"}
            width={800}
            height={600}
            className="shadow-md rounded-lg"
          />
          <span className="absolute bottom-2 left-2 w-3/4 text-sm rounded-sm backdrop-blur-lg font-bold text-white py-1 text-center">
            Explore every corner of Da Lat
          </span>
        </div>
        <div className="col-span-4 relative h-56">
          <Image
          alt="toptravelled.png"
            src={"/img/route_2.png"}
            width={800}
            height={600}
            className="shadow-md rounded-lg"
          />
          <span className="absolute bottom-2 left-2 w-3/4 text-sm rounded-sm backdrop-blur-lg font-bold text-white py-1 text-center">
            From Da Lat to Bao Loc
          </span>
        </div>
        <div className="col-span-4 relative h-56">
          <Image
          alt="toptravelled.png"
            src={"/img/route_3.png"}
            width={800}
            height={600}
            className="shadow-md rounded-lg"
          />
          <span className="absolute bottom-2 left-2 w-3/4 text-sm rounded-sm backdrop-blur-lg font-bold text-white py-1 text-center">
            From Da Lat to Duc Trong
          </span>
        </div>
        <div className="col-span-4 relative h-56">
          <Image
          alt="toptravelled.png"
            src={"/img/route_4.png"}
            width={800}
            height={600}
            className="shadow-md rounded-lg"
          />
          <span className="absolute bottom-2 left-2 w-3/4 text-sm rounded-sm backdrop-blur-lg font-bold text-white py-1 text-center">
            From Da Lat to Don Duong
          </span>
        </div>
        <div className="col-span-4 relative h-56">
          <Image
          alt="toptravelled.png"
            src={"/img/route_5.png"}
            width={800}
            height={600}
            className="shadow-md rounded-lg"
          />
          <span className="absolute bottom-2 left-2 w-3/4 text-sm rounded-sm backdrop-blur-lg font-bold text-white py-1 text-center">
            To Lien Khuong airport
          </span>
        </div>
        <div className="col-span-4 relative h-56">
          <Image
          alt="toptravelled.png"
            src={"/img/route_6.png"}
            width={800}
            height={600}
            className="shadow-md rounded-lg"
          />
          <span className="absolute bottom-2 left-2 w-3/4 text-sm rounded-sm backdrop-blur-lg font-bold text-white py-1 text-center">
            From Da Lat to Lac Duong
          </span>
        </div>
      </div>
    </div>
  );
}
