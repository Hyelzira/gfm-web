// src/ActivitiesPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mic, Palette, Users, Calendar, ArrowRight, Zap, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Heart, X, CornerDownRight, Clock } from 'lucide-react';

// --- Reusable Modal Component (No Change) ---
const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div
                className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
                onClick={e => e.stopPropagation()}
            >
                <div className="p-6 sm:p-8">
                    <div className="flex justify-between items-start border-b pb-4 mb-4">
                        <h3 className="text-2xl font-bold text-fuchsia-700">{title}</h3>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-fuchsia-600 transition-colors p-1"
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

// --- Modal Components (No Change) ---
// Note: RegistrationModal, CalendarModal, VolunteerModal, DonateFormModal remain the same

const RegistrationModal = ({ onClose }) => (
    <div className="space-y-4">
        <p className="text-gray-600">Secure your spot for the **Annual Youth Summit: 2025**!</p>
        <form className="space-y-4">
            <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500"
                required
            />
            <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500"
                required
            />
            <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500"
            />
            <button
                type="submit"
                className="w-full bg-fuchsia-700 text-white p-3 rounded-lg font-bold hover:bg-purple-600 transition-colors"
            >
                Submit Registration
            </button>
        </form>
    </div>
);

const CalendarModal = ({ onClose }) => (
    <div className="space-y-6 text-center">
        <p className="text-lg font-semibold text-gray-800">
            Easily add the **Annual Youth Summit: 2025** to your personal calendar!
        </p>
        <div className="flex flex-col space-y-3">
            <button className="flex items-center justify-center bg-red-600 text-white p-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
                <Calendar className="w-5 h-5 mr-2" /> Add to Google Calendar
            </button>
            <button className="flex items-center justify-center bg-blue-700 text-white p-3 rounded-lg font-bold hover:bg-blue-800 transition-colors">
                <Calendar className="w-5 h-5 mr-2" /> Add to Outlook/iCal
            </button>
        </div>
        <button onClick={onClose} className="text-sm text-fuchsia-600 hover:text-fuchsia-800 mt-4">
            No, thanks, I'll remember it!
        </button>
    </div>
);

const VolunteerModal = ({ onClose }) => (
    <div className="space-y-4">
        <p className="text-gray-600">Join our hands-on team and make a difference. What are your skills?</p>
        <form className="space-y-4">
            <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500"
                required
            />
            <input
                type="email"
                placeholder="Best Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500"
                required
            />
            <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 text-gray-700"
            >
                <option value="">Select Area of Interest...</option>
                <option>Media/Tech</option>
                <option>Outreach/Evangelism</option>
                <option>Administration/Support</option>
                <option>Worship/Music</option>
            </select>
            <textarea
                placeholder="Tell us a little about your experience or passion!"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500"
            />
            <button
                type="submit"
                className="w-full bg-purple-700 text-white p-3 rounded-lg font-bold hover:bg-purple-600 transition-colors"
            >
                Send Volunteer Application
            </button>
        </form>
    </div>
);

const DonateFormModal = ({ onClose }) => (
    <div className="space-y-4">
        <p className="text-gray-600 flex items-center font-medium">
            <Heart className="w-5 h-5 text-fuchsia-600 mr-2 fill-current" />
            Thank you for supporting GFM Youth's mission.
        </p>
        <form className="space-y-4">
            <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 text-gray-700"
            >
                <option value="">Select Donation Amount</option>
                <option>₦5,000</option>
                <option>₦10,000</option>
                <option>₦20,000</option>
                <option>Other</option>
            </select>
            <input
                type="text"
                placeholder="Name (Optional)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500"
            />
            <button
                type="submit"
                className="w-full bg-fuchsia-600 text-white p-3 rounded-lg font-bold hover:bg-fuchsia-500 transition-colors"
            >
                Proceed to Payment
            </button>
            <p className="text-xs text-center text-gray-400">All donations are securely processed.</p>
        </form>
    </div>
);


