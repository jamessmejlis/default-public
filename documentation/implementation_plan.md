# Implementation plan

## Phase 1: Environment Setup

1.  **Prevalidation**: Check if current directory contains `package.json` or `.git` folder; if so, skip project initialization.\
    (Prevalidation Step)
2.  Install Node.js v20.2.1 exactly.\
    (Tech Stack Document Section 2)
3.  **Validation**: Run `node -v` and confirm the output is `v20.2.1`.\
    (Tech Stack Document Section 2)
4.  Initialize a Git repository: run `git init` in project root. Create `.gitignore` with standard Node entries.\
    (CodeGuide Starter Pro)
5.  Create a `cursor_metrics.md` file in the project root.\
    (Project Setup & IDE: Bolt, Cursor IDE)
6.  Refer to `cursor_project_rules.mdc` to understand how to populate `cursor_metrics.md`.\
    (CodeGuide Starter Pro)
7.  Create a `.cursor` directory at project root if it doesn’t exist.\
    (Tech Stack Document Section 2)
8.  Inside `.cursor`, create `mcp.json` if it doesn’t exist.\
    (Tech Stack Document Section 2)
9.  Add `.cursor/mcp.json` to `.gitignore`. **DO NOT SKIP THIS STEP.**\
    (Tech Stack Document Section 2)
10. Insert the following configuration into `.cursor/mcp.json`, leaving `<connection-string>` as a placeholder:

`// macOS { "mcpServers": { "supabase": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-postgres", "<connection-string>"] } }} // Windows { "mcpServers": { "supabase": { "command": "cmd", "args": ["/c", "npx", "-y", "@modelcontextprotocol/server-postgres", "<connection-string>"] } }} `(Tech Stack Document Section 2)

1.  Display link for user:\
    <https://supabase.com/docs/guides/getting-started/mcp#connect-to-supabase-using-mcp>\
    (Tech Stack Document Section 2)
2.  After obtaining the Supabase connection string, replace `<connection-string>` in `.cursor/mcp.json`.\
    (Tech Stack Document Section 2)
3.  In Cursor IDE, navigate to **Settings > MCP** and verify the Supabase server shows **green active**.\
    (Tech Stack Document Section 2)

## Phase 2: Frontend Development

1.  Initialize a Next.js 14 project with TypeScript and Tailwind CSS:

`npx create-next-app@14 --typescript --tailwind . `*Note: Next.js 14 is required for compatibility with current AI tools.*\
(Tech Stack Document Section 1)

1.  **Validation**: Run `npm run dev` and verify the Next.js v14 welcome page at `http://localhost:3000`.\
    (Tech Stack Document Section 1)
2.  Install Shadcn UI and initialize:

`npm install @shadcn/ui npx shadcn-ui init `(Tech Stack Document Section 1)

1.  Configure Tailwind with project colors in `tailwind.config.js`:

`module.exports = { theme: { extend: { colors: { black: '#000000', white: '#FFFFFF', yellow: '#FFD700', red: '#FF4040', purple: '#800080' } } } } `(UI/UX Specifications Section)

1.  Create `/src/pages/_app.tsx` wrapping the app in global styles and ClerkProvider.\
    (CodeGuide Starter Pro)
2.  Install Clerk Auth and wrap app:

`npm install @clerk/nextjs `In `_app.tsx`, add:

`import { ClerkProvider } from '@clerk/nextjs'; // … <ClerkProvider>{children}</ClerkProvider> `(Tech Stack Document Section 1)

1.  **Validation**: Navigate to `http://localhost:3000/sign-in` and confirm the Clerk sign-in UI loads.\
    (Tech Stack Document Section 1)
2.  Create landing page at `/src/pages/index.tsx` with CTA button and waitlist signup form.\
    (App Flow Document Section 1)
3.  Create dashboard page at `/src/pages/dashboard.tsx` featuring header (Logo, Profile, Embed, Share, Notifications) and roadmap columns (Now, Next, Later).\
    (UI/UX Specifications Section)
4.  Build `/src/components/RoadmapWidget.tsx` using Shadcn UI cards to display features with title, description, status badge, upvote/comment counts.\
    (UI/UX Specifications Section)
5.  Build `/src/components/FeedbackForm.tsx` with a text input and “Suggest a Feature” button.\
    (App Flow Document Section 2)
6.  Build `/src/components/FeatureCard.tsx` showing upvote and comment icons; wire one-click upvote.\
    (UI/UX Specifications Section)
7.  Add responsive and accessible props to all components;\
    **Validation**: Run `npm run lint:accessibility` and address all errors.\
    (UI Accessibility Section)
