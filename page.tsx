"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, BriefcaseBusiness, Mail, MousePointer2, Sparkles } from "lucide-react";

const projects = [
  {
    title: "NBA Expansion Business Analysis",
    category: "Sports Business • Strategic Analysis",
    summary:
      "Built a business case around NBA expansion into Seattle and Las Vegas, evaluating market strength, revenue logic, dilution risk, and franchise value implications.",
    highlights: ["Sports strategy", "Market analysis", "Decision framework"],
  },
  {
    title: "JL Landscaping Website & Brand Experience",
    category: "UX Design • Marketing • Branding",
    summary:
      "Designed a modern service-based website for a local landscaping business, focusing on brand identity, customer experience, visual storytelling, and quote-request conversion.",
    highlights: ["Web design", "Customer journey", "Lead generation"],
  },
  {
    title: "International Student Programming & Data Analysis",
    category: "Analytics • Data Insights • Excel",
    summary:
      "Cleaned and analyzed international student and dependent population data at UC San Diego to identify demographic trends and inform event programming recommendations.",
    highlights: ["Excel analysis", "Demographic insights", "Programming strategy"],
  },
];

const experience = [
  {
    role: "Data Analytics Intern",
    org: "UC San Diego – International Services and Engagement Offices",
    period: "Aug 2024 – Jun 2025",
    bullets: [
      "Managed and updated a 30,000+ record database supporting international students and scholars.",
      "Used Excel for data cleaning, compliance reviews, and record accuracy improvement.",
      "Shared engagement insights to support event marketing and student programming outreach.",
    ],
  },
  {
    role: "Advertising and Marketing Intern",
    org: "UC San Diego – Raza Resource Centro",
    period: "Sep 2023 – Jun 2024",
    bullets: [
      "Supported digital and email communications for a 7,000+ subscriber audience.",
      "Managed weekly social content across Instagram, TikTok, and Facebook for 6,000+ followers.",
      "Helped maintain a welcoming student-facing experience and connect visitors to resources.",
    ],
  },
  {
    role: "Branding Strategy and Business Analytics Extern",
    org: "Beats by Dre",
    period: "Mar 2024 – Apr 2024",
    bullets: [
      "Researched Gen Z consumer behavior, listening habits, and headphone preferences.",
      "Synthesized interviews and market research into growth-oriented brand recommendations.",
      "Presented a final analysis deck focused on loyalty, positioning, and consumer expectations.",
    ],
  },
];

const skills = [
  "Excel",
  "Google Sheets",
  "Python",
  "R",
  "Stata",
  "Canva",
  "Constant Contact",
  "Data Cleaning",
  "Consumer Research",
  "Marketing Analytics",
  "Business Strategy",
  "English & Spanish",
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.65, ease: "easeOut" },
};

