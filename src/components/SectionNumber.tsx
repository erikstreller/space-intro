interface SectionNumberProps {
  lineColor?: "light" | "dark"
  numberColor?: "light" | "dark"
  number: number
}

const defaultProps = {
  lineColor: "dark",
  numberColor: "dark",
}

const SectionNumber = ({
  lineColor,
  numberColor,
  number,
}: SectionNumberProps) => {
  return (
    <div className="flex justify-center items-center absolute bottom-6 right-7 z-10">
      <div className={`h-0.5 w-16 rounded-full opacity-30 bg-${lineColor}`} />
      <div className={`font-serif text-5xl ml-[18px] text-${numberColor}`}>
        0{number}
      </div>
    </div>
  )
}

SectionNumber.defaultProps = defaultProps

export default SectionNumber
