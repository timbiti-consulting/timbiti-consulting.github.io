import DesktopLink from '@/components/navigation/DesktopLink';
import MobileLink from '@/components/navigation/MobileLink';
import { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Arrow down icon
import { IoClose, IoMenu } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const { pathname } = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleAboutDropdown = () => setAboutDropdownOpen(!aboutDropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const aboutButton = document.getElementById('aboutButton');
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        aboutButton &&
        !aboutButton.contains(event.target as Node) // <- Updated check
      ) {
        setAboutDropdownOpen(false);
      }
    };

    document.addEventListener('mouseup', handleClickOutside);
    return () => document.removeEventListener('mouseup', handleClickOutside);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setAboutDropdownOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="md:sticky md:top-0 z-50 bg-secondary text-secondary-foreground shadow-lg">
      <nav className="mx-auto w-[92%] py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="w-56 text-2xl font-bold">
            <img src="/logo.png" alt="Timbiti Research Consulting Group" />
          </Link>

          {/* Hamburger Icon (Mobile Only) */}
          <div className="md:hidden">
            {menuOpen ? (
              <IoClose
                onClick={toggleMenu}
                className="cursor-pointer text-3xl"
              />
            ) : (
              <IoMenu
                onClick={toggleMenu}
                className="cursor-pointer text-3xl"
              />
            )}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex md:space-x-10 md:text-lg md:font-medium">
            <DesktopLink to="/" name="Home" />

            {/* About Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                id="aboutButton"
                onClick={toggleAboutDropdown}
                className="flex items-center gap-1 text-secondary-foreground hover:text-secondary-foreground/80 focus:outline-none"
              >
                About <FaChevronDown className="text-sm" />
              </button>

              <ul
                className={`absolute left-0 mt-2 w-40 rounded-md bg-card text-card-foreground shadow-lg transition-all duration-500 ${
                  aboutDropdownOpen ? 'block' : 'hidden'
                }`}
              >
                <li>
                  <Link
                    to="/about"
                    className="block rounded-md px-4 py-2 hover:bg-secondary hover:text-secondary-foreground"
                  >
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="block rounded-md px-4 py-2 hover:bg-secondary hover:text-secondary-foreground"
                  >
                    Meet Our Team
                  </Link>
                </li>
              </ul>
            </li>
            <DesktopLink to="/services" name="Services" />
            <DesktopLink to="/target-market" name="Target Market & Industry" />
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMobile && menuOpen ? 'mt-4 block' : 'hidden'}`}>
          <ul className="flex flex-col items-start space-y-0 border-gray-300 text-lg font-medium">
            <MobileLink to="/" name="Home" />

            {/* Mobile About Dropdown */}
            <li ref={dropdownRef} className="w-full border-gray-300">
              <button
                onClick={toggleAboutDropdown}
                className="flex w-full items-center px-2 py-3 text-left text-secondary-foreground hover:text-secondary-foreground/80 focus:outline-none"
              >
                About <FaChevronDown className="text-sm" />
              </button>

              <ul
                className={`${aboutDropdownOpen ? 'block' : 'hidden'} space-y-0 border-gray-200 ps-8`}
              >
                <MobileLink to="/about" name="Who We Are" />
                <MobileLink to="/team" name="Meet Our Team" />
              </ul>
            </li>

            <MobileLink to="/services" name="Services" />
            <MobileLink to="/target-market" name="Target Market & Industry" />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
