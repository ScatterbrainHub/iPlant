import { useState, useMemo } from 'react';
import { Search, Grid, List, Bell, User, Menu, X, Badge } from 'lucide-react';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { Card, CardContent, } from '../ui/card';


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

export default function TreeSeedlingCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedGrowthStage, setSelectedGrowthStage] = useState('');
  const [selectedClimate, setSelectedClimate] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

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
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Desktop Navigation */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🌱</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">Digital Agronomist</span>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#" className="text-green-600 px-3 py-2 text-sm font-medium border-b-2 border-green-600">Products</a>
                <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Community</a>
                <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
              </nav>
            </div>
            
            {/* Desktop Search and Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search"
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              >
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isMobileSearchOpen && (
            <div className="md:hidden pb-4 border-t border-gray-100">
              <div className="pt-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search products..."
                    className="pl-10 w-full"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md text-base font-medium transition-colors">
                Home
              </a>
              <a href="#" className="block px-3 py-2 text-green-600 bg-green-50 rounded-md text-base font-medium">
                Products
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md text-base font-medium transition-colors">
                Services
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md text-base font-medium transition-colors">
                Community
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md text-base font-medium transition-colors">
                About
              </a>
              <div className="pt-2 border-t border-gray-200">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md text-base font-medium transition-colors">
                  Profile
                </a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md text-base font-medium transition-colors">
                  Settings
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

   
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Page Header */}
        <div className="mb-8 text-center md:text-left"> {/* Centered on mobile, left on larger screens */}
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Product Catalog</h1> {/* Applied primary color */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0"> {/* Applied muted foreground color */}
            Explore our wide range of tree seedlings, carefully selected for optimal growth and yield in Kenyan climates.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6 bg-card p-6 rounded-lg shadow-md border border-border"> {/* Applied card background, shadow, border */}
          {/* Search Bar */}
          <div className="relative w-full max-w-lg mx-auto md:mx-0"> {/* Centered on mobile, left on larger screens */}
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" /> {/* Applied muted foreground */}
            <Input
              placeholder="Search for tree seedlings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full bg-input text-foreground border-border focus:ring-ring focus:border-ring transition-colors rounded-md" // Themed Input
            />
          </div>

          {/* Filter Controls & View Toggle */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Filter Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full flex-grow"> {/* Adjusted grid for consistency */}
              {/* Category Filter */}
              <div className="w-full">
                <Select onValueChange={setSelectedCategory} defaultValue="all">
                  <SelectTrigger className="w-full bg-card text-foreground border-border hover:border-primary focus:ring-ring transition-colors rounded-md">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent className="bg-card text-foreground border-border rounded-md shadow-lg">
                    <SelectItem value="all" className="text-muted-foreground hover:bg-muted focus:bg-muted">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category} className="hover:bg-muted focus:bg-muted">{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range Filter */}
              <div className="w-full">
                <Select onValueChange={setSelectedPriceRange} defaultValue="all">
                  <SelectTrigger className="w-full bg-card text-foreground border-border hover:border-primary focus:ring-ring transition-colors rounded-md">
                    <SelectValue placeholder="All Price Ranges" />
                  </SelectTrigger>
                  <SelectContent className="bg-card text-foreground border-border rounded-md shadow-lg">
                    <SelectItem value="all" className="text-muted-foreground hover:bg-muted focus:bg-muted">All Price Ranges</SelectItem>
                    {priceRanges.map(range => (
                      <SelectItem key={range} value={range} className="hover:bg-muted focus:bg-muted">{range}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Growth Stage Filter */}
              <div className="w-full">
                <Select onValueChange={setSelectedGrowthStage} defaultValue="all">
                  <SelectTrigger className="w-full bg-card text-foreground border-border hover:border-primary focus:ring-ring transition-colors rounded-md">
                    <SelectValue placeholder="All Growth Stages" />
                  </SelectTrigger>
                  <SelectContent className="bg-card text-foreground border-border rounded-md shadow-lg">
                    <SelectItem value="all" className="text-muted-foreground hover:bg-muted focus:bg-muted">All Growth Stages</SelectItem>
                    {growthStages.map(stage => (
                      <SelectItem key={stage} value={stage} className="hover:bg-muted focus:bg-muted">{stage}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Climate Filter */}
              <div className="w-full">
                <Select onValueChange={setSelectedClimate} defaultValue="all">
                  <SelectTrigger className="w-full bg-card text-foreground border-border hover:border-primary focus:ring-ring transition-colors rounded-md">
                    <SelectValue placeholder="All Climate Types" />
                  </SelectTrigger>
                  <SelectContent className="bg-card text-foreground border-border rounded-md shadow-lg">
                    <SelectItem value="all" className="text-muted-foreground hover:bg-muted focus:bg-muted">All Climate Types</SelectItem>
                    {climates.map(climate => (
                      <SelectItem key={climate} value={climate} className="hover:bg-muted focus:bg-muted">{climate}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* View Mode Toggle Buttons */}
            <div className="flex-shrink-0 flex gap-1 mt-4 lg:mt-0 ml-auto lg:ml-0"> {/* Added ml-auto/lg:ml-0 for dynamic alignment */}
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="icon" // Using icon size for square buttons
                onClick={() => setViewMode('list')}
                className={`rounded-md transition-colors ${viewMode === 'list' ? 'bg-primary text-primary-foreground hover:bg-forest-green-700' : 'text-foreground hover:bg-muted hover:text-foreground'}`}
              >
                <List className="w-5 h-5" />
              </Button>
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="icon" // Using icon size for square buttons
                onClick={() => setViewMode('grid')}
                className={`rounded-md transition-colors ${viewMode === 'grid' ? 'bg-primary text-primary-foreground hover:bg-forest-green-700' : 'text-foreground hover:bg-muted hover:text-foreground'}`}
              >
                <Grid className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-right"> {/* Aligned right */}
          <p className="text-muted-foreground">{filteredTrees.length} results found</p>
        </div>

        {/* Product Grid / List */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
          {filteredTrees.map((tree) => (
            <Card key={tree.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200 bg-card border-border"> {/* Themed Card */}
              <div className="aspect-square bg-primary-100 flex items-center justify-center rounded-t-lg"> {/* Themed background for image placeholder */}
                <span className="text-6xl">{tree.image}</span>
              </div>
              <CardContent className="p-4 space-y-2"> {/* Added padding */}
                <h3 className="font-semibold text-lg text-foreground">{tree.name}</h3> {/* Themed text */}
                <p className="text-muted-foreground text-sm">{tree.description}</p> {/* Themed text */}
                <div className="flex flex-wrap gap-2 pt-2"> {/* Increased gap for badges */}
                  <Badge className="bg-secondary text-secondary-foreground">
                    {tree.category}
                  </Badge>
                  <Badge className="bg-muted text-muted-foreground"> {/* Themed badge for price range */}
                    {tree.priceRange}
                  </Badge>
                  <Badge className="bg-muted text-muted-foreground"> {/* Themed badge for growth stage */}
                    {tree.growthStage}
                  </Badge>
                  <Badge className="bg-muted text-muted-foreground"> {/* Themed badge for climate */}
                    {tree.climate}
                  </Badge>
                </div>
                <div className="flex justify-between items-center pt-4"> {/* Increased padding top */}
                  {/* Removed duplicate growthStage and climate, now in badges */}
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-forest-green-700"> {/* Themed button */}
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredTrees.length === 0 && (
          <div className="text-center py-12 bg-card rounded-lg shadow-md border border-border mt-8"> {/* Themed no results section */}
            <div className="text-muted-foreground text-6xl mb-4">🔍</div> {/* Themed icon */}
            <h3 className="text-lg font-semibold text-foreground mb-2">No results found</h3> {/* Themed text */}
            <p className="text-muted-foreground">Try adjusting your search criteria or filters.</p> {/* Themed text */}
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