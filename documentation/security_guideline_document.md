# DefaultPublic Security Guidelines & Implementation Plan

This document outlines security best practices tailored for DefaultPublic, ensuring we meet OWASP Top 10 and project-specific requirements. It is divided into two parts:

1. Security Guidelines by Domain
2. Phased Implementation Plan

---

## 1. Security Guidelines by Domain

### 1.1 Authentication & Access Control

- **Founders (Clerk Auth + Email/Social)**
  - Enforce MFA for all founder accounts (email/SMS or TOTP).
  - Enforce strong password policy: minimum 12 characters, uppercase, lowercase, number, symbol.
  - Leverage Clerk’s built-in session management; configure idle timeout (15 min) and absolute timeout (24 h).
  - Use HttpOnly, Secure, SameSite=Strict cookies for sessions.
  - Prevent session fixation by regenerating session ID on login.
  - Implement RBAC: 3 roles (Founder, Contributor, Moderator). All sensitive API routes must check role scope server-side.

- **Public Contributors**
  - Lightweight signup: name/handle, optional email (validate format, confirm ownership).
  - Issue short-lived JWTs (exp ≤ 1 h) for API calls; store signing key in secrets manager.

### 1.2 Input Handling & Processing

- **API Layer (Node.js/TypeScript Route Handlers)**
  - Use Zod or Joi for schema validation on all inputs (feedback text, feature requests, embed config, etc.).
  - Sanitize rich text input to prevent XSS (use `DOMPurify` or similar for any HTML).
  - Parameterize all Supabase/SQL queries via prepared statements or Supabase client to prevent injection.
  - Restrict file uploads (if added): allow only whitelisted MIME types, max size 2 MB, store outside webroot on Supabase Storage with private ACL.

- **Embed Widget**
  - Validate configuration options against a strict allow-list.
  - Sandbox widget iframe; set `Content-Security-Policy: sandbox`.

### 1.3 Data Protection & Privacy

- **Encryption**
  - Enforce TLS 1.2+ on frontend (Vercel) and backend (Supabase) endpoints.
  - Encrypt at-rest data: use Supabase’s built-in disk encryption.
  - Hash passwords with bcrypt/Argon2 (delegated to Clerk).

- **Secrets Management**
  - Store API keys (OpenAI, Stripe, Supabase) in Vercel Environment Variables or a dedicated vault.
  - Never commit `.env` or secret files to Git.

- **Logging & Masking**
  - Log only non-PII in server logs. Mask any PII (user IDs, emails).
  - Centralize logs in a secure, access-controlled service (e.g., Datadog).

- **Data Deletion & GDPR**
  - Provide “Delete Account” API: cascade-delete PII from Supabase, purge backups within 30 days.
  - Document data retention policy in Privacy Policy.

### 1.4 API & Service Security

- **HTTPS Enforcement**
  - Redirect all HTTP traffic to HTTPS at Vercel.
  - Use HSTS with `max-age=31536000; includeSubDomains; preload`.

- **Rate Limiting & Throttling**
  - Implement rate limits per IP / JWT on feedback endpoints (e.g., 10 reqs/minute) using Supabase Edge Functions or a middleware.

- **CORS**
  - Restrict CORS to known origins: your domain and any embed widget domains.

- **Versioning & Least Privilege**
  - Version API routes under `/api/v1/…`, plan for `/v2` for breaking changes.
  - Ensure each API Key (OpenAI, Stripe) has minimal scope.

### 1.5 Web Application Security Hygiene

- **Security Headers** (apply via `next.config.js` headers or Vercel config)
  - `Content-Security-Policy`: restrict sources for scripts, styles, images.
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: same-origin`
  - `Strict-Transport-Security` as above.

- **CSRF Protection**
  - For any state-changing form (e.g., profile update), use synchronizer CSRF tokens (NextAuth/Clerk supports this).

- **Cookie Security**
  - `HttpOnly`, `Secure`, `SameSite=Strict` on all cookies storing sessions or CSRF tokens.

- **Client Storage**
  - Avoid `localStorage` for tokens; store only short-lived JWTs in-memory or `sessionStorage` (with caution).

- **Third-Party Integrity**
  - Use Subresource Integrity (SRI) for any third-party scripts.

### 1.6 Infrastructure & Configuration Management

- **Hosting Hardening (Vercel, Supabase)**
  - Disable any debug or preview endpoints in production.
  - Limit Supabase database user to only necessary CRUD privileges.
  - Disable unused network ports (default Supabase ports only).

- **TLS Configuration**
  - Verify Supabase and Vercel both support TLS 1.2+; disable TLS < 1.2.

- **Patch Management**
  - Schedule monthly dependency updates; monitor with Dependabot or SCA tool.

- **File Permissions**
  - Ensure build artifacts and logs have restrictive permissions (owner-only read/write).

### 1.7 Dependency Management

- **Secure Dependencies**
  - Lock versions via `package-lock.json`/`yarn.lock`.
  - Run `npm audit` on CI; fail build on high/critical vulnerabilities.

- **Minimal Footprint**
  - Remove unused packages (e.g., heavy UI libs) to reduce attack surface.

---

## 2. Implementation Plan

| Phase | Timeline       | Key Activities                                                   | Owner         |
|-------|----------------|------------------------------------------------------------------|---------------|
| 1. Discovery & Audit | Week 1           | - Review current infra & codebase
- Threat modeling workshop
- Identify high-risk gaps (Auth, secrets, input) | Security Lead |
| 2. Core Auth Hardening | Week 2–3        | - Enable MFA in Clerk
- Enforce password policy
- Session timeout config
- Implement RBAC checks | Backend Team  |
| 3. Input & API Security | Week 4–5        | - Add Zod schemas & sanitization
- Parameterized queries
- Rate limiting middleware
- Harden CORS & headers | Full Stack Team |
| 4. Data & Secrets Protection | Week 6–7        | - Migrate secrets to vault
- Enable TLS everywhere
- Configure GDPR deletion flows | DevOps        |
| 5. Infrastructure & CI/CD | Week 8–9        | - Configure SCA/Dependabot
- Harden Vercel & Supabase settings
- Setup log centralization | DevOps        |
| 6. Penetration Testing & Review | Week 10         | - Third-party pentest (OWASP Top 10)
- Remediate findings
- Final security review | Security Lead |
| 7. Monitoring & Continuous Improvement | Ongoing Monthly | - Monthly dependency audit
- Quarterly threat review
- Incident response drills | All Teams     |

*Note: Adjust timelines based on team capacity.*

---

**By adhering to these guidelines and the phased plan, DefaultPublic will maintain a robust security posture, enabling solo founders to build in public with confidence.**