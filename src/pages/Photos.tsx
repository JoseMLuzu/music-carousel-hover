
import React from "react";
import { Camera } from "lucide-react";

const Photos = () => {
  return (
    <div className="min-h-screen pt-28 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Camera className="w-8 h-8 mr-3" />
          <h1 className="text-4xl font-bold">Photography</h1>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-300 leading-relaxed">
            Capturing moments through a unique lens, our photography services combine artistic vision with technical excellence. 
            Each image tells a story, preserving emotions and creating timeless visual narratives that speak beyond words.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Placeholder for photo gallery items */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div 
              key={index} 
              className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <p className="text-lg text-gray-400">Photo Content {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
