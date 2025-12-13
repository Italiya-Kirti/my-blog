import { STATIC_BLOGS } from "@/Common/VariableOption";
import DashboardLayout from "@/components/layouts/dashboard/DashboardLayout";
import { Badge, Button, Card, Select, TextInput } from "flowbite-react";
import { Calendar, Clock, Search, TrendingUp, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const STATIC_BLOG_POSTS = [
  {
    id: "1",
    title: "The Future of Artificial Intelligence in 2025",
    excerpt: "Explore how AI is transforming industries and what we can expect in the coming years.",
    content: "Artificial Intelligence continues to revolutionize how we work, live, and interact with technology...",
    featured_image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    author: "Alex Thompson",
    category: "Technology",
    published_date: "2025-01-15",
    is_featured: true,
    read_time: 8
  },
  {
    id: "2",
    title: "Cybersecurity Best Practices for Small Businesses",
    excerpt: "Essential security measures every small business should implement to protect their data.",
    featured_image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
    author: "Sarah Mitchell",
    category: "Technology",
    published_date: "2025-01-14",
    read_time: 10
  },
  {
    id: "3",
    title: "Minimalist Living: Finding Joy in Less",
    excerpt: "How embracing minimalism can lead to a more fulfilling and intentional life.",
    featured_image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
    author: "Emma Wilson",
    category: "Lifestyle",
    published_date: "2025-01-15",
    is_featured: true,
    read_time: 9
  },
  {
    id: "4",
    title: "Morning Routines of Successful People",
    excerpt: "Start your day right with these proven morning routine strategies.",
    featured_image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=800",
    author: "Oliver Brown",
    category: "Lifestyle",
    published_date: "2025-01-14",
    read_time: 7
  },
  {
    id: "5",
    title: "Entrepreneurship: From Idea to Launch",
    excerpt: "A comprehensive guide to starting your own business successfully.",
    featured_image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    author: "Daniel Roberts",
    category: "Business",
    published_date: "2025-01-15",
    is_featured: true,
    read_time: 12
  },
  {
    id: "6",
    title: "Digital Marketing Strategies for 2025",
    excerpt: "Stay ahead with the latest trends in digital marketing and customer engagement.",
    featured_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    author: "Amanda Foster",
    category: "Business",
    published_date: "2025-01-14",
    read_time: 10
  },
  {
    id: "7",
    title: "Hidden Gems of Southeast Asia",
    excerpt: "Discover breathtaking destinations off the beaten path in Southeast Asia.",
    featured_image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
    author: "Maya Rodriguez",
    category: "Travel",
    published_date: "2025-01-15",
    read_time: 10
  },
  {
    id: "8",
    title: "Budget Travel Tips for 2025",
    excerpt: "How to explore the world without breaking the bank.",
    featured_image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    author: "James Wilson",
    category: "Travel",
    published_date: "2025-01-13",
    read_time: 8
  },
  {
    id: "9",
    title: "Mental Health: Breaking the Stigma",
    excerpt: "Understanding mental health, recognizing signs, and seeking help without shame.",
    featured_image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
    author: "Dr. Sarah Williams",
    category: "Health",
    published_date: "2025-01-15",
    read_time: 11
  },
  {
    id: "10",
    title: "Nutrition Myths Debunked",
    excerpt: "Separating fact from fiction in the world of nutrition and diet.",
    featured_image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
    author: "Dr. Michael Chen",
    category: "Health",
    published_date: "2025-01-12",
    read_time: 9
  },
  {
    id: "11",
    title: "The Future of Online Education",
    excerpt: "How digital learning is reshaping education and creating new opportunities.",
    featured_image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800",
    author: "Jennifer Martinez",
    category: "Education",
    published_date: "2025-01-14",
    read_time: 12
  },
  {
    id: "12",
    title: "Learning Languages in the Digital Age",
    excerpt: "Modern tools and techniques to master a new language faster.",
    featured_image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800",
    author: "Sophie Anderson",
    category: "Education",
    published_date: "2025-01-11",
    read_time: 10
  }
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("-published_date");
  const [posts, setPosts] = useState(STATIC_BLOG_POSTS);

  const urlParams = new URLSearchParams(window.location.search);
  const urlCategory = urlParams.get('category');

  useEffect(() => {
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    }
  }, [urlCategory]);

  // API Data Fetching (kept as you requested)
  useEffect(() => {
    setPosts(STATIC_BLOG_POSTS);
  }, []);

  const categories = ["Technology", "Lifestyle", "Business", "Travel", "Health", "Education", "Food", "Entertainment"];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = searchQuery === "" || 
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  return (
    <DashboardLayout>
      <div className="min-h-screen">
      {/* Page Header with Background Image */}
      <section className="relative text-white py-20 overflow-hidden min-h-[300px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Dark overlay - NO BLUE COLOR */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Our Blog
          </h1>
          <p className="text-xl text-white/90 drop-shadow-md">
            Discover insights, stories, and knowledge across various topics
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <TextInput
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>

            {/* Sort */}
            <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="-published_date">Newest First</option>
              <option value="published_date">Oldest First</option>
              <option value="title">Title A-Z</option>
              <option value="-title">Title Z-A</option>
            </Select>
          </div>

          {/* Active Filters Display */}
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            <span className="text-sm text-slate-600 font-medium">Active filters:</span>
            {selectedCategory !== "all" && (
              <Badge className="bg-blue-100 text-blue-700 border-blue-300">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="ml-2 hover:text-blue-900"
                >
                  ×
                </button>
              </Badge>
            )}
            {searchQuery && (
              <Badge className="bg-blue-100 text-blue-700 border-blue-300">
                Search: "{searchQuery}"
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-2 hover:text-blue-900"
                >
                  ×
                </button>
              </Badge>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-slate-600">
            Showing <span className="font-semibold text-slate-900">{filteredPosts.length}</span> article{filteredPosts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <TrendingUp className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No articles found</h3>
            <p className="text-slate-600 mb-6">Try adjusting your search or filters</p>
            <Button onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}>
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-none bg-white">
                <Link href={`/blog/${post.id}`}>
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                    {post.featured_image ? (
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <TrendingUp className="w-16 h-16 text-slate-300" />
                      </div>
                    )}
                    {post.is_featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-amber-500 text-white border-none font-semibold">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {/* {post.published_date ? format(new Date(post.published_date), "MMM d, yyyy") : "Recent"} */}
                      </span>
                      {post.read_time && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.read_time} min
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 line-clamp-3 mb-4">
                      {post.excerpt || post.content?.substring(0, 150)}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500 flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      {post.category && (
                        <Badge className="bg-blue-100 text-blue-700 border-blue-300">
                          {post.category}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
    </DashboardLayout>
  );
}