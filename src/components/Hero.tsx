
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-accent/5 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-golden/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-navy/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-float">
            Vedansh Singh
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            People First. Strategy Second. Innovation Always.
          </p>
          <p className="text-lg mb-12 text-muted-foreground max-w-2xl mx-auto">
            HR Manager, Digital Marketing Specialist & Team Leader passionate about 
            driving organizational growth through people-centric strategies and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:singhvedansh775@gmail.com?subject=Resume%20Request&body=Hi%20Vedansh,%20I%20would%20like%20to%20request%20your%20resume."
              className="btn-glow bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300"
            >
              📄 Download Resume
            </a>
            <a
              href="https://linkedin.com/in/vedansh-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300"
            >
              🔗 Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
