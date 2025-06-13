import { useState, useMemo } from 'react';
import { Search, Grid, List, Badge } from 'lucide-react';
import Navbar from '../Navbar';
import { Input } from '../ui/input';
import { Select, SelectItem } from '../ui/select';
import { Button } from '../ui/button';
import { CardAction, CardContent, } from '../ui/card';



// Tree seedling data
const treeData = [
  {
    id: 1,
    name: "Mango Tree Seedling",
    description: "High-yield variety",
    category: "Fruit Trees",
    priceRange: "Low",
    growthStage: "Seedling",
    climate: "Tropical",
    image: "🥭"
  },
  {
    id: 2,
    name: "Avocado Tree Seedling",
    description: "Disease-resistant",
    category: "Fruit Trees",
    priceRange: "Medium",
    growthStage: "Young Plant",
    climate: "Subtropical",
    image: "🥑"
  },
  {
    id: 3,
    name: "Citrus Tree Seedling",
    description: "Early fruiting",
    category: "Fruit Trees",
    priceRange: "Low",
    growthStage: "Seedling",
    climate: "Mediterranean",
    image: "🍊"
  },
  {
    id: 4,
    name: "Coffee Tree Seedling",
    description: "Premium quality",
    category: "Cash Crops",
    priceRange: "High",
    growthStage: "Young Plant",
    climate: "Highland",
    image: "☕"
  },
  {
    id: 5,
    name: "Tea Tree Seedling",
    description: "Drought-tolerant",
    category: "Cash Crops",
    priceRange: "Medium",
    growthStage: "Seedling",
    climate: "Highland",
    image: "🍃"
  },
  {
    id: 6,
    name: "Macadamia Tree Seedling",
    description: "Nutrient-rich",
    category: "Nut Trees",
    priceRange: "High",
    growthStage: "Young Plant",
    climate: "Subtropical",
    image: "🌰"
  },
  {
    id: 7,
    name: "Cashew Tree Seedling",
    description: "Fast-growing",
    category: "Nut Trees",
    priceRange: "Medium",
    growthStage: "Seedling",
    climate: "Tropical",
    image: "🥜"
  },
  {
    id: 8,
    name: "Guava Tree Seedling",
    description: "Sweet and juicy",
    category: "Fruit Trees",
    priceRange: "Low",
    growthStage: "Seedling",
    climate: "Tropical",
    image: "🍈"
  },
  {
    id: 9,
    name: "Papaya Tree Seedling",
    description: "Tropical delight",
    category: "Fruit Trees",
    priceRange: "Low",
    growthStage: "Young Plant",
    climate: "Tropical",
    image: "🍈"
  },
  {
    id: 10,
    name: "Banana Tree Seedling",
    description: "Versatile crop",
    category: "Fruit Trees",
    priceRange: "Low",
    growthStage: "Young Plant",
    climate: "Tropical",
    image: "🍌"
  },
  {
    id: 11,
    name: "Pineapple Tree Seedling",
    description: "Exotic flavor",
    category: "Fruit Trees",
    priceRange: "Medium",
    growthStage: "Seedling",
    climate: "Tropical",
    image: "🍍"
  },
  {
    id: 12,
    name: "Passion Fruit Tree Seedling",
    description: "Tangy and refreshing",
    category: "Fruit Trees",
    priceRange: "Medium",
    growthStage: "Young Plant",  
    climate: "Subtropical",
    image: "🫐"
  }
];

export default function MarketPlace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedGrowthStage, setSelectedGrowthStage] = useState('');
  const [selectedClimate, setSelectedClimate] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  
  const filteredTrees = useMemo(() => {
    return treeData.filter(tree => {
      const matchesSearch = tree.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tree.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || tree.category === selectedCategory;
      const matchesPriceRange = !selectedPriceRange || tree.priceRange === selectedPriceRange;
      const matchesGrowthStage = !selectedGrowthStage || tree.growthStage === selectedGrowthStage;
      const matchesClimate = !selectedClimate || tree.climate === selectedClimate;

      return matchesSearch && matchesCategory && matchesPriceRange && 
             matchesGrowthStage && matchesClimate;
    });
  }, [searchTerm, selectedCategory, selectedPriceRange, selectedGrowthStage, selectedClimate]);

  const categories = [...new Set(treeData.map(tree => tree.category))];
  const priceRanges = [...new Set(treeData.map(tree => tree.priceRange))];
  const growthStages = [...new Set(treeData.map(tree => tree.growthStage))];
  const climates = [...new Set(treeData.map(tree => tree.climate))];

  return (
    <div className="min-h-screen bg-gray-50">
      <header>
        <Navbar />
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Catalog</h1>
          <p className="text-gray-600">Explore our wide range of tree seedlings, carefully selected for optimal growth and yield in Kenyan climates.</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar - Hidden on mobile since it's in header */}
          <div className="relative max-w-md hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search for tree seedlings"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Mobile Search Bar */}
          <div className="relative max-w-md md:hidden">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search for tree seedlings"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 w-full lg:w-auto">
              <div className="w-full lg:w-48">
                <Select onValueChange={setSelectedCategory} defaultValue="">
                  <SelectItem value="">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </Select>
              </div>

              <div className="w-full lg:w-48">
                <Select onValueChange={setSelectedPriceRange} defaultValue="">
                  <SelectItem value="">All Price Ranges</SelectItem>
                  {priceRanges.map(range => (
                    <SelectItem key={range} value={range}>{range}</SelectItem>
                  ))}
                </Select>
              </div>

              <div className="w-full lg:w-48">
                <Select onValueChange={setSelectedGrowthStage} defaultValue="">
                  <SelectItem value="">All Growth Stages</SelectItem>
                  {growthStages.map(stage => (
                    <SelectItem key={stage} value={stage}>{stage}</SelectItem>
                  ))}
                </Select>
              </div>

              <div className="w-full lg:w-48">
                <Select onValueChange={setSelectedClimate} defaultValue="">
                  <SelectItem value="">All Climate Types</SelectItem>
                  {climates.map(climate => (
                    <SelectItem key={climate} value={climate}>{climate}</SelectItem>
                  ))}
                </Select>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex ml-auto">
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-r-none"
              >
                <List className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-l-none"
              >
                <Grid className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">{filteredTrees.length} results found</p>
        </div>

        {/* Product Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
          {filteredTrees.map((tree) => (
            <CardAction key={tree.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <span className="text-6xl">{tree.image}</span>
              </div>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-gray-900">{tree.name}</h3>
                  <p className="text-gray-600 text-sm">{tree.description}</p>
                  <div className="flex flex-wrap gap-1">
                    <Badge>{tree.category}</Badge>
                    <Badge className="bg-blue-100 text-blue-800">{tree.priceRange}</Badge>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <div className="text-xs text-gray-500">
                      <div>{tree.growthStage}</div>
                      <div>{tree.climate}</div>
                    </div>
                    <Button size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </CardAction>
          ))}
        </div>

        {/* No Results */}
        {filteredTrees.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-green-600 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-green-600 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-green-600 text-sm">Contact Us</a>
            </div>
            <p className="text-gray-500 text-sm">©2024 Digital Agronomist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}