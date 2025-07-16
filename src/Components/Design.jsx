// src/components/Design.jsx
import React, { useState } from 'react';

const imageSets = {
  Design: ["pics/t5(current).jpg", "pics/doodle.jpeg","pics/pfp.jpg"],
  Clicks: ["pics/aunty.jpg", "pics/billa.jpg","pics/building.jpg","pics/bw-dog.jpg","pics/chai.jpg","pics/chandni.jpg"],
  Devs: ["pics/bacchi.jpg"]
};

function Design() {
  const [selectedSet, setSelectedSet] = useState("Design");

  return (
    <div className="bg-white min-h-screen flex flex-col px-4 sm:px-10 lg:px-40 py-10">

      {/* Title */}
      <div className=" mt-20 text-center font-serif text-gray-600 tracking-widest font-thin text-lg sm:text-xl lg:text-3xl max-w-4xl mx-auto mb-6">
        Your design partner for apps, websites, brands and products.
      </div>

      {/* Buttons */}
      <div className="mt-5 flex flex-wrap justify-center gap-3 mb-10">
        {Object.keys(imageSets).map((label) => (
          <button
            key={label}
            onClick={() => setSelectedSet(label)}
            className={`px-6 py-3 rounded-xl bg-gray-300 text-sm sm:text-base font-serif transition active:scale-95`}
            style={selectedSet === label ? { backgroundColor: '#FF5C5C', color: 'white' } : {}}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Image Stack */}
      <div className="overflow-x-auto scroll-smooth scrollbar-hide mt-8 p-4">
        <div className="flex gap-6 w-max px-2">
          {imageSets[selectedSet].map((src, idx) => (
            <img
              key={idx}
             className="rounded-xl h-64 sm:h-72 md:h-80 lg:h-[500px] w-auto object-contain transition hover:scale-105"
              src={src}
              alt={`preview-${idx}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Design;
