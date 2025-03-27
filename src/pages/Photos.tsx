import React from "react";
import { Camera } from "lucide-react";

const photos = [
  {
    id: 1,
    src: "/photos-p/IMG_0261 2.JPG",
    alt: "Photo 1",
  },
  {
    id: 2,
    src: "/photos-p/IMG_0353 2.JPG",
    alt: "Photo 2",
  },
  {
    id: 3,
    src: "/photos-p/IMG_0357 2.JPG",
    alt: "Photo 3",
  },
  {
    id: 4,
    src: "/photos-p/IMG_0512 2.JPG",
    alt: "Photo 4",
  },
  {
    id: 5,
    src: "/photos-p/IMG_0796 2.JPG",
    alt: "Photo 5",
  },
  {
    id: 6,
    src: "/photos-p/IMG_1283 2.JPG",
    alt: "Photo 6",
  },
  {
    id: 7,
    src: "/photos-p/IMG_1740 2.JPG",
    alt: "Photo 7",
  },
  {
    id: 8,
    src: "/photos-p/IMG_1820 2.JPG",
    alt: "Photo 8",
  },
  {
    id: 9,
    src: "/photos-p/IMG_6272 2.JPG",
    alt: "Photo 9",
  },
  {
    id: 10,
    src: "/photos-p/IMG_6275 2.JPG",
    alt: "Photo 10",
  },
];

const Photos = () => {
  return (
    <div className="min-h-screen pt-28 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Camera className="w-8 h-8 mr-3" />
          <h1 className="text-4xl font-bold">Photography</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="aspect-square bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform focus:outline-none flex items-center justify-center"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
