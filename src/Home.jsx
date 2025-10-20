import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, ChevronRight, Mail, Phone, Facebook, 
  Instagram, Twitter, Linkedin, Menu, X, Calendar 
} from 'lucide-react';
import HeaderNav from './HeaderNav'; // Assuming this is the correct path to your new component

// --- RESTORED CONSTANTS ---

const HERO_SLIDES = [
  { 
    image: '/src/assets/images/dad.jpg', 
    title: 'RAISING A PEOPLE OF POWER WHO WILL MANIFEST THE KINGDOM', 
    subtitle: 'AND REALITIES OF THE FULLNESS OF CHRIST THROUGH THE SPIRIT.', 
    description: 'Building and equipping youths through discipleship' 
  },
   { 
    image: '/src/assets/images/seated.jpg', 
    title: 'AWAKEN YOUR ', 
    subtitle: 'ORDINATION WITHIN', 
    description: 'Join a community that believes in your potential' 
  },
  { 
    image: '/src/assets/images/HOO.jpg', 
    title: 'DISCOVER YOUR', 
    subtitle: 'HIDDEN TALENTS', 
    description: 'Join a community that believes in your potential' 
  },
  { 
    image: '/src/assets/images/slider2.jpg', 
    title: 'BUILD YOUR', 
    subtitle: 'BRIGHT FUTURE', 
    description: 'Transform your dreams into reality with us' 
  }
];

const PROGRAMS = [
  { 
    title: 'EVERYTHING TECH', 
    description: "We're like minds filled with innovative thoughts and ideas through the help of God have been able locate and birth forth youths with high intellect of technology around their daily life.", 
    image: '/src/assets/images/tech.png' 
  },
  { 
    title: 'EVERYTHING MUSIC', 
    description: "We're like minds filled with innovative thoughts and ideas through the help of God have been able locate and birth forth youths with high intellect of technology around their daily life.", 
    image: '/src/assets/images/music.png' 
  },
  { 
    title: 'GODLY DATING', 
    description: "We're like minds filled with innovative thoughts and ideas through the help of God have been able locate and birth forth youths with high intellect of technology around their daily life.", 
    image: '/src/assets/images/dating.png' 
  },
];

const STATS = [
  { number: '45M', label: 'ONLINE MEMBERS' },
  { number: '5000', label: 'OFFLINE MEMBERS' },
  { number: '200+', label: 'YOUTHS' },
  { number: '500+', label: 'CHILDREN' }
];

const SERVICES = [
  { 
    image: '/src/assets/images/edu.png', 
    title: 'EVERYTHING EDUCATION', 
    description: 'We provide educational support and resources to help youth excel academically.' 
  },
  { 
    image: '/src/assets/images/poetry.png', 
    title: 'EVERYTHING POETRY', 
    description: 'Express yourself through spoken word and creative writing programs.' 
  },
  { 
    image: '/src/assets/images/sports.png', 
    title: 'EVERYTHING SPORTS', 
    description: 'Build character and teamwork through various sports activities.' 
  },
  { 
    image: '/src/assets/images/movie.png', 
    title: 'EVERYTHING MOVIES', 
    description: 'Experience cultural events and performances that inspire creativity.' 
  },
  { 
    image: '/src/assets/images/fashion.png', 
    title: 'EVERYTHING FASHION', 
    description: 'Explore fashion design and self-expression through style.' 
  },
  { 
    image: '/src/assets/images/politics.png', 
    title: 'EVERYTHING POLITICS', 
    description: 'Comprehensive learning programs tailored for youth development.' 
  }
];

const CREW = [
  { name: 'APOSTLE DANJUMA MUSA GAKSU', role:'PRESIDENT AND PASTOR OF GLOBAL FLAME YOUTH COMMUNITY', image: '/src/assets/images/flan.jpg'},
  { name: 'APOSTLE FAITH MUSA GAKSU', role:'LEADERSHIP DAUGHTERS OF HONOUR GLOBAL FLAME MINISTRY', image: '/src/assets/images/mum.jpg'},
  { name: 'BENEDICT DANIEL', role: 'UNIT HEAD GFM YOUTHS', image: '/src/assets/images/Ben.jpg' },
  { name: 'EZEKIEL ISAIAH', role: 'ASST. UNIT HEAD GFM YOUTHS', image: '/src/assets/images/isaiah.jpg' },
  { name: 'USIGBE PRINCESS', role: 'FIN. SECRETARY GFM YOUTHS', image: '/src/assets/images/prinx.jpg' },
  { name: 'AJIK MICHELLE', role: 'ADMIN UNIT GFM YOUTHS', image: '/src/assets/images/michelle.jpg' },
  { name: 'MAHULE PRECIOUS', role: 'WELFARE COORDINATOR GFM YOUTHS', image: '/src/assets/images/officials.jpg' },
  { name: 'JONATHAN MIRACLE', role: 'DANCE DIRECTOR GFM YOUTHS', image: '/src/assets/images/miracle.jpg' },
  { name: 'WAKAWA HYELZIRA', role: 'WEB DEVELOPER GFM YOUTHS', image: '/src/assets/images/hyelzira.jpg' },
  { name: 'AMBRUCE ISRAEL', role: 'MEDIA DIRECTOR GFM YOUTHS', image: '/src/assets/images/bruce.jpg' }
];

