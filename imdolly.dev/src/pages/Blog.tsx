import BlogCard, { BlogPostType } from "@/components/BlogCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
import blogPostsData from "@/data/blogPosts.json";

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time to show transition
    const timer = setTimeout(() => {
      setPosts(blogPostsData);
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const renderSkeletons = () => {
    return Array(4).fill(0).map((_, index) => (
      <div key={`skeleton-${index}`} className="blog-card bg-background rounded-lg overflow-hidden border border-white/5 shadow-md">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Skeleton className="h-4 w-24 mr-3" />
            <Skeleton className="h-4 w-20" />
          </div>
          
          <Skeleton className="h-6 w-3/4 mb-3" />
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-2/3 mb-4" />
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Skeleton className="h-6 w-16 rounded-md" />
            <Skeleton className="h-6 w-20 rounded-md" />
            <Skeleton className="h-6 w-24 rounded-md" />
          </div>
          
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    ));
  };

  return (
    <main className="pt-20">
      <section id="blog" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-10 text-center">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
            Technical articles, tutorials, and thoughts on web development, programming, and technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {isLoading ? (
              renderSkeletons()
            ) : (
              posts?.map((post) => (
                <BlogCard key={post.title} post={post} />
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
