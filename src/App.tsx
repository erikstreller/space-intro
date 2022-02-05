import { useLayoutEffect, useState } from "react"
import { animateHeroBg, animateHeroText } from "./animation/pageLoading"
import MenuOverlay from "./components/MenuOverlay"
import ScrollingStroke from "./components/ScrollingStroke"
import About from "./layout/About"
import Contact from "./layout/Contact"
import Header from "./layout/Header"
import Hero from "./layout/Hero"
import Skills from "./layout/Skills"

function App() {
  const [open, setOpen] = useState<boolean>(false)

  useLayoutEffect(() => {
    animateHeroText()
    animateHeroBg()
  }, [])

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
