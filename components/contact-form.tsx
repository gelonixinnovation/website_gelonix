"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "dd924129-555c-42ad-8c74-c415bebd65c4",

            subject: `New Website Inquiry from ${form.name}`,

            name: form.name,
            email: form.email,
            company: form.company || "Not provided",
            message: form.message,
          }),
        }
      );

      const result = await response.json();

      if (!result.success) {
        throw new Error(
          result.message || "Form submission failed"
        );
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Web3Forms error:", error);

      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

        {/* Name */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-white/50">
            Name *
          </label>

          <input
            type="text"
            required
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full rounded-lg border border-[#27272a] bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-emerald-500/50"
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-white/50">
            Email *
          </label>

          <input
            type="email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full rounded-lg border border-[#27272a] bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-emerald-500/50"
            placeholder="you@company.com"
          />
        </div>

      </div>

      {/* Company */}
      <div>
        <label className="mb-1.5 block text-xs font-medium text-white/50">
          Company
        </label>

        <input
          type="text"
          value={form.company}
          onChange={(e) =>
            setForm({
              ...form,
              company: e.target.value,
            })
          }
          className="w-full rounded-lg border border-[#27272a] bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-emerald-500/50"
          placeholder="Company name (optional)"
        />
      </div>

      {/* Project Details */}
      <div>
        <label className="mb-1.5 block text-xs font-medium text-white/50">
          Project Details *
        </label>

        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
          className="w-full resize-none rounded-lg border border-[#27272a] bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-emerald-500/50"
          placeholder="Tell us about your project, scope, and timeline..."
        />
      </div>

      {/* Success message */}
      {status === "success" && (
        <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
          <CheckCircle2 className="h-4 w-4" />

          Thank you! We&apos;ll get back to you within 24 hours.
        </div>
      )}

      {/* Error message */}
      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle className="h-4 w-4" />

          Something went wrong. Please try again.
        </div>
      )}

      {/* Submit button */}
      <LiquidButton
        type="submit"
        size="lg"
        className="w-full"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Project Inquiry"
        )}
      </LiquidButton>
    </form>
  );
}