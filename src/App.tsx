import { useState } from "react"
import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import MenuOverlay from "./components/MenuOverlay"
import Skills from "./components/Skills"

function App() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <MenuOverlay open={open} setOpen={setOpen} />
      <Hero />
      <About />
      <Skills />
    </>
  )
}

export default App
