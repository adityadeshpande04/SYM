import Navbar from '@/components/Navbar'
import Section1 from '@/components/Section1'
import Swip from '@/components/swip'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="absolute w-screen h-screen">
      <Navbar />
      <div className="flex flex-row pt-20">
        <div className="relative w-1/2"><Section1 /></div>
        <div className="relative w-1/2"><Swip /></div>
      </div>
    </div>
  )
}
