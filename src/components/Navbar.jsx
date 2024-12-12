import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';

    const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      return (
        <nav className={scrolled ? 'scrolled' : ''}>
          <div className="nav-inner">
            <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
              <span className="logo-text">ありんこのAIコンサル</span>
            </Link>
            <button 
              className={`nav-button ${isOpen ? 'open' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="メニュー"
            >
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <div className={`nav-links ${isOpen ? 'show' : ''}`}>
              <Link to="/" onClick={() => setIsOpen(false)}>トップページ</Link>
              <Link to="/mypage" onClick={() => setIsOpen(false)}>マイページ</Link>
            </div>
          </div>
        </nav>
      );
    };

    export default Navbar;
