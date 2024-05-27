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
                        <li className={styles.navItem} onClick={() => setMenu(false)}>
                            <Link
                                legacyBehavior
                                href="./"
                                className={styles.active}
                            >
                                Live Shows
                            </Link>
                        </li>
                        <li className={styles.navItem}  onClick={() => setMenu(false)}>
                            <Link
                                href="./club-nights"
                                legacyBehavior
                                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}

                            >
                                Club Nights
                            </Link>
                        </li>
                        <li className={styles.navItem} onClick={() => setMenu(false)}>
                            <Link
                                legacyBehavior
                                href="./venues"
                                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
                            >
                                Venues
                            </Link>
                        </li>
                        <li className={styles.navItem} onClick={() => setMenu(false)}>
                            <Link
                                legacyBehavior
                                href="./venue-hire"
                                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
                            >
                                Venue Hire
                            </Link>
                        </li>
                        <li className={styles.navItem} onClick={() => setMenu(false)}>
                            <Link
                                legacyBehavior
                                href="./birthday-bookings"
                                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
                            >
                                Birthday Bookings
                            </Link>
                        </li>
                        <li className={styles.navItem} onClick={() => setMenu(false)}>
                            <Link
                                legacyBehavior
                                href="./contact-us"
                                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav >
            {menu && <div className={styles.navFooter}><Footer /></div>}
        </ div >
    );
}
