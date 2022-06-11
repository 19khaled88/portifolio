import React from 'react'
import khaled from '../assets/khaled_picture.jpg'
const Aboutme = () => {
  return (
    <div className="flex flex-col">
      <p className="text-green-600 text-center font-bold pt-4">About me</p>
      <p
        className="text-center text-3xl font-bold"
        style={{ color: '#263b5e' }}
      >
        What i am
      </p>
      <div className="flex flex-row pt-16 container mx-auto">
        <div className="flex-1 flex items-center justify-center">
          <img className="w-60 h-60" src={khaled} alt="" />
        </div>
        <div className="flex-2">
          <p style={{ color: '#797E83' }} className="pb-3">
            I am a full stack developer. I feel easy to work with javascript
            language. Moreover, react js is my favorite library.
          </p>
          <p style={{ color: '#797E83' }} className="pb-3">
            I am looking forward to work with next js and typescript in future.
            also have love for wordpress cms system
          </p>
          <p style={{ color: '#797E83' }} className="pb-4">
            {' '}
            Those technologies that I've been working with recently:
          </p>
          <div
            className="flex flex-row gap-x-10 pt-8 text-2xl"
            style={{ color: '#529BCF' }}
          >
            <ul>
              <li>1. HTML</li>
              <li>2. CSS</li>
              <li>3. Javascript</li>
            </ul>
            <ul>
              <li>4. React</li>
              <li>5. Express</li>
              <li>6. Node</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