// Sample data for activities (Modified to include richer details)
const activities = [
    {
        id: 'vigil',
        title: "Monthly Youth Vigil",
        icon: BookOpen,
        description: "Dive deep into scripture every Tuesday evening. An interactive session focused on theological growth and discussion.",
        color: "text-fuchsia-600 bg-fuchsia-50",
        details: "Every 3rd Friday, 8:00 PM - 3:00 AM (Online/In-Person)",
        fullDescription: "The Monthly Youth Vigil is a powerful, all-night prayer and worship session designed to deepen our spiritual commitment. We focus on intercession, prophetic declarations, and intense worship. It's a key pillar of our fellowship.",
        schedule: "8:00 PM every 3rd Friday and ends 3:00 AM Saturday morning.",
        location: "Church Main Auditorium",
    },
    {
        id: 'service',
        title: "Weekly Power Service",
        icon: Mic, // Changed icon to Mic to better reflect music
        description: " Come and experience inspiring worship, a powerful message, and fellowship with our community.",
        color: "text-purple-600 bg-purple-50",
        details: "Every Tuesday by 3pm.",
        fullDescription: "Take a pause and refuel your spirit at our Tuesday Service! It’s a great chance to worship, connect, and hear an encouraging word.",
        schedule: "3:00 PM Tuesday (Stay in his presence).",
        location: "Main Auditorium",
    },
    {
        id: 'cluster',
        title: "Youth Cluster",
        icon: Palette, // Changed icon to Palette to better reflect arts
        description: "A place where young minds meets, pray, discuss and ponder on the word of light.",
        color: "text-amber-500 bg-amber-50",
        details: "4pm in the Last Friday of every month.",
        fullDescription: "The Youth Cluster is our creative hub. We hold workshops on graphic design, video editing, photography, and creative writing, aiming to use modern media to share the gospel and enhance our ministry's outreach.",
        schedule: "4:00 PM on the Last Friday of every month.",
        location: "Metadoduim",
    },
    {
        id: 'evangelism',
        title: "Monthly Youth Evangelism",
        icon: Users,
        description: "Where young men and women gather to bring more souls to Christ by going out and reaching out to as many as they can.",
        color: "text-black bg-indigo-50",
        details: "Last Saturday of every Month after Morning Glory.",
        fullDescription: "Our focused evangelism outreach is centered on compassionate community service and sharing the Word. We organize mission trips and local street ministry, equipping youth with practical tools for impactful discipleship.",
        schedule: "11:00 AM on the last Saturday of every month (after Morning Glory).",
        location: "Meet at Church Entrance, then split into groups.",
    },
];

