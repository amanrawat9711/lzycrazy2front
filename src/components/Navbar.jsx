import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logo } from '../assets/assets';

export default function Navbar() {
  const location = useLocation();
  const isTransparent = location.pathname === '/' || location.pathname === '/company-info';

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // for mobile submenu dropdowns

  // Track window width for responsive menu toggling
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showHamburger = windowWidth <= 1000;
  const showDesktopMenu = windowWidth > 1000;

  const menus = [
    {
      label: 'Who we are',
      links: [
        { to: '/newsroom', label: 'Newsroom' },
        { to: '/company-info', label: 'Company Info' },
        { to: '/careers', label: 'Careers' },
      ],
    },
    {
      label: 'What We Provide',
      links: [
        { to: '/advertising', label: 'Advertising' },
        { to: '/brand-promotion', label: 'Brand Promotion' },
        { to: '/cine', label: 'Cine' },
        { to: '/digital-marketing', label: 'Digital Marketing' },
        { to: '/e-commerce', label: 'E-Commerce' },
        { to: '/entertainment', label: 'Entertainment' },
        { to: '/global-advertising', label: 'Global & Customized Advertising' },
        { to: '/graphic-animation', label: 'Graphic & Animation' },
        { to: '/real-estate', label: 'Real Estate' },
        { to: '/sell-product', label: 'Sell your own product' },
        { to: '/vehicle', label: 'Vehicle' },
        { to: '/web-app-development', label: 'Web & App Development' },
      ],
    },
    {
      label: 'Safety and Action',
      links: [
        { to: '/policies', label: 'Policies & Enforcement' },
        { to: '/transparency', label: 'Transparency Center' },
        { to: '/security', label: 'Security Features' },
      ],
    },
  ];

  return (
    <nav className={`${isTransparent ? 'bg-transparent absolute top-0 left-0 w-full' : 'bg-white'} z-10 shadow-2xl`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-35" />
        </Link>

        {/* Desktop Menu */}
        {showDesktopMenu && (
          <div className="flex items-center space-x-4">
            <div className="flex space-x-6 items-center text-zinc-800 font-medium">
              {menus.map((menu, i) => (
                <div key={i} className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer select-none">
                    <span>{menu.label}</span>
                    <span className="text-xs">▼</span>
                  </div>
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded mt-2 w-56 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 text-zinc-800 z-20">
                    {menu.links.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.to}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Help Center */}
              <Link to="/help" className="hover:text-black cursor-pointer">
                Help Center
              </Link>
            </div>

            {/* Search bar */}
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
        )}

        {/* Mobile Hamburger */}
        {showHamburger && (
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6 text-zinc-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-zinc-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {showHamburger && mobileMenuOpen && (
        <div className="bg-white border-t border-zinc-300 shadow-lg md:hidden">
          <nav className="px-6 py-4 space-y-4 text-zinc-800 font-normal text-base md:text-sm lg:text-base">
            {menus.map((menu, i) => (
              <div key={i}>
                <button
                  className="flex justify-between w-full items-center"
                  onClick={() =>
                    setOpenDropdown(openDropdown === i ? null : i)
                  }
                  aria-expanded={openDropdown === i}
                  aria-controls={`mobile-menu-${i}`}
                >
                  <span>{menu.label}</span>
                  <span className="text-sm">{openDropdown === i ? '▲' : '▼'}</span>
                </button>

                {openDropdown === i && (
                  <div
                    id={`mobile-menu-${i}`}
                    className="mt-2 pl-4 space-y-2 border-l border-zinc-300 text-base font-normal"
                  >
                    {menu.links.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-2 py-1 hover:bg-gray-100 rounded"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/help"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1 hover:bg-gray-100 rounded"
            >
              Help Center
            </Link>

            {/* Mobile Search */}
            <div className="mt-4 border border-zinc-600 rounded-full px-4 py-1 flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent text-zinc-800 placeholder:text-zinc-800 w-full text-base"
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
          </nav>
        </div>
      )}
    </nav>
  );
}
