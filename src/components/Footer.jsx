import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="absolute bottom-0 left-2 right-2 block print:hidden">
      <div className="container mx-auto">
        <footer className="footer mt-4 rounded-tr-md rounded-tl-md bg-white dark:bg-slate-800 p-4 text-center font-medium text-slate-600 dark:text-slate-400 shadow md:text-left">
          <span>{currentYear} </span>
          &copy; T-Wind
          <span className="float-right hidden text-slate-600 dark:text-slate-400 md:inline-block">
            Crafted with <i className="ti ti-heart text-red-500"></i> by
            Mannatthemes
          </span>
        </footer>
      </div>
    </div>
  )
}

export default Footer
