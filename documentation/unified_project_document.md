# Unified Project Documentation

## Project Requirements Document

### 1. Project Overview

DefaultPublic is a modern, lightweight SaaS web application designed to help solo founders and small teams build in public. It provides a public-facing roadmap widget, a frictionless feedback board, AI-driven insights, and automated social sharing. By making product plans and user feedback transparent, DefaultPublic turns community input into marketing traction and helps founders reach product-market fit faster.

We are building this tool because existing feedback and roadmap platforms are overly complex and internal-focused, missing out on the growth potential of public engagement. Success will be measured by how quickly new users can go live (under 10 minutes), the rate of widget embeds and social shares generated, and the recurring revenue from solo-founder subscriptions.

### 2. In-Scope vs. Out-of-Scope

**In-Scope (MVP)**

*   Public Roadmap Widget: Embeddable via a simple `<script>` tag with theme and view options.
*   Feedback & Feature Requests: No-signup suggestions, voting, comments, real-time updates.
*   AI Insights & Roadmap Suggestions: Clustering, sentiment analysis, and prioritized recommendations via OpenAI.
*   Social Sharing Engine: Auto-generated templates for Twitter, LinkedIn, Indie Hackers.
*   Founder Dashboard: Three columns (Now/Next/Later), analytics panel, monthly summary reports.
*   Onboarding & Landing Page: Quick signup wizard with email/password and Twitter/GitHub OAuth.
*   Subscription & Billing: Stripe integration for Solo ($9/mo) and Small Team ($29/mo) plans.
*   User Roles: Founder, Contributor (lightweight identifier), Moderator for content management.
*   Real-Time Updates: WebSockets with polling fallback.

**Out-of-Scope (Phase 1)**

*   Push notifications (email, mobile, Slack, Discord).
*   Public or private API for external integrations.
*   Advanced analytics beyond in-app metrics cards.
*   Enterprise features (SSO/SAML, audit logs).
*   Custom branding beyond basic theme colors.

### 3. User Flow

When a solo founder visits the DefaultPublic homepage, they immediately see a clear pitch and a “Create Public Roadmap” button. Clicking it opens a minimal signup form offering email/password or Twitter/GitHub login. After authentication, the founder enters a wizard to name their project, describe it, and add their first roadmap item. One click later, a public URL is generated, the three-column board appears, and confetti celebrates the launch.

Next, the founder copies a small script-tag snippet—customizable for theme and view—and pastes it into their website. Visitors can then suggest features or upvote ideas without signing up, using only a name or handle. Feedback streams in real time to the founder’s dashboard, where AI clusters similar requests, flags urgent sentiments, and proposes new roadmap items. Founders mark items as shipped, triggering shareable social posts, and review monthly analytics to track momentum.

### 4. Core Features

*   Authentication & Accounts: Email/password and Twitter/GitHub OAuth for founders; lightweight identifiers for contributors.
*   Public Roadmap Widget: Easy embed, live display of roadmap columns, interactive upvotes and comments.
*   Feedback Collection: No-signup submissions, voting, comments, clustering.
*   AI-Powered Insights: Feedback grouping, sentiment analysis, roadmap prioritization via OpenAI API.
*   Social Sharing Engine: One-click templates for key social platforms.
*   Metrics Dashboard: Real-time panel and monthly summary of engagement metrics.
*   Subscription & Billing: Stripe integration with plan management UI.
*   Moderation Tools: Invite moderators, manage inappropriate content.

### 5. Tech Stack & Tools

*   Frontend: Next.js, React, TypeScript, Tailwind CSS, Shadcn UI.
*   Backend: Supabase (PostgreSQL + Auth), Node.js/TypeScript API routes.
*   Authentication: Clerk Auth (OAuth), native email/password.
*   Real-Time: WebSockets (Supabase or custom), fallback polling.
*   AI Services: OpenAI API for clustering, sentiment, suggestions.
*   Payments: Stripe for subscriptions and billing.
*   Hosting & CI/CD: Vercel (frontend), GitHub Actions, Supabase hosted backend.
*   Developer Tools: Bolt for scaffolding, Cursor IDE integrations.

### 6. Non-Functional Requirements

