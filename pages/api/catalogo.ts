import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  produtonome: string
  produtoimage:string
  produtopreco:string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ produtonome: 'Adaptador',produtoimage:"https://ooooooo.svg"
  ,produtopreco:"280" })
}