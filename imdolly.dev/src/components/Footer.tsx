import { Link } from "wouter";
import { Github, Twitter, Disc, Mail, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold font-heading">
              <span className="text-primary">imdolly</span>.dev
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Handcrafted with <Heart className="inline h-3 w-3 text-red-500" /> and SolidJS
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/justdolly" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors" 
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/justdolly" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors" 
                aria-label="Twitter Profile"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://discord.com/users/justdolly_" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors" 
                aria-label="Discord Profile"
              >
                <Disc className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@imdolly.dev" 
                className="text-muted-foreground hover:text-primary transition-colors" 
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} imdolly.dev. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
