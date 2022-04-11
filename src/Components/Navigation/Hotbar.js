import Link from 'next/link';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import HotbarStyles from './Hotbar.styles';

export default function Hotbar() {
  const [width, setWidth] = useState(false);
  const router = useRouter();

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return (
    <div>
      {width && (
        <HotbarStyles>
          <div className={width < 560 ? 'hotbar-mobile' : 'hotbar-desktop'}>
            <nav>
              <ul>
                <li>
                  <Link href="/">
                    <button
                      type="button"
                      title="home"
                      className={
                        router.pathname === '/'
                          ? 'hotbar-button-active'
                          : 'hotbar-button'
                      }
                    >
                      <HomeRoundedIcon
                        sx={{ fontSize: 32, color: 'var(--peach)' }}
                      />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/prices">
                    <button
                      type="button"
                      title="prices"
                      className={
                        router.pathname === '/prices'
                          ? 'hotbar-button-active'
                          : 'hotbar-button'
                      }
                    >
                      <LocalOfferRoundedIcon
                        sx={{ fontSize: 32, color: 'var(--peach)' }}
                      />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/team">
                    <button
                      type="button"
                      title="team"
                      className={
                        router.pathname === '/team'
                          ? 'hotbar-button-active'
                          : 'hotbar-button'
                      }
                    >
                      <GroupsRoundedIcon
                        sx={{ fontSize: 32, color: 'var(--peach)' }}
                      />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <button
                      type="button"
                      title="FAQ's"
                      className={
                        router.pathname === '/faq'
                          ? 'hotbar-button-active'
                          : 'hotbar-button'
                      }
                    >
                      <HelpRoundedIcon
                        sx={{ fontSize: 32, color: 'var(--peach)' }}
                      />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/book">
                    <button
                      type="button"
                      title="book"
                      className={
                        router.pathname === '/book'
                          ? 'hotbar-button-active'
                          : 'hotbar-button'
                      }
                    >
                      <CalendarMonthRoundedIcon
                        sx={{ fontSize: 32, color: 'var(--peach)' }}
                      />
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </HotbarStyles>
      )}
    </div>
  );
}
