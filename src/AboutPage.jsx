import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Users, Calendar, Heart, Book, ChevronRight, CornerRightDown, Mail, MapPin, Phone, Zap, Lightbulb, ChevronsDown } from 'lucide-react';

// --- Static Data ---

const CORE_VALUES = [
  {
    title: "Communication",
    icon: Users,
    description: "Fostering confidence and capability in every young person we reach."
  },
  {
    title: "Integrity",
    icon: Heart,
    description: "Building strong relationships and a supportive environment for all."
  },
  {
    title: "Honesty",
    icon: Book,
    description: "Encouraging creative thinking and modern problem-solving skills."
  },
  {
    title: "Timely Disclosure",
    icon: Calendar,
    description: "Operating with transparency, honesty, and strong moral principles."
  }
];

// Added a special "placeholder" member for the surprise
const CREW = [
  { name: 'BENEDICT DANIEL', role: 'UNIT HEAD', image: '/src/assets/images/Ben.jpg' },
  { name: 'EZEKIEL ISAIAH', role: 'ASST. UNIT HEAD', image: '/src/assets/images/isaiah.jpg' },
  { name: 'USIGBE PRINCESS', role: 'FIN. SECRETARY', image: '/src/assets/images/prinx.jpg' },
  { name: 'AJIK MICHELLE', role: 'ADMIN UNIT', image: '/src/assets/images/michelle.jpg' },
  { name: 'NANLE PANMUN', role: 'ADMIN PRO 1', image: '/src/assets/images/HOOI.jpg' },
  { name: 'KATVEN EMMANUELLA', role: 'WELFARE UNIT', image: '/src/assets/images/ella.jpg' },
  { name: 'IJACHI MICHELLE', role: 'PUBLIC RELATIONS', image: '/src/assets/images/mich.jpg' },
  { name: 'IDAMA SUNDAY', role: 'ADMIN PRO II', image: '/src/assets/images/rich.jpg' },
];

// --- Disclaimer Component ---
const Disclaimer = ({ className = "" }) => (
  <div className={`bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 ${className}`}>
    <div className="flex">
      <div className="flex-shrink-0">
        <Lightbulb className="h-5 w-5 text-yellow-400" />
      </div>
      <div className="ml-3">
        <p className="text-sm text-yellow-700">
          <strong>Disclaimer:</strong> The views and opinions expressed on this page are solely those of the Global Youth Community members and do not necessarily reflect the official policy or position of any affiliated organizations. All quotes and testimonials are personal expressions from our community members.
        </p>
      </div>
    </div>
  </div>
);

// --- Utility Components ---

const ImageWithFallback = ({ src, alt, className, fallback = "https://placehold.co/600x400/9333ea/ffffff?text=IMAGE" }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = fallback;
    }}
  />
);

// --- Section Components ---

const MissionSection = () => (
  <section id="our-mission" className="max-w-7xl mx-auto py-20 px-6">
    <Disclaimer />
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <p className="text-fuchsia-700 font-semibold mb-2 text-sm uppercase tracking-widest">SECTION 1</p>
        <h2 className="text-4xl font-bold mb-6 text-gray-800">OUR MISSION: IGNITE, EQUIP, DEPLOY</h2>
        <p className="text-gray-700 leading-relaxed mb-6 border-l-4 border-fuchsia-400 pl-4 italic">
          We raise a people of power who will manifest the fullness of the Realities of Christ through the Spirit, under the leadership of our Father in the Lord, Apostle Danjuma Musa Gaksu.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
           Our core mission is to **ignite** the spiritual fire in every young person, **equip** them with practical skills for the modern world, and **deploy** them as positive change agents in their communities.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <CornerRightDown className="w-5 h-5 text-fuchsia-600 flex-shrink-0 mt-1" />
            Holistic development (Spirit, Soul, and Body).
          </li>
          <li className="flex items-start gap-3">
            <CornerRightDown className="w-5 h-5 text-fuchsia-600 flex-shrink-0 mt-1" />
            Creating safe spaces for talent discovery and growth.
          </li>
          <li className="flex items-start gap-3">
            <CornerRightDown className="w-5 h-5 text-fuchsia-600 flex-shrink-0 mt-1" />
            Mentorship programs connecting youth with experienced leaders.
          </li>
        </ul>
      </div>
      <div className="order-1 md:order-2">
        <ImageWithFallback
          src="/src/assets/images/deliver.jpg"
          alt="Mission illustration"
          className="w-full h-auto rounded-3xl shadow-2xl border-4 border-fuchsia-400"
          fallback="https://placehold.co/600x400/9333ea/ffffff?text=MISSION"
        />
      </div>
    </div>
  </section>
);

