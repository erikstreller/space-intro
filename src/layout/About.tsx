import blueAbstrac from "../assets/blue-abstract.png"
import whiteAbstract from "../assets/white-abstract.png"
import SectionNumber from "../components/SectionNumber"
import SectionText from "../components/SectionText"
import TextOverlay from "../components/TextOverlay"

const aboutTitle: string = "Hey. I’am Erik.\n Nice to meet you."
const aboutDescription: string =
  "I’m a mechanical engineer and a coding enthusiast who loves technology. I’m always excited for new things to learn and to improve my knowledge."

const About = () => {
  return (
    <section
      id="about"
      className="h-screen w-full bg-light relative flex justify-center z-10"
    >
      <SectionText title={aboutTitle} description={aboutDescription} />

      <div className="absolute top-[40.5vh] left-10 text-dark text-2xl sm:hidden">
        <div className="-rotate-90">4</div>
        <div className="h-6 w-0.5 bg-dark rounded-full ml-[6px]" />
        <div className="-rotate-90">2</div>
      </div>
      <TextOverlay />
      <div className="flex">
        <img
          src={whiteAbstract}
          alt="white abstract"
          className="absolute z-10 opacity-90 top-[25%] right-[16vw] xl:right-[9vw] lg:scale-[.6] xl:scale-[.85] lg:right-[1vw] 
          md:scale-50 transition-all duration-300 ease-in-out"
        />
        <img
          src={blueAbstrac}
          alt="blue abstract"
          className="absolute top-[21%] right-[13.75vw] xl:right-[6.75vw] lg:scale-[.6] xl:scale-[.85] lg:-right-[3vw] 
          md:scale-50 transition-all duration-300 ease-in-out"
        />
      </div>
      <SectionNumber number={2} />
    </section>
  )
}

export default About
