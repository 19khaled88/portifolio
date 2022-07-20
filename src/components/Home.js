import { Link } from 'react-router-dom'
import { SocialMediaIconsReact } from 'social-media-icons-react'
import user from '../assets/khaled_picture.jpg'
import { useAnimationFrame } from 'framer-motion'
import '../design/home.css'
import Particle from './Particle'
import { useRef } from 'react'
import { refresh } from 'aos'
const Home = () => {
  return (
    <div>
      <Particle />
    </div>
  )
}

export default Home
