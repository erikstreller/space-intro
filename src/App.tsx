import gsap, { ScrollTrigger } from "gsap/all"
import { useEffect, useLayoutEffect, useState } from "react"
import { animateHeroBg, animateHeroText } from "./animation/pageLoading"
import MenuOverlay from "./components/MenuOverlay"
import ScrollingStroke from "./components/ScrollingStroke"
import About from "./layout/About"
import Contact from "./layout/Contact"
import Header from "./layout/Header"
import Hero from "./layout/Hero"
import Skills from "./layout/Skills"

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [open, setOpen] = useState<boolean>(false)

  useLayoutEffect(() => {
    animateHeroText()
    animateHeroBg()
  }, [])

  useEffect(() => {
    gsap.fromTo(
      "#top",
      { xPercent: -5 },
      {
        xPercent: 5,
        scrollTrigger: { trigger: "#skills", scrub: 1 },
      }
    )

    gsap.fromTo(
      "#bottom",
      { xPercent: 5 },
      {
        xPercent: -5,
        scrollTrigger: { trigger: "#skills", scrub: 1 },
      }
    )
  })

  return (
    <>
      <ScrollingStroke />
      <Header open={open} setOpen={setOpen} />
      <MenuOverlay open={open} setOpen={setOpen} />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </>
  )
}

export default App
