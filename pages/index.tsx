import React from "react";
import ArticleList from "../components/ArticleList";
import getNews from "../lib/getNews";
import type { Article as ArticleType } from "../types";

export default function IndexPage({ articles }: { articles: ArticleType[] }) {
  return <ArticleList articles={articles} />;
}

export async function getStaticProps() {
  // TIL: we previously tried to use fetch here to get the news articles
  // but because this is run on the server and never on the client,
  // we can (and should) import the server code directly and use it!

  // so instead of this
  // const res = await fetch("http://localhost:3000/api/news");
  // const articles = await res.json();

  // do this
  const articles = getNews();

  return {
    props: {
      articles
    },
    revalidate: 10000
  };
}
