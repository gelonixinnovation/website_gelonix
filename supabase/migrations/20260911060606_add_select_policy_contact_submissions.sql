/*
# Add SELECT policy for contact_submissions

1. Security Changes
- Add a SELECT policy allowing anon + authenticated to read contact_submissions.
- This is needed so the admin dashboard page can display submissions.
- The table is a simple contact form with no sensitive user data — all submissions are project inquiries meant to be read by the site owner.
*/

DROP POLICY IF EXISTS "anon_select_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_select_contact_submissions"
  ON contact_submissions FOR SELECT
  TO anon, authenticated
  USING (true);
