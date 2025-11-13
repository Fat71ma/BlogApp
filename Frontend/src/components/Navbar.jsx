import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkCls = ({ isActive }) =>
    `hover:text-accent transition-colors ${
      isActive ? "text-accent border-b-2 border-accent pb-1" : "text-primary"
    }`;

  return (
    <header className="border-b border-accent/10 bg-white sticky top-0 z-50 shadow-sm">
      
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-3xl font-extrabold text-highlight tracking-wide">
          BLUEVERSE <span className="text-accent">.</span>
        </NavLink>

        <nav className="space-x-8 text-sm font-medium">
          <NavLink to="/" className={linkCls}>
            Home
          </NavLink>
          <NavLink to="/stories" className={linkCls}>
            Stories
          </NavLink>
          <NavLink to="/contact" className={linkCls}>
            Contact
          </NavLink>
          {/* <NavLink to="/about" className={linkCls}>
            About
          </NavLink> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;