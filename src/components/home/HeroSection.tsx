import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/developer-hero.jpg";

const HeroSection = () => {
  return (
    <section className=" bg-white  section-padding min-h-screen flex items-center">
      <div className="container-custom bg-white w-full h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg">
                Hey, I'm Shahir
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Software
                <br />
                <span className="text-primary">Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                I build modern, scalable web and mobile applications with React, Node.js, and Flutter, focusing on clean code and exceptional user experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-primary group">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild className="btn-secondary">
                <a href="/src/assets/Muhammad Shahir p CV.pdf" download>
                  Download CV
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/shahir-p "
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/shahirp70 "
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shahirp70@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Alex Morgan - Software Developer"
                className="w-full max-w-md mx-auto rounded-2xl shadow-strong"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;