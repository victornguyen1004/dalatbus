import Image from "next/image";

export default function CustomerSection() {
  return (
    <div className="px-x-global py-16">
      <div className="text-center mb-14">
        <span className="rounded-3xl text-xl font-bold px-9 py-3 bg-gray-0">
          Traffic is frustrating. But not with DalatBus
        </span>
      </div>
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-4">
          <div className="">
            With DalatBus, I am able to visit my relatives in Duc Trong City
            every weekend.
          </div>
          <div className="flex mt-3">
            <Image
              src={"/img/ayaka.png"}
              width={80}
              height={80}
              className="mr-3 object-cover rounded-[50%] border-2 border-orange-3"
            />
            <div className="">
              <div className="font-medium">Miss Ayaka</div>
              <div className="text-text-secondary">Kamisato's Local</div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="">
            This is my first choice of travelling. With DalatBus, I am able to
            explore outside and inside Dalat effortlessly.
          </div>
          <div className="flex mt-3">
            <Image
              src={"/img/diluc.png"}
              width={80}
              height={80}
              className="mr-3 object-cover rounded-[50%] border-2 border-orange-3"
            />
            <div className="">
              <div className="font-medium">Mr. Diluc</div>
              <div className="text-text-secondary">Teyvat's Batman</div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="">
            DalatBus is convenient . Getting to work is way more cheaper and
            even faster.
          </div>
          <div className="flex mt-3">
            <Image
              src={"/img/ayato.png"}
              width={80}
              height={80}
              className="mr-3 object-cover rounded-[50%] border-2 border-orange-3"
            />
            <div className="">
              <div className="font-medium">Mr. Ayato</div>
              <div className="text-text-secondary">Bobba Slayer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
