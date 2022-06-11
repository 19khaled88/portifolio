import user from '../assets/khaled_picture.jpg'
import '../design/home.css'
import Particle from './Particles'
import { Link } from 'react-router-dom'
import { SocialMediaIconsReact } from 'social-media-icons-react'
const Home = () => {
  return (
    <>
      <div
        className="flex flex-row  mx-auto home-bg"
        style={{ height: '571px' }}
      >
        <div
          className="flex flex-col flex-1 text-left pt-24 pl-16 mx-auto"
          data-aos="fade-up"
        >
          <h4 className="text-white text-5xl font-bold">Web Developer</h4>
          <h2 className="text-white text-4xl">Front-End and Back-End</h2>
          <h2 className="text-white text-4xl">React js and Node js</h2>
          <p className="text-white text-sm pb-6">
            I'm promised to do something exceptional!{' '}
          </p>

          <div className="flex flex-row items-center gap-x-4">
            <Link to="/resume">
              <button class="btn btn-success w-32">resume</button>
            </Link>

            <SocialMediaIconsReact
              icon="twitter"
              url="https://some-website.com/my-social-media-url"
              backgroundColor="rgba(26,166,233,1)"
              iconColor="rgba(255,255,255,1)"
              borderColor="rgba(0,0,0,0.25)"
            />

            <SocialMediaIconsReact
              icon="facebook"
              url="https://www.facebook.com/khaled88hasan/"
              backgroundColor="rgba(26,166,233,1)"
              iconColor="rgba(255,255,255,1)"
              borderColor="rgba(0,0,0,0.25)"
            />

            <SocialMediaIconsReact
              icon="linkedin"
              url="https://www.linkedin.com/in/khaled-hasan-5101988/"
              backgroundColor="rgba(26,166,233,1)"
              iconColor="rgba(255,255,255,1)"
              borderColor="rgba(0,0,0,0.25)"
            />

            <SocialMediaIconsReact
              icon="whatsapp"
              url="https://some-website.com/my-social-media-url"
              backgroundColor="rgba(26,166,233,1)"
              iconColor="rgba(255,255,255,1)"
              borderColor="rgba(0,0,0,0.25)"
            />
          </div>
        </div>
        <div className="relative flex-1 flex flex-col justify-center items-center">
          <img className="w-64 absolute inset-y-20" src={user} alt="" />
          <div className="border-1 rounded-full w-80 h-80 bg-red-400"></div>
        </div>

        <Particle />
      </div>
    </>
  )
}

export default Home
