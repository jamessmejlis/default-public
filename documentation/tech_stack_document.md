# Tech Stack Document

This document explains the technology choices behind **DefaultPublic**, our public-first feedback and roadmap tool for solo founders. We’ve written it in everyday language so anyone—technical or not—can understand why each piece was chosen and how it helps deliver a smooth, reliable experience.

## 1. Frontend Technologies
These are the tools that power what you see and interact with in your web browser.

• **Next.js (React framework)**
  – Provides the structure for building fast, SEO-friendly pages and real-time features.
  – Lets us pre-render common pages for speed, while still supporting dynamic, user-specific views (your personal dashboard).

• **TypeScript**
  – A stricter version of JavaScript that catches errors early, helping us build more reliable features.
  – Ensures that as we add new functionality, we’re less likely to introduce bugs that disrupt your workflow.

• **Tailwind CSS**
  – A utility-first styling tool that keeps our design consistent and our code lean.
  – Speeds up UI development so we can rapidly iterate on look and feel without sacrificing performance.

• **Shadcn UI**
  – A collection of pre-built, accessible design components (buttons, modals, forms).
  – Guarantees consistent styling and keyboard/screen reader support out of the box.

• **Clerk Auth (Authentication Library)**
  – Handles sign-up and login flows using email/password or social logins (Twitter, GitHub).
  – Simplifies user management, so founders can get started in minutes and contributors can interact with minimal friction.

• **WebSockets (Real-Time Updates)**
  – Keeps the roadmap and feedback panels in sync instantly, without manual page refreshes.
  – Aligns with our public-first philosophy by showing new votes and comments the moment they happen.

## 2. Backend Technologies
These components work behind the scenes to store your data, run business logic, and connect to external services.

• **Supabase (Database & Auth)**
  – A hosted PostgreSQL database for storing roadmap items, votes, comments, and user profiles.
  – Built-in authentication support as a backup to Clerk, ensuring secure user accounts and easy migrations.

• **Node.js & TypeScript API Routes**
  – Our server-side code runs on Node.js, a popular JavaScript runtime.
  – TypeScript ensures consistency between frontend and backend, reducing errors and streamlining maintenance.

• **OpenAI API**
  – Powers AI-driven features like feedback clustering, sentiment analysis, and automated roadmap suggestions.
  – Leverages advanced language models without building a custom AI system from scratch.

• **Stripe (Payment Processing)**
  – Handles all subscription and billing workflows securely.
  – Provides a reliable, PCI-compliant checkout experience for both the Solo Plan and Small Team Plan.

## 3. Infrastructure and Deployment
How we host, update, and manage the application to guarantee uptime and scalability.

• **Vercel (Hosting Platform)**
  – Deploys our Next.js frontend globally, using a content delivery network (CDN) for fast load times.
  – Automatic previews for pull requests, making QA and collaboration straightforward.

• **Supabase Hosted Services**
  – Manages our database and real-time subscriptions without manual server maintenance.
  – Scales horizontally to handle growth in user submissions and widget traffic.

• **GitHub & GitHub Actions (Version Control & CI/CD)**
  – Stores all code in GitHub, enabling collaborative development and code reviews.
  – Uses GitHub Actions to run automated tests and deploy changes on every merge, reducing the chance of human error.

• **Environment Management**
  – Node 18+ runtime ensures compatibility with modern JavaScript features.
  – Environment variables keep secrets (API keys, database URLs) secure and out of source control.

## 4. Third-Party Integrations
Services we connect to in order to deliver extra capabilities without reinventing the wheel.

• **OpenAI**
  – Clustering similar feedback, performing sentiment analysis, and suggesting prioritized roadmap items.
  – Frees our team from building and training complex AI models.

• **Stripe**
  – Subscription billing, plan upgrades/downgrades, and one-click payments.
  – Manages invoices, receipts, and failed payments for you.

• **Social Sharing (Twitter, LinkedIn, Indie Hackers)**
  – Auto-generates ready-to-post messages when you ship features or hit milestones.
  – Simplifies the process of broadcasting your public journey and attracting new contributors.

• **Authentication Providers (Twitter, GitHub)**
  – Allows founders to sign in using existing social accounts, faster than filling out forms.
  – Encourages sharing by integrating directly with platforms you already use.

## 5. Security and Performance Considerations
Measures we’ve taken to protect your data and ensure the app stays snappy.

• **Data Protection & Encryption**
  – TLS/HTTPS everywhere to encrypt data in transit.
  – Database encryption at rest for user profiles, feedback, and roadmap entries.

• **Authentication & Access Control**
  – Role-based permissions: Founders manage projects, Moderators curate content, Contributors submit ideas.
  – HTTP-only, same-site cookies to prevent cross-site attacks.

• **Rate Limiting & Spam Prevention**
  – CAPTCHA on the feedback widget (optional) to deter automated spam.
  – Submission throttling to protect the system under heavy load.

• **Performance Optimizations**
  – Server-side rendering (SSR) and static generation for fast initial load.
  – Tailwind CSS’s tree-shaking to keep stylesheets small.
  – Lazy-loading of non-critical scripts (widget code) to speed up page rendering.

• **Compliance & Privacy**
  – GDPR-compliant data deletion upon request.
  – Minimal collection of personal data from contributors (just name/handle and optional email).

## 6. Conclusion and Overall Tech Stack Summary
Our technology choices reflect DefaultPublic’s goals:

• **Speed & Simplicity:** Next.js, Tailwind CSS, and Vercel ensure a fast, lightweight experience you can set up in under 10 minutes.

• **Reliability & Scalability:** Supabase and GitHub Actions let us grow from solo founders to thousands of embedded widgets without downtime.

• **Security & Trust:** Clerk Auth, Stripe, and encrypted data practices protect your project and your community.

• **Innovation & Insight:** OpenAI’s language models power smart feedback analysis, saving you hours of manual work.

By combining these proven technologies, DefaultPublic empowers solo founders to build in public, amplify community engagement, and accelerate product-market fit—without getting bogged down by infrastructure or overhead.

Thank you for exploring our tech stack! We’re excited to keep iterating and delivering value to your public-first journey.