import { Link } from 'react-router-dom'
import portfolio from '../assets/portfolio.png'
const Navbar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-4">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img className="w-10 h-10 mr-3" src={portfolio} />
        <span class="font-semibold text-xl tracking-tight">
          Portfolio Website
        </span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <Link
            to="/resume"
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 font-bold text-green-600"
          >
            Resume
          </Link>
          <Link
            to="/about"
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white  mr-4 font-bold text-green-600"
          >
            about me
          </Link>
          <Link
            to="/contact"
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white font-bold  text-green-600"
          >
            Contact
          </Link>
        </div>
        <div>
          <Link
            to="/"
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 font-bold"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
