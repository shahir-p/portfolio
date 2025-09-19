import { Button } from "@/components/ui/button";
import { 
  Code, 
  Smartphone, 
  Database, 
  Cloud, 
  Palette, 
  Zap, 
  CheckCircle, 
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Next.js, and Node.js. Fast, scalable, and SEO-optimized.",
      features: ["Responsive Design", "Performance Optimization", "SEO-Friendly", "Cross-browser Compatible"],
      price: "Starting at $3,000",
      color: "text-blue-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android using React Native and modern development practices.",
      features: ["iOS & Android", "Cross-platform", "Native Performance", "App Store Deployment"],
      price: "Starting at $5,000",
      color: "text-green-500",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust backend systems with RESTful APIs, GraphQL, database design, and microservices architecture.",
      features: ["RESTful APIs", "Database Design", "Authentication", "Real-time Features"],
      price: "Starting at $2,500",
      color: "text-purple-500",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud deployment, DevOps, CI/CD pipelines, and infrastructure management on AWS, Vercel, and other platforms.",
      features: ["AWS Deployment", "CI/CD Setup", "Performance Monitoring", "Auto Scaling"],
      price: "Starting at $1,500",
      color: "text-orange-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design with modern aesthetics, intuitive interfaces, and seamless user experiences.",
      features: ["Wireframing", "Prototyping", "User Testing", "Design Systems"],
      price: "Starting at $2,000",
      color: "text-pink-500",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Website speed optimization, code refactoring, and performance audits to improve user experience and SEO.",
      features: ["Speed Optimization", "Code Refactoring", "SEO Audit", "Performance Monitoring"],
      price: "Starting at $1,000",
      color: "text-yellow-500",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We discuss your project requirements, goals, and timeline to create a detailed project plan.",
    },
    {
      step: "02", 
      title: "Design & Prototype",
      description: "I create wireframes and prototypes to visualize the solution before development begins.",
    },
    {
      step: "03",
      title: "Development",
      description: "Clean, efficient code development with regular updates and milestone reviews.",
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing, optimization, and deployment to ensure everything works perfectly.",
    },
    {
      step: "05",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance to keep your project running smoothly.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CEO", 
      content: "Alex delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise is outstanding.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      company: "Digital Solutions",
      role: "CTO",
      content: "Working with Alex was a pleasure. He understood our requirements perfectly and delivered a scalable solution on time and within budget.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      company: "E-commerce Plus",
      role: "Founder",
      content: "The mobile app Alex developed for us has been a game-changer for our business. Professional, reliable, and highly skilled.",
      rating: 5,
    },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <div className="space-y-4 mb-12">
            <h1 className="text-5xl font-bold text-foreground">My Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I offer comprehensive development services to help bring your digital ideas to life. 
              From concept to deployment, I've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="card-gradient p-8 rounded-2xl shadow-soft hover:shadow-medium transition-smooth border border-border/50 group"
                >
                  <div className="space-y-6">
                    {/* Icon & Title */}
                    <div className="space-y-4">
                      <div className={`${service.color} p-3 bg-secondary rounded-xl w-fit group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="pt-4 border-t border-border">
                      <div className="text-xl font-semibold text-primary">{service.price}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">My Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to deliver high-quality results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">What Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it - here's what my clients have to say
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-gradient p-6 rounded-2xl shadow-soft border border-border/50">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>

                  {/* Author */}
                  <div className="space-y-1">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
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
        <div className="container-custom">
          <div className="card-gradient rounded-3xl shadow-strong p-8 lg:p-12 border border-border/50 text-center">
            <div className="space-y-6 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's discuss your ideas and create something amazing together. 
                I'm available for new projects and would love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-primary group">
                  <Link to="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild className="btn-secondary">
                  <Link to="/projects">View My Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;