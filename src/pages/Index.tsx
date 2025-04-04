
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WorkoutCard from "@/components/WorkoutCard";
import UserProfile from "@/components/UserProfile";
import ProgressChart from "@/components/ProgressChart";
import FitnessFeed from "@/components/FitnessFeed";
import Footer from "@/components/Footer";

// Sample workout data
const workouts = [
  {
    title: "HIIT Cardio Blast",
    description: "High-intensity interval training to burn calories and improve cardiovascular health",
    level: "Intermediate" as const,
    duration: "30 min",
    calories: "400 kcal",
    participants: 28,
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "Strength Foundations",
    description: "Build muscle and strength with this comprehensive full-body workout",
    level: "Beginner" as const,
    duration: "45 min",
    calories: "320 kcal",
    participants: 42,
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "Power Yoga Flow",
    description: "Increase flexibility and mindfulness while building functional strength",
    level: "Intermediate" as const,
    duration: "60 min",
    calories: "280 kcal",
    participants: 35,
    image: "https://images.unsplash.com/photo-1588286840104-8457e3263907?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "Elite Performance",
    description: "Advanced training techniques for athletes looking to push their limits",
    level: "Advanced" as const,
    duration: "75 min",
    calories: "650 kcal",
    participants: 16,
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

// Sample user profiles
const users = [
  {
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    goal: "Weight loss",
    workouts: 24,
    achievements: 7,
    interests: ["Running", "HIIT", "Yoga"]
  },
  {
    name: "Mike Chen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    goal: "Muscle gain",
    workouts: 58,
    achievements: 12,
    interests: ["Weightlifting", "CrossFit", "Nutrition"]
  },
  {
    name: "Taylor Swift",
    image: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    goal: "Overall fitness",
    workouts: 36,
    achievements: 9,
    interests: ["Pilates", "Swimming", "Boxing"]
  }
];

// Sample feed posts
const posts = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    content: "Just completed my first 5K run! So grateful for all the support from my fitness buddies here. Couldn't have done it without you all!",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    likes: 24,
    comments: 8,
    time: "2 hours ago",
    liked: false
  },
  {
    id: 2,
    user: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    content: "New personal best on deadlifts today! 315lbs for 5 reps. The journey of small improvements every day really adds up over time.",
    likes: 32,
    comments: 13,
    time: "5 hours ago",
    liked: true
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <Features />
        
        {/* Workouts Section */}
        <section id="workouts" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-base font-semibold text-primary">Join a Group Workout</h2>
              <p className="mt-2 text-3xl font-bold text-gray-900">Popular Workout Sessions</p>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Join live workout sessions with fitness buddies who share your interests and goals. Train together and stay motivated!
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workouts.map((workout) => (
                <WorkoutCard key={workout.title} {...workout} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Buddies and Progress Section */}
        <section id="buddies" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-base font-semibold text-primary">Better Together</h2>
              <p className="mt-2 text-3xl font-bold text-gray-900">Find Your Fitness Buddies</p>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Connect with like-minded fitness enthusiasts who can help you stay accountable and motivated on your journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {users.map((user) => (
                    <UserProfile key={user.name} {...user} />
                  ))}
                </div>
              </div>
              
              <div id="progress">
                <ProgressChart />
              </div>
            </div>
          </div>
        </section>
        
        {/* Feed Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-base font-semibold text-primary">Community</h2>
              <p className="mt-2 text-3xl font-bold text-gray-900">Fitness Feed</p>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Stay connected with your fitness community. Share achievements, challenges, and inspire each other.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <FitnessFeed posts={posts} />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
