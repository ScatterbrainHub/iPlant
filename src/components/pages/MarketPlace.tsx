import { useState, useMemo } from 'react';
import { Search, Grid, List } from 'lucide-react'; // Removed Badge from here as it's a component
import Navbar from '@/components/Navbar'; // Corrected import path for Navbar
import { Input } from '@/components/ui/input'; // Corrected import path
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Corrected import path
import { Button } from '@/components/ui/button'; // Corrected import path
import { Card, CardContent } from '@/components/ui/card'; // Corrected import path
import { Badge } from '@/components/ui/badge'; // Corrected import path


// Define types for tree data for better TypeScript support
interface Tree {
  id: number;
  name: string;
  description: string;
  category: string;
  priceRange: string;
  growthStage: string;
  climate: string;
  image: string; // Using string for emoji images
}

// Tree seedling data
const treeData: Tree[] = [
  {
    id: 1,
    name: "Mango Tree Seedling",
    description: "High-yield variety, perfect for tropical climates.",
    category: "Fruit Trees",
    priceRange: "Low", // Assuming 'Low', 'Medium', 'High' are valid price ranges
    growthStage: "Seedling",
    climate: "Tropical",
    image: "🥭"
  },
  {
    id: 2,
    name: "Avocado Tree Seedling",
    description: "Disease-resistant and adaptable to various conditions.",
    category: "Fruit Trees",
    priceRange: "Medium",
    growthStage: "Young Plant",
    climate: "Subtropical",
    image: "🥑"
  },
  {
    id: 3,
    name: "Citrus Tree Seedling",
    description: "Early fruiting, bringing fresh zest to your garden.",
    category: "Fruit Trees",
    priceRange: "Low",
    growthStage: "Seedling",
    climate: "Mediterranean",
    image: "🍊"
  },
  {
    id: 4,
    name: "Coffee Tree Seedling",
    description: "Premium quality beans for a rich brew.",
    category: "Cash Crops",
    priceRange: "High",
    growthStage: "Young Plant",
    climate: "Highland",
    image: "☕"
  },
  {
    id: 5,
    name: "Tea Tree Seedling",
    description: "Drought-tolerant, ideal for sustainable farming.",
    category: "Cash Crops",
    priceRange: "Medium",
    growthStage: "Seedling",
    climate: "Highland",
    image: "🍃"
  },
  {
    id: 6,
    name: "Macadamia Tree Seedling",
    description: "Nutrient-rich and a valuable addition to any farm.",
    category: "Nut Trees",
    priceRange: "High",
    growthStage: "Young Plant",
    climate: "Subtropical",
    image: "🌰"
  },
  {
    id: 7,
    name: "Cashew Tree Seedling",
    description: "Fast-growing, providing both nuts and a shade.",
    category: "Nut Trees",
    priceRange: "Medium",
    growthStage: "Seedling",
    climate: "Tropical",
    image: "🥜"
  },
  {
    id: 8,
    name: "Guava Tree Seedling",
    description: "Sweet and juicy fruits, a tropical delight.",
    category: "Fruit Trees",
    priceRange: "Low",
    growthStage: "Seedling",
    climate: "Tropical",
    image: "🍈"
  },
  {
    id: 9,
    name: "Papaya Tree Seedling",
    description: "Tropical delight, quick to fruit and easy to grow.",
    category: "Fruit Trees",
    priceRange: "Low",
    growthStage: "Young Plant",
    climate: "Tropical",
    image: "🍈"
  },
  {
    id: 10,
    name: "Banana Tree Seedling",
    description: "Versatile crop, a staple for many households.",
    category: "Fruit Trees",
    priceRange: "Low",
    growthStage: "Young Plant",
    climate: "Tropical",
    image: "🍌"
  },
  {
    id: 11,
    name: "Pineapple Tree Seedling",
    description: "Exotic flavor, a symbol of hospitality.",
    category: "Fruit Trees",
    priceRange: "Medium",
    growthStage: "Seedling",
    climate: "Tropical",
    image: "🍍"
  },
  {
    id: 12,
    name: "Passion Fruit Tree Seedling",
    description: "Tangy and refreshing, perfect for juices and desserts.",
    category: "Fruit Trees",
    priceRange: "Medium",
    growthStage: "Young Plant",
    climate: "Subtropical",
    image: "🫐"
  }
];

export default function MarketPlace() {
  const [searchTerm, setSearchTerm] = useState('');
  // Set default values to "all" to match SelectItem values
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedGrowthStage, setSelectedGrowthStage] = useState('all');
  const [selectedClimate, setSelectedClimate] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'); // Explicit type for viewMode

  const filteredTrees = useMemo(() => {
    return treeData.filter(tree => {
      const matchesSearch = tree.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tree.description.toLowerCase().includes(searchTerm.toLowerCase());
      // Check for "all" or specific selection
      const matchesCategory = selectedCategory === "all" || tree.category === selectedCategory;
      const matchesPriceRange = selectedPriceRange === "all" || tree.priceRange === selectedPriceRange;
      const matchesGrowthStage = selectedGrowthStage === "all" || tree.growthStage === selectedGrowthStage;
      const matchesClimate = selectedClimate === "all" || tree.climate === selectedClimate;

      return matchesSearch && matchesCategory && matchesPriceRange &&
        matchesGrowthStage && matchesClimate;
    });
  }, [searchTerm, selectedCategory, selectedPriceRange, selectedGrowthStage, selectedClimate]);

  // Dynamically get unique values for filters from treeData
  const categories = useMemo(() => [...new Set(treeData.map(tree => tree.category))], []);
  const priceRanges = useMemo(() => [...new Set(treeData.map(tree => tree.priceRange))].sort(), []); // Added sort for consistent order
  const growthStages = useMemo(() => [...new Set(treeData.map(tree => tree.growthStage))].sort(), []); // Added sort
  const climates = useMemo(() => [...new Set(treeData.map(tree => tree.climate))].sort(), []); // Added sort

  return (
    <div className="min-h-screen bg-background text-foreground"> {/* Applied theme background and text color */}
      <header>
        <Navbar /> {/* Assuming Navbar is correctly imported and styled */}
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
      <footer className="bg-card border-t border-border mt-16"> {/* Themed footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
            <div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a> {/* Themed links */}
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Us</a>
            </div>
            <p className="text-muted-foreground text-sm mt-4 sm:mt-0">©2024 Digital Agronomist. All rights reserved.</p> {/* Themed copyright */}
          </div>
        </div>
      </footer>
    </div>
  );
}