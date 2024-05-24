import { Html, Head, Main, NextScript } from 'next/document'
import {bgImageArr} from "./_app";
import React from "react";


export default function Document() {

  return (
    <Html>
      <Head>
      <meta name="description" content="limelight.com" />
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />


      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}