export default function AlexPortfolioSite() {
  return (
    <main className="min-h-screen scroll-smooth bg-white text-black">
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-semibold tracking-tight">ALG</a>
          <div className="hidden gap-6 text-sm text-black/70 md:flex">
            <a className="transition hover:text-[#C96D3B]" href="#about">About</a>
            <a className="transition hover:text-[#C96D3B]" href="#projects">Projects</a>
            <a className="transition hover:text-[#C96D3B]" href="#experience">Experience</a>
            <a className="transition hover:text-[#C96D3B]" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative overflow-hidden border-b border-black/10">
        <motion.div
          className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#C96D3B]/20 blur-3xl"
          animate={{ y: [0, 24, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-black/10 blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <motion.div {...fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C96D3B]/30 bg-[#C96D3B]/10 px-4 py-1 text-sm font-medium text-[#C96D3B]">
            <Sparkles size={15} /> Analytics • Business • Marketing • Sports & Entertainment
          </motion.div>
          <div className="grid gap-10 md:grid-cols-[1.35fr_0.85fr] md:items-end">
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                Alexander Lomeli Garcia
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-black/70 md:text-xl">
                Applied analytics graduate student building at the intersection of data, business strategy, marketing, and sports and entertainment.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="group rounded-2xl bg-[#C96D3B] px-5 py-3 font-medium text-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  View Projects <ArrowRight className="ml-2 inline transition group-hover:translate-x-1" size={18} />
                </a>
                <a href="#contact" className="rounded-2xl border border-black/15 px-5 py-3 font-medium transition hover:-translate-y-1 hover:bg-black hover:text-white">
                  Get In Touch
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: -2, y: 20 }}
              animate={{ opacity: 1, rotate: 0, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              whileHover={{ rotate: 1.5, y: -6 }}
              className="rounded-3xl border border-black/10 bg-black p-6 text-white shadow-sm"
            >
              <p className="text-sm uppercase tracking-[0.22em] text-[#C96D3B]">Currently</p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-white/85">
                <p>MS in Applied Analytics at USC</p>
                <p>B.S. in Business Economics from UC San Diego</p>
                <p>Interested in analytics, strategy, and marketing roles across sports and entertainment</p>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="mt-16 flex items-center gap-2 text-sm text-black/45"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MousePointer2 size={16} /> Scroll to explore
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <motion.div {...fadeUp} className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C96D3B]">About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">A business-minded analyst with a creative edge.</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-black/75">
            <p>I’m Alexander, a graduate student in Applied Analytics with a background in business economics, marketing, and consumer-facing strategy. My work sits between data and storytelling: I enjoy turning information into insights that are clear, useful, and decision-ready.</p>
            <p>Across analytics, operations, and marketing experiences, I’ve worked on data quality, audience engagement, consumer research, and business analysis. I’m especially interested in opportunities where analytics can support strategy, brand growth, or audience understanding in sports, entertainment, and modern consumer businesses.</p>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <motion.div {...fadeUp}>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C96D3B]">Featured Work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Selected projects and portfolio work.</h2>
        </motion.div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:border-[#C96D3B]/40 hover:shadow-xl"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C96D3B]/10 text-[#C96D3B] transition group-hover:bg-[#C96D3B] group-hover:text-white">
                {index === 0 ? <BriefcaseBusiness size={20} /> : index === 1 ? <Sparkles size={20} /> : <BarChart3 size={20} />}
              </div>
              <p className="text-sm font-medium text-[#C96D3B]">{project.category}</p>
              <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-7 text-black/70">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.highlights.map((tag) => (
                  <span key={tag} className="rounded-full bg-black/5 px-3 py-1 text-sm text-black/70">{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C96D3B]">Experience</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Experience that blends analytics, outreach, and strategy.</h2>
          </motion.div>
          <div className="mt-10 grid gap-6">
            {experience.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="text-white/75">{item.org}</p>
                  </div>
                  <p className="text-sm text-[#E8A17A]">{item.period}</p>
                </div>
                <ul className="mt-4 space-y-3 text-white/80">
                  {item.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <motion.div {...fadeUp} className="rounded-[2rem] border border-black/10 bg-[#FFF7F2] p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C96D3B]">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Tools and strengths I bring to the table.</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ y: -4 }}
                className="rounded-full border border-[#C96D3B]/20 bg-white px-4 py-2 text-sm shadow-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <motion.div {...fadeUp} className="rounded-[2rem] bg-black px-8 py-12 text-white md:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C96D3B]">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Let’s connect.</h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/75">
              I’m open to conversations around analytics, strategy, marketing, and opportunities across sports, entertainment, and consumer-facing businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/85">
              <a className="inline-flex items-center gap-2 transition hover:text-[#E8A17A]" href="mailto:lomelialex453@gmail.com"><Mail size={16} /> lomelialex453@gmail.com</a>
              <span>•</span>
              <span>Los Angeles, CA</span>
              <span>•</span>
              <span>LinkedIn: alexlomeligarcia</span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
