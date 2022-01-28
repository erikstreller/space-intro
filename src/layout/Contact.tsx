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
      <SectionNumber number={4} numberColor="light" />
    </section>
  )
}

export default Contact
