import TwiineLogo from '../assets/twiine-logo.png';
import HeroImage1 from '../assets/hero-bg.png';
import HeroImage2 from '../assets/hero-bg2.png';
import HeroImage3 from '../assets/hero-bg3.png';
import FeaturesImage from '../assets/features.png';
import Interaction1 from '../assets/interaction1.png';
import Interaction2 from '../assets/interaction2.png';
import Interaction3 from '../assets/interaction3.png';
import HowItWorks1 from '../assets/howitworks1.png';
import HowItWorks2 from '../assets/howitworks2.png';
import HowItWorks3 from '../assets/howitworks3.png';
import ShadmanImage from '../assets/shadman.png';
import JaskaranImage from '../assets/jaskaran.png';
import NeharikaImage from '../assets/neharika.png';
import WaitlistImage from '../assets/waitlist.gif';

export const NAVBAR = {
  logo: {
    src: TwiineLogo,
    alt: 'Twiine Logo',
  },
  links: [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Team', href: '#team' },
  ],
  cta: { label: 'Join Waitlist', href: '#waitlist' },
};

export const HERO = {
  title: 'Take the nerves out of networking with Twiine',
  description:
    'Build authentic professional connections, grow in your career and share your experiences.',
  images: [
    { src: HeroImage1, alt: 'Hero Image 1' },
    { src: HeroImage2, alt: 'Hero Image 2' },
    { src: HeroImage3, alt: 'Hero Image 3' },
  ],
};

export const FEATURES = {
  title: "Explore Twiine's Key Features",
  description:
    'Designed to complement traditional networking applications by helping you make that first connection.',
  items: [
    { icon: 'DoubleCheck', text: 'Smart matching algorithm for tailored connections' },
    { icon: 'EditPencil', text: 'Customizable profiles for personal expression' },
    { icon: 'ChatBubble', text: 'Upon matching, swiping is disabled to promote genuinity' },
    { icon: 'EyeClosed', text: 'Choose the information you want to display on your profile' },
    {
      icon: 'InfoCircle',
      text: 'Support, tips, and conversation starters for better interactions',
    },
  ],
  image: { src: FeaturesImage, alt: 'Features Image' },
};

export const INTERACTIONS = {
  heading: 'Reciprocal interactions make networking more meaningful.',
  items: [
    {
      title: 'Choose Who To Network With',
      description:
        'Swipe through potential mentors, mentees, collaborators, and peers, you’re in control of who you want to grow with.',
    },
    {
      title: 'Message Your Connections',
      description:
        'Once you match with someone, swiping pauses, encouraging you to space to build a real, professional relationship before moving on.',
    },
    {
      title: 'The Networking Toolkit',
      description:
        'Need help breaking the ice? Our in-app Toolkit is loaded with tips and prompts to help you connect like a pro, even if you’re new to networking.',
    },
  ],
  images: [
    { src: Interaction1, alt: 'Interaction Image 1' },
    { src: Interaction2, alt: 'Interaction Image 2' },
    { src: Interaction3, alt: 'Interaction Image 3' },
  ],
};

export const HOW_IT_WORKS = {
  title: 'Getting Started with Twiine',
  description: 'Follow these simple steps to set up your profile and start connecting today.',
  steps: [
    {
      title: 'Sign up and personalize your profile details.',
      image: { src: HowItWorks1, alt: 'How It Works Image 1' },
    },
    {
      title: 'Connect with others within your chosen network.',
      image: { src: HowItWorks2, alt: 'How It Works Image 2' },
    },
    {
      title: 'Start chatting, create lasting professional connections.',
      image: { src: HowItWorks3, alt: 'How It Works Image 3' },
    },
  ],
};

export const FAQS = {
  title: 'Frequently Asked Questions',
  description:
    "If you can't find what you are looking for, please don't hesitate to contact us at ",
  email: 'twiineteam@gmail.com',
  items: [
    {
      question: 'Is Twiine free to use?',
      answer:
        'Yes! Twiine will always offer a free version with access to core features like matching, messaging, and networking tips. We’ll be rolling out premium features down the line, but the essentials are free forever.',
    },
    {
      question: 'Do I need professional experience to use Twiine?',
      answer:
        "Not at all! Twiine is built for students, career changers, early professionals, and seasoned mentors alike. Whether you're just starting out or ready to give back, there's a place for you here.",
    },
    {
      question: 'What kind of support do you offer?',
      answer:
        "We’ve got you covered with Twiine's in-app toolbar, helping with conversation starters, networking tips, and guided prompts. You can also reach out to our team anytime for help, we’re here to make sure you feel supported every step of the way.",
    },
    {
      question: 'How can I get more connections?',
      answer:
        "Fill out your profile thoughtfully, choose your role, and be open to reaching out. Connections are intentionally limited to help you focus on building real, meaningful conversation. It's not about collecting contacts, but about creating genuine, professional relationships.",
    },
    {
      question: 'When will Twiine be available on the app store?',
      answer:
        'We’re working hard to get Twiine into your hands! The app is currently in development, with a launch planned for late 2025. Join the waitlist to be a part of our testing stages and to be the first to know when we go live!',
    },
    {
      question: 'Is Twiine available outside Canada?',
      answer:
        "Twiine will launch first in Canada, with plans to expand. If you're outside Canada, join the waitlist, your interest helps us decide where to go next!",
    },
  ],
};

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

export const WAITLIST = {
  title: "Join Twiine's Waitlist",
  description: 'Join the waitlist to participate in our beta testing stages!',
  cta: 'Join Waitlist',
  image: { src: WaitlistImage, alt: 'Waitlist Image' },
};

export const FOOTER = {
  linkedin: 'https://www.linkedin.com/company/twiinecanada/',
  email: 'twiineteam@gmail.com',
  links: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};
