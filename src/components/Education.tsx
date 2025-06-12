
const Education = () => {
  const education = [
    {
      degree: 'Master of Business Administration (MBA)',
      institution: 'Ramaiah Institute of Applied Sciences',
      period: '2024 - 2027',
      status: 'In Progress',
      description: 'Specializing in strategic management and organizational leadership'
    },
    {
      degree: 'Bachelor of Business Administration',
      institution: 'Previous Institution',
      specialization: 'Human Resource Management',
      status: 'Completed',
      description: 'Specialized in HR operations, talent management, and organizational behavior'
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center gradient-text animate-fade-in">
            Education
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border border-accent/20"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    {edu.specialization && (
                      <p className="text-accent font-semibold mb-2">Specialization: {edu.specialization}</p>
                    )}
                    <p className="text-lg text-muted-foreground mb-2">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </div>
                  <div className="md:text-right mt-4 md:mt-0">
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-2 ${
                      edu.status === 'In Progress' ? 'bg-golden/20 text-golden-dark' : 'bg-accent/20 text-accent-foreground'
                    }`}>
                      {edu.status}
                    </div>
                    {edu.period && (
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    )}
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

export default Education;
