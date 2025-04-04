
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Flame, Users } from "lucide-react";

interface WorkoutCardProps {
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  calories: string;
  participants: number;
  image: string;
}

const WorkoutCard = ({ 
  title, 
  description, 
  level, 
  duration, 
  calories, 
  participants,
  image
}: WorkoutCardProps) => {
  const levelColor = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800",
  };

  return (
    <Card className="workout-card overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="py-4">
        <div className="flex justify-between items-center mb-1">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${levelColor[level]}`}>
            {level}
          </span>
          <span className="text-xs text-gray-500 flex items-center">
            <Users className="h-3 w-3 mr-1" /> {participants}
          </span>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="py-2">
        <div className="flex justify-between text-sm">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-gray-500" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Flame className="h-4 w-4 mr-1 text-orange-500" />
            <span>{calories}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 pb-4">
        <Button className="w-full" variant="outline">Join Workout</Button>
      </CardFooter>
    </Card>
  );
};

export default WorkoutCard;
