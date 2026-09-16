# RingCentral Calling — Setup (Phase 1: Embeddable softphone)

Reps make/receive calls through a browser softphone (headset + mic). Every
completed call is auto-logged as a `CALL` activity on the lead/deal it was
started from. The softphone is a floating widget mounted once at the dashboard
shell, so calls survive page navigation.

## 1. Register a RingCentral app

1. Go to the [RingCentral Developer Console](https://developers.ringcentral.com/) → **Create App**.
2. **App type:** *Browser-based (Single-page web app / public client)*. Embeddable
   requires a public client id (no secret in the browser).
3. **OAuth Redirect URI** — add exactly:
   ```
   https://apps.ringcentral.com/integration/ringcentral-embeddable/latest/redirect.html
   ```
4. **Scopes / permissions:** enable at minimum
   `VoIP Calling (WebRTC)`, `Call Control`, `Read Call Log`, `Read Contacts`, `Read Presence`.
5. Copy the **Client ID**.

> Each rep logs in with **their own** RingCentral credentials inside the widget,
> so caller ID and call logs attribute to the right person. You register the app
> once; you do **not** store per-user tokens — Embeddable handles OAuth itself.

## 2. Configure environment

In `.env` (and your hosting provider's env settings):

```env
NEXT_PUBLIC_RINGCENTRAL_CLIENT_ID="your_app_client_id"
# Sandbox while testing, production when live:
NEXT_PUBLIC_RINGCENTRAL_SERVER="https://platform.devtest.ringcentral.com"
```

These are `NEXT_PUBLIC_*` because the Embeddable adapter runs in the browser.
Restart `next dev` / rebuild after changing them (Next.js inlines public envs at build).

If `NEXT_PUBLIC_RINGCENTRAL_CLIENT_ID` is unset, the dialer is disabled and the
**Call** buttons no-op — nothing breaks.

## 3. How it works in the app

- **Global widget:** [`src/components/integrations/ringcentral-dialer.tsx`](src/components/integrations/ringcentral-dialer.tsx)
  injects the adapter and is mounted once in
  [`src/app/dashboard/layout.tsx`](src/app/dashboard/layout.tsx).
- **Click-to-dial:** any component calls `dial(...)` from
  [`src/lib/dialer.ts`](src/lib/dialer.ts). Wired today on the lead panel
  (phone number + **Call** button) and the deal panel (**Call** button).
- **Auto-logging:** on `rc-call-end-notify`, the widget triggers the
  `logCall` server action in
  [`src/lib/actions/activities.ts`](src/lib/actions/activities.ts), which writes a
  `CALL` activity scoped to the user's active workspace and linked to the
  originating lead/deal. The open panel refreshes via the
  `digix:rc-call-logged` event.

## 4. Test

1. Set the sandbox env vars, start the app, open a lead with a phone number.
2. Click the number or the **Call** button → the softphone pops up; log in with a
   RingCentral **sandbox** user the first time.
3. Place the call, hang up → a `📞 Outbound call …` activity appears in the lead's
   feed and under **Dashboard → Activities**.

## Phase 2 (later, optional)

Replace the Embeddable iframe UI with the RingCentral **Web Phone (WebRTC) SDK**
for a fully brand-native softphone inside the lead panel. The `dial()` bridge and
`logCall` action stay the same — only the widget layer changes.
