import Image from 'next/image'
import {QaReport} from './QaReport'
import { FsData } from './FsData'
import FecthData from './FecthData'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      test
<QaReport />
<FsData />
<FecthData />
    </main>
  )
}
