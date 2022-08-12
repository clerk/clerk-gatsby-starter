import { withAuth } from "@clerk/nextjs/api"

// `withAuth` allows the developer to
// handle a missing user session.

export default withAuth((req, res) => {
  const { sessionId } = req.auth

  try {
    if (sessionId) {
      res.status(200).json({ isLogged: true })
    } else {
      res.status(200).json({ isLogged: false })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
})
