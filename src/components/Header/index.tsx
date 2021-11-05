import Link from 'next/link';
import { useRouter } from 'next/router';
import Avatar from '@/components/Avatar';

import { ImSearch, IoMdNotificationsOutline, AiFillCaretDown, NetflixLogo } from '@/assets/Icons'
import { Header, SecondaryNavigation, PrimaryNavigation } from './styles';
import { primaryNavigation } from '@/utils/mainLists';

export default function HeaderComponent() {
  const router = useRouter();
  // const { query } = router.query;
  // console.log('query', query);
  const query = '/'

  return (
    <Header>
      <PrimaryNavigation>
        <Link href="/"><a><NetflixLogo /></a></Link>

        {primaryNavigation.map((nav, index) => (
          <Link href={nav.url} key={index}>
            <a style={{ fontWeight: query === nav.url ? 'bold' : 'normal' }}>
              {nav.title}
            </a>
          </Link>
        ))}
      </PrimaryNavigation>

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
