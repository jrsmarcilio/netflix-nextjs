import Image from "next/image"

const Background = () => <Image
  src="/ZooBackground.webp"
  alt="Background da série Zoo"
  layout="fill"
  objectFit="cover"
  quality={100}
/>

export default Background
