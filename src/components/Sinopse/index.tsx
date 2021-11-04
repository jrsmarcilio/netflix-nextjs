import Image from 'next/image'
import Link from 'next/link'

import { Container, ImageContent, BannerInfor, ButtonContent } from './styles';
import ButtonDark from '../Buttons/ButtonDark';
import ButtonWhite from '../Buttons/ButtonWhite';

const Sinopse = () => {
  return (
    <Container>

      <ImageContent>
        <Image
          src="/Zoo.webp"
          alt="Banner com nome Zoo em vermelho"
          layout="fill"
          objectFit="contain"
        />
      </ImageContent>

      <BannerInfor>
        O polêmico zoólogo Jackson Oz tenta descobrir por que algumas espécies começaram a atacar humanos em todas as partes do mundo.
      </BannerInfor>

      <ButtonContent>
        <Link href="/play">
          <a><ButtonWhite /></a>
        </Link>
        <Link href="/info">
          <a><ButtonDark /></a>
        </Link>
      </ButtonContent>

    </Container >
  )
}

export default Sinopse
