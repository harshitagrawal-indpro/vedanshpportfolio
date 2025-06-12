
const About = () => {
  const badges = [
    { icon: '👥', text: 'HR Manager' },
    { icon: '🎯', text: 'Digital Marketer' },
    { icon: '🤝', text: 'Team Leader' },
    { icon: '🎓', text: 'MBA Student' }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text animate-fade-in">
            About Me
          </h2>
          
          <div className="animate-fade-in">
            <p className="text-lg mb-12 text-muted-foreground leading-relaxed">
              Vedansh is a purpose-driven HR and strategy enthusiast with experience in both 
              traditional HR and AI-powered marketing. He has worked with GAOTek Inc., led teams, 
              and contributed to digital branding. He is currently pursuing an MBA from Ramaiah 
              Institute of Applied Sciences and is a proud core member of Progo.in.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {badges.map((badge, index) => (
                <div
                  key={badge.text}
                  className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in border border-accent/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <div className="font-semibold text-sm">{badge.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
