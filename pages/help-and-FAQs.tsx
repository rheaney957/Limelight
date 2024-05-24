import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Accordion from '../components/Accordion'
import Footer from '../components/Footer'

export interface FAQProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function FAQ({menu, setMenu}: FAQProps)
{
  return (
    <div className={styles.container}>
      {!menu && <div className={styles.backMobile} onClick={()=> setMenu(true)}><i className="fa-solid fa-arrow-left"></i> </div>}
      <Header route="Help and FAQ's" />
      <NavBar menu={menu} setMenu={setMenu}/>
      <Breadcrumbs />

      <main className={!menu ? styles.main : styles.mainMobile}>
        <Layout title="Help and FAQ's" FAQs={true}>
          <section className={styles.faqs}>
            <div className={styles.accordion}>
              <Accordion question='Do you store my credit card details?'>
              No. Your credit card details are passed to a payment gateway to request payment, and they are then destroyed. This ensures maximum security - in the unlikely event that our secure server is compromised your credit card details cannot be retrieved.
              </Accordion>
              <Accordion question='I have forgot my password - what do I do?'>
              Simply click here and you can have a password reminder emailed to you.
              </Accordion>
              <Accordion question='I have a problem with booking - who do I contact?'>
              E-mail info@shine.net.

              </Accordion>
              <Accordion question='My card details are not being accepted, but there are sufficient funds in my account. What is wrong?'>
              Some Maestro cards can only be used with Chip & Pin or signed receipt transactions, and cannot be used for most Internet transactions. If you are not using a Maestro card, there may be a temporary problem with the payment gateway, please try again later.
              </Accordion>
            </div>
          </section>
        </Layout>

      </main>
      <Footer menu={menu}/>
    </div>
  )
}
