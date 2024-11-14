"use client";
import { Github, ExternalLink } from "lucide-react";
import ImageModalProjects from "@/components/ImageModalProjects";
import Masonry from "react-masonry-css";

const getBadgeColor = (tech: string) => {
  switch (tech) {
    case "React":
      return "bg-blue-500";
    case "PHP":
      return "bg-[#7377AD]";
    case "Next.js":
      return "bg-gray-800";
    case "Remix":
      return "bg-white text-black";
    case "Svelte":
      return "bg-[#FF3E00]";
    case "PostgreSQL":
      return "bg-[#31648C]";
    case "MySQL":
      return "bg-[#DF8C0F]";
    case "Node.js":
      return "bg-[#8CC84B]";
    case "Git":
      return "bg-[#F05539]";
    case "Tailwind CSS":
      return "bg-teal-600";
    case "Adobe Photoshop":
      return "bg-[#37AAFE]";
    case "Figma":
      return "bg-pink-600";
    default:
      return "bg-zinc-700";
  }
};

const projects = [
  {
    title: "Monitoring Billing Receivable",
    description:
      "A fullstack Monitoring Billing Receivable To Customer Key Account Modern Web Application",
    image: "/projects/project1.png",
    technologies: ["React", "Next.js", "PostgreSQL"],
    liveDemo: "https://monitoringpiutangtigaraksa.vercel.app/",
    github: "https://github.com/dhimasferdiansyah1/monitoringpiutang",
  },
  {
    title: "Alternative World",
    description:
      "Alternative World is a Minecraft server that allows players to cross-play between Java Edition and Bedrock Edition",
    image: "/projects/project2.png",
    technologies: ["React", "Next.js", "PostgreSQL"],
    liveDemo: "https://alt-w.vercel.app/",
    github: "https://github.com/dhimasferdiansyah1/alternative-network",
  },
  {
    title: "Todo App",
    description:
      "A simple todo app build with Remix that allows you to add, edit, and delete tasks",
    image: "/projects/project3.png",
    technologies: ["React", "Remix", "PostgreSQL"],
    liveDemo: "https://dhimas-todo-remix.vercel.app/",
    github: "https://github.com/dhimasferdiansyah1/todo-remix",
  },
  {
    title: "Archipelago",
    description:
      "A minecraft server web apps that allows players to play in a world with a variety of islands",
    image: "/projects/project4.png",
    technologies: ["React", "Next.JS", "PostgreSQL"],
    liveDemo: "https://archipelago-alpha.vercel.app/",
    github: "https://github.com/dhimasferdiansyah1/archipelago",
  },
  {
    title: "SMKS Imelda Medan",
    description:
      "A website for SMKS Imelda Medan, a vocational high school in Medan, Indonesia",
    image: "/projects/project5.png",
    technologies: ["React", "Next.JS", "PostgreSQL"],
    liveDemo: "https://smksimelda.vercel.app/",
    github: "https://github.com/dhimasferdiansyah1/remake-smks-imelda-medan",
  },
  {
    title: "Better Auth",
    description:
      "Learn how to build a better authentication system with Better Auth",
    image: "/projects/project6.png",
    technologies: ["React", "Next.JS", "PostgreSQL"],
    liveDemo: "https://better-auth-df.vercel.app/",
    github: "https://github.com/dhimasferdiansyah1/better-auth",
  },
  {
    title: "SvelteKit Todo",
    description:
      "A simple todo app build with SvelteKit that allows you to add, edit, and delete tasks",
    image: "/projects/project7.png",
    technologies: ["Svelte", "Prisma", "PostgreSQL"],
    liveDemo: "https://raw-sveltekit-todo-dhimas.vercel.app/",
    github: "https://github.com/dhimasferdiansyah1/raw-sveltekit-todo",
  },
];

export default function Projects() {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
  };
  return (
    <>
      <div className="flex min-h-screen w-full justify-center bg-zinc-900 py-12 px-8">
        <div className="w-full max-w-5xl">
          <h1 className="text-3xl font-bold text-white mb-8">My Projects</h1>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto -ml-4" // Mengubah margin kiri menjadi -4
            columnClassName="pl-4 bg-clip-padding" // Mengubah padding kiri menjadi 4
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-lg overflow-hidden mb-4"
              >
                {" "}
                {/* Mengubah margin bottom menjadi 4 */}
                <div className="w-full aspect-video">
                  <ImageModalProjects src={project.image} alt={project.title} />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-zinc-200 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-zinc-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`${getBadgeColor(
                          tech
                        )} bg-opacity-20 text-opacity-50 hover:brightness-150 duration-300 flex items-center gap-1.5 brightness-110 text-sm px-3 py-1 hover:cursor-default rounded-md text-zinc-200`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-200 bg-zinc-700 hover:bg-zinc-600 py-2 px-4 rounded flex items-center gap-2 transition-colors duration-200"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-200 bg-zinc-700 hover:bg-zinc-600 py-2 px-4 rounded flex items-center gap-2 transition-colors duration-200"
                    >
                      Github <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </>
  );
}
