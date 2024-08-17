import Link from "next/link"
import { NEWS } from "../constants"
import Image from "next/image"

const page = () => {
  return (
    <section>
      <div className="news_hero flex flex-col justify-center items-center">
        <h2 className="text-white font-600 text-5xl lg:text-7xl">Latest News</h2>
        <p className="text-slate-300 text-sm">Latest News About Ape Dee Events</p>
      </div>


      <div className="py-40 main_container">
        <h2 className="font-secondFont text-center text-4xl pb-10">LATEST NEWS</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((link) => (
            <article className="bg-slate-100 shadow-lg shadow-slate-300 px-5 py-7">
              <Image width={0} height={0} sizes="100vw" src={link.path} alt={link.key} className="w-full" />

              <div className="mt-3 grid gap-3">
                <h3 className="font-600 text-2xl text-red-700 font-storyFont">{link.title}</h3>
                <span className="text-sm text-gray-600 inline-flex gap-3">{link.description}</span>

              </div>
            </article>
          ))}

        </div>
      </div>

    </section>
  )
}

export default page