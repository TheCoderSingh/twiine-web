import { WAITLIST } from '../../constants';

const Waitlist = () => {
  return (
    <section className="text-center mt-36 mb-14 mx-auto md:text-left w-[80%]">
      <div className="md:flex justify-center items-center">
        <div className="mt-5 w-[90%] mx-auto md:w-[50%]">
          <h2 className="text-tertiary text-3xl tracking-tighter font-medium md:text-5xl">
            {WAITLIST.title}
          </h2>
          <p className="mt-4 text-secondary md:text-xl">{WAITLIST.description}</p>

          <div className="mt-8">
            <a
              href={WAITLIST.href}
              className="bg-light text-primary text-2xl font-[500] py-2 px-6 rounded-full text-center lg:text-md"
            >
              {WAITLIST.cta}
            </a>
          </div>
        </div>
        <div className="hidden rounded-[100px] p-4 ml-10 md:w-[40%] bg-gradient-to-b from-white from-50% to-[rgba(38,107,101,0.7)] md:flex justify-center items-center h-[600px]">
          <img
            src={WAITLIST.image.src}
            alt={WAITLIST.image.alt}
            className="h-[550px] object-contain rounded-[50px] border-[6px] border-light"
          />
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
