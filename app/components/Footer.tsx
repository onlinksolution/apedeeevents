import Link from "next/link"
import { COMPANIES, NAV_LINKS } from "../constants"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="w-full py-20 bg-black">
      <div className="main_container">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center">
          {COMPANIES.map((link) => (
            <img key={link.key} src={link.path} className="w-40 opacity-70 hover:opacity-100 transition-all" />
          ))}
        </div>

        <div className="flex flex-row gap-8 justify-center mt-10">
          {NAV_LINKS.map((link) => (
            <Link href={link.path} className="text-slate-200 hover:text-yellow transition-all duration-300 text-[10px] md:text-sm">{link.label}</Link>
          ))}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="flex justify-center lg:order-3 lg:justify-end gap-4 items-center">
            <Link href="https://web.facebook.com/apedeeeventsuk/"><FaFacebook className="text-gray-300 hover:text-yellow duration-300 transition-all" size={25} /></Link>
            <Link href="https://www.instagram.com/eventsapedee/"><FaInstagram className="text-gray-300 hover:text-yellow duration-300 transition-all" size={25} /></Link>
            <Link href="https://www.youtube.com/@ApeDeeEventsUK"><FaYoutube className="text-gray-300 hover:text-yellow duration-300 transition-all" size={25} /></Link>

          </div>
          <p className="text-gray-300 text-sm order-2 text-center">&copy; 2024 Ape Dee Events Uk Ltd all rights reserved.</p>
          <p className="text-gray-100 text-sm lg:text-start order-1 text-center">Developed By <Link href='/' className="hover:text-yellow">Onlink Solutions</Link></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer