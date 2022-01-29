import blueAbstrac from "../assets/blue-abstract.png"
import whiteAbstract from "../assets/white-abstract.png"
import LineTrio from "../components/LineTrio"
import SectionNumber from "../components/SectionNumber"
import TextOverlay from "../components/TextOverlay"

const Skills = () => {
  return (
    <section
      id="skills"
      className="h-screen w-full bg-paper relative z-10 flex justify-center"
    >
      <LineTrio />
      <TextOverlay />
      {/* <div className="relative h-[95vh] w-0.5 bg-dark rounded-full my-auto md:hidden"></div> */}
      <div
        className="absolute text-4xl lg:text-3xl text-dark whitespace-pre-line leading-loose 
        w-fit left-[25vw] lg:left-[15vw] md:left-10 sm:left-[6.25%] top-[290px] lg:leading-loose "
      >
        React{"\n"}
        Typescript{"\n"}
        Python{"\n"}
        Html / Css{"\n"}
      </div>
      <div
        className="technology-text text-primary -rotate-90 top-[20%] mr-[133px] lg:mr-[87px] 
        md:mr-0 md:right-10 md:rotate-0 md:top-[12%]"
      >
        Tailwind
      </div>
      <div className="technology-text text-dark top-[40%] whitespace-pre md:top-[17%] md:right-10">
        Fig ma
      </div>
      <div
        className="technology-text text-primary -rotate-90 top-[64%] ml-[133px] lg:ml-[87px] 
        md:ml-0 md:rotate-0 md:top-[22%] md:right-10"
      >
        Material ui
      </div>
      <div className="flex">
        <img
          src={whiteAbstract}
          alt="white abstract"
          className="absolute z-10 opacity-90 top-[21%] right-[12vw] lg:scale-[.6] lg:right-[1vw] 
          md:scale-50 transition-all duration-300 ease-in-out"
        />
        <img
          src={blueAbstrac}
          alt="blue abstract"
          className="absolute top-[17%] right-[9.75vw] lg:scale-[.6] lg:-right-[3vw] md:scale-50"
        />
      </div>
      <SectionNumber number={3} />
      <div className="absolute top-[569px] left-10 text-dark text-2xl sm:hidden">
        <div className="-rotate-90">4</div>
        <div className="h-6 w-0.5 bg-dark rounded-full ml-[6px]" />
        <div className="-rotate-90">3</div>
      </div>
    </section>
  )
}

export default Skills
