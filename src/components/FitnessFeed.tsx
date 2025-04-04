
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Share2 } from "lucide-react";
import { useState } from "react";

interface Post {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  time: string;
  liked: boolean;
}

interface FitnessFeedProps {
  posts: Post[];
}

const FitnessFeed = ({ posts }: FitnessFeedProps) => {
  const [feedPosts, setFeedPosts] = useState(posts);
  
  const handleLike = (postId: number) => {
    setFeedPosts(feedPosts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };
  
  return (
    <div className="space-y-6">
      {feedPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <img 
                  src={post.user.avatar} 
                  alt={post.user.name}
                  className="h-full w-full object-cover" 
                />
              </div>
              <div>
                <div className="font-medium">{post.user.name}</div>
                <div className="text-xs text-gray-500">{post.time}</div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="pb-4">
            <p className="mb-4">{post.content}</p>
            {post.image && (
              <div className="rounded-md overflow-hidden">
                <img 
                  src={post.image} 
                  alt="Workout"
                  className="w-full h-auto object-cover" 
                />
              </div>
            )}
          </CardContent>
          
          <CardFooter className="border-t pt-4 flex justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => handleLike(post.id)}
              className={`flex items-center gap-1 ${post.liked ? 'text-red-500' : ''}`}
            >
              <Heart className="h-4 w-4" fill={post.liked ? "currentColor" : "none"} /> {post.likes}
            </Button>
            
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" /> {post.comments}
            </Button>
            
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <Share2 className="h-4 w-4" /> Share
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default FitnessFeed;
