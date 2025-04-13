import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Disc } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
import discordStatusData from "@/data/discordStatus.json";

interface DiscordStatus {
  discord_user: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    global_name: string;
  };
  discord_status: string;
  activities: {
    name: string;
    type: number;
    state?: string;
    details?: string;
  }[];
  listening_to_spotify: boolean;
  spotify?: {
    track_id: string;
    song: string;
    artist: string;
    album_art_url: string;
  };
  avatar_url: string;
}

const DiscordStatus: React.FC = () => {
  const [status, setStatus] = useState<DiscordStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulate loading time to show transition
    const timer = setTimeout(() => {
      try {
        setStatus(discordStatusData as DiscordStatus);
        setIsLoading(false);
      } catch (err) {
        setError(err as Error);
        setIsLoading(false);
      }
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center">
        <Skeleton className="w-12 h-12 rounded-full mr-4" />
        <div>
          <Skeleton className="h-5 w-32 mb-2" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    );
  }

  if (error || !status) {
    return (
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-muted overflow-hidden flex items-center justify-center mr-4">
          <Disc className="h-6 w-6 text-muted-foreground" />
        </div>
        <div>
          <p className="font-medium">dev</p>
          <p className="text-sm text-red-500">Offline</p>
        </div>
      </div>
    );
  }

  const statusColor = {
    online: "bg-green-500",
    idle: "bg-yellow-500",
    dnd: "bg-red-500",
    offline: "bg-gray-500"
  };

  const currentActivity = status.activities && status.activities.length > 0 
    ? status.activities[0] 
    : null;

  return (
    <div className="flex items-center">
      <div className="relative mr-4">
        <Avatar className="w-12 h-12 border-2 border-background">
          <AvatarImage src={status.avatar_url} alt="Discord avatar" />
          <AvatarFallback>{status.discord_user.global_name.charAt(0)}</AvatarFallback>
        </Avatar>
        <span className={`absolute bottom-0 right-0 w-3 h-3 ${statusColor[status.discord_status as keyof typeof statusColor]} border-2 border-background rounded-full`}></span>
      </div>
      
      <div>
        <p className="font-medium">
          {status.discord_user.global_name || status.discord_user.username}
          {status.discord_user.discriminator !== '0' && (
            <span className="text-sm text-muted-foreground">#{status.discord_user.discriminator}</span>
          )}
        </p>
        <p className="text-sm capitalize text-green-500">{status.discord_status}</p>
        {currentActivity && (
          <p className="text-xs text-muted-foreground mt-1">
            Currently {status.listening_to_spotify ? 'listening to' : 'playing'}: {
              status.listening_to_spotify && status.spotify 
                ? `${status.spotify.song} by ${status.spotify.artist}` 
                : currentActivity.name
            }
          </p>
        )}
      </div>
    </div>
  );
};

export default DiscordStatus;
