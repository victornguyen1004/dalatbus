import { ApiBaseUrl } from "@/global/global-variables";
import Header from "@/components/Header";

export default function BusRoutePage({ route }) {
  return (
    <div className="bg-blue-1 min-h-screen">
      <Header />
      <div className="px-x-global py-12">
        <div className="bg-white shadow rounded px-8 py-12 grid grid-cols-12 gap-y-4 text-text-secondary">
          <div className="col-span-12">
            <div className="w-[400px] font-bold text-text-primary">
              Tuyến
              <div className="text-4xl font-black">{route.name}</div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="w-[400px] font-bold text-text-primary">
              Đơn vị
            </div>
            <div className="text-xl mt-1">{route.unit}</div>
          </div>
          <div className="col-span-6">
            <div className="w-[400px] font-bold text-text-primary">
              Độ dài
            </div>
            <div className="text-xl mt-1">{route.length}</div>
          </div>
          <div className="col-span-6">
            <div className="w-[400px] font-bold text-text-primary">
              Mã số chuyến
            </div>
            <div className="text-xl mt-1">{route.routeNumber}</div>
          </div>
          <div className="col-span-6">
            <div className="w-[400px] font-bold text-text-primary">
              Thời gian hoạt động
            </div>
            <div className="text-xl mt-1">{route.time}</div>
          </div>
          <div className="col-span-6">
            <div className="w-[400px] font-bold text-text-primary">
              Tần suất{" "}
            </div>
            <div className="text-xl mt-1">{route.spacing}</div>
          </div>
          <div className="col-span-6">
            <div className="w-[400px] font-bold text-text-primary">
              Đường dây nóng
            </div>
            <div className="text-xl mt-1">{route.phoneNumber}</div>
          </div>
          <div className="col-span-12">
            <div className="w-[400px] font-bold text-text-primary">
              Trạm dừng
            </div>
            <div className="text-xl mt-1">{route.route}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const res = await fetch(`${ApiBaseUrl}/busses?searchString=${slug}`);
  const data = await res.json();
  return {
    props: { route: data.data[0] },
  };
};

export async function getStaticPaths() {
  try {
    const res = await fetch(`${ApiBaseUrl}/busses`);
    const data = await res.json();

    const paths = data.data.map((busRoute) => ({
      params: { slug: busRoute.slug },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
    return {
      paths: [],
      fallback: false,
    };
  }
}
