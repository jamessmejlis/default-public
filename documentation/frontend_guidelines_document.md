# Frontend Guideline Document

This document outlines the frontend setup for the DefaultPublic web app. It covers architecture, design principles, styling, component structure, state management, routing, performance, testing, and overall guidelines. By following these rules, anyone can understand and contribute to the frontend without needing a deep technical background.

## 1. Frontend Architecture

### 1.1 Overview

*   **Framework**: Next.js (React framework) with the App Router for file-based routing and server-side rendering optionality.
*   **Language**: TypeScript for type safety and clearer code.
*   **Styling**: Tailwind CSS for utility-first styling.
*   **Component Library**: shadcn/ui—prebuilt, accessible, customizable React components.
*   **Auth & Data**: Clerk Auth or Supabase Auth for authentication; Supabase for real-time data (PostgreSQL + Realtime).
*   **Hosting**: Vercel for frontend deployments; environment variables managed via Vercel dashboard.

### 1.2 Scalability & Maintainability

*   **File-Based Routing**: Organizes pages in `app/` or `pages/` folders so routes grow intuitively.
*   **Component-Based**: Small, focused React components that can be composed and reused.
*   **TypeScript**: Catches errors early and improves readability.
*   **Atomic Styling**: Tailwind classes minimize custom CSS, making it easier to maintain and update.
*   **Code Generation**: Bolt and Cursor tools for scaffolding and in-editor suggestions speed up new feature development.

### 1.3 Performance Support

*   **Server-Side Rendering (SSR) & Static Site Generation (SSG)** built into Next.js for fast initial loads and SEO.
*   **Code Splitting**: Next.js automatically splits code by page, reducing bundle size.
*   **Image Optimization**: Built-in Next.js Image component.
*   **Edge Caching**: Pages and API routes cached at the edge via Vercel.

## 2. Design Principles

### 2.1 Usability

*   Keep navigation simple: clear labels (e.g., “Embed”, “Share Roadmap”).
*   Provide consistent controls (buttons, input fields) across the app.
*   Use microcopy that’s short, action-oriented, and friendly.

### 2.2 Accessibility

*   Follow WCAG 2.1 standards.
*   Ensure 4.5:1 contrast ratio for text and background.
*   All interactive elements must be reachable via keyboard.
*   Use semantic HTML (`<button>`, `<nav>`, `<header>`, `<main>`).
*   Provide alt text for images and aria attributes for custom components.

### 2.3 Responsiveness

*   Design mobile-responsive. Tailwind’s responsive utilities (`sm:`, `md:`, `lg:`) adjust layouts.

*   Breakpoints:

    *   `sm` (≥640px) for tablets
    *   `md` (≥768px) for small laptops
    *   `lg` (≥1024px) for desktops

*   Roadmap columns stack vertically on narrow screens.

## 3. Styling and Theming

### 3.1 Styling Approach

*   **Tailwind CSS**: Utility classes for spacing, colors, typography.
*   No separate CSS files—styles are inline via class names.
*   Override Tailwind config in `tailwind.config.js` for custom colors and fonts.

### 3.2 Theming

*   Provide light and dark mode support (optional future enhancement).
*   Embed widget accepts a `themeColor` prop for host sites to customize primary accent.
*   Global CSS variables for brand colors can be toggled if we add themes later.

### 3.3 Visual Style

*   **Style**: Modern flat design with subtle shadows and rounded corners. Minimal glass-morphism (soft translucent panels) for modals or tooltips.

*   **Color Palette**:

    *   Jet Black: `#000000` (text, backgrounds)
    *   Crisp White: `#FFFFFF` (backgrounds)
    *   Electric Yellow: `#FFD700` (primary accent, highlights)
    *   Shock Red / Hot Coral: `#FF4040` (secondary accents)
    *   Deep Purple: `#800080 `(error, destructive actions)
    *   Saturated Blue: `#0000FF` (links, badges)

### 3.4 Typography

*   **Font Family**: `Roboto`, fallback `sans-serif`.
*   **Headings**: Bold, larger sizes (e.g., `text-2xl`, `text-3xl`).
*   **Body**: `text-base` with line-height `leading-6` for readability.

## 4. Component Structure

