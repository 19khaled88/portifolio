import Typewriter from 'typewriter-effect'
const Typescripts = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString(
            'React js, Node js, Mongodb, Firebase, Next js, React Native!',
          )
          .callFunction(() => {})
          .pauseFor(300)
          .deleteAll()
          .callFunction(() => {})

          .start()
      }}
    />
  )
}

export default Typescripts
