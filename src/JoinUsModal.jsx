import React from 'react';
import { X, Handshake, Heart, Globe, DollarSign } from 'lucide-react';

/**
 * Opportunities Modal Component
 * Displays options for Volunteering, Partnership, and Donation with a transparent backdrop.
 * * @param {object} props
 * @param {boolean} props.isOpen - Controls the visibility of the modal.
 * @param {function} props.onClose - Function to call to close the modal.
 */
function JoinUsModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    // Handler for button clicks within the modal (e.g., to redirect or handle action)
    const handleActionClick = (opportunity) => {
        // You would typically redirect the user here or open a new form
        alert(`Navigating to ${opportunity} opportunities!`);
        onClose(); // Close the modal after action
    };

    return (
        // 1. Modal Backdrop (Transparent Overlay)
        // Fixed position, full screen, high Z-index, and a dark, semi-transparent background
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
            // Optional: Close modal on backdrop click
            onClick={onClose}
        >
            {/* 2. Modal Card Container */}
            <div 
                className="bg-white rounded-xl p-8 shadow-2xl w-full max-w-lg relative transform transition-all duration-300 animate-scale-in"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the card
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-800 transition-colors"
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                {/* Header */}
                <div className="text-center mb-8">
                    <Heart size={36} className="text-fuchsia-600 mx-auto mb-3 animate-pulse" />
                    <h2 className="text-3xl font-extrabold text-gray-900 font-['Algerian,sans-serif'] mb-2">
                        Explore Opportunities
                    </h2>
                    <p className="text-gray-600 text-md">
                        Join us in building the Kingdom. Choose how you want to connect and serve.
                    </p>
                </div>

                {/* Opportunities Grid */}
                <div className="space-y-4">
                    
                    {/* Option 1: Volunteer */}
                    <div 
                        className="p-5 border border-purple-200 rounded-lg cursor-pointer bg-purple-50 hover:bg-purple-100 transition-all duration-200 flex items-center shadow-md hover:shadow-lg"
                        onClick={() => handleActionClick('Volunteer')}
                    >
                        <Handshake size={24} className="text-purple-600 flex-shrink-0 mr-4" />
                        <div>
                            <h3 className="text-lg font-bold text-gray-800">Volunteer Your Time</h3>
                            <p className="text-sm text-gray-600">Lend your skills to our various outreach programs and events.</p>
                        </div>
                    </div>

                    {/* Option 2: Partnership */}
                    <div 
                        className="p-5 border border-fuchsia-200 rounded-lg cursor-pointer bg-fuchsia-50 hover:bg-fuchsia-100 transition-all duration-200 flex items-center shadow-md hover:shadow-lg"
                        onClick={() => handleActionClick('Partnership')}
                    >
                        <Globe size={24} className="text-fuchsia-600 flex-shrink-0 mr-4" />
                        <div>
                            <h3 className="text-lg font-bold text-gray-800">Become a Partner</h3>
                            <p className="text-sm text-gray-600">Collaborate with us on long-term projects and strategic initiatives.</p>
                        </div>
                    </div>

                    {/* Option 3: Donate */}
                    <div 
                        className="p-5 border border-pink-200 rounded-lg cursor-pointer bg-pink-50 hover:bg-pink-100 transition-all duration-200 flex items-center shadow-md hover:shadow-lg"
                        onClick={() => handleActionClick('Donate')}
                    >
                        <DollarSign size={24} className="text-pink-600 flex-shrink-0 mr-4" />
                        <div>
                            <h3 className="text-lg font-bold text-gray-800">Give a Donation</h3>
                            <p className="text-sm text-gray-600">Support our mission financially to fund our essential services.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default JoinUsModal;