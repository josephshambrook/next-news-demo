import React, { useId } from "react";
import { motion } from "framer-motion";
import ArticleList from "../components/ArticleList";

export default function IndexPage({ articles }) {
  return <ArticleList articles={articles} />;
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/news");

  const articles = await res.json();

  return {
    props: {
      articles
    },
    revalidate: 10000
  };
}
