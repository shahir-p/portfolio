import reactLogo from "../../assets/react.svg";
import nodeLogo from "../../assets/node.svg";
import flutterLogo from "../../assets/flutter.svg";
import mongoLogo from "../../assets/mongodb.svg";
import tailwindLogo from "../../assets/tailwind.svg";
import bootstrapLogo from "../../assets/bootstrap.svg";

const TechStackSection = () => {
  const technologies = [
    {
      name: "React",
      category: "Frontend",
      color: "#61DAFB",
      icon: reactLogo,
    },
    {
      name: "Node.js",
      category: "Backend",
      color: "#339933",
      icon: nodeLogo,
    },
    {
      name: "Flutter",
      category: "Mobile",
      color: "#02569B",
      icon: flutterLogo,
    },
    {
      name: "MongoDB",
      category: "Database",
      color: "#47A248",
      icon: mongoLogo,
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      color: "#38B2AC",
      icon: tailwindLogo,
    },
    {
      name: "Bootstrap",
      category: "Styling",
      color: "#7952B3",
      icon: bootstrapLogo,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Technologies I Love
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I work with modern technologies to build scalable, performant applications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="card-gradient p-6 rounded-2xl shadow-soft hover:shadow-medium transition-smooth group cursor-pointer border border-border/50"
            >
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-12 w-12 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
