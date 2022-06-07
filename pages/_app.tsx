import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "normalize.css";
import "../public/main.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <title>{title}</title> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="page">
        <main className="flex column">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
