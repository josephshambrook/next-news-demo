import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import GridStyles from "../../components/Grid.module.css";
import { Article as ArticleProps } from "../../types";
import { variants } from "../../components/WithMotion";

type PostProps = {
  article: ArticleProps;
  currentId: string;
  next: string;
  previous: string;
};
// function Next({ href }: { href: string }) {
//   return (
//     <Link href={href}>
//       {" "}
//       <a>Next</a>{" "}
//     </Link>
//   );
// }

// function Previous({ href }: { href: string }) {
//   return (
//     <Link href={href}>
//       <a>Previous</a>
//     </Link>
//   );
// }

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
          {/* <Link href="/">
            <a>Home</a>
          </Link> */}
          <a
            style={{
              margin: "3rem",
              border: "1px solid grey",
              borderRadius: "5px",
              borderColor: "grey",
              boxShadow: "5px 5px 5px #aaaaaa",
              backgroundColor: "ghostwhite",
              padding: "5px",
              left: -80,
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
              right: 0,
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
            {article.description.slice(0, 190).concat("...")}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    // `${process.env.API_BASE_URL}news?access_key=${process.env.API_ACCESS_KEY}&countries=gb&sources=-mail&sort=published_desc`
    "http://localhost:3000/api/news"
  );

  const data = await res.json();

  const paths = data.map((post) => ({
    params: {
      id: post.id
    }
  }));

  return {
    paths,
    fallback: false
  };
}
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const articlesResponse = await fetch(
    // `${process.env.API_BASE_URL}news?access_key=${process.env.API_ACCESS_KEY}&countries=gb&sources=-mail&sort=published_desc/${params.id}`
    `http://localhost:3000/api/news/${params.id}`
  );
  const article = await articlesResponse.json();

  const getLinksResponse = await fetch(
    `http://localhost:3000/api/news/get-links?currentId=${params.id}`
  );

  const getLinks = await getLinksResponse.json();

  // Pass post data to the page via props
  return { props: { article, ...getLinks } };
}
