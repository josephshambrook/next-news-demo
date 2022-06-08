import { Layout } from "../../components/Layout";
import { createIdFromTitle } from "../../helpers/createIdFromTitle";

export default function Post() {
  return <Layout></Layout>;
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.API_BASE_URL}news?access_key=${process.env.API_ACCESS_KEY}&countries=gb&sources=-mail&sort=published_desc`
  );

  const data = await res.json();

  const paths = data.data.map((post) => ({
    params: {
      id: createIdFromTitle(post.title)
    }
  }));

  return {
    paths,
    fallback: false
  };
}
