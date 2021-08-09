import { withSession } from "@clerk/clerk-sdk-node"

// `withSession` allows the developer to
// handle a missing user session.

export default withSession((req, res) => {
  try {
    if (req.session) {
      res.status(200).json({ isLogged: true })
    } else {
      res.status(200).json({ isLogged: false })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
})