*   Performance: First Contentful Paint <1.5s on 3G; API responses <200ms.
*   Scalability: Handle 10,000 concurrent widget sessions; horizontally scalable WebSocket server.
*   Security: TLS everywhere; OWASP Top 10 defenses; role-based access control.
*   Privacy & Compliance: GDPR data-deletion on request; minimal PII; encryption at rest and in transit.
*   Accessibility: WCAG 2.1 AA; keyboard navigation; screen-reader support; mobile-first design.

### 7. Constraints & Assumptions

*   OpenAI API keys must be provisioned; watch usage quotas.
*   Stripe account set up for live billing.
*   WebSockets availability or acceptable fallback to polling.
*   Branding uses placeholder assets: Black #000000, White #FFFFFF, Yellow #FFD700, Red #FF4040, Purple #800080; fonts: Roboto or Open Sans.
*   Contributors supply only a name or handle and optional email; no full accounts required.

### 8. Known Issues & Potential Pitfalls

*   API Rate Limits: Batch OpenAI calls and cache results to avoid throttling.
*   Widget Performance: Lazy-load snippet and keep bundle <50KB.
*   Spam & Abuse: Implement rate limiting, optional CAPTCHA for feedback submissions.
*   Data Deletion: Build easy “erase my data” flow for GDPR compliance.
*   Feature Creep: Stay focused on core public engagement features.

## App Flow Document

### Onboarding and Sign-In/Sign-Up

When a new user lands on DefaultPublic’s homepage, they see a clear headline explaining the value of public roadmaps and feedback. A “Create Public Roadmap” button invites them to sign up. Clicking it opens a modal with options for email/password or social login via Twitter or GitHub. After completing authentication, founders receive a confirmation email if they used email signup. They then enter a quick setup wizard to name their project, add a description, and create their first roadmap item. Password resets are handled via a “Forgot Password?” link, which sends a secure reset link by email. To sign out, users click their avatar in the top navigation and select “Sign Out,” returning them to the landing page.

### Main Dashboard or Home Page

After login, founders arrive at a dashboard featuring a header with the logo on the left and key actions on the right: Embed, Share Roadmap, Notifications, and Profile. Below the header, three vertical columns labeled Now, Next, and Later display roadmap cards. A persistent sidebar on the right shows incoming suggestions, upvote counts, and comment indicators. An analytics toggle above the columns reveals live metrics like views, vote trends, and contributor counts. On mobile, a bottom toolbar lets users swipe between the three columns and the feedback panel.

### Detailed Feature Flows and Page Transitions

Upon sign-up, the setup wizard collects project details and the first roadmap item, then animates a confetti celebration and shows the public board. To embed the widget, founders click “Embed Roadmap,” customize theme color and default view in a modal, and copy a script-tag snippet. Once embedded on any site, visitors can suggest features or vote without signing in, and feedback appears live in the founder’s panel via WebSockets. The founder can click any suggestion to view its thread, sentiment score, and clustering information. In the Insights tab, AI-generated recommendation cards suggest where to place new items; founders accept or edit them with one click, updating the public board instantly. Marking a feature as shipped triggers confetti, updates the badge, and pops up shareable social post templates for Twitter, LinkedIn, and Indie Hackers.

### Settings and Account Management

Users access settings by clicking their avatar and choosing “Profile & Settings.” The Account tab lets founders update their name, email, password, or link social logins. Under Preferences, they opt into in-app notifications or plan for email alerts in future versions. Billing shows current plan details and next renewal date, with a “Change Plan” button to upgrade or downgrade via Stripe’s secure form. Add-ons like custom branding and advanced analytics can also be managed here. After saving, a confirmation banner appears, and a toast notification confirms the update. Founders return to the dashboard by clicking the logo or “Back to Dashboard.”

### Error States and Alternate Paths

If users enter invalid data during signup or login, clear error messages appear above the relevant fields, such as “Invalid email address.” Submitting feedback without a name or handle highlights the missing field inline. For network issues, a banner reads “Connection lost. Reconnecting…” and the app retries. If real-time updates fail, it falls back to polling every few seconds. When AI insights are unavailable, the Insights tab shows “AI suggestions temporarily unavailable. Try again later.” Unauthorized actions, like marking shipped without the right role, trigger a dialog explaining the permission requirement. Stripe errors during billing display the issue and prompt a retry or support contact.

