import React, { useId } from "react";
import Link from "next/link";
import ArticleList from "../components/ArticleList";

export default function IndexPage({ posts }) {
  return <ArticleList articles={posts} />;
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    `${process.env.API_BASE_URL}news?access_key=${process.env.API_ACCESS_KEY}&countries=gb&sources=-mail&sort=published_desc`
  );
  // console.log(res);
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts
    },
    revalidate: 10000
  };
}
