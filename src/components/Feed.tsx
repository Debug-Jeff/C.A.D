import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import ReactPlayer from "react-player";

// Mock data - in a real app, this would come from an API
const feedItems = [
  { type: "image", url: "/api/placeholder/400/400", id: 1 },
  { type: "image", url: "/api/placeholder/400/400", id: 2 },
  { type: "image", url: "/api/placeholder/400/400", id: 3 },
  { type: "video", url: "YOUR_VIDEO_URL", id: 4 },
  { type: "image", url: "/api/placeholder/400/400", id: 5 },
];

export const Feed = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4">
      {feedItems.map((item) => (
        <FeedItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const FeedItem = ({ item }) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isDoubleTapped, setIsDoubleTapped] = React.useState(false);

  // Handle double tap/click for like
  const handleDoubleClick = () => {
    if (!isLiked) {
      setIsLiked(true);
      setIsDoubleTapped(true);
      setTimeout(() => setIsDoubleTapped(false), 1000);
    }
  };

  return (
    <motion.div
      className="relative aspect-square bg-gray-100 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}>
      {item.type === "image" ? (
        <img
          src={item.url}
          alt="feed content"
          className="w-full h-full object-cover"
          onDoubleClick={handleDoubleClick}
        />
      ) : (
        <ReactPlayer
          url={item.url}
          width="100%"
          height="100%"
          playing={false}
          controls
          onDoubleClick={handleDoubleClick}
        />
      )}

      {/* Like button */}
      <motion.button
        className={`absolute bottom-2 right-2 p-2 rounded-full 
                   ${isLiked ? "bg-turquoise-light" : "bg-white"} 
                   shadow-lg`}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsLiked(!isLiked)}>
        <Heart
          className={`w-6 h-6 ${
            isLiked ? "text-white fill-current" : "text-gray-600"
          }`}
        />
      </motion.button>

      {/* Double-tap heart animation */}
      {isDoubleTapped && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: [0, 1, 0] }}
          transition={{ duration: 0.8 }}>
          <Heart className="w-24 h-24 text-white fill-current" />
        </motion.div>
      )}
    </motion.div>
  );
};
