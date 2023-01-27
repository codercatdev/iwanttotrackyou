// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { expressions } from "@/data/expressions";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const headers = JSON.stringify({
    details: expressions,
    headers: { ...req.headers },
  });
  res.status(200).json(JSON.parse(headers));
}
