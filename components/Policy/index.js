import Image from "next/image";

export default function Policy() {
  return (
    <div className="flex justify-between px-x-global pb-20">
      <div className="flex">
        <Image src={"/img/ticket.svg"} width={0} height={0} className="w-12" alt="ticket.svg"/>
        <div className="flex flex-col ml-4">
          <span className="font-bold">Your trip, your priority</span>
          <p className="">
            Book tickets that fit your needs. <br className="" /> Get off at any
            stop.
          </p>
        </div>
      </div>
      <div className="flex">
        <Image src={"/img/earth.svg"} width={0} height={0} className="w-12" alt="earth.svg"/>
        <div className="flex flex-col ml-4">
          <span className="font-bold">English friendly</span>
          <p className="">
            Google translate is unecessary. <br className="" /> We support most
            of the languages.
          </p>
        </div>
      </div>
      <div className="flex">
        <Image src={"/img/chat.svg"} width={0} height={0} className="w-12" alt="chat.svg"/>
        <div className="flex flex-col ml-4">
          <span className="font-bold">24/7 support</span>
          <p className="">Professional support team <br className="" /> always here to help you.</p>
        </div>
      </div>
    </div>
  );
}
