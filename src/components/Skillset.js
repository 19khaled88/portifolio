import Typewriter from 'typewriter-effect/dist/core'
import firebase from '../assets/firebase1.png'
import mongodb from '../assets/mongodb_icon.png'
import next from '../assets/next_js.png'
import node from '../assets/node-js.png'
import react from '../assets/react-icon.png'
import native from '../assets/React-native1.png'
import TypeEffect from './TypeEffect'
// import Typescripts from './Typescript';
const Skillset = () => {
  var app = document.getElementById('typewriters')
  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
  })

  typewriter
    .pauseFor(2500)
    .typeString('React js, Node js, Mongodb, Firebase, Next js, React Native')
    .pauseFor(300)
    .deleteChars(10)
    .pauseFor(1000)
    .start()

  return (
    <div className="flex flex-col pt-20 pb-16">
      <p className="text-green-600 text-center font-bold">Skills</p>
      <h4
        className="text-center text-3xl font-bold"
        style={{ color: '#263b5e' }}
      >
        Skill Sets
      </h4>
      <h4
        className="text-red-600 text-3xl font-bold text-center"
        id="typewriters"
      ></h4>
      <TypeEffect  />
      <div className="grid grid-cols-3 gap-x-9 gap-y-9 pt-16 lg:max-x-lg  mx-auto">
        <div
          class="card w-96 bg-base-100 shadow-xl"
          style={{ backgroundColor: '#f5f4fb' }}
        >
          <div class="avatar mx-auto">
            <div class="w-24 mask mask-squircle">
              <img src={react} />
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title  mx-auto " style={{ color: '#263b68' }}>
              React JS
            </h2>
            <p className="text-justify" style={{ color: '#8e7ca2' }}>
              A JavaScript library for building user interfaces. It is
              declarative and component based.
            </p>
          </div>
        </div>
        <div
          class="card w-96 bg-base-100 shadow-xl"
          style={{ backgroundColor: '#f5f4fb' }}
        >
          <div class="avatar mx-auto pt-2">
            <div class="w-24 mask mask-squircle">
              <img src={node} />
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title mx-auto" style={{ color: '#263b68' }}>
              Node JS
            </h2>
            <p className="text-justify">
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on the V8 engine .
            </p>
          </div>
        </div>
        <div
          class="card w-96 bg-base-100 shadow-xl"
          style={{ backgroundColor: '#f5f4fb' }}
        >
          <div class="avatar mx-auto pt-2">
            <div class="w-24 mask mask-squircle">
              <img src={next} />
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title mx-auto" style={{ color: '#263b68' }}>
              Next JS
            </h2>
            <p className="text-justify">
              Next.js is a web development framework built on top of Node.js
              enables React-based web applications for server-side rendering
            </p>
          </div>
        </div>
        <div
          class="card w-96 bg-base-100 shadow-xl"
          style={{ backgroundColor: '#f5f4fb' }}
        >
          <div class="avatar mx-auto pt-2">
            <div class="w-24 mask mask-squircle">
              <img src={mongodb} />
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title mx-auto" style={{ color: '#263b68' }}>
              MongoDB
            </h2>
            <p className="text-justify">
              MongoDB is a source-available cross-platform document-oriented
              database program. Classified as a NoSQL database program
            </p>
          </div>
        </div>
        <div
          class="card w-96 bg-base-100 shadow-xl"
          style={{ backgroundColor: '#f5f4fb' }}
        >
          <div class="avatar mx-auto pt-2">
            <div class="w-24 mask mask-squircle">
              <img src={native} />
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title mx-auto" style={{ color: '#263b68' }}>
              React Native
            </h2>
            <p className="text-justify">
              React Native is an open-source UI software framework created by
              Meta Platforms, Inc. It is used to develop applications for
              Android, iOS, Web, Windows
            </p>
          </div>
        </div>
        <div
          class="card w-96 bg-base-100 shadow-xl"
          style={{ backgroundColor: '#f5f4fb' }}
        >
          <div class="avatar mx-auto pt-2">
            <div class="w-24 mask mask-squircle">
              <img src={firebase} />
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title mx-auto" style={{ color: '#263b68' }}>
              Firebase
            </h2>
            <p className="text-justify">
              Firebase is a platform developed by Google for creating mobile and
              web applications. It was originally an independent company founded
              in 2011
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skillset
