import { createClient } from "npm:@supabase/supabase-js@2.58.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const recipient = Deno.env.get("NOTIFY_EMAIL") ?? "gelonixinnovation@gmail.com";
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (recipient && resendApiKey) {
      const emailBody = `
New project inquiry from Gelonix Innovation website:

Name: ${name}
Email: ${email}
Company: ${company || "Not specified"}

Message:
${message}

---
Submitted at: ${new Date().toISOString()}
`;

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Gelonix Innovation <onboarding@resend.dev>",
          to: [recipient],
          subject: `New Project Inquiry from ${name}${company ? ` (${company})` : ""}`,
          text: emailBody,
        }),
      });
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
