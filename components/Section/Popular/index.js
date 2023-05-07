import BusRoute from "./BusRoute";

export default function PopularSection({ busRoutes }) {
  return (
    <div className="px-x-global py-16">
      <div className="text-center mb-12">
        <span className="rounded-3xl text-2xl font-bold px-9 py-3 bg-gray-0">
          Most popular bus routes in Dalat
        </span>
      </div>
      <div className="grid grid-cols-12 gap-y-3 gap-x-8">
        {busRoutes.map((busRoute, id) => (
          <BusRoute name={busRoute.name} key={id} />
        ))}
      </div>
    </div>
  );
}
