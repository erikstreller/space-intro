import { ReactNode, useEffect, useState } from "react"
import { FiGithub } from "react-icons/fi"
import { RiLinkedinFill } from "react-icons/ri"

interface LinksProps {
  icon: ReactNode
  href: string
}

const Header = ({ open, setOpen }: MenuProps) => {
  const [color, setColor] = useState<string>("light")

  const changeTextColor = () => {
    if (
      window.scrollY >= document.body.scrollHeight / 4.2 &&
      window.scrollY <= document.body.scrollHeight / 1.35
    ) {
      setColor("dark")
    } else {
      setColor("light")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeTextColor, true)
    return () => window.removeEventListener("scroll", changeTextColor)
  })

  const links: LinksProps[] = [
    {
      icon: <RiLinkedinFill />,
      href: "https://www.linkedin.com/in/erik-streller-a435631a4/",
    },
    {
      icon: <FiGithub />,
      href: "https://github.com/erikstreller",
    },
  ]

  return (
    <header
      className={`fixed z-50 top-0 w-full text-${color} sm:py-5 sm:px-[6.25%] px-10 pt-10 flex justify-between`}
    >
      <button
        className="header-link sm:text-xl text-2xl"
        onClick={() =>
          document
            .getElementById("hero")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Erik Streller
      </button>
      <div className="flex space-x-8 sm:text-xl text-2xl mr-26 md:hidden">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            className="header-link pt-1"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <button
        className="absolute sm:top-[13px] top-9 sm:right-[6.25%] right-9 w-10 h-10 focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <div className="absolute sm:w-6 w-8 transform -translate-x-1/2 -translate-y-1/2 left-1 top-1/2">
          <span
            className={`absolute h-[0.188rem] sm:w-6 w-8 bg-${color} transform transition duration-300 ease-in-out ${
              open ? "rotate-45 delay-200" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-[0.188rem] sm:w-6 w-8 bg-${color} transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 delay-200" : "translate-y-1.5"
            }`}
          />
        </div>
      </button>
    </header>
  )
}

export default Header
