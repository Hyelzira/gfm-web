import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, User, Clock, ChevronRight, Search, Tag, ArrowRight, // Existing Icons
  Mail, Instagram, Facebook, Twitter, Heart, MessageSquare, BookOpen // New Icons for Footer
} from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'GIVE HIM PRAISE: The Power of Worship in Youth Development',
    excerpt: 'Discover how incorporating worship and praise into youth programs can significantly impact personal growth and spiritual development.',
    image: '/src/assets/images/dance.jpg',
    author: 'Benedict Daniel',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Praise',
    tags: ['Worship', 'Youth', 'Spiritual Growth']
  },
  {
    id: 2,
    title: 'EXPERIENCE HEALING: Addressing Spiritual Healings in Modern Youth',
    excerpt: 'Exploring practical approaches to mental health awareness and emotional healing for today\'s youth.',
    image: '/src/assets/images/deliver.jpg',
    author: 'Kuba Desmond',
    date: '2024-01-12',
    readTime: '7 min read',
    category: 'Healing',
    tags: ['Spiritual Healing', 'Healing', 'Wellness']
  },
  {
    id: 3,
    title: 'WORD OF LIGHT: Biblical Guidance for Digital Natives',
    excerpt: 'How ancient wisdom applies to modern digital challenges. Helping youth navigate relationships and identity.',
    image: '/src/assets/images/dmg.jpg',
    author: 'Usigbe Princess',
    date: '2024-01-08',
    readTime: '6 min read',
    category: 'Faith',
    tags: ['Bible', 'Digital Life', 'Guidance']
  },
  {
    id: 4,
    title: 'IN HIS PRESENCE: Creating Sacred Spaces for Youth',
    excerpt: 'The importance of dedicated spiritual environments where young people can encounter God and build faith.',
    image: '/src/assets/images/pray.jpg',
    author: 'Ajik Michelle',
    date: '2024-01-05',
    readTime: '4 min read',
    category: 'Spiritual Growth',
    tags: ['Prayer', 'Sacred Spaces', 'Community']
  },
  {
    id: 5,
    title: 'TECHNOLOGY AND FAITH: Balancing Digital Life with Spiritual Life',
    excerpt: 'Practical strategies for youth to maintain spiritual discipline while engaging with technology responsibly.',
    image: '/src/assets/images/tech.png',
    author: 'Wakawa Hyelzira',
    date: '2024-01-02',
    readTime: '8 min read',
    category: 'Technology',
    tags: ['Technology', 'Balance', 'Digital Faith']
  },
  {
    id: 6,
    title: 'THE SOUND OF HOPE: Music Ministry in Youth Empowerment',
    excerpt: 'How music and creative arts are used as powerful tools for emotional expression and spiritual connection.',
    image: '/src/assets/images/presence.jpg',
    author: 'Jonathan Miracle',
    date: '2023-12-28',
    readTime: '5 min read',
    category: 'Arts',
    tags: ['Music', 'Arts', 'Expression']
  }
];

const CATEGORIES = ['All Posts', 'Spiritual Growth', 'Healing', 'Faith', 'Technology', 'Arts', 'Community'];
const POPULAR_TAGS = ['Worship', 'Spiritual Healing', 'Technology', 'Music', 'Prayer', 'Leadership', 'Community', 'Faith'];

const ImageWithFallback = ({ src, alt, className, fallback = "https://placehold.co/600x400/9333ea/ffffff?text=BLOG" }) => (
  <img src={src} alt={alt} className={className} onError={(e) => { e.target.onerror = null; e.target.src = fallback; }} />
);