### Conclusion and Overall App Journey

From clicking “Create Public Roadmap” to embedding a feedback widget and marking features as shipped, DefaultPublic guides founders through a seamless public engagement flow. The platform launches in under ten minutes, streams community feedback in real time, offers AI-driven suggestions, and automates social sharing and analytics. Robust account and billing management via Stripe, graceful error handling, and simple moderation tools round out the experience, helping founders build trust, gather feedback, and accelerate product-market fit.

## Tech Stack Document

### Frontend Technologies

*   Next.js: React-based framework with server-side rendering and fast static export for performance and SEO.
*   React & TypeScript: Strong typing ensures fewer bugs and clearer code structure.
*   Tailwind CSS: Utility-first styling for rapid UI development and consistent design.
*   Shadcn UI: Prebuilt, accessible components to speed up development.
*   Clerk Auth: Simplifies OAuth flows and email/password authentication.

### Backend Technologies

*   Supabase (PostgreSQL + Auth): Managed database and authentication, real-time capabilities via replication.
*   Node.js & TypeScript API Routes: Flexible serverless functions on Vercel for business logic and webhook handlers.
*   OpenAI API: Leverages GPT-4 for feedback clustering, sentiment analysis, and roadmap suggestions.
*   WebSockets: Real-time updates for widget and dashboard via Supabase Realtime or custom WS server.

### Infrastructure and Deployment

*   Vercel: Hosting for Next.js frontend and API routes with automatic CI/CD from GitHub.
*   GitHub Actions: Automated testing and deployment pipelines.
*   Supabase Hosted Services: Managed database, real-time streams, and authentication.
*   Environment: Node.js 18+, TypeScript, Git version control.

### Third-Party Integrations

*   Stripe: Subscription billing, plan management, and secure payment flows.
*   Bolt CLI: Rapid project scaffolding with AI-powered best practices.
*   Cursor IDE: AI-assisted coding within the development environment.
*   Social APIs: Prefill sharing posts to Twitter, LinkedIn, Indie Hackers.

### Security and Performance Considerations

*   TLS Everywhere: All traffic encrypted in transit.
*   Role-Based Access Control: Founder, Moderator, Contributor permissions enforced server-side.
*   Rate Limiting & CAPTCHA: Protect feedback endpoints from abuse.
*   Caching & Batching: Minimize OpenAI API calls and speed up repeated queries.
*   Lazy Loading & Code Splitting: Ensure widget and dashboard load quickly and only what’s needed.

### Conclusion and Overall Tech Stack Summary

This stack balances quick time-to-market with scalability and performance. Next.js and Tailwind CSS enable rapid, responsive UI development. Supabase and serverless functions simplify backend operations. Stripe handles billing securely, while OpenAI provides powerful AI features. Real-time interactions via WebSockets and automated CI/CD pipelines on Vercel ensure a smooth, reliable experience for both founders and their communities.

## Frontend Guidelines

### Frontend Architecture

DefaultPublic uses a component-based architecture built on Next.js and React with TypeScript. Pages are organized under `/app`, with shared layout in `layout.tsx` and global styles in `globals.css`. Reusable UI elements live in the `components/ui` directory using Shadcn UI. Providers for authentication and state (Clerk and TanStack) wrap the app at the top level. This structure supports scalability, maintainability, and fast iterative development.

### Design Principles

We prioritize usability, accessibility, and responsiveness. Interfaces are clean and energetic, guiding users with clear calls to action. All components follow WCAG 2.1 AA guidelines for color contrast, keyboard navigation, and screen-reader compatibility. Mobile-first layouts ensure consistency across devices, with fluid grids, Flexbox, and utility classes from Tailwind.

### Styling and Theming

