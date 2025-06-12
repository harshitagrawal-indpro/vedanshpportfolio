const Skills = () => {
  const skills = [
    { name: 'HR Operations', icon: '👥', level: 90 },
    { name: 'Strategic Thinking', icon: '🧠', level: 85 },
    { name: 'Team Leadership', icon: '🤝', level: 88 },
    { name: 'Market Research', icon: '📊', level: 82 },
    { name: 'Digital & AI Marketing', icon: '🎯', level: 87 },
    { name: 'Communication', icon: '💬', level: 92 },
    { name: 'Emotional Intelligence', icon: '❤️', level: 89 },
    { name: 'People Skills', icon: '🌟', level: 91 }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center gradient-text animate-fade-in">
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in border border-accent/20 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 animate-float group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold mb-4">{skill.name}</h3>
                  
                  {/* Skill Level Bar */}
                  <div className="relative mb-2">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-accent to-golden h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;