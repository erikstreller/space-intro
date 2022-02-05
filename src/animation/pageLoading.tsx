import { gsap } from "gsap"

export function animateHeroBg() {
  return gsap
    .timeline()
    .from("#sun", { x: 100, y: 200, opacity: 0, duration: 2.5 })
    .from("#mars", { x: 200, y: 200, opacity: 0, duration: 2.5 }, 0.5)
    .from("#moon1", { x: 75, y: 150, opacity: 0, duration: 2 }, 1)
    .from("#moon2", { x: 150, y: 150, opacity: 0, duration: 2 }, 1)
    .from(
      "#section-number, #scroll-down, #page-number, #header",
      { opacity: 0, duration: 2.5 },
      3.5
    )
}

export function animateHeroText() {
  return gsap
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
    .from("#hero-tl-stroke", { x: -150, opacity: 0 })
    .from("#hero-br-stroke", { x: +150, opacity: 0 })
}
