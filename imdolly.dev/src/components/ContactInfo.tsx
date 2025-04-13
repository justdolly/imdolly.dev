import { Mail, Github, Disc, Twitter } from "lucide-react";

const ContactInfo: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="page-heading">
            Contact
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Interested in working together or have a question about my projects? Too bad, because i dont answer.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="mailto:contact@idiotsonlyputtheiremails@gmail.com" className="flex items-center p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <Mail className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">contact@idiotsonlyputtheiremails@gmail.com</p>
              </div>
            </a>
            
            <a href="https://github.com/justdolly" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <Github className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1">GitHub</h3>
                <p className="text-sm text-muted-foreground">github.com/justdolly</p>
              </div>
            </a>
            
            <a href="https://discord.com/users/aiden" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <Disc className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Discord</h3>
                <p className="text-sm text-muted-foreground">justdolly_</p>
              </div>
            </a>
            
            <a href="https://twitter.com/aiden" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <Twitter className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Twitter</h3>
                <p className="text-sm text-muted-foreground">https://guns.lol/justdolly_</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
