
const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 gradient-text animate-fade-in">
            Projects & Affiliations
          </h2>
          
          <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border border-accent/20">
            <div className="mb-6">
              <div className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
                Core Team Member
              </div>
              <h3 className="text-2xl font-bold mb-4">Progo.in</h3>
              <a 
                href="https://pro-go.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 font-semibold underline transition-colors duration-300"
              >
                Visit Website →
              </a>
            </div>
            
            <div className="text-left space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Student innovation collective focused on driving entrepreneurship and strategic thinking among young professionals.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">Key Contributions:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Strategic planning and organizational development
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Student HR initiatives and team coordination
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Marketing strategy and brand development
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Youth leadership and mentorship programs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
