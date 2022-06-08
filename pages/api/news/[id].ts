import news from "../../../data/news.json";

export default function handler(req, res) {
  const id = req.query.id || "";

  if (!id) {
    return res.status(500).json({});
  }

  // attempt to find the article
  const filtered = news.filter((article) => article.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Article with ${id} not find` });
  }
}
