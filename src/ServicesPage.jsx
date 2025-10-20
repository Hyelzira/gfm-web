import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Mail, Instagram, Facebook, Twitter, Heart, Users, Shield, X, 
  BookOpen, Sparkles, Handshake, Briefcase, Calendar,
  // NEW ICONS ADDED FOR SERVICES
  GraduationCap, Feather, Dumbbell, Clapperboard, Shirt, Code, Music, HeartHandshake // FIXED: Changed Tshirt to Shirt
} from 'lucide-react';

// --- Icon Mapping for Dynamic Rendering ---
// This map allows us to look up and render the correct icon component by name.
const IconMap = {
  GraduationCap, Feather, Dumbbell, Clapperboard, Shirt, Code, Music, HeartHandshake, BookOpen // FIXED: Changed Tshirt to Shirt
};

// --- Data (Updated to include a corresponding icon for guaranteed display) ---
const ALL_SERVICES = [
  { 
    image: '/src/assets/images/edu.png',
    icon: 'GraduationCap', 
    title: 'EVERYTHING EDUCATION', 
    description: 'Academic support, mentorship, and career guidance tailored for youth development and success.',
    fullDescription: 'Our Education Hub provides tutoring, college application guidance, and mentorship programs. We focus on academic excellence, critical thinking skills, and preparing youth for higher education and professional careers. Programs run year-round with specialized summer intensives.',
    focus: ['Tutoring', 'Career Planning', 'Mentorship', 'Workshops'],
    targetAudience: 'Ages 14-25'
  },
  { 
    image: '/src/assets/images/poetry.png', 
    icon: 'Feather', 
    title: 'EVERYTHING POETRY', 
    description: 'Creative writing workshops and spoken word performance coaching for self-expression.',
    fullDescription: 'Dive into the world of creative expression. Our Poetry program offers weekly writing sessions, public speaking practice, and opportunities to perform at local events. It’s a safe space to explore identity and social issues through the art of spoken word.',
    focus: ['Creative Writing', 'Spoken Word', 'Performance', 'Emotional Intelligence'],
    targetAudience: 'Ages 16-28'
  },
  { 
    image: '/src/assets/images/sports.png', 
    icon: 'Dumbbell', 
    title: 'EVERYTHING SPORTS', 
    description: 'Team building and character development through competitive and recreational sports.',
    fullDescription: 'We use sports—basketball, football, and fitness training—as a tool for character development. Participants learn discipline, teamwork, leadership, and healthy lifestyle habits. All skill levels are welcome to join our community leagues.',
    focus: ['Teamwork', 'Discipline', 'Fitness Training', 'Leadership'],
    targetAudience: 'Ages 10-22'
  },
  { 
    image: '/src/assets/images/movie.png', 
    icon: 'Clapperboard',
    title: 'EVERYTHING MOVIES', 
    description: 'Film appreciation, media literacy, and cinematic arts production workshops.',
    fullDescription: 'From screenwriting to short-film production, this program covers all aspects of cinematic arts. Learn media literacy, storytelling techniques, and collaborative film production in a hands-on environment. Showcase your work at our annual youth film festival.',
    focus: ['Filmmaking', 'Screenwriting', 'Media Literacy', 'Editing'],
    targetAudience: 'Ages 18-30'
  },
  { 
    image: '/src/assets/images/fashion.png', 
    icon: 'Shirt', 
    title: 'EVERYTHING FASHION', 
    description: 'Design, styling, and personal expression through sustainable fashion practices.',
    fullDescription: 'Explore the intersection of creativity, sustainability, and personal style. Workshops cover basic design principles, upcycling, ethical sourcing, and portfolio development for aspiring designers and stylists.',
    focus: ['Design', 'Styling', 'Sustainability', 'Portfolio Building'],
    targetAudience: 'Ages 18-30'
  },
  { 
    image: '/src/assets/images/tech.png', 
    icon: 'Code',
    title: 'EVERYTHING TECH', 
    description: 'Coding bootcamps, digital literacy, and emerging technology training programs.',
    fullDescription: 'The future is digital. Our Tech Hub offers introductory courses in web development (HTML/CSS/JS), graphic design, and basic programming logic. Build essential skills for the modern workforce and digital creativity.',
    focus: ['Coding', 'Digital Literacy', 'Web Development', 'Design'],
    targetAudience: 'Ages 14-25'
  },
  { 
    image: '/src/assets/images/music.png', 
    icon: 'Music', 
    title: 'EVERYTHING MUSIC', 
    description: 'Instrumental lessons, vocal training, and sound production workshops.',
    fullDescription: 'Unleash your musical talent! We offer individual and group lessons in various instruments, vocal coaching, and workshops in home studio production and mixing. Opportunities for performance are abundant.',
    focus: ['Instrumental Lessons', 'Vocal Coaching', 'Production', 'Theory'],
    targetAudience: 'Ages 12-28'
  },
  { 
    image: '/src/assets/images/dating.png', 
    icon: 'HeartHandshake',
    title: 'GODLY DATING', 
    description: 'Faith-based relationship counseling and purity guidance for young adults.',
    fullDescription: 'A sensitive and honest discussion group focused on building healthy, God-honoring relationships. Topics include communication, boundaries, purity, and finding purpose in singleness. This is a faith-based support and learning environment.',
    focus: ['Relationships', 'Boundaries', 'Purity', 'Communication'],
    targetAudience: 'Ages 18-35'
  }
];

