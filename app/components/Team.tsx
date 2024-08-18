import Image from "next/image"
import { RiDoubleQuotesL } from "react-icons/ri"

const Team = () => {
  return (
    <section>
      <div className="main_container">
        <div className="py-40">
          <h2 className="font-secondFont text-center text-4xl">BOARD OF DIRECTORS</h2>

          <div className="mt-20 grid gap-8 md:grid-cols-2">

            <div className="bg-slate-50 shadow-xl shadow-slate-200  py-10 lg:py-7 px-8 grid lg:grid-cols-2 items-center lg:gap-10">
              <div className="grid justify-center gap-3 lg:order-2">
                <Image width={300} height={300} src="/team/iru.png" alt="ceo" className="border-8 border-yellow rounded-full w-52" />

                <h3 className="text-center text-lg font-600 uppercase">Irunika Mohottalalage</h3>
                <span className="text-center text-2xl">CEO</span>
              </div>
              <div className="relative lg:order-1">
                <RiDoubleQuotesL size={80} className="opacity-45" />
                <p>Every event we organize is not just about celebrating the vibrant talent of Sri Lankan artists; it's about making a real difference in the lives of those who need it most.</p>
              </div>
            </div>

            <div className="bg-slate-50 shadow-xl shadow-slate-200  py-10 lg:py-7 px-8 grid lg:grid-cols-2 items-center lg:gap-10">
              <div className="grid justify-center gap-3 lg:order-2">
                <Image width={300} height={300} src="/team/kevin.png" alt="ceo" className="border-8 border-yellow rounded-full w-52" />

                <h3 className="text-center text-lg font-600 uppercase">Kevin Weerasekara</h3>
                <span className="text-center text-2xl">PR Manager</span>
              </div>
              <div className="relative lg:order-1">
                <RiDoubleQuotesL size={80} className="opacity-45" />
                <p>I’m thrilled to be part of a team that believes in the power of music to bring people together and drive meaningful change.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Team