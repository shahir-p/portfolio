import { Button } from "@/components/ui/button";
import { Download, Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/developer-hero.jpg";

const About = () => {
  const experiences = [
    {
      year: "2024-2025",
      company: "Flapyid Pvt Ltd",
      position: "Software Developer",
      location: "Malappuram, Kerala",
      description: "Worked on frontend and backend development, creating APIs and building web and cross-platform mobile applications. Took a short break to attend a full-stack development course/internship at Luminar Technolab and then returned to contribute further at Flapyid.",
      skills: ["Flutter", "React", "Node.js", "MongoDB", "Express", "Bootstrap", "Tailwind CSS"]
    },
    {
      year: "2024",
      company: "Luminar Technolab",
      position: "Full Stack Developer Intern (Course)",
      location: "Hybrid",
      description: "Attended a full-stack development course while interning. Built responsive frontend interfaces and backend APIs using the MERN stack, gaining hands-on experience with real-world projects.",
      skills: ["MongoDB", "Express", "React", "Node.js", "Bootstrap", "Tailwind CSS"]
    },
    {
      year: "2023-2024",
      company: "Freelance",
      position: "Frontend Developer",
      location: "Remote",
      description: "Built static websites and frontend applications using Flutter and web technologies. Delivered responsive and visually appealing interfaces for various clients.",
      skills: ["Flutter", "HTML", "CSS", "JavaScript", "Bootstrap"]
    }

  ];

  const education = [
    {
      year: "2021-2024",
      institution: "Calicut University",
      degree: "Bachelor of Science in Computer Science",
      location: "Kerala, India",
      description: "Studied Computer Science and built a running Flutter project during the course.",
      achievements: ["Completed personal web/mobile projects"]
    },
    {
      year: "2024",
      institution: "Luminar Technolab",
      degree: "Full Stack Web Development Course",
      location: "Hybrid ",
      description: "Attended an intensive full-stack development course, learning the MERN stack and modern frontend/backend practices. Applied skills on real-world projects and assignments.",
      achievements: ["Built projects with MongoDB, Express, React, Node.js", "Gained hands-on full-stack experience"]
    }
  ];


  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "Flutter", "Tailwind CSS", "Bootstrap", "TypeScript (Basic)", "Next.js (Basic)"] },
    { category: "Backend", items: ["Node.js", "Express", "REST APIs"] },
    { category: "Database", items: ["MongoDB", "Firebase"] },
    { category: "DevOps", items: ["GitHub Actions", "Vercel", "Firebase"] },
    { category: "Tools", items: ["Git", "VSCode", "Figma", "Postman",] },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-foreground">About Me</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I'm a <span className="font-semibold">software developer</span> with 1 year of experience in the
                  <span className="font-semibold"> MERN stack</span> and self-taught <span className="font-semibold">Flutter</span>.
                  I enjoy learning new technologies and building user-friendly digital solutions.
                </p>

              </div>




              <Button className="btn-primary">
                <Download className="mr-2 h-4 w-4" />
                <a href="/src/assets/Muhammad Shahir p CV.pdf" download>
                  Download CV
                </a>
              </Button>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Muhammad Shahir - About"
                className="w-full max-w-md mx-auto rounded-2xl shadow-strong"
              />
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="card-gradient p-6 rounded-2xl shadow-soft border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-4">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the companies I've worked with
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="card-gradient p-8 rounded-2xl shadow-soft border border-border/50">
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-3 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{exp.position}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">Education</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My academic background and certifications
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="card-gradient p-8 rounded-2xl shadow-soft border border-border/50">
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <GraduationCap className="h-4 w-4" />
                      <span>{edu.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-3 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <span
                          key={achievementIndex}
                          className="px-3 py-1 bg-success/10 text-success text-sm rounded-full"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
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

export default About;