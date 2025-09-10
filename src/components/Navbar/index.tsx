import { useState, useEffect } from 'react';
import { NAVBAR } from '../../constants';
import { Menu } from 'iconoir-react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scrolling after route change or hash update
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && location.pathname === '/') {
      console.log(`Attempting to scroll to: ${hash}`); // Debugging
      let attempts = 0;
      const maxAttempts = 20; // 2 seconds total
      const scrollToElement = () => {
        const element = document.getElementById(hash);
        if (element) {
          console.log(`Found element with id: ${hash}`); // Debugging
          scroller.scrollTo(hash, {
            smooth: true,
            offset: -70,
            duration: 500,
          });
          // Remove hash from URL after scroll
          navigate('/', { replace: true });
          console.log('Hash removed from URL'); // Debugging
        } else if (attempts < maxAttempts) {
          console.log(`Element ${hash} not found, retrying (${attempts + 1}/${maxAttempts})`); // Debugging
          attempts++;
          setTimeout(scrollToElement, 100); // Retry every 100ms
        } else {
          console.warn(`Failed to find element with id: ${hash} after ${maxAttempts} attempts`);
        }
      };
      scrollToElement();
    }
  }, [location, navigate]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 lg:w-[70%] lg:left-[15%] lg:mt-4 lg:py-6">
      <div className="bg-[rgba(255,255,255,0.5)] backdrop-blur-[10px] rounded-full">
        <div className="flex items-center justify-between h-16 px-5">
          <div>
            {location.pathname === '/' ? (
              <ScrollLink
                to="hero"
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                <img src={NAVBAR.logo.src} alt={NAVBAR.logo.alt} className="h-8" />
              </ScrollLink>
            ) : (
              <Link to="/#hero" className="cursor-pointer">
                <img src={NAVBAR.logo.src} alt={NAVBAR.logo.alt} className="h-8" />
              </Link>
            )}
          </div>
          <div className="md:hidden pt-2 pr-3">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu">
              <Menu />
            </button>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-10">
              {NAVBAR.links.map((link) =>
                location.pathname === '/' ? (
                  <ScrollLink
                    key={link.href}
                    to={link.href}
                    smooth={true}
                    offset={-140}
                    duration={500}
                    className="text-tertiary text-xl cursor-pointer hover:text-primary transition-colors"
                  >
                    {link.label}
                  </ScrollLink>
                ) : (
                  <Link
                    key={link.href}
                    to={`/#${link.href}`}
                    className="text-tertiary text-xl cursor-pointer hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              to={NAVBAR.cta.href}
              className="bg-light text-primary font-[500] py-2 px-6 rounded-full text-center xl:text-2xl lg:text-md cursor-pointer hover:bg-primary hover:text-white transition-colors"
            >
              {NAVBAR.cta.label}
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 bg-white px-6 rounded-3xl w-[220px] fixed right-6 top-[4.5rem] flex flex-col gap-4 py-6 border-6 border-gray-50 shadow-lg">
          {NAVBAR.links.map((link) =>
            location.pathname === '/' ? (
              <ScrollLink
                key={link.href}
                to={link.href}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-tertiary font-[500] text-lg cursor-pointer hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </ScrollLink>
            ) : (
              <Link
                key={link.href}
                to={`/#${link.href}`}
                className="text-tertiary font-[500] text-lg cursor-pointer hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}
          <Link
            to={NAVBAR.cta.href}
            className="bg-light text-primary font-[500] py-1 px-4 rounded-full text-center text-lg cursor-pointer hover:bg-primary hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {NAVBAR.cta.label}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
