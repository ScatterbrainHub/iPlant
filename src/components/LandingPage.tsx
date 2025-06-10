import { useState, useEffect } from 'react';
import { Moon, Sun, Play, Users, TrendingUp, MapPin, Leaf, BarChart3, Shield, Smartphone, CheckCircle, Menu, X } from 'lucide-react';

const DigitalAgronomist = () => {
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


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const themeClasses = isDark
        ? 'bg-gray-900 text-white'
        : 'bg-white text-gray-900';

    const cardClasses = isDark
        ? 'bg-gray-800 border-gray-700'
        : 'bg-white border-gray-200';

    return (
        <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
            {/* Navigation */}
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
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
                            <a href="#features" className="hover:text-lime-500 transition-colors">Features</a>
                            <a href="#demo" className="hover:text-lime-500 transition-colors">Demo</a>
                            <a href="#impact" className="hover:text-lime-500 transition-colors">Impact</a>
                            <a href="#investors" className="hover:text-lime-500 transition-colors">Investors</a>
                            <a href="#contact" className="hover:text-lime-500 transition-colors">Contact</a>
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

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDark ? '0.7' : '0.5'}), rgba(0, 0, 0, ${isDark ? '0.7' : '0.5'})), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2334d399;stop-opacity:0.3" /><stop offset="100%" style="stop-color:%2310b981;stop-opacity:0.1" /></linearGradient></defs><rect width="1200" height="800" fill="url(%23grad1)"/><path d="M0,400 Q300,200 600,350 T1200,300 L1200,800 L0,800 Z" fill="%2365a30d" opacity="0.1"/></svg>')`
                    }}
                />

                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                        Transforming Kenya's{' '}
                        <span className="text-lime-500">Agroforestry</span>{' '}
                        Future
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
                        Optimizing Tree Vendors For Growth, Agro-Industry Through Digital Innovation
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-lime-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-lime-400 transition-all duration-300 transform hover:scale-105">
                            Watch Demo
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                            Start Your Journey
                        </button>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg leading-relaxed">
                        "Planting 15 billion trees is not just an environmental goal. It's an investment in our future, our economy, and our communities."
                    </p>
                    <p className="mt-6 text-gray-600 dark:text-gray-400">
                        Our mission is to plant 15 billion trees, fostering a sustainable and prosperous future for Kenya. We aim to achieve this by connecting tree vendors, farmers, and agro-industry stakeholders through our innovative digital platform.
                    </p>
                </div>
            </section>

            {/* Impact Statistics */}
            <section id="impact" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16">Our Impact</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Trees Target', value: '15B', icon: Leaf },
                            { label: 'Seedlings/Year', value: '384M', icon: TrendingUp },
                            { label: 'Forest Cover', value: '10%', icon: BarChart3 },
                            { label: 'Counties', value: '47', icon: MapPin }
                        ].map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className={`${cardClasses} p-8 rounded-xl text-center border transition-all duration-300 hover:border-lime-500 hover:shadow-lg transform hover:-translate-y-2`}
                                >
                                    <Icon className="h-12 w-12 text-lime-500 mx-auto mb-4" />
                                    <div className="text-4xl font-bold text-lime-500 mb-2">{stat.value}</div>
                                    <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">Comprehensive Agroforestry Ecosystem</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                icon: Smartphone,
                                title: 'Digital Marketplace',
                                description: 'Connect with a vast network of tree vendors and farmers seeking to quality seedlings.'
                            },
                            {
                                icon: Users,
                                title: 'Expert Consultation',
                                description: 'Get professional guidance from experienced foresters and agro-industry specialists.'
                            },
                            {
                                icon: MapPin,
                                title: 'Community Platform',
                                description: 'Join a thriving community of farmers, tree vendors, and sustainability advocates.'
                            },
                            {
                                icon: BarChart3,
                                title: 'Impact Analytics',
                                description: 'Track and analyze your contribution to Kenya\'s afforestation goals.'
                            },
                            {
                                icon: Smartphone,
                                title: 'Mobile-First Design',
                                description: 'Access our platform anywhere, anytime from your mobile device.'
                            },
                            {
                                icon: Shield,
                                title: 'Quality Assurance',
                                description: 'Rigorous quality checks and certifications to ensure the health and viability of seedlings.'
                            }
                        ].map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className={`${cardClasses} p-6 rounded-xl border transition-all duration-300 hover:border-lime-500 hover:shadow-lg transform hover:-translate-y-2`}
                                >
                                    <div className="flex justify-center">
                                        <Icon className="h-12 w-12 text-lime-500 mb-4" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Demo Video Section */}
            <section id="demo" className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">See Digital Agronomist in Action</h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                        Explore the key aspects of our platform and witness how it transforms agroforestry in Kenya. Watch our demo video to see the features in action.
                    </p>

                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <div
                            className="aspect-video bg-gradient-to-br from-lime-400 to-green-600 flex items-center justify-center cursor-pointer group"
                            style={{
                                backgroundImage: `linear-gradient(135deg, rgba(132, 204, 22, 0.9), rgba(34, 197, 94, 0.9)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><path d="M0,300 Q200,100 400,250 T800,200 L800,600 L0,600 Z" fill="rgba(255,255,255,0.1)"/></svg>')`
                            }}
                        >
                            <div className="text-center">
                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <Play className="h-8 w-8 text-white ml-1" />
                                </div>
                                <p className="text-white text-lg font-semibold">Watch Demo Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Benefits */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16">Who Benefits</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Leaf,
                                title: 'Tree Vendors',
                                description: 'Expand your reach, manage inventory effectively, and connect with potential customers.'
                            },
                            {
                                icon: Users,
                                title: 'Farmers',
                                description: 'Access quality trees, expert advice, and financing options for your farming practices.'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Agro-Industry',
                                description: 'Enhance operational efficiency, optimize supply chains, and contribute to sustainable development.'
                            }
                        ].map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-lime-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Icon className="h-8 w-8 text-lime-500" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Investment Opportunity */}
            <section id="investors" className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Investment Opportunity</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
                        Kenya's agroforestry market is experiencing significant investment opportunity, driven by the national commitment to plant 15 billion trees. With a growing demand for sustainable practices and government support, investing in Digital Agronomist means contributing to both environmental sustainability and economic growth.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className={`${cardClasses} p-8 rounded-xl border`}>
                            <h3 className="text-2xl font-bold text-lime-500 mb-2">$500M+</h3>
                            <p className="text-gray-600 dark:text-gray-400">Market Size</p>
                        </div>
                        <div className={`${cardClasses} p-8 rounded-xl border`}>
                            <h3 className="text-2xl font-bold text-lime-500 mb-2">15% YOY</h3>
                            <p className="text-gray-600 dark:text-gray-400">Growth Rate</p>
                        </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400">
                        Invest in a platform that connects tree vendors, farmers, and agro-industry stakeholders, fostering a sustainable and prosperous future for Kenya.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Ready to Transform Agroforestry in Kenya?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-lime-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-lime-400 transition-all duration-300 transform hover:scale-105">
                            Sign Up
                        </button>
                        <button className="border-2 border-lime-500 text-lime-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-lime-500 hover:text-black transition-all duration-300">
                            Schedule a Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`py-12 px-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <Leaf className="h-8 w-8 text-lime-500" />
                            <span className="text-xl font-bold">Digital Agronomist</span>
                        </div>

                        <div className="flex space-x-8 mb-4 md:mb-0">
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-lime-500 transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-lime-500 transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-lime-500 transition-colors">Contact Us</a>
                        </div>
                    </div>

                    <div className="text-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                        <p className="text-gray-600 dark:text-gray-400">
                            © 2024 Digital Agronomist. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default DigitalAgronomist;