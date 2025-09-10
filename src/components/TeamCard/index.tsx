import { Emoji, Github, Linkedin } from 'iconoir-react';
import { TEAM } from '../../constants';
import { useEffect } from 'react';

type Member = (typeof TEAM.members)[0];

const TeamCard = ({ member }: { member: Member }) => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-transition-on-scroll]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
            observer.unobserve(entry.target); // Ensure it only happens once
          }
        });
      },
      { threshold: 0.1 }, // Trigger when 10% of the image is visible
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div
      className="relative w-[250px] md:w-[200px] lg:w-[30%] flex flex-col items-center group opacity-0 translate-y-20 transition duration-700 ease-linear data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
      data-transition-on-scroll
    >
      {/* Image */}
      <img
        src={member.image.src}
        alt={member.image.alt}
        className="rounded-full w-80 h-80 object-cover mb-3 transition-transform duration-300 group-hover:scale-105 lg:w-100 lg:h-100"
      />

      {/* Overlay on hover for large screens */}
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-95 p-4 flex flex-col justify-center items-center text-center rounded-[25px] opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-tertiary font-bold tracking-wider text-2xl">{member.name}</h3>
        <h3 className="text-primary">{member.role}</h3>
        <p className="text-secondary mt-5">{member.bio}</p>
        {member.bio2 && <p className="text-secondary mt-5">{member.bio2}</p>}
      </div>

      {/* Info for small screens and default view on large screens */}
      <div className="flex flex-col items-center transition-opacity duration-300 lg:group-hover:opacity-0">
        <h3 className="text-tertiary font-bold tracking-wider">{member.name}</h3>
        <h3 className="text-primary">{member.role}</h3>
        <div className="flex justify-center items-center gap-4 my-2">
          {member.links.linkedin && (
            <a
              href={member.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary rounded-full p-1"
            >
              <Linkedin width={20} height={20} />
            </a>
          )}
          {member.links.github && (
            <a
              href={member.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary rounded-full p-1"
            >
              <Github width={20} height={20} />
            </a>
          )}
          {member.links.portfolio && (
            <a
              href={member.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary rounded-full flex justify-center items-center px-3 py-1 gap-1"
            >
              <Emoji width={20} height={20} />
              {' Portfolio'}
            </a>
          )}
        </div>
      </div>

      {/* Always show bio on small screens */}
      <div className="lg:hidden text-center mt-2">
        <p className="text-secondary">{member.bio}</p>
        {member.bio2 && <p className="text-secondary mt-1">{member.bio2}</p>}
      </div>
    </div>
  );
};

export default TeamCard;
