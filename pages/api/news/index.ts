import getNews from "../../../lib/getNews";
import type { NextApiRequest, NextApiResponse } from "next";

// req is prepended with an underscore to mark it as declared but unused
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const news = getNews();
  res.status(200).json(news);
}
