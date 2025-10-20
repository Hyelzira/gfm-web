// Contact page
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
    MapPin, Phone, Mail, Clock, Send, ChevronDown, 
    Instagram, Facebook, Twitter, Heart, X // Import X for close button
} from 'lucide-react';
// ERROR CORRECTED: Renamed import from 'Join-us' to 'JoinUsModal' (or whatever the exported name is)
import JoinUsModal from './JoinUsModal'; 

// Unified address for the contact card and the map
const mainContactAddress = "Zarmaganda, off Rayfield Road, Jos Plateau State Nigeria";

// Define the two image paths from your assets
const heroImages = [
    "/src/assets/images/HOO.jpg", 
    "/src/assets/images/slider2.jpg", 
];

function ContactPage() {
    const [showAboutDropdown, setShowAboutDropdown] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState({ title: "", description: "", type: "" });
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // ⭐ New state for the Opportunities Modal
    const [isModalOpen, setIsModalOpen] = useState(false); 

    // Effect for the rotating slideshow (keep this as is)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            showToastMessage("Required fields missing", "Please fill in all required fields.", "error");
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showToastMessage("Invalid email", "Please enter a valid email address.", "error");
            return;
        }

        showToastMessage("Message sent!", "Thank You for reaching out. We'll get back to you soon.", "success");

        // Reset form
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        });
    };

    const showToastMessage = (title, description, type) => {
        setToastMessage({ title, description, type });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    // ... (end of helper functions)

    // Handler to open the modal
    const handleExploreClick = (e) => {
        e.preventDefault(); // Prevent default link navigation
        setIsModalOpen(true);
    };

    // ERROR CORRECTED: Fixed invalid Google Maps URL construction
    const mapAddress = mainContactAddress;
    // Correctly construct the Google Maps embed URL using the correct base and encoded address
    const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}&t=&z=14&ie=UTF8&iwloc=&output=embed`; 

    return (
        <div className="min-h-screen bg-white">
            
            {/* Toast Notification */}
            {showToast && (
                <div className="fixed top-20 right-4 z-50 animate-slide-in">
                    <div className={`${toastMessage.type === 'error' ? 'bg-red-500' : 'bg-fuchsia-500'} text-white px-6 py-4 rounded-lg shadow-2xl max-w-md`}>
                        <h4 className="font-bold mb-1">{toastMessage.title}</h4>
                        <p className="text-sm">{toastMessage.description}</p>
                    </div>
                </div>
            )}

            {/* Hero Section with Picture Slide */}
            <section className="relative h-[300px] sm:h-[400px] overflow-hidden">
                {/* Picture Slide Background */}
                <div className="absolute inset-0 w-full h-full">
                    {heroImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Hero background image ${index + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                                index === currentImageIndex 
                                    ? 'opacity-100 animate-rotate-120' 
                                    : 'opacity-0'
                            }`}
                        />
                    ))}
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-fuchsia-900/70 to-purple-900/70 z-10"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="text-center px-4 text-white font-['Algerian,sans-serif']">
                        <p className="text-sm font-semibold tracking-widest mb-2 text-purple-200 animate-fade-in">GET IN TOUCH</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-wide animate-fade-in" style={{ animationDelay: '0.1s' }}>CONTACT US</h1>
                        <p className="text-lg sm:text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>We'd love to hear from you. Reach out and let's connect!</p>
                    </div>
                </div>
            </section>
            {/* END Hero Section with Picture Slide */}

            {/* Contact Info Cards & Form Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                        <div className="bg-white font-['Algerian,sans-serif'] p-6 sm:p-8 rounded-lg shadow-lg border border-purple-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <MapPin className="text-white" size={20} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">OUR LOCATION</h3>
                            <p className="text-gray-600">
                                Zarmaganda, off Rayfield Road<br />
                                Jos Plateau State<br />
                                Nigeria
                            </p>
                        </div>

                        <div className="bg-white font-['Algerian,sans-serif'] p-6 sm:p-8 rounded-2xl shadow-lg border border-purple-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <Phone className="text-white" size={20} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">PHONE & EMAIL</h3>
                            <p className="text-gray-600">
                                Phone: (+234) 813 684 8041<br />
                                Email: houseofoperaworld@gmail.com<br />
                                Available 24/7
                            </p>
                        </div>

                        <div className="bg-white font-['Algerian,sans-serif'] p-6 sm:p-8 rounded-2xl shadow-lg border border-purple-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <Clock className="text-white" size={20} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">OFFICE HOURS</h3>
                            <p className="text-gray-600">
                                Monday - Friday: 9AM - 5PM<br />
                                Saturday: 6AM - 10AM<br />
                                Sunday: Closed
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white font-['Algerian,sans-serif'] p-6 sm:p-8 lg:p-10 rounded-xl shadow-2xl border border-purple-100">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl sm:text-3xl font-bold mb-4 text-gray-800">Send Us a Message</h2>
                                <p className="text-gray-600">
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name *</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none transition-all"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address *</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone Number</label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+234 813 684 8041"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">Subject</label>
                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="How can we help?"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us more about what you'd like to discuss..."
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none transition-all resize-none"
                                        required
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:from-fuchsia-400 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <Send size={20} />
                                    Send Message
                                </button>

                                <p className="text-sm text-gray-500 text-center">
                                    * Required fields
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Map Section - Google Maps Embed (Updated) */}
                    <div className="mt-12 sm:mt-16">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 text-center">Find Us on the Map</h2>
                        <div className="bg-white p-4 rounded-2xl shadow-2xl overflow-hidden border border-purple-100">
                            {/* Aspect ratio container for responsiveness */}
                            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-inner">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    src={mapUrl}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Our Location on Google Maps"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW CREATIVE FOOTER */}
            <footer className="bg-gray-900 text-white font-['Algerian,sans-serif'] pt-16 pb-8 px-4 sm:px-6 mt-16 border-t border-fuchsia-800">
                {/* Top Section - Active CTA Bar */}
                <div className="max-w-7xl mx-auto mb-12">
                    <div className="bg-gradient-to-r from-fuchsia-600 to-purple-700 p-8 sm:p-12 rounded-3xl shadow-2xl flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-10 transform hover:scale-[1.01] transition-transform duration-300">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl font-extrabold mb-2 leading-tight">Ready to join the movement?</h2>
                            <p className="text-fuchsia-100 max-w-lg">We are actively building the Kingdom. Connect with us to volunteer, donate, or partner in our efforts.</p>
                        </div>
                        {/* MODIFIED BUTTON TO OPEN MODAL */}
                        <button 
                            onClick={handleExploreClick} 
                            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-bold rounded-full shadow-lg text-purple-700 bg-white hover:bg-purple-100 transition-all duration-300 transform hover:scale-105"
                        >
                            <Heart size={20} className="mr-2 text-pink-600 fill-current" />
                            Explore Opportunities
                        </button>
                    </div>
                </div>

                {/* ... (rest of the footer code remains the same) ... */}
                <div className="max-w-7xl mx-auto border-t border-purple-800 pt-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-sm">

                        {/* Column 1: Mission & Logo */}
                        <div className="col-span-2 md:col-span-1">
                            <h3 className="text-3xl font-bold mb-3 text-fuchsia-400">GFM YOUTH</h3>
                            <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
                                TO REACH OUT AND HARNESS YOUNG MEN AND WOMEN WHO WILL MANIFEST THE KINGDOM OF HEAVEN 
                                AND THE FULLNESS OF THE REALITIES OF CHRIST THROUGH THE HOLY SPIRIT.
                            </p>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4 text-white uppercase tracking-wider">Quick Links</h4>
                            <ul className="space-y-3">
                                <li><Link to="/" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Home</Link></li>
                                <li><Link to="/about" className="text-gray-400 hover:text-fuchsia-400 transition-colors">About Us</Link></li>
                                <li><Link to="/activities" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Activities</Link></li>
                                <li><Link to="/contact" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Contact Details */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4 text-white uppercase tracking-wider">Reach Out</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start text-gray-400">
                                    <MapPin size={18} className="text-fuchsia-400 mt-1 mr-3 flex-shrink-0" />
                                    <span>Zarmaganda, off Rayfield Road, Jos Plateau State Nigeria</span>
                                </li>
                                <li className="flex items-center text-gray-400">
                                    <Phone size={18} className="text-fuchsia-400 mr-3 flex-shrink-0" />
                                    <a href="tel:+2348026429018" className="hover:text-fuchsia-400 transition-colors">(+234) 802 642 9018</a>
                                </li>
                                <li className="flex items-center text-gray-400">
                                    <Mail size={18} className="text-fuchsia-400 mr-3 flex-shrink-0" />
                                    <a href="mailto:houseofoperaworld@gmail.com" className="hover:text-fuchsia-400 transition-colors">houseofoperaworld@gmail.com</a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Social Media & Donate */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4 text-white uppercase tracking-wider">Connect</h4>
                            <div className="flex space-x-4 mb-8">
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-fuchsia-400 transition-colors transform hover:scale-125">
                                    <Facebook size={24} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-fuchsia-400 transition-colors transform hover:scale-125">
                                    <Twitter size={24} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-fuchsia-400 transition-colors transform hover:scale-125">
                                    <Instagram size={24} />
                                </a>
                            </div>
                            <h4 className="font-semibold text-lg mb-4 text-white uppercase tracking-wider">Support Us</h4>
                            <Link to="/donate" className="inline-flex items-center px-6 py-2 border-2 border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-400 hover:text-gray-900 font-bold rounded-full transition-all duration-300 transform hover:shadow-lg">
                                <Heart size={18} className="mr-2 fill-current" />
                                Give Now
                            </Link>

                        </div>

                    </div>

                    {/* Bottom Copyright Bar */}
                    <div className="mt-12 pt-6 border-t border-purple-800/50 text-center text-gray-500 text-xs sm:text-sm">
                        <p>
                            © 2025 House of Opera. All rights reserved. | <Link to="/privacy" className="hover:text-fuchsia-400">Privacy Policy</Link> | <Link to="/terms" className="hover:text-fuchsia-400">Terms of Service</Link>
                        </p>
                    </div>
                </div>
            </footer>
            {/* END NEW CREATIVE FOOTER */}

            {/* ⭐ OPPORTUNITIES MODAL RENDER */}
            <JoinUsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <style jsx>{`
                /* ... (styles remain the same) ... */
                @keyframes slide-in {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes rotate-360 {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                @keyframes scale-in { /* New animation for the modal content */
                    from {
                        transform: scale(0.9);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                .animate-slide-in {
                    animation: slide-in 0.3s ease-out;
                }
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                    opacity: 0;
                }
                .animate-rotate-360 {
                    animation: rotate-360 5s linear forwards; 
                }
                .animate-scale-in {
                    animation: scale-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; /* Bouncy effect */
                }
            `}</style>
        </div>
    );
}

export default ContactPage;