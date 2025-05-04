import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure the path is correct
    link.download = 'Aayush-Barik-Resume.pdf'; // This is the file name the user will get
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "#resume", label: "Resume", onClick: () => handleDownload() }
  ];

  

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${ isScrolled ? 'bg-zinc-900/90 backdrop-blur-md shadow-lg' 
      : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex md:justify-center items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity">
              <img src="/logo.jpeg" className='w-10 h-10 rounded me-80' alt="Logo" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden text-lg md:flex justify-between items-center space-x-1">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="relative px-3 py-2 text-zinc-300 ms-15 font-medium hover:text-white transition-colors group">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li className="ml-4">
              <a href="#contact" className="px-4 py-2 rounded-full ms-15 bg-gradient-to-r from-indigo-600 to-purple-600 text-zinc-100 font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Let's Talk
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-zinc-200 hover:text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-zinc-800 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 border-b border-zinc-700' : 'max-h-0'}`}>
        <ul className="container mx-auto px-4 py-2 space-y-2">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="block py-3 text-zinc-300 hover:text-white border-b border-zinc-700 last:border-0" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="py-4">
            <a href="#contact" className="inline-block w-full text-center py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 font-medium"
              onClick={() => setIsMenuOpen(false)}>
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;