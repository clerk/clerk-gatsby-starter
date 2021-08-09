import { requireSession } from "@clerk/clerk-sdk-node"

// `requireSession` automatically throws an
// error when no user session is found.

export default requireSession((req, res) => {
  res.status(200).json({ id: req.session.userId })
})
