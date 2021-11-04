import Image from "next/image"

export default function Background() {
  return (
    <Image
      src="/ZooBackground.webp"
      alt="Background da série Zoo"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  );
}

