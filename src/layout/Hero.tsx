import planet1 from "../assets/planet1.png"
import planet2 from "../assets/planet2.png"
import planet3 from "../assets/planet3.png"
import SectionNumber from "../components/SectionNumber"

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen w-full top-0 flex justify-center bg-gradient-to-b from-darkblue to-dark"
    >
      <div className="text-light text-center sm:pt-32 pt-[24vh] sm:px-[11%] z-30">
        {/* min height to prevent cut off text on bottom with gsap */}
        <div
          className="sm:text-4xl text-5xl md:max-w-hero-title max-w-lg mb-8 min-h-[100px]"
          id="hero-title"
        >
          I’m Erik, I design and build things for fun.
        </div>
        <div className="w-fit mx-auto">
          <div
            className="stroke bg-primary sm:mr-0 mr-14 mb-5"
            id="hero-tl-stroke"
          />
          <div
            className="stroke bg-secondary sm:ml-0 ml-14 sm:absolute sm:top-24"
            id="hero-br-stroke"
          />
        </div>
        <div
          className="sm:text-xl text-2xl md:max-w-hero-subtitle max-w-md mx-auto mt-10"
          id="hero-subtitle"
        >
          I did my diploma in mechanical engineering where I used python to
          analyze and visualize data. Eversince coding hooked me.
        </div>
      </div>
      <div
        className="text-light absolute bottom-3 flex items-center md:hidden"
        id="scroll-down"
      >
        <div className="mr-4">scroll</div>
        <div className="ml-4">down</div>
      </div>
      <div
        className="absolute top-[25.5vh] left-10 text-light text-2xl md:hidden"
        id="page-number"
      >
        <div className="-rotate-90">4</div>
        <div className="h-6 w-0.5 bg-light rounded-full ml-[6px]" />
        <div className="-rotate-90">1</div>
      </div>
      {/* img inside div for tailwind breakpoints (scale and opacity) to properly work with gsap */}
      <div
        className="fixed bottom-0 right-0 z-10 lg:-right-6 lg:-bottom-6 md:hidden"
        id="sun"
      >
        <img src={planet1} alt="sun" className="lg:scale-90 lg:opacity-95" />
      </div>
      <div
        className="fixed top-[20vh] right-[13vw] lg:right-20 
        md:top-14 md:right-0 sm:top-8 sm:-right-8 z-10"
        id="mars"
      >
        <img
          src={planet2}
          alt="mars"
          className="lg:opacity-75 md:scale-50 sm:scale-[.3]"
        />
      </div>
      <div className="fixed bottom-[32vh] right-[25vw] z-10" id="moon1">
        <img src={planet3} alt="moon1" className="lg:opacity-75" />
      </div>
      <div className="fixed bottom-[45vh] right-[9vw] z-10" id="moon2">
        <img src={planet3} alt="moon2" className="lg:opacity-75" />
      </div>
      <SectionNumber number={1} numberColor="light" />
    </section>
  )
}

export default Hero
