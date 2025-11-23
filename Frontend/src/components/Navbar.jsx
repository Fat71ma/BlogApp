import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const linkCls = ({ isActive }) =>
    `hover:text-accent transition-colors ${
      isActive ? "text-accent border-b-2 border-accent pb-1" : "text-primary"
    }`;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching...");
  };

  return (
    <header className="border-b border-accent/10 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* 1. LOGO */}
        <NavLink
          to="/"
          className="text-3xl font-extrabold text-highlight tracking-wide"
        >
          BLUEVERSE <span className="text-accent">.</span>
        </NavLink>

        {/* 2. NAVIGATION (Hidden if search is massive, but fits fine here) */}
        <nav className={`space-x-8 text-sm font-medium hidden md:block transition-opacity ${isSearchOpen ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
          <NavLink to="/" className={linkCls}>
            Home
          </NavLink>
          <NavLink to="/stories" className={linkCls}>
            Stories
          </NavLink>
          <NavLink to="/contact" className={linkCls}>
            Contact
          </NavLink>
        </nav>

        {/* 3. ACTIONS */}
        <div className="flex items-center gap-4">
          
          {/* Search Component */}
          <div className="relative">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center animate-fadeIn">
                <input
                  type="text"
                  placeholder="Search stories..."
                  className="pl-3 pr-8 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent w-48 transition-all"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-2 text-gray-400 hover:text-red-500"
                >
                  {/* Close (X) Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-primary hover:text-accent transition-colors p-1"
                aria-label="Open Search"
              >
                {/* Magnifying Glass Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            )}
          </div>

          {/* Divider line (optional) */}
          <div className="h-6 w-px bg-gray-200 mx-1"></div>

          {/* Login Button */}
          <NavLink
            to="/login"
            className="px-5 py-2 text-sm font-medium bg-gray-900 text-white rounded-full hover:bg-accent transition-all shadow-md hover:shadow-lg whitespace-nowrap"
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;