import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import MenuOverlay from "./components/MenuOverlay"

function App() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <MenuOverlay open={open} setOpen={setOpen} />
      <Hero />
    </>
  )
}

export default App
