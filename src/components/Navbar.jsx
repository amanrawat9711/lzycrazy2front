import { Link, useLocation } from 'react-router-dom';
import { logo } from '../assets/assets';

export default function Navbar() {
  const location = useLocation();
  const isTransparent = location.pathname === '/' || location.pathname === '/company-info';

  return (
    <nav className={`${isTransparent ? 'bg-transparent absolute top-0 left-0' : 'bg-white'} w-full z-10 shadow-2xl`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-35" />
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          {/* Menu items */}
          <div className="flex space-x-6 items-center text-zinc-800 font-medium">
            {/* "Who we are" menu */}
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer select-none">
                <span>Who we are</span>
                <span className="text-xs">▼</span>
              </div>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded mt-2 w-48 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 text-zinc-800">
                <Link to="/newsroom" className="block px-4 py-2 hover:bg-gray-100">Newsroom</Link>
                <Link to="/company-info" className="block px-4 py-2 hover:bg-gray-100">Company Info</Link>
                <Link to="/careers" className="block px-4 py-2 hover:bg-gray-100">Careers</Link> 
              </div>
            </div>

            {/* "What We Provide" menu */}
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer select-none">
                <span>What We Provide</span>
                <span className="text-xs">▼</span>
              </div>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded mt-2 w-56 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 text-zinc-800">
                <Link to="/advertising" className="block px-4 py-2 hover:bg-gray-100">Advertising</Link>
<Link to="/brand-promotion" className="block px-4 py-2 hover:bg-gray-100">Brand Promotion</Link>
<Link to="/cine" className="block px-4 py-2 hover:bg-gray-100">Cine</Link>
<Link to="/digital-marketing" className="block px-4 py-2 hover:bg-gray-100">Digital Marketing</Link>
<Link to="/e-commerce" className="block px-4 py-2 hover:bg-gray-100">E-Commerce</Link>
<Link to="/entertainment" className="block px-4 py-2 hover:bg-gray-100">Entertainment</Link>
<Link to="/global-advertising" className="block px-4 py-2 hover:bg-gray-100">Global & Customized Advertising</Link>
<Link to="/graphic-animation" className="block px-4 py-2 hover:bg-gray-100">Graphic & Animation</Link>
<Link to="/real-estate" className="block px-4 py-2 hover:bg-gray-100">Real Estate</Link>
<Link to="/sell-product" className="block px-4 py-2 hover:bg-gray-100">Sell your own product</Link>
<Link to="/vehicle" className="block px-4 py-2 hover:bg-gray-100">Vehicle</Link>
<Link to="/web-app-development" className="block px-4 py-2 hover:bg-gray-100">Web & App Development</Link>
              </div>
            </div>
 
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer select-none">
                <span>Safety and Action</span>
                <span className="text-xs">▼</span>
              </div>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded mt-2 w-56 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 text-zinc-800">
                <Link to="/policies" className="block px-4 py-2 hover:bg-gray-100">Policies & Enforcement</Link>
                <Link to="/transparency" className="block px-4 py-2 hover:bg-gray-100">Transparency Center</Link>
                <Link to="/security" className="block px-4 py-2 hover:bg-gray-100">Security Features</Link>
              </div>
            </div>

            {/* Help Center */}
            <Link to="/help" className="hover:text-black cursor-pointer">
              Help Center
            </Link>
          </div>

          {/* Search input and button */}
          <div className="flex items-center border border-zinc-600 rounded-full px-4 py-1 ml-4">
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent text-zinc-800 placeholder:text-zinc-800 w-52"
            />
            <button className="ml-2">
              <svg
                className="w-5 h-5 text-zinc-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
