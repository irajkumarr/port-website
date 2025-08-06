"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Mail, MapPin, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/raj-kumar-timalsina/",
      icon: Linkedin,
    },
    { name: "Github", url: "https://github.com/learnwithraj", icon: Github },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="relative flex justify-between items-center px-4 py-4 md:px-8 md:py-6 backdrop-blur-sm">
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <Mail className="w-4 h-4" />
          <span className="hidden sm:inline">
            heyitsrajkumar@gmail.com
          </span>{" "}
          {/* Hide email on very small screens */}
        </div>
        <nav className="flex items-center space-x-4 text-sm md:space-x-6">
          <Link
            href="#"
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <Link
            href="#"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            Resume
          </Link>
        </nav>
      </header>
      {/* Main Content */}
      <main className="relative px-4 py-8 md:px-8 md:py-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-start justify-between mb-12 md:mb-20">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">Available for work</span>
            </div>
            {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Hi, I'm Raj 👋
            </h1> */}
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
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                  <Image
                    src="./user.png"
                    alt="Raj Profile"
                    width={288}
                    height={288}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* <div className="absolute -bottom-2 -right-2 bg-green-400 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-4 border-gray-950 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div> */}
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

        {/* Latest Projects Section */}
        <section className="mb-12 md:mb-20">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold">Latest Projects</h2>
            {/* You can add a "See all" link if needed */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Servicing & Maintenance App */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs md:text-sm"
                  >
                    Full Stack App
                  </Badge>
                  <span className="text-gray-500 text-xs">
                    July 9 – July 21, 2025
                  </span>
                </div>
                <h3 className="text-base md:text-lg text-white font-semibold mb-2 md:mb-3">
                  ServiceOnWheels - Servicing & Maintenance App
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
                  Flutter • NodeJS • Express • MongoDB
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-400 hover:text-cyan-300 p-0 text-xs md:text-sm cursor-pointer"
                >
                  View project{" "}
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Job Seeker App */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-green-500/20 text-green-400 border-green-500/30 text-xs md:text-sm"
                  >
                    Full Stack App
                  </Badge>
                  <span className="text-gray-500 text-xs">
                    {" "}
                    Jan 15 – Mar 15, 2025
                  </span>
                </div>
                <h3 className="text-base md:text-lg text-white font-semibold mb-2 md:mb-3">
                  Rojgari - Job Seeker Platform
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
                  Flutter • NodeJS • Express • MongoDB • JWT
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-400 hover:text-cyan-300 p-0 text-xs md:text-sm cursor-pointer"
                >
                  View project{" "}
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Grocery App */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-xs md:text-sm"
                  >
                    Mobile App
                  </Badge>
                  <span className="text-gray-500 text-xs">
                    {" "}
                    Dec 30, 2024 – Jan 15, 2025
                  </span>
                </div>
                <h3 className="text-base md:text-lg text-white font-semibold mb-2 md:mb-3">
                  Kirana - Grocery Shopping App
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
                  Flutter • NodeJS • MongoDB • REST API
                </p>
                {/* <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-400 hover:text-blue-300 p-0 text-xs md:text-sm"
                >
                  View project{" "}
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                </Button> */}
                <Link
                  href="https://github.com/learnwithraj/grocery-application"
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
              </CardContent>
            </Card>

            {/* Food Delivery App */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-red-500/20 text-red-400 border-red-500/30 text-xs md:text-sm"
                  >
                    Full Stack App
                  </Badge>
                  <span className="text-gray-500 text-xs">
                    {" "}
                    Aug 28 – Dec 3, 2024
                  </span>
                </div>
                <h3 className="text-base md:text-lg text-white font-semibold mb-2 md:mb-3">
                  Chulesi - Food Delivery App
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
                  Flutter • NodeJS • MongoDB • Firebase Notifications
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-400 hover:text-cyan-300 p-0 text-xs md:text-sm cursor-pointer"
                >
                  View project{" "}
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
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
                href="mailto:heyitsrajkumar@gmail.com"
                className="text-blue-400 hover:text-blue-300"
              >
                heyitsrajkumar@gmail.com
              </Link>{" "}
              or follow me via my social links.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
              {/* Email Button */}
              <a href="mailto:heyitsrajkumar@gmail.com">
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
