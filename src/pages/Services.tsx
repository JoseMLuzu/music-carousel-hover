
import React from "react";
import { Briefcase } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen pt-28 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Briefcase className="w-8 h-8 mr-3" />
          <h1 className="text-4xl font-bold">Our Services</h1>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-300 leading-relaxed">
            We offer a comprehensive range of creative services tailored to your unique vision. 
            From concept development to final execution, our team brings expertise and innovation 
            to every project, ensuring exceptional results that exceed expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Service cards */}
          {[
            { title: "Creative Direction", description: "Strategic vision and artistic guidance for your projects." },
            { title: "Brand Development", description: "Crafting unique identities that resonate with your audience." },
            { title: "Content Creation", description: "Producing engaging visual content for all platforms." },
            { title: "Fashion Styling", description: "Expert styling solutions for fashion projects and personal branding." }
          ].map((service, index) => (
            <div 
              key={index} 
              className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-white/30 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
