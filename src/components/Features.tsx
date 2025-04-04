
import { Activity, Users, BarChart, Calendar } from "lucide-react";

const features = [
  {
    name: 'Find your fitness buddies',
    description:
      'Connect with people who have similar fitness goals and workout preferences. Train together, stay accountable, and make friends.',
    icon: Users,
  },
  {
    name: 'Track workouts together',
    description:
      'Share your workout sessions, achievements and challenges. Comment on each other's progress and celebrate milestones together.',
    icon: Activity,
  },
  {
    name: 'Monitor your progress',
    description:
      'Visualize your fitness journey with detailed charts and graphs. See your improvement over time and stay motivated.',
    icon: BarChart,
  },
  {
    name: 'Custom workout plans',
    description:
      'Access personalized workout plans based on your goals and fitness level. Share effective routines with your fitness circle.',
    icon: Calendar,
  },
];

const Features = () => {
  return (
    <div id="features" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Better Results</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for your fitness journey
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Fit Fam Unite brings together workout tracking, social motivation, and progress visualization to help you reach your fitness goals.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
