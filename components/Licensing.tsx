import React from 'react';
import type { License } from '../types';
import PricingCard from './PricingCard';

const licenses: License[] = [
  {
    id: 1,
    name: 'Standard',
    price: 49,
    priceSuffix: 'Per License',
    theme: 'light',
    features: [
      { text: 'Untagged MP3 + WAV', included: true },
      { text: 'Studio quality track stems', included: false },
      { text: '10,000 distribution copies', included: true },
      { text: '100,000 audio/video streams', included: true },
      { text: '1 music video', included: true },
      { text: 'Royalties split 50/50', included: true },
      { text: 'Live (for profit) performances', included: true },
      { text: 'Radio airplay', included: false },
      { text: 'YouTube Monetization', included: false },
    ],
  },
  {
    id: 2,
    name: 'Professional',
    price: 99,
    priceSuffix: 'Per License',
    isBestDeal: true,
    theme: 'dark',
    features: [
      { text: 'Untagged MP3, WAV & Stems', included: true },
      { text: 'Studio quality track stems', included: true },
      { text: '10,000 distribution copies', included: true },
      { text: '1,000,000 audio/video streams', included: true },
      { text: '2 music videos', included: true },
      { text: 'Royalties split 50/50', included: true },
      { text: 'Live (for profit) performances', included: true },
      { text: 'Radio airplay', included: false },
      { text: 'YouTube Monetization', included: false },
    ],
  },
  {
    id: 3,
    name: 'Unlimited',
    price: 199,
    priceSuffix: 'Per License',
    isPopular: true,
    theme: 'light',
    features: [
      { text: 'Untagged MP3, WAV & Stems', included: true },
      { text: 'Studio quality track stems', included: true },
      { text: 'Unlimited distribution copies', included: true },
      { text: 'Unlimited audio/video streams', included: true },
      { text: '2 music videos', included: true },
      { text: 'Royalties split 50/50', included: true },
      { text: 'Live (for profit) performances', included: true },
      { text: 'Radio airplay', included: true },
      { text: 'YouTube Monetization', included: true },
    ],
  },
  {
    id: 4,
    name: 'Unlimited Plus',
    price: 599,
    priceSuffix: 'Per License',
    theme: 'dark',
    features: [
        { text: 'Untagged MP3, WAV & Stems', included: true },
        { text: 'Studio quality track stems', included: true },
        { text: 'YouTube Monetization', included: true },
        { text: 'Radio airplay', included: true },
        { text: 'Unlimited distribution copies', included: true },
        { text: 'Unlimited videos', included: true, highlight: true },
        { text: 'Unlimited audio/video streams', included: true },
        { text: 'Royalties split 80/20', included: true, highlight: true },
        { text: 'Live (for profit) performances', included: true },
    ],
  },
];


const Licensing: React.FC = () => {
  return (
    <section id="licensing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fafafa] to-[#bdbdbd]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="font-instrument-sans font-bold text-4xl sm:text-5xl md:text-6xl text-black">
          Pricing
        </h2>
        <p className="mt-4 max-w-xl text-lg md:text-xl text-gray-800">
          Licenses that move your music. Distribute your music anywhere.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full">
          {licenses.map((license) => (
            <PricingCard key={license.id} license={license} />
          ))}
        </div>

        <div className="mt-16 text-center max-w-4xl">
           <h4 className="font-instrument-sans font-bold text-3xl md:text-4xl text-black">
              Need help choosing a license?
            </h4>
            <p className="mt-3 text-lg text-gray-800">
              Check out our detailed licensing page for more information about our licensing options.
            </p>
            <div className="mt-6 flex justify-center">
               <a
                  href="/licensing"
                  className="px-6 py-3 border border-black text-black rounded-md hover:bg-black hover:text-white transition-colors duration-300 font-semibold"
                >
                  Licensing info
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Licensing;
