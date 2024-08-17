import { NextPage } from "next"
import Countdown from "./Countdown"
import Image from "next/image"

const Event: NextPage = () => {

  return (
    <section id="events">
      <div>
        <Image width={0} height={0} sizes="100vw" src="/sundown_banner.jpg" className="w-full" alt="bannner" />

        <Countdown targetDate="2024-09-29T15:30:00Z" />
      </div>
    </section>
  )
}

export default Event

