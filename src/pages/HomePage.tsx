import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Twitter, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
const projects = [
  {
    id: 1,
    title: 'Project Cygnus',
    category: 'Brand Identity',
    imageUrl: 'https://images.unsplash.com/photo-1558368315-a24a4a43f5c7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Stellar Web App',
    category: 'UI/UX Design',
    imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Orion Mobile',
    category: 'Mobile App Design',
    imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Nebula Dashboard',
    category: 'Web Development',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Andromeda UI Kit',
    category: 'Design System',
    imageUrl: 'https://images.unsplash.com/photo-1559028006-44a3a5f275b5?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Pulsar Analytics',
    category: 'Data Visualization',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
  },
];
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-foreground/80 hover:text-accent transition-colors duration-300 text-sm font-medium"
  >
    {children}
  </a>
);
const SocialLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground/60 hover:text-accent transition-colors duration-300"
  >
    {children}
  </a>
);
const Section = ({ id, children, className }: { id: string; children: React.ReactNode; className?: string }) => (
  <motion.section
    id={id}
    className={cn("py-24 md:py-32", className)}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </motion.section>
);
export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="bg-background font-sans antialiased">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50" style={{ scaleX }} />
      <header className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-border/50" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-lg font-bold text-foreground hover:text-accent transition-colors duration-300">
              AuraFolio
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-background/95 backdrop-blur-sm pb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <nav className="flex flex-col items-center space-y-4 pt-2">
              <a href="#work" onClick={toggleMenu} className="text-foreground/80 hover:text-accent transition-colors duration-300">Work</a>
              <a href="#about" onClick={toggleMenu} className="text-foreground/80 hover:text-accent transition-colors duration-300">About</a>
              <a href="#contact" onClick={toggleMenu} className="text-foreground/80 hover:text-accent transition-colors duration-300">Contact</a>
            </nav>
          </motion.div>
        )}
      </header>
      <main>
        <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-subtle bg-background -z-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
              Crafting Digital Experiences with Precision and Passion.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto">
              A minimalist portfolio for a creative soul, focusing on clarity, elegance, and the stories behind the work.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-accent/40 transform hover:-translate-y-1">
                <a href="#work">View My Work</a>
              </Button>
            </div>
          </div>
        </section>
        <Section id="work">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Selected Work</h2>
            <p className="mt-4 text-lg text-foreground/70">A glimpse into my creative journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-soft"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 ease-in-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">{project.category}</p>
                  <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
        <Section id="about" className="bg-secondary/50 dark:bg-secondary/20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <div className="relative w-full max-w-xs mx-auto md:max-w-none">
                <div className="absolute -inset-2 border-2 border-dashed border-accent/50 rounded-full animate-spin [animation-duration:20s]"></div>
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop" alt="Portrait" className="relative w-full aspect-square object-cover rounded-full shadow-2xl" />
              </div>
            </div>
            <div className="md:col-span-3 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">About Me</h2>
              <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
                I am a passionate designer and developer with a love for creating beautiful, functional, and user-centered digital experiences. With over a decade of experience in the field, I specialize in minimalist design, clean code, and interactive storytelling.
              </p>
              <p className="mt-4 text-lg text-foreground/70 leading-relaxed">
                My approach is collaborative and iterative, ensuring that every project not only meets but exceeds expectations. Let's build something amazing together.
              </p>
            </div>
          </div>
        </Section>
        <Section id="contact">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Get In Touch</h2>
            <p className="mt-4 text-lg text-foreground/70">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300 px-10 py-6 text-base">
                <a href="mailto:hello@aurafolio.com">hello@aurafolio.com</a>
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <footer className="bg-background border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">&copy; {new Date().getFullYear()} AuraFolio. All Rights Reserved.</p>
            <div className="flex items-center space-x-6">
              <SocialLink href="https://github.com"><Github className="w-5 h-5" /></SocialLink>
              <SocialLink href="https://linkedin.com"><Linkedin className="w-5 h-5" /></SocialLink>
              <SocialLink href="https://twitter.com"><Twitter className="w-5 h-5" /></SocialLink>
            </div>
          </div>
          <p className="text-center text-xs text-foreground/50 mt-6">Built with ❤️ at Cloudflare</p>
        </div>
      </footer>
    </div>
  );
}