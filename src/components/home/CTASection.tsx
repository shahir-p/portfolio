import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ctaImage from "@/assets/cta-developer.jpg";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="card-gradient rounded-3xl shadow-strong p-8 lg:p-12 border border-border/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-foreground">
                  Let's talk about
                  <br />
                  <span className="text-primary">your project</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Ready to bring your ideas to life? I'm available for freelance projects and would love to hear about your vision.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-muted-foreground">Available for new projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-muted-foreground">Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-muted-foreground">Free consultation</span>
                </div>
              </div>

              <Button asChild className="btn-primary group">
                <Link to="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={ctaImage}
                  alt="Let's work together"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-medium"
                />
              </div>
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;