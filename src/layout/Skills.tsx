import SectionNumber from "../components/SectionNumber"
import SectionText from "../components/SectionText"
import TextOverlay from "../components/TextOverlay"

const skillTitle: string = "About my interests"
const skillDescription: string =
  "I like to use React with Typescript in combination with Mui or TailwindCss and to design pages on Figma.\n\n For data analyses or visualization and for game or automation projects I use Python."

const Skills = () => {
  return (
    <section
      id="skills"
      className="h-screen w-full bg-paper relative flex justify-center"
    >
      <TextOverlay topText="ipsum" bottomText="Lorem" />
      <SectionText title={skillTitle} description={skillDescription} />
      <SectionNumber number={3} />
      <div className="absolute top-[55.5vh] left-10 text-dark text-2xl sm:hidden">
        <div className="-rotate-90">4</div>
        <div className="h-6 w-0.5 bg-dark rounded-full ml-[6px]" />
        <div className="-rotate-90">3</div>
      </div>
    </section>
  )
}

export default Skills
