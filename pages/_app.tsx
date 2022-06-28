import React from "react";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import "normalize.css";
import "../public/main.css";
import { Layout } from "../components/Layout";
import { useRouter } from "next/router";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}
