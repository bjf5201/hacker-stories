# CurioSearch-SPEC-01

## Background

The original project began as the ["Hacker Stories"](https://github.com/road-to-learn-react/hacker-stories) tutorial app from [Road to React](https://roadtoreact.com) by [Robin Wieruch](https://robinwieruch.de). The app provided a search bar that filtered a list of blog post links from the Hacker News API. While useful for learning React fundamentals, I wanted to challenge myself by adding some of my own bells and whistles.

The initial release is designed for self-hosting, giving users full control over their data and deployment. The architecture will be simple and lightweight, following the Unix philosophy of “do one thing and do it well.” While the MVP is single-user and self-managed, it will be built with a clear upgrade path toward a public, multi-user version in future iterations.

## Requirements

### Must Have

- Self-hosted React + TypeScript frontend using UnoCSS for a creative UI
- Custom backend (Fastify + TypeScript) with SQLite + Prisma ORM
- REST API endpoints: `/search`, `/posts` (GET/POST), `/posts/:id` (DELETE)
- Seeded database with curated articles and blog posts for specific categories
- Ability for users to add new blog post links
- Basic admin-only delete functionality
- Deployment: Vercel (frontend), Railway/Render/Fly.io (backend)

### Should Have

- Animated list/card transitions when search results change
- Card design including blog metadata (Microlink API integration)
- Responsive layout for mobile and desktop
- Loading and error states for API calls
- Follow the Unix philosophy — do one thing (curating resource links) and do it well
- Avoid deceptive design patterns — no UI tricks that aim to maximize user attention or engagement at the expense of user autonomy

### Could Have

- Tag/category filtering
- Gradient/glassmorphic theme
- Micro-interactions for button hovers and form submissions

### Won't Have

- Authentication beyond a simple admin URL parameter for deletion
- Complex user accounts or role management (planned for future public version)
- Full CMS-like content management

## Definition of Done

- Live demo deploys successfully
- README contains:
  - project description
  - installation instructions
  - usage instructions
  - information on how to contribute to the project
- LICENSE file is included
- Screen captures and screenshots gathered and added to README

## Testing

- **Unit Testing**: Use unit tests to verify search, add, and delete functionality
- **UI Testing**: Check animations, layout, and metadata previews across desktop and mobile
- **Functional Testing**: Ensure backend and frontend deployments are working together in chosen hosting environments
- **CI Testing**: Confirm that all workflows run as expected
- **Deployment Testing**: Ensure that a fresh self-hosted installation can be set up from scratch using only the README instructions
