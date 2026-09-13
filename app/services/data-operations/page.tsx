import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Search,
  ShieldCheck,
  Zap,
  Menu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Data Operations Outsourcing Services | Gelonix Innovation",
  description:
    "Reliable data operations outsourcing for data entry, web research, database enrichment, data cleansing, and validation. Scale your operations with India-based delivery teams.",  
  keywords: [
    "data operations outsourcing",
    "data operations services",
    "data processing outsourcing",
    "data entry outsourcing India",
    "web research outsourcing",
    "database enrichment services",
    "data cleansing services",
    "data validation services",
    "data management outsourcing",
    "outsourced data operations",
    "India data operations",
    "Gelonix Innovation",
  ],
  alternates: {
    canonical: "https://gelonix.in/services/data-operations",
  },
  openGraph: {
    title: "Data Operations Outsourcing Services | Gelonix Innovation",
    description:
      "India-based delivery teams for data entry, web research, database enrichment, data cleansing, and validation.",
    url: "https://gelonix.in/services/data-operations",
    siteName: "Gelonix Innovation",
    type: "website",
  },
};

const services = [
  {
    icon: Database,
    title: "Data Entry & Processing",
    description:
      "Accurate data entry and structured processing for spreadsheets, databases, documents, and operational workflows.",
  },
  {
    icon: Search,
    title: "Web Research",
    description:
      "Structured online research and information gathering to support business, sales, and research teams.",
  },
  {
    icon: Database,
    title: "Database Enrichment",
    description:
      "Research and enrich existing databases with relevant information while maintaining consistent data structures.",
  },
  {
    icon: ShieldCheck,
    title: "Data Cleansing & Validation",
    description:
      "Identify inconsistencies, duplicates, missing information, and data-quality issues before they affect your workflow.",
  },
  {
    icon: Zap,
    title: "Lead Research & Generation",
    description:
      "Research potential business prospects and organize relevant information for sales and business development teams.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    description:
      "Defined quality-control processes help maintain accuracy and consistency throughout operational data projects.",
  },
];

const benefits = [
  "India-based delivery teams",
  "Flexible project capacity",
  "Scalable operational support",
  "Structured workflows",
  "Quality-controlled delivery",
  "Fast response times",
];

const faqs = [
  {
    question: "What data operations services does Gelonix provide?",
    answer:
      "Gelonix provides outsourced data entry, data processing, web research, database enrichment, data cleansing, data validation, and lead research services.",
  },
  {
    question: "Can Gelonix support ongoing data operations?",
    answer:
      "Yes. Our delivery teams can support both project-based requirements and ongoing operational workloads.",
  },
  {
    question: "Can data operations capacity scale with project volume?",
    answer:
      "Yes. Our India-based delivery model allows teams and operational capacity to scale according to project requirements and workload.",
  },
  {
    question: "Where are your data operations teams based?",
    answer:
      "Our delivery teams are based in India and support international clients and projects.",
  },
];

