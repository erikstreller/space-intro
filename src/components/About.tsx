const About = () => {
  return (
    <section className="h-screen w-full bg-light relative flex justify-center">
      <div
        className="absolute lg:text-4xl text-5xl lg:max-w-[35%] max-w-[38%] md:max-w-[65%] 
        top-[32vh] right-1/2 md:right-0 mr-12 md:px-auto text-right leading-[1.1] whitespace-pre-line"
      >
        Hey. I’am Erik.{"\n"} Lorem ipsum dolor sit amet, consetetur.
      </div>
      <div
        className="absolute flex md:flex-col justify-between 
        w-20 md:w-fit md:h-20 top-[2.5%] md:top-[15%] left-[26vw] md:left-10 sm:left-[6.25%]"
      >
        <div className="line-dark w-0.5 md:h-0.5 h-36 md:w-36" />
        <div className="line-dark w-0.5 md:h-0.5 h-56 md:w-56" />
        <div className="line-dark w-0.5 md:h-0.5 h-24 md:w-24" />
      </div>
      <div className="relative h-[95vh] w-0.5 bg-dark rounded-full my-auto md:hidden"></div>
      <div className="absolute top-[407px] left-10 text-dark text-2xl sm:hidden">
        <div className="-rotate-90">4</div>
        <div className="h-6 w-0.5 bg-dark rounded-full ml-[6px]" />
        <div className="-rotate-90">2</div>
      </div>
      <div className="overlay-text bottom-[1%] left-[2%]">Lorem</div>
      <div className="overlay-text bottom-[8.5%] left-[7.25%]">ipsum</div>
    </section>
  )
}

export default About
