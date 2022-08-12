import { requireAuth } from "@clerk/nextjs/api"

// `requireAuth` automatically throws an
// error when no user session is found.

export default requireAuth((req, res) => {
  res.status(200).json({ id: req.auth.userId })
})
