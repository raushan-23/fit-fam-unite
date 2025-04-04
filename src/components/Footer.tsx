
import { Dumbbell } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-gray-900">Fit Fam Unite</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Connect, train, and achieve your fitness goals with a community that supports you every step of the way.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Features</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Find Buddies</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Workout Plans</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Progress Tracking</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Community Events</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Help Center</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Community Guidelines</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">&copy; {new Date().getFullYear()} Fit Fam Unite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
