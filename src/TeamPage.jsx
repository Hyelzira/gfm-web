// src/TeamPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Instagram, Twitter, Linkedin, Users, Award, Clock, Star, Zap, Gem } from 'lucide-react'; 

const TEAM_MEMBERS = [
    {
    name: 'AMBRUCE ISRAEL',
    role: 'MEDIA DIRECTOR',
    image: '/src/assets/images/bruce.jpg',
    bio: 'Media production expert skilled in photography, videography, and content creation.',
    email: 'israelambruce4@gmail.com',
    phone: '+234 816 750 3552',
    social: { facebook: '#', instagram: '#', twitter: '#' }
  },
  {
    name: 'WAKAWA HYELZIRA',
    role: 'WEB DEVELOPER',
    image: '/src/assets/images/hyelzira.jpg',
    bio: 'Tech innovator and digital strategist building our online presence for youth engagement.',
    email: 'wakaemmanuella9@gmail.com',
    phone: '+234 807 890 1234',
    social: { facebook: '#', linkedin: '#', twitter: '#' }
  },
  {
    name: 'AMBRUCE EMILY',
    role: 'EDUCATION ADMINISTRATOR',
    image: '/src/assets/images/emie.jpg',
    bio: 'Passionate about empowering young people in the aspect of education and how they can implement God in their daily activities.',
    email: 'emiebruce@gmail.com',
    phone: '+234 801 234 5678',
    social: { facebook: '#', instagram: '#', twitter: '#' }
  },
  {
    name: 'PAM VICTORY',
    role: 'BUSINESS DIRECTOR',
    image: '/src/assets/images/vic.jpg',
    bio: 'Dynamic expertise in business development and community building in the ways of Christ.',
    email: 'victory@gfmyouth.org',
    phone: '+234 802 345 6789',
    social: { facebook: '#', instagram: '#', linkedin: '#' }
  },
  {
    name: 'MAIMAKO JESSE',
    role: 'MUSIC DIRECTOR',
    image: '/src/assets/images/jesse.jpg',
    bio: 'Music manager expertise with a heart for youth development in music.',
    email: 'jesseny480@gmail.com',
    phone: '+234 803 456 7890',
    social: { facebook: '#', instagram: '#', twitter: '#' }
  },
  {
    name: 'KUBA DESMOND',
    role: 'POLITICS ADMINISTRATOR',
    image: '/src/assets/images/desmond.jpg',
    bio: 'Organizational specialist with exceptional administrative skills and operational expertise.',
    email: 'desmondkuba@gmail.com',
    phone: '+234 804 567 8901',
    social: { facebook: '#', instagram: '#', linkedin: '#' }
  },
  {
    name: 'KWATRI VICTOR',
    role: 'MOVIE COORDINATOR',
    image: '/src/assets/images/victor.jpg',
    bio: 'Compassionate caregiver dedicated to ensuring the well-being of all youth members.',
    email: 'victorkwatri39@gmail.com',
    phone: '+234 805 678 9012',
    social: { facebook: '#', instagram: '#', twitter: '#' }
  },
  {
    name: 'WOPHIL NENLA',
    role: 'FASHION DIRECTOR',
    image: '/src/assets/images/nenla.jpg',
    bio: 'Creative arts director with extensive experience in fashion.',
    email: 'nenlaw@gmail.com',
    phone: '+234 806 789 0123',
    social: { facebook: '#', instagram: '#', whatsapp: '#' }
  },
  {
    name: 'TEDDY RICHARDS',
    role: 'SPORTS DIRECTOR',
    image: '/src/assets/images/rich.jpg',
    bio: 'Passionate expert skilled in cinematography and yearns to aid young men and women know God.',
    email: 'armenrichard1212@gmail.com',
    phone: '+234 808 901 2345',
    social: { instagram: '#', facebook: '#', behance: '#' }
  },
   {
    name: 'WAKAWA HIRHYEL',
    role: 'POETRY DIRECTOR',
    image: '/src/assets/images/joan.jpg',
    bio: 'Visionary poetry administrator with the mission of drawing young men and women to Christ via poetry and spoken words.',
    email: 'wakawajoanna2@gmail.com',
    phone: '+234 808 901 2345',
    social: { instagram: '#', facebook: '#', behance: '#' }
  },
   {
    name: 'TANGKAT BAMAIYI KYESDUHUN',
    role: 'GODLY DATING DIRECTOR',
    image: '/src/assets/images/bamaiyi.jpg',
    bio: 'Media production expert skilled in photography, videography, and content creation.',
    email: 'kyesduhuntang@gmail.com',
    phone: '+234 803 684 8955',
    social: { instagram: '#', facebook: '#', behance: '#' }
  },
 {
    name: 'BITRUS JOSHUA DANG',
    role: 'CREATIVE DESIGNER',
    image: '/src/assets/images/joshua.jpg',
    bio: 'Media production expert skilled in photography, videography, and content creation.',
    email: 'dbwebum@gmail.com ',
    phone: '+234 703 081 4404',
    social: { instagram: '#', facebook: '#', behance: '#' }
  }
];

