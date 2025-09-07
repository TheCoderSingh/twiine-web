import { TEAM } from '../../constants';
import TeamCard from '../TeamCard';
import Title from '../Title';

const Team = () => {
  return (
    <section className="text-center mt-36 mb-14 md:w-[80%] lg:w-[70%] mx-auto">
      <Title icon="Group" text="Team" />

      <div className="mt-5 w-[90%] mx-auto">
        <h2 className="text-tertiary text-3xl tracking-tighter font-medium">{TEAM.title}</h2>
        <p className="mt-4 text-secondary">{TEAM.description}</p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 mt-8">
        {TEAM.members.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
