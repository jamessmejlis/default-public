# Project Requirements Document (PRD)

## 1. Project Overview

DefaultPublic is a lightweight, AI-powered SaaS web application that helps solo founders and small teams build in public by turning user feedback into community-driven momentum. It combines a public-facing roadmap widget, a frictionless feedback board, AI-driven insights, and automated social sharing—all in one tool. By surfacing real-time votes, comments, and roadmap updates, founders can engage early adopters, build trust, and accelerate product-market fit through transparent collaboration.

We’re building this tool because existing feedback and roadmap platforms are geared toward large teams and internal use—they’re overbuilt, closed off, and miss out on the marketing value of public engagement. DefaultPublic’s success will be measured by rapid user onboarding (<10 min setup), active embed rates, social shares generated, and monthly recurring revenue from solo-founder subscriptions.

## 2. In-Scope vs. Out-of-Scope

### In-Scope (MVP)

*   **Public Roadmap Widget:** Embeddable via a simple `<script>` tag with theme and view options.
*   **Feedback & Feature Requests:** Light-touch submission for contributors (no full accounts required), voting, comments.
*   **AI Insights & Roadmap Suggestions:** Clustering, sentiment analysis, and prioritized roadmap recommendations via OpenAI API.
*   **Social Sharing Engine:** Auto-generated ready-to-post templates for Twitter, LinkedIn, Indie Hackers on each milestone.
*   **Founder Dashboard:** Three-column board (Now, Next, Later), analytics panel, monthly summary.
*   **Onboarding & Landing Page:** Public signup waitlist, minimal sign-up wizard.
*   **Subscription & Billing:** Stripe integration for Solo and Small Team Plans, plan management UI.
*   **User Roles:** Founder, lightweight contributors, plus optional Moderator for small teams.
*   **Real-Time Updates:** WebSockets with fallback to periodic polling.

### Out-of-Scope (Phase 1)

*   Mobile push notifications.
*   Email or third-party (Slack/Discord) notifications.
*   Public or private API for third-party integrations.
*   Custom analytics beyond in-app metrics cards.
*   Advanced team permissions beyond Founder/Moderator roles.
*   Enterprise-level features (SAML, custom SLAs, audit logs).

## 3. User Flow

When a solo founder first lands on DefaultPublic’s homepage, they see a bold value proposition and a “Create Public Roadmap” button. Clicking it opens a minimal signup form, offering both email/password and social logins (Twitter or GitHub). After authenticating, the founder is guided through a short wizard: they enter a project name, description, and their first roadmap item. With one click, a public URL is generated, the three-column board appears, and a confetti animation celebrates launch.

Next, the founder is prompted to embed a feedback widget via a snippet they copy/paste into their site. Visitors can now suggest features or upvote ideas without signing up—using only a name or handle. All feedback streams in real time (WebSockets) to the founder’s dashboard, where AI clusters similar suggestions and highlights hot topics. Founders can mark features as shipped, triggering auto-generated social posts. Each month, they review an in-app analytics report summarizing votes, comments, features shipped, and unique contributors.

## 4. Core Features

*   **Authentication & Accounts**

    *   Founders: Email/password or Twitter/GitHub OAuth.
    *   Contributors: Lightweight identifier (name or handle + optional email).
    *   Role-based access: Founder, Moderator, Contributor.

*   **Public Roadmap Widget**

    *   Embeddable `<script>` snippet with configuration (theme color, default column).
    *   Live view of roadmap items grouped by Now, Next, Later.

*   **Feedback Collection**

    *   No-signup feature suggestions, upvotes, and comments.
    *   Real-time updates via WebSockets (polling fallback).

*   **AI-Powered Insights**

    *   Feedback clustering and duplicate detection.
    *   Sentiment analysis for urgency/emotion.
    *   AI-generated roadmap prioritization suggestions.

*   **Social Sharing Engine**

    *   Auto-generated post templates for X/Twitter, LinkedIn, Reddit, Indie Hackers.
    *   One-click share from the dashboard.

*   **Metrics Dashboard**

    *   In-app monthly summary: votes, comments, shipped features, unique contributors.
    *   Live analytics panel: total views, top-voted items.

*   **Subscription & Billing**

    *   Stripe integration for Solo ($9/mo) and Small Team ($29/mo) plans.
    *   In-app upgrade/downgrade and add-on management.

*   **Moderation Tools**

    *   Invite moderators to review/edit/remove content.
    *   Simple permissions management UI.

## 5. Tech Stack & Tools

*   **Frontend**

    *   Next.js (React framework)
    *   TypeScript
    *   Tailwind CSS
    *   Shadcn UI component library

*   **Backend & Database**

    *   Supabase (PostgreSQL + Auth)
    *   Clerk Auth (alternative OAuth flows)
    *   Node.js / TypeScript API routes

*   **Real-Time & APIs**

    *   WebSockets (via Supabase or custom WS server)
    *   OpenAI API (GPT-4) for clustering, sentiment, suggestions

*   **Payments**

    *   Stripe (subscriptions, billing portal)

*   **Project Setup & IDE**

    *   Bolt for AI-powered scaffolding and best practices
    *   Cursor IDE integration for real-time code suggestions

*   **DevOps & Hosting**

    *   Vercel (frontend)
    *   Supabase hosted services
    *   Environment: Node 18+, GitHub Actions CI/CD

## 6. Non-Functional Requirements

*   **Performance**

    *   First Contentful Paint < 1.5 s on 3G.
    *   API response time < 200 ms for dashboard queries.

*   **Scalability**

    *   Support 10 k concurrent widget sessions.
    *   Horizontal scaling for WebSocket server.

*   **Security**

    *   OWASP Top 10 defenses.
    *   TLS everywhere, HTTP-only, same-site cookies.
    *   Role-based access control for founder/moderator.

*   **Privacy & Compliance**

    *   GDPR data-deletion on user request.
    *   Minimal PII collection for contributors.
    *   Data encryption at rest and in transit.

*   **Usability & Accessibility**

    *   WCAG 2.1 AA compliance.
    *   Keyboard navigation, screen-reader support.
    *   Responsive/mobile-first design.

## 7. Constraints & Assumptions

*   **OpenAI API Keys** must be available and within rate limits.

*   **Stripe account** set up for live payments.

*   **Founder signups** limited to email/password and OAuth (no SSO/SAML).

*   **WebSockets** availability on chosen hosting (fallback polling if needed).

*   **Branding assets** use assumed colors and fonts until provided:

    *   Black #000000, White #FFFFFF, Yellow #FFD700, Red #FF4040, Purple #800080.
    *   Fonts: Roboto or Open Sans.

## 8. Known Issues & Potential Pitfalls

*   **API Rate Limits**

    *   OpenAI’s free tier caps may throttle insights—implement caching and batching.

*   **Widget Performance**

    *   Embedding on slow sites could lag—lazy-load script snippet and optimize for < 50 kB.

*   **Spam & Abuse**

    *   Public feedback boards may attract spam—add rate limiting, CAPTCHA for submissions.

*   **Data Privacy**

    *   Contributors may request deletion—build an easy “erase my data” flow.

*   **Feature Creep**

    *   Risk of expanding beyond MVP—stick to core public engagement features.

This PRD serves as a single source of truth for the DefaultPublic MVP. It provides clear guidance on scope, user journeys, feature details, technology choices, non-functional needs, assumptions, and risk mitigation so that subsequent technical documents (Tech Stack, Frontend Guidelines, Backend Structure, etc.) can be generated without ambiguity.
