// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {name, email, passHash, phone} = req.body;
  console.log(name, passHash);
  res.status(200).json({ name: 'John Doe' })
}
