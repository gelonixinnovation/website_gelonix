"use client";

import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Users,
  Globe,
  Database,
  Search,
  Phone,
  ClipboardCheck,
  MapPin,
  Mail,
  Clock,
  ArrowUp,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "B2B Respondent Recruitment",
    description:
      "Recruit relevant business professionals and decision-makers for specialized market research studies.",
  },
  {
    icon: Globe,
    title: "B2C Respondent Recruitment",
    description:
      "Reach consumer audiences across target markets for surveys, interviews, and research studies.",
  },
  {
    icon: Phone,
    title: "Phone Survey Fieldwork",
    description:
      "Structured telephone-based data collection conducted by trained research teams.",
  },
  {
    icon: ClipboardCheck,
    title: "Online Survey Support",
    description:
      "Survey distribution, respondent management, monitoring, and data collection support.",
  },
  {
    icon: Database,
    title: "Data Collection & Cleaning",
    description:
      "Accurate collection, validation, cleaning, and organization of research data.",
  },
  {
    icon: Search,
    title: "Research Operations Support",
    description:
      "Flexible operational support for market research agencies and research teams.",
  },
];

const process = [
  "Understand your research requirements",
  "Define target respondents and markets",
  "Recruit and manage respondents",
  "Conduct survey or fieldwork activities",
  "Monitor quality and response completion",
  "Clean and deliver research data",
];

const faqs = [
  {
    question: "What market research services does Gelonix Innovation provide?",
    answer:
      "Gelonix Innovation provides market research fieldwork support including B2B and B2C respondent recruitment, phone surveys, online surveys, data collection, data cleaning, and research operations support.",
  },
  {
    question: "Can you recruit B2B respondents?",
    answer:
      "Yes. We support B2B respondent recruitment for research projects requiring business professionals, decision-makers, and specialized audiences.",
  },
  {
    question: "Do you support B2C market research?",
    answer:
      "Yes. Our teams can support consumer respondent recruitment and survey fieldwork across selected target markets.",
  },
  {
    question: "Can Gelonix handle survey fieldwork?",
    answer:
      "Yes. We can provide operational support for online and telephone survey fieldwork, respondent management, data collection, and quality checks.",
  },
  {
    question: "Which countries do you support?",
    answer:
      "Our India-based delivery teams support projects for companies operating across international markets, including the USA, UK, Australia, Canada, UAE, Singapore, Europe, and India.",
  },
  {
    question: "Can we start with a pilot project?",
    answer:
      "Yes. We offer pilot projects so research teams can evaluate our delivery quality, communication, and operational capacity before scaling.",
  },
];

