import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  FileDown,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/irajkumarr",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/irajkumarr",
    icon: Linkedin,
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/irajkumarr_",
    icon: XIcon,
  },
];

const projects = [
  {
    title: "Ride-Sharing Platform",
    tagline: "Geospatial driver discovery & live tracking ecosystem",
    description:
      "Full-stack real-time ride-sharing architecture with separate rider and driver apps. Solves live geospatial driver matching using Redis GEO and WebSockets (STOMP), active driver management via Redis Sorted Sets, and continuous background GPS tracking with native Android Foreground Services and FCM.",
    tech: ["Flutter", "Spring Boot", "Redis GEO", "WebSockets", "FCM", "Android Foreground Services"],
    url: "https://github.com/irajkumarr/Ride_Share_Apps",
    year: "2026",
  },
  {
    title: "E-Learning Platform (Learnify)",
    tagline: "Automated certification & course payments",
    description:
      "Full-stack mobile learning ecosystem featuring course filtering, progress tracking, and automated PDF certificate generation. Integrated Stripe payments, FCM push notifications, Riverpod state management with optimistic pagination, and CI/CD via GitHub Actions and Fastlane.",
    tech: ["Flutter", "Node.js", "Express.js", "MongoDB", "Riverpod", "Stripe", "FCM", "Fastlane"],
    url: "https://github.com/irajkumarr/Learnify-ELearning-App",
    year: "2025",
  },
  {
    title: "Task Management API",
    tagline:
      "Production-ready REST API for collaborative workspaces, projects & task management",
    description:
      "A scalable backend API built with NestJS and PostgreSQL for collaborative task management, featuring workspaces, members, projects, tasks, comments, attachments, notifications, and activity tracking.",
    tech: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "JWT",
      "Passport",
      "REST API",
      "Pino",
      "Scheduler",
      "Throttler",
    ],
    url: "https://github.com/irajkumarr/Task-Management-API",
    year: "2026",
  },
  {
    title: "Job Portal Application (Rojgari)",
    tagline: "High-performance job discovery & applicant matching",
    description:
      "Flutter job portal app with a Node.js and MongoDB backend utilizing database compound indexing to speed up search. Features category and location-based job filtering, real-time push notifications, and Provider state management.",
    tech: ["Flutter", "Node.js", "MongoDB", "Provider", "REST APIs", "FCM"],
    url: "https://github.com/irajkumarr/job-seeker-application",
    year: "2025",
  },
  {
    title: "Food Delivery Application (Chulesi)",
    tagline: "End-to-end mobile ordering & live status tracking",
    description:
      "Mobile ordering system with modular REST APIs for order processing, promotional logic, and ratings. Built complete product browsing, cart management, and JWT-authenticated user session checkout flows with Firebase Cloud Messaging order tracking.",
    tech: ["Flutter", "Node.js", "Express.js", "MongoDB", "Firebase FCM", "JWT"],
    url: "https://github.com/irajkumarr/chulesi-foodDelivery-app-frontend",
    year: "2024",
  },
];

