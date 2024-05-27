import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Loading from '../components/Loading'


export interface ResponseData
{
  error: string;
  totalCount: number;
  events: {
    id: string;
    title: string;
    startDate: [Object];
    doors: string;
    ticketsUrl: string;
    websiteImage: string;
    venue: string;
  };
}

export interface AllShowsProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  SSRdata: ResponseData;
}

export default function AllShows({menu, setMenu, SSRdata}:AllShowsProps)
{
  const [events, setEvents] = useState<ResponseData>(SSRdata);
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
  if (!events) return <p>No Limelight events</p>

  const gigs = events?.events;

  return (
    <div className={styles.container}>
      {!menu && <div className={styles.backMobile} onClick={()=> setMenu(true)}><i className="fa-solid fa-arrow-left"></i> </div>}
      <Header route='All Shows'/>
      <NavBar menu={menu} setMenu={setMenu}/>
      <Breadcrumbs />
      <main className={!menu ? styles.main : styles.mainMobile}>
        <Layout title='All Shows' data={gigs}>
          {(!isLoading && gigs instanceof Array) && gigs?.map((event: any, index: number) => (
            <Card
              key={event.id}
              gig={{
                time: event?.doors,
                startDate: event?.startDate,
                name: event?.title,
                support: event?.subTitle,
                location: event?.venue,
                websiteImage: event?.websiteImage,
                ticketsUrl: event?.ticketsUrl,
                status: event?.isSoldOut
              }}
            />
          ))}
        </Layout>
      </main>
      <Footer menu={menu}/>
    </div>
  )
}

export const getStaticProps = async () =>{
  const res = await fetch(`https://www.venuecloud.net/api/events?venueCloudId=10`);
  const data = await res.json()

  return {
      props: {SSRdata: data}
  }
}
