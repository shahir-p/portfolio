import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand / About */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Muhammad Shahir p
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md leading-relaxed">
            Full-stack developer passionate about building modern web and mobile applications 
            with clean code and intuitive user experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-primary">
            Navigation
          </h3>
          <ul className="mt-5 space-y-3">
            {[
              { name: "Projects", href: "#projects" },
              { name: "About", href: "#about" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-primary">
            Connect
          </h3>
          <div className="flex space-x-4 mt-5">
            {[
              { name: "GitHub", href: "https://github.com", icon: "github" },
              { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
              { name: "Email", href: "mailto:youremail@example.com", icon: "email" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.icon !== "email" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 transform hover:-translate-y-1"
                aria-label={social.name}
              >
                <span className="sr-only">{social.name}</span>
                {/* In a real implementation, you would use actual icons here */}
                <div className="text-sm font-medium">
                  {social.icon === "github" ? "GH" : 
                   social.icon === "linkedin" ? "IN" : "EM"}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t py-6 text-center text-sm text-muted-foreground">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <span>© {currentYear} YourName. All rights reserved.</span>
          <span className="mt-2 md:mt-0 text-xs opacity-80">Made with ❤️ using React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;