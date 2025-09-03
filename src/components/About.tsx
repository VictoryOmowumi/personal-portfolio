import React, { useEffect, useRef } from "react";
import { Code2, Brain, Rocket, User, NotebookPen, Workflow, ShieldCheck, BarChart3 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import meImg from "../assets/me-1.jpg";
import Tag from "./common/Tag";
import gridBg from '../assets/grid-bg.svg';

gsap.registerPlugin(ScrollTrigger);

const strengths = [
  {
    icon: <NotebookPen className="w-8 h-8" />,
    title: "Product-Minded",
    description: "Discovery → decisions → delivery with measurable outcomes",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Clean Code",
    description: "Maintainable, scalable, and readable implementation",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Problem Solving",
    description: "Structured thinking for complex, ambiguous challenges",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Performance",
    description: "Fast UIs, resilient APIs, and practical monitoring",
  },
];

const howIWork = [
  { icon: NotebookPen, title: "Discover", blurb: "Stakeholder interviews, process maps, success metrics" },
  { icon: Workflow, title: "Design", blurb: "UX flows, wireframes, architecture & data contracts" },
  { icon: ShieldCheck, title: "Build", blurb: "React/Next.js, Node APIs, auth, CI-ready delivery" },
  { icon: BarChart3, title: "Measure", blurb: "Dashboards, SLAs, iteration on real outcomes" },
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const ctx = gsap.context(() => {
      // Section entrance
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: prefersReduced ? 0 : 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      // Strength cards stagger
      if (!prefersReduced && cardsRef.current?.children?.length) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, scale: 0.94, rotateY: 6 },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 0.8,
            ease: "back.out(1.6)",
            stagger: 0.15,
            scrollTrigger: { trigger: cardsRef.current, start: "top 85%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (index: number) => {
    const el = cardsRef.current?.children[index] as HTMLElement | undefined;
    if (!el) return;
    gsap.to(el, { scale: 1.04, duration: 0.25, ease: "power1.out" });
  };
  
  const handleMouseLeave = (index: number) => {
    const el = cardsRef.current?.children[index] as HTMLElement | undefined;
    if (!el) return;
    gsap.to(el, { scale: 1, duration: 0.25, ease: "power1.out" });
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="container px-6 py-16 w-full md:w-11/12 mx-auto bg-white dark:bg-gray-900"
      aria-labelledby="about-heading"
    >
      {/* Header Section */}
      <div className="flex flex-col gap-6 my-8 md:my-12 text-center">
        <Tag title="About Me" icon={<User size={16} />} />
        <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="mx-auto max-w-4xl text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm a product-minded frontend & full-stack developer with <strong>4+ years</strong> experience.
          I partner with stakeholders to turn real business needs into intuitive UIs, reliable APIs, and
          <span className="whitespace-nowrap"> metrics that stick</span>—from cutting reconciliation time by ~30% to supporting
          <span className="whitespace-nowrap"> ₦17B+</span> in monthly transactions.
        </p>
      </div>

      {/* Strengths Grid - 4 equal columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" ref={cardsRef}>
        {strengths.map((strength, idx) => (
          <div
            key={strength.title}
            className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-center shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-center"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            <div className="bg-black text-primary-green w-16 h-16 flex items-center justify-center rounded-2xl mx-auto mb-4">
              {strength.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{strength.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{strength.description}</p>
          </div>
        ))}
      </div>

      {/* Portrait & Personal Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16">
        {/* Portrait */}
        <div className="lg:col-span-1">
          <div className="group relative block bg-black rounded-2xl overflow-hidden h-96 lg:h-[500px]">
            <img
              alt="Victory Balogun portrait"
              src={meImg}
              className="absolute inset-0 h-full w-full object-cover object-top opacity-75 transition-all duration-500 group-hover:opacity-50 group-hover:scale-105"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /> */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-sm font-medium uppercase tracking-widest text-primary-green mb-2">Developer</p>
              <p className="text-2xl font-bold text-white">Victory Balogun</p>
            </div>
          </div>
        </div>

        {/* Personal Description */}
        <div className="lg:col-span-2">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 h-full flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Building Systems That Work
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I design and ship usable systems: accessible React frontends, secure Node APIs, and
              lean delivery pipelines. I care about clarity, observability, and steady iteration.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-indigo dark:bg-primary-green/10 text-primary-green rounded-full text-sm font-medium">
                React/Next.js
              </span>
              <span className="px-3 py-1 bg-indigo dark:bg-primary-green/10 text-primary-green rounded-full text-sm font-medium">
                Node.js APIs
              </span>
              <span className="px-3 py-1 bg-indigo dark:bg-primary-green/10 text-primary-green rounded-full text-sm font-medium">
                Product Design
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* How I Work Section */}
      <div 
        id="business-solutions"
        className="relative bg-gray-900 rounded-2xl p-8 md:p-12 overflow-hidden"
        style={{ backgroundImage: `url(${gridBg})`, backgroundSize: 'cover' }}
      >
        {/* Background overlay for better readability */}
        {/* <div className="absolute inset-0 bg-gray-900/80" />
         */}
        <div className="relative z-10">
          <h3 className="text-3xl font-bold text-white text-center mb-8">How I Work</h3>
          <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
            A systematic approach to turning business challenges into scalable solutions
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howIWork.map(({ icon: Icon, title, blurb }) => (
              <div key={title} className="group">
                <div className="rounded-xl border border-white/20 bg-white/10 p-6 h-full hover:bg-white/15 transition-all duration-300 hover:border-primary-green/50">
                  <div className="bg-primary-green w-12 h-12 flex items-center justify-center rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">{title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
