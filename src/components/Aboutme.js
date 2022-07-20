import React from 'react'
import khaled from '../assets/khaled_picture.jpg'
const Aboutme = () => {
  return (
    <div className="flex flex-col">
     
      <p className="text-green-600 text-center font-bold pt-4 text-4xl">About me</p>
      
      <div className="flex lg:flex-row flex-col pt-16 container mx-auto">
        <div className="flex-1 flex items-center justify-center">
          <img className="w-60 h-60 rounded-full" src={khaled} alt=""  />
        </div>
        <div className="flex-1">
          <p style={{ color: '#797E83' }} className="pb-3 bg-rose-200 rounded-md p-2 mb-2 text-lg">
            I am a junior full stack developer. I feel fantastic to work on javascript
            language. Moreover, react js is my favorite library. 
            I did some small projects, where react js for UI and node js for back end have been used. Recently i have expolored redux library and graphql query language. I am happy that i have been able to complete Todo application on both redux library and graphql.
          </p>
          <p style={{ color: '#797E83' }} className="pb-3 bg-pink-200 rounded-md p-2 mb-2 text-lg">
            I am looking forward to work with typescript in future.
            also have a love for wordpress cms system
          </p>
          <p style={{ color: '#797E83' }} className="pb-4 bg-fuchsia-200 rounded-md p-2 text-lg">
            {' '}
            Those technologies that I've been working with recently:<br/>
            <div className='mt-2'>
             <span className='px-2 mx-2 bg-violet-600 rounded-lg text-white p-1 '>HTML</span>
             <span className='px-2 mx-2 bg-blue-600 rounded-lg text-white p-1 '>CSS</span>
             <span className='px-2 mx-2 bg-sky-600 rounded-lg text-white p-1 '>Javascript</span>
             <span className='px-2 mx-2 bg-cyan-600 rounded-lg text-white p-1 '>React</span>
             <span className='px-2 mx-2 bg-teal-600 rounded-lg text-white p-1 '>Express</span>
             <span className='px-2 mx-2 bg-emerald-600 rounded-lg text-white p-1 '>Node</span>
            </div>
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default Aboutme