const FunFactSection = () => {
  // Surprise 1: Interactive reveal using simple state change (no CSS animations)
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section id="the-oracle" className="bg-fuchsia-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center p-10 bg-white rounded-3xl shadow-2xl border-4 border-fuchsia-600/50">
        <p className="text-purple-800 font-extrabold mb-2 text-xl uppercase tracking-widest flex items-center justify-center">
          <Lightbulb className="w-6 h-6 mr-2 text-yellow-500" /> THE ORACLE'S MESSAGE
        </p>
        <h2 className="text-5xl font-extrabold mb-8 text-gray-900">
          Ready for the Deep Truth?
        </h2>

        {/* Disclaimer for the interactive section */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
          <p className="text-sm text-blue-700 text-left">
            <strong>Note:</strong> This interactive section contains simulated metrics and inspirational content for engagement purposes only.
          </p>
        </div>

        {isRevealed ? (
          <div className="text-3xl font-medium text-fuchsia-800 p-6 bg-yellow-50 rounded-xl border-l-8 border-fuchsia-600">
            <p>
              "The most valuable resource in our community isn't the budget or the building, but the **2,347 unique ideas** that flow from our youth every week."
            </p>
            <p className="text-sm mt-4 text-gray-600">
              — Hidden metric revealed! (For illustrative purposes)
            </p>
          </div>
        ) : (
          <p className="text-gray-600 text-lg mb-6">
            Click the button below to reveal the single most important, yet often overlooked, fact about our community's impact.
          </p>
        )}

        <button
          onClick={() => setIsRevealed(true)}
          disabled={isRevealed}
          className={`mt-6 inline-flex items-center text-white px-8 py-3 rounded-full font-bold text-lg transition-all shadow-xl ${
            isRevealed 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-fuchsia-700 hover:bg-purple-800'
          }`}
        >
          {isRevealed ? 'TRUTH UNLOCKED' : 'ACCESS TRUTH'}
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </section>
  );
};

const HistorySection = () => (
  <section id="our-history" className="bg-gray-50 py-20 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <p className="text-fuchsia-700 font-semibold mb-2 text-sm uppercase tracking-widest">SECTION 2</p>
      <h2 className="text-4xl font-bold mb-8 text-gray-800">OUR HISTORY: A Timeline of Growth</h2>

      <div className="space-y-12 text-left">
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-600 transition-shadow hover:shadow-xl">
          <h3 className="font-extrabold text-2xl mb-1 text-purple-900">2018: The Genesis</h3>
          <p className="text-gray-700 mb-3">
            The ministry launched with a small gathering of 15 passionate youth, initially focusing solely on music and Bible studies.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-600 transition-shadow hover:shadow-xl">
          <h3 className="font-extrabold text-2xl mb-1 text-purple-900">2021: Expansion into Technology and Arts</h3>
          <p className="text-gray-700 mb-3">
            Responding to the needs of the modern youth, we introduced 'Everything Tech', 'Everything Poetry' and 'Everything Fashion'.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-600 transition-shadow hover:shadow-xl">
          <h3 className="font-extrabold text-2xl mb-1 text-purple-900">Today: Global Vision</h3>
          <p className="text-gray-700 mb-3">
            Now serving thousands of youth both online and offline, we continue to innovate and establish partnerships.
          </p>
        </div>
      </div>

      <Link
        to="/contact"
        className="mt-12 inline-flex items-center bg-fuchsia-700 text-white px-8 py-3 rounded-xl font-bold text-base hover:bg-purple-500 transition-colors shadow-lg uppercase"
      >
        Join Our Next Chapter <ChevronRight className="w-5 h-5 ml-2" />
      </Link>
    </div>
  </section>
);