const TEAM_STATS = [
  { icon: Users, number: '10+', label: 'Team Members' },
  { icon: Award, number: '8+', label: 'Years Experience' },
  { icon: Clock, number: '10K+', label: 'Hours Volunteered' },
  { icon: Star, number: '95.5%', label: 'Satisfaction Rate' }
];

const SocialIcon = ({ icon: Icon, href = '#' }) => (
  <a 
    href={href}
    className="w-8 h-8 rounded-full bg-fuchsia-100 flex items-center justify-center text-fuchsia-700 hover:bg-fuchsia-700 hover:text-white transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-4 h-4" />
  </a>
);

const ImageWithFallback = ({ src, alt, className, fallback = "https://placehold.co/400x400/9333ea/ffffff?text=TEAM" }) => (
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

// --- NEW CREATIVE FOOTER COMPONENT ---
const CreativeFooter = () => (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 sm:px-6 border-t-8 border-purple-700">
        <div className="max-w-7xl mx-auto">
            {/* Signature Block */}
            <div className="text-center py-6 border-b border-fuchsia-800/50 mb-8">
                <p className="text-2xl font-script text-fuchsia-400 mb-1 italic">
                    "Great work is only possible with a great team."
                </p>
                <div className="flex justify-center items-center text-sm text-gray-400">
                    <Gem size={16} className="text-purple-400 mr-2"/>
                    <span className="font-semibold tracking-widest uppercase">GFM YOUTH Leadership Council</span>
                </div>
            </div>

            {/* Contact & Legal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                <div>
                    <h4 className="font-semibold text-lg mb-4 text-white uppercase tracking-wider">Connect Directly</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-center"><Mail size={16} className="mr-2 text-fuchsia-400"/> hello@gfmyouth.org</li>
                        <li className="flex items-center"><Phone size={16} className="mr-2 text-fuchsia-400"/> +234 (0) Youth Team</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-4 text-white uppercase tracking-wider">Quick Navigation</h4>
                    <ul className="space-y-3">
                        <li><Link to="/" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Home</Link></li>
                        <li><Link to="/services" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Programs</Link></li>
                        <li><Link to="/contact" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-4 text-white uppercase tracking-wider">Stay Social</h4>
                    <div className="flex space-x-3">
                        <SocialIcon icon={Facebook} />
                        <SocialIcon icon={Instagram} />
                        <SocialIcon icon={Twitter} />
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="mt-10 pt-6 border-t border-fuchsia-800/50 text-center text-gray-500 text-xs sm:text-sm">
                <p>
                    © 2025 GFM Youth Development. All rights reserved. | <Link to="/privacy" className="hover:text-fuchsia-400">Privacy Policy</Link>
                </p>
            </div>
        </div>
    </footer>
);


export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white font-['Algerian,sans-serif']">
      
      {/* -------------------------------------------------------------------------------------- */}
      {/* ----------------- START: PROFESSIONAL TEAM HEADER ------------------------------------ */}
      {/* -------------------------------------------------------------------------------------- */}
      <section className="relative bg-gradient-to-br from-fuchsia-800 to-purple-700 py-24 sm:py-32 px-6 text-white text-center overflow-hidden">
        
        {/* Static Background Graphic (No Animation) */}
        <div className="absolute inset-0 z-0 opacity-10">
          <Zap className="absolute top-10 left-1/4 w-32 h-32 text-fuchsia-300 transform rotate-45" />
          <Zap className="absolute bottom-5 right-1/4 w-24 h-24 text-purple-300 transform -rotate-45" />
          <Gem className="absolute top-1/2 left-5 w-48 h-48 text-fuchsia-300 transform scale-150 rotate-12" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold mb-4 sm:mb-5 uppercase tracking-tighter leading-none">
            {/* Gradient Text for Maximum Impact */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-200 to-white">
             COMMUNITY COUNCIL
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-light opacity-95 leading-tight italic max-w-3xl mx-auto">
            Our Exquisite Crew
            <Gem className="inline-block w-6 h-6 ml-3 text-yellow-300 mb-1" />
          </h2>
          <p className="text-lg sm:text-xl mt-6 opacity-80 max-w-3xl mx-auto font-medium">
            A collective of **visionaries and dedicated directors**, united by purpose to empower the next generation.
          </p>
        </div>
      </section>
      {/* -------------------------------------------------------------------------------------- */}
      {/* ----------------- END: PROFESSIONAL TEAM HEADER -------------------------------------- */}
      {/* -------------------------------------------------------------------------------------- */}

      {/* Team Stats - Now updated to be a bold 'Fact Bar' */}
      <section className="bg-gray-100 py-6 sm:py-8 px-6 border-b-4 border-fuchsia-600 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-300">
            {TEAM_STATS.map((stat, index) => (
              <div key={index} className="text-center text-gray-800 p-4">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-fuchsia-600" />
                <div className="text-xl sm:text-3xl font-extrabold mb-0 leading-none">{stat.number}</div>
                <div className="text-fuchsia-800 text-xs sm:text-sm font-semibold uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto py-16 sm:py-20 px-6">
        <div className="text-center mb-12">
          <p className="text-fuchsia-700 font-semibold mb-2 text-sm uppercase tracking-widest">OUR OFFICIALS</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Community Officials </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our dedicated team of visionaries and implementers work tirelessly to create impactful programs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl mb-1 text-gray-800">{member.name}</h3>
                <p className="text-fuchsia-600 font-semibold text-sm sm:text-base mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-fuchsia-600" />
                    <span className="truncate text-xs sm:text-sm">{member.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-fuchsia-600" />
                    <span className="text-xs sm:text-sm">{member.phone}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {member.social.facebook && <SocialIcon icon={Facebook} href={member.social.facebook} />}
                  {member.social.instagram && <SocialIcon icon={Instagram} href={member.social.instagram} />}
                  {member.social.twitter && <SocialIcon icon={Twitter} href={member.social.twitter} />}
                  {member.social.linkedin && <SocialIcon icon={Linkedin} href={member.social.linkedin} />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="bg-gray-50 py-16 sm:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">Want to Join Our Community?</h2>
          <p className="text-gray-600 text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to make a difference in the lives of young people around the globe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-fuchsia-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-purple-600 transition-colors shadow-lg"
            >
              Volunteer With Us
            </Link>
            <Link
              to="/services"
              className="border-2 border-fuchsia-700 text-fuchsia-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-fuchsia-50 transition-colors"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    
      {/* NEW CREATIVE FOOTER */}
      <CreativeFooter />
    </div>
  );
}