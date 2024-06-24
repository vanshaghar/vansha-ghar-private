import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";
import "/node_modules/sassy-datepicker/dist/styles.css";
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    const load = async () => {
      await delay(300);
      setLoader(false);
    };
    load();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Vansha Ghar</title>
        {/*====== Favicon Icon ======*/}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png/"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff"/>
            {/*====== Flaticon css ======*/}
            <link rel="stylesheet" href="/assets/fonts/flaticon/flaticon.css" />
            {/*====== FontAwesome css ======*/}
            <link
              rel="stylesheet"
              href="/assets/fonts/fontawesome/css/all.min.css"
            />
            {/*====== Bootstrap css ======*/}
            <link
              rel="stylesheet"
              href="/assets/vendor/bootstrap/css/bootstrap.min.css"
            />
            <link
              rel="stylesheet"
              href="node_modules/sassy-datepicker/dist/styles.css"
            />
            {/*====== magnific-popup css ======*/}
            <link
              rel="stylesheet"
              href="/assets/vendor/magnific-popup/dist/magnific-popup.css"
            />
            {/*====== Slick-popup css ======*/}
            <link rel="stylesheet" href="/assets/vendor/slick/slick.css" />
            {/*====== Jquery UI css ======*/}
            <link
              rel="stylesheet"
              href="/assets/vendor/jquery-ui/jquery-ui.min.css"
            />
            {/*====== Nice Select css ======*/}
            <link
              rel="stylesheet"
              href="/assets/vendor/nice-select/css/nice-select.css"
            />
            {/*====== Animate css ======*/}
            <link rel="stylesheet" href="/assets/vendor/animate.css" />
            {/*====== Default css ======*/}
            <link rel="stylesheet" href="/assets/css/default.css" />
            {/*====== Style css ======*/}
            <link rel="stylesheet" href="/assets/css/style.css" />
          </Head>
          <div
            className={`transition-opacity ${loader ? "opacity-0" : "opacity-100"}`}
          >
            <Component {...pageProps} />
          </div>
          <FloatingWhatsApp
            phoneNumber="+971524729073"
            accountName="Vansha Ghar"
            avatar="/assets/images/logo/logo-white-bg.jpg"
            chatMessage="Hi, How can I help you?"
          />
        </Fragment>
        );
};
        export default App;
