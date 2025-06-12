const Experience = () => {
  const experiences = [
    {
      company: 'GAOTek Inc.',
      position: 'HR Manager',
      period: 'Jan 2025 - May 2025',
      description: 'Leading HR operations and strategic initiatives',
      type: 'current'
    },
    {
      company: 'GAOTek Inc.',
      position: 'Assistant Team Lead',
      period: 'Feb 2025 - May 2025',
      description: 'Managing team operations and coordinating projects',
      type: 'current'
    },
    {
      company: 'GAOTek Inc.',
      position: 'Internship Program',
      period: '3-month completion',
      description: 'Completed comprehensive training in HR and Digital Marketing',
      type: 'completed'
    },
    {
      company: 'Progo.in',
      position: 'Core Team Member',
      period: 'Ongoing',
      description: 'Student innovation group - strategic planning & youth development',
      type: 'current'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center gradient-text animate-fade-in">
            Experience Timeline
          </h2>
          
          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on md+ */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-golden"></div>
            
            {/* Mobile Timeline Line - Visible only on mobile */}
            <div className="md:hidden absolute left-8 w-1 h-full bg-gradient-to-b from-accent to-golden"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                
                {/* Desktop Layout - Two Column Alternating */}
                <div className={`hidden md:flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-accent/20">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                        exp.type === 'current' ? 'bg-golden/20 text-golden-dark' : 'bg-accent/20 text-accent-foreground'
                      }`}>
                        {exp.type === 'current' ? 'Current' : 'Completed'}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{exp.position}</h3>
                      <p className="text-accent font-semibold mb-2">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                      <p className="text-sm">{exp.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-accent rounded-full border-4 border-background animate-pulse-glow"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>

                {/* Mobile Layout - Single Column */}
                <div className="md:hidden flex items-start">
                  {/* Timeline Dot for Mobile */}
                  <div className="relative z-10 mr-6 mt-6">
                    <div className="w-4 h-4 bg-accent rounded-full border-4 border-background animate-pulse-glow"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-accent/20">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                        exp.type === 'current' ? 'bg-golden/20 text-golden-dark' : 'bg-accent/20 text-accent-foreground'
                      }`}>
                        {exp.type === 'current' ? 'Current' : 'Completed'}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{exp.position}</h3>
                      <p className="text-accent font-semibold mb-2">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                      <p className="text-sm">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;