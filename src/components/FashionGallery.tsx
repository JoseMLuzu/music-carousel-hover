
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface FashionItem {
  id: number;
  image: string;
  title: string;
}

const fashionItems: FashionItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1000",
    title: "SUMMER COLLECTION",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
    title: "WINTER ESSENTIALS",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1000",
    title: "URBAN STYLE",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1588117260148-b47818741c74?q=80&w=1000",
    title: "NIGHT GLAMOUR",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000",
    title: "CASUAL WEAR",
  },
];

// Define gradient colors for each fashion item
const gradients: [number, number][] = [
  [340, 10],   // Reddish
  [20, 40],    // Orange
  [60, 90],    // Yellow
  [205, 245],  // Blue
  [290, 320],  // Purple
];

export function FashionGallery() {
  const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start bg-black overflow-auto pt-20 pb-40">
      <div className="w-full text-center mb-10">
        <h1 className="text-5xl font-bold text-white tracking-wider">
          FASHION
        </h1>
      </div>

      <div className="max-w-lg w-full mx-auto px-4">
        {fashionItems.map((item, i) => (
          <FashionCard 
            key={item.id}
            item={item}
            index={i}
            hueA={gradients[i][0]}
            hueB={gradients[i][1]}
          />
        ))}
      </div>
    </div>
  );
}

interface FashionCardProps {
  item: FashionItem;
  index: number;
  hueA: number;
  hueB: number;
}

function FashionCard({ item, index, hueA, hueB }: FashionCardProps) {
  const hue = (h: number) => `hsl(${h}, 100%, 50%)`;
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="overflow-hidden flex justify-center items-center relative pt-5 mb-[-100px]"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
    >
      <div 
        className="absolute top-0 left-0 right-0 bottom-0" 
        style={{
          background,
          clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
        }}
      />
      
      <motion.div
        className="w-[300px] h-[430px] rounded-[20px] bg-[#f5f5f5] shadow-lg flex flex-col items-center justify-end overflow-hidden"
        variants={cardVariants}
        style={{ transformOrigin: "10% 60%" }}
      >
        <div className="w-full h-full relative overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h2 className="text-2xl font-bold text-white">{item.title}</h2>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
