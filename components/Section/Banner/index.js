import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Policy from "@/components/Policy";

export default function BannerSection() {
  return (
    <div className=""
    style={{backgroundImage: `url(./img/banner.png)`, backgroundSize: 'cover'}}>
      <Header />
      <Banner />
      <Policy />
    </div>
  );
}
