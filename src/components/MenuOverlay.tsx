import Credits from "./Credits"

interface SectionProps {
  name: string
  href: string
}

const MenuOverlay = ({ open, setOpen }: MenuProps) => {
  function delay(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  async function toSection(href: string) {
    setOpen(false)
    await delay(800)
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" })
  }

  const sections: SectionProps[] = [
    {
      name: "Home",
      href: "hero",
    },
    {
      name: "About Me",
      href: "about",
    },
    {
      name: "Interests",
      href: "skills",
    },
    {
      name: "Contact",
      href: "contact",
    },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-40 bg-gradient-to-r from-primary to-secondary transition-all duration-300 delay-300 ${
        open ? "opacity-100" : "opacity-0 -translate-x-full"
      }`}
    >
      <Credits />
      <ul className="w-full h-screen flex flex-col items-center justify-center">
        {sections.map((section) => (
          <li
            key={section.href}
            className="sm:text-5xl md:text-7xl lg:text-8xl text-9xl text-light mb-10 transition-all duration-500 ease-in-out hover:-translate-y-4"
          >
            <button onClick={() => toSection(section.href)}>
              {section.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuOverlay
