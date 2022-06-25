import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Article from "./Article";
import styles from "./Grid.module.css";

const ArticleList = ({ articles }) => {
  const ARTICLES_PER_PAGE = 14;

  const [posts, setPosts] = React.useState(
    articles.slice(0, ARTICLES_PER_PAGE)
  );
  const [hasMore, setHasMore] = React.useState(true);

  const getMoreArticles = () => {
    if (posts.length >= articles.length) {
      setHasMore(false);
      return;
    }

    setPosts(
      posts.concat(
        articles.slice(posts.length, posts.length + ARTICLES_PER_PAGE)
      )
    );
  };

  return (
    <InfiniteScroll
      className={styles.container}
      dataLength={posts.length}
      next={getMoreArticles}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {posts.map((article, index) => {
        return <Article key={index} {...article} />;
      })}
    </InfiniteScroll>
  );
};

export default ArticleList;
