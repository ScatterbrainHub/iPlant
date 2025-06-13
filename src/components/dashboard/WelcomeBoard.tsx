import { useState } from 'react';
import { Search, Bell, User, ChevronLeft, ChevronRight, MessageCircle, ArrowRight, Settings, LogOut, UserCircle, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const WelcomeBoard = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 7)); // August 2024
  const [selectedDate, setSelectedDate] = useState(5);

  const recommendedTrees = [
    {
      name: 'Mango',
      description: 'High yield, drought-resistant',
      image: '🥭',
      color: 'bg-green-100'
    },
    {
      name: 'Avocado',
      description: 'Popular export crop',
      image: '🥭',
      color: 'bg-emerald-100'
    },
    {
      name: 'Macadamia',
      description: 'Nutritious and profitable',
      image: '🌰',
      color: 'bg-amber-100'
    }
  ];

  const communityPosts = [
    {
      name: 'Fatima',
      time: '2h ago',
      message: 'Just harvested my first batch of mangoes! Thanks to the platform\'s recommendations.',
      avatar: 'F'
    },
    {
      name: 'Omar',
      time: '4h ago',
      message: 'Anyone else having issues with pests on their avocado trees?',
      avatar: 'O'
    }
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const navigateMonth = (direction: number) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8"></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(day)}
          className={`h-8 w-8 rounded-full text-sm hover:bg-gray-100 transition-colors ${
            day === selectedDate ? 'bg-green-500 text-white' : 'text-gray-700'
          }`}
        >
          {day}
        </button>
      );
    }
    
    return days;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded text-white flex items-center justify-center">
                <span className="text-sm font-bold">🌱</span>
              </div>
              <span className="text-lg sm:text-xl font-semibold text-gray-900 hidden sm:block">Digital Agronomist</span>
              <span className="text-lg sm:text-xl font-semibold text-gray-900 sm:hidden">DA</span>
            </div>
            <nav className="hidden lg:flex space-x-6">
              <a href="#" className="text-gray-900 font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Marketplace</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Community</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
            </nav>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search" 
                className="pl-10 w-48 sm:w-64"
              />
            </div>
            <Button variant="ghost" size="icon" className="sm:flex hidden">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-orange-500 text-white">A</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mr-4" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Aisha</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      aisha@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserCircle className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  <span>Help & Support</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome, Aisha</h1>
        </div>

        {/* Recommended Trees */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommended Trees</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedTrees.map((tree, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${tree.color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
                    {tree.image}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tree.name}</h3>
                  <p className="text-gray-600 text-sm">{tree.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Planting Calendar */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Planting Calendar</span>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" onClick={() => navigateMonth(-1)}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <span className="text-lg font-medium">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </span>
                  <Button variant="ghost" size="icon" onClick={() => navigateMonth(1)}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                  <div key={day} className="h-8 flex items-center justify-center text-sm font-medium text-gray-500">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {renderCalendar()}
              </div>
            </CardContent>
          </Card>

          {/* Expert Consultation */}
          <Card>
            <CardHeader>
              <CardTitle>Expert Consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Book a Consultation</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get personalized advice from our expert agronomists.
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Expert Agronomist</p>
                    <p className="text-xs text-gray-600">Available for consultation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Community Activity */}
        <section className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Community Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {communityPosts.map((post, index) => (
                  <div key={index} className="flex space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <Avatar>
                      <AvatarFallback className="bg-blue-500 text-white">
                        {post.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-gray-900">{post.name}</span>
                        <span className="text-xs text-gray-500">{post.time}</span>
                      </div>
                      <p className="text-gray-700 text-sm">{post.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default WelcomeBoard;