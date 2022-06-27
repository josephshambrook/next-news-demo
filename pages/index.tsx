import React from "react";
import ArticleList from "../components/ArticleList";
import type { Article as ArticleType } from "../types";

export default function IndexPage({ articles }: { articles: ArticleType[] }) {
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
