import React from "react"
import { Link } from "react-router-dom"
import { logo, logoSm } from "../assets/images"

const Header = () => {
  return (
    <nav className="border-gray-200 bg-gray-900 px-5 py-5 shadow-sm dark:bg-slate-800 sm:px-4 block print:hidden">
      <div className="container mx-0 flex max-w-full flex-wrap items-center lg:mx-auto">
        <div className="flex items-center">
          <Link to="/" className="flex items-center outline-none">
            <img src={logoSm} alt="" className="h-6" />
            <img src={logo} alt="" className="ml-2 hidden xl:block mt-1" />
          </Link>
        </div>
        <div
          className="order-2 hidden w-full items-center justify-between md:order-1 md:ml-5 md:flex md:w-auto"
          id="mobile-menu-2"
        >
            
        </div>
      </div>
    </nav>
  )
}

export default Header
