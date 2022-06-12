import { Link } from 'react-router-dom'
import { SocialMediaIconsReact } from 'social-media-icons-react'
import user from '../assets/khaled_picture.jpg'
import '../design/home.css'
import Particle from './Particles'
const Home = () => {
  return (
    <div>
      <Particle />
      <div
        className="flex flex-col lg:flex-row md:flex-row mx-auto home-bg"
        style={{ height: '571px' }}
      >
        <div
          className="flex flex-col flex-1 text-left md:pt-24  lg:pt-24 pl-16 mx-auto"
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
          <img
            className="lg:w-64 w-44 absolute md:inset-y-36 lg:inset-y-20 inset-y-5"
            src={user}
            alt=""
          />
          <div className="border-1 rounded-full w-60 h-60 lg:w-80 lg:h-80 bg-red-400"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
