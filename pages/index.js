import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='absolute md:w-screen w-max'>
      <Navbar />
    </div>
  )
}
