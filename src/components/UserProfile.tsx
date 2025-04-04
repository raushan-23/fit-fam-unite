
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Target, Award, MessageSquare } from "lucide-react";

interface UserProfileProps {
  name: string;
  image: string;
  goal: string;
  workouts: number;
  achievements: number;
  interests: string[];
}

const UserProfile = ({
  name,
  image,
  goal,
  workouts,
  achievements,
  interests
}: UserProfileProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <CardTitle className="text-xl">{name}</CardTitle>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <Target className="h-4 w-4 mr-1" /> 
              <span>{goal}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-2 gap-4 py-3">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center bg-primary/10 h-10 w-10 rounded-full">
              <Dumbbell className="h-5 w-5 text-primary" />
            </div>
            <span className="text-lg font-bold mt-1">{workouts}</span>
            <span className="text-xs text-gray-500">Workouts</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center bg-primary/10 h-10 w-10 rounded-full">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <span className="text-lg font-bold mt-1">{achievements}</span>
            <span className="text-xs text-gray-500">Achievements</span>
          </div>
        </div>
        
        <div className="mt-3">
          <p className="text-xs text-gray-500 mb-2">Interests</p>
          <div className="flex flex-wrap gap-1">
            {interests.map((interest) => (
              <Badge key={interest} variant="secondary" className="text-xs">{interest}</Badge>
            ))}
          </div>
        </div>
        
        <Button className="w-full mt-4 gap-2">
          <MessageSquare className="h-4 w-4" /> Connect
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
