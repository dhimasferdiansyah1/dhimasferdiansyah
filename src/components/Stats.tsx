"use client";

import { useEffect, useState } from "react";
import { ThumbsUp, Heart, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Animasi pulse untuk dot
const pulseAnimation = {
  scale: [1, 1.2, 1],
  opacity: [1, 0.8, 1],
  transition: {
    duration: 1,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function StatsButton() {
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fungsi untuk mengambil data statistik
  const fetchStats = async () => {
    try {
      // Get views
      const viewResponse = await fetch("/api/views");
      const viewData = await viewResponse.json();
      setViews(viewData.totalViews);

      // Get likes
      const likeResponse = await fetch("/api/likes");
      const likeData = await likeResponse.json();
      setLikes(likeData.totalLikes);
      setHasLiked(likeData.hasLiked);
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    }
  };

  useEffect(() => {
    fetchStats();
    const intervalId = setInterval(fetchStats, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const handleLike = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/likes", { method: "POST" });
      const data = await response.json();

      if (response.ok) {
        setLikes(data.totalLikes);
        setHasLiked(data.hasLiked);
      }
    } catch (error) {
      console.error("Failed to toggle like:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      {/* Views Counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-2"
      >
        <div className="relative flex items-center gap-2 bg-zinc-700 text-white p-1.5 rounded-full">
          <Eye size={8} className="w-4 h-4 sm:w-6 sm:h-6" />
          {/* Dot Indicator */}
          <motion.div
            animate={pulseAnimation}
            className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"
          />
        </div>
        <motion.p
          key={views}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-zinc-400 text-sm"
        >
          {views} views
        </motion.p>
      </motion.div>

      {/* Like Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col items-center gap-2"
      >
        <div className="relative">
          <motion.button
            onClick={handleLike}
            disabled={isLoading}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              backgroundColor: hasLiked ? "#3B82F6" : "#3f3f46",
            }}
            transition={{
              duration: 0.2,
              type: "spring",
              stiffness: 300,
            }}
            className={`relative flex items-center justify-center w-10 h-10 rounded-full text-white ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <AnimatePresence mode="wait">
              {hasLiked ? (
                <motion.div
                  key="heart"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <Heart
                    className="w-4 h-4 sm:w-6 sm:h-6 fill-current"
                    strokeWidth={2}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="thumbsup"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <ThumbsUp className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Like Effect Animation */}
            <AnimatePresence>
              {hasLiked && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 rounded-full bg-blue-400"
                />
              )}
            </AnimatePresence>
          </motion.button>

          {/* Dot Indicator */}
          <motion.div
            animate={pulseAnimation}
            className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"
          />
        </div>

        <motion.p
          key={likes}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="text-zinc-400 text-sm"
        >
          {likes} likes
        </motion.p>
      </motion.div>
    </div>
  );
}
