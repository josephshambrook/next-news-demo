import news from "../../../data/news.json";

export default function handler(req, res) {
  const currentId = req.query.currentId || "";

  if (!currentId) {
    return res.status(200).send({
      currentId,
      next: "",
      previous: ""
    });
  }

  const index = news.findIndex((article) => article.id === currentId);
  const lastArticleIndex = news.length - 1;
  const next = index === lastArticleIndex ? news[0] : news[index + 1];
  const previous = index === 0 ? news[lastArticleIndex] : news[index - 1];

  return res.status(200).send({
    currentId,
    next: next.id,
    previous: previous.id
  });
}
