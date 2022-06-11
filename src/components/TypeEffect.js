import React from 'react'
// import TypeWriterEffect from 'react-typewriter-effect'
// import TypeWriter from 'react-typewriter'
import TypeAnimation from 'react-type-animation'
import '../design/typing.css'
const TypeEffect = () => {
  return (
    // <TypeWriterEffect
    //   textStyle={{
    //     fontFamily: 'Red Hat Display',
    //     color: '#3F3D56',
    //     fontWeight: 500,
    //     fontSize: '1.5em',
    //   }}
    //   startDelay={5000}
    //   cursorColor="#3F3D56"
    //   multiText={[
    //     'Hey there, This is a type writer animation package',
    //     'it consist of two types...',
    //     'Single text display and multi text display',
    //     'Fonts can be customized.',
    //     'The type speed can be customized as well',
    //   ]}
    //   multiTextDelay={3000}
    //   typeSpeed={10}
    // />

    // <TypeWriter initDelay={6000} maxDelay={200} minDelay={100} typing={1}>
    //   <span style={{ color: 'blue' }}>
    //     React js, Node js, Mongodb, Firebase, Next js, React Native
    //   </span>

    // </TypeWriter>

    <TypeAnimation
      className="custom"
      cursor={true}
      repeat={Infinity}
      sequence={[
        'React js Node js Mongodb Firebase Next js React Native',
        3000,
        '',
      ]}
      wrapper="h2"
    />
  )
}

export default TypeEffect
