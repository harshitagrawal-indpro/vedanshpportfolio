
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-card border-t border-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">Vedansh Singh</h3>
            <p className="text-muted-foreground">
              People First. Strategy Second. Innovation Always.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://linkedin.com/in/vedansh-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent/20 hover:bg-accent/30 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              💼
            </a>
            <a
              href="mailto:singhvedansh775@gmail.com"
              className="p-3 bg-accent/20 hover:bg-accent/30 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              ✉️
            </a>
            <a
              href="tel:+916393539339"
              className="p-3 bg-accent/20 hover:bg-accent/30 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Phone"
            >
              📞
            </a>
            <a
              href="https://wa.me/916393539339"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent/20 hover:bg-accent/30 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="WhatsApp"
            >
              💬
            </a>
          </div>
          
          <div className="border-t border-accent/20 pt-8">
            <p className="text-muted-foreground text-sm mb-4">
              © 2025 Vedansh Singh. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              Crafted with Vision by Vedansh Singh
            </p>
            
            <button
              onClick={scrollToTop}
              className="btn-glow bg-accent/20 hover:bg-accent/30 text-accent-foreground px-6 py-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
