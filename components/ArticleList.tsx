import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Article from "./Article";

const ArticleList = ({ articles }) => {
  const ARTICLES_PER_PAGE = 3;

  const [posts, setPosts] = React.useState(
    articles.slice(0, ARTICLES_PER_PAGE)
  );
  const [hasMore, setHasMore] = React.useState(true);

  const getMoreArticles = () => {
    console.log("getting more articles");
    if (posts.length >= articles.length) {
      console.log("reached the end");
      setHasMore(false);
      return;
    }

    setPosts(
      posts.concat(
        articles.slice(posts.length - 1, posts.length + ARTICLES_PER_PAGE)
      )
    );
  };

  return (
    <InfiniteScroll
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
