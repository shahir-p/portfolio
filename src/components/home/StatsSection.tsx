import { Users, Coffee, Star, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "15+",
      label: "Happy Clients",
      color: "text-blue-500",
    },
    {
      icon: Coffee,
      number: "20+",
      label: "Projects Completed",
      color: "text-green-500",
    },
  
    {
      icon: Award,
      number: "1+",
      label: "Year Experience", // changed text
      color: "text-purple-500",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
  {stats.map((stat, index) => {
    const IconComponent = stat.icon;
    return (
      <div
        key={index}
        className="text-center space-y-3 group cursor-pointer p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
      >
        <div className={`${stat.color} flex justify-center`}>
          <IconComponent className="h-8 w-8 group-hover:scale-110 transition-transform" />
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-bold text-foreground">
            {stat.number}
          </div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default StatsSection;
