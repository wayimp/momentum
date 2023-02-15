import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    data: any
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    var data = req.body
    res.status(200).json(data)
}