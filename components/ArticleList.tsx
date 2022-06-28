import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Article from "./Article";
import styles from "./Grid.module.css";
import { Article as ArticleType } from "../types";
import { chunkArticles } from "../helpers";

const ArticleList = ({ articles }: { articles: ArticleType[] }) => {
  const ARTICLES_PER_ROW = 7;
  const ROWS_PER_PAGE = 2;

  const [groupedArticles, setGroupedArticles] = useState<ArticleType[][]>([]);
  const [displayedGroups, setDisplayedGroups] = useState(
    groupedArticles.slice(0, ROWS_PER_PAGE)
  );
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const res = chunkArticles(articles, ARTICLES_PER_ROW);
    setGroupedArticles(res);
    setDisplayedGroups(res.slice(0, ROWS_PER_PAGE));
  }, [articles]);

  const getMoreGroups = () => {
    if (displayedGroups.length >= groupedArticles.length) {
      setHasMore(false);
      return;
    }

    setDisplayedGroups(
      displayedGroups.concat(
        groupedArticles.slice(
          displayedGroups.length,
          displayedGroups.length + ROWS_PER_PAGE
        )
      )
    );
  };

  return (
    <InfiniteScroll
      dataLength={displayedGroups.length}
      next={getMoreGroups}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {displayedGroups.map((posts: ArticleType[]) => {
        return (
          <div className={styles.container}>
            {posts.map((article: ArticleType, index: number) => {
              const placementIndex = Math.floor(index % ARTICLES_PER_ROW) + 1;
              return (
                <Article
                  key={index}
                  placementIndex={placementIndex}
                  {...article}
                />
              );
            })}
          </div>
        );
      })}
    </InfiniteScroll>
  );
};

export default ArticleList;
