/* eslint-disable @next/next/no-img-element */

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Logo from '/public/images/logo.png'
import Link from 'next/link';
export interface HeadProps {
  route: string;
}

export default function Header(props: HeadProps)
{
  return (
    <>
    <Head>
      <title>Limelight- {props.route}</title>
    </Head >
          <header className={styles.header}>
          <div className={styles.shineLogo}>
          <Link href="./"><img style={{width: '200px'}} src={Logo.src} alt="shine-logo" /></Link>
          </div>
          <div className={styles.socials}>
            <ul className={styles.socialsList}>
              <li><a href="https://www.tiktok.com/@limelightbelfast" target="_blank" rel="noreferrer">
                <i style={{content:'f082'}} className="fa-brands fa-tiktok"></i></a>
              </li>
              <li><a href="https://twitter.com/LimelightNI" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href="https://www.facebook.com/limelightbelfast/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="https://www.instagram.com/limelight.belfast/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
            </ul>
          </div>
        </header>
        </>
  )
}
