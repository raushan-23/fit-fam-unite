
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="gradient-bg absolute inset-0 opacity-10 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-base font-semibold tracking-wide text-primary uppercase">Better together</span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">Find your fitness</span>
                <span className="block text-primary">buddy today</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Connect with like-minded fitness enthusiasts, share your progress, and achieve your goals together. Workouts are better with friends!
            </p>
            
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  Explore Workouts
                </Button>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center rounded-full bg-primary/10 h-12 w-12">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-3 text-sm font-medium text-gray-900">Find your fitness community</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center rounded-full bg-primary/10 h-12 w-12">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-3 text-sm font-medium text-gray-900">Track your progress</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center rounded-full bg-primary/10 h-12 w-12">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-3 text-sm font-medium text-gray-900">Reach your goals</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 relative lg:mt-0 lg:col-span-6">
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-xl animate-pulse-shadow">
              <img 
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Fitness friends working out together"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
