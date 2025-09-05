import { useState } from 'react';
import { NAVBAR } from '../../constants';
import { Menu } from 'iconoir-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 lg:w-[70%] lg:left-[20%] lg:mt-4 lg:py-6">
      <div className="bg-[rgba(255,255,255,0.5)] backdrop-blur-[10px] rounded-full">
        <div className="flex items-center justify-between h-16 px-5">
          <div>
            <img src={NAVBAR.logo.src} alt={NAVBAR.logo.alt} className="h-8" />
          </div>
          <div className="md:hidden pt-2 pr-3">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Menu />
            </button>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-10">
              {NAVBAR.links.map((link) => (
                <a key={link.href} href={link.href} className="text-tertiary text-xl">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <a
              href={NAVBAR.cta.href}
              className="bg-light text-primary font-[500] py-2 px-6 rounded-full text-center xl:text-2xl lg:text-md"
            >
              {NAVBAR.cta.label}
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 bg-white px-6 rounded-3xl w-[220px] fixed right-6 top-22 flex flex-col gap-4 py-6 border-6 border-gray-50">
          {NAVBAR.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-tertiary font-[500] text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href={NAVBAR.cta.href}
            className="bg-light text-primary font-[500] py-1 px-4 rounded-full text-center text-lg"
            onClick={() => setIsOpen(false)}
          >
            {NAVBAR.cta.label}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
