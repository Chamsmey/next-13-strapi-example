import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
     <h1 className='text-blue-400 font-bold text-lg'>Hello world</h1>
    </main>
  )
}
