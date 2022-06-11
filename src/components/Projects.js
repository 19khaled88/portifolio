import React from 'react'
import { SocialMediaIconsReact } from 'social-media-icons-react'
import warehouse from '../assets/bookwarehouse.png'
import bicyclesiteimage from '../assets/bicyclesiteimage.png'
import imgnotfound from '../assets/data-not-found-icon.jpg'
const Projects = () => {
  return (
    <div style={{ backgroundColor: '#EAEDF0' }} className="pb-16 pt-16">
      <p className="text-green-600 text-center font-bold">Projects</p>
      <h4
        className="text-center text-3xl font-bold"
        style={{ color: '#263b5e' }}
      >
        My Projects List
      </h4>
      <div className="grid grid-cols-3 gap-x-6 gap-y-7 place-items-center container px-2 mx-auto pt-16">
        <div class="card w-72 bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full"
              style={{ height: '200px' }}
              src={bicyclesiteimage}
              alt="Shoes"
            />
          </figure>
          <div className="pl-2 card-body pr-2">
            <h2 style={{ fontSize: '20px' }}>Bicycle tools manufacturer</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
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
                  url="https://bicycletoolsmanufacturer.web.app/"
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
                <button class="btn btn-sm">Details</button>
              </div>
            </div>
          </div>
        </div>

        <div class="card w-72 bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full"
              style={{ height: '200px' }}
              src={warehouse}
              alt="Shoes"
            />
          </figure>
          <div className="pl-2 card-body pr-2">
            <h2 style={{ fontSize: '20px' }}>Book warehouse</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
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
                <button class="btn btn-sm">Demo</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-72 bg-base-100 shadow-xl">
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
                  url="https://some-website.com/my-social-media-url"
                  size="32"
                />
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  icon="web"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="rgba(26,166,233,1)"
                  url="https://some-website.com/my-social-media-url"
                  size="32"
                />
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  icon="github"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="#A38E57"
                  url="https://some-website.com/my-social-media-url"
                  size="32"
                />
              </div>
              <div>
                <button class="btn btn-sm">Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
