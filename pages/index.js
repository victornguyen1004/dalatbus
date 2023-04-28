import { Montserrat } from 'next/font/google'
import BannerSection from '@/components/Section/Banner'
import CustomerSection from '@/components/Section/Customer'
import TopTravelledSection from '@/components/Section/TopTravelled'
import WhyUsSection from '@/components/Section/WhyUs'
import WhyBusSection from '@/components/Section/WhyBus'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${montserrat.className} text-text-primary`}>
      <BannerSection />
      <CustomerSection />
      <TopTravelledSection />
      <WhyUsSection />
      <WhyBusSection />
    </main>
  )
}
