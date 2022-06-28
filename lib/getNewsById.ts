import news from "../data/news.json";
import type { Article } from "../types";

export default function (id: string): Article | null {
  // necessary to assign the imported JSON a type
  const typedNews: Article[] = news as Article[];

  const res = typedNews.filter((article) => article.id === id);
  return res[0] || null;
}
