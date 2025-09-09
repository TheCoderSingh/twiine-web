import FeaturesImage from '../assets/features.png';

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
