import { NextPage } from "next"
import Countdown from "./Countdown"

const Event: NextPage = () => {

  return (
    <section id="events">
      <div>
        <img src="/sundown-banner.jpg" alt="banner" />

        <Countdown targetDate="2024-09-29T15:30:00Z" />
      </div>
    </section>
  )
}

export default Event

