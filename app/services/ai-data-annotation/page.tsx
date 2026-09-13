import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  ShieldCheck,
  Zap,
  Menu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Data Annotation Services | Gelonix Innovation",
  description:
    "Professional AI data annotation and data labeling services for image, video, text, audio, and document datasets. Scale AI and ML projects with reliable India-based delivery teams.",
  keywords: [
    "AI data annotation services",
    "data annotation services",
    "AI data labeling services",
    "data labeling services",
    "AI annotation outsourcing",
    "data annotation outsourcing",
    "image annotation services",
    "video annotation services",
    "text annotation services",
    "document annotation services",
    "AI data labeling India",
    "data annotation India",
  ],
  alternates: {
    canonical: "https://gelonix.in/services/ai-data-annotation",
  },
  openGraph: {
    title: "AI Data Annotation Services | Gelonix Innovation",
    description:
      "Scalable AI data annotation and data labeling teams for image, video, text, audio, and document datasets.",
    url: "https://gelonix.in/services/ai-data-annotation",
    siteName: "Gelonix Innovation",
    type: "website",
  },
};

const annotationTypes = [
  "Image annotation",
  "Video annotation",
  "Text annotation",
  "Audio annotation",
  "Document annotation",
  "Data labeling",
];

const benefits = [
  "Scalable annotation teams",
  "Strict quality assurance",
  "Flexible project capacity",
  "Fast turnaround times",
  "Production-focused workflows",
  "Pilot projects available",
];

const faqs = [
  {
    question: "What types of AI data can Gelonix annotate?",
    answer:
      "We support image, video, text, audio, and document annotation workflows for AI and machine learning projects.",
  },
  {
    question: "Can Gelonix handle large annotation projects?",
    answer:
      "Yes. Our India-based delivery teams can scale according to project volume, deadlines, and operational requirements.",
  },
  {
    question: "Do you offer pilot AI data annotation projects?",
    answer:
      "Yes. Pilot projects are available so teams can evaluate workflow quality, turnaround time, and operational fit before scaling.",
  },
  {
    question: "Where are your AI data annotation teams based?",
    answer:
      "Our delivery teams are based in India and support international clients and projects.",
  },
];

export default function AIDataAnnotationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Data Annotation Services",
    provider: {
      "@type": "Organization",
      name: "Gelonix Innovation",
      url: "https://gelonix.in",
    },
    description:
      "AI data annotation and data labeling services for image, video, text, audio, and document datasets.",
    areaServed: "Worldwide",
    serviceType: "AI Data Annotation",
    url: "https://gelonix.in/services/ai-data-annotation",
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_45%)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-xs font-medium text-emerald-400">
            <Database className="h-4 w-4" />
            AI Data Annotation Services
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">
            AI Data Annotation &amp; Data Labeling Services
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/60 md:text-lg">
            Scale your AI and machine learning projects with reliable,
            scalable data annotation teams. Gelonix Innovation provides
            India-based delivery capacity for image, video, text, audio,
            and document annotation.
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

      {/* Annotation Types */}
      <section className="border-b border-[#27272a] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-emerald-400">
              Our Capabilities
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Data Annotation for AI &amp; ML Workflows
            </h2>

            <p className="mt-4 max-w-2xl text-white/60">
              Support your model development pipeline with structured,
              consistent, and quality-controlled annotated datasets.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {annotationTypes.map((type) => (
              <div
                key={type}
                className="rounded-2xl border border-[#27272a] bg-[#0a0a0a] p-6"
              >
                <CheckCircle2 className="mb-4 h-5 w-5 text-emerald-400" />

                <h3 className="text-lg font-semibold">{type}</h3>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  Structured annotation workflows designed for AI and
                  machine learning datasets.
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
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-emerald-400">
                Why Gelonix
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                A scalable extension of your AI operations team
              </h2>

              <p className="mt-5 leading-7 text-white/60">
                Instead of building additional internal capacity for every
                project, work with dedicated India-based delivery teams that
                can integrate with your existing processes and scale with
                your workload.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-xl border border-[#27272a] bg-black p-5"
                >
                  <CheckCircle2 className="mb-3 h-5 w-5 text-emerald-400" />
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
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-emerald-400">
              Simple Process
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              From pilot to scalable delivery
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#27272a] p-7">
              <Zap className="mb-5 h-6 w-6 text-emerald-400" />
              <h3 className="text-xl font-bold">1. Start with a pilot</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Share your requirements, dataset, annotation workflow,
                and expected output.
              </p>
            </div>

            <div className="rounded-2xl border border-[#27272a] p-7">
              <ShieldCheck className="mb-5 h-6 w-6 text-emerald-400" />
              <h3 className="text-xl font-bold">2. Quality-controlled delivery</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Our delivery team follows defined processes and quality
                checks throughout the project.
              </p>
            </div>

            <div className="rounded-2xl border border-[#27272a] p-7">
              <Database className="mb-5 h-6 w-6 text-emerald-400" />
              <h3 className="text-xl font-bold">3. Scale as needed</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Increase project capacity as your annotation and AI data
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
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-emerald-400">
              FAQ
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              AI Data Annotation Questions
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
            Need scalable AI data annotation capacity?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            Tell us about your annotation project and we can discuss a
            pilot workflow and delivery plan.
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

          <Link
            href="/"
            className="transition hover:text-white"
          >
            Back to Gelonix Innovation
          </Link>
        </div>
      </footer>
    </main>
  );
}