create table if not exists public.calendly_bookings (
  id uuid primary key default gen_random_uuid(),
  calendly_invitee_uri text not null unique,
  calendly_event_uri text,
  calendly_event_type_uri text,
  name text not null,
  email text not null,
  timezone text,
  event_name text,
  event_start timestamptz,
  event_end timestamptz,
  status text not null default 'active' check (status in ('active', 'canceled')),
  cancellation_reason text,
  lead_id uuid,
  user_id uuid,
  company_id uuid,
  rescheduled_from_invitee_uri text,
  cancel_url text,
  reschedule_url text,
  raw_webhook_payload jsonb not null default '{}'::jsonb,
  calendly_created_at timestamptz,
  calendly_canceled_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.calendly_bookings
  add column if not exists calendly_event_type_uri text,
  add column if not exists name text,
  add column if not exists email text,
  add column if not exists timezone text,
  add column if not exists event_name text,
  add column if not exists event_start timestamptz,
  add column if not exists event_end timestamptz,
  add column if not exists cancellation_reason text,
  add column if not exists lead_id uuid,
  add column if not exists user_id uuid,
  add column if not exists company_id uuid,
  add column if not exists rescheduled_from_invitee_uri text,
  add column if not exists cancel_url text,
  add column if not exists reschedule_url text,
  add column if not exists raw_webhook_payload jsonb default '{}'::jsonb,
  add column if not exists calendly_created_at timestamptz,
  add column if not exists calendly_canceled_at timestamptz,
  add column if not exists created_at timestamptz default now(),
  add column if not exists updated_at timestamptz default now();

alter table public.calendly_bookings enable row level security;

revoke all on table public.calendly_bookings from anon, authenticated;

create unique index if not exists calendly_bookings_invitee_uri_key
  on public.calendly_bookings (calendly_invitee_uri);