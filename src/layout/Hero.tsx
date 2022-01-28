import planet1 from "../assets/planet1.png"
import planet2 from "../assets/planet2.png"
import planet3 from "../assets/planet3.png"

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen w-full top-0 flex justify-center bg-gradient-to-b from-darkblue to-dark"
    >
      <div className="text-light text-center md:pt-32 pt-[24vh] sm:px-[11%] z-10">
        <div className="sm:text-4xl text-5xl md:max-w-sm max-w-lg mb-8">
          Lorem ipsum dolor sit amet, consetetur
        </div>
        <div className="w-fit mx-auto">
          <div className="stroke bg-primary sm:mr-0 mr-14 mb-5" />
          <div className="stroke bg-secondary sm:ml-0 ml-14 sm:absolute sm:top-24" />
        </div>
        <div className="sm:text-xl text-2xl md:max-w-sm max-w-md mx-auto mt-10">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </div>
      </div>
      <div className="text-light absolute bottom-3 flex items-center md:hidden">
        <div className="mr-4">scroll</div>
        <div className="h-20 w-0.5 bg-light rounded-full" />
        <div className="ml-4">down</div>
      </div>
      <div className="absolute top-64 left-10 text-light text-2xl sm:hidden">
        <div className="-rotate-90">4</div>
        <div className="h-6 w-0.5 bg-light rounded-full ml-[6px]" />
        <div className="-rotate-90">1</div>
      </div>
      <img
        src={planet1}
        alt="sun"
        className="fixed bottom-0 right-0 z-10 lg:z-0 
      lg:scale-90 lg:-right-6 lg:-bottom-6 lg:opacity-95
      md:scale-[.7] md:-right-16 md:-bottom-16 sm:opacity-90"
      />
      <img
        src={planet2}
        alt="mars"
        className="fixed top-[20vh] right-[13vw] z-10 
        lg:right-20 lg:opacity-75
        md:scale-50 md:top-14 md:right-0
        sm:top-8 sm:-right-8 sm:scale-[.3]"
      />
      <img
        src={planet3}
        alt="moon1"
        className="fixed bottom-[32vh] right-[25vw] z-10 sm:z-0
        lg:opacity-75"
      />
      <img
        src={planet3}
        alt="moon2"
        className="fixed bottom-[45vh] right-[9vw] z-10 sm:z-0
        lg:opacity-75"
      />
    </section>
  )
}

export default Hero