import { useState } from "react";
import { Menu, X } from 'lucide-react';

function Hero({ galleryRef }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='min-h-screen lg:mx-40 lg:my-10 sm:mx-20 sm:my-14'>
      <div className="min-h-screen flex flex-col">
        <div className="flex flex-col-reverse md:flex-row min-h-screen">
          
          {/* Text Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center md:text-left px-6 py-8">
            <div className="lg:max-w-xl flex flex-col gap-4">
              <h1 className="text-5xl md:text-7xl font-kopub tracking-widest">
                Hi, I’m Rohan-
              </h1>
              <h2 className="text-2xl md:text-4xl font-kopub font-semibold tracking-widest text-[#454545]">
                I design, develop and capture!
              </h2>
              <p className="text-lg md:text-2xl font-koho tracking-wider mt-4 text-[#454545]">
                Blending aesthetics with logic, I craft digital experiences and frame moments through code, pixels, and lens.
              </p>

              {/* Mobile Image */}
              <div className="block md:hidden my-4 active:scale-95 transition-transform duration-100 ease-in-out">
                <img src="pics/ro.png" className="w-2/3 mx-auto" />
              </div>

              <button
                onClick={scrollToGallery}
                className="text-lg md:text-2xl font-koho tracking-wide mt-4 px-8 py-3 rounded-2xl bg-[#FF5C5C] text-white active:scale-95 transition-transform duration-100 ease-in-out"
              >
                Explore my world of ideas and impact
              </button>
            </div>
          </div>

          {/* Desktop Image */}
          <div className="hidden md:flex flex-1 items-center justify-center active:scale-95 transition-transform duration-100 ease-in-out">
            <img src="pics/ro.png" className="scale-90" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
