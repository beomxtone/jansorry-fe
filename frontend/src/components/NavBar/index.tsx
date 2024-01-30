import Link from 'next/link';

import { IconHeart, IconHeartFilled, IconHome, IconHomeFilled, IconUser, IconUserFilled } from '#/svgs';

import * as styles from './index.css';

interface Props {
  clickedIndex?: number;
}

const NavBar = ({ clickedIndex }: Props) => {
  return (
    <nav className={styles.navWrapper}>
      <div>
        <Link href='/feeds'>{clickedIndex === 1 ? <IconHeartFilled /> : <IconHeart />}</Link>
      </div>
      <div>
        <Link href='/home'>{clickedIndex === 2 ? <IconHomeFilled /> : <IconHome />}</Link>
      </div>
      <div>
        <Link href='/profile'>{clickedIndex === 3 ? <IconUserFilled /> : <IconUser />}</Link>
      </div>
    </nav>
  );
};

export default NavBar;