const LeadershipSection = () => (
  <section id="leadership-team" className="max-w-7xl mx-auto py-20 px-6">
    <div className="text-center mb-12">
      <p className="text-fuchsia-700 font-semibold mb-2 text-sm uppercase tracking-widest">SECTION 3</p>
      <h2 className="text-4xl font-bold mb-4 text-gray-800">BOARD OF LEADERSHIP</h2>
      <p className="text-gray-700 max-w-3xl mx-auto">
        Guided by dedicated leaders, our crew embodies the spirit of service, mentorship, and vision.
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
      {CREW.map((member, index) => (
        <div key={index} className="text-center bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-shadow hover:shadow-2xl">
          <div className="mb-4 overflow-hidden">
            <ImageWithFallback
              src={member.image}
              alt={member.name}
              className="w-full h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-105"
              fallback="https://placehold.co/300x256/F56565/ffffff?text=LEADER"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-sm text-gray-800">{member.name}</h3>
            <p className="text-fuchsia-600 text-sm font-medium">{member.role}</p>
          </div>
        </div>
      ))}

      {/* Surprise 2: The Invisible Leader / Next Generation Card */}
      <div className="group col-span-2 md:col-span-1 text-center bg-fuchsia-900/90 rounded-xl overflow-hidden shadow-2xl border-4 border-yellow-200 transition-all hover:scale-[1.02] cursor-pointer">
        <div className="w-full h-56 md:h-64 flex items-center justify-center relative">
          <h3 className="text-white text-lg font-bold">THE INVISIBLE LEADER</h3>
          {/* Default Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <Zap className="w-12 h-10 text-blue-200 mb-12" />
            <h3 className="font-extrabold text-xl text-white mt-5">YOU</h3>
            <p className="text-fuchsia-200 text-sm font-medium mb-3">THE NEXT GENERATION</p>
          </div>

          {/* Hidden Content revealed on hover */}
          <div className="absolute inset-0 bg-fuchsia-700/90 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white italic text-center text-lg font-sm">
              "Leadership is not about a title; it's about courage, compassion, and the commitment to start. Step up."
            </p>
          </div>
        </div>
      </div>
      
    </div>
  </section>
);

// --- New Footer Component ---

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-fuchsia-400 transition-colors duration-200 block mb-2 text-base md:text-sm"
  >
    {children}
  </Link>
);

