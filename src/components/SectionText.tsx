interface SectionTextProps {
  title: string
  description: string
}

const SectionText = ({ title, description }: SectionTextProps) => {
  return (
    <div
      className="absolute text-dark flex flex-col items-end text-right
      top-[20vh] right-1/2 md:right-0 mr-36 xl:mr-26 md:px-auto whitespace-pre-line"
    >
      <div className="sm:text-4xl text-5xl leading-[1.2] mb-8">{title}</div>
      <div className="w-fit">
        <div className="stroke bg-primary sm:mr-0 ml-14 mb-5" />
        <div className="stroke bg-secondary sm:ml-0 mr-14 sm:absolute sm:top-24" />
      </div>
      <div className="sm:text-xl text-2xl md:max-w-sm max-w-lg mt-10">
        {description}
      </div>
    </div>
  )
}

export default SectionText
