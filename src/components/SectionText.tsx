interface SectionTextProps {
  title: string
  description: string
}

const SectionText = ({ title, description }: SectionTextProps) => {
  return (
    <div
      className="absolute text-dark flex flex-col items-end md:items-center text-right md:text-center
      top-[20vh] md:top-[25vh] right-1/2 mr-36 ml-12 md:right-auto md:mx-auto xl:mr-26 whitespace-pre-line z-30"
    >
      <div className="text-section-title leading-[1.2] mb-8">{title}</div>
      <div className="w-fit">
        <div className="stroke bg-primary sm:mr-0 ml-14 mb-5" />
        <div className="stroke bg-secondary sm:ml-0 mr-14 sm:absolute sm:top-24" />
      </div>
      <div className="text-section-description max-w-section-description md:max-w-section-description-md mt-10">
        {description}
      </div>
    </div>
  )
}

export default SectionText
