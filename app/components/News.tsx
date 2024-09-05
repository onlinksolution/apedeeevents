import React from 'react'
import { NEWS } from '../constants'
import Image from 'next/image'
import Link from 'next/link'

const News = () => {
  return (
    <div className="pt-40 main_container grid">
      <h2 className="font-secondFont text-center text-4xl pb-10">LATEST NEWS</h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {NEWS.slice(0, 3).map((link) => (
          <article className="bg-slate-100 shadow-lg shadow-slate-300 px-5 py-7" key={link.key}>
            <Image width={0} height={0} sizes="100vw" src={link.path} alt={link.key} className="w-full" />

            <div className="mt-3 grid gap-3">
              <h3 className="font-600 text-2xl text-red-700 font-storyFont">{link.title}</h3>
              <span className="text-sm text-gray-600 inline-flex gap-3">{link.description}</span>
            </div>
          </article>
        ))}
      </div>

      <Link href="/news" className='mt-5 text-end hover:underline'>See more</Link>
    </div>
  )
}

export default News