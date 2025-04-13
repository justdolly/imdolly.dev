import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export interface ProjectType {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  sourceUrl: string;
  tags: string[];
  type: string;
}

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card bg-muted rounded-lg overflow-hidden shadow-lg border border-white/5">
      <div className="h-48 bg-background relative">
        <img 
          src={project.imageUrl} 
          alt={`${project.title} thumbnail`} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-0 right-0 p-2 bg-background/80 text-xs font-mono rounded-bl-lg">
          {project.type}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="bg-primary/20 text-primary/90 border-primary/30"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between">
          <a 
            href={project.projectUrl} 
            className="text-primary hover:text-primary/80 font-medium text-sm transition-colors flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project <ExternalLink className="h-3 w-3" />
          </a>
          <a 
            href={project.sourceUrl} 
            className="text-muted-foreground hover:text-white text-sm transition-colors flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4 mr-1" /> Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
