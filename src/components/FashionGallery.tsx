import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState } from "react";
import { ChevronDown, FolderOpen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FashionItem {
  id: number;
  image: string;
  title: string;
  designer: string;
}

interface Designer {
  id: string;
  name: string;
  description: string;
  collection: string;
}

const designers: Designer[] = [
  {
    id: "j2-brand",
    name: "Renda Copeii",
    description:
      "Cutting-edge streetwear with bold silhouettes and unconventional materials.",
    collection: "URBAN EVOLUTION",
  },
  {
    id: "oraculum",
    name: "Oraculum",
    description:
      "Elegant minimalism with architectural details and refined materials.",
    collection: "STRUCTURED POETRY",
  },
];

const fashionItems: FashionItem[] = [
  {
    id: 1,
    image: "photos-fashion/IMG_0121.jpg",
    title: "SUMMER COLLECTION",
    designer: "j2-brand",
  },
  {
    id: 2,
    image: "photos-fashion/IMG_0145.jpg",
    title: "WINTER ESSENTIALS",
    designer: "j2-brand",
  },
  {
    id: 3,
    image: "photos-fashion/IMG_0211.jpg",
    title: "URBAN STYLE",
    designer: "j2-brand",
  },
  {
    id: 4,
    image: "photos-fashion/IMG_9997-8.jpg",
    title: "NIGHT GLAMOUR",
    designer: "j2-brand",
  },
  {
    id: 5,
    image: "photos-fashion/IMG_9617.jpg",
    title: "CASUAL WEAR",
    designer: "j2-brand",
  },
  {
    id: 6,
    image: "photos-fashion/IMG_9718.jpg",
    title: "STATEMENT PIECES",
    designer: "j2-brand",
  },
  {
    id: 7,
    image: "photos-fashion/IMG_0265.jpg",
    title: "AVANTGARDE SERIES",
    designer: "j2-brand",
  },
  {
    id: 8,
    image: "photos-fashion/J2_LOGO.jpg",
    title: "BRAND IDENTITY",
    designer: "j2-brand",
  },
  {
    id: 9,
    image: "photos-fashion/IMG_0851.jpg",
    title: "BRAND IDENTITY",
    designer: "oraculum",
  },
  {
    id: 10,
    image: "photos-fashion/IMG_0817.jpg",
    title: "BRAND IDENTITY",
    designer: "oraculum",
  },
  {
    id: 11,
    image: "photos-fashion/IMG_0785-2.jpg",
    title: "BRAND IDENTITY",
    designer: "oraculum",
  },
  {
    id: 12,
    image: "photos-fashion/IMG_0586.jpg",
    title: "BRAND IDENTITY",
    designer: "oraculum",
  },
  {
    id: 13,
    image: "photos-fashion/IMG_0564.jpg",
    title: "BRAND IDENTITY",
    designer: "oraculum",
  },
];

export function FashionGallery() {
  const [openDesigner, setOpenDesigner] = useState<string | null>(null); // Inicializar como null para que no se abra al cargar

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
      </motion.div>

      <Tabs defaultValue="designers" className="w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <TabsList className="bg-gray-900/50 backdrop-blur-sm p-9 rounded-lg mb-5">
            <TabsTrigger
              value="designers"
              className="text-white text-xl px-8 py-4 rounded-md hover:bg-gray-800 transition"
            >
              Designer Collections
            </TabsTrigger>
            <TabsTrigger
              value="all"
              className="text-white text-xl px-8 py-4 rounded-md hover:bg-gray-800 transition"
            >
              View All
            </TabsTrigger>
          </TabsList>
        </motion.div>

        <TabsContent value="designers" className="space-y-6">
          {designers.map((designer, index) => (
            <motion.div
              key={designer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Collapsible
                open={openDesigner === designer.id}
                onOpenChange={() =>
                  setOpenDesigner(
                    openDesigner === designer.id ? null : designer.id
                  )
                }
                className="rounded-xl overflow-hidden bg-gray-900/30 backdrop-blur-sm"
              >
                <Card className="border-0 bg-transparent">
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full flex justify-between items-center p-6 text-left h-auto"
                    >
                      <div className="flex items-center gap-3">
                        <FolderOpen className="h-6 w-6 text-gray-400" />
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            {designer.name}
                          </h3>
                          <p className="text-gray-400">{designer.collection}</p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-white transition-transform duration-300 ${
                          openDesigner === designer.id
                            ? "transform rotate-180"
                            : ""
                        }`}
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0 px-6 pb-6">
                      <p className="text-gray-300 mb-6 italic">
                        {designer.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {fashionItems
                          .filter((item) => item.designer === designer.id)
                          .map((item, i) => (
                            <FashionCard key={item.id} item={item} index={i} />
                          ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            </motion.div>
          ))}
        </TabsContent>

        <TabsContent value="all">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {fashionItems.map((item, i) => (
              <FashionCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
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
      initial="hidden"
      animate="visible"
    >
      <div className="aspect-[3/4] overflow-hidden rounded-xl bg-gray-900">
        <motion.img
          src={item.image}
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
          <h2 className="text-2xl font-bold text-white tracking-wide"></h2>
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
