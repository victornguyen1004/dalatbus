import getSlug from "@/helpers/getSlug";
import Link from "next/link";

export default function BusRoute(props) {

  return (
        <Link
          href={`/busses/${getSlug(props.name)}`}
          className="col-span-3 text-center border-b-2 border-gray-1 py-5 font-bold text-blue-3"
        >
          {props.name}
        </Link>
  );
}
