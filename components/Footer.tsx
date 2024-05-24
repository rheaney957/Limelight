
import styles from '../styles/Home.module.css'
import buttonStyles from '../styles/Button.module.css'

import Link from 'next/link'
import { useRouter } from 'next/router';

export interface FooterProps
{
  menu?: boolean;
}

export default function Footer(props: FooterProps)
{
  const router = useRouter();
  return (
    <footer className={`${styles.footer} ${props.menu && styles.footerMobile}`} >
      <div className={styles.footerDetails}>
        <div className={styles.footerLinks}>
          <ul className={styles.footerRoutes}>
            <li>
              <Link
                href="./"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                All Shows
              </Link>
            </li>
            <li>
              <Link
                href="./club-events"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                Club Events
              </Link>
            </li>
            <li>
              <Link
                href="./comedy"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                Comedy
              </Link>
            </li>
            <li>
              <Link
                href="./live-gigs"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                Live Gigs
              </Link>
            </li>
            <li>
              <Link
                href="./help-and-FAQs"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                {`Help & FAQ\'s`}
              </Link>
            </li>
            <li>
              <Link
                href="./contact-us"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className={styles.footerSocialsList}>
            <li><a href="https://www.tiktok.com/@shinebelfast" target="_blank" rel="noreferrer">
              TikTok</a>
            </li>
            <li><a href="https://twitter.com/ShineBelfast" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="https://www.facebook.com/ShineBelfastNI" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/shine.belfast/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li>
              <Link
                href="./privacy-policy"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                Privacy Policy
              </Link>
            </li>

          </ul>
          <div className={styles.footerCopyright}>SD Events Management Ltd Copyright {new Date().getFullYear()} </div>

        </div>
        <div className={styles.footerMailing}>

          <form id="subscribe-form" action="//www.venuecloud.net/s/f/27/17" method="POST" className={styles.footerForm}>
	          <input type="hidden" name="contact_permission" value="yes"/>
            <input className={styles.formName} type="text" name="firstname" placeholder="First Name" required />
            <input className={styles.formEmail} type="text" name="surname" placeholder="Surname" required />
            <input className={styles.formPhone} type="text" name="email" placeholder="Email" required />
            <input type="hidden" id="source" name="source" value="website"/>
            <input className={buttonStyles.primary} value='Join Mailing List' type="submit" name="btnSubmit" />
            <input
                type="button"
                name="submit"
                className={styles.unsubscribe}
                value='Unsubscribe'
              />
          </form>
        </div>
      </div>
      <div className={styles.footerFeat}> </div>
    </footer>
  )
}
