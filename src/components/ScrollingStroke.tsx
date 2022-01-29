const ScrollingStroke = () => {
  // drawing svg line based on scroll position
  const path: SVGPathElement | null = document.querySelector("path")
  const pathLength: number | undefined = path?.getTotalLength()

  path?.style.strokeDasharray != null
    ? (path.style.strokeDasharray = pathLength + " " + pathLength)
    : null

  if (pathLength != undefined) {
    path?.style.strokeDashoffset != undefined
      ? (path.style.strokeDashoffset = pathLength.toString())
      : undefined
  }

  window.addEventListener("scroll", () => {
    // current scroll percentage
    const scrollPercentage =
      (document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)

    if (pathLength != undefined) {
      // offset dash length
      const drawLength = pathLength * scrollPercentage

      // draw in reverse
      path?.style.strokeDashoffset != undefined
        ? (path.style.strokeDashoffset = (pathLength - drawLength).toString())
        : undefined
    }
  })

  return (
    <div className="absolute top-[60vh] left-center h-[300vh] overflow-hidden z-20">
      <svg
        viewBox="0 0 2 3185"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
        className="h-full w-0.5"
      >
        <path d="M1 0V3185" stroke="#E0505F" strokeWidth="4" />
      </svg>
    </div>
  )
}

export default ScrollingStroke