export default function DataOperationsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Data Operations Outsourcing Services",
    provider: {
      "@type": "Organization",
      name: "Gelonix Innovation",
      url: "https://gelonix.in",
    },
    description:
      "Outsourced data operations services including data entry, web research, database enrichment, data cleansing, and validation.",
    areaServed: "Worldwide",
    serviceType: "Data Operations Outsourcing",
    url: "https://gelonix.in/services/data-operations",
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      {/* Navigation */}
<nav className="border-b border-[#27272a] bg-black/90">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

    {/* Logo */}
    <Link href="/" className="flex items-center gap-2">
      <img
        src="/logo2.png"
        alt="Gelonix Innovation"
        className="h-8 w-auto object-contain"
      />
      <span className="text-sm font-bold tracking-tight">
        Gelonix <span className="text-white/40">Innovation</span>
      </span>
    </Link>

    {/* Desktop Navigation */}
    <div className="hidden items-center gap-8 md:flex">
      <Link
        href="/"
        className="text-sm text-white/60 transition-colors hover:text-white"
      >
        Home
      </Link>

      <Link
        href="/#services"
        className="text-sm text-white/60 transition-colors hover:text-white"
      >
        Services
      </Link>

      <Link
        href="/#global"
        className="text-sm text-white/60 transition-colors hover:text-white"
      >
        Global Reach
      </Link>

      <Link
        href="/#contact"
        className="text-sm text-white/60 transition-colors hover:text-white"
      >
        Contact
      </Link>
    </div>

    {/* Mobile Menu */}
    <details className="relative md:hidden">
      <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-[#27272a] bg-white/5 text-white">
        <Menu className="h-5 w-5" />
      </summary>

      <div className="absolute right-0 top-12 z-50 w-52 rounded-xl border border-[#27272a] bg-black/95 p-3 shadow-xl backdrop-blur-xl">

        <Link
          href="/"
          className="block rounded-lg px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white"
        >
          Home
        </Link>

        <Link
          href="/#services"
          className="block rounded-lg px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white"
        >
          Services
        </Link>

        <Link
          href="/#global"
          className="block rounded-lg px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white"
        >
          Global Reach
        </Link>

        <Link
          href="/#contact"
          className="block rounded-lg px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white"
        >
          Contact
        </Link>

      </div>
    </details>

    {/* Start a Pilot */}
    <Link
      href="/#contact"
      className="rounded-full border border-[#27272a] bg-white/5 px-5 py-2 text-xs font-medium text-white transition-colors hover:border-white/20 hover:bg-white/10"
    >
      Start a Pilot
    </Link>

  </div>
</nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#27272a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.12),transparent_45%)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-xs font-medium text-cyan-400">
            <Database className="h-4 w-4" />
            Data Operations Outsourcing
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">
            Data Operations Outsourcing Services
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/60 md:text-lg">
            Reliable outsourced data operations for data entry, web research,
            database enrichment, data cleansing, validation, and lead research.
            Gelonix Innovation provides India-based delivery teams that help
            global companies scale operational capacity.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:bg-white/90"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/#services"
              className="inline-flex items-center justify-center rounded-full border border-[#27272a] px-7 py-4 text-white/70 transition hover:bg-white/5"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-[#27272a] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-cyan-400">
              What We Handle
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Outsourced Data Operations Services
            </h2>

            <p className="mt-4 max-w-2xl text-white/60">
              Flexible operational support for businesses that need accurate,
              organized, and reliable data without increasing internal
              workload.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-[#27272a] bg-[#0a0a0a] p-7 transition hover:border-white/20"
              >
                <service.icon className="mb-5 h-6 w-6 text-cyan-400" />

                <h3 className="text-xl font-bold">{service.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Gelonix */}
      <section className="border-b border-[#27272a] bg-[#050505] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-cyan-400">
                Why Gelonix
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                Flexible data operations capacity for growing teams
              </h2>

              <p className="mt-5 leading-7 text-white/60">
                Gelonix Innovation works as an extension of your existing
                operations team. Our India-based delivery teams can handle
                repetitive and research-intensive data workflows while your
                internal team focuses on higher-value work.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-xl border border-[#27272a] bg-black p-5"
                >
                  <CheckCircle2 className="mb-3 h-5 w-5 text-cyan-400" />

                  <p className="text-sm font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-[#27272a] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-cyan-400">
              Our Process
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              A straightforward outsourcing workflow
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#27272a] p-7">
              <Search className="mb-5 h-6 w-6 text-cyan-400" />

              <h3 className="text-xl font-bold">1. Understand</h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                We understand your data workflow, requirements, volumes,
                quality standards, and timelines.
              </p>
            </div>

            <div className="rounded-2xl border border-[#27272a] p-7">
              <ShieldCheck className="mb-5 h-6 w-6 text-cyan-400" />

              <h3 className="text-xl font-bold">2. Deliver</h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Our delivery team follows your process with defined quality
                checks and operational controls.
              </p>
            </div>

            <div className="rounded-2xl border border-[#27272a] p-7">
              <Zap className="mb-5 h-6 w-6 text-cyan-400" />

              <h3 className="text-xl font-bold">3. Scale</h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Increase operational capacity as your workload and business
                requirements grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-[#27272a] py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-cyan-400">
              FAQ
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Data Operations Outsourcing Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#27272a] bg-[#0a0a0a] p-6"
              >
                <summary className="cursor-pointer list-none font-semibold">
                  {faq.question}
                </summary>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Need reliable data operations capacity?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            Tell us about your data workflow and we can discuss a pilot,
            delivery process, and scalable operational support.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-white/90"
          >
            Start a Pilot Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#27272a] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Gelonix Innovation.</p>

          <Link href="/" className="transition hover:text-white">
            Back to Gelonix Innovation
          </Link>
        </div>
      </footer>
    </main>
  );
}