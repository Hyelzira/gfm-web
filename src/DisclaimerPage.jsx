import React from 'react';
import { Book, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-['Inter,sans-serif'] pt-16 pb-20">
            
            {/* Header Section */}
            <header className="bg-fuchsia-900 py-10 px-6 text-white text-center shadow-lg">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-3 uppercase tracking-wider">
                        Official Disclaimer & Terms
                    </h1>
                    <p className="text-lg opacity-90 font-light">
                        Transparency and trust are at the core of our community.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <section className="max-w-5xl mx-auto mt-12 px-4 sm:px-6">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border-t-4 border-fuchsia-600">
                    
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                        <Book className="w-6 h-6 mr-3 text-fuchsia-600" />
                        Our Commitment to Transparency
                    </h2>
                    
                    <div className="text-gray-700 text-base space-y-6 leading-relaxed">
                        
                        <p>
                            **Non-Profit & Religious Affiliation:** Global Youth Community (GYC) is a youth ministry and community development initiative officially affiliated with **Great Faith Ministry (GFM)**. All content, mission statements, and activities are spiritual, educational, and non-profit in nature, aimed at the holistic development of youth (Spirit, Soul, and Body).
                        </p>

                        <p>
                            **Leadership & Content Accuracy:** The leadership structure and names listed on our About Page are accurate as of the last update. While we strive for precision, **views and testimonials** expressed by individual members or non-official affiliates are their own and do not necessarily represent the official policy or position of GYC or Great Faith Ministry. We make no guarantee of specific personal or professional results from participation in our programs.
                        </p>
                        
                        <h3 className="text-xl font-semibold mt-6 text-fuchsia-800">
                            External Links Policy
                        </h3>
                        <p>
                            This website may contain links to external websites that are not provided or maintained by, or in any way affiliated with, Global Youth Community. Please note that GYC does not guarantee the **accuracy, relevance, timeliness, or completeness** of any information on these external websites. We strongly advise users to review the privacy policies and disclaimers of any linked site.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 text-fuchsia-800">
                            Copyright & Usage
                        </h3>
                        <p>
                            All original content, graphics, logos, and materials on this site are the property of the Global Youth Community, unless otherwise stated. Unauthorized reproduction or use is prohibited. You are welcome to share and link to our content for non-commercial, educational purposes with proper attribution.
                        </p>

                        <p className="font-extrabold text-lg text-gray-900 mt-8 border-t pt-4 border-gray-200">
                            **By continuing to use this website, you acknowledge and agree to these terms and conditions.**
                        </p>
                    </div>
                </div>
            </section>

            {/* Back Button */}
            <div className="max-w-5xl mx-auto mt-10 px-4 sm:px-6">
                <Link
                    to="/about"
                    className="inline-flex items-center text-fuchsia-700 hover:text-purple-900 font-medium transition-colors"
                >
                    <ChevronLeft className="w-5 h-5 mr-2" />
                    Back to About Page
                </Link>
            </div>
            
        </div>
    );
}