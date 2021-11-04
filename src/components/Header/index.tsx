import Link from 'next/link'

import Avatar from '@/components/Avatar'

import { ImSearch, IoMdNotificationsOutline, AiFillCaretDown } from '@/assets/Icons'
import { Header, SecondaryNavigation, Navigation } from './styles';

export default function HeaderComponent() {
  return (
    <Header>
      <Navigation>
        <Link href="/">
          <a>
            {/* <NetflixLogo /> */}
            Netflix
          </a>
        </Link>

        <strong>
          <Link href="/inicio">
            <a style={{ fontWeight: 'bold' }}>Início</a>
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
  );
}