### 4.1 Organization

`/src /components # Reusable UI pieces (buttons, cards) /features # Feature-specific components (Roadmap, Feedback) /layout # Common layouts (MainLayout, EmbedLayout) /hooks # Custom React hooks /utils # Helpers (formatting, API clients) /styles # Global style overrides (if ever needed) /app # Next.js pages or App Router structure`

### 4.2 Reusability

*   Each component lives in its own folder with

    *   `index.tsx`
    *   `ComponentName.tsx`
    *   `ComponentName.test.tsx`
    *   `ComponentName.stories.tsx` (if using Storybook)

*   Expose a single entry point (`index.tsx`) to simplify imports.

### 4.3 Benefits of Component-Based Architecture

*   Isolates concerns: each component handles its own markup, styling, and logic.
*   Easier to test and document.
*   Faster onboarding: new devs can find and reuse existing components.

## 5. State Management

### 5.1 Approach

*   **Local State**: React `useState` for simple UI toggles and form inputs.
*   **Global State**: React Context for user session, theme settings, and feature-vote cache.
*   **Data Fetching & Caching**: useSWR or React Query (depending on team preference) to fetch from Supabase and handle caching, refetching, and loading states.

### 5.2 Data Flow

1.  Components call hooks (e.g., `useRoadmap()`) to fetch or mutate data.
2.  Hooks use the Supabase client or Next.js API routes.
3.  Global context provides user info and auth tokens.
4.  Updates propagate to UI, with optimistic updates for votes and comments.

## 6. Routing and Navigation

### 6.1 Routing

*   Next.js file-based routing in `/app` (App Router) or `/pages` (Pages Router).
*   Nested layouts: e.g., `/app/dashboard/layout.tsx` for dashboard wrapper.
*   Dynamic routes for roadmap IDs: `/app/roadmap/[slug]/page.tsx`.

### 6.2 Navigation

*   **Header Nav**: Logo (home), My Profile, Embed, Share Roadmap, Notifications.
*   **Sidebars or Tabs** (future small-team view) for Feedback vs. Roadmap vs. Analytics.
*   **Linking**: Use Next.js `Link` component for client-side transitions.
*   **Active States**: Clearly indicate current page with bold text or underline.

## 7. Performance Optimization

### 7.1 Code-Splitting & Lazy Loading

*   Use dynamic imports (`next/dynamic`) for heavy components (e.g., feedback clustering chart).
*   Defer third-party scripts (OpenAI embed, Stripe) when possible.

### 7.2 Asset Optimization

*   Next.js Image component for responsive, optimized images.
*   Compress SVGs and icons; use an icon font or React SVG components.

### 7.3 Caching & Revalidation

*   ISR (Incremental Static Regeneration) for landing pages and public roadmap pages.
*   SWR/React Query caches API data in memory and refetches in the background.
*   Edge caching via Vercel for static assets and API routes.

## 8. Testing and Quality Assurance

### 8.1 Unit Testing

*   **Jest** with **React Testing Library** for component tests.
*   Mock Supabase client and Clerk Auth for isolated tests.

### 8.2 Integration Testing

*   Combine multiple components and hooks to test flows (e.g., submit feedback → appear in list).

### 8.3 End-to-End (E2E)

*   **Cypress** (or **Playwright**) to simulate user journeys: signup, submit feature, upvote, share roadmap.

### 8.4 Storybook

*   Document and visually test UI components in isolation.
*   Add snapshots to guard against visual regressions.

### 8.5 CI/CD

*   **GitHub Actions** runs linting (`eslint`), type checks (`tsc`), tests, and Storybook accessibility checks on every pull request.

## 9. Conclusion and Overall Frontend Summary

We’ve built a clear, scalable, and maintainable frontend using Next.js, TypeScript, Tailwind CSS, and shadcn/ui. Our component-based structure, atomic styling approach, and emphasis on accessibility and performance align with our goal: a lightweight, public-first feedback and roadmap tool that’s easy to use and extend. By following these guidelines, the DefaultPublic team can ensure consistent UX, faster development, and a high-quality product that meets the needs of solo founders and small teams building in public.

Let’s keep these principles and practices in mind as we grow the app and add new features. Happy coding!
