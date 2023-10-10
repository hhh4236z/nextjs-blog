import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { pid },
  } = req

  res.end(`Post: ${pid}`)
}