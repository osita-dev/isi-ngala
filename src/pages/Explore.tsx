import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { posts, trendingTags, hairCategories } from "@/data/mockData";

const Explore = () => {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="font-display text-2xl font-bold text-foreground mb-4">Explore</h1>

        {/* Search */}
        <div className="relative mb-6">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search styles, hair types, techniques..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        {/* Trending Tags */}
        <div className="mb-8">
          <h2 className="font-display text-lg font-semibold text-foreground mb-3">Trending</h2>
          <div className="flex flex-wrap gap-2">
            {trendingTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="font-display text-lg font-semibold text-foreground mb-3">Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {hairCategories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-4 cursor-pointer hover:border-primary/40 transition-colors"
              >
                <p className="font-semibold text-sm text-foreground">{cat.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{cat.count.toLocaleString()} posts</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Grid */}
        <h2 className="font-display text-lg font-semibold text-foreground mb-3">Discover</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.08 }}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer relative group"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                <p className="text-cream opacity-0 group-hover:opacity-100 text-sm font-semibold transition-opacity">
                  ♥ {post.likes}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Explore;
