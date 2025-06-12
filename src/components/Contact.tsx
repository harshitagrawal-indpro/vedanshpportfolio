
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact: ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.open(`mailto:singhvedansh775@gmail.com?subject=${subject}&body=${body}`);
  };

  const contactInfo = [
    {
      icon: '📞',
      label: 'Phone',
      value: '+91 63935 39339',
      href: 'tel:+916393539339'
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'singhvedansh775@gmail.com',
      href: 'mailto:singhvedansh775@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/vedansh-singh'
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      value: 'Quick Message',
      href: 'https://wa.me/916393539339'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center gradient-text animate-fade-in">
            Let's Connect
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to collaborate on your next HR initiative or digital marketing project? 
                I'd love to hear from you and discuss how we can work together to achieve your goals.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl hover:bg-accent/10 transition-all duration-300 hover:scale-105 border border-accent/20 group"
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="font-semibold">{contact.label}</div>
                      <div className="text-muted-foreground text-sm">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-xl border border-accent/20 bg-card focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-xl border border-accent/20 bg-card focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-xl border border-accent/20 bg-card focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-glow bg-accent hover:bg-accent/90 text-accent-foreground py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
