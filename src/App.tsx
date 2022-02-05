import gsap from "gsap"
import { useLayoutEffect, useState } from "react"
import MenuOverlay from "./components/MenuOverlay"
import About from "./layout/About"
import Contact from "./layout/Contact"
import Header from "./layout/Header"
import Hero from "./layout/Hero"
import Skills from "./layout/Skills"

function App() {
  const [open, setOpen] = useState<boolean>(false)

  useLayoutEffect(() => {
    gsap
      .timeline()
      .from("#sun", { x: 100, y: 200, opacity: 0, duration: 2.5 })
      .from("#mars", { x: 200, y: 200, opacity: 0, duration: 2.5 }, 0.5)
      .fromTo(
        "#moon1",
        { x: 75, y: 150, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 2 },
        1
      )
      .fromTo(
        "#moon2",
        { x: 150, y: 150, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 2 },
        1
      )
      .fromTo(
        "#section-number, #scroll-down, #page-number, #header",
        { opacity: 0 },
        { opacity: 1, duration: 2.5 },
        3.5
      )

    gsap
      .timeline()
      .fromTo(
        "#hero-title",
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          y: 100,
          opacity: 0,
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          y: 0,
          opacity: 1,
          duration: 2,
        }
      )
      .fromTo(
        "#hero-subtitle",
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          y: 100,
          opacity: 0,
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          y: 0,
          opacity: 1,
          duration: 2,
        },
        0
      )
      .fromTo("#hero-tl-stroke", { x: -200, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo("#hero-br-stroke", { x: +200, opacity: 0 }, { x: 0, opacity: 1 })
  })

  return (
    <>
      {/* <ScrollingStroke /> */}
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
