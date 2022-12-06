// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { XummSdk } from "xumm-sdk";
type Data = {
  wallet: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const Sdk = new XummSdk("46b37ea3-d9dd-434e-878d-bc40e70cf7c4", "d80c4e4e-c1fc-4a76-ba0c-cd1cc3a4bbb1");

try {
    const response = await Sdk.ping()

    const payload = Sdk.payload.createAndSubscribe({
      TransactionType: 'Payment',
      
      Amount: "1000000",
      Destination: "rBFW4igqcgpKs6iUB7YMW9c5EfpAoi5WXS"
    }, e => {
      console.log(e.data)
  
      if (typeof e.data.signed !== 'undefined') {
        return e.data
      }
    })
    console.log((await payload).created.next.always)
    await payload
    console.log('Resolved :)')
    res.status(200).json({ wallet: response})
} catch (error) {
    
}


}
