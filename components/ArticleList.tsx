import React from "react";
import Article from "./Article";

const ArticleList = ({ articles }) => {
  return articles.data.map((article, index) => {
    return <Article key={index} title={article.title} />;
  });
};

export default ArticleList;
