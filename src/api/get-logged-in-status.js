import Clerk from "@clerk/clerk-sdk-node"
import applyMiddleware from "../utils/applyMiddleware"

const withAuth = Clerk.expressWithAuth()

export default async function getLoggedStatusHandler(req, res) {
  try {
    await applyMiddleware(req, res, withAuth)
    const { sessionId } = req.auth
    res.json({ isLogged: !!sessionId })
  } catch (error) {
    res.status(500).json({ error })
  }
}
