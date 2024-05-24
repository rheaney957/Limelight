/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import bg1 from "../public/images/background1.jpg";
import bg2 from "../public/images/background2.jpg";
import bg3 from "../public/images/background3.jpg";
import bg4 from "../public/images/background4.jpg";
import bg5 from "../public/images/background5.jpg";
import bg6 from "../public/images/background6.jpg";
import bg7 from "../public/images/background7.jpg";

import type { AppProps } from "next/app";

export const bgImageArr = [
  bg1.src,
  bg2.src,
  bg3.src,
  bg4.src,
  bg5.src,
  bg6.src,
  bg7.src,
];

export default function App({ Component, pageProps }: AppProps) {
  const [menu, setMenu] = React.useState(true);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImageArr.length);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [bgImageArr]);

  const currentImage = bgImageArr[currentImageIndex];
  typeof document !== "undefined"
    ? (document.body.style.backgroundImage = `url(${currentImage})`)
    : null;

  React.useEffect(() => {}, [menu]);

  return (
    <>
      <Component menu={menu} setMenu={setMenu} {...pageProps} />
      <div
        style={{
          backgroundImage: `url(${bgImageArr[0]}), url(${bgImageArr[1]}), url(${bgImageArr[2]}), url(${bgImageArr[3]}), url(${bgImageArr[4]}), url(${bgImageArr[5]}), url(${bgImageArr[6]});`,
        }}
      />
    </>
  );
}
