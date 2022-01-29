import SectionNumber from "../components/SectionNumber"

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-screen bg-dark relative flex justify-center items-center"
    >
      <div className="text-overlay font-serif opacity-10 text-light">
        Page coming
      </div>
      <SectionNumber number={4} numberColor="light" lineColor="light" />
      <div className="absolute top-[720px] left-10 text-light text-2xl sm:hidden">
        <div className="-rotate-90">4</div>
        <div className="h-6 w-0.5 bg-light rounded-full ml-[6px]" />
        <div className="-rotate-90">4</div>
      </div>
    </section>
  )
}

export default Contact
