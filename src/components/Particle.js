import React from 'react'
import { Link } from 'react-router-dom'
import { SocialMediaIconsReact } from 'social-media-icons-react'
import Particles from 'react-tsparticles'
import { useAnimationFrame } from 'framer-motion'
import user from '../assets/khaled_picture.jpg'
import reactLoo from '../assets/react-js-logo.png'
import { useRef } from 'react'
import { loadFull } from 'tsparticles'
const Particle = () => {
  const imageRef = useRef(null)
  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000)
    const y = (1 + Math.sin(t / 1000)) * -20
    imageRef.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
  })
  const particlesInit = (main) => {
    console.log(main)
    loadFull(main)
  }
  const particlesLoaded = (container) => {
    console.log(container)
  }
  return (
    <div className="relative">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        width="100%"
        height="90vh"
        zIndex="5"
        options={{
          // background: {
          //   color: {
          //     value: '#0d47a1',
          //   },
          // },
          // fpsLimit: 30,
          // interactivity: {
          //   events: {
          //     onClick: {
          //       enable: true,
          //       mode: 'repulse',
          //     },
          //     onHover: {
          //       enable: true,
          //       mode: 'bubble',
          //     },
          //     resize: true,
          //   },
          //   modes: {
          //     push: {
          //       quantity: 4,
          //     },
          //     bubble: {
          //       distance: 250,
          //       duration: 2,
          //       size: '0',
          //       opacity: 0,
          //     },
          //     repulse: {
          //       distance: 400,
          //       duration: 0.4,
          //     },
          //   },
          // },
          // particles: {
          //   color: {
          //     value: '#ffffff',
          //   },
          //   links: {
          //     color: '#ffffff',
          //     distance: 150,
          //     enable: false,
          //     opacity: 0.5,
          //     width: 1,
          //   },
          //   collisions: {
          //     enable: true,
          //   },
          //   move: {
          //     direction: 'none',
          //     enable: true,
          //     outModes: {
          //       default: 'bounce',
          //     },
          //     random: false,
          //     speed: 1,
          //     straight: false,
          //     out_mode: 'out',
          //   },
          //   number: {
          //     density: {
          //       enable: true,
          //       area: 800,
          //     },
          //     value: 160,
          //   },
          //   opacity: {
          //     value: 0.5,
          //   },
          //   shape: {
          //     type: 'circle',
          //   },
          //   size: {
          //     value: { min: 1, max: 2 },
          //   },
          // },
          // detectRetina: true,
          // fullScreen: {
          //   enable: false,
          // },

          fullScreen: {
            enable: false,
            zIndex: 1,
          },
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
              },
              onclick: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
          background: {
            color: '#232741',
            // image:
            //   "url('https://www.pngitem.com/pimgs/m/157-1575410_react-js-logo-png-transparent-png.png')",
            position: '50% 50%',
            repeat: 'no-repeat',
            size: '20%',
            zIndex: 20,
          },
        }}
      />
      <div className="absolute top-0 z-30 text-white flex flex-row justify-between w-full px-10 lg:pt-20">
        <div className="flex-1">
          {' '}
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
        <div className="relative flex-1 lg:flex hidden  justify-center items-center lg:pt-16">
          <img
            ref={imageRef}
            className="lg:w-72 lg:h-72 h-64 w-64 absolute md:inset-y-36 lg:inset-y-20 inset-y-5 rounded-full"
            src={user}
            alt=""
          />
          {/* <div className="border-1 rounded-full w-60 h-60 lg:w-80 lg:h-80 bg-red-400"></div> */}
        </div>
      </div>
    </div>
  )
}

export default Particle
