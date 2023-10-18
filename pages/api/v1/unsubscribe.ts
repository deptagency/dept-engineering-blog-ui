/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

// interface MemberData {
//   uuid: string
//   email: string
//   name: string
//   newsletters: string[]
//   enable_comment_notifications: boolean
//   status: string
// }

const Unsubscribe = async (
  req: NextApiRequest,
  res: NextApiResponse
  // eslint-disable-next-line consistent-return
): Promise<NextApiResponse | void> => {
  if (!req.query.uuid) {
    return res.status(401).json({ message: 'No UUID specified' })
  }

  try {
    const newslettersPath = 'members/api/members/newsletters'
    const memberNewslettersUrl = `${process.env.CMS_GHOST_API_URL}/${newslettersPath}?uuid=${req.query.uuid}`
    // We only have one newsletter. If we wanted more, we'd have to get the specific newsletter in the request
    // and unsubscribe from that one.
    const body = {
      newsletters: []
    }
    const updateMemberReq = await fetch(memberNewslettersUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    if (updateMemberReq.status !== 200) {
      console.error(updateMemberReq)
      throw new Error('Failed to unsubscribe user')
    }

    res.status(200).json({ message: 'Unsubscribe Successful' })
  } catch (e: unknown) {
    if (e instanceof Error) {
      return res.status(500).json({
        message: e.message
      })
    }
  }
}

export default Unsubscribe
