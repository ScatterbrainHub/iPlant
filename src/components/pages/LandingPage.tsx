import React, { useState, useEffect } from 'react';
import { Moon, Sun, Play, Users, TrendingUp, MapPin, Leaf, BarChart3, Shield, Smartphone, Menu, X, type LucideIcon } from 'lucide-react';
import { Link } from '@tanstack/react-router';

// Theme Context
type ThemeContextType = {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
    themeClasses: string;
    cardClasses: string;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

type ThemeProviderProps = {
    children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDark, setIsDark] = useState(false);

    const themeClasses = isDark
        ? 'bg-gray-900 text-white'
        : 'bg-white text-gray-900';

    const cardClasses = isDark
        ? 'bg-gray-800 border-gray-700'
        : 'bg-white border-gray-200';

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark, themeClasses, cardClasses }}>
            {children}
        </ThemeContext.Provider>
    );
};


// Navigation Component
export const Navigation = () => {
    const { isDark, setIsDark } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking on a link
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? `${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm shadow-lg`
                : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Logo />
                        <NavLinks />
                        <div className="flex items-center space-x-4">
                            <NavActions isDark={isDark} setIsDark={setIsDark} />
                            <MobileMenuButton
                                isOpen={isMobileMenuOpen}
                                setIsOpen={setIsMobileMenuOpen}
                            />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={closeMobileMenu}
                isDark={isDark}
                setIsDark={setIsDark}
            />
        </>
    );
};

export const Logo = () => (
    <div className="flex items-center space-x-2">
        <Leaf className="h-8 w-8 text-lime-500" />
        <span className="text-xl font-bold">Digital Agronomist</span>
    </div>
);

export const NavLinks = () => {
    const links = [
        { href: '#features', label: 'Features' },
        { href: '#demo', label: 'Demo' },
        { href: '#impact', label: 'Impact' },
        { href: '/marketplace', label: 'MarketPlace' },
        { href: '#investors', label: 'Investors' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className="hover:text-lime-500 transition-colors"
                >
                    {link.label}
                </a>
            ))}
        </div>
    );
};

type NavActionsProps = {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavActions: React.FC<NavActionsProps> = ({ isDark, setIsDark }) => (
    <div className="hidden md:flex items-center space-x-4">
        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        <Button variant="primary"><Link to='/login'>Login</Link></Button>
        <Button variant="outline"><Link to='/dashboard/dashboard'>Dashboard</Link></Button>
    </div>
);

// Mobile Menu Button Component
type MobileMenuButtonProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, setIsOpen }) => (
    <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-lime-500/10 transition-colors"
        aria-label="Toggle mobile menu"
    >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
);


// Mobile Menu Component
type MobileMenuProps = {
    isOpen: boolean;
    onClose: () => void;
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, isDark, setIsDark }) => {
    const { themeClasses } = useTheme();

    const links = [
        { href: '#features', label: 'Features' },
        { href: '#demo', label: 'Demo' },
        { href: '#impact', label: 'Impact' },
        { href: '/marketplace', label: 'MarketPlace' },
        { href: '#investors', label: 'Investors' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <div
            className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Menu Panel */}
            <div
                className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] ${themeClasses} shadow-xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                        <Logo />
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-lime-500/10 transition-colors"
                            aria-label="Close menu"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-1 py-6">
                        <nav className="space-y-1 px-6">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={onClose}
                                    className="flex items-center px-4 py-3 text-lg font-medium rounded-lg hover:bg-lime-500/10 hover:text-lime-500 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Actions */}
                    <div className="p-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
                        {/* Theme Toggle */}
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Theme</span>
                            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                            <Button
                                variant="outline"
                                className="w-full justify-center"
                                onClick={onClose}
                            >
                                Login
                            </Button>
                            <Button
                                variant="primary"
                                className="w-full justify-center"
                                onClick={onClose}
                            >
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

type ThemeToggleProps = {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, setIsDark }) => {
    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg hover:bg-lime-500/10 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-500"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <span className="sr-only">{isDark ? "Light Mode" : "Dark Mode"}</span>
            <div className="transition-all duration-300 ease-in-out">
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </div>
        </button>
    );
};

// Button Component
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'outline' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
};

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseClasses =
        'font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center';

    const variants = {
        primary: 'bg-lime-500 text-black hover:bg-lime-400',
        outline: 'border border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-black',
        secondary: 'border-2 border-white text-white hover:bg-white hover:text-gray-900',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-4 py-2',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};


// Hero Section Component
export const HeroBackground: React.FC = () => {
    const { isDark } = useTheme();

    return (
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDark ? '0.7' : '0.5'}), rgba(0, 0, 0, ${isDark ? '0.7' : '0.5'})), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2334d399;stop-opacity:0.3" /><stop offset="100%" style="stop-color:%2310b981;stop-opacity:0.1" /></linearGradient></defs><rect width="1200" height="800" fill="url(%23grad1)"/><path d="M0,400 Q300,200 600,350 T1200,300 L1200,800 L0,800 Z" fill="%2365a30d" opacity="0.1"/></svg>')`,
            }}
        />
    );
};

export const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <HeroBackground />
            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                    Transforming Kenya's <span className="text-lime-500">Agroforestry</span> Future
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
                    Optimizing Tree Vendors For Growth, Agro-Industry Through Digital Innovation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="primary" size="lg">Watch Demo</Button>
                    <Button variant="secondary" size="lg">Start Your Journey</Button>
                    <Button variant="primary"><Link to='/dashboard/SeedlingPage'>Personal</Link></Button>
                    <Button variant="primary"><Link to='/dashboard/welcomeboard'>Seedlings</Link></Button>
                    <Button variant="outline"><Link to='/dashboard/TreeSeedlingCatalog'>Tree Seedling Dashboard</Link></Button>
                </div>
            </div>
        </section>
    );
};

// Mission Statement Component
const MissionStatement = () => (
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
);

// Statistics Card Component
type StatCardProps = {
    icon: React.ElementType;
    value: string;
    label: string;
};

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label }) => {
    const { cardClasses } = useTheme();

    return (
        <div className={`${cardClasses} p-8 rounded-xl text-center border transition-all duration-300 hover:border-lime-500 hover:shadow-lg transform hover:-translate-y-2`}>
            <Icon className="h-12 w-12 text-lime-500 mx-auto mb-4" />
            <div className="text-4xl font-bold text-lime-500 mb-2">{value}</div>
            <div className="text-gray-600 dark:text-gray-400">{label}</div>
        </div>
    );
};

export const ImpactSection: React.FC = () => {
    const stats = [
        { label: 'Trees Target', value: '15B', icon: Leaf },
        { label: 'Seedlings/Year', value: '384M', icon: TrendingUp },
        { label: 'Forest Cover', value: '10%', icon: BarChart3 },
        { label: 'Counties', value: '47', icon: MapPin }
    ];

    return (
        <section id="impact" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <SectionTitle>Our Impact</SectionTitle>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Feature Card Component
type FeatureCardProps = {
    icon: LucideIcon;
    title: string;
    description: string;
};

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
    const { cardClasses } = useTheme();

    return (
        <div className={`${cardClasses} p-6 rounded-xl border transition-all duration-300 hover:border-lime-500 hover:shadow-lg transform hover:-translate-y-2`}>
            <div className="flex justify-center">
                <Icon className="h-12 w-12 text-lime-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    );
};

// Features Section
const FeaturesSection = () => {
    const features = [
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
    ];

    return (
        <section id="features" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <SectionTitle>Comprehensive Agroforestry Ecosystem</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Demo Video Component
const DemoVideoSection = () => (
    <section id="demo" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
            <SectionTitle>See Digital Agronomist in Action</SectionTitle>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                Explore the key aspects of our platform and witness how it transforms agroforestry in Kenya. Watch our demo video to see the features in action.
            </p>

            <VideoPlayer />
        </div>
    </section>
);

const VideoPlayer = () => (
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
);

// Benefit Card Component
type BenefitCardProps = {
    icon: LucideIcon;
    title: string;
    description: string;
};

export const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => {
    const { cardClasses } = useTheme();

    return (
        <div className={`${cardClasses} text-center p-6 rounded-xl border transition hover:border-lime-500`}>
            <div className="w-16 h-16 bg-lime-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon className="h-8 w-8 text-lime-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    );
};

// Who Benefits Section
const WhoBenefitsSection = () => {
    const benefits = [
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
    ];

    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <SectionTitle>Who Benefits</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} {...benefit} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Investment Section
const InvestmentSection = () => {
    const { cardClasses } = useTheme();

    return (
        <section id="investors" className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <SectionTitle>Investment Opportunity</SectionTitle>
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
    );
};

// CTA Section
const CTASection = () => (
    <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Transform Agroforestry in Kenya?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">Sign Up</Button>
                <Button variant="outline" size="lg">Schedule a Demo</Button>
            </div>
        </div>
    </section>
);

// Footer Component
const Footer = () => {
    const { isDark } = useTheme();

    return (
        <footer className={`py-12 px-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <Logo />
                    <FooterLinks />
                </div>
                <FooterCopyright />
            </div>
        </footer>
    );
};

const FooterLinks = () => {
    const links = [
        { href: '#', label: 'Privacy Policy' },
        { href: '#', label: 'Terms of Service' },
        { href: '#', label: 'Contact Us' }
    ];

    return (
        <div className="flex space-x-8 mb-4 md:mb-0">
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-lime-500 transition-colors"
                >
                    {link.label}
                </a>
            ))}
        </div>
    );
};

const FooterCopyright = () => (
    <div className="text-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
        <p className="text-gray-600 dark:text-gray-400">
            © 2024 Digital Agronomist. All rights reserved.
        </p>
    </div>
);

// Reusable Section Title Component
type SectionTitleProps = {
    children: React.ReactNode;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
    <h2 className="text-3xl font-bold text-center mb-10">{children}</h2>
);


// Main App Component
const DigitalAgronomist = () => {
    const { themeClasses } = useTheme();

    return (
        <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
            <Navigation />
            <HeroSection />
            <MissionStatement />
            <ImpactSection />
            <FeaturesSection />
            <DemoVideoSection />
            <WhoBenefitsSection />
            <InvestmentSection />
            <CTASection />
            <Footer />
        </div>
    );
};

// Main Export with Theme Provider
const App = () => (
    <ThemeProvider>
        <DigitalAgronomist />
    </ThemeProvider>
);

export default App;