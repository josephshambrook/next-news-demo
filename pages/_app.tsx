import React from "react";
// import Head from "next/head";
import type { AppProps } from "next/app";
import "normalize.css";
import "../public/main.css";
import { Layout } from "../components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
