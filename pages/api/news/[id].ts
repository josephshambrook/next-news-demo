import type { NextApiRequest, NextApiResponse } from "next";
import type { Article } from "../../../types";
import getNewsById from "../../../lib/getNewsById";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id || "";

  // expect the id as a single string, so add some type safety
  if (!id || typeof id !== "string") {
    return res.status(500).json({});
  }

  // attempt to find the article
  const filtered: Article | null = getNewsById(id);

  if (filtered !== null) {
    res.status(200).json(filtered);
  } else {
    res.status(404).json({ message: `Article with ${id} not found` });
  }
}
