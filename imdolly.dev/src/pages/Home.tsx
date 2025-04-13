import TechIcon from "@/components/TechIcon";
import { techIcons } from "@/lib/techIcons";
import DiscordStatus from "@/components/DiscordStatus";
import ContactInfo from "@/components/ContactInfo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Disc } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import projectsData from "@/data/projects.json";
import blogPostsData from "@/data/blogPosts.json";

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero-bg min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Hello there.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              My Name is <span className="text-primary">dev</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
              I like to work with computers, and often like to develop various things.
            </p>
            
            <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
              <p className="text-xl font-medium mb-8">Things I like to work with:</p>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-center">
                {techIcons.map((tech) => (
                  <TechIcon key={tech.name} name={tech.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="page-heading">
              About
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                imdolly.dev is my personal website created to showcase my journey and skillset in modern web development. The site is fully handcrafted with no templates or pre-built UI kits — built using SolidJS, TypeScript (TSX), Vite, and custom CSS.
              </p>
              <p>
                Hosted on a dedicated server, this site focuses on performance, clean code, and accessibility. I prioritize technical excellence, maintaining zero console errors, fully linted code (via ESLint, StyleLint, and A11y plugins), and a standards-compliant UI.
              </p>
              <p>
                More than a portfolio, this is a living sandbox — a space where I experiment with the latest web tools and create with intention, uniqueness, and modern polish.
              </p>
            </div>
            
            {/* Discord Status */}
            <div className="mt-12 bg-background/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-4 flex items-center">
                <Disc className="mr-3 text-primary h-5 w-5" />
                Discord Status
              </h3>
              
              <DiscordStatus />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="page-heading max-w-3xl mx-auto">
            Featured Projects
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.slice(0, 3).map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/projects">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="page-heading max-w-3xl mx-auto">
            Latest Posts
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPostsData.slice(0, 2).map((post) => (
                <BlogCard key={post.title} post={post} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/blog">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  View All Posts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactInfo />
    </main>
  );
};

export default Home;
