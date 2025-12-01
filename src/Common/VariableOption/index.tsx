import { BookOpen, FileText, BookmarkCheck, Info, Mail } from "lucide-react";

export const navigation = [
  { name: "Home", path: "/", icon: BookOpen },
  { name: "Blog", path: "/Blog", icon: FileText },
  { name: "Reading List", path: "/my-reading-list", icon: BookmarkCheck },
  { name: "About", path: "/about", icon: Info },
  { name: "Contact", path: "/contact", icon: Mail },
];



// Static blog data (you can manage this easily without API)
export const STATIC_BLOGS = [
    {
      id: "static-1",
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
      id: "static-2",
      title: "Minimalist Living: Finding Joy in Less",
      excerpt: "How embracing minimalism can lead to a more fulfilling and intentional life.",
      content: "Minimalism isn't about having less for the sake of deprivation...",
      featured_image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
      author: "Emma Wilson",
      category: "Lifestyle",
      published_date: "2025-01-15",
      is_featured: true,
      read_time: 9
    },
    {
      id: "static-3",
      title: "Entrepreneurship: From Idea to Launch",
      excerpt: "A comprehensive guide to starting your own business successfully.",
      content: "Starting a business is both exciting and challenging...",
      featured_image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
      author: "Daniel Roberts",
      category: "Business",
      published_date: "2025-01-15",
      is_featured: true,
      read_time: 12
    }
  ];

  export const STATIC_RECENT_BLOGS = [
    {
      id: "static-4",
      title: "The Future of Artificial Intelligence in 2025",
      excerpt: "Explore how AI is transforming industries and what we can expect in the coming years.",
      featured_image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      author: "Alex Thompson",
      category: "Technology",
      published_date: "2025-01-15",
      read_time: 8
    },
    {
      id: "static-5",
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential security measures every small business should implement to protect their data.",
      featured_image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      author: "Sarah Mitchell",
      category: "Technology",
      published_date: "2025-01-14",
      read_time: 10
    },
    {
      id: "static-6",
      title: "Morning Routines of Successful People",
      excerpt: "Start your day right with these proven morning routine strategies.",
      featured_image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=800",
      author: "Oliver Brown",
      category: "Lifestyle",
      published_date: "2025-01-14",
      read_time: 7
    },
    {
      id: "static-7",
      title: "Digital Marketing Strategies for 2025",
      excerpt: "Stay ahead with the latest trends in digital marketing and customer engagement.",
      featured_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      author: "Amanda Foster",
      category: "Business",
      published_date: "2025-01-14",
      read_time: 10
    },
    {
      id: "static-8",
      title: "Hidden Gems of Southeast Asia",
      excerpt: "Discover breathtaking destinations off the beaten path in Southeast Asia.",
      featured_image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
      author: "Maya Rodriguez",
      category: "Travel",
      published_date: "2025-01-15",
      read_time: 10
    },
    {
      id: "static-9",
      title: "Mental Health: Breaking the Stigma",
      excerpt: "Understanding mental health, recognizing signs, and seeking help without shame.",
      featured_image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
      author: "Dr. Sarah Williams",
      category: "Health",
      published_date: "2025-01-15",
      read_time: 11
    }
  ];