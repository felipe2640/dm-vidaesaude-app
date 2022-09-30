// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log(Object.keys(body));
  console.log(Object.values(body));
  // Guard clause checks for first and last name,
  // and returns early if they are not found

  if (!Object.values(body)) {
    // Sends a HTTP bad request error code
    return res
      .status(400)
      .json({ name: "Nome,e-mail ou telefone é obrigatório" });
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ body });
}
