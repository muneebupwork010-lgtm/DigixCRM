# SOC 2 Security Policies — DigixCRM

This document contains the policy skeletons required for a SOC 2 Type II audit. These reflect the technical controls we have implemented in the codebase.

---

## 1. Access Control Policy (CC6.1)
**Control:** Access to the DigixCRM production environment and sensitive data is restricted based on the principle of least privilege.
- **Authentication**: All production access requires Multi-Factor Authentication (MFA).
- **Sessions**: JWT sessions are limited to 12 hours.
- **Account Lockout**: Accounts are locked for 15 minutes after 5 consecutive failed attempts.
- **Review**: User access roles (ADMIN, MANAGER, etc.) are reviewed quarterly.

## 2. Change Management Policy (CC8.1)
**Control:** Changes to the DigixCRM codebase are tested and approved before being deployed to production.
- **Build Integrity**: All production builds must pass automated TypeScript and ESLint checks.
- **Code Review**: Significant changes (e.g., database schema updates) require peer review.
- **Audit Logs**: All administrative changes to the platform are recorded in the system audit logs.

## 3. Incident Response Plan (CC7.3)
**Control:** DigixCRM maintains a process for identifying, reporting, and responding to security incidents.
- **Identification**: Unusual login activity (rate-limited endpoints) or health check failures (database disconnects) trigger internal alerts.
- **Response**: The technical owner will rotate all production secrets immediately upon a confirmed breach.
- **Post-Mortem**: Every incident requires a written summary and a remediation plan.

## 4. Data Protection Policy (C1.1)
**Control:** Sensitive data is protected at rest and in transit.
- **Encryption in Transit**: All traffic is forced over HTTPS using HSTS headers.
- **Encryption at Rest**: Sensitive third-party credentials (API keys, SMTP passwords) are encrypted using AES-256-GCM before database storage.
- **Backups**: Database backups are performed daily and stored in a separate, encrypted bucket.

---

## Technical Evidence (For Auditors)
- **Encryption Logic**: [src/lib/encryption.ts](file:///c:/Users/SG/Desktop/Projects/digixcrm_live/src/lib/encryption.ts)
- **Auth Hardening**: [src/lib/auth.ts](file:///c:/Users/SG/Desktop/Projects/digixcrm_live/src/lib/auth.ts)
- **Audit Logging**: [src/lib/actions/audit.ts](file:///c:/Users/SG/Desktop/Projects/digixcrm_live/src/lib/actions/audit.ts)
- **Security Headers**: [next.config.ts](file:///c:/Users/SG/Desktop/Projects/digixcrm_live/next.config.ts)
