export const NAVBAR = {
  logo: {
    src: '#',
    alt: 'Twiine Logo',
  },
  items: [
    { label: 'Home', href: '#home' },
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
    { src: '/images/hero1.png', alt: 'Hero Image 1' },
    { src: '/images/hero2.png', alt: 'Hero Image 2' },
    { src: '/images/hero3.png', alt: 'Hero Image 3' },
  ],
};

export const FEATURES = {
  title: "Explore Twiine's Key Features",
  description:
    'Designed to complement traditional networking applications by helping you make that first connection.',
  items: [
    'Smart matching algorithm for tailored connections',
    'Customizable profiles for personal expression',
    'Upon matching, swiping is disabled to promote genuinity',
    'Choose the information you want to display on your profile',
    'Support, tips, and conversation starters for better interactions',
  ],
  image: { src: '/images/features.png', alt: 'Features Image' },
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
    { src: '/images/interaction1.png', alt: 'Interaction Image 1' },
    { src: '/images/interaction2.png', alt: 'Interaction Image 2' },
    { src: '/images/interaction3.png', alt: 'Interaction Image 3' },
  ],
};

export const HOW_IT_WORKS = {
  title: 'Getting Started with Twiine',
  description: 'Follow these simple steps to set up your profile and start connecting today.',
  steps: [
    {
      title: 'Sign up and personalize your profile details.',
      image: { src: '/images/howitworks1.png', alt: 'How It Works Image 1' },
    },
    {
      title: 'Connect with others within your chosen network.',
      image: { src: '/images/howitworks2.png', alt: 'How It Works Image 2' },
    },
    {
      title: 'Start chatting, create lasting professional connections.',
      image: { src: '/images/howitworks3.png', alt: 'How It Works Image 3' },
    },
  ],
};

export const FAQS = {
  title: 'Frequently Asked Questions',
  description:
    "If you can't find what you are looking for, please don't hesitate to contact us at twiineteam@gmail.com",
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
  items: [
    {
      name: 'Shadman Hossain',
      role: 'Backend Engineer & Co-Founder',
      bio: "Shadman leads Twiine's backend, database, and security development, ensuring smooth operations and excellent user experience.",
      links: {
        linkedin: 'https://www.linkedin.com/in/shadman-hossain-30b9a2228/',
        github: 'https://github.com/shadmanh123',
        portfolio: 'https://shadmanhossain.vercel.app/',
      },
      image: { src: '/images/shadman.png', alt: 'Shadman Hossain' },
    },
    {
      name: 'Jaskaran Singh',
      role: 'Frontend Engineer & Co-Founder',
      bio: 'Jaskaran brings Twiine to life through clean, responsive, and intuitive frontend development.',
      links: {
        linkedin: 'https://www.linkedin.com/in/thecodersingh/',
        github: 'https://github.com/TheCoderSingh',
        portfolio: 'https://thecodersingh.com/',
      },
      image: { src: '/images/jaskaran.png', alt: 'Jaskaran Singh' },
    },
    {
      name: 'Neharika Sidda',
      role: 'UX Designer & Co-Founder',
      bio: 'Neharika leads design at Twiine, shaping everything from brand identity to user experience. Bringing a communication design background and a passion for designing human-centered experiences, she designs every detail of Twiine with care.',
      links: {
        linkedin: 'https://www.linkedin.com/in/neharikasidda/',
        portfolio: 'https://www.neharikasidda.com/',
      },
      image: { src: '/images/neharika.png', alt: 'Neharika Sidda' },
    },
  ],
};

export const WAITLIST = {
  title: "Join Twiine's Waitlist",
  description: 'Join the waitlist to participate in our beta testing stages!',
  cta: 'Join Waitlist',
  image: { src: '/images/waitlist.png', alt: 'Waitlist Image' },
};

export const FOOTER = {
  linkedin: 'https://www.linkedin.com/company/twiinecanada/',
  email: 'twiineteam@gmail.com',
  links: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

export const COLORS = {};
