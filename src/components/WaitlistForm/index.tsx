import { useState } from 'react';
import { WAITLIST_FORM } from '../../constants';
import { Copy } from 'iconoir-react';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(WAITLIST_FORM.action, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        console.error('Formspree error:', data);
        setStatus('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  const [copied, setCopied] = useState(false);
  const url = 'https://twiineapp.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-[80%] mx-auto mt-20 text-center bg-white/20 py-4 px-4 rounded-[25px] sm:w-[70%] md:w-[40%] md:py-24">
      {status === 'success' && (
        <div>
          <p className="text-primary leading-5">{WAITLIST_FORM.success.tagline}</p>
          <h1 className="text-heading text-4xl mt-3">{WAITLIST_FORM.success.title}</h1>
          <p className="text-secondary mt-3 leading-5 text-sm mb-5 md:text-base">
            {WAITLIST_FORM.success.description}
          </p>
          <p className="text-secondary mt-3 leading-5 text-sm mb-5 md:text-base xl:px-20">
            {WAITLIST_FORM.success.description2}
          </p>
          <div className="relative w-full flex justify-center md:w-[60%] md:mx-auto">
            <input
              type="text"
              value={url}
              readOnly
              className="bg-white py-3 pl-5 pr-12 rounded-md mt-5 mb-3 w-full cursor-pointer"
              onClick={handleCopy}
            />
            <button onClick={handleCopy} className="absolute right-3 top-1/2 -translate-y-1/2 pt-1">
              <Copy color="secondary" fontSize={12} />
            </button>
          </div>

          {copied && <p className="text-secondary mt-2">Copied to clipboard!</p>}
        </div>
      )}

      <div className={status === 'success' ? 'hidden' : ''}>
        <p className="text-primary leading-5">{WAITLIST_FORM.tagline}</p>
        <h1 className="text-heading text-4xl mt-3">{WAITLIST_FORM.title}</h1>
        <p className="text-secondary mt-3 leading-5 text-sm mb-5 md:text-base xl:px-20">
          {WAITLIST_FORM.description}
        </p>

        <form onSubmit={handleSubmit} className="md:w-[60%] md:mx-auto">
          <input
            type="email"
            name="email"
            placeholder={WAITLIST_FORM.email.placeholder}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white py-3 pl-5 rounded-full mt-5 mb-3 w-full"
          />
          <button
            type="submit"
            className="bg-light text-white p-3 rounded-full mb-3 w-[70%] md:w-[50%]"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : WAITLIST_FORM.cta}
          </button>
        </form>

        {status === 'error' && <p className="text-primary mt-4">{WAITLIST_FORM.error.message}</p>}
      </div>
    </div>
  );
};

export default WaitlistForm;
