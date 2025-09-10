import ShadmanImage from '../assets/shadman.png';
import JaskaranImage from '../assets/jaskaran.png';
import NeharikaImage from '../assets/neharika.png';

export const TEAM = {
  title: 'Meet the Team',
  description:
    'With a shared goal of bringing more intention to professional networking, we’re a small, but passionate team of builders reimagining the networking experience from the ground up.',
  members: [
    {
      name: 'Shadman Hossain',
      role: 'Backend Engineer & Co-Founder',
      bio: "Shadman leads Twiine's backend, database, and security development, ensuring smooth operations and excellent user experience.",
      bio2: 'With a strong software engineering background, he collaborates closely with the team to deliver secure, user-focused solutions.',
      links: {
        linkedin: 'https://www.linkedin.com/in/shadman-hossain-30b9a2228/',
        github: 'https://github.com/shadmanh123',
        portfolio: 'https://shadmanhossain.vercel.app/',
      },
      image: { src: ShadmanImage, alt: 'Shadman Hossain' },
    },
    {
      name: 'Jaskaran Singh',
      role: 'Frontend Engineer & Co-Founder',
      bio: 'Jaskaran brings Twiine to life through clean, responsive, and intuitive frontend development.',
      bio2: 'With a focus on seamless interactions and accessibility, he ensures the platform feels smooth and intentional across every device.',
      links: {
        linkedin: 'https://www.linkedin.com/in/thecodersingh/',
        github: 'https://github.com/TheCoderSingh',
        portfolio: 'https://thecodersingh.com/',
      },
      image: { src: JaskaranImage, alt: 'Jaskaran Singh' },
    },
    {
      name: 'Neharika Sidda',
      role: 'UX Designer & Co-Founder',
      bio: 'Neharika leads design at Twiine, shaping everything from brand identity to user experience.',
      bio2: 'Bringing a communication design background and a passion for designing human-centered experiences, she designs every detail of Twiine with care.',
      links: {
        linkedin: 'https://www.linkedin.com/in/neharikasidda/',
        portfolio: 'https://www.neharikasidda.com/',
      },
      image: { src: NeharikaImage, alt: 'Neharika Sidda' },
    },
  ],
};
