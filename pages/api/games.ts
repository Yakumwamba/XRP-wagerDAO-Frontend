// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  games: object[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const games = [ {
        name: "Esports",
        time: "12:23",
        team1: "team1",
        team2: "team2"
    } ] 
  res.status(200).json({ games: games })
}
