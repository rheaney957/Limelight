import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import React, { useState } from 'react'
import Button from '../components/Button'
import Loading from '../components/Loading'
import { NextPageContext } from 'next'

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
export interface ComedyProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  SSRdata: any;
}

export default function Comedy({menu, setMenu, SSRdata}: ComedyProps)
{

  const [data, setdata] = React.useState<ResponseData>(SSRdata)
  const [isLoading, setLoading] = React.useState(false)

  React.useEffect(() =>
  {
    setLoading(true)
    fetch('https://www.shine.net/events_json.php?category=3')
      .then((res) => res.json())
      .then((data) =>
      {
        setdata(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <Loading/>
  if (!data) return <p>No Comedy gigs</p>

  const gigs = data?.events;

  return (
    <div className={styles.container}>
      {!menu && <div className={styles.backMobile} onClick={()=> setMenu(true)}><i className="fa-solid fa-arrow-left"></i> </div>}
      <Header route='Comedy' />
      <NavBar menu={menu} setMenu={setMenu}/>
      <Breadcrumbs />
      <main className={!menu ? styles.main : styles.mainMobile}>
        <Layout title='Comedy' data={gigs}>
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

Comedy.getInitialProps = async (ctx: NextPageContext) =>{

  const res = await fetch('https://www.shine.net/events_json.php?category=3')
  const data = await res.json()

  return {SSRdata: data}
}