const TESTIMONIALS = [
  { 
    name: 'EMILY A.', 
    text: 'The Global Flame Ministry Youth Website has been such a blessing! It\'s not just a site, it feels like a community where I can grow in my faith and stay connected with other young believers.' 
  },
  { 
    name: 'JOANNA W.', 
    text: 'I love how the Global Flame Ministry Youth Website speaks directly to the hearts of young people. The articles, devotionals, and updates keep me encouraged daily.' 
  },
  { 
    name: 'TANCIT J.', 
    text: 'Honestly, this youth website has helped me stay consistent with my walk with God. The resources are practical, inspiring, and filled with God\'s word.' 
  },
  { 
    name: 'BLESSING A.', 
    text: 'Beyond the skills, I found a family here. The community support and opportunities are incredible for youth development.' 
  }
];

const BLOG_POSTS = [
  { 
    title: 'GIVE HIM PRAISE', 
    excerpt: 'Discover the transformative power of worship in youth development and spiritual growth.', 
    image: '/src/assets/images/dance.jpg' 
  },
  { 
    title: 'EXPERIENCE HEALING', 
    excerpt: 'Exploring mental health awareness and emotional healing for today\'s youth.', 
    image: '/src/assets/images/deliver.jpg' 
  },
  { 
    title: 'WORD OF LIGHT', 
    excerpt: 'Biblical guidance for digital natives navigating modern challenges.', 
    image: '/src/assets/images/dmg.jpg' 
  },
];

// --- REUSABLE COMPONENTS ---

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

// --- NEW MODAL COMPONENT ---