8.  Create `/src/lib/socket.ts` to initialize WebSocket connection to backend (WS URL in env).\
    (Tech Stack Document Section 1)
9.  Create `/src/components/ShareButtons.tsx` with social share templates and buttons for Twitter, LinkedIn.\
    (UI/UX Specifications Section)
10. **Validation**: Manually click each share button in browser to confirm correct prefilled templates.\
    (UI/UX Specifications Section)

## Phase 3: Backend Development

1.  Initialize Supabase in project root: run `supabase init`.\
    (Tech Stack Document Section 2)
2.  Create `supabase/.env.local` with `SUPABASE_URL` and `SUPABASE_ANON_KEY` from Supabase dashboard.\
    (Tech Stack Document Section 2)
3.  Write SQL schema in `supabase/migrations/001_init.sql` defining tables:

`CREATE TABLE users ( id uuid PRIMARY KEY, email text UNIQUE, name text, role text ); CREATE TABLE features ( id uuid PRIMARY KEY, title text, description text, status text, upvotes int DEFAULT 0 ); CREATE TABLE feedback ( id uuid PRIMARY KEY, feature_id uuid REFERENCES features(id), content text, sentiment text, cluster_id uuid ); CREATE TABLE votes ( user_id uuid REFERENCES users(id), feature_id uuid REFERENCES features(id), PRIMARY KEY(user_id, feature_id) ); CREATE TABLE comments ( id uuid PRIMARY KEY, user_id uuid REFERENCES users(id), feature_id uuid REFERENCES features(id), content text ); `(Tech Stack Document Section 2)

1.  **Validation**: Run `supabase db push` and verify tables appear in Supabase dashboard.\
    (Tech Stack Document Section 2)
2.  Configure Auth providers (email/password, GitHub, Twitter) in `supabase/config.toml`.\
    (PRD Section 9)
3.  Create `/src/pages/api/feedback.ts` handling `POST` to insert into `feedback` and trigger sentiment analysis.\
    (App Flow Document Section 2)
4.  Create `/src/pages/api/vote.ts` handling `POST` to increment `features.upvotes` and insert into `votes`.\
    (App Flow Document Section 3)
5.  Create `/src/pages/api/features.ts` handling `GET` to return all features sorted by status and upvotes.\
    (PRD Section 3)
6.  Create `/src/pages/api/applyAi.ts` that calls OpenAI for clustering feedback and generating roadmap suggestions.\
    (PRD Section 3)
7.  Create `/src/pages/api/stripe.ts` to handle Stripe checkout sessions and webhooks for subscription events.\
    (Business Model Section)
8.  **Validation**: Write Jest tests in `backend/tests` for each API endpoint and ensure 100% pass rate.\
    (CodeGuide Starter Pro)
9.  Enable real-time updates via Supabase Realtime in `supabase/config.toml`. Broadcast feature changes to subscribers.\
    (App Flow Document Section 4)
10. **Validation**: In a test client, subscribe to real-time channel and verify updates when a feature is voted.\
    (App Flow Document Section 4)

## Phase 4: Integration

1.  In `/src/lib/api.ts`, implement functions `getFeatures()`, `submitFeedback()`, `voteFeature()`, and `fetchAiSuggestions()` calling the respective API routes.\
    (App Flow Document Section 2)
2.  Configure CORS in `next.config.js` to allow requests from `http://localhost:3000`.\
    (Tech Stack Document Section 2)
3.  **Validation**: Use the UI to submit feedback and verify a row appears in Supabase `feedback` table.\
    (App Flow Document Section 2)
4.  In `/src/pages/dashboard.tsx`, use `useEffect` to subscribe to `/src/lib/socket.ts` for real-time updates.\
    (App Flow Document Section 4)
5.  **Validation**: Upvote a feature in one browser tab and confirm the count updates live in another.\
    (App Flow Document Section 4)

## Phase 5: Deployment

1.  Add the following environment variables in Vercel settings under your project:

    *   `NEXT_PUBLIC_SUPABASE_URL`
    *   `NEXT_PUBLIC_SUPABASE_ANON_KEY`
    *   `SUPABASE_SERVICE_ROLE_KEY`
    *   `OPENAI_API_KEY`
    *   `STRIPE_SECRET_KEY`\
        (Tech Stack Document Section 2)

2.  Connect GitHub repo to Vercel and enable automatic deploys on the `main` branch.\
    (DevOps & Hosting)

3.  **Validation**: Push a commit to `main`, verify Vercel build passes, then visit `https://<your-project>.vercel.app` to confirm the landing page loads.\
    (DevOps & Hosting)
