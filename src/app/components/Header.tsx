import { ShoppingCart, Menu } from "lucide-react";
import { motion } from "motion/react";

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-semibold text-gray-900">
              TechStore
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#products" className="text-gray-600 hover:text-blue-600 transition-colors">
              Products
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-flex px-4 sm:px-6 py-2 sm:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-105">
              Get Started
            </button>
            <button className="md:hidden p-2 text-gray-600 hover:text-blue-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
