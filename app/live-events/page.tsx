'use client'

import Link from "next/link"
import Event from "../components/Event"
import { EVENTS } from "../constants"
import clsx from "clsx"


const page = () => {

  return (
    <section>
      <div className="event_hero  flex flex-col justify-center items-center">
        <h2 className="text-white font-600 text-5xl lg:text-7xl">Live Events</h2>
        <p className="text-slate-300 text-sm">Active Future Events</p>
      </div>

      <Event />

      <div className="py-40 main_container">
        <h2 className="font-secondFont text-center text-4xl pb-10">EVENTS</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((link) => (
            <article className="bg-slate-100 shadow-lg shadow-slate-300 px-5 py-7">
              <img src={link.path} alt={link.key} />

              <div className="mt-3">
                <h3 className="font-600 text-3xl font-storyFont">{link.name}</h3>
                <p className="text-lg">{link.location}</p>
                <div className="flex flex-col">
                  <span className="text-lg inline-flex gap-3">{link.date}<span className="text-purple-500">{link.time}</span></span>
                  <label className={clsx(
                    'text-lg text-end font-bold uppercase',
                    {
                      'text-green-700': link.status == 'Finished',
                      'text-red-600': link.status == 'Live'
                    },
                  )}>{link.status}</label>
                </div>
                <Link href={link.link} className={clsx('mt-4 text-center grid bg-yellow p-4 hover:bg-black hover:text-white duration-300 transition-all text-xl disabled:',
                  // {
                  //   '': link.link == 'null'
                  // }
                )}>Buy Tickets</Link>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default page