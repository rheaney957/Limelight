import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import Loading from '../components/Loading'
import { ResponseData } from './index'

export interface LiveGigsProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  SSRdata: ResponseData;
}

export default function LiveGigs({menu, setMenu, SSRdata}:LiveGigsProps)
{
  const [events, setEvents] = useState(SSRdata);
  const [venueCloudId, setVenueCloudId] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, [venueCloudId]);

  const fetchEvents = async () => {
    setIsLoading(true)
    const response = await fetch(`https://www.venuecloud.net/api/events?venueCloudId=${venueCloudId}`);
    const data = await response.json();
    setEvents(data);
    setIsLoading(false)
  };


  if (isLoading) return <Loading/>
  if (!events) return <p>No Limelight live gigs</p>

  const gigs = events?.events;

  return (
    <div className={styles.container}>
      {!menu && <div className={styles.backMobile} onClick={()=> setMenu(true)}><i className="fa-solid fa-arrow-left"></i> </div>}
      <Header route='Live Gigs' />
      <NavBar menu={menu} setMenu={setMenu} />
      <Breadcrumbs />
      <main className={!menu ? styles.main : styles.mainMobile}>
        <Layout title='Live Gigs' data={gigs}>
          {(!isLoading && gigs instanceof Array) && gigs?.map((gig: any, index: number) => (
            <Card
              key={index}
              gig={{
                time: gig?.doors,
                startDate: gig?.startDate,
                name: gig?.title,
                support: gig?.subTitle,
                location: gig?.venue,
                websiteImage: gig?.websiteImage,
                ticketsUrl: gig?.ticketsUrl,
                status: gig?.isSoldOut
              }}
            />
          ))}
        </Layout>
      </main>
      <Footer menu={menu}/>
    </div>
  )
};

  export const getStaticProps = async () =>{
    const res = await fetch(`https://www.venuecloud.net/api/events?venueCloudId=10`);
    const data = await res.json()

    return {
        props: {SSRdata: data}
    }
  }

