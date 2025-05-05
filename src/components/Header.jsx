import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShrunken, setIsShrunken] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunken(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 shadow-lg ${isShrunken ? 'header-shrink' : ''}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img 
            src="/images/pfp.jpg" 
            alt="Profile" 
            className="profile-pic w-16 h-16 rounded-full border-2 border-primary"
          />
          <h1 className="text-2xl font-bold text-primary">Tarek FERSOUS</h1>
        </div>
        <nav className={`md:flex space-x-8 ${isMenuOpen ? 'flex flex-col absolute top-16 right-6 bg-darker p-4 rounded-lg shadow-lg' : 'hidden'}`}>
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;