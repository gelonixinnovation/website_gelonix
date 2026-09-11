/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) - the submitter's full name
  - `email` (text, not null) - the submitter's email address
  - `company` (text, nullable) - optional company name
  - `message` (text, not null) - the project inquiry message
  - `created_at` (timestamptz, default now()) - submission timestamp
2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT only (public contact form, no login required).
- No SELECT/UPDATE/DELETE policies — submissions are write-only from the frontend.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
