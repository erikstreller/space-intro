interface TextOverlayProps {
  topText: string
  bottomText: string
}

const TextOverlay = ({ topText, bottomText }: TextOverlayProps) => {
  return (
    <>
      <div className="overlay-text bottom-[8.5%] left-[7.25%] z-10">
        {topText}
      </div>
      <div className="overlay-text bottom-[1%] left-[2%] z-10">
        {bottomText}
      </div>
    </>
  )
}

export default TextOverlay
