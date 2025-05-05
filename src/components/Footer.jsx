import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-darker py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-primary">Tarek FERSOUS</h2>
            <p className="text-gray-400">Computer Science Student & Developer</p>
          </div>

          <div className="badge-align">
            <div className="badge-base LI-profile-badge" 
                 data-locale="ar_AE" 
                 data-size="medium" 
                 data-theme="dark" 
                 data-type="HORIZONTAL" 
                 data-vanity="tarek-fersous" 
                 data-version="v1">
              <a className="badge-base__link LI-simple-link" 
                 href="https://dz.linkedin.com/in/tarek-fersous?trk=profile-badge">
              </a>
            </div>
          </div>

          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/tarek-fersous" 
               className="social-icon" 
               target="_blank" 
               rel="noopener noreferrer">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="https://github.com/Tarek-FERSOUS" 
               className="social-icon" 
               target="_blank" 
               rel="noopener noreferrer">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="#" 
               className="social-icon">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://www.instagram.com/tareex__" 
               className="social-icon" 
               target="_blank" 
               rel="noopener noreferrer">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tarek FERSOUS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;