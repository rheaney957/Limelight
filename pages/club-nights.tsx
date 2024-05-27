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
import { ResponseData } from './index'

export interface ClubEventsProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ClubEvents({menu, setMenu}:ClubEventsProps)
{

  const [events, setEvents] = useState({error: "", events: [], totalCount: 0});
  const [venueCloudId, setVenueCloudId] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [finalState, setFinalState] = React.useState({});

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

  const [dataState, setdata] = React.useState<any>();

  React.useEffect(() =>
  {

    setIsLoading(true)
    fetch('https://www.shine.net/events_json.php?category=6')
      .then((res) => res.json())
      .then((data) =>
      {
        setdata(data)
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    setIsLoading(true);
    const clubEvents = events?.events;
    const sorted = clubEvents && clubEvents.sort((a: { startDate: { date: string | number | Date } },b: { startDate: { date: string | number | Date } })=>{
    // @ts-ignore
      return new Date(a.startDate.date) - new Date(b.startDate.date);
  })
    const uniqueIds: any[] = [];

    const unique = sorted && sorted?.filter((element: { id: string }) => {
      const isDuplicate = uniqueIds.includes(element?.id);

      if (!isDuplicate) {
        uniqueIds.push(element?.id);

        return true;
      }

      return false;
    });

    setFinalState(unique);
    setIsLoading(false)


}, [dataState]);

if (isLoading) return <Loading/>
if (!events) return <p>No Limelight club nights</p>

  const gigs = finalState && finalState;

  return (
    <div className={styles.container}>
      {!menu && <div className={styles.backMobile} onClick={()=> setMenu(true)}><i className="fa-solid fa-arrow-left"></i> </div>}
      <Header route='Club Events' />
      <NavBar menu={menu} setMenu={setMenu}/>

      <Breadcrumbs />
      <main className={!menu ? styles.main : styles.mainMobile}>
        <Layout title='Club Events' data={gigs}>
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
}