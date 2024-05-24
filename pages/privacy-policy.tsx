/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Breadcrumbs from '../components/Breadcrumbs'
import Header from '../components/Header'
import Footer from '../components/Footer'
export interface PrivacyPolicyProps {
    menu: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  }

export default function Home({menu, setMenu}: PrivacyPolicyProps)
{
    return (
        <div className={styles.container}>
            {!menu && <div className={styles.backMobile} onClick={()=> setMenu(true)}><i className="fa-solid fa-arrow-left"></i> </div>}
            <Header route='Home' />
            <NavBar menu={menu} setMenu={setMenu}/>
            <Breadcrumbs />

            <main className={!menu ? styles.main : styles.mainMobile}>
                <div className={styles.privacyPolicyContainer}>
                    <h2>Privacy Policy</h2>

                    <h3>Introduction</h3>

                    <p>This privacy policy sets out the ways in which SD Event Management Ltd (Shine.net) may use your personal data. SD Event Management Ltd is a company registered in Northern Ireland (NI619722).</p>

                    <div>In this Privacy Policy,
                        <ul>
                            <li>'we', 'us' or 'our' means SD Event Management Ltd</li>
                            <li>'the site' means the Shine.net event website you are visiting or engaging with; and</li>
                            <li>'you' and 'your' means you, the engaging with us, registering for our events or services or visiting our site.</li>
                        </ul>
                    </div>

                    <h3>Personal identification information</h3>
                    <p>We may collect personal identification information from you in a variety of ways, including, but not limited to,completing registration or mailing list subscribe forms on the site. You may be asked for, as appropriate, name, email address, phone number. You may, however, visit our Site anonymously. We will collect personal identification information from you only if you voluntarily submit such information to us. You can always refuse to supply personal identification information, although that may prevent you from registering for one of our events.</p>

                    <h3>Non-personal identification information</h3>
                    <p>We may collect non-personal identification information about you whenever you interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about your means of connection to our Site, such as the operating system and the Internet service providers utilised and other similar information.</p>

                    <h3>Web browser cookies</h3>
                    <p>Our Site may use "cookies" to enhance your user experience. Yours web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about you. You may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If you do so, note that some parts of the Site may not function properly.</p>

                    <h3>How we use collected information</h3>
                    <p>SD Event Management Ltd may use your information for the following purposes:</p>
                    <ul>
                        <li>
                            To provide you with services that you have requested from us such as attendence at one of our events
                        </li>
                        <li>
                            To contact you with information about an event that you're attending
                        </li>
                        <li>
                            To keep in contact with you about other events or services of ours that we believe may interest you
                        </li>
                        <li>
                            To provide customer service and support, deal with enquiries or notify you of changes in relation to your attendance at one of our events, use of our site or other services.
                        </li>
                    </ul>

                    <h3>Who we might share your information with</h3>
                    <p>You agree that we can share your personal information with selected third parties that we work with, where necessary for the purposes of delivering to you services that you request from us. For example, when you register to attend an event that we host, or when you subscribe to our mailing list, we may need to share your information with third party sub-contractors or service providers.</p>

                    <h3>How we look after your information</h3>
                    <p>We use appropriate technological and operational security measures to protect your information against any unauthorised access to or unlawful use. We will retain your information for as long as is necessary to provide you with the services that you have requested from us or for as long as the law otherwise permits.</p>

                    <h3>Changes to this privacy policy</h3>
                    <p>SD Event Management Ltd has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage you to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.</p>

                    <p>This document was last updated on May 20th 2018</p>
                </div>
            </main>

            <Footer menu={menu}/>
        </div>
    )
}
