"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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

export default function Portfolio() {
  const [showResumeDropdown, setShowResumeDropdown] = useState(false);

  // Resume functions
  const handleResumeView = () => {
    // Option 1: Open resume in new tab (if you have a PDF file)
    window.open("./resume.pdf", "_blank");
    setShowResumeDropdown(false);
  };

  const handleResumeDownload = () => {
    // Create download link
    const link = document.createElement("a");
    link.href = "./resume.pdf"; // Path to your resume file
    link.download = "Raj_Kumar_Resume.pdf"; // Downloaded filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowResumeDropdown(false);
  };
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/irajkumarr",
      icon: Linkedin,
    },
    {
      name: "X",
      url: "https://x.com/irajkumarr_",
      icon: XIcon,
    },
    { name: "Github", url: "https://github.com/irajkumarr", icon: Github },
  ];
  const projects = [
    {
      title: "Learnify - E-learning App",
      duration: "Aug 2 – Aug 26, 2025",
      tech: ["Flutter", "NodeJS", "Express", "MongoDB"],
      type: "Full Stack App",
      badgeColor: "green",
      url: "https://github.com/irajkumarr/Learnify-ELearning-App",
    },
    {
      title: "HostelMate – Hostel Management System",
      duration: "June 16 – Aug 18, 2025",
      tech: ["Flutter", "NodeJS", "Express", "MongoDB"],
      type: "Full Stack App",
      badgeColor: "amber",
      url: "https://github.com/irajkumarr/hostel_management_app",
    },
    {
      title: "ServiceOnWheels - Servicing & Maintenance App",
      duration: "July 9 – July 21, 2025",
      tech: ["Flutter", "NodeJS", "Express", "MongoDB"],
      type: "Full Stack App",
      badgeColor: "blue",
      url: "https://github.com/irajkumarr/servicing_maintenance_app",
    },
    {
      title: "Rojgari - Job Seeker Platform",
      duration: "Jan 15 – Mar 15, 2025",
      tech: ["Flutter", "NodeJS", "Express", "MongoDB", "JWT"],
      type: "Full Stack App",
      badgeColor: "green",
      url: "https://github.com/irajkumarr/job-seeker-application",
    },
    {
      title: "Kirana - Grocery Shopping App",
      duration: "Dec 30, 2024 – Jan 15, 2025",
      tech: ["Flutter", "NodeJS", "MongoDB", "REST API"],
      type: "Mobile App",
      badgeColor: "yellow",
      url: "https://github.com/irajkumarr/grocery-application",
    },
    {
      title: "Chulesi - Food Delivery App",
      duration: "Aug 28 – Dec 3, 2024",
      tech: ["Flutter", "NodeJS", "MongoDB", "Firebase Notifications"],
      type: "Full Stack App",
      badgeColor: "red",
      url: "https://github.com/irajkumarr/chulesi-foodDelivery-app-frontend",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="relative flex justify-between items-center px-4 py-4 md:px-8 md:py-6 backdrop-blur-sm">
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <Mail className="w-4 h-4" />
          <span>rajk.timalsina05@gmail.com</span>{" "}
          {/* Email text is now always visible */}
        </div>
        <nav className="flex items-center space-x-4 text-sm md:space-x-6">
          <Link
            href="#"
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </Link>
          <span className="text-gray-500">/</span>
          {/* <Link
            href="#"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            Resume
          </Link> */}
          {/* Resume - Dropdown on desktop, direct download on mobile */}
          <div className="relative">
            {/* Mobile and Tablet: Direct download link */}
            <a
              href="./resume.pdf"
              download="Raj_Kumar_Resume.pdf"
              className="lg:hidden relative text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-1 group cursor-pointer"
            >
              <span>Resume</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>

            {/* Desktop: Dropdown button */}
            <button
              onClick={() => setShowResumeDropdown(!showResumeDropdown)}
              onMouseEnter={() => setShowResumeDropdown(true)}
              className="hidden lg:flex relative text-gray-400 hover:text-blue-400 transition-colors duration-300 items-center space-x-1 group cursor-pointer"
            >
              <span>Resume</span>
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${
                  showResumeDropdown ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Desktop: Dropdown Menu */}
            {showResumeDropdown && (
              <div
                className="hidden lg:block absolute right-0 top-full pt-2 w-48 z-[99999]"
                onMouseEnter={() => setShowResumeDropdown(true)}
                onMouseLeave={() => setShowResumeDropdown(false)}
              >
                <div className="bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl animate-in fade-in-0 zoom-in-95 duration-200">
                  <div className="p-2 space-y-1">
                    <button
                      onClick={handleResumeView}
                      className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-500/10 rounded-lg transition-all duration-200 flex items-center space-x-3 group/item"
                    >
                      <div className="p-1 rounded-md bg-blue-500/10 group-hover/item:bg-blue-500/20 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">View Resume</span>
                    </button>

                    <button
                      onClick={handleResumeDownload}
                      className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-green-500/10 rounded-lg transition-all duration-200 flex items-center space-x-3 group/item"
                    >
                      <div className="p-1 rounded-md bg-green-500/10 group-hover/item:bg-green-500/20 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Download PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
      {/* Main Content */}
      <main className="relative px-4 py-8 md:px-8 md:py-12 max-w-7xl mx-auto z-[0]">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-start justify-between mb-12 md:mb-20">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">Available for work</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Hi, I'm Raj
              </span>
              <span className="ml-2">👋</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8 max-w-2xl">
              Passionate{" "}
              <span className="text-orange-400 font-semibold">
                Full Stack Mobile Developer
              </span>
              , I've been learning and building for{" "}
              <span className="text-orange-400 font-semibold">2 years</span>. I
              focus on crafting robust backends and beautiful mobile
              applications, specializing in{" "}
              <span className="text-blue-400 font-semibold">Flutter</span>{" "}
              {/* <span className="text-blue-400 font-semibold">TypeScript</span>, */}
              and <span className="text-green-400 font-semibold">NodeJS</span>.
            </p>
            <div className="flex items-center space-x-4 mb-6 md:mb-8">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Hetauda, Nepal</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {" "}
              {/* Use flex-wrap for social links on small screens */}
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className="flex items-center space-x-2 px-3 py-1.5 text-sm bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                >
                  <social.icon className="w-4 h-4" />
                  <span>{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3 flex justify-center lg:justify-end w-full lg:w-auto mt-8 lg:mt-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-500 p-1 bg-gradient-to-r from-blue-400 to-purple-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
                  <Image
                    src="./user-image.png"
                    alt="Raj Profile"
                    width={288}
                    height={288}
                    unoptimized
                    className="w-[94%] h-[94%] object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-400 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-4 border-gray-950 flex items-center justify-center">
                {/* Animated inner white circle */}
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 md:mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Latest Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <Badge
                      variant="secondary"
                      className={`text-xs md:text-sm ${
                        project.badgeColor === "blue"
                          ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          : project.badgeColor === "green"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : project.badgeColor === "yellow"
                          ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                          : "bg-red-500/20 text-red-400 border-red-500/30"
                      }`}
                    >
                      {project.type}
                    </Badge>
                    <span className="text-gray-500 text-xs">
                      {project.duration}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg text-white font-semibold mb-2 md:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
                    {project.tech.join(" • ")}
                  </p>
                  {project.url ? (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-400 hover:text-cyan-300 p-0 text-xs md:text-sm cursor-pointer"
                      >
                        View project{" "}
                        <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-400 hover:text-cyan-300 p-0 text-xs md:text-sm cursor-pointer"
                    >
                      View project{" "}
                      <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Interested in working together?
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto">
              Email me at{" "}
              <Link
                href="mailto:rajk.timalsina05@gmail.com"
                className="text-blue-400 hover:text-blue-300"
              >
                rajk.timalsina05@gmail.com
              </Link>{" "}
              or follow me via my social links.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
              {/* Email Button */}
              <a href="mailto:rajk.timalsina05@gmail.com">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-sm md:text-base cursor-pointer"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Send Email
                </Button>
              </a>
            </div>
            <div className="flex justify-center space-x-4 md:space-x-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-1 md:p-2"
                >
                  <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
