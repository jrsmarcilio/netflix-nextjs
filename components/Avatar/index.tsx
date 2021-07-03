import Image from "next/image"
import styled from "styled-components"

const Container = styled.div`
  z-index: +1;
  margin-top: 8px;
  cursor: pointer;

  img {
    border-radius: 5px;
  }
`;

const AvatarImage = () => {
  return (
    <Container>
      <Image
        src="/Avatar.png"
        alt="Foto do cachorro da série Lupin"
        width={88}
        height={88}
        className="avatar"
      />
    </Container>
  )
}

export default AvatarImage
