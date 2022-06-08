import React from "react";

const Article = ({ title, ...props }) => {
  return <h3>{title}</h3>;
};

export default Article;