const AboutPageFooter = () => (
  <footer className="bg-gray-900 text-white font-['Algerian,sans-serif'] border-t-8 border-fuchsia-600">
    <div className="max-w-7xl mx-auto p-8 md:p-12 lg:p-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">

        {/* Column 1: Quick Links */}
        <div>
          <h4 className="text-xl font-bold text-fuchsia-400 mb-6 uppercase tracking-wider">Quick Links</h4>
          <nav>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about/mission">Our Mission</FooterLink>
            <FooterLink to="/about/history">Our History</FooterLink>
            <FooterLink to="/about/leadership">Our Leadership</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
          </nav>
        </div>

        {/* Column 2: Connect */}
        <div>
          <h4 className="text-xl font-bold text-fuchsia-400 mb-6 uppercase tracking-wider">Connect</h4>
          <p className="flex items-center text-gray-300 mb-3 text-sm">
            <Mail className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
            houseofoperaworld@gmail.com
          </p>
          <p className="flex items-center text-gray-300 mb-3 text-sm">
            <Phone className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
            (+234) 802 642 9018
          </p>
          <p className="flex items-start text-gray-300 mb-3 text-sm">
            <MapPin className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-1" />
            Zarmaganda, off Rayfield Road, Jos Plateau State Nigeria
          </p>
        </div>

        {/* Column 3 (Surprise 3): Inspiration Station */}
        <div className="col-span-2 md:col-span-1 p-4 bg-gray-600/60 rounded-xl shadow-2xl">
          <h4 className="text-2xl font-bold text-fuchsia-400 mb-4 flex items-center">
            <Lightbulb className="w-6 h-6 mr-2 text-yellow-200" /> Inspiration Station
          </h4>
          <p className="italic text-gray-100 text-lg leading-relaxed">
            "The future belongs to those who believe in the beauty of their dreams and the power of their spirit."
          </p>
          <p className="text-sm mt-3 text-fuchsia-400 font-medium">- G.F.Y. Motto</p>
          <p className="text-xs text-gray-400 mt-2">
            *Inspirational quotes represent community values
          </p>
        </div>

        {/* Column 4: Newsletter Mockup (Re-styled for mobile hide) */}
        <div className='hidden md:block'>
          <h4 className="text-xl font-bold text-fuchsia-400 mb-6 uppercase tracking-wider">Stay Updated</h4>
          <p className="text-gray-300 mb-4 text-sm">Join our newsletter for weekly inspiration and event updates!</p>
          <form onSubmit={(e) => { e.preventDefault(); console.log("Subscribed!"); }}>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-3 text-gray-800 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-fuchsia-600 py-3 rounded-lg font-bold text-white hover:bg-purple-500 transition-colors shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Footer Bottom (Enhanced Easter Egg) */}
      <div className="pt-6">
        <p className="text-center text-sm opacity-80">
          &copy; {new Date().getFullYear()} Global Youth Community. All Rights Reserved.
          <span className="group relative ml-4 inline-block">
            {/* The Secret Message Easter Egg */}
            <span className="text-fuchsia-400 font-bold cursor-pointer hover:underline border-b-2 border-dashed border-fuchsia-400 pb-0.5">Find the Secret Code!</span>

            {/* Hidden text reveals on hover (Surprise 4 - uses pure CSS/Tailwind) */}
            <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-fuchsia-600 text-xs rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 font-sans border-2 border-yellow-300">
                **CODE: GFM-2025-KAINOS(NEWNESS)** 🤫 (Don't tell anyone!)
            </span>
          </span>
        </p>
        
        {/* Global Disclaimer */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500 max-w-4xl mx-auto">
            This website and its content are for informational purposes only. All quotes, testimonials, and interactive elements represent the views and experiences of individual community members and are not intended as professional advice.
          </p>
        </div>
      </div>

    </div>
  </footer>
);

// --- Main Page Component ---

export default function AboutPage() {
  const { section } = useParams();

  const renderSection = () => {
    switch(section) {
      case 'mission':
        return <MissionSection />;
      case 'history':
        return <HistorySection />;
      case 'leadership':
        return <LeadershipSection />;
      default:
        return (
          <>
            <MissionSection />
            <HistorySection />
            <LeadershipSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-['Inter,sans-serif']">
      {/* Hero Header (Updated Font and Scroll Indicator) */}
      <section className="bg-fuchsia-900 py-16 px-6 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1200x500/7c3aed/ffffff/png?text=Pattern')] opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 uppercase tracking-wider">
            WHAT IS GLOBAL YOUTH COMMUNITY
          </h1>
          <p className="text-xl md:text-xl opacity-90 max-w-4xl mx-auto font-light">
            It is a place where you can connect with like minds and develop your potentials.
          </p>
          
          {/* Main Site Disclaimer */}
          <div className="mt-8 max-w-4xl mx-auto p-4 bg-fuchsia-800/50 rounded-lg border-l-4 border-yellow-400">
            <p className="text-sm text-fuchsia-100 text-left">
              <strong>Welcome Note:</strong> This page contains inspirational content, personal testimonials, and community-generated materials. All content reflects the experiences and views of our community members.
            </p>
          </div>
        </div>
        
        {/* Subtle Visual Cue to Scroll */}
        <div className="mt-8 text-fuchsia-300">
            <ChevronsDown className="w-8 h-8 mx-auto opacity-70" />
            <p className="text-xs mt-1">Discover More</p>
        </div>
      </section>

      {renderSection()}

      {/* Surprise 1: The Oracle's Message section */}
      <FunFactSection />

      {/* Core Values (Styling changed to look like 'Pillars') */}
      <section className="bg-gradient-to-br from-fuchsia-900 to-purple-800 py-14 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-white uppercase tracking-widest border-b-2 pb-2 border-fuchsia-500 inline-block">
            THE FOUR PILLARS OF TRANSPARENCY
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {CORE_VALUES.map((value, index) => (
              <div 
                key={index} 
                className="text-white p-6 md:p-8 rounded-xl bg-purple-900/60 shadow-lg border-t-3 border-fuchsia-500 hover:bg-purple-600/70 transition-colors"
              >
                <value.icon className="w-10 h-10 text-blue-50 mb-3 mx-auto" />
                <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                <p className="text-fuchsia-200 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Footer Inclusion */}
      <AboutPageFooter />
    </div>
  );
}