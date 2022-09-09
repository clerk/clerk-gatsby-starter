import Clerk from "@clerk/clerk-sdk-node"
import applyMiddleware from "../utils/applyMiddleware"

const requireAuth = Clerk.expressRequireAuth()

export default async function getUserIdHandler(req, res) {
  await applyMiddleware(req, res, requireAuth)
  const { userId } = req.auth
  res.json({ userId })
}
