import { useState, useEffect } from "react";
import { Leaf, Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? `${isDark ? "bg-gray-900/95" : "bg-white/95"} backdrop-blur-sm shadow-lg`
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-lime-500" />
            <span className="text-xl font-bold">Digital Agronomist</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#features" className="hover:text-lime-500 transition-colors">Features</a>
            <a href="/#demo" className="hover:text-lime-500 transition-colors">Demo</a>
            <a href="/#impact" className="hover:text-lime-500 transition-colors">Impact</a>
            <a href="/marketplace" className="hover:text-lime-500 transition-colors">MarketPlace</a>
            <a href="/#investors" className="hover:text-lime-500 transition-colors">Investors</a>
            <a href="/#contact" className="hover:text-lime-500 transition-colors">Contact</a>
          </div>

          {/* Actions & Burger */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-lime-500/10 transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Auth buttons (hidden on small) */}
            <div className="hidden md:flex items-center space-x-2">
              <button className="bg-lime-500 text-black px-4 py-2 rounded-lg hover:bg-lime-400 transition-colors font-medium">
                Sign Up
              </button>
              <button className="px-4 py-2 rounded-lg border border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-black transition-colors">
                Login
              </button>
            </div>

            {/* Burger Icon (visible on small) */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-lime-500/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 flex flex-col space-y-3 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
            <a href="#features" className="hover:text-lime-500 transition-colors">Features</a>
            <a href="#demo" className="hover:text-lime-500 transition-colors">Demo</a>
            <a href="#impact" className="hover:text-lime-500 transition-colors">Impact</a>
            <a href="/marketplace" className="hover:text-lime-500 transition-colors">MarketPlace</a>
            <a href="#investors" className="hover:text-lime-500 transition-colors">Investors</a>
            <a href="#contact" className="hover:text-lime-500 transition-colors">Contact</a>
            <button className="bg-lime-500 text-black px-4 py-2 rounded-lg hover:bg-lime-400 transition-colors font-medium">
              Sign Up
            </button>
            <button className="px-4 py-2 rounded-lg border border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-black transition-colors">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
