
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUsForm from '../components/ContactUsForm'
export interface ContactUsProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  SSRdata: any;
}

export default function ContactUs({menu, setMenu, SSRdata}: ContactUsProps)
{
  return (
    <div className={styles.container}>
      {!menu && <div className={styles.backMobile} onClick={()=> setMenu(true)}><i className="fa-solid fa-arrow-left"></i> </div>}
     <Header route='Contact Us'/>
      <NavBar menu={menu} setMenu={setMenu}/>
      <Breadcrumbs />
      <main className={!menu ? styles.main : styles.mainMobile}>
        <Layout title="Contact Us">
          <section className={styles.contact}>
            <ContactUsForm/>
          </section>
        </Layout>
        </main>
        <Footer menu={menu}/>
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('https://www.shine.net/newShineSite/out/JSON/featuredGigs.json', { cache: 'no-store' })
  const data = await res.json()
  return {props: {SSRdata: data}, revalidate: 60}
}
