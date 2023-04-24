import { Montserrat } from 'next/font/google'
import BannerSection from '@/components/Section/Banner'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${montserrat.className} text-text-primary`}>
      <BannerSection />
    </main>
  )
}
