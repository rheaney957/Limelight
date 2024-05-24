import styles from '../styles/Card.module.css';
import Button from './Button';
import defaultCardImg from '../public/images/defaultCardImg.jpeg'
import Image from 'next/image'
import React from 'react';
import moment from 'moment';


export type CardProps = {
  gig: {
    startDate?: any;
    time?: string;
    name?: string;
    support?: string;
    location?: string;
    websiteImage?: string | any;
    status?: string;
    ticketsUrl?: string;
  };
};

export default function Card({gig: {
  startDate,
  time,
  name,
  support,
  location,
  websiteImage,
  status,
  ticketsUrl,
}}: CardProps)
{

  return (
    <section className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardDate}>
          <div>{moment(startDate?.date)?.format('D') ?? null}</div>
          <div className={styles.cardDateMonth}>
            {moment(startDate?.date).format('MMM') ?? null}
          </div>
          <div>{moment(startDate?.date).format('YYYY') ?? null}</div>
        </div>
        <div className={styles.cardDetailsContainer}>
          <div className={styles.cardImage}>

            {websiteImage ? <Image src={`https://www.venuecloud.net/img/350/250/0/${websiteImage}`} alt="card-image" height={125} width={175} />
            : <Image src={defaultCardImg} alt="default-card-image" height={120} width={120} />}
          </div>
          <div className={styles.cardDetails}>
            <span className={styles.cardTitle}>
              <span>{`${moment(startDate?.date).format('dddd') ?? null} @ ${time ?? 'TBD'}`}</span>
            </span>
            <div>
              <span className={styles.cardInfoName}>
                <span>{name}</span>
              </span>
              <span className={styles.cardInfoSupport}>
                {support ? <span>{support}</span> : <span aria-hidden style={{visibility: 'hidden'}}>No shown support</span>}
              </span>
              <span className={styles.cardInfoLocation}>
                <span>{location ?? 'TBD'}</span>
              </span>
              <div className={styles.cardTagContainer}><div className={styles.cardTag}><span className={`${styles.tagColor} ${styles[status ? 'soldOut' : 'available']}`}/><span>{(status ? 'Sold Out' : 'Available')}</span></div></div>
            </div>
          </div>
          <div className={styles.cardTickets}>
            <Button ticketsUrl={ticketsUrl} style={{fontWeight: '600'}} disabled={!!status} text={status ? "SOLD OUT" : "Buy Tickets"} />
          </div>
        </div>
      </div>
    </section>
  );
}
