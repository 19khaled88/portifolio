import Typewriter from 'typewriter-effect';
const Typescripts = () => {
  return (
    <Typewriter
        onInit={(typewriter) => {
            typewriter.typeString('React js, Node js, Mongodb, Firebase, Next js, React Native!')
            .callFunction(() => {
                console.log('String typed out!');
            })
            .pauseFor(300)
            .deleteAll()
            .callFunction(() => {
                console.log('All strings were deleted');
            })
            
            .start();
        }}
        />
  );
}

export default Typescripts;
