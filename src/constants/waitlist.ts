import WaitlistImage from '../assets/waitlist.gif';

export const WAITLIST = {
  title: "Join Twiine's Waitlist",
  description: 'Join the waitlist to participate in our beta testing stages!',
  cta: 'Join Waitlist',
  href: '/waitlist',
  image: { src: WaitlistImage, alt: 'Waitlist Image' },
};

export const WAITLIST_FORM = {
  tagline: 'Be part of creating a more meaningful networking experience.',
  title: 'Join our waitlist.',
  description: 'Sign up to participate in our beta testing stages & be notified when we launch!',
  email: { placeholder: 'Enter your email' },
  cta: 'Join Waitlist',
  action: 'https://formspree.io/f/mwpnabew',
  success: {
    tagline: 'Thank you for your interest in Twiine.',
    title: "You're on our waitlist!",
    description: 'You will receive occasional updates on testing and launch dates.',
    description2:
      'In the meantime, please feel free to share Twiine on social media or spread the word to your network.',
  },
  error: {
    message: 'Oops! Something went wrong. Please try again.',
  },
};
