import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Article from "./Article";
import styles from "./Grid.module.css";
import { Article as ArticleType } from "../types";

const chunkArray = (arr, size) =>
  arr.length > size
    ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
    : [arr];

const ArticleList = ({ articles }) => {
  const ARTICLES_PER_ROW = 7;
  const ROWS_PER_PAGE = 2;

  const [groupedArticles, setGroupedArticles] = useState([]);

  useEffect(() => {
    const res = chunkArray(articles, ARTICLES_PER_ROW);
    console.log(res);
    setGroupedArticles(res);
  }, [articles]);

  // const [posts, setPosts] = useState(articles.slice(0, ROWS_PER_PAGE));
  // const [hasMore, setHasMore] = useState(true);

  // const getMoreArticles = () => {
  //   if (posts.length >= articles.length) {
  //     setHasMore(false);
  //     return;
  //   }

  //   setPosts(
  //     posts.concat(articles.slice(posts.length, posts.length + ROWS_PER_PAGE))
  //   );
  // };

  return groupedArticles.map((posts) => (
    <div className={styles.container}>
      {posts.map((article: ArticleType, index: number) => {
        const placementIndex = Math.floor(index % ARTICLES_PER_ROW) + 1;
        return (
          <Article key={index} placementIndex={placementIndex} {...article} />
        );
      })}
    </div>
  ));

  // return (
  //   <div className={styles.container}>
  //     {posts.map((article: ArticleType, index: number) => {
  //       const placementIndex = Math.floor(index % ARTICLES_PER_ROW) + 1;
  //       return (
  //         <Article key={index} placementIndex={placementIndex} {...article} />
  //       );
  //     })}
  //   </div>
  // );

  // return (
  //   <InfiniteScroll
  //     className={styles.container}
  //     dataLength={posts.length}
  //     next={getMoreArticles}
  //     hasMore={hasMore}
  //     loader={<h4>Loading...</h4>}
  //     endMessage={
  //       <p style={{ textAlign: "center" }}>
  //         <b>Yay! You have seen it all</b>
  //       </p>
  //     }
  //   >
  //     {posts.map((article, index) => {
  //       return <Article key={index} {...article} />;
  //     })}
  //   </InfiniteScroll>
  // );
};

export default ArticleList;
