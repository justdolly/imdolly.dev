import ProjectCard, { ProjectType } from "@/components/ProjectCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
import projectsData from "@/data/projects.json";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time to show transition
    const timer = setTimeout(() => {
      setProjects(projectsData);
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const renderSkeletons = () => {
    return Array(6).fill(0).map((_, index) => (
      <div key={`skeleton-${index}`} className="project-card bg-muted rounded-lg overflow-hidden shadow-lg border border-white/5">
        <Skeleton className="h-48 w-full" />
        <div className="p-6">
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-2/3 mb-4" />
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Skeleton className="h-6 w-16 rounded-md" />
            <Skeleton className="h-6 w-20 rounded-md" />
            <Skeleton className="h-6 w-24 rounded-md" />
          </div>
          
          <div className="flex justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <main className="pt-20">
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-10 text-center">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
            Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {isLoading ? (
              renderSkeletons()
            ) : (
              projects?.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
