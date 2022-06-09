import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div
      className="navbar container mx-auto rounded-md px-6"
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
            <a>about me</a>
          </li>
          <li className="cursor-pointer px-5 py-2 rounded-full border">
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
