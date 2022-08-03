import React from 'react'
import { useLocation } from 'react-router-dom'
import screenshot11 from '../assets/cart page.png'
import screenshot10 from '../assets/dashboard.png'
import graphqlImage from '../assets/graphql-todo-list.png'
import screenshot9 from '../assets/homepage.png'
import reduxadd from '../assets/reduxaddmodal.png'
import reduxedit from '../assets/reduxeditmodal.png'
import reduxtask from '../assets/reduxtaskstatus.png'
import screenshot1 from '../assets/screenshot-1.png'
import screenshot5 from '../assets/screenshot-10.png'
import screenshot6 from '../assets/screenshot-11.png'
import screenshot7 from '../assets/screenshot-12.png'
import screenshot8 from '../assets/screenshot-13.png'
import screenshot2 from '../assets/screenshot-2.png'
import screenshot3 from '../assets/screenshot-3.png'
import screenshot4 from '../assets/screenshot-4.png'
import reduxImage from '../assets/todo.png'
import screenshot12 from '../assets/userspage.png'
import '../design/details.css'
const Details = () => {
  const { state } = useLocation()
  const { data } = state
  const image = () => {
    if (data === 'bicycle') {
      return <img src={screenshot1} alt={screenshot1} />
    } else if (data === 'book') {
      return <img src={screenshot5} alt={screenshot5} />
    } else if (data === 'e-site') {
      return <img src={screenshot9} alt={screenshot9} />
    } else if (data === 'redux') {
      return <img src={reduxImage} alt={reduxImage} />
    } else if (data === 'graphql') {
      return <img src={graphqlImage} alt={graphqlImage} />
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
          <img className="w-96" src={screenshot2} alt={screenshot2} />
          <img className="w-96" src={screenshot3} alt={screenshot3} />
          <img className="w-96" src={screenshot4} alt={screenshot4} />
        </>
      )
    } else if (data === 'book') {
      return (
        <>
          <img className="w-96" src={screenshot6} alt={screenshot6} />
          <img className="w-96" src={screenshot7} alt={screenshot7} />
          <img className="w-96" src={screenshot8} alt={screenshot8} />
        </>
      )
    } else if (data === 'e-site') {
      return (
        <>
          <img className="w-96" src={screenshot10} alt={screenshot10} />
          <img className="w-96" src={screenshot11} alt={screenshot11} />
          <img className="w-96" src={screenshot12} alt={screenshot12} />
        </>
      )
    } else if (data === 'redux') {
      return (
        <>
          <img className="w-96" src={reduxtask} alt={reduxtask} />
          <img className="w-96" src={reduxedit} alt={reduxedit} />
          <img className="w-96" src={reduxadd} alt={reduxadd} />
        </>
      )
    } else if (data === 'graphql') {
      return <></>
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

          <p className="bg-rose-400 px-2 text-center">Monogodb</p>
        </>
      )
    } else if (data === 'redux') {
      return (
        <>
          <p className="bg-rose-400 px-2 text-center">HTML</p>
          <p className="bg-rose-400 px-2 text-center">Tailwind css</p>
          <p className="bg-rose-400 px-2 text-center">Redux Toolkit</p>
          <p className="bg-rose-400 px-2 text-center">React hooks</p>
          <p className="bg-rose-400 px-2 text-center">Monogodb</p>
        </>
      )
    } else if (data === 'graphql') {
      return (
        <>
          <p className="bg-rose-400 px-2 text-center">HTML</p>
          <p className="bg-rose-400 px-2 text-center">Tailwind css</p>
          <p className="bg-rose-400 px-2 text-center">Graphql</p>
          <p className="bg-rose-400 px-2 text-center">React hooks</p>
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
