import DashboardLayout from "@/components/layouts/dashboard/DashboardLayout";
import { ArrowRight, TrendingUp, Clock, User, Calendar } from "lucide-react";
import { format } from "date-fns";
import { STATIC_BLOGS, STATIC_RECENT_BLOGS } from "@/Common/VariableOption";
import { Badge, Button, Card } from "flowbite-react";
import Link from "next/link";

export default function Home() {

  const categories = ["Technology", "Lifestyle", "Business", "Travel", "Health", "Education"];

  return (
    <DashboardLayout>
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative text-white overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Dark overlay for text readability - NO BLUE COLOR */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-20">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-amber-500 text-white border-none px-4 py-2 text-sm font-semibold shadow-lg w-fit">
              Welcome to BlogHub
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Discover Stories That
              <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Inspire & Inform
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
              Explore thought-provoking articles, expert insights, and engaging content across diverse topics. Join our community of readers and writers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/blog">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all">
                  Explore Articles
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" outline className="bg-white/10 hover:bg-white/20 text-white border-white/50 px-8 py-6 text-lg backdrop-blur-sm hover:border-white transition-all">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="rgb(248 250 252)"/>
          </svg>
        </div>
      </section>

      {/* Featured Posts */}
      {STATIC_BLOGS.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-8 h-8 text-amber-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Stories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STATIC_BLOGS.map((post) => (
              <Card key={post.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-none bg-white">
                <Link href={`/blog/${post.id}`}>
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                    {post.featured_image ? (
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <TrendingUp className="w-16 h-16 text-blue-300" />
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-amber-500 text-white border-none font-semibold">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.published_date ? format(new Date(post.published_date), "MMM d, yyyy") : "Recent"}
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
                        <Badge className="text-blue-600 border-blue-300">
                          {post.category}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            Explore By Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog?category=${category}`}
                className="group"
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-500 cursor-pointer">
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {category}
                  </h3>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Latest Articles</h2>
          <Link href="/blog">
            <Button outline className="gap-2 hover:bg-blue-500 hover:text-white focus:ring-0 border-slate-900 hover:border-blue-500">
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STATIC_RECENT_BLOGS.slice(0, 6).map((post) => (
            <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-none bg-white">
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  {post.featured_image ? (
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <TrendingUp className="w-12 h-12 text-slate-300" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.published_date ? format(new Date(post.published_date), "MMM d, yyyy") : "Recent"}
                    </span>
                    {post.read_time && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.read_time} min
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 line-clamp-2 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    {post.category && (
                      <Badge className="text-blue-600 border-blue-300 text-xs">
                        {post.category}
                      </Badge>
                    )}
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Explore More?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of readers who trust BlogHub for quality content.
          </p>
          <Link href="/blog">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-6 text-lg font-semibold shadow-xl">
              Start Reading
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
    </DashboardLayout>
  );
}