We use Tailwind CSS with a custom theme in `tailwind.config.ts`. The design style is modern and bold, featuring glass-like cards, vibrant accent colors (Electric Yellow #FFD700, Hot Coral #FF4040), and neutral backgrounds (Jet Black #000000, Crisp White #FFFFFF). Fonts are set to Roboto for readability and consistency. Theme tokens allow easy swapping of colors and typography.

### Component Structure

Components are atomic and reusable. UI primitives (buttons, inputs, cards) live in `components/ui`, while composed feature components (RoadmapCard, FeedbackWidget) sit alongside domain logic. This organization promotes clear boundaries and easy testing, enabling teams to add or modify features without affecting unrelated code.

### State Management

We use React Query (TanStack Query) for server state, handling data fetching, caching, and real-time updates via WebSockets. Local component state uses React’s `useState` and `useReducer` hooks. Global UI state (toasts, modals) is managed with a lightweight context in `components/providers`.

### Routing and Navigation

Next.js App Router provides file-based routing. Dynamic routes handle project and roadmap IDs. Navigation uses built-in `<Link>` for client-side transitions. A custom `ProtectedRoute` component secures pages for authenticated users. Route guards redirect unauthenticated visitors back to the landing page.

### Performance Optimization

We implement lazy loading for non-critical components and code splitting via dynamic imports. Images and icons are optimized with Next.js Image. The feedback widget is loaded asynchronously to keep initial bundle size under 50KB. Caching headers and edge functions on Vercel speed up repeated loads.

### Testing and Quality Assurance

Unit tests with Jest and React Testing Library cover UI components. Integration tests verify key flows like signup, roadmap creation, and feedback submission. End-to-end tests with Cypress simulate user journeys including embedding the widget and real-time updates. GitHub Actions run tests on every pull request.

### Conclusion and Overall Frontend Summary

Our frontend setup delivers a fast, accessible, and maintainable experience. Next.js and Tailwind CSS power a responsive UI, while a clear component hierarchy and robust state management make the codebase easy to extend. Performance optimizations and thorough testing ensure reliability, and our design principles guarantee an inclusive, user-friendly interface for founders and contributors alike.

## Implementation Plan

1.  Project Setup

    *   Clone CodeGuide Starter Pro repo.
    *   Configure environment variables for Supabase, Clerk, OpenAI, Stripe.
    *   Install dependencies and verify Hello World on Vercel.

2.  Authentication & Onboarding

    *   Implement Clerk Auth flows and email/password fallback.
    *   Build minimal signup wizard and password reset.
    *   Create landing page with “Create Public Roadmap” CTA.

3.  Roadmap and Feedback Models

    *   Define database schema in Supabase: projects, roadmap_items, feedback, votes, comments.
    *   Build API routes for CRUD operations on projects and items.
    *   Implement real-time subscriptions via Supabase Realtime or custom WebSockets.

4.  Dashboard UI

    *   Develop three-column layout with RoadmapCard component.
    *   Integrate feedback panel with upvotes and comments.
    *   Add analytics toggle and monthly summary stub.

5.  Embeddable Widget

    *   Create standalone FeedbackWidget component.
    *   Build `<script>` loader to inject widget into third-party sites.
    *   Expose theme and default view options in snippet.

6.  AI Insights Integration

    *   Connect to OpenAI API for feedback clustering and sentiment analysis.
    *   Build `/api/insights` endpoint to process feedback batches.
    *   Display AI suggestions in Insights tab with accept/edit actions.

7.  Social Sharing Engine

    *   Auto-generate post templates on milestone and ship events.
    *   Integrate share buttons that open prefilled social dialogs.

8.  Billing & Subscription

    *   Set up Stripe products and plans.
    *   Build billing page with Stripe Checkout and portal links.
    *   Handle webhook events for subscription lifecycle.

9.  Moderation & Roles

    *   Extend user model with roles and permissions.
    *   Create team management UI for inviting moderators.
    *   Enforce server-side role checks on sensitive operations.

10. Testing, QA & Deployment

*   Write unit, integration, and end-to-end tests.
*   Configure GitHub Actions for CI and Vercel previews.
*   Perform load testing on widget and WebSocket server.

1.  Launch & Monitoring

*   Deploy to production on Vercel and Supabase.
*   Monitor performance and errors via logs and analytics.
*   Gather user feedback to plan Phase 2 features (notifications, API access).

This plan ensures a clear, step-by-step approach to build DefaultPublic MVP, delivering a fully functional, scalable, and user-friendly public feedback and roadmap tool for solo founders.
