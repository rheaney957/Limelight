/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
export interface VenuesProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function Venues({menu, setMenu}: VenuesProps)
{
  return (
    <div className={styles.container}>
      {!menu && <div className={styles.backMobile} onClick={()=> setMenu(true)}><i className="fa-solid fa-arrow-left"></i> </div>}
     <Header route='Venues'/>

      <NavBar menu={menu} setMenu={setMenu}/>
      <Breadcrumbs />

      <main className={!menu ? styles.main : styles.mainMobile}>
        <Layout title="Venues" FAQs={true}>
          <section className={styles.venues}>
            <h2>Venues</h2>
            <h3>The Telegragh Building</h3>
            <p>124-144 Roval Avenue. Beltast. BT1 IND</p>
            <p>Located on the site of a beautiful 19th Century printing warehouse in Belfast's City Centre is The Telegraph Building (124-144 Royal Avenue, Belfast BT1 1ND), The former Belfast Telegragh newspaper printing press, once at the beating heart of the city's industrial and cultural output, has been developed into a multi purpose venue for a broad range of cultural events. </p>
            
            <h3>Limelight 1</h3>
            <p>1 Ormeau Avenue, Belfast, BT2 8HD</p>
            <p>Limelight 1 is the newest addition to The Limelight complex, a brand live/club venue. The venue has recently hosted live shows from acts including SLAYER, TWO DOOR CINEMA CLUB, TH BREEDERS, DISCLOSURE, STEVE EARLE and PRIMAL SCREAM.</p>
            </section>
            </Layout>
        </main>

      <Footer menu={menu}/>
    </div>
  )
}
