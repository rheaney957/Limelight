import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/NavBar.module.css';
import { SetStateAction } from 'react';
import Footer from './Footer';

export interface NavBarProps {
    menu: boolean;
    setMenu: React.Dispatch<SetStateAction<boolean>>;
}

export default function NavBar({menu, setMenu}: NavBarProps)
{

    const [click, setClick] = React.useState(false);
    const router = useRouter();

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <div>
            <div className={menu ? styles.mainContainer :  styles.mainContainerMobile} onClick={() => Close()} />
            <nav className={styles.navbar} onClick={e => e.stopPropagation()}>
             <div className={menu ? styles.navContainer :  styles.navContainerMobile}>
                    <ul className={styles.navMenu}>
                        <li className={styles.navItem}  onClick={() => setMenu(false)}>
                            <Link
                                href="./"
                                legacyBehavior
                                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
                            >
                                All Shows
                            </Link>
                        </li>
                        <li className={styles.navItem}  onClick={() => setMenu(false)}>
                            <Link
                                href="./club-events"
                                legacyBehavior
                                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}

                            >
                                Club Events
                            </Link>
                        </li>
                        <li className={styles.navItem} onClick={() => setMenu(false)}>
                            <Link
                                legacyBehavior
                                href="./comedy"
                                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
                            >
                                Comedy
                            </Link>
                        </li>
                        <li className={styles.navItem} onClick={() => setMenu(false)}>
                            <Link
                                legacyBehavior
                                href="./live-gigs"
                                className={styles.active}
                            >
                                Live Gigs
                            </Link>
                        </li>

                        <li className={styles.navItem} onClick={() => setMenu(false)}>
                            <Link
                                legacyBehavior
                                href="./help-and-FAQs"
                                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
                            >
                                {"Help / FAQ\'s"}
                            </Link>
                        </li>
                        <li className={styles.navItem} onClick={() => setMenu(false)}>
                            <Link
                                legacyBehavior
                                href="https://shine.tickets"
                                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}>
                               {"BUY TICKETS"}
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav >
            {menu && <div className={styles.navFooter}><Footer /></div>}
        </ div >
    );
}
