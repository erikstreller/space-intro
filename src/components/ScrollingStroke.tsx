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
    <div
      className="absolute top-[50vh] left-center h-[300vh] overflow-hidden z-20 md:opacity-90"
      id="scrolling-stroke"
    >
      <svg
        viewBox="0 0 130 2929"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
        className="h-full w-[130px]"
      >
        <path
          d="M67 0L67.0541 580C67.0542 583 72.5542 583 72.5541 586.5C72.554 588.5 71.4996 588.873 65.5542 591.5C44.0542 601 27.5542 610.5 14.5542 631.5C12.8691 634.222 12.8901 637.891 14.5542 639C16.0543 640 18.5542 641 22.5542 635C26.5542 629 38.054 606.5 67.0541 606.5C96.0541 606.5 116.054 628 116.054 657C116.054 686 88.5541 705.5 68.5541 704.5C48.5541 703.5 25.5542 695.5 19.0542 663.5C13.1766 634.564 0.054051 664.5 1.0541 674C2.05415 683.5 7.05418 687.5 19.0542 687.5C36.5612 687.5 63.554 676 78.054 667.5C92.554 659 133.554 633.5 127.554 623C121.554 612.5 75.0541 627.5 57.0541 636.5C36.5542 646.75 27.0542 653 15.0541 665C-0.453971 680.508 1.98292 687.025 10 692.5C30.5 706.5 67 703.726 67 722C67 996.167 67 1496 67 1546C67 1566 42 1587.5 42 1616.5C42 1639 51 1655.5 67 1673.5C83 1691.5 90 1716.5 90 1735.5C90 1754.5 79.0976 1779 67 1794.5C54.9024 1810 42 1826.5 42 1850C42 1881 67 1901 67 1920C67 1929.5 66.4999 2831.5 66.4999 2836C66.4999 2850.5 86.9999 2859.54 86.9999 2833C86.9999 2808.5 73.2223 2802.99 64.5 2799.5C59.5 2797.5 33.1116 2793.31 22 2818C12.5 2839.11 33.5 2853 57 2865.5C72.0153 2873.49 93.1595 2885 85.4999 2907.5C77.8403 2930 47.5001 2930 34.5 2924C26.1537 2920.15 22.5 2917 12.9999 2908.5"
          stroke="#E0505F"
          stroke-width="2"
        />
      </svg>
    </div>
  )
}

export default ScrollingStroke
