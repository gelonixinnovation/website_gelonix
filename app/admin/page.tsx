"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-client";
import { Loader2, Mail, MapPin, Clock, ArrowLeft, Inbox } from "lucide-react";

interface Submission {
  id: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  created_at: string;
}

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setError(true);
      } else {
        setSubmissions(data || []);
      }
      setLoading(false);
    };
    fetchSubmissions();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <Loader2 className="h-8 w-8 animate-spin text-emerald-400" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <p className="text-red-400">Failed to load submissions.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <a
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to site
        </a>

        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#27272a] bg-white/5">
            <Inbox className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Inbox</h1>
            <p className="text-sm text-white/50">
              {submissions.length} {submissions.length === 1 ? "submission" : "submissions"} received
            </p>
          </div>
        </div>

        {submissions.length === 0 ? (
          <div className="rounded-2xl border border-[#27272a] bg-[#0a0a0a] p-16 text-center">
            <Inbox className="mx-auto mb-4 h-10 w-10 text-white/20" />
            <p className="text-white/40">No submissions yet. New project inquiries will appear here.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((s) => (
              <div
                key={s.id}
                className="rounded-2xl border border-[#27272a] bg-[#0a0a0a] p-6 transition-colors hover:border-white/10"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{s.name}</h3>
                    {s.company && (
                      <p className="text-sm text-white/40">{s.company}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/30">
                    <Clock className="h-3 w-3" />
                    {new Date(s.created_at).toLocaleString()}
                  </div>
                </div>

                <div className="mb-4 flex flex-wrap gap-4 text-sm text-white/50">
                  <a
                    href={`mailto:${s.email}`}
                    className="flex items-center gap-2 transition-colors hover:text-emerald-400"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    {s.email}
                  </a>
                </div>

                <div className="rounded-lg border border-[#27272a] bg-black/40 p-4 text-sm text-white/70">
                  {s.message}
                </div>

                <div className="mt-4 flex gap-2">
                  <a
                    href={`mailto:${s.email}?subject=Re: Your project inquiry to Gelonix Innovation`}
                    className="rounded-full border border-[#27272a] bg-white/5 px-4 py-2 text-xs font-medium text-white transition-colors hover:border-white/20 hover:bg-white/10"
                  >
                    Reply via Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
