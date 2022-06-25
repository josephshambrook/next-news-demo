import { motion } from "framer-motion";
import Link from "next/link";
import { Layout } from "../../components/Layout";
import { Article as ArticleProps } from "../../types";

type PostProps = {
  article: ArticleProps;
  currentId: string;
  next: string;
  previous: string;
};

function Next({ href }: { href: string }) {
  return (
    <Link href={href}>
      {" "}
      <a>Next</a>{" "}
    </Link>
  );
}

function Previous({ href }: { href: string }) {
  return (
    <Link href={href}>
      <a>Previous</a>
    </Link>
  );
}

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const variants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { ...transition }
  }
};

export default function Post({ article, next, previous }: PostProps) {
  return (
    <>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
        <h1>{article.title}</h1>

        <a href={previous}>Previous</a>

        <br></br>

        <a href={next}>Next</a>
      </motion.div>
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
