# Clerk - Gatsby starter

<img src="./docs/logo.png" />

This repository shows how to add [Clerk](https://clerk.dev) to a [Gatsby](https://gatsbyjs.com/) app.

[![Open in VS Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/clerkinc/clerk-gatsby-starter)

## Under the hood

This starter uses `gatsby-plugin-clerk`, which wraps `ClerkProvider` around the whole app. With that, you can start using components from `@clerk/clerk-react` — such as `SignedIn` and `SignedOut` — on the root of your app.

## Instructions

### Setting up your Clerk configuration

1. Go to your Clerk dashboard on https://dashboard.clerk.dev
2. Create a new standard application or use an existing one
3. Go to your "Development" instance and locate your "Frontend API" on the "Home" tab (you will use it in the next section)

### Running the starter locally

1. Fork and clone this repository
2. Install dependencies: `yarn install`
3. Create a file called `.env.development` in the root directory of this repository, add a key `GATSBY_CLERK_FRONTEND_API` and assign to it your "Frontend API" found on the previous section
4. Run the app: `yarn start`

## Need help?

If you need any asssitance, we're happy to help you out! Join us on our [Discord server](https://discord.gg/YRHz4h4whV) and tell us what you need.

[![Chat](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/YRHz4h4whV)