export default function MarketResearchPage() {
  return (
    
    <main className="min-h-screen bg-black text-white">

      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-[#27272a]/50 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          {/* LOGO */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/logo2.png"
              alt="Gelonix Innovation"
              className="h-8 w-auto object-contain"
            />

            <span className="text-sm font-bold tracking-tight">
              Gelonix{" "}
              <span className="text-white/40">
                Innovation
              </span>
            </span>
          </a>

          {/* NAVIGATION LINKS */}
          <div className="hidden items-center gap-8 md:flex">

            <a
              href="/"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Home
            </a>

            <a
              href="/#services"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Services
            </a>

            <a
              href="/#global"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Global Reach
            </a>

            <a
              href="/#contact"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Contact
            </a>

          </div>

          {/* START A PILOT */}
          <a
            href="/#contact"
            className="rounded-full border border-[#27272a] bg-white/5 px-5 py-2 text-xs font-medium text-white transition-colors hover:border-white/20 hover:bg-white/10"
          >
            Start a Pilot
          </a>

        </div>
      </nav>
        

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40">
        <div className="mx-auto max-w-5xl text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#27272a] bg-black/40 px-4 py-2">
            <BarChart3 className="h-4 w-4 text-amber-400" />

            <span className="text-sm text-amber-400">
              Market Research Services
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight md:text-7xl">
            Market Research Fieldwork &{" "}
            <span className="text-gradient-emerald">
              Data Collection Services
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/60 md:text-lg">
            Scale your market research projects with reliable respondent
            recruitment, survey fieldwork, data collection, and research
            operations support from India-based delivery teams.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="/#contact"
              className="rounded-full bg-white px-8 py-4 font-semibold text-black"
            >
              Discuss Your Research Project
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </a>

            <a
              href="/"
              className="rounded-full border border-[#27272a] px-8 py-4 text-white/70"
            >
              View All Services
            </a>

          </div>
        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="border-t border-[#27272a] px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 md:grid-cols-2">

            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-amber-400">
                Market Research Support
              </p>

              <h2 className="text-3xl font-bold md:text-5xl">
                Flexible Research Operations for Global Teams
              </h2>
            </div>

            <div className="space-y-5 text-white/60">
              <p>
                Gelonix Innovation provides outsourced market research
                fieldwork and operational support for research agencies,
                consulting companies, and internal research teams.
              </p>

              <p>
                Our India-based delivery teams help manage respondent
                recruitment, surveys, data collection, validation, and
                research operations at scale.
              </p>

              <p>
                Whether you need additional capacity for a single project or
                ongoing research support, our teams can integrate with your
                existing workflow.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* SERVICES */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="mb-16 text-center">

            <p className="mb-3 text-xs uppercase tracking-widest text-amber-400">
              What We Provide
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Market Research Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Operational support for research projects requiring dependable
              fieldwork, respondent management, and data collection.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#27272a] bg-[#0a0a0a] p-8"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#27272a] bg-amber-500/10">

                  <service.icon className="h-7 w-7 text-amber-400" />

                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="text-sm leading-6 text-white/60">
                  {service.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* WHY GELONIX */}
      <section className="border-t border-[#27272a] bg-black/50 px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="mb-16 text-center">

            <p className="mb-3 text-xs uppercase tracking-widest text-emerald-400">
              Why Gelonix
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Built for Research Teams That Need Scale
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-2">

            {[
              "India-based delivery teams",
              "Flexible project capacity",
              "B2B and B2C respondent support",
              "Structured quality checks",
              "Global project experience",
              "Pilot projects available",
            ].map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-3 rounded-xl border border-[#27272a] bg-[#0a0a0a] p-5"
              >

                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />

                <span className="text-white/70">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* PROCESS */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <div className="mb-16 text-center">

            <p className="mb-3 text-xs uppercase tracking-widest text-emerald-400">
              Our Process
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              From Research Brief to Data Delivery
            </h2>

          </div>


          <div className="grid gap-4 md:grid-cols-2">

            {process.map((step, index) => (

              <div
                key={index}
                className="flex gap-4 rounded-xl border border-[#27272a] bg-[#0a0a0a] p-6"
              >

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
                  {index + 1}
                </div>

                <p className="text-white/70">
                  {step}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* FAQ */}
      <section className="border-t border-[#27272a] px-6 py-24">

        <div className="mx-auto max-w-4xl">

          <div className="mb-14 text-center">

            <p className="mb-3 text-xs uppercase tracking-widest text-emerald-400">
              Frequently Asked Questions
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Market Research FAQ
            </h2>

          </div>


          <div className="space-y-4">

            {faqs.map((faq, index) => (

              <details
                key={index}
                className="group rounded-xl border border-[#27272a] bg-[#0a0a0a] p-6"
              >

                <summary className="cursor-pointer list-none font-semibold">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-7 text-white/60">
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-4xl rounded-3xl border border-[#27272a] bg-[#0a0a0a] p-10 text-center md:p-16">

          <h2 className="text-3xl font-bold md:text-5xl">
            Need Additional Market Research Capacity?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            Tell us about your research project, target market, and required
            capacity. Our team will get back to you within 24 hours.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-black"
          >
            Start a Research Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>

        </div>

      </section>

    </main>
  );
}