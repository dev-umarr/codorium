# React + Vite

## Calendly booking

The frontend uses the custom booking modal and calls the `calendly-booking` Supabase Edge Function. Configure the Calendly API credentials as Supabase secrets; do not add them to `.env` or frontend code:

```sh
supabase secrets set CALENDLY_PAT=your-calendly-personal-access-token CALENDLY_EVENT_TYPE_UUID=your-event-type-uuid
supabase functions deploy calendly-booking
```

The same values can be added in Supabase Dashboard under **Project Settings -> Edge Functions -> Secrets**. `CALENDLY_EVENT_TYPE_UUID` is the UUID from the Calendly event type URI. For backwards compatibility, the function also accepts `CALENDLY_API_KEY`, `CALENDLY_ACCESS_TOKEN`, and `CALENDLY_EVENT_TYPE_URI`. The existing inbound webhook additionally requires `CALENDLY_WEBHOOK_SECRET`.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
