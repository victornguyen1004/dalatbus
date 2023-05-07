import Link from "next/link";
import slug from "slug";

export default function BusRoute(props) {
  return (
    <Link
      href={`/busses/${slug(props.name, { lower: true })}`}
      className="col-span-3 text-center border-b-2 border-gray-1 py-5 font-bold text-blue-3"
    >
      {props.name}
    </Link>
  );
}
