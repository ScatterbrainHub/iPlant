import { useState } from "react";
import { 
  Search, 
  Bell, 
  User, 
  ThumbsUp, 
  ThumbsDown, 
  Star,
  ShoppingCart,
  Menu,
  X
} from "lucide-react";

const SeedlingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-sm"></div>
                <span className="text-xl font-bold text-gray-900">Digital Agronomist</span>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Marketplace</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Resources</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Community</a>
              </nav>
            </div>

            {/* Search and User Actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:block relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <Bell className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              
              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">Marketplace</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">Resources</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">Community</a>
              <div className="pt-2 pb-3 border-t border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-500">
          <span>Marketplace</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Mango Seedling</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Product Images and Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Mango Seedling</h1>
              <p className="text-gray-600">High-quality mango seedlings for optimal yield</p>
            </div>

            {/* Product Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <div className="aspect-video bg-gradient-to-b from-green-400 to-green-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-1 h-16 bg-green-300 rounded-full"></div>
                    <div className="flex space-x-4 mt-2">
                      <div className="w-12 h-6 bg-green-200 rounded-full transform -rotate-12"></div>
                      <div className="w-12 h-6 bg-green-200 rounded-full transform rotate-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-20 bg-green-500 rounded-lg mx-auto mb-2 relative">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="w-4 h-8 bg-amber-600 rounded-b-lg mx-auto"></div>
                  </div>
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="w-16 h-10 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h2 className="text-xl font-semibold mb-6">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-gray-500">Variety</span>
                    <p className="font-medium">Kent</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Height</span>
                    <p className="font-medium">1-2 feet</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Rootstock</span>
                    <p className="font-medium">Local</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-gray-500">Age</span>
                    <p className="font-medium">6 months</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Grafting</span>
                    <p className="font-medium">Yes</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Expected Yield</span>
                    <p className="font-medium">50-100 fruits/year</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vendor Information */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">Vendor Information</h2>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">G</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Green Farms Ltd.</h3>
                  <p className="text-sm text-gray-500">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Reviews and Purchase */}
          <div className="space-y-6">
            {/* Purchase Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border sticky top-4">
              <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h2 className="text-xl font-semibold mb-6">Reviews</h2>
              
              {/* Rating Summary */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl font-bold">4.5</span>
                  <div>
                    <div className="flex items-center space-x-1 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">25 reviews</p>
                  </div>
                </div>
                
                {/* Rating Distribution */}
                <div className="space-y-2">
                  {[
                    { stars: 5, percentage: 40 },
                    { stars: 4, percentage: 30 },
                    { stars: 3, percentage: 15 },
                    { stars: 2, percentage: 10 },
                    { stars: 1, percentage: 5 }
                  ].map((rating) => (
                    <div key={rating.stars} className="flex items-center space-x-2 text-sm">
                      <span className="w-3">{rating.stars}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-400 h-2 rounded-full"
                          style={{ width: `${rating.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-500 text-xs w-8">{rating.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Individual Reviews */}
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">A</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Aisha Hassan</p>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="w-3 h-3 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">2 months ago</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Excellent seedlings, very healthy and well-grafted. Highly recommend!
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-green-600">
                      <ThumbsUp className="w-3 h-3" />
                      <span>12</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-red-600">
                      <ThumbsDown className="w-3 h-3" />
                      <span>2</span>
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">D</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">David Mwangi</p>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[1, 2, 3, 4].map((star) => (
                            <Star
                              key={star}
                              className="w-3 h-3 text-yellow-400 fill-current"
                            />
                          ))}
                          <Star className="w-3 h-3 text-gray-300" />
                        </div>
                        <span className="text-xs text-gray-500">3 months ago</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Good quality seedlings, but some were slightly smaller than expected.
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-green-600">
                      <ThumbsUp className="w-3 h-3" />
                      <span>8</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-red-600">
                      <ThumbsDown className="w-3 h-3" />
                      <span>1</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SeedlingPage;