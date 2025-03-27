import React from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="min-h-screen pt-28 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Briefcase className="w-8 h-8 mr-3" />
          <h1 className="text-4xl font-bold">Our Services</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Service cards */}
          {[
            "Mixing",
            "Mastering",
            "Modeling",
            "Composing",
            "Sound Design",
            "Producing",
          ].map((title, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-white/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-center">{title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
