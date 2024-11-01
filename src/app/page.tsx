import {
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
  MoveRight,
  Download,
  // ThumbsUp,
  // Eye,
} from "lucide-react";
import Image from "next/image";
import ImageModal from "@/components/ImageModal";
import { Suspense } from "react";
import Link from "next/link";
import StatsButton from "@/components/Stats";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full justify-center bg-zinc-900 py-12 px-8">
      <div className="mx-auto max-w-5xl w-full">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Section 1 */}
          <div className="basis-1/3 flex flex-col w-full">
            <div className="flex justify-between items-start">
              <Image
                src="/dhimas.png"
                alt="profile"
                width={200}
                height={200}
                className="rounded-full w-28 h-28 object-cover object-top shadow shadow-white/50"
              />
              <StatsButton />
            </div>
            <h1 className="text-3xl font-bold mt-4 text-white">
              Dhimas Ferdiansyah
            </h1>
            <div className="flex flex-col mt-2">
              <p className="text-lg text-zinc-400">Fullstack Web Developer</p>
              <p className="text-lg text-zinc-400 flex items-center gap-2">
                Based on Indonesia
                <Image
                  src="/indonesia.png"
                  alt="indonesia"
                  width={20}
                  height={20}
                  draggable={false}
                />
              </p>
            </div>

            <div className="mt-4 border-y-2 border-zinc-600">
              <p className="italic text-zinc-400 text-sm text-center bg-zinc-800/40 px-2 py-4">
                &quot;Code without compromise, results without limits&quot;
              </p>
            </div>

            <div className="flex mt-4 gap-2 items-center">
              <a
                href="/resume/CV_Dhimas_Ferdiansyah.pdf"
                download
                className="bg-zinc-50 flex items-center gap-2 text-zinc-900 hover:bg-zinc-200 transition-colors duration-200 px-4 py-2 rounded-md"
              >
                <Download size={32} className="w-4 h-4 sm:w-8 sm:h-8" />
                Resume
              </a>

              {/* Social Media Icons */}
              <a
                href="https://github.com/dhimasferdiansyah1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-700 text-zinc-100 hover:bg-zinc-600 transition-colors duration-200 p-2 rounded-md"
              >
                <Github size={32} className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/dhimasferdiansyah/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-700 text-zinc-100 hover:bg-zinc-600 transition-colors duration-200 p-2 rounded-md"
              >
                <Linkedin size={32} className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
              <a
                href="https://www.instagram.com/dhimas.ferdiansyah/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-700 text-zinc-100 hover:bg-zinc-600 transition-colors duration-200 p-2 rounded-md"
              >
                <Instagram size={32} className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
            </div>
          </div>

          {/* Section 2 */}
          <div className="basis-2/3 flex flex-col w-full">
            {/* About me */}
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-white">About Me</h2>
              <p className="text-lg text-zinc-400 mt-2">
                I am 21 years old, Bachelor in Information Systems and Fullstack
                Web Developer with 3 years of experience. Focused on building
                efficient web solutions.
              </p>
            </div>
            {/* Skills */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-white">Skills</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "React",
                  "PHP",
                  "Next.js",
                  "Remix",
                  "PostgreSQL",
                  "MySQL",
                  "Prisma",
                  "Node.js",
                  "Git",
                  "Typescript",
                  "Tailwind CSS",
                  "Adobe Photoshop",
                  "Figma",
                ].map((skill) => {
                  let bgColor;
                  let textColor;
                  let image;

                  switch (skill) {
                    case "React":
                      image = "/skills/react-svgrepo-com.svg";
                      bgColor = "bg-blue-500";
                      break;
                    case "PHP":
                      image = "/skills/php-svgrepo-com.svg";
                      bgColor = "bg-[#7377AD]";
                      break;
                    case "Next.js":
                      image = "/skills/nextjs-icon-svgrepo-com.svg";
                      bgColor = "bg-gray-800";
                      break;
                    case "Remix":
                      image = "/skills/remix.png";
                      bgColor = "bg-white";
                      break;
                    case "Prisma":
                      image = "/skills/prisma-svgrepo-com.svg";
                      bgColor = "bg-[#2D3748]";
                      textColor = "text-white";
                      break;
                    case "PostgreSQL":
                      image = "/skills/postgresql-svgrepo-com.svg";
                      bgColor = "bg-[#31648C]";
                      break;
                    case "MySQL":
                      image = "/skills/mysql-logo-svgrepo-com.svg";
                      bgColor = "bg-[#DF8C0F]";
                      break;
                    case "Node.js":
                      image = "/skills/node-js-svgrepo-com.svg";
                      bgColor = "bg-[#8CC84B]";
                      break;
                    case "Git":
                      image = "/skills/git-svgrepo-com.svg";
                      bgColor = "bg-[#F05539]";
                      break;
                    case "Typescript":
                      image = "/skills/typescript-official-svgrepo-com.svg";
                      bgColor = "bg-[#007ACC]";
                      break;
                    case "Tailwind CSS":
                      image = "/skills/tailwind-svgrepo-com.svg";
                      bgColor = "bg-teal-600";
                      break;
                    case "Adobe Photoshop":
                      image = "/skills/photoshop-svgrepo-com.svg";
                      bgColor = "bg-[#37AAFE]";
                      break;
                    case "Figma":
                      image = "/skills/figma-svgrepo-com.svg";
                      bgColor = "bg-pink-600";
                      break;
                    default:
                      bgColor = "bg-zinc-700";
                  }

                  return (
                    <span
                      key={skill}
                      className={`${bgColor} ${textColor} text-zinc-200 bg-opacity-50 hover:brightness-150 duration-300 flex items-center gap-1.5 brightness-110 text-sm px-3 py-1 hover:cursor-default rounded-md`}
                    >
                      <Image
                        src={image || ""}
                        width={16}
                        height={16}
                        alt={skill}
                        draggable={false}
                      />
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Experience */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-white">Experience</h2>

              <div className="flex gap-4 mt-4 items-start">
                {/* Logo for Company 1 */}
                <Image
                  src="/kominfo.png"
                  width={48}
                  height={48}
                  alt="Kominfo Logo"
                  className="w-12 h-12 object-cover rounded-full bg-zinc-700"
                />
                <div>
                  <h3 className="text-lg font-bold text-zinc-400">
                    Cybersecurity Analyst, Balitbang SDM - Ministry of
                    Communication and Informatics, Jakarta{" "}
                    <span className="bg-zinc-800 text-sky-400 text-sm py-1 px-3 rounded-full ml-2">
                      2023
                    </span>
                  </h3>
                  <div className="flex flex-col gap-1 mt-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                      <p className="text-lg text-zinc-500">
                        Led cybersecurity risk assessment & remediation
                        planning.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <p className="text-lg text-zinc-500">
                        Top 50 selectee for G20 training, Bali.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-4 items-start">
                {/* Logo for Company 2 */}
                <Image
                  src="/kampusmengajar.png"
                  alt="SDN 6 Muara Satu Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-cover rounded-full bg-zinc-700"
                />
                <div>
                  <h3 className="text-lg font-bold text-zinc-400">
                    Teacher, Kampus Mengajar – SDN 6 Muara Satu, Lhokseumawe{" "}
                    <span className="bg-zinc-800 text-sky-400 text-sm py-1 px-3 rounded-full ml-2">
                      2023
                    </span>
                  </h3>
                  <div className="flex flex-col gap-1 mt-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <p className="text-lg text-zinc-500">
                        Taught literacy and numeracy with interactive methods.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <p className="text-lg text-zinc-500">
                        Led teacher collaborations for education enhancement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-white">Projects</h2>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <Suspense fallback={<div>Loading...</div>}>
                      <ImageModal
                        src="/projects/project1.png"
                        alt="Project 1"
                      />
                    </Suspense>
                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-zinc-400">
                          Monitoring Billing Receivable
                        </h3>
                        <p className="text-lg text-zinc-500 mt-1">
                          Monitoring Billing Receivable To Customer Key Account
                          Modern Web Application
                        </p>
                      </div>
                      {/* badge what technology that i use */}
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-800/20 text-zinc-100/50 bg-opacity-40 hover:brightness-150 duration-300 flex items-center gap-1.5 brightness-110 text-sm px-3 py-1 hover:cursor-default rounded-md">
                          Next.js
                        </span>
                        <span className="bg-[#31648C]/20 text-zinc-100/50 bg-opacity-40 hover:brightness-150 duration-300 flex items-center gap-1.5 brightness-110 text-sm px-3 py-1 hover:cursor-default rounded-md">
                          PostgreSQL
                        </span>
                        <span className="bg-[#007ACC]/20 text-zinc-100/50 bg-opacity-40 hover:brightness-150 duration-300 flex items-center gap-1.5 brightness-110 text-sm px-3 py-1 hover:cursor-default rounded-md">
                          Typescript
                        </span>
                        <span className="bg-teal-600/20 text-zinc-100/50 bg-opacity-40 hover:brightness-150 duration-300 flex items-center gap-1.5 brightness-110 text-sm px-3 py-1 hover:cursor-default rounded-md">
                          Tailwind CSS
                        </span>
                      </div>
                      {/* link to live demo or github repo */}
                      <div className="flex gap-4">
                        <a
                          href="https://monitoringpiutangtigaraksa.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-100 bg-zinc-700 hover:bg-zinc-600 py-1 px-3 flex items-center gap-2 transition-colors duration-200 rounded-md"
                        >
                          Live Demo <ExternalLink size={16} />
                        </a>
                        <a
                          href="https://github.com/dhimasferdiansyah1/monitoringpiutang"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-100 bg-zinc-700 hover:bg-zinc-600 py-1 px-3 flex items-center gap-2 transition-colors duration-200 rounded-md"
                        >
                          Github <Github size={16} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-start mt-2">
                    <Suspense fallback={<div>Loading...</div>}>
                      <ImageModal
                        src="/projects/project2.png"
                        alt="Project 2"
                      />
                    </Suspense>
                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-zinc-400">
                          Alternative World
                        </h3>
                        <p className="text-lg text-zinc-500 mt-1">
                          Alternative World is a Minecraft server that allows
                          players to cross-play between Java Edition and Bedrock
                          Edition
                        </p>
                      </div>
                      {/* badge what technology that i use */}
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-800/20 text-zinc-100/50 bg-opacity-40 hover:brightness-150 duration-300 flex items-center gap-1.5 brightness-110 text-sm px-3 py-1 hover:cursor-default rounded-md">
                          Next.js
                        </span>
                        <span className="bg-[#31648C]/20 text-zinc-100/50 bg-opacity-40 hover:brightness-150 duration-300 flex items-center gap-1.5 brightness-110 text-sm px-3 py-1 hover:cursor-default rounded-md">
                          PostgreSQL
                        </span>
                        <span className="bg-[#007ACC]/20 text-zinc-100/50 bg-opacity-40 hover:brightness-150 duration-300 flex items-center gap-1.5 brightness-110 text-sm px-3 py-1 hover:cursor-default rounded-md">
                          Typescript
                        </span>
                        <span className="bg-teal-600/20 text-zinc-100/50 bg-opacity-40 hover:brightness-150 duration-300 flex items-center gap-1.5 brightness-110 text-sm px-3 py-1 hover:cursor-default rounded-md">
                          Tailwind CSS
                        </span>
                      </div>
                      {/* link to live demo or github repo */}
                      <div className="flex gap-4">
                        <a
                          href="https://alt-w.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-100 bg-zinc-700 hover:bg-zinc-600 py-1 px-3 flex items-center gap-2 transition-colors duration-200 rounded-md"
                        >
                          Live Demo <ExternalLink size={16} />
                        </a>
                        <a
                          href="https://github.com/dhimasferdiansyah1/alternative-network"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-100 bg-zinc-700 hover:bg-zinc-600 py-1 px-3 flex items-center gap-2 transition-colors duration-200 rounded-md"
                        >
                          Github <Github size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* view all projects button */}
                  <div className="flex justify-end w-full">
                    <Link
                      href={"/projects"}
                      className="bg-zinc-700 flex justify-center items-center gap-2 w-full text-zinc-100 hover:bg-zinc-600 transition-colors duration-200 px-4 py-2 rounded-md"
                    >
                      View All Projects <MoveRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
