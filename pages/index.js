import BannerSection from "@/components/Section/Banner";
import CustomerSection from "@/components/Section/Customer";
import TopTravelledSection from "@/components/Section/TopTravelled";
import WhyUsSection from "@/components/Section/WhyUs";
import WhyBusSection from "@/components/Section/WhyBus";
import PopularSection from "@/components/Section/Popular";
import Footer from "@/components/Footer";
import { ApiBaseUrl } from "@/global/global-variables";

export async function getStaticProps() {
  try {
    const res = await fetch(`${ApiBaseUrl}/busses`);
    const data = await res.json();
    return {
      props: { busRoutes: data.data },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { busRoutes: [] },
    };
  }
}

export default function HomePage({ busRoutes }) {
  return (
    <>
      <BannerSection />
      <CustomerSection />
      <TopTravelledSection />
      <WhyUsSection />
      <WhyBusSection />
      <PopularSection busRoutes={busRoutes} />
      <Footer />
    </>
  );
}
