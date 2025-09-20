import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";
import { useEffect, useState } from "react";
import acerwala from "../assets/acerwala.png";
import tripeloo from "../assets/tripeloo.png";
import visionmap from "../assets/visionmap.png";
import lumark from "../assets/lumark.jpg";
import buggy from "../assets/buggy.jpg";
import alrida from "../assets/alrida 1.jpg";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Website", "Cross-Platform"];

  const projects = [
    {
      title: "Tripeloo",
      description: "A web platform for booking stays, packages, and activities with a smooth user experience.",
      image: tripeloo,
      category: "Website",
      tags: ["React", "Node.js", "MongoDB"],
      live: "https://tripeloo.com",
      year: "2025",
    },
    {
      title: "Acerwala",
      description: "A platform for property selling, leasing, and renting with ease and efficiency.",
      image: acerwala,
      category: "Website",
      tags: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
      live: "https://acerwala.netlify.app",
      year: "2025",
    },
    {
      title: "Visionmap",
      description: "A complete staff and management application for efficient organization operations.",
      image: visionmap,
      category: "Cross-Platform",
      tags: ["Flutter", "Node.js", "MongoDB"],
      live: "https://play.google.com/store/apps/details?id=com.visionmap&pli=1",
      year: "2025",
    },
    {
      title: "Lumark Lights",
      description: "Cross-platform app for a lighting shop with quotation creation and purchase list management.",
      image: lumark,
      category: "Cross-Platform",
      tags: ["Flutter", "Firebase"],

      live: "https://example.com",
      year: "2025",
    },

    {
      title: "Buggy Riders",
      description: "Buggy booking platform for desert safari adventures with online reservations, ride packages, and customer management.",
      image: buggy,
      category: "Website",
      tags: ["Next.js", "Vercel", "Firebase"],

      live: "https://buggyriders.com",
      year: "2025",
    },
    {
      title: "Alrida",
      description: "College project built with Flutter and Firebase for Alrida Fried Chicken. The app includes modules for users, admins, and delivery boys with features like order management, real-time updates, and notifications.",
      image: alrida,
      category: "Cross-Platform",
      tags: ["Flutter", "Firebase",],
      github: "https://github.com",
      live: "https://example.com",
      year: "2024",
    }

  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl font-bold text-foreground">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills in web development, mobile apps, and system architecture
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-smooth ${selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="card-gradient rounded-2xl shadow-soft hover:shadow-medium transition-smooth group border border-border/50 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 text-gray-700" />
                    </a>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-gray-700 text-sm rounded-full font-medium">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <span className="text-sm text-primary font-medium">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;