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
    <div className="absolute top-[50vh] left-center h-[300vh] overflow-hidden z-20">
      <svg
        viewBox="0 0 130 2929"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
        className="h-full w-[130px]"
      >
        <path
          d="M67.0541 0V841C67.0542 844 72.5542 844 72.5541 847.5C72.554 849.5 71.4996 849.873 65.5542 852.5C44.0542 862 27.5542 871.5 14.5542 892.5C12.8691 895.222 12.8901 898.891 14.5542 900C16.0543 901 18.5542 902 22.5542 896C26.5542 890 38.0541 867.5 67.0541 867.5C96.0542 867.5 116.054 889 116.054 918C116.054 947 88.5542 966.5 68.5542 965.5C48.5542 964.5 25.5542 956.5 19.0542 924.5C13.1766 895.564 0.054051 925.5 1.0541 935C2.05415 944.5 7.05418 948.5 19.0542 948.5C36.5612 948.5 63.5541 937 78.0541 928.5C92.5541 920 133.554 894.5 127.554 884C121.554 873.5 75.0541 888.5 57.0541 897.5C36.5542 907.75 27.0542 914 15.0541 926C-0.453972 941.508 1.98292 948.025 10 953.5C30.5 967.5 67 964.726 67 983C67 996 66.5541 2832.5 66.5541 2836C66.5541 2853.5 87.5541 2856.5 87.0541 2833.5C86.6411 2814.5 81.0541 2806 64.0541 2799.5C48.6493 2793.61 24.0541 2803.5 20.0541 2824C17.0541 2850 55.5541 2865.29 63.0541 2868.5C69.5541 2871.29 86.5541 2880.5 87.0541 2897.5C87.5135 2913.12 70.5541 2933.5 41.0541 2926.5C30.5541 2923 24.0541 2919.5 13.0541 2908.5"
          stroke="#E0505F"
          stroke-width="2"
        />
      </svg>
    </div>
  )
}

export default ScrollingStroke
