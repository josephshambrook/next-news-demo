import { motion } from "framer-motion";
import React from "react";
import GridStyles from "../../components/Grid.module.css";
import { Article as ArticleProps } from "../../types";
import { variants } from "../../helpers/motion";
import getNews from "../../lib/getNews";
import getNewsById from "../../lib/getNewsById";
import { GetStaticProps, GetStaticPaths } from "next";
import getLinksById from "../../lib/getLinksById";

type PostProps = {
  article: ArticleProps;
  current: string;
  next: string;
  previous: string;
};

export default function Post({ article, next, previous }: PostProps) {
  return (
    <>
      <div>
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={variants}
        >
          <a
            style={{
              margin: "3rem",
              border: "1px solid grey",
              borderRadius: "5px",
              borderColor: "grey",
              boxShadow: "5px 5px 5px #aaaaaa",
              backgroundColor: "ghostwhite",
              padding: "5px",
              left: -40,
              fontSize: "1.5em",
              position: "absolute",
              marginTop: "-3em",
              width: "100px",
              textAlign: "center"
            }}
            href={previous}
          >
            Previous
          </a>

          <a
            style={{
              position: "absolute",
              fontSize: "1.5em",
              margin: "-3.0em",
              right: 60,
              padding: 5,
              width: "100px",
              textAlign: "center",
              border: "1px solid grey",
              boxShadow: "5px 5px 5px #aaaaaa",
              borderColor: "grey",
              borderRadius: "5px",
              backgroundColor: "ghostwhite",
              display: "inline"
            }}
            href={next}
          >
            Next
          </a>
          <div className={GridStyles.newspaper}>
            <h2 className="Layout.letter">{article.title}</h2> {/* <br></br> */}
            {article.description &&
              article.description.slice(0, 190).concat("...")}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // TIL: we previously tried to use fetch here to get the news articles
  // but because this is run on the server and never on the client,
  // we can (and should) import the server code directly and use it!

  // so instead of this
  // const res = await fetch("/api/news");
  // const data = await res.json();

  // do this
  const data = getNews();

  // more info here:
  // https://nextjs.org/docs/basic-features/data-fetching/get-static-props#write-server-side-code-directly

  const paths = data.map((post) => ({
    params: {
      id: post.id
    }
  }));

  return {
    paths,
    fallback: false
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  // same as above, no need for a fetch here
  // const articlesResponse = await fetch(
  //   `http://localhost:3000/api/news/${params.id}`
  // );
  // const article = await articlesResponse.json();

  if (!params?.id || typeof params?.id !== "string") {
    return { props: { article: null } };
  }

  const article = getNewsById(params.id);

  // const getLinksResponse = await fetch(
  //   `http://localhost:3000/api/news/get-links?currentId=${params.id}`
  // );
  // const getLinks = await getLinksResponse.json();

  const links = getLinksById(params.id);

  // Pass post data to the page via props
  return { props: { article, ...links } };
};
