import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title, content, userId } = req.body;
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      authorId: userId,
    },
  });
  res.json(result);
}