import { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSignInAlt,
  FaUserPlus,
  FaGlobe,
} from "react-icons/fa";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { getNavLinks } from "../../data";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navLinks = getNavLinks(t);

  const isActive = (href) => location.pathname === href;
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <header className="container py-6 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/">
          <img src="/assets/images/logo.png" alt="Logo" className="h-12" />
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                <Link
                  to={link.href}
                  className={`inline-flex items-center transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-[#DAEBF7]"
                      : "text-white hover:text-customColor1"
                  }`}
                >
                  {link.label}
                  {link.dropdown && <FiChevronDown className="ml-1 text-xs" />}
                </Link>

                {/* Dropdown submenu */}
                {link.dropdown && (
                  <ul className="absolute left-0 mt-2 w-44 rounded-lg opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 shadow-lg shadow-customColor2/30">
                    {link.dropdown.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          to={sub.href}
                          className="flex items-center justify-between px-4 py-2 text-sm text-white hover:bg-white/5 rounded-lg"
                        >
                          <span>{sub.label}</span>
                          <FiChevronRight className="text-white opacity-70" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Auth Buttons + Language Toggle */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/login"
            className="flex items-center space-x-2 text-white text-sm font-semibold hover:text-customColor1 transition-colors"
          >
            <FaSignInAlt />
            <span>Login</span>
          </Link>
          <Link
            to="/register"
            className="flex items-center space-x-2 bg-gradient-to-r from-customColor1 to-customColor2 text-white text-sm font-semibold px-4 py-2 rounded-md transition-all duration-200 hover:brightness-110 hover:shadow-md"
          >
            <FaUserPlus />
            <span>Register</span>
          </Link>
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 cursor-pointer px-2 py-1 rounded-md hover:bg-white/10 active:scale-95 transition-all duration-200"
          >
            <FaGlobe className="text-white text-sm" />
            <span className="uppercase text-sm text-white font-semibold">
              {i18n.language === "en" ? "FR" : "EN"}
            </span>
            <img
              src={i18n.language === "en" ? "/frFlag.png" : "/enFlag.png"}
              alt="Flag"
              className="w-6 h-6 rounded-full shadow-sm object-cover"
            />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-white focus:outline-none"
          onClick={() => setIsMenuOpen((o) => !o)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#2B2B2B] border-t border-white/10">
          <ul className="flex flex-col space-y-4 px-6 py-6">
            {navLinks.map((link) => (
              <Fragment key={link.href}>
                <li>
                  <Link
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-sm px-4 py-2 rounded-lg transition-colors ${
                      isActive(link.href)
                        ? "text-customColor1 bg-white/10"
                        : "text-white hover:text-customColor1 hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
                {link.dropdown &&
                  link.dropdown.map((sub) => (
                    <li key={sub.href} className="ml-6">
                      <Link
                        to={sub.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm px-4 py-2 rounded-lg text-gray-300 hover:text-customColor1 hover:bg-white/5 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
              </Fragment>
            ))}

            {/* Auth + Language (mobile) */}
            <li className="flex flex-col space-y-4 pt-4">
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 text-white text-sm font-semibold hover:text-customColor1 transition-colors"
              >
                <FaSignInAlt />
                <span>Login</span>
              </Link>
              <Link
                to="/register"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 bg-customColor1 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-customColor2 transition-colors"
              >
                <FaUserPlus />
                <span>Register</span>
              </Link>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-white hover:text-customColor1 transition-colors"
              >
                <FaGlobe />
                <span className="uppercase font-semibold">
                  {i18n.language === "en" ? "FR" : "EN"}
                </span>
                <img
                  src={i18n.language === "en" ? "/frFlag.png" : "/enFlag.png"}
                  alt="Flag"
                  className="w-6 h-6 rounded-full shadow object-cover"
                />
              </button>
            </li>

            {/* Social Icons */}
            <li className="flex space-x-6 text-white text-xl pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-customColor1 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-customColor1 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/company/106938498"
                target="_blank"
                rel="noreferrer"
                className="hover:text-customColor1 transition-colors"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
