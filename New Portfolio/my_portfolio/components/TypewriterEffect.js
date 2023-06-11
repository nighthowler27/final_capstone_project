import Typewriter from 'typewriter-effect';

export default function TypewriterEffect() {

  return (
    <h1>
        <Typewriter
            options={{
                strings: ['Hello', 'World'],
                autoStart: true,
                loop: true,
            }}
            />
    </h1>
  )
}
