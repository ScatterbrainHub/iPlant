import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  ShoppingCart, 
  Package, 
  ClipboardList, 
  Users,
  TrendingUp,
  TrendingDown,
  Plus,
  Eye,
  type LucideIcon
} from 'lucide-react';

// Type definitions
interface SalesData {
  week: string;
  value: number;
}

interface Order {
  id: string;
  customer: string;
  date: string;
  status: 'Shipped' | 'Delivered' | 'Pending';
  total: string;
}

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: 'up' | 'down';
}

interface SimpleLineChartProps {
  data: SalesData[];
}

const Dashboard = () => {
  // Sample data matching the original dashboard
  const salesData: SalesData[] = [
    { week: 'Week 1', value: 8000 },
    { week: 'Week 2', value: 9500 },
    { week: 'Week 3', value: 7200 },
    { week: 'Week 4', value: 12000 }
  ];

  const recentOrders: Order[] = [
    { id: '#12345', customer: 'Samuel Kamau', date: '2024-07-26', status: 'Shipped', total: '$500' },
    { id: '#12346', customer: 'Esther Njeri', date: '2024-07-25', status: 'Delivered', total: '$300' },
    { id: '#12347', customer: 'Peter Mwangi', date: '2024-07-24', status: 'Pending', total: '$200' },
    { id: '#12348', customer: 'Grace Wambui', date: '2024-07-23', status: 'Shipped', total: '$400' },
    { id: '#12349', customer: 'John Omondi', date: '2024-07-22', status: 'Delivered', total: '$600' }
  ];

  const getStatusBadge = (status: Order['status']) => {
    const variants: Record<Order['status'], 'default' | 'secondary' | 'destructive'> = {
      'Shipped': 'default',
      'Delivered': 'secondary',
      'Pending': 'destructive'
    };
    return <Badge variant={variants[status]}>{status}</Badge>;
  };

  const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon: Icon, trend }) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground flex items-center">
          {trend === 'up' ? (
            <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
          ) : (
            <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
          )}
          <span className={trend === 'up' ? 'text-green-500' : 'text-red-500'}>
            {change}
          </span>
        </p>
      </CardContent>
    </Card>
  );

  // Simple line chart component
  const SimpleLineChart: React.FC<SimpleLineChartProps> = ({ data }) => {
    const maxValue = Math.max(...data.map((d: SalesData) => d.value));
    const points = data.map((d: SalesData, i: number) => {
      const x = (i * 100) / (data.length - 1);
      const y = 100 - (d.value / maxValue) * 80;
      return `${x},${y}`;
    }).join(' ');

    return (
      <div className="h-48 w-full">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            points={points}
          />
          {data.map((d: SalesData, i: number) => {
            const x = (i * 100) / (data.length - 1);
            const y = 100 - (d.value / maxValue) * 80;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="1"
                fill="hsl(var(--primary))"
              />
            );
          })}
        </svg>
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          {data.map((d: SalesData, i: number) => (
            <span key={i}>{d.week}</span>
          ))}
        </div>
      </div>
    );
  };

  const ProductChart = () => (
    <div className="flex justify-center items-end space-x-4 h-32">
      <div className="flex flex-col items-center">
        <div className="w-12 h-20 bg-primary rounded-t"></div>
        <span className="text-xs mt-2 text-muted-foreground">Product A</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-12 h-16 bg-primary/70 rounded-t"></div>
        <span className="text-xs mt-2 text-muted-foreground">Product B</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-primary/50 rounded-t"></div>
        <span className="text-xs mt-2 text-muted-foreground">Product C</span>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - Hidden on mobile, shown on larger screens */}
      <div className="hidden lg:block w-64 bg-white shadow-sm">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-xl font-bold text-gray-900">Digital Agronomist</h1>
            <p className="text-sm text-gray-500">Tree Vendor</p>
          </div>
          
          <nav className="space-y-2">
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-gray-100 text-gray-900">
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
              <ShoppingCart className="h-5 w-5" />
              <span>Sales</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
              <Package className="h-5 w-5" />
              <span>Inventory</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
              <ClipboardList className="h-5 w-5" />
              <span>Orders</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
              <Users className="h-5 w-5" />
              <span>Customers</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-10">
        <div className="flex justify-around">
          <a href="#" className="flex flex-col items-center space-y-1 p-2 text-gray-900">
            <Home className="h-5 w-5" />
            <span className="text-xs">Dashboard</span>
          </a>
          <a href="#" className="flex flex-col items-center space-y-1 p-2 text-gray-600">
            <ShoppingCart className="h-5 w-5" />
            <span className="text-xs">Sales</span>
          </a>
          <a href="#" className="flex flex-col items-center space-y-1 p-2 text-gray-600">
            <Package className="h-5 w-5" />
            <span className="text-xs">Inventory</span>
          </a>
          <a href="#" className="flex flex-col items-center space-y-1 p-2 text-gray-600">
            <ClipboardList className="h-5 w-5" />
            <span className="text-xs">Orders</span>
          </a>
          <a href="#" className="flex flex-col items-center space-y-1 p-2 text-gray-600">
            <Users className="h-5 w-5" />
            <span className="text-xs">Customers</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 lg:p-8 pb-20 lg:pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm md:text-base text-gray-600">Overview of your sales, inventory, and recent orders</p>
          </div>

          {/* Mobile Header with Brand */}
          <div className="lg:hidden mb-6 p-4 bg-white rounded-lg shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">Digital Agronomist</h2>
            <p className="text-sm text-gray-500">Tree Vendor</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <StatCard
              title="Total Sales"
              value="$25,000"
              change="+10%"
              icon={ShoppingCart}
              trend="up"
            />
            <StatCard
              title="Inventory Value"
              value="$12,000"
              change="+5%"
              icon={Package}
              trend="up"
            />
            <StatCard
              title="Recent Orders"
              value="15"
              change="-2%"
              icon={ClipboardList}
              trend="down"
            />
          </div>

          {/* Sales Analytics */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Sales Analytics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sales Trend</CardTitle>
                  <CardDescription>
                    <span className="text-2xl font-bold text-gray-900">$12,000</span>
                    <span className="text-sm text-muted-foreground ml-2">
                      Last 30 Days <span className="text-green-500">+5%</span>
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <SimpleLineChart data={salesData} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Top Selling Products</CardTitle>
                  <CardDescription>
                    <span className="text-2xl font-bold text-gray-900">$8,000</span>
                    <span className="text-sm text-muted-foreground ml-2">
                      Last 30 Days <span className="text-green-500">+3%</span>
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ProductChart />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Orders</h2>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr>
                        <th className="text-left p-4 font-medium text-gray-600">Order ID</th>
                        <th className="text-left p-4 font-medium text-gray-600">Customer</th>
                        <th className="text-left p-4 font-medium text-gray-600">Date</th>
                        <th className="text-left p-4 font-medium text-gray-600">Status</th>
                        <th className="text-left p-4 font-medium text-gray-600">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-4 font-medium">{order.id}</td>
                          <td className="p-4 text-gray-600">{order.customer}</td>
                          <td className="p-4 text-gray-600">{order.date}</td>
                          <td className="p-4">{getStatusBadge(order.status)}</td>
                          <td className="p-4 font-medium">{order.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
            <div className="flex space-x-4">
              <Button className="flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Add New Product</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>View Inventory</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;