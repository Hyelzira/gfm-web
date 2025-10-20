import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// The SocialIcon component is a great reusable utility!
import { Mail, Phone, Facebook, Instagram, Twitter, Linkedin, Menu, X, ChevronDown, ChevronUp, MapPin } from 'lucide-react'; // Added MapPin for footer

// --- Constants ---

// Define the main navigation links (excluding 'About', which is now a dropdown)
const MAIN_NAV_LINKS = ['Home', 'Services', 'Team', 'Blog', 'Activities'];

// Define the submenu links for the 'About' dropdown.
const ABOUT_DROPDOWN_LINKS = [
    { name: 'Our Mission', path: '/about' },
    { name: 'Our History', path: '/about' },
    { name: 'Leadership', path: '/about' },
];

// ⚠️ PLACEHOLDER: Define a placeholder for your image path.
// You must create and import your actual image file (e.g., in a file named `assets/logo-white.png`)
const FOOTER_LOGO_IMAGE_PATH = '/src/assets/logo.png'; 


// --- Reusable Components (MODIFIED) ---

// Reusable Logo component (MODIFIED to accept an image source)
const Logo = ({ className = 'text-3xl', to = '/', imageSrc }) => {
    // If an imageSrc is provided, render the image logo
    if (imageSrc) {
        return (
            <Link to={to} className="inline-block">
                {/* Image element with Tailwind classes for size and styling */}
                <img 
                    src={imageSrc} 
                    alt="GLOBAL FLAMES YOUTH Logo" 
                    className="h-10 w-auto object-contain" 
                />
            </Link>
        );
    }
 return (
    <Link to={to} className={`${className} flex items-center space-x-3 font-extrabold tracking-tight font-['Algerian,sans-serif']`}>
        {/* Image Logo */}
        <div className="flex-shrink-0">
            <img 
                src="/src/assets/images/flames.jpg"
                alt="GFM Youth"
                className="w-12 h-10 object-contain"
            />
        </div>
        
        {/* Text Logo - Smaller when image is present */}
        <div className="flex flex-col">
            <span className="text-black text-lg leading-tight">GLOBAL FLAME</span>
            <span className="text-fuchsia-700 text-lg leading-tight">YOUTH  COMMUNITY</span>
        </div>
    </Link>
);
};


// Reusable Social Icon component (Unchanged)
const SocialIcon = ({ icon: Icon, href = '#' }) => (
    <a
        href={href}
        className="w-8 h-8 rounded-full bg-fuchsia-700/80 flex items-center justify-center text-white hover:bg-fuchsia-900 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
    >
        <Icon className="w-4 h-4" />
    </a>
);


// --- New Creative Footer Component: Call-to-Action (CTA) Block ---
const FooterCta = () => (
    <div className="bg-fuchsia-700/90 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white gap-6">
            <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-extrabold">
                    Ready to Spark Your Potential?
                </h3>
                <p className="text-fuchsia-200 mt-1 text-sm">
                    Join our mailing list or become a volunteer today!
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    to="/signup"
                    className="bg-white text-fuchsia-700 px-6 py-3 rounded-lg font-bold text-sm uppercase shadow-lg hover:bg-gray-100 transition-colors text-center"
                >
                    Subscribe Now
                </Link>
                <Link
                    to="/donate"
                    className="bg-purple-900 text-white border-2 border-purple-900 px-6 py-3 rounded-lg font-bold text-sm uppercase shadow-lg hover:bg-transparent hover:text-purple-900 hover:border-white transition-all text-center"
                >
                    Support Our Mission
                </Link>
            </div>
        </div>
    </div>
);


// --- Main HeaderNav Component (Unchanged) ---

export function HeaderNav() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    // State to manage the dropdown visibility (now controlled by click/tap)
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const location = useLocation();

    // Close drawer and dropdown on route change
    useEffect(() => {
        setIsDrawerOpen(false);
        setIsAboutDropdownOpen(false);
    }, [location.pathname]);


    // Close drawer on screen resize (desktop viewport)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isDrawerOpen) {
                setIsDrawerOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isDrawerOpen]);

    // Function to determine the 'to' path for the Link component
    const getPath = (item) => (item === 'Home' ? '/' : `/${item.toLowerCase()}`);

    // Function to close drawer on link click and reset dropdown state
    const handleLinkClick = () => {
        setIsDrawerOpen(false);
        setIsAboutDropdownOpen(false);
    };

    // Toggle handler for the About dropdown on desktop and mobile
    const handleAboutToggle = (e) => {
        e.preventDefault(); // Prevent default link navigation for the main 'About' button
        setIsAboutDropdownOpen(prev => !prev);
    };

    // Specific handler for mobile drawer links
    const handleMobileLinkClick = () => {
        // If a sub-link is clicked, close both drawer and dropdown
        handleLinkClick();
    };


    return (
        <header className="sticky top-0 z-40 shadow-lg bg-white">

            {/* 1. Top Utility Bar (Contact & Social) */}
            <div className=" bg-gradient-to-br from-fuchsia-900 to-purple-800 text-white py-2 px-6">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            <Mail className="w-4 h-4 text-purple-300" />
                            <span className="font-medium">globalflameyouthcommunity@gmail.com</span>
                        </span>
                        <span className="flex items-center gap-1">
                            <Phone className="w-4 h-4 text-purple-300" />
                            <span className="font-medium">(+234) 813 684 8041</span>
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <SocialIcon icon={Facebook} href="https://facebook.com" />
                        <SocialIcon icon={Instagram} href="https://instagram.com" />
                        <SocialIcon icon={Twitter} href="https://twitter.com" />
                        <SocialIcon icon={Linkedin} href="https://linkedin.com" />
                    </div>
                </div>
            </div>

            {/* 2. Main Navigation Bar */}
            <div className="py-4 px-6 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    {/* Logo: Text Logo for Header */}
                    <Logo className="text-3xl" />

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <nav className="flex gap-6 text-base font-medium text-gray-700">
                            {MAIN_NAV_LINKS.map((item) => (
                                <Link
                                    key={item}
                                    to={getPath(item)}
                                    className="hover:text-fuchsia-700 transition-colors"
                                >
                                    {item.toUpperCase()}
                                </Link>
                            ))}

                            {/* Desktop About Dropdown (Click to Toggle) */}
                            <div
                                className="relative"
                            >
                                {/* Main 'About' Link/Label - now a button that toggles visibility */}
                                <button
                                    onClick={handleAboutToggle} // Use button to handle click event
                                    className="flex items-center hover:text-fuchsia-700 transition-colors focus:outline-none"
                                >
                                    ABOUT
                                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isAboutDropdownOpen ? 'transform rotate-180 text-fuchsia-700' : ''}`} />
                                </button>

                                {/* Dropdown Menu Panel */}
                                {isAboutDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-3 w-48 bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden z-50">
                                        {ABOUT_DROPDOWN_LINKS.map((link) => (
                                            <Link
                                                key={link.name}
                                                to={link.path}
                                                // Closes the dropdown after clicking a link
                                                onClick={handleLinkClick}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-fuchsia-50 hover:text-fuchsia-700 transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </nav>

                        <Link
                            to="/contact"
                            className="bg-fuchsia-700 text-white px-6 py-2 rounded font-bold text-sm hover:bg-purple-600 transition-colors shadow-sm uppercase"
                        >
                            CONTACT
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-700 hover:text-fuchsia-700 transition-colors"
                        onClick={() => setIsDrawerOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* 3. Mobile Drawer */}
            <div className={`fixed inset-0 z-50 transform transition-transform duration-300 md:hidden ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" onClick={() => setIsDrawerOpen(false)}></div>

                {/* Drawer Content */}
                <div className="absolute right-0 w-80 max-w-[80vw] h-full bg-white shadow-3xl p-6 overflow-y-auto font-['Algerian,sans-serif']">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200 mb-6">
                        {/* Logo in Mobile Drawer: Text Logo */}
                        <Logo className="text-2xl" />

                        <button onClick={() => setIsDrawerOpen(false)} className="p-2 rounded-full text-gray-500 hover:bg-fuchsia-100 hover:text-fuchsia-700 transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-2 text-lg font-medium text-gray-700">
                        {MAIN_NAV_LINKS.map((item) => (
                            <Link
                                key={item}
                                to={getPath(item)}
                                onClick={handleLinkClick}
                                className="hover:text-fuchsia-700 transition-colors py-2 border-b border-gray-100"
                            >
                                {item.toUpperCase()}
                            </Link>
                        ))}

                        {/* Mobile About Dropdown (Toggle) */}
                        <div className="border-b border-gray-100">
                            <button
                                onClick={handleAboutToggle} // Same click handler, using a button
                                className="flex justify-between items-center w-full py-2 hover:text-fuchsia-700 transition-colors"
                            >
                                ABOUT
                                {isAboutDropdownOpen ? <ChevronUp className="w-5 h-5 text-fuchsia-700" /> : <ChevronDown className="w-5 h-5" />}
                            </button>
                            {isAboutDropdownOpen && (
                                <div className="flex flex-col space-y-1 pl-4 pt-1 pb-2 bg-gray-50">
                                    {ABOUT_DROPDOWN_LINKS.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            onClick={handleMobileLinkClick}
                                            className="text-base text-gray-600 hover:text-fuchsia-700 transition-colors py-1"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            to="/contact"
                            onClick={handleLinkClick}
                            className="hover:text-fuchsia-700 transition-colors py-2 border-b border-gray-100 text-fuchsia-700 font-bold"
                        >
                            CONTACT
                        </Link>
                    </nav>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <h4 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">Connect with us</h4>
                        <div className="flex flex-col space-y-2 text-sm text-gray-600 font-medium">
                            <span className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-fuchsia-600" />
                                globalflameyouthcommunity@gmail.com
                            </span>
                            <span className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-fuchsia-600" />
                                (+234) 802 642 9018
                            </span>
                        </div>
                        <div className="flex gap-3 mt-4 justify-start">
                            <SocialIcon icon={Facebook} href="https://facebook.com" />
                            <SocialIcon icon={Instagram} href="https://instagram.com" />
                            <SocialIcon icon={Twitter} href="https://twitter.com" />
                            <SocialIcon icon={Linkedin} href="https://linkedin.com" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

// --- New Footer Component (CREATIVELY MODIFIED) ---

export function Footer() {
    return (
        // Added relative positioning to place the CTA block accurately.
        <footer className="relative bg-gray-900 text-white mt-12 overflow-hidden">
            
            {/* 1. Optional: Layered background graphic (creative touch) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 288L48 272C96 256 192 224 288 202.7C384 181.3 480 170.7 576 170.7C672 170.7 768 181.3 864 197.3C960 213.3 1056 234.7 1152 240C1248 245.3 1344 234.7 1392 229.3L1440 224V320H1392C1344 320 1248 320 1152 320C1056 320 960 320 864 320C768 320 672 320 576 320C480 320 384 320 288 320C192 320 96 320 48 320L0 320Z" fill="#a855f7"></path>
                </svg>
            </div>
            
            {/* 2. Call-to-Action Block */}
            <FooterCta />
            
            {/* 3. Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
                    
                    {/* Column 1: Logo & Mission (Now uses the image placeholder) */}
                    <div>
                        {/* 🌟 Creative change: Pass the image path to the Logo component */}
                        <Logo to="/" imageSrc={FOOTER_LOGO_IMAGE_PATH} />
                        
                        <p className="mt-4 text-sm text-gray-400">
                            Empowering the youth to embrace their faith and leadership potential through fellowship, service, and spiritual growth.
                        </p>
                        <div className="flex gap-3 mt-4">
                            {/* 🌟 Creative change: Use a slightly different background for a dark footer */}
                            <a href="https://facebook.com" className="w-8 h-8 rounded-full bg-fuchsia-600/90 flex items-center justify-center text-white hover:bg-fuchsia-500 transition-colors" target="_blank" rel="noopener noreferrer"><Facebook className="w-4 h-4" /></a>
                            <a href="https://instagram.com" className="w-8 h-8 rounded-full bg-fuchsia-600/90 flex items-center justify-center text-white hover:bg-fuchsia-500 transition-colors" target="_blank" rel="noopener noreferrer"><Instagram className="w-4 h-4" /></a>
                            <a href="https://twitter.com" className="w-8 h-8 rounded-full bg-fuchsia-600/90 flex items-center justify-center text-white hover:bg-fuchsia-500 transition-colors" target="_blank" rel="noopener noreferrer"><Twitter className="w-4 h-4" /></a>
                            <a href="https://linkedin.com" className="w-8 h-8 rounded-full bg-fuchsia-600/90 flex items-center justify-center text-white hover:bg-fuchsia-500 transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin className="w-4 h-4" /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-fuchsia-400 mb-4 border-b-2 border-fuchsia-400/50 inline-block pb-1">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            {MAIN_NAV_LINKS.map((item) => (
                                <li key={`f-${item}`}>
                                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:translate-x-1 inline-block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:translate-x-1 inline-block">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: About Links */}
                    <div>
                        <h4 className="text-lg font-bold text-fuchsia-400 mb-4 border-b-2 border-fuchsia-400/50 inline-block pb-1">About Us</h4>
                        <ul className="space-y-2 text-sm">
                            {ABOUT_DROPDOWN_LINKS.map((link) => (
                                <li key={`f-${link.name}`}>
                                    <Link to={link.path} className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:translate-x-1 inline-block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-fuchsia-400 mb-4 border-b-2 border-fuchsia-400/50 inline-block pb-1">Get In Touch</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                                <a href="mailto:houseofoperaworld@gmail.com" className="hover:text-fuchsia-400 transition-colors">houseofoperaworld@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                                <a href="tel:+2348026429018" className="hover:text-fuchsia-400 transition-colors">(+234) 802 642 9018</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                                <span>123 Youth Street, City, Country</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-4 border-t border-gray-700 text-center">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} GFM YOUTH. All rights reserved. | <Link to="/privacy" className="hover:text-fuchsia-400">Privacy Policy</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}

// Export both components so they can be imported separately in your main application file
export default HeaderNav;
// export { HeaderNav, Footer };