import { useState, useEffect } from 'react';
import { HERO } from '../../constants';

const Hero = () => {
  const [bgImage, setBgImage] = useState(HERO.images[0].src);

  useEffect(() => {
    const updateBg = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setBgImage(HERO.images[2].src);
      } else if (width >= 768) {
        setBgImage(HERO.images[1].src);
      } else {
        setBgImage(HERO.images[0].src);
      }
    };

    updateBg();
    window.addEventListener('resize', updateBg);
    return () => window.removeEventListener('resize', updateBg);
  }, []);

  return (
    <section
      className="bg-cover mt-20 text-center py-20 px-4 h-[92vh] md:h-[100vh] overflow-hidden md:mt-0 md:rounded-b-[200px] rounded-b-4xl"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
      }}
      id="hero"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-[500] text-tertiary md:text-6xl md:mt-32">{HERO.title}</h1>
        <p className="mt-8 text-secondary text-xl max-w-lg mx-auto">{HERO.description}</p>
      </div>
    </section>
  );
};

export default Hero;
