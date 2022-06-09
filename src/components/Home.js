import React from 'react'
import '../design/home.css'
import user from '../assets/khaled picure.jpeg'
const Home = () => {
  return (
    <div
      className="flex flex-row container mx-auto"
      style={{ height: '537px' }}
    >
      <div className="flex flex-col flex-1 text-left pt-24 pl-16 mx-auto">
        <h4 className="text-white text-5xl font-bold">Web Developer</h4>
        <h2 className="text-white text-4xl">Front-End and Back-End</h2>
        <h2 className="text-white text-4xl">React js and Node js</h2>
        <p className="text-white text-sm">
          I'm promised to do something exceptional!{' '}
        </p>
      </div>
      <div className="relative flex-1 flex flex-col justify-center items-center">
        <img className="w-64 absolute inset-y-20" src={user} alt="" />
        <div className="border-1 rounded-full w-80 h-80 bg-red-400"></div>
      </div>
    </div>
  )
}

export default Home