const BlogCard = ({ post }) => (
  <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
    <div className="relative overflow-hidden">
      <ImageWithFallback src={post.image} alt={post.title} className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute top-3 left-3">
        <span className="bg-fuchsia-600 text-white px-2 py-1 rounded-full text-xs font-semibold">{post.category}</span>
      </div>
    </div>
    
    <div className="p-4 sm:p-6">
      <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 mb-3 flex-wrap">
        <div className="flex items-center gap-1">
          <User className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>{post.readTime}</span>
        </div>
      </div>
      
      <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-800 group-hover:text-fuchsia-700 transition-colors line-clamp-2">
        {post.title}
      </h3>
      
      <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-3">
        {post.excerpt}
      </p>
      
      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
        {post.tags.slice(0, 3).map((tag, index) => (
          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">#{tag}</span>
        ))}
      </div>
      
      <Link to={`/blog/${post.id}`} className="text-fuchsia-700 font-semibold text-sm flex items-center gap-1 hover:text-purple-600 transition-colors group/link">
        READ MORE <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  </article>
);

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
              post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    // Replaced custom font with professional Tailwind default sans-serif stack
    <div className="min-h-screen bg-gray-50 font-['Algerian,sans-serif']"> 
      
      {/* NEW CREATIVE & PROFESSIONAL HEADER */}
      <header className="relative bg-gradient-to-br from-fuchsia-900 to-purple-800 text-white shadow-2xl overflow-hidden">
        {/* Subtle background overlay pattern for texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24 relative z-10">
          <div className="text-center">
            {/* Tagline/Pre-title */}
            <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-300 mb-2 flex items-center justify-center">
              <BookOpen className="w-4 h-4 mr-2"/>
              Nurturing Faith, Inspiring Action
            </p>
            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
              The <span className="text-fuchsia-400">GFM Youth</span> Blog
            </h1>
            {/* Sub-headline */}
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed font-light">
              Insights, stories, and wisdom—dedicated to fueling your spiritual growth and building an empowered community.
            </p>
          </div>

          {/* Call to action (optional) */}
          <div className="mt-8 text-center">
            <Link 
              to="/about-us" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-purple-900 bg-fuchsia-300 hover:bg-white hover:shadow-xl transition-all duration-300 shadow-lg"
            >
              Explore Our Mission <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>
      {/* END NEW HEADER */}

      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter */}
            <div className="bg-white p-6 sm:p-6 rounded-2xl shadow-lg mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent text-sm sm:text-base"
                >
                  {CATEGORIES.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-4">No articles found matching your criteria.</div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All Posts');
                  }}
                  className="text-fuchsia-700 hover:text-purple-600 font-semibold"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sm:space-y-8">
              {/* Popular Tags */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-lg mb-3 sm:mb-4 text-gray-800">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_TAGS.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchTerm(tag)}
                      className="flex items-center gap-1 bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-fuchsia-100 hover:text-fuchsia-700 transition-colors"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className=" bg-gradient-to-br from-fuchsia-900 to-purple-800 p-4 sm:p-6 rounded-2xl shadow-lg text-white">
                <h3 className="font-bold text-lg mb-2 sm:mb-3">Stay Updated</h3>
                <p className="text-purple-100 text-sm mb-3 sm:mb-4">
                  Get the latest articles and updates delivered to your inbox.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
                  />
                  <button className="w-full bg-white text-fuchsia-700 py-2 sm:py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEW CREATIVE FOOTER */}
      <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 sm:px-6 border-t-8 border-fuchsia-700">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Row: Inspirational Quote & Logo */}
          <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-purple-800/30">
            {/* Logo/Mission */}
            <div className="md:col-span-1">
              <h3 className="text-3xl font-extrabold mb-3 text-fuchsia-400 flex items-center">
                <BookOpen size={28} className="mr-2"/> GFM YOUTH
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Sharing God's word and building a community of empowered youth for His Kingdom.
              </p>
            </div>
            
            {/* Daily Inspiration Block */}
            <div className="md:col-span-2 bg-fuchsia-400/50 p-6 rounded-xl shadow-xl">
              <div className="flex items-start">
                <MessageSquare size={32} className="text-fuchsia-200 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Daily Inspiration</h4>
                  <blockquote className="italic text-fuchsia-100">
                    "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will."
                  </blockquote>
                  <p className="text-fuchsia-300 font-semibold text-sm mt-2">— Romans 12:2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Links and Contact Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-sm pt-8">

            {/* Column 1: Blog Categories */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white uppercase tracking-wider">Top Topics</h4>
              <ul className="space-y-3">
                <li><Link to="/category/spiritual-growth" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Spiritual Growth</Link></li>
                <li><Link to="/category/mental-health" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Mental Health</Link></li>
                <li><Link to="/category/faith" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Faith & Bible</Link></li>
                <li><Link to="/category/technology" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Digital Life</Link></li>
              </ul>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white uppercase tracking-wider">Site Map</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Home</Link></li>
                <li><Link to="/activities" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Activities</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Contact</Link></li>
                <li><Link to="/donate" className="text-gray-400 hover:text-fuchsia-400 transition-colors flex items-center">Support Us <Heart size={14} className="ml-2 text-red-500 fill-red-500"/></Link></li>
              </ul>
            </div>

            {/* Column 3: Connect */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold text-lg mb-4 text-white uppercase tracking-wider">Connect</h4>
              <p className="text-gray-400 mb-4">Follow our journey and engage with our community online.</p>
              <div className="flex space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="mailto:houseofoperaworld@gmail.com" aria-label="Email" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
              {/* Column 4: Newsletter CTA (Repeated for visibility) */}
              <div className="col-span-2 md:col-span-1">
                <h4 className="font-semibold text-lg mb-4 text-white uppercase tracking-wider">Email Updates</h4>
                <p className="text-purple-200 text-sm mb-3">
                    Get the freshest blog posts instantly.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-purple-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-sm"
                  />
                  <button className="w-full bg-fuchsia-500 text-white py-2 rounded-lg font-semibold hover:bg-fuchsia-400 transition-colors text-sm">
                    Subscribe Now <ArrowRight size={16} className="inline ml-1"/>
                  </button>
                </div>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="mt-10 pt-6 border-t border-purple-800/50 text-center text-gray-500 text-xs sm:text-sm">
            <p>
              © 2025 House of Opera. All rights reserved. | <Link to="/privacy" className="hover:text-fuchsia-400">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </footer>
      {/* END NEW CREATIVE FOOTER */}
    </div>
  );
}
