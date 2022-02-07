const ScrollingStroke = () => {
  document.addEventListener("DOMContentLoaded", () => {
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
  })

  return (
    <div
      className="absolute top-[80vh] left-center h-[270vh] overflow-hidden z-20 md:opacity-90"
      id="scrolling-stroke"
    >
      <svg
        viewBox="0 0 130 2616"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
        className="h-full w-[130px]"
      >
        <path
          d="M67.0541 0V267C67.0542 270 72.5542 270 72.5541 273.5C72.554 275.5 71.4996 275.873 65.5542 278.5C44.0542 288 27.5542 297.5 14.5542 318.5C12.8691 321.222 12.8901 324.891 14.5542 326C16.0543 327 18.5542 328 22.5542 322C26.5542 316 38.054 293.5 67.0541 293.5C96.0541 293.5 116.054 315 116.054 344C116.054 373 88.5541 392.5 68.5541 391.5C48.5541 390.5 25.5542 382.5 19.0542 350.5C13.1766 321.564 0.054051 351.5 1.0541 361C2.05415 370.5 7.05418 374.5 19.0542 374.5C36.5612 374.5 63.554 363 78.054 354.5C92.554 346 133.554 320.5 127.554 310C121.554 299.5 75.0541 314.5 57.0541 323.5C36.5542 333.75 27.0542 340 15.0541 352C-0.453971 367.508 1.98292 374.025 10 379.5C30.5 393.5 67 390.726 67 409C67 683.167 67 1183 67 1233C67 1253 42 1274.5 42 1303.5C42 1326 51 1342.5 67 1360.5C83 1378.5 90 1403.5 90 1422.5C90 1441.5 79.0976 1466 67 1481.5C54.9024 1497 42 1513.5 42 1537C42 1568 67 1588 67 1607C67 1616.5 66.4999 2518.5 66.4999 2523C66.4999 2537.5 86.9999 2546.54 86.9999 2520C86.9999 2495.5 73.2223 2489.99 64.5 2486.5C59.5 2484.5 33.1116 2480.31 22 2505C12.5 2526.11 33.5 2540 57 2552.5C72.0153 2560.49 93.1595 2572 85.4999 2594.5C77.8403 2617 47.5001 2617 34.5 2611C26.1537 2607.15 22.5 2604 12.9999 2595.5"
          stroke="#E0505F"
          stroke-width="2"
        />
      </svg>
    </div>
  )
}

export default ScrollingStroke
