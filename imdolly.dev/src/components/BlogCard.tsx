import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

export interface BlogPostType {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  url: string;
}

interface BlogCardProps {
  post: BlogPostType;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="blog-card bg-background rounded-lg overflow-hidden border border-white/5 shadow-md">
      <div className="p-6">
        <div className="flex items-center mb-4 text-xs text-muted-foreground">
          <span className="flex items-center mr-3">
            <Calendar className="h-3 w-3 mr-1" /> {post.date}
          </span>
          <span className="flex items-center">
            <Clock className="h-3 w-3 mr-1" /> {post.readTime} read
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="bg-primary/20 text-primary/90 border-primary/30"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <a 
          href={post.url} 
          className="text-primary hover:text-primary/80 font-medium text-sm transition-colors"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
