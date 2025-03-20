import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";

interface FashionItem {
  id: number;
  image: string;
  title: string;
}

const fashionItems: FashionItem[] = [
  {
    id: 1,
    image: "photos-fashion/IMG_0121.jpg",
    title: "SUMMER COLLECTION",
  },
  {
    id: 2,
    image: "photos-fashion/IMG_0145.jpg",
    title: "WINTER ESSENTIALS",
  },
  {
    id: 3,
    image: "photos-fashion/IMG_0211.jpg", // Reemplazo con una imagen ficticia
    title: "URBAN STYLE",
  },
  {
    id: 4,
    image: "photos-fashion/IMG_9997-8.jpg", // Reemplazo con una imagen ficticia
    title: "NIGHT GLAMOUR",
  },
  {
    id: 5,
    image: "photos-fashion/IMG_9617.jpg", // Reemplazo con una imagen ficticia
    title: "CASUAL WEAR",
  },
  {
    id: 6,
    image: "photos-fashion/IMG_9718.jpg", // Reemplazo con una imagen ficticia
    title: "CASUAL WEAR",
  },
  {
    id: 7,
    image: "photos-fashion/IMG_0265.jpg", // Reemplazo con una imagen ficticia
    title: "CASUAL WEAR",
  },
  {
    id: 8,
    image: "photos-fashion/J2_LOGO.jpg", // Reemplazo con una imagen ficticia
    title: "CASUAL WEAR",
  },
];

export function FashionGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start bg-black overflow-hidden pt-28 pb-40">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-white tracking-wider">
          FASHION
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto px-4">
          Discover our unique fashion perspective, blending contemporary styles
          with artistic expression. Each piece tells a story of innovation and
          creativity.
        </p>
      </motion.div>

      <motion.div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {fashionItems.map((item, i) => (
          <FashionCard key={item.id} item={item} index={i} />
        ))}
      </motion.div>
    </div>
  );
}

interface FashionCardProps {
  item: FashionItem;
  index: number;
}

function FashionCard({ item, index }: FashionCardProps) {
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateY: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: index * 0.1,
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="overflow-hidden relative rounded-xl"
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="aspect-[3/4] overflow-hidden rounded-xl bg-gray-900">
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent"
          initial={{ opacity: 0.8, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white tracking-wide">
            {item.title}
          </h2>
          <motion.div
            className="h-0.5 bg-white w-0 mt-2"
            initial={{ width: 0 }}
            whileHover={{ width: "50%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
