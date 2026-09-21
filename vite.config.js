import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com",
  "script-src-elem 'self' 'unsafe-inline' https://js.stripe.com",
  "connect-src 'self' https://wkvwnqtdvbfadzzdbice.supabase.co https://api.stripe.com ws://localhost:5173",
  "frame-src 'self' https://js.stripe.com https://www.openstreetmap.org",
  "img-src 'self' data: blob: https://js.stripe.com https://*.stripe.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
].join('; ')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    headers: {
      'Content-Security-Policy': contentSecurityPolicy,
    },
  },
  preview: {
    headers: {
      'Content-Security-Policy': contentSecurityPolicy,
    },
  },
})
