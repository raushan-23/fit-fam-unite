
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Dumbbell } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Dumbbell className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-gray-900">Fit Fam Unite</span>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#workouts" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Workouts</a>
            <a href="#buddies" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Find Buddies</a>
            <a href="#progress" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Progress</a>
          </div>
          
          <div className="hidden md:flex md:items-center">
            <Button variant="outline" className="mr-3">Sign In</Button>
            <Button>Join Now</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Home</a>
            <a href="#workouts" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Workouts</a>
            <a href="#buddies" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Find Buddies</a>
            <a href="#progress" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Progress</a>
            <div className="flex flex-col space-y-2 mt-4 mb-2">
              <Button variant="outline">Sign In</Button>
              <Button>Join Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
