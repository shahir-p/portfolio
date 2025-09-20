import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // EmailJS send
    emailjs.send(
      "service_di74hq8",      // EmailJS Service ID
      "template_aw51mn8",     // EmailJS Template ID
      {
        name: formData.name,       // matches {{name}} in template
        email: formData.email,     // matches {{email}} in template
        subject: formData.subject, // matches {{subject}} in template
        message: formData.message, // matches {{message}} in template
      },
      "tm4LAa3eaAf13hlqP"       // EmailJS Public Key
    ).then(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }).catch((error) => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
      console.error(error);
    });
  };

  const contactInfo = [
    { icon: Mail, title: "Email", content: "shahirp70@gmail.com", link: "https://mail.google.com/mail/?view=cm&fs=1&to=shahirp70@gmail.com" },
    { icon: Phone, title: "Phone", content: "+91 9526718126", link: "tel:+919526718126" },
    { icon: MapPin, title: "Location", content: "Malappuram, Kerala", link: null },
    { icon: Clock, title: "Response Time", content: "Within 24 hours", link: null },
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "https://github.com/shahir-p ", color: "hover:text-gray-700" },
    { icon: Linkedin, name: "LinkedIn", url: "https://linkedin.com/in/shahirp70", color: "hover:text-blue-600" },

  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <div className="space-y-4 mb-12">
            <h1 className="text-5xl font-bold text-foreground">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I welcome your messages and look forward to connecting with you.
            </p>

          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-gradient p-8 rounded-2xl shadow-soft border border-border/50">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-foreground">Send Me a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message..." rows={6} required />
                  </div>

                  <Button type="submit" className="btn-primary w-full group">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const content = info.link ? (
                      <a href={info.link} className="hover:text-primary transition-colors">{info.content}</a>
                    ) : <span>{info.content}</span>;

                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <div className="font-medium text-foreground">{info.title}</div>
                          <div className="text-muted-foreground">{content}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={`p-3 bg-secondary rounded-xl transition-colors ${social.color}`}>
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
