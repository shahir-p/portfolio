import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import acerwala from "../../assets/acerwala.png";
import tripeloo from "../../assets/tripeloo.png";
import visionmap from "../../assets/visionmap.png";

const ProjectsPreview = () => {
  const projects = [
    {
      title: "Tripeloo",
      description: "A web platform for booking stays, packages, and activities with a smooth user experience.",
      image: tripeloo,
      tags: ["React", "Node.js", "MongoDB"],
      live: "https://tripeloo.com",
    },
    {
      title: "Acerwala",
      description: "A platform for property selling, leasing, and renting with ease and efficiency.",
      image: acerwala,
      tags: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
      live: "https://acerwala.netlify.app",
    },
    {
      title: "Visionmap",
      description: "A complete staff and management application for efficient organization operations.",
      image: visionmap,
      tags: ["Flutter", "Node.js", "MongoDB"],
      live: "https://play.google.com/store/apps/details?id=com.visionmap&pli=1",
    }

  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">My Latest Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-gradient rounded-2xl shadow-soft hover:shadow-medium transition-smooth group border border-border/50 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
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
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
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

        <div className="text-center">
          <Button asChild className="btn-primary">
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;