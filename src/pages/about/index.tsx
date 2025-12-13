import DashboardLayout from "@/components/layouts/dashboard/DashboardLayout";
import { Card } from "flowbite-react";
import { Award, Heart, Target, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide high-quality, insightful content that educates, inspires, and empowers our readers to make informed decisions.",
      color: "bg-blue-600"
    },
    {
      icon: Users,
      title: "Our Community",
      description: "Building a diverse community of readers and writers who share knowledge and experiences across various topics.",
      color: "bg-green-600"
    },
    {
      icon: Heart,
      title: "Our Passion",
      description: "We're passionate about creating content that matters, stories that resonate, and information that makes a difference.",
      color: "bg-red-600"
    },
    {
      icon: Award,
      title: "Our Quality",
      description: "Every article is carefully researched, fact-checked, and crafted to meet the highest standards of journalism.",
      color: "bg-amber-600"
    }
  ];
  return (
    <DashboardLayout>
      <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative text-white py-20 overflow-hidden min-h-[300px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Dark overlay - NO BLUE COLOR */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            About BlogHub
          </h1>
          <p className="text-xl text-white/90 max-w-3xl drop-shadow-md">
            Your trusted source for quality content, expert insights, and engaging stories
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Founded in 2024, BlogHub began with a simple mission: to create a platform where quality content meets engaged readers. We believe in the power of words to inform, inspire, and create meaningful connections.
              </p>
              <p>
                What started as a small blog has grown into a comprehensive platform covering diverse topics from technology and business to lifestyle and culture. Our team of passionate writers and editors work tirelessly to bring you content that matters.
              </p>
              <p>
                Today, we're proud to serve thousands of readers monthly, providing them with well-researched articles, expert opinions, and fresh perspectives on the topics they care about most.
              </p>
              <p>
                We're committed to maintaining the highest standards of journalism, ensuring every piece of content we publish is accurate, well-written, and valuable to our community.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 flex items-center justify-center shadow-2xl">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">10K+</div>
                <div className="text-xl font-semibold mb-2">Monthly Readers</div>
                <div className="text-blue-200">And growing every day</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-slate-600">
              Our core values guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-14 h-14 ${value.color} rounded-lg flex items-center justify-center mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Team
          </h2>
          <p className="text-xl text-slate-600">
            Meet the people behind BlogHub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Sarah Johnson", role: "Editor-in-Chief", bio: "15+ years of experience in digital media and content strategy." },
            { name: "Michael Chen", role: "Lead Writer", bio: "Award-winning journalist specializing in technology and innovation." },
            { name: "Emily Rodriguez", role: "Community Manager", bio: "Passionate about building engaged communities and fostering discussions." }
          ].map((member, index) => (
            <Card key={index} className="p-6 bg-white border-none shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-slate-600">
                {member.bio}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Articles Published</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-200">Monthly Readers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">8</div>
              <div className="text-blue-200">Content Categories</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Reader Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </DashboardLayout>
  );
}


