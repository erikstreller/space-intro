import planet3 from "../assets/planet3.png"
import LineTrio from "../components/LineTrio"
import TextOverlay from "../components/TextOverlay"

const About = () => {
  return (
    <section
      id="about"
      className="h-screen w-full bg-light relative flex justify-center"
    >
      <div
        className="absolute lg:text-4xl text-5xl text-dark lg:max-w-[35%] max-w-[38%] md:max-w-[65%] 
        top-[32vh] right-1/2 md:right-0 mr-12 md:px-auto text-right leading-[1.1] whitespace-pre-line"
      >
        Hey. I’am Erik.{"\n"} Lorem ipsum dolor sit amet, consetetur.
      </div>
      <div
        className="absolute text-4xl lg:text-3xl text-dark whitespace-pre-line z-10 md:z-0 w-fit
        bottom-[2.5%] left-1/2 ml-12 md:left-auto md:-right-[72px]
        md:-rotate-90 md:bottom-36
        "
      >
        mechanical engineer{"\n"}
        coding enthusiast
      </div>
      <LineTrio />
      <div className="relative h-[95vh] w-0.5 bg-dark rounded-full my-auto md:hidden"></div>
      <div className="absolute top-[407px] left-10 text-dark text-2xl sm:hidden">
        <div className="-rotate-90">4</div>
        <div className="h-6 w-0.5 bg-dark rounded-full ml-[6px]" />
        <div className="-rotate-90">2</div>
      </div>
      <TextOverlay />
      <img
        src={planet3}
        alt="moon1"
        className="absolute bottom-[27vh] left-[25vw] hidden sm:flex lg:opacity-75"
      />
      <img
        src={planet3}
        alt="moon2"
        className="absolute bottom-[40vh] left-[9vw] hidden sm:flex lg:opacity-75"
      />
    </section>
  )
}

export default About
