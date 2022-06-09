import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div
      className="navbar  mx-auto  px-6"
      style={{ backgroundColor: '#FEBAAD' }}
    >
      <div className="flex-1">
        <a className="cursor-pointer  shadow-2xl rounded-full normal-case text-xl">
          My Portfolio Website
        </a>
      </div>
      <div className="flex-none font-bold">
        <ul className="gap-x-5 menu-horizontal p-0">
          <li className="cursor-pointer px-5 py-2 rounded-full border">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer px-5 py-2 rounded-full border">
            <Link to="/resume">Resume</Link>
          </li>
          <li className="cursor-pointer px-5 py-2 rounded-full border">
            <Link to="/about">about me</Link>
          </li>
          <li className="cursor-pointer px-5 py-2 rounded-full border">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
