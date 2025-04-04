
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { BarChart, ResponsiveContainer, XAxis, YAxis, Bar, CartesianGrid, Tooltip } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const weeklyData = [
  { day: 'Mon', minutes: 45 },
  { day: 'Tue', minutes: 30 },
  { day: 'Wed', minutes: 60 },
  { day: 'Thu', minutes: 0 },
  { day: 'Fri', minutes: 45 },
  { day: 'Sat', minutes: 90 },
  { day: 'Sun', minutes: 30 },
];

const monthlyData = [
  { week: 'Week 1', minutes: 250 },
  { week: 'Week 2', minutes: 320 },
  { week: 'Week 3', minutes: 270 },
  { week: 'Week 4', minutes: 350 },
];

const ProgressChart = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Workout Progress</CardTitle>
        <CardDescription>Track your workout minutes over time</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly">
          <TabsList className="mb-4">
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
          
          <TabsContent value="weekly" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData} margin={{ top: 20, right: 10, left: 10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" />
                <YAxis 
                  label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }}
                  tickFormatter={(value) => `${value}`} 
                />
                <Tooltip formatter={(value) => [`${value} mins`, 'Duration']} />
                <Bar dataKey="minutes" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="monthly" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} margin={{ top: 20, right: 10, left: 10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="week" />
                <YAxis 
                  label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }}
                  tickFormatter={(value) => `${value}`} 
                />
                <Tooltip formatter={(value) => [`${value} mins`, 'Duration']} />
                <Bar dataKey="minutes" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProgressChart;
