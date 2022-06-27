import type { NextApiRequest, NextApiResponse } from "next";
import getLinksById from "../../../lib/getLinksById";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id || "";

  if (!id || typeof id !== "string") {
    return res.status(200).send({
      current: id,
      next: "",
      previous: ""
    });
  }

  const links = getLinksById(id);
  return res.status(200).send(links);
}
