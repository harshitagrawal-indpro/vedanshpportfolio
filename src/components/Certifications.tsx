const Certifications = () => {
  const certifications = [
    {
      title: 'AI-Powered Digital Marketing & Digital Advertising Guide',
      provider: 'Udemy',
      instructor: 'Ing. Tomas Moravek, Learn Digital Advertising',
      duration: '52 total hours',
      date: 'March 26, 2025',
      image: '/lovable-uploads/8d5c1256-220c-4d81-8827-f81f9a5f03ff.png',
      category: 'Digital Marketing'
    },
    {
      title: 'Social Media Marketing & Management Masterclass 2024',
      provider: 'Udemy',
      instructor: 'Robin & Jesper',
      duration: '34.5 total hours',
      date: 'Nov. 8, 2024',
      image: '/lovable-uploads/7f7924ce-29ed-47da-b7fe-f760530ff90d.png',
      category: 'Social Media'
    },
    {
      title: 'Certificate of Completion - Internship Program',
      provider: 'GAOTek Inc.',
      description: 'Three-month internship program completion',
      date: 'May 5, 2025',
      image: '/lovable-uploads/8272b6fd-80c7-4387-bd9e-422c02a7ec88.png',
      category: 'Internship'
    },
    {
      title: 'Certificate of Training in Human Resources',
      provider: 'GAOTek Inc.',
      description: 'On-the-job training as Assistant Team Leader',
      date: 'May 5, 2025',
      image: '/lovable-uploads/40f49894-a6d3-47bf-943e-66d035e47182.png',
      category: 'HR Training'
    },
    {
      title: 'Certificate of Training in Digital Marketing',
      provider: 'GAOTek Inc.',
      description: 'Digital Marketing training as Assistant Team Leader',
      date: 'May 5, 2025',
      image: '/lovable-uploads/adf1098e-d0d8-4a74-b086-ef9de269667b.png',
      category: 'Digital Marketing'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center gradient-text animate-fade-in">
            Certifications & Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flip-card h-80 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front bg-card border border-accent/20 p-6 flex flex-col justify-between shadow-lg">
                    <div>
                      <div className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs font-semibold mb-4">
                        {cert.category}
                      </div>
                      <h3 className="font-bold text-lg mb-3 line-clamp-3">{cert.title}</h3>
                      <p className="text-accent font-semibold mb-2">{cert.provider}</p>
                      {cert.instructor && (
                        <p className="text-sm text-muted-foreground mb-2">Instructor: {cert.instructor}</p>
                      )}
                      {cert.duration && (
                        <p className="text-sm text-muted-foreground mb-2">Duration: {cert.duration}</p>
                      )}
                      {cert.description && (
                        <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                      )}
                    </div>
                    <div className="text-sm font-medium text-golden-dark">{cert.date}</div>
                  </div>
                  
                  {/* Back */}
                  <div className="flip-card-back bg-gradient-to-br from-accent/20 to-golden/20 border border-accent/40 p-4 flex items-center justify-center">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                    />
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

export default Certifications;