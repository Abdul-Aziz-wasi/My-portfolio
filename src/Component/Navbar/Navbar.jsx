import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
         <a
  href="/"
  className="mx-4 text-base font-medium text-white hover:text-teal-300 transition"
>
  Home
</a>
      <a
  href="#about"
  className="mx-4 text-base font-medium text-white hover:text-teal-300 transition"
>
  About
</a>
       <a
  href="#skills"
  className="mx-4 text-base font-medium text-white hover:text-teal-300 transition"
>
  Skills
</a>

<a href="#education" className="mx-4 text-base font-medium text-white hover:text-teal-300 transition">
  Education
</a>
          <a
  href="#contact"
  className="mx-4 text-base font-medium text-white hover:text-teal-300 transition"
>
  Contact
</a>
    </>
  );

  return (
    <header className="bg-[#0f172a] shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <h3 className="text-xl font-bold text-teal-400 tracking-wide">Portfolio</h3>
        </div>

        {/* NavLinks - centered on desktop */}
        <nav className="hidden md:flex flex-1 justify-center">
          {navLinks}
        </nav>

        {/* Hamburger - right on small devices */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#134e4a] px-6 py-4 shadow-md flex flex-col items-center space-y-4">
          {navLinks}
        </div>
      )}
    </header>
  );
};

export default Navbar;
