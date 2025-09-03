import React from "react";
import {
  NotebookPen,
  Workflow,
  ShieldCheck,
  BarChart3,
  Lock,
  ArrowRight,
  FileDown,
} from "lucide-react";

type Study = {
  title: string;
  role: string;
  problem: string;
  solution: string[];
  impact: string[];
  badge?: "Private / NDA" | "Public";
  note?: string;
};

const ACCENT = "#c8f461"; // your brand accent

const pillars = [
  {
    icon: NotebookPen,
    title: "Discover",
    blurb: "Stakeholder interviews, process mapping, success metrics.",
  },
  {
    icon: Workflow,
    title: "Design",
    blurb: "UX flows, wireframes, architecture & data contracts.",
  },
  {
    icon: ShieldCheck,
    title: "Build",
    blurb: "React/Next.js frontends, Node APIs, auth & RBAC, CI-ready.",
  },
  {
    icon: BarChart3,
    title: "Measure",
    blurb: "Dashboards, SLAs, and iteration on real outcomes.",
  },
];

const caseStudies: Study[] = [
  {
    title: "Payment Backoffice — Enterprise",
    role: "Frontend Lead (React/TypeScript) · Finance Ops & Backend",
    problem:
      "Slow reconciliation and limited cross-provider visibility for finance operations.",
    solution: [
      "Global search across providers with indexed, debounced queries",
      "Task-focused layouts for incident triage & reconciliation",
      "RBAC guard rails for sensitive actions",
    ],
    impact: ["~30% faster reconciliation", "₦17B+ monthly volume supported"],
    badge: "Private / NDA",
    note: "Code & URLs private. Request a guided walkthrough.",
  },
  {
    title: "Customer Trade Portal — Enterprise",
    role: "Frontend Engineer (React/TypeScript) · Sales Ops & IT",
    problem:
      "Manual, fragmented distributor engagement and order flows slowed operations.",
    solution: [
      "Automated order lifecycle with status tracking & alerts",
      "Optimistic UI and lightweight caching for low bandwidth",
      "Accessibility pass (keyboard paths, focus states, ARIA)",
    ],
    impact: ["~40% reduction in manual inefficiencies", "Improved distributor SLAs"],
    badge: "Private / NDA",
    note: "Code & URLs private. Request a guided walkthrough.",
  },
  {
    title: "InsightX — Marketing Data & PWA Form Builder",
    role: "Product-minded Full-Stack (React / Node)",
    problem:
      "Marketing needed fast, governed form launches with clean data capture for events & activations.",
    solution: [
      "PWA form builder with live mobile/desktop preview",
      "Publish-only-when attached to an Activity (governance)",
      "Reusable templates and CSV audience uploads",
    ],
    impact: [
      "Faster activation setup",
      "Consistent, reusable forms",
      "Cleaner reporting across teams",
    ],
    badge: "Public",
  },
  {
    title: "Binta Financial — Admin Dashboard & RN App",
    role: "Junior Full-Stack (Next.js / React / React Native)",
    problem:
      "Needed internal operations dashboard and mobile onboarding flows, quickly.",
    solution: [
      "Admin dashboard with role-based navigation & reusable components",
      "React Native screens for auth and list/detail flows",
      "Tight design-dev handoff and incremental releases",
    ],
    impact: ["Solid foundation for internal ops", "Faster iteration cadence"],
    badge: "Private / NDA",
    note: "Demo components available on request.",
  },
];

const artifacts = [
  "PRDs & user stories",
  "UX flows & wireframes",
  "Architecture diagrams",
  "ERDs & data contracts",
  "Acceptance criteria & test plans",
  "Rollout plan & metrics (SLAs/KPIs)",
];

const KPIs = [
  { label: "Reconciliation time", value: "−30%" },
  { label: "Manual inefficiencies", value: "−40%" },
  { label: "Monthly volume", value: "₦17B+" },
];

export default function BusinessSolutions() {
  return (
    <section
      id="business-solutions"
      className="container px-6 py-14 w-full md:w-11/12 mx-auto bg-white dark:bg-gray-900"
      aria-labelledby="solutions-heading"
    >
      {/* Hero */}
      <header className="text-center mb-10">
        <h2
          id="solutions-heading"
          className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white"
        >
          Business Solutions & Product Delivery
        </h2>
        <p className="mt-3 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          I partner with stakeholders to turn real business needs into intuitive UIs,
          reliable APIs, and measurable outcomes—without exposing private code.
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <a
            href="/contact"
            className="rounded-full px-5 py-2 font-medium text-black"
            style={{ backgroundColor: ACCENT }}
          >
            Request Walkthrough
          </a>
          <a
            href="/assets/victory-solutions-onepager.pdf"
            className="rounded-full px-5 py-2 font-medium border"
            style={{ borderColor: ACCENT, color: ACCENT }}
          >
            Download 1-Pager
          </a>
        </div>
      </header>

      {/* Pillars */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">
        {pillars.map(({ icon: Icon, title, blurb }) => (
          <div
            key={title}
            className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-5"
          >
            <Icon className="w-6 h-6" style={{ color: ACCENT }} />
            <h3 className="mt-3 font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{blurb}</p>
          </div>
        ))}
      </div>

      {/* Case Studies */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Case Studies
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6"
            >
              <div className="flex items-center gap-2 mb-2">
                {s.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 inline-flex items-center gap-1">
                    {s.badge === "Private / NDA" && <Lock className="w-3 h-3" />}
                    {s.badge}
                  </span>
                )}
                <span className="text-xs text-gray-500 dark:text-white/50">
                  Case Study
                </span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {s.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{s.role}</p>
              <p className="text-sm text-gray-800 dark:text-gray-200">
                <span className="font-medium">Problem:</span> {s.problem}
              </p>

              <div className="mt-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Solution
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                  {s.solution.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Impact
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                  {s.impact.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {s.note && (
                <p className="mt-3 text-xs text-gray-600 dark:text-white/60">{s.note}</p>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* Impact KPIs */}
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        {KPIs.map((k) => (
          <div
            key={k.label}
            className="rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-4 text-center"
          >
            <div className="text-2xl font-bold" style={{ color: ACCENT }}>
              {k.value}
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-300">{k.label}</div>
          </div>
        ))}
      </div>

      {/* Artifacts */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Artifacts I Use
        </h3>
        <ul className="grid md:grid-cols-3 gap-3">
          {artifacts.map((a) => (
            <li
              key={a}
              className="rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-3 text-sm text-gray-800 dark:text-gray-200 flex items-center justify-between"
            >
              <span>{a}</span>
              <ArrowRight className="w-4 h-4 opacity-60" />
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-8 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-800 dark:text-gray-200">
          Want the deep dive? I can share redacted diagrams and walk through decisions & trade-offs.
        </p>
        <div className="flex gap-3">
          <a
            href="/contact"
            className="rounded-full px-4 py-2 font-medium text-black inline-flex items-center gap-2"
            style={{ backgroundColor: ACCENT }}
          >
            Request Walkthrough
          </a>
          <a
            href="/assets/victory-solutions-onepager.pdf"
            className="rounded-full px-4 py-2 font-medium border inline-flex items-center gap-2"
            style={{ borderColor: ACCENT, color: ACCENT }}
          >
            <FileDown className="w-4 h-4" />
            1-Pager
          </a>
        </div>
      </div>
    </section>
  );
}
