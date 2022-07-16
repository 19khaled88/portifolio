import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import screenshot1 from '../assets/screenshot-1.png'
import screenshot2 from '../assets/screenshot-2.png'
import screenshot3 from '../assets/screenshot-3.png'
import screenshot4 from '../assets/screenshot-4.png'
import screenshot5 from '../assets/screenshot-10.png'
import screenshot6 from '../assets/screenshot-11.png'
import screenshot7 from '../assets/screenshot-12.png'
import screenshot8 from '../assets/screenshot-13.png'
import screenshot9 from '../assets/homepage.png'
import screenshot10 from '../assets/dashboard.png'
import screenshot11 from '../assets/cart page.png'
import screenshot12 from '../assets/userspage.png'
import '../design/details.css'
const Details = () => {
  const { state } = useLocation()
  const { data } = state
  const image = () => {
    if (data === 'bicycle') {
      return <img src={screenshot1} />
    } else if (data === 'book') {
      return <img src={screenshot5} />
    } else if (data === 'e-site') {
      return <img src={screenshot9} />
    }
  }
  const itemName = () => {
    if (data === 'bicycle') {
      return 'Bicycle Manufacturer tools supply'
    } else if (data === 'book') {
      return 'Book warehouse management '
    }
  }
  const screenShot = () => {
    if (data === 'bicycle') {
      return (
        <>
          <img className="w-96" src={screenshot2} />
          <img className="w-96" src={screenshot3} />
          <img className="w-96" src={screenshot4} />
        </>
      )
    } else if (data === 'book') {
      return (
        <>
          <img className="w-96" src={screenshot6} />
          <img className="w-96" src={screenshot7} />
          <img className="w-96" src={screenshot8} />
        </>
      )
    } else if (data === 'e-site') {
      return (
        <>
          <img className="w-96" src={screenshot10} />
          <img className="w-96" src={screenshot11} />
          <img className="w-96" src={screenshot12} />
        </>
      )
    }
  }
  const techenologies = () => {
    if (data === 'bicycle') {
      return (
        <>
          <p className="bg-rose-400 px-2 text-center">HTML</p>
          <p className="bg-rose-400 px-2 text-center">Tailwind css</p>
          <p className="bg-rose-400 px-2 text-center">React JS</p>
          <p className="bg-rose-400 px-2 text-center">Node JS</p>
          <p className="bg-rose-400 px-2 text-center">React hooks</p>
          <p className="bg-rose-400 px-2 text-center">Firebase</p>
          <p className="bg-rose-400 px-2 text-center">Monogodb</p>
        </>
      )
    } else if (data === 'book') {
      return (
        <>
          <p className="bg-rose-400 px-2 text-center">HTML</p>
          <p className="bg-rose-400 px-2 text-center">Tailwind css</p>
          <p className="bg-rose-400 px-2 text-center">React JS</p>
          <p className="bg-rose-400 px-2 text-center">Node JS</p>
          <p className="bg-rose-400 px-2 text-center">React hooks</p>
          <p className="bg-rose-400 px-2 text-center">Firebase</p>
          <p className="bg-rose-400 px-2 text-center">Monogodb</p>
        </>
      )
    } else if (data === 'e-site') {
      return (
        <>
          <p className="bg-rose-400 px-2 text-center">HTML</p>
          <p className="bg-rose-400 px-2 text-center">Tailwind css</p>
          <p className="bg-rose-400 px-2 text-center">Next JS</p>
          <p className="bg-rose-400 px-2 text-center">Redux</p>
          <p className="bg-rose-400 px-2 text-center">React hooks</p>
          <p className="bg-rose-400 px-2 text-center">Firebase</p>
          <p className="bg-rose-400 px-2 text-center">Monogodb</p>
        </>
      )
    }
  }

  return (
    <div className="detail-bg text-white pb-6 pt-4">
      <p className="text-center text-white-600  font-bold">Details</p>
      <p className="text-center text-3xl font-bold">Project details</p>
      <div className="pt-8">
        <div>
          <div className="flex flex-col lg:flex-row container mx-auto px-2 gap-x-9">
            <div className="flex-1">{image()}</div>
            <div className="flex-1">
              <p className="text-3xl font-bold">{itemName()}</p>
              <p>
                In this project, there have some parts in home page like, slider
                portion, tools section, business summary and reviews
              </p>

              <div className="pt-4">
                <p className="pb-2">Technologies used</p>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                  {techenologies()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 container mx-auto">
          <p className="text-center text-3xl pb-4">screenshots</p>
          <div className="flex flex-col gap-y-5 lg:flex-row gap-x-14 items-center justify-center mx-auto  ">
            {screenShot()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
