'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { BiMenu } from "react-icons/bi"
import { CgClose } from "react-icons/cg"
import { NAV_LINKS } from "../constants"

const Navbar = () => {

  const [navBar, setNavbar] = useState(false)

  const toggleMenuShow = () => {
    const menu = document.getElementById("menu-bar");
    menu?.classList.remove("mdnav:right-full");
    menu?.classList.add("mdnav:right-0");
  }

  const toggleMenuHide = () => {
    const menu = document.getElementById("menu-bar");
    menu?.classList.remove("mdnav:right-0");
    menu?.classList.add("mdnav:right-full");
  }

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <header className={navBar ? 'top-0 left-0 fixed w-full z-40 duration-300 transition-colors bg-black' : 'top-0 left-0 fixed w-full z-40 duration-300 transition-colors bg-transparent'}>
      <nav className="main_container flex h-[4.5rem] justify-between items-center py-6">
        <Link href="/">
          <Image src="/logo.jpg" width={80} height={50} alt="logo" />
        </Link>

        <div className="mdnav:fixed mdnav:top-0 mdnav:right-full mdnav:flex mdnav:items-center mdnav:justify-center mdnav:w-full mdnav:h-full mdnav:bg-yellow-600 z-50 mdnav:bg-slate-300 duration-300 transition-all" id="menu-bar">
          <ul className="flex mdnav:flex-col gap-16 text-center md:flex-row">
            {NAV_LINKS.map((link) => (
              <li key={link.key} ><Link href={link.path} className="uppercase text-3xl font-secondFont hover:text-white duration-300 transition-all md:text-[1rem] lg:text-xl md:text-white hover:md:text-yellow" onClick={toggleMenuHide}>{link.label}</Link></li>
            ))}

          </ul>

          <CgClose size={40} className="absolute top-8 right-10 text-black hover:text-white duration-300 transition-all md:hidden" onClick={toggleMenuHide} />
        </div>

        <BiMenu size={30} className="text-white md:hidden" onClick={toggleMenuShow} />
      </nav>
    </header>

  )
}

export default Navbar