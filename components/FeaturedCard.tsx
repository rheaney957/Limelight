/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from '../styles/Card.module.css';
import React from 'react';

export type FeaturedCardProps = {
  image: string;
  name: string;
  link: string;
};

export default function FeaturedCard(props: FeaturedCardProps)
{
  return (
    <section className={styles.featuredCardContainer}>
      <Link
        href={props.link ?? 'https://www.ticketmaster.ie/'}
      >
        <img style={{height: '200px', width: '300px'}} src={`./featured/${props.image}`} alt="featured-card"  />

      </Link>
    </section>
  );
}
