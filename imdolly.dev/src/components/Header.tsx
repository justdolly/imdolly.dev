import { useState } from "react";
import { Link } from "wouter";
import { MenuIcon, X, Github, Disc } from "lucide-react";

interface HeaderProps {
  currentPath: string;
}

const Header: React.FC<HeaderProps> = ({ currentPath }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold font-heading text-white hover:text-primary transition-colors">
            <span className="text-primary">imdolly</span>.dev
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`nav-link text-white hover:text-primary transition-colors ${currentPath === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link href="/projects" className={`nav-link text-white hover:text-primary transition-colors ${currentPath === '/projects' ? 'active' : ''}`}>
              Projects
            </Link>
            <Link href="/blog" className={`nav-link text-white hover:text-primary transition-colors ${currentPath === '/blog' ? 'active' : ''}`}>
              Blog
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="https://github.com/justdolly" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" aria-label="GitHub Profile">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://discord.com/users/justdolly" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" aria-label="Discord Profile">
              <Disc className="h-5 w-5" />
            </a>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white hover:text-primary transition-colors focus:outline-none" 
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-muted border-t border-white/10 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3 space-y-3">
          <Link href="/" className="block text-white hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/projects" className="block text-white hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
            Projects
          </Link>
          <Link href="/blog" className="block text-white hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