// --- Utility Components ---
// REPLACED: ImageWithFallback is replaced by ServiceIcon for guaranteed rendering.
const ServiceIcon = ({ iconName, className }) => {
  // Look up the component based on the name from the data, default to BookOpen
  const IconComponent = IconMap[iconName] || BookOpen; 
  
  return (
    // Render the icon component with styling
    <IconComponent 
      className={`text-fuchsia-700 w-full h-full p-3 sm:p-4 bg-fuchsia-50/70 rounded-full ${className}`} 
    />
  );
};

// --- Modal Component ---
const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-70 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-lg w-full m-4 max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100"
        onClick={e => e.stopPropagation()} 
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white rounded-t-xl">
          <h3 className="text-xl font-bold text-fuchsia-800">{title}</h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-fuchsia-600 transition-colors p-1 rounded-full hover:bg-fuchsia-50"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Modal Body */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- Footer Component ---
const AppFooter = ({ openVolunteerModal }) => (
  <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 sm:px-6 border-t-8 border-purple-700 font-sans">
    <div className="max-w-7xl mx-auto">
      
      {/* Top Section: Vision & Mentorship CTA */}
      <div className="grid md:grid-cols-4 gap-8 pb-8 border-b border-fuchsia-800/50">
        
        {/* Logo/Mission */}
        <div className="md:col-span-1">
          <h3 className="text-3xl font-extrabold mb-3 text-fuchsia-400 flex items-center font-['Algerian,sans-serif']">
            <BookOpen size={28} className="mr-2"/> GFM YOUTH
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm font-['Algerian,sans-serif']">
            Empowering the next generation through faith-centered skill development and community building.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        {/* Mentorship/Volunteer CTA (Creative Section) */}
        <div className="md:col-span-3 bg-fuchsia-700/80 p-6 rounded-xl shadow-xl border-2 border-purple-500/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start text-left">
              <Users size={40} className="text-fuchsia-200 mt-1 mr-4 flex-shrink-0 hidden sm:block" />
              <div>
                <h4 className="text-xl font-bold mb-1 font-['Algerian,sans-serif']">Become a Mentor or Volunteer</h4>
                <p className="italic text-fuchsia-100 text-sm font-['Algerian,sans-serif']">
                  Invest your time, knowledge, and passion into shaping the future leaders in our community.
                </p>
              </div>
            </div>
            <button 
              onClick={openVolunteerModal} 
              className="flex-shrink-0 bg-white text-fuchsia-700 font-bold py-3 px-6 font-['Algerian,sans-serif'] rounded-lg hover:bg-gray-200 transition-colors text-sm shadow-md"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-sm pt-8">

        {/* Column 1: Core Services */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-white uppercase tracking-wider font-['Algerian,sans-serif']">Service Hubs</h4>
          <ul className="space-y-3 font-['Algerian,sans-serif']">
            <li><Link to="/education" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Education & Career</Link></li>
            <li><Link to="/tech" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Technology Programs</Link></li>
            <li><Link to="/arts" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Creative Arts</Link></li>
            <li><Link to="/sports" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Sports & Fitness</Link></li>
          </ul>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-white uppercase tracking-wider font-['Algerian,sans-serif']">Organization</h4>
          <ul className="space-y-3 font-['Algerian,sans-serif']">
            <li><Link to="/about" className="text-gray-400 hover:text-fuchsia-400 transition-colors">About GFM Youth</Link></li>
            <li><Link to="/blog" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Read Our Blog</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Contact Us</Link></li>
            <li><Link to="/events" className="text-gray-400 hover:text-fuchsia-400 transition-colors flex items-center">Upcoming Events</Link></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-white uppercase tracking-wider font-['Algerian,sans-serif']">Support Us</h4>
          <ul className="space-y-3 font-['Algerian,sans-serif']">
            <li><Link to="/donate" className="text-gray-400 hover:text-fuchsia-400 transition-colors flex items-center">Make a Donation <Heart size={14} className="ml-2 text-red-500 fill-red-500"/></Link></li>
            <li><Link to="/partnerships" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Corporate Partnerships</Link></li>
            <li><Link to="/security" className="text-gray-400 hover:text-fuchsia-400 transition-colors flex items-center">Safety & Security <Shield size={14} className="ml-1"/></Link></li>
          </ul>
        </div>
        
        {/* Column 4: Contact Info */}
        <div className="col-span-2 md:col-span-1 font-['Algerian,sans-serif']">
          <h4 className="font-semibold text-lg mb-4 text-white uppercase tracking-wider">Get in Touch</h4>
          <p className="text-gray-400 text-sm mb-2 flex items-center">
            <Mail size={16} className="mr-2 text-fuchsia-400"/>
            globalflameyouthcommunity@gmail.com
          </p>
          <p className="text-gray-400 text-sm font-['Algerian,sans-serif']">
            Reach out for program inquiries or general questions.
          </p>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="mt-10 pt-6 border-t border-fuchsia-800/50 text-center font-['Algerian,sans-serif'] text-gray-500 text-xs sm:text-sm">
        <p>
          © 2025 GFM Youth Development. All rights reserved. | <Link to="/privacy" className="hover:text-fuchsia-400">Privacy</Link> | <Link to="/terms" className="hover:text-fuchsia-400">Terms</Link>
        </p>
      </div>
    </div>
  </footer>
);


// --- Main Page Component ---
export default function ServicesPage() {
  // State for Service Modal
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // State for Volunteer Modal
  const [isVolunteerModalOpen, setIsVolunteerModal] = useState(false);

  // Handlers
  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsServiceModalOpen(false);
    setSelectedService(null);
  };

  const openVolunteerModal = () => {
    setIsVolunteerModal(true);
  };

  const closeVolunteerModal = () => {
    setIsVolunteerModal(false);
  };


  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* --- Creative & Professional Header (Hero) --- */}
      <section className="relative bg-gray-900 pt-32 pb-24 sm:pt-40 sm:pb-32 px-6 overflow-hidden">
        {/* Decorative Overlay for visual flair */}
        <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-fuchsia-900/90 to-purple-900/90 mix-blend-screen"></div>
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-fuchsia-500/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 hidden md:block"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <p className="text-fuchsia-300 font-semibold mb-3 text-sm uppercase tracking-[0.2em] flex justify-center items-center">
            <Sparkles className="w-5 h-5 mr-2 " />
            OUR MULTI-FACETED PLATFORM
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight text-white font-['Algerian,sans-serif']">
            Empowering Youth Through The Power <span className="text-fuchsia-400">Of Discipleship</span>.
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 opacity-90 max-w-3xl mx-auto font-['Algerian,sans-serif']">
            Discover our dynamic programs in Education, Tech, Arts, Sports, and Faith. Find your path, hone your skills, and connect with a community that cares.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto py-16 sm:py-20 px-6">
        <div className="text-center mb-12 font-['Algerian,sans-serif']">
          <p className="text-fuchsia-700 font-semibold mb-2 text-sm uppercase tracking-widest">WHAT WE OFFER</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Development Programs</h2>
          <p className="text-gray-700 max-w-2xl mx-auto font-['Algerian,sans-serif']">
            From tech to arts, we provide diverse opportunities for youth to discover and develop their talents.
          </p>
          <p className="text-gray-700 max-w-2xl mx-auto mt-2">
            **Click on a program card** to learn more and connect with the program.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {ALL_SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-xl border border-fuchsia-50 hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-1"
              onClick={() => openServiceModal(service)}
            > 
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-lg border-4 border-fuchsia-400 group-hover:border-purple-500 transition-colors">
                  {/* CHANGED: Replaced ImageWithFallback with ServiceIcon */}
                  <ServiceIcon 
                    iconName={service.icon} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-800 text-center group-hover:text-purple-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={(e) => { e.stopPropagation(); openServiceModal(service); }}
                  className="text-fuchsia-700 font-semibold text-sm flex items-center gap-1 hover:text-purple-600 transition-colors group/link"
                >
                  VIEW DETAILS 
                  <ChevronRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Enhanced Ready to Get Started (CTA) --- */}
      <section className="bg-gray-800 border-t-8 border-fuchsia-600 sm:py-20 py-16 px-6 relative overflow-hidden">
        {/* Diagonal Lines Texture for flair */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-color-fuchsia-900)_0%,_var(--tw-color-gray-800)_70%)] opacity-80"></div>
        
        <div className="max-w-4xl mx-auto text-center text-white relative z-10 font-['Algerian,sans-serif']">
          <Handshake size={48} className="text-fuchsia-800 mx-auto mb-4"/>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">Ready to Take the Next Step?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-sm italic">
            Join our thriving community of motivated young adults and dedicated mentors. Let's build the future, together.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              to="/contact"
              className="transform transition-all duration-300 inline-flex items-center justify-center bg-fuchsia-900 text-white px-8 py-4 rounded-full font-sm text-sm hover:bg-purple-500 shadow-1xl hover:scale-105 ring-4 ring-fuchsia-400/60"
            >
              <ChevronRight className="w-5 h-5 mr-2"/>
              EXPLORE PROGRAMS & ENROLL
            </Link>
            <button 
              onClick={openVolunteerModal}
              className="transform transition-all duration-300 inline-flex items-center justify-center border-1 border-white text-white px-8 py-4 rounded-full font-sm text-sm hover:bg-gray-100 hover:text-gray-800 hover:scale-100"
            >
              BECOME A MENTOR
            </button>
          </div>
        </div>
      </section>
      
      {/* The existing Footer */}
      <AppFooter openVolunteerModal={openVolunteerModal} />

      {/* --- 1. Service Details Modal --- */}
      <Modal
        isOpen={isServiceModalOpen}
        onClose={closeServiceModal}
        title={selectedService ? `Program Details: ${selectedService.title}` : 'Program Details'}
      >
        {selectedService && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-md mb-3 border-4 border-fuchsia-400">
                {/* CHANGED: Replaced ImageWithFallback with ServiceIcon */}
                <ServiceIcon 
                  iconName={selectedService.icon} 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg text-gray-500 font-semibold">{selectedService.description}</p>
            </div>

            <div className="border-t pt-4 border-fuchsia-100">
              <h4 className="text-xl font-bold mb-2 text-gray-700 flex items-center"><Sparkles className="w-5 h-5 mr-2 text-fuchsia-600"/> Deep Dive</h4>
              <p className="text-gray-600 leading-relaxed text-sm">{selectedService.fullDescription}</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between border-t pt-4 border-fuchsia-100">
              <div className="mb-4 sm:mb-0">
                <h5 className="font-semibold text-fuchsia-700">Audience</h5>
                <p className="text-sm text-gray-600 flex items-center"><Users className="w-4 h-4 mr-1"/> {selectedService.targetAudience}</p>
              </div>
              <div>
                <h5 className="font-semibold text-fuchsia-700 mb-1">Key Focuses</h5>
                <div className="flex flex-wrap gap-2">
                  {selectedService.focus.map((item, i) => (
                    <span key={i} className="bg-fuchsia-100 text-fuchsia-800 text-xs font-medium px-2 py-0.5 rounded-full">{item}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA in Modal */}
            <div className="pt-4 border-t border-fuchsia-100 text-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700 transition-colors shadow-md text-sm"
              >
                ENROLL NOW / GET PROGRAM SCHEDULE
              </Link>
            </div>
          </div>
        )}
      </Modal>

      {/* --- 2. Volunteer/Mentor Apply Modal --- */}
      <Modal
        isOpen={isVolunteerModalOpen}
        onClose={closeVolunteerModal}
        title="Become a GFM Youth Volunteer/Mentor"
      >
        <div className="space-y-6">
          <p className="text-gray-600">
            Thank you for your interest in investing in the next generation! We rely on passionate volunteers and mentors to lead our specialized programs.
          </p>

          <div>
            <h4 className="text-lg font-bold mb-2 text-fuchsia-700 flex items-center"><Briefcase className="w-5 h-5 mr-2"/> Roles Available</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 text-sm">
              <li>**Program Mentor:** Guide youth through specific service areas (Tech, Music, Education).</li>
              <li>**Event Volunteer:** Help with logistics, setup, and supervision for our community events.</li>
              <li>**Administrative Support:** Assist with non-program tasks, communication, and planning.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-2 text-fuchsia-700 flex items-center"><Calendar className="w-5 h-5 mr-2"/> Requirements & Commitment</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 text-sm">
              <li>Must be 25 years or older for mentorship roles.</li>
              <li>Background check required for all long-term positions.</li>
              <li>Commitment of at least 4 hours per month is highly encouraged.</li>
            </ul>
          </div>
          
          <div className="pt-4 border-t border-fuchsia-100 text-center">
            <p className="mb-3 text-sm text-gray-700">Click below to be redirected to our formal application form:</p>
            <Link 
              to="/volunteer-form" 
              className="inline-flex items-center justify-center bg-fuchsia-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-fuchsia-700 transition-colors shadow-md text-sm"
            >
              <Handshake className="w-5 h-5 mr-2"/> START APPLICATION
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
}
