import { techIcons } from "@/lib/techIcons";

interface TechIconProps {
  name: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name }) => {
  const tech = techIcons.find(icon => icon.name === name);
  
  if (!tech) {
    return (
      <div className="tech-icon flex flex-col items-center">
        <div className="w-14 h-14 bg-muted/80 rounded-lg flex items-center justify-center mb-2 p-2">
          <span className="text-xl">{name.charAt(0)}</span>
        </div>
        <span className="text-xs text-muted-foreground">{name}</span>
      </div>
    );
  }

  return (
    <div className="tech-icon flex flex-col items-center">
      <div className="w-14 h-14 bg-muted/80 rounded-lg flex items-center justify-center mb-2 p-2">
        <img 
          src={tech.svgUrl} 
          alt={`${tech.name} icon`} 
          className="w-10 h-10"
          loading="lazy"
        />
      </div>
      <span className="text-xs text-muted-foreground">{tech.name}</span>
    </div>
  );
};

export default TechIcon;
