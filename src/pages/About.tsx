import { Button } from "@/components/ui/button";
import { Download, Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/developer-hero.jpg";

const About = () => {
  const experiences = [
    {
      year: "2022-2024",
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      description: "Led development of enterprise web applications using React, Node.js, and cloud technologies. Managed a team of 4 developers and improved system performance by 40%.",
      skills: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
    },
    {
      year: "2020-2022",
      company: "StartupXYZ",
      position: "Full Stack Developer",
      location: "Austin, TX",
      description: "Developed and maintained multiple client projects from concept to deployment. Specialized in modern web technologies and API development.",
      skills: ["JavaScript", "Python", "MongoDB", "Docker", "Vue.js"],
    },
    {
      year: "2019-2020",
      company: "Digital Agency Inc",
      position: "Frontend Developer",
      location: "Remote",
      description: "Created responsive web applications and optimized user experiences for various clients. Collaborated with design teams to implement pixel-perfect interfaces.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Sass"],
    },
  ];

  const education = [
    {
      year: "2015-2019",
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      location: "San Francisco, CA",
      description: "Graduated with honors. Focused on software engineering, algorithms, and web development. Active member of the programming club and hackathon organizer.",
      achievements: ["Dean's List", "Best Final Project Award", "Programming Club President"],
    },
    {
      year: "2018",
      institution: "Google Developer Challenge",
      degree: "Full Stack Web Development Certificate",
      location: "Online",
      description: "Comprehensive program covering modern web development technologies, best practices, and project-based learning.",
      achievements: ["Top 10% Graduate", "Capstone Project Recognition"],
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "Express", "GraphQL", "REST APIs"] },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"] },
    { category: "DevOps", items: ["AWS", "Docker", "CI/CD", "Vercel", "GitHub Actions"] },
    { category: "Tools", items: ["Git", "VSCode", "Figma", "Postman", "Linear"] },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-foreground">About Me</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I'm a passionate software developer with 5+ years of experience creating 
                  innovative digital solutions. I love turning complex problems into simple, 
                  beautiful, and intuitive designs.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Available for projects</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
              </div>

              <Button className="btn-primary">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Alex Morgan - About"
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
                      <Briefcase className="h-4 w-4" />
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

      {/* CTA Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-4xl font-bold text-foreground">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? I'd love to hear about your ideas and help bring them to life.
          </p>
          <Button asChild className="btn-primary">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;