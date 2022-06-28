import news from "../data/news.json";
import type { Links } from "../types";

export default function (id: string): Links {
  const index = news.findIndex((article) => article.id === id);
  const lastArticleIndex = news.length - 1;
  const next = index === lastArticleIndex ? news[0] : news[index + 1];
  const previous = index === 0 ? news[lastArticleIndex] : news[index - 1];

  return {
    current: id,
    next: next.id,
    previous: previous.id
  };
}
