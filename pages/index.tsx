import Link from 'next/link'

import {
  Container, SecondaryNavigation, Navigation, Header, MainContent
} from '../styles/home'

import { ImSearch, IoMdNotificationsOutline, AiFillCaretDown } from '../components/Icons'

import Sinopse from '../components/Sinopse'
import Background from '../components/Background'
import Avatar from '../components/Avatar'

import NetflixLogo from '../assets/Netflix.svg';
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Container>
        <Background />

        <Header>
          <Navigation>
            <Link href="/">
              <a> <NetflixLogo /> </a>
            </Link>

            <strong>
              <Link href="/inicio">
                <a>Início</a>
              </Link>
            </strong>

            <Link href="/series">
              <a> Séries </a>
            </Link>

            <Link href="/filmes">
              <a> Filmes </a>
            </Link>

            <Link href="/bombando">
              <a> Bombando </a>
            </Link>

            <Link href="/minha-lista">
              <a> Minha lista </a>
            </Link>
          </Navigation>

          <SecondaryNavigation>
            <ImSearch />

            <Link href="/infantil">
              <a>INFANTIL</a>
            </Link>

            <IoMdNotificationsOutline />

            <Avatar />
            <AiFillCaretDown />

          </SecondaryNavigation>
        </Header>

        <MainContent>
          <Sinopse />
        </MainContent>

      </Container>
      <Footer />
    </>
  );
}

export default Home
