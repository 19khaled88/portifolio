import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SocialMediaIconsReact } from 'social-media-icons-react'
import bicyclesiteimage from '../assets/bicyclesiteimage.png'
import warehouse from '../assets/bookwarehouse.png'
import imgnotfound from '../assets/homepage.png'
const Projects = () => {
  const navigate = useNavigate()
  const detailHandler = (str) => {
    navigate('/details', { state: { data: str } })
  }
  return (
    <div style={{ backgroundColor: '#EAEDF0' }} className="pb-16 pt-16">
      <p className="text-green-600 text-center font-bold">Projects</p>
      <h4
        className="text-center text-3xl font-bold"
        style={{ color: '#263b5e' }}
      >
        My Projects List
      </h4>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-x-3 gap-y-7 place-items-center container px-2 mx-auto pt-16">
        <div class="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full"
              style={{ height: '200px' }}
              src={bicyclesiteimage}
              alt={bicyclesiteimage}
            />
          </figure>
          <div className="pl-2 card-body pr-2">
            <h2 className="card-title" style={{ fontSize: '20px' }}>
              Bicycle tools manufacturer
            </h2>
            <p>
              This project is built with react js and node js. Mongodb is
              working as database
            </p>
            <div class="card-actions justify-between flex flex-row">
              <div className="flex flex-row gap-x-2">
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  icon="github"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="#cbc9cc"
                  url="https://github.com/19khaled88/manufacture-tools"
                  size="32"
                />
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  icon="web"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="rgba(26,166,233,1)"
                  url="https://gilded-pony-dcfe3e.netlify.app/"
                  // url="https://bicycletoolsmanufacturer.web.app/"
                  size="32"
                />
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  icon="github"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="#A38E57"
                  url="https://github.com/19khaled88/manufacture-tools-server"
                  size="32"
                />
              </div>
              <div>
                <button
                  onClick={() => detailHandler('bicycle')}
                  class="btn btn-sm"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full"
              style={{ height: '200px' }}
              src={warehouse}
              alt={warehouse}
            />
          </figure>
          <div className="pl-2 card-body pr-2">
            <h2 className="card-title" style={{ fontSize: '20px' }}>
              Book warehouse
            </h2>
            <p>
              In this project react js is primary library with node and mongodb
              storage
            </p>
            <div class="card-actions justify-between flex flex-row">
              <div className="flex flex-row gap-x-2">
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  icon="github"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="#cbc9cc"
                  url="https://github.com/19khaled88/wareHouse_management"
                  size="32"
                />
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  icon="web"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="rgba(26,166,233,1)"
                  url="https://warehouse-management-pro-dev.web.app/"
                  size="32"
                />
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  icon="github"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="#A38E57"
                  url="https://github.com/19khaled88/warehouse-management-server"
                  size="32"
                />
              </div>
              <div>
                <button
                  onClick={() => detailHandler('book')}
                  class="btn btn-sm"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full"
              style={{ height: '200px' }}
              src={imgnotfound}
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Buy-sell portal,- Next js</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-between flex flex-row">
              <div className="flex flex-row gap-x-2">
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  icon="github"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="#cbc9cc"
                  url="https://github.com/19khaled88/ecommercewithnext"
                  size="32"
                />
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  icon="web"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="rgba(26,166,233,1)"
                  url="https://ecommercewithnext.vercel.app/"
                  size="32"
                />
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  icon="github"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="#A38E57"
                  url="https://github.com/19khaled88/ecommercewithnext"
                  size="32"
                />
              </div>
              <div>
                <button
                  onClick={() => detailHandler('e-site')}
                  class="btn btn-sm"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
