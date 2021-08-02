import { withSession } from "@clerk/clerk-sdk-node"

export default withSession((req, res) => {
  try {
    if (req.session) {
      res.status(200).json({ id: req.session.userId })
    } else {
      res.status(401).json({ id: null })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
})
