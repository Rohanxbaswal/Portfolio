import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar({ sectionRefs }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (section) => {
    setMenuOpen(false);
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = ["Home", "About", "Gallery", "Contact"];

  return (
    <>
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 bg-white px-6 lg:px-40 py-4 shadow-sm">
        <nav className="flex items-center justify-between w-full">
          {/* Logo */}
          <div
            className="active:scale-95 transition-transform duration-100 ease-in-out text-[#454545] tracking-widest cursor-pointer font-kopub text-3xl font-extrabold"
            onClick={() => handleScroll("Home")}
          >
            rohan
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center">
            {navItems.map((item, i) => (
              <li
                key={i}
                onClick={() => handleScroll(item)}
                className="active:scale-95 transition-transform duration-100 ease-in-out px-6 py-2 rounded-2xl tracking-widest cursor-pointer font-kopub text-xl hover:bg-gray-100"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden z-30" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </div>
        </nav>
      </div>

      {/* Mobile Slide Menu */}
     <div
  className={`fixed top-0 right-0 h-full w-2/3 backdrop-blur-md bg-white/30 z-40 shadow-lg transform transition-transform duration-300 ${
    menuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <ul className="flex flex-col mt-24 items-start gap-10 p-8 font-kopub text-2xl tracking-widest text-[#454545]">
    {navItems.map((item, i) => (
      <li
        key={i}
        className="cursor-pointer"
        onClick={() => handleScroll(item)}
      >
        {item}
      </li>
    ))}
  </ul>
</div>

    </>
  );
}

export default Navbar;