const EnrollmentModal = ({ isOpen, onClose, serviceTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    // Simulate API call for form submission
    console.log("Submitting enrollment for:", serviceTitle, formData);

    setTimeout(() => {
      setIsSubmitting(false);
      // Simulate success for now
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Close the modal after a short delay on success
      setTimeout(onClose, 2000);
    }, 1500);

 
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all duration-300 scale-100"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Inquire About {serviceTitle}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-fuchsia-700 transition-colors p-1 rounded-full hover:bg-gray-100">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <p className="text-sm text-gray-600">
            Please fill out the form below and we will get back to you with more details on how to get involved with **{serviceTitle}**.
          </p>
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors"
              placeholder="+234 800 123 4567"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors"
              placeholder="Tell us why you're interested in this service..."
            ></textarea>
          </div>

          {submissionStatus === 'success' && (
            <div className="p-3 bg-green-100 text-green-700 rounded-lg text-sm font-medium text-center">
              Thank you! Your inquiry has been sent.
            </div>
          )}

          {submissionStatus === 'error' && (
            <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm font-medium text-center">
              Submission failed. Please try again.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-bold text-white transition-colors flex items-center justify-center gap-2 ${isSubmitting ? 'bg-fuchsia-400 cursor-not-allowed' : 'bg-fuchsia-700 hover:bg-fuchsia-800 shadow-lg'}`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'SEND INQUIRY'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

// Main Home Component
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const openModal = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen bg-white font-['Algerian,sans-serif']">
      
      {/* Hero Carousel */}
      <section className="relative h-[600px] sm:h-[700px] overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-fuchsia-950/50 z-10"></div>
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              fallback="https://placehold.co/1200x600/6d28d9/ffffff?text=HERO+IMAGE"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
              <div className="text-center text-white max-w-4xl">
                <h1 className="text-3xl sm:text-3xl md:text-3xl font-extrabold mb-2 tracking-wide">
                  {slide.title}
                </h1>
                <h2 className="text-3xl sm:text-2xl md:text-2xl font-extrabold mb-4 tracking-wide">
                  {slide.subtitle}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-light mb-8">{slide.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/about" 
                    className="bg-fuchsia-700 text-white px-6 sm:px-8 py-3 rounded font-semibold text-sm hover:bg-purple-600 transition-colors shadow-xl"
                  >
                    LEARN MORE
                  </Link>
                  <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded font-bold text-sm hover:bg-white/10 transition-colors shadow-xl">
                    JOIN LIVE
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button onClick={prevSlide} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all backdrop-blur-sm">
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all backdrop-blur-sm">
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6 sm:w-8' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </section>

      {/* Programs Section */}
      <section className="max-w-7xl mx-auto py-16 sm:py-20 px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="text-left">
              <p className="text-fuchsia-700 font-semibold mb-2 text-sm uppercase tracking-widest">WHAT WE DO</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Our Signature Programs</h2>
            </div>
            {PROGRAMS.map((program, index) => (
              <div key={index} className="flex items-start gap-4 sm:gap-6">
                <ImageWithFallback
                  src={program.image}
                  alt={`${program.title} icon`}
                  className="rounded-full w-16 h-16 sm:w-20 sm:h-20 object-cover flex-shrink-0 shadow-lg border-2 border-purple-200"
                  fallback="https://placehold.co/80x80/6d28d9/ffffff?text=IMG"
                />
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-1 text-gray-700 tracking-wider">
                    {program.title}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative order-1 lg:order-2">
            <ImageWithFallback
              src="/src/assets/images/daddy-program.jpg"
              alt="Performance"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
              fallback="https://placehold.co/600x400/9333ea/ffffff?text=PROGRAMS"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/src/assets/images/slider2.jpg"
            alt="Community members"
            className="w-full h-full object-cover"
            fallback="https://placehold.co/1920x400/4c1d95/ffffff?text=STATS+BACKGROUND"
          />
          <div className="absolute inset-0 bg-purple-700/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center text-white p-4">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-medium tracking-wider uppercase opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 sm:py-20 px-6 text-center">
        <p className="text-fuchsia-700 font-semibold mb-2 text-sm uppercase tracking-widest">WHO WE ARE</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">WANT TO KNOW ABOUT THE GLOBAL FLAMES YOUTH COMMUNITIES?</h2>
        <p className="text-gray-600 leading-relaxed mb-8 sm:mb-12 max-w-4xl mx-auto">
          The Global Flame Youth Community also known as (House of Opera) is a youth-focused organization dedicated to developing the potential of young people through
          comprehensive programs in arts, education, sports, and community engagement.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
              onClick={() => openModal(service.title)} // ADDED onClick HANDLER
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-lg border-4 border-white ring-2 ring-purple-100">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    fallback="https://placehold.co/96x96/9333ea/ffffff?text=IMG"
                  />
                </div>
              </div>
              <h3 className="font-bold mb-3 text-lg text-gray-800">{service.title}</h3>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Leadership */}
      <section className="relative py-16 sm:py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/src/assets/images/slider1.jpg"
            alt="Community leaders background"
            className="w-full h-full object-cover"
            fallback="https://placehold.co/1920x400/4c1d95/ffffff?text=LEADERSHIP+BACKGROUND"
          />
          <div className="absolute inset-0 bg-purple-700/70"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white px-4">
          <p className="text-fuchsia-300 font-semibold mb-2 text-sm uppercase tracking-widest">HOW WE IMPACT</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">COMMUNITY'S LEADERSHIP</h2>
          <p className="text-purple-100 leading-relaxed text-sm sm:text-base">
            Through strategic partnerships and dedicated programs, we're building the next generation of leaders.
            Our approach combines mentorship, hands-on learning, and community service.
          </p>
        </div>
      </section>

      {/* Crew Members */}
      <section className="max-w-7xl mx-auto py-16 sm:py-20 px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">CORE LEADERSHIP TEAM</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Our dedicated team works tirelessly to ensure every young person receives the support they need.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {CREW.map((member, index) => (
            <div key={index} className="text-center bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 hover:scale-105"
                  fallback="https://placehold.co/300x256/F56565/ffffff?text=MEMBER"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-bold text-sm sm:text-base text-gray-800">{member.name}</h3>
                <p className="text-purple-600 text-xs sm:text-sm font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16 sm:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-purple-100">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 rounded-full mb-4 mx-auto flex items-center justify-center text-white text-xl sm:text-2xl font-bold border-4 border-white shadow-md">
                  {testimonial.name[0]}
                </div>
                <p className="text-gray-700 mb-4 italic text-center text-sm sm:text-base">"{testimonial.text}"</p>
                <p className="text-purple-900 font-bold text-center text-sm sm:text-base">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto py-16 sm:py-20 px-6">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-purple-600 font-semibold mb-2 text-sm uppercase tracking-widest">READ ALL</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">LATEST BLOG POSTS</h2>
          <p className="text-gray-600 text-sm sm:text-base">Stay updated with our latest news and insights.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="relative">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 sm:h-56 object-cover"
                  fallback="https://placehold.co/400x256/9333ea/ffffff?text=BLOG+POST"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-800 hover:text-fuchsia-700 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{post.excerpt}</p>
                <Link to={`/blog`} className="text-fuchsia-700 font-semibold text-sm flex items-center gap-1 hover:text-purple-600 transition-colors">
                  READ MORE <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 border-b border-gray-700 pb-8 sm:pb-12">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
                <span className="text-white">GFM</span>
                <span className="text-fuchsia-400"> YOUTH</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
                Empowering the next generation through faith, skills, and community. Building leaders for a brighter future.
              </p>
              <div className="flex gap-3">
                <SocialIcon icon={Facebook} />
                <SocialIcon icon={Instagram} />
                <SocialIcon icon={Twitter} />
                <SocialIcon icon={Linkedin} />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Quick Links</h4>
              <nav className="flex flex-col space-y-2 sm:space-y-3 text-sm">
                {['About', 'Services', 'Team', 'Blog'].map((item) => (
                  <Link 
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Get In Touch</h4>
              <div className="space-y-3 sm:space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-fuchsia-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">houseofoperaworld@gmail.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-fuchsia-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">(+234) 813 684 8041</span>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-fuchsia-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">Mon - Fri, 9AM - 5PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-6 sm:pt-8 text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Global Flame Ministry Youth. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Render the modal outside the main flow */}
      <EnrollmentModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        serviceTitle={selectedService}
      />
    </div>
  );
}
