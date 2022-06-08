import news from "../../../data/news.json";

export default function handler(req, res) {
  res.status(200).json(news);
}