// --- New Component for Displaying Details ---
const ActivityDetails = ({ activity, onClear }) => {
    if (!activity) return null;

    const Icon = activity.icon;

    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-fuchsia-700 transition-all duration-500 ease-in-out">
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 ${activity.color} shadow-lg`}>
                        <Icon className="w-8 h-8" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900">{activity.title}</h3>
                        <p className="text-fuchsia-600 font-medium mt-1 uppercase text-sm tracking-wider">In-depth Program</p>
                    </div>
                </div>
                <button
                    onClick={onClear}
                    className="p-2 text-gray-400 hover:text-fuchsia-700 transition-colors rounded-full hover:bg-fuchsia-50"
                    aria-label="Close details"
                >
                    <X size={24} />
                </button>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 border-b pb-4">
                {activity.fullDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-fuchsia-600 mr-3 flex-shrink-0" />
                    <div>
                        <p className="font-bold text-sm">Frequency/Details</p>
                        <p className="text-sm">{activity.details}</p>
                    </div>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-fuchsia-600 mr-3 flex-shrink-0" />
                    <div>
                        <p className="font-bold text-sm">Location</p>
                        <p className="text-sm">{activity.location}</p>
                    </div>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg md:col-span-2">
                    <Clock className="w-5 h-5 text-fuchsia-600 mr-3 flex-shrink-0" />
                    <div>
                        <p className="font-bold text-sm">Specific Schedule</p>
                        <p className="text-sm">{activity.schedule}</p>
                    </div>
                </div>
            </div>
            
            <div className="mt-8 text-center">
                <Link to="/contact" className="inline-flex items-center text-fuchsia-700 font-bold hover:text-fuchsia-900 transition-colors">
                    Join this Activity <CornerDownRight className="w-5 h-5 ml-2" />
                </Link>
            </div>
        </div>
    );
};


// --- Main ActivitiesPage Component ---

export default function ActivitiesPage() {
    const primaryColor = "text-fuchsia-700";

    // State to manage modal visibility
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
    const [isDonateOpen, setIsDonateOpen] = useState(false);
    
    // New state for handling sub-section display
    const [selectedActivity, setSelectedActivity] = useState(null);

    return (
        <div className="min-h-screen bg-white font-['Algerian,sans-serif'] pt-16">

            {/* 1. Hero Header - MODIFIED FOR CREATIVITY AND IMPACT */}
            <section className="bg-gradient-to-r from-fuchsia-800 to-purple-900 py-32 px-6 text-white text-center relative overflow-hidden shadow-xl">
                {/* Subtle Graphic Overlay - Non-animated, decorative only */}
                <div 
                    className="absolute inset-0 z-0 opacity-20" 
                    style={{ 
                        backgroundImage: 'radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
                        backgroundSize: '100% 100%'
                    }} 
                />
                <div className="relative z-10">
                    {/* Creative Pre-Header Text */}
                    <p className="text-lg font-semibold mb-3 tracking-widest uppercase text-purple-200">
                        The Movement Starts Here ⚡
                    </p>
                    <h1 className="text-6xl md:text-7xl font-['Impact,sans-serif'] tracking-tight mb-4 drop-shadow-lg">
                        <span className="block text-fuchsia-300">ENGAGE</span>
                        <span className="block mt-[-0.5rem] md:mt-[-1rem]">YOUR FAITH</span>
                    </h1>
                    <p className="text-xl opacity-90 max-w-3xl mx-auto font-light mt-6">
                        Explore our dynamic, purpose-driven activities designed to foster spiritual growth and real-world impact.
                    </p>
                </div>
            </section>
            {/* END MODIFIED HERO HEADER */}

            <div className="max-w-7xl mx-auto py-20 px-6">
                {/* 2. Main Activities Grid */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Programs Designed for Impact</h2>
                        <p className="text-gray-600 mt-2">Click any activity card below for in-depth details.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {activities.map((activity) => (
                            <button
                                key={activity.id}
                                // Click handler to set the selected activity
                                onClick={() => setSelectedActivity(activity)}
                                className={`text-left p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-fuchsia-300 ${selectedActivity && selectedActivity.id === activity.id ? 'ring-4 ring-fuchsia-500 shadow-2xl scale-[1.03] bg-fuchsia-50' : 'bg-white'}`}
                            >
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${activity.color}`}>
                                    <activity.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{activity.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm">{activity.description}</p>
                                <p className="text-sm font-semibold text-gray-700 mt-auto border-t pt-3 flex items-center">
                                    <Calendar className={`w-4 h-4 inline mr-2 ${primaryColor}`} />
                                    {activity.details}
                                </p>
                            </button>
                        ))}
                    </div>
                </section>

                {/* 2.1. Sub-Section for Selected Activity Details */}
                {selectedActivity && (
                    <section className="mt-16 pt-16 animate-fadeIn">
                        <ActivityDetails
                            activity={selectedActivity}
                            onClear={() => setSelectedActivity(null)}
                        />
                    </section>
                )}
            </div>

            <hr className="max-w-7xl mx-auto border-gray-200" />
            
            {/* 3. Featured/Upcoming Event Highlight (No functional change) */}
            <section className="bg-fuchsia-50 py-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* Image/Visual (Left)  */}
                    <div className="order-2 md:order-1 relative group">
                        <img
                            src="/src/assets/images/Flyer.jpg" 
                            alt="Featured Youth Summit Event"
                            className="w-full h-auto object-cover max-h-96 rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] border-4 border-fuchsia-300"
                        />
                        {/* Image Creative Surprise: Badge */}
                        <div className="absolute top-0 left-0 bg-fuchsia-600 text-white px-4 py-1 rounded-br-xl font-bold text-sm tracking-wider shadow-md">
                            NEXT BIG THING
                        </div>
                    </div>
                    
                    {/* Text Content (Right) */}
                    <div className="order-1 md:order-2">
                        <p className="text-fuchsia-600 font-semibold mb-2 uppercase text-sm tracking-widest flex items-center">
                            <Zap className="w-4 h-4 mr-2" />
                            Don't Miss Out!
                        </p>
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">The Annual Youth Conference: 2025</h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Our biggest event of the year! A two-day intensive conference focusing on career development, spiritual awakening, and knowing new dimension of God.
                        </p>
                        
                        <div className="space-y-3 mb-8">
                            <p className="flex items-center text-lg font-medium text-gray-800">
                                <Calendar className={`w-5 h-5 ${primaryColor} mr-3`} />
                                <strong>Date:</strong> October 25th - 26th, 2025
                            </p>
                            <p className="flex items-center text-lg font-medium text-gray-800">
                                <MapPin className={`w-5 h-5 ${primaryColor} mr-3`} />
                                <strong>Location:</strong> The Main Auditorium, Zarmaganda, off Rayfield Road, Jos
                            </p>
                        </div>
                        
                        {/* Button now triggers the Registration Modal */}
                        <button
                            onClick={() => setIsRegisterOpen(true)}
                            className="inline-flex items-center bg-fuchsia-700 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-fuchsia-600 transition-colors shadow-lg"
                        >
                            Be A Partaker <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 4. CTA to Calendar/Contact (No functional change) */}
            <section className="bg-gradient-to-r from-fuchsia-800 to-purple-900  text-white py-12 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-semibold mb-2">View Our Full Monthly Calendar</h3>
                    <p className="text-gray-200 mb-6">See all upcoming meetings, workshops, and volunteer opportunities.</p>
                    {/* Button now triggers the Calendar Modal */}
                    <button
                        onClick={() => setIsCalendarOpen(true)}
                        className="inline-block bg-white text-fuchsia-700 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        Add to Calendar
                    </button>
                </div>
            </section>

            {/* START NEW CREATIVE FOOTER (No functional change) */}
            <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 border-t-8 border-fuchsia-700">
                <div className="max-w-7xl mx-auto">

                    {/* Top CTA Bar: Focus on Action - Buttons now open Modals */}
                    <div className="bg-gradient-to-r from-fuchsia-800 to-purple-900  p-8 sm:p-12 rounded-xl shadow-2xl mb-12 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 transform -translate-y-1/4">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl font-extrabold mb-2 leading-tight">Ready to Get Involved?</h2>
                            <p className="text-fuchsia-100 max-w-lg">
                                Don't just read about it—be a part of the movement! Volunteer your skills or support our mission.
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <button
                                onClick={() => setIsVolunteerOpen(true)}
                                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-bold rounded-full shadow-lg text-fuchsia-700 bg-white hover:bg-purple-100 transition-all duration-300"
                            >
                                <Users size={20} className="mr-2" />
                                Volunteer
                            </button>
                            <button
                                onClick={() => setIsDonateOpen(true)}
                                className="inline-flex items-center justify-center px-6 py-3 border-2 border-fuchsia-400 text-white bg-transparent hover:bg-fuchsia-400 font-bold rounded-full transition-all duration-300"
                            >
                                <Heart size={20} className="mr-2 fill-current text-fuchsia-400 hover:text-white" />
                                Donate
                            </button>
                        </div>
                    </div>
                    {/* Rest of Footer (No Functional Change) */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-sm pt-4">

                        {/* Column 1: Logo & Mission */}
                        <div className="col-span-2 md:col-span-1">
                            <h3 className="text-3xl font-bold mb-3 text-fuchsia-400">GFM YOUTH</h3>
                            <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
                                TO REACH OUT AND HARNESS YOUNG MEN AND WOMEN WHO WILL MANIFEST THE KINGDOM OF HEAVEN.
                            </p>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Activity Categories */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4 text-white uppercase tracking-wider">Activity Focus</h4>
                            <ul className="space-y-3">
                                <li><Link to="/activities#vigil" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Spiritual Growth</Link></li>
                                <li><Link to="/activities#rehearsals" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Worship & Music</Link></li>
                                <li><Link to="/activities#evangelism" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Outreach & Evangelism</Link></li>
                                <li><Link to="/activities#cluster" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Arts & Media</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Quick Links */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4 text-white uppercase tracking-wider">Quick Links</h4>
                            <ul className="space-y-3">
                                <li><Link to="/" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Home</Link></li>
                                <li><Link to="/about" className="text-gray-400 hover:text-fuchsia-400 transition-colors">About Us</Link></li>
                                <li><Link to="/contact" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Contact Us</Link></li>
                                <li><Link to="/calendar" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Full Calendar</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Contact Details */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4 text-white uppercase tracking-wider">Get in Touch</h4>
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
                                    <a href="mailto:houseofoperaworld@gmail.com" className="hover:text-fuchsia-400 transition-colors">Email Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Copyright Bar */}
                    <div className="mt-12 pt-6 border-t border-purple-800/50 text-center text-gray-500 text-xs sm:text-sm">
                        <p>
                            © 2025 House of Opera. All rights reserved. | <Link to="/privacy" className="hover:text-fuchsia-400">Privacy Policy</Link>
                        </p>
                    </div>
                </div>
            </footer>
            {/* END NEW CREATIVE FOOTER */}

            {/* --- Modals for all CTAs (No Change) --- */}

            <Modal
                isOpen={isRegisterOpen}
                onClose={() => setIsRegisterOpen(false)}
                title="Youth Summit Registration"
            >
                <RegistrationModal onClose={() => setIsRegisterOpen(false)} />
            </Modal>

            <Modal
                isOpen={isCalendarOpen}
                onClose={() => setIsCalendarOpen(false)}
                title="Add Event to Calendar"
            >
                <CalendarModal onClose={() => setIsCalendarOpen(false)} />
            </Modal>

            <Modal
                isOpen={isVolunteerOpen}
                onClose={() => setIsVolunteerOpen(false)}
                title="Volunteer Sign-Up Form"
            >
                <VolunteerModal onClose={() => setIsVolunteerOpen(false)} />
            </Modal>

            <Modal
                isOpen={isDonateOpen}
                onClose={() => setIsDonateOpen(false)}
                title="Support Our Mission"
            >
                <DonateFormModal onClose={() => setIsDonateOpen(false)} />
            </Modal>
        </div>
    );
}