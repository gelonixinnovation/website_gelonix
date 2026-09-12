"use client";

import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { SiWhatsapp } from "react-icons/si";
import { ContactForm } from "@/components/contact-form";
import {
  Database,
  FileText,
  BarChart3,
  Globe,
  ArrowRight,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Users,
  Clock,
  Mail,
  MapPin,
  ArrowUp,
  Phone,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: Database,
    title: "AI Data Annotation",
    href: "/services/ai-data-annotation",
    description:
      "AI data annotation services for image, video, text, audio, and document datasets supporting AI and machine learning teams.",
    features: [
      "Fast turnaround times",
      "Strict QA processes",
      "Highly scalable teams",
      "Pilot projects available",
    ],
    glowClass: "glow-emerald",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
  },
  {
    icon: FileText,
    title: "Data Operations",
    description:
      "Data operations outsourcing covering data entry, web research, database enrichment, data cleansing, and validation.",
    features: [
      "Excel/CSV processing",
      "Lead research & generation",
      "Database enrichment",
      "Data cleansing & validation",
    ],
    glowClass: "glow-cyan",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
  },
  {
    icon: BarChart3,
    title: "Market Research",
    description:
      "Market research outsourcing and survey fieldwork, including respondent recruitment, data collection, surveys, and fieldwork management.",
    features: [
      "B2B/B2C respondent recruitment",
      "Phone & online surveys",
      "Data collection & cleaning",
      "Full fieldwork management",
    ],
    glowClass: "glow-amber",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
  },
];

const countries = [
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇬🇧", name: "UK" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇦🇪", name: "UAE" },
  { flag: "🇸🇬", name: "Singapore" },
  { flag: "🇪🇺", name: "Europe" },
  { flag: "🇮🇳", name: "India" },
];

const stats = [
  { icon: Users, value: "15+", label: "Global Clients" },
  { icon: Globe, value: "8+", label: "Countries Served" },
  { icon: Clock, value: "24h", label: "Avg Response Time" },
  { icon: ShieldCheck, value: "100%", label: "QA on Every Task" },
];

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

export default function GelonixLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500/30">
      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-[#27272a]/50 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0">
  <img
    src="/logo2.png"
    alt="Gelonix Innovation"
    className="h-8 w-auto object-contain"
  />

  <span className="text-sm font-bold tracking-tight">
    Gelonix <span className="text-white/40">Innovation</span>
  </span>
</div>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a
            href="/"
    className="text-sm text-white/60 transition-colors hover:text-white">
    Home
  </a>
            
            <a href="#services" className="text-sm text-white/60 transition-colors hover:text-white">
              Services
            </a>
            <a href="#global" className="text-sm text-white/60 transition-colors hover:text-white">
              Global Reach
            </a>
            <a href="#contact" className="text-sm text-white/60 transition-colors hover:text-white">
              Contact
            </a>
          </div>
          <button
            onClick={scrollToContact}
            className="rounded-full border border-[#27272a] bg-white/5 px-5 py-2 text-xs font-medium text-white transition-colors hover:border-white/20 hover:bg-white/10"
          >
            Start a Pilot
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pt-32 pb-16">
        <WebGLShader />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

        <div className="relative z-10 w-full max-w-5xl px-6">
          <div className="border border-[#27272a] p-2 rounded-2xl bg-black/40 backdrop-blur-sm">
            <main className="relative overflow-hidden rounded-xl border border-[#27272a] px-4 py-16 md:px-16">
              <div className="mb-6 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#27272a] bg-black/40 px-4 py-1.5">
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  </span>
                  <p className="text-xs font-medium text-emerald-400">
                    Available for New Projects
                  </p>
                </div>
              </div>

              <h1 className="mb-6 text-center text-4xl font-extrabold tracking-tighter text-white md:text-7xl">
  Scale Your{" "}
  <span className="text-gradient-emerald">
    AI, Data &amp; Research
  </span>{" "}
  Operations Globally
</h1>
              <p className="mx-auto max-w-2xl px-6 text-center text-sm text-white/60 md:text-lg">
  Gelonix Innovation provides India-based delivery teams for AI data
  annotation, data operations, and market research. Scale your projects
  with reliable outsourcing and flexible overflow capacity that integrates
  seamlessly with your existing workflow.
</p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <LiquidButton
                  size="xl"
                  onClick={scrollToContact}
                  className="w-full sm:w-auto"
                >
                  Start a Pilot Project
                  <ArrowRight className="h-4 w-4" />
                </LiquidButton>
                <a
                  href="#services"
                  className="w-full rounded-full border border-[#27272a] px-8 py-6 text-center text-lg text-white/70 transition-colors hover:bg-white/5 sm:w-auto"
                >
                  Explore Services
                </a>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <section className="border-y border-[#27272a] bg-black/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 px-6 py-10 text-center"
            >
              <stat.icon className="h-5 w-5 text-white/30" />
              <div className="text-3xl font-bold tracking-tight text-white">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-white/40">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-emerald-400">
              What We Do
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              Core Capabilities:- AI Data, Data Operations &amp; Market Research Services
            </h2>
            <p className="mx-auto max-w-xl text-white/60">
              End-to-end outsourced delivery teams for AI data annotation, data processing, research support, and market research fieldwork. Gelonix helps global
              companies scale operations with flexible India-based teams. 
              We handle the heavy lifting so you can focus on
              building.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service, i) => (
              <a
                key={i}
                href={service.href}
                className={`group relative overflow-hidden rounded-2xl border border-[#27272a] bg-[#0a0a0a] p-8 transition-all duration-300 hover:border-white/20 hover:${service.glowClass}`}
              >
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-[#27272a] ${service.iconBg}`}
                >
                  <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                </div>
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="mb-6 text-sm text-white/60">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-xs text-white/50"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500/60" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL REACH SECTION */}
      <section
        id="global"
        className="relative border-t border-[#27272a] bg-black/50 py-24"
      >
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Globe className="mx-auto mb-6 h-12 w-12 text-white/20" />
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-4xl">
            Trusted by 15+ Companies Globally
          </h2>
          <p className="mb-12 text-white/60">
            Seamlessly integrating with teams across major international markets.
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {countries.map((country, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-full border border-[#27272a] bg-[#111] px-5 py-2.5 text-sm font-medium text-white/70 transition-colors hover:border-white/20 hover:text-white"
              >
                <span className="text-lg">{country.flag}</span>
                {country.name}
              </div>
            ))}
          </div>
        </div>

        {/* MARQUEE */}
        <div className="relative mt-16 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-black to-transparent" />
          <div className="flex w-max animate-marquee gap-4">
            {[...countries, ...countries].map((country, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-full border border-[#27272a] bg-[#111] px-6 py-3 text-base font-medium text-white/60"
              >
                <span className="text-xl">{country.flag}</span>
                {country.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
<section id="contact" className="relative py-24 px-6">
  <div className="mx-auto max-w-4xl">
    <div className="overflow-hidden rounded-3xl border border-[#27272a] bg-[#0a0a0a]">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* LEFT: CONTACT INFORMATION */}
        <div className="border-b border-[#27272a] p-10 md:border-b-0 md:border-r">
          
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-emerald-400">
            Get in Touch
          </p>

          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Start Your Pilot Project
          </h2>

          <p className="mb-8 text-sm text-white/60">
            Tell us about your project and we&apos;ll get back to you within
            24 hours with a tailored plan. No commitment required for pilot
            projects.
          </p>

          {/* CONTACT DETAILS */}
          <div className="space-y-4">

            {/* LOCATION */}
            <div className="flex items-center gap-3 text-sm text-white/60">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#27272a] bg-white/5">
                <MapPin className="h-4 w-4 text-emerald-400" />
              </div>

              <span>Delhi, India</span>
            </div>

            {/* EMAIL */}
            <a
              href="mailto:info@gelonix.in"
              className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#27272a] bg-white/5">
                <Mail className="h-4 w-4 text-emerald-400" />
              </div>

              <span>info@gelonix.in</span>
            </a>

            {/* MOBILE */}
            <a
              href="tel:+919311093599"
              className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#27272a] bg-white/5">
                <Phone className="h-4 w-4 text-emerald-400" />
              </div>

              <span>+91 93110 93599</span>
            </a>

            {/* WHATSAPP */}
<a
  href="https://wa.me/919311093599"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
>
  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#27272a] bg-white/5">
    <SiWhatsapp className="h-4 w-4 text-emerald-400" />
  </div>

  <span>+91 93110 93599</span>
</a>

            {/* RESPONSE TIME */}
            <div className="flex items-center gap-3 text-sm text-white/60">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#27272a] bg-white/5">
                <Clock className="h-4 w-4 text-emerald-400" />
              </div>

              <span>24-hour response time</span>
            </div>

          </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="p-10">
          <ContactForm />
        </div>

      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="border-t border-[#27272a] py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0">
  <img
    src="/logo2.png"
    alt="Gelonix Innovation"
    className="h-8 w-auto object-contain"
  />

  <span className="text-sm font-bold tracking-tight">
    Gelonix <span className="text-white/40">Innovation</span>
  </span>
</div>
            </div>

            <div className="flex items-center gap-6 text-sm text-white/40">
              <a href="#services" className="transition-colors hover:text-white">
                Services
              </a>
              <a href="#global" className="transition-colors hover:text-white">
                Global Reach
              </a>
              <a href="#contact" className="transition-colors hover:text-white">
                Contact
              </a>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#27272a] bg-white/5 text-white/60 transition-colors hover:border-white/20 hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 border-t border-[#27272a] pt-8 text-center text-sm text-white/40">
            <p className="flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              Gelonix Innovation — Headquartered in Delhi, India
            </p>
            <p>© {new Date().getFullYear()} Gelonix Innovation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