const experiences = [
  {
    role: "Flutter Developer Intern",
    company: "DevanaSoft Pvt. Ltd.",
    location: "Kathmandu, Nepal (Onsite)",
    period: "August 2026 — October 2026",
    points: [
      "Developed features for a production networking application using Flutter, Clean Architecture, and BLoC/Cubit.",
      "Implemented local data persistence with Hive to keep core content accessible offline.",
      "Worked with multi-flavor configurations for separate app environments and managed Flutter SDK versions using FVM.",
    ],
  },
  {
    role: "Flutter Developer Intern",
    company: "Supreme IT Solutions",
    location: "Kathmandu, Nepal (Remote)",
    period: "December 2025 — April 2026",
    points: [
      "Developed cross-platform Flutter features for 3+ client applications using Clean Architecture and BLoC/Cubit.",
      "Integrated REST APIs using Dio and implemented JWT-based authentication flows.",
      "Collaborated with QA engineers and cross-functional team members to build features, resolve issues, and support releases.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science and Information Technology (BSc. CSIT)",
    institution: "Birendra Multiple Campus | Tribhuvan University",
    location: "Bharatpur, Chitwan",
    period: "2022 — Expected December 2026",
    description:
      "Undergraduate computer science degree covering Data Structures & Algorithms, Distributed Systems, Software Engineering, Database Systems, and Network Architecture.",
  },
];

const skills = [
  {
    category: "Languages",
    items: ["Dart", "JavaScript", "TypeScript", "Java"],
  },
  {
    category: "Mobile Development",
    items: [
      "Flutter",
      "Dio",
      "BLoC / Cubit",
      "Riverpod",
      "Provider",
      "Hive",
      "FCM",
      "Android Foreground Services",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Spring Boot",
      "RESTful APIs",
      "WebSockets",
      "JWT Authentication",
    ],
  },
  {
    category: "Databases",
    items: [
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Firebase (Firestore)",
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Fastlane",
      "Firebase App Distribution",
      "FVM",
      "Postman",
    ],
  },
  {
    category: "Architecture & Practices",
    items: [
      "Clean Architecture",
      "State Management",
      "CI/CD",
      "Real-Time Communication",
      "Geolocation Services",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <div className="mx-auto max-w-6xl px-6 pt-3 pb-6 sm:px-12 sm:pt-4 sm:pb-8">
        {/* Compact Clean Header */}
        <header className="flex items-center justify-between pt-1 pb-3 sm:pb-3.5 border-b border-zinc-200/80 dark:border-zinc-800/80">
          <Link
            href="/"
            className="font-mono text-base tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white transition-colors"
          >
            raj kumar
          </Link>
          <div className="flex items-center gap-5 sm:gap-6 text-sm font-mono text-zinc-500 dark:text-zinc-400">
            <Link
              href="#projects"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors hidden sm:inline"
            >
              projects
            </Link>
            <Link
              href="#experience"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors hidden sm:inline"
            >
              experience
            </Link>
            <Link
              href="#skills"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors hidden sm:inline"
            >
              skills
            </Link>
            <Link
              href="#contact"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              contact
            </Link>
            <ThemeToggle />
          </div>
        </header>

        {/* Main Content */}
        <main className="py-6 sm:py-8 space-y-14">
          {/* Hero Section */}
          <section className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 md:gap-12">
            <div className="space-y-4 flex-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                Available for full-time roles & contracts
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                Raj Kumar Timalsina
              </h1>
              <p className="font-mono text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
                Full-Stack & Flutter Developer • Kathmandu / Hetauda, Nepal
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300 pt-1">
                Building production-ready cross-platform mobile applications with
                Flutter, and scalable real-time backend systems using Spring Boot,
                Node.js, Redis, and Clean Architecture. Completing B.Sc. CSIT at
                Tribhuvan University.
              </p>

              {/* Pure Borderless Social Icons (Piyush Garg style) & Resume */}
              <div className="flex items-center gap-5 pt-2 text-zinc-500 dark:text-zinc-400">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-white transition-colors"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
                <a
                  href="mailto:rajk.timalsina05@gmail.com"
                  className="hover:text-black dark:hover:text-white transition-colors"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail className="h-5 w-5" />
                </a>

                <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-800" />

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                  title="Open Resume"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Resume</span>
                </a>
              </div>
            </div>

            <div className="shrink-0 self-center md:self-center">
              <Image
                src="/avatar-opt.webp"
                alt="Raj Kumar Timalsina"
                width={200}
                height={200}
                priority
                className="h-36 w-36 sm:h-44 sm:w-44 md:h-48 md:w-48 rounded-full object-cover border-2 border-zinc-200/90 dark:border-zinc-800 shadow-sm"
              />
            </div>
          </section>

          {/* Selected Work */}
          <section id="projects" className="space-y-6 scroll-mt-20">
            <div className="flex items-baseline justify-between border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3">
              <h2 className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Selected Work
              </h2>
              <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                {projects.length} Projects
              </span>
            </div>

            <div className="flex flex-col divide-y divide-zinc-200/80 dark:divide-zinc-800/80">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-6 first:pt-2 last:pb-2 flex flex-col gap-2.5 hover:bg-zinc-50/70 dark:hover:bg-zinc-900/30 -mx-3 px-3 rounded-lg transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                      <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/70 text-zinc-600 dark:text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="space-y-6 scroll-mt-20">
            <h2 className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3">
              Experience
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-base sm:text-lg font-medium text-zinc-900 dark:text-zinc-100">
                      {exp.role}{" "}
                      <span className="text-zinc-500 dark:text-zinc-400 font-normal">
                        — {exp.company}
                      </span>
                    </h3>
                    <span className="font-mono text-xs text-zinc-500 shrink-0">
                      {exp.period} • {exp.location}
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 list-disc list-inside">
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3">
              Education
            </h2>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-base sm:text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  {education[0].degree}
                </h3>
                <span className="font-mono text-xs text-zinc-500 shrink-0">
                  {education[0].period}
                </span>
              </div>
              <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {education[0].institution} • {education[0].location}
              </p>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 pt-1">
                {education[0].description}
              </p>
            </div>
          </section>

          {/* Skills / Capabilities */}
          <section id="skills" className="space-y-6 scroll-mt-20">
            <h2 className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3">
              Skills & Technologies
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((group) => (
                <div key={group.category} className="space-y-2.5">
                  <h3 className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs px-2.5 py-1 rounded border border-zinc-200/80 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-900/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="space-y-6 scroll-mt-20">
            <h2 className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3">
              Contact
            </h2>

            <div className="space-y-4">
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
                Feel free to reach out for engineering opportunities, technical discussions, or collaborations:
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-1 font-mono text-xs">
                <a
                  href="mailto:rajk.timalsina05@gmail.com"
                  className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors py-1"
                >
                  <Mail className="h-3.5 w-3.5 text-zinc-400" />
                  <span>rajk.timalsina05@gmail.com</span>
                </a>
                <a
                  href="tel:+9779765033186"
                  className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors py-1"
                >
                  <Phone className="h-3.5 w-3.5 text-zinc-400" />
                  <span>+977 9765033186</span>
                </a>
                <span className="flex items-center gap-2 text-zinc-500 py-1">
                  <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                  <span>Kathmandu / Hetauda, Nepal</span>
                </span>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="pt-12 mt-12 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>© {new Date().getFullYear()} Raj Kumar Timalsina</div>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/irajkumarr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/irajkumarr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/irajkumarr_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              X
            </a>
            <Link
              href="#top"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              ↑ Top
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
