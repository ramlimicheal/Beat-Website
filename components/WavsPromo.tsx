import React from 'react';

const wavsImagesCol1 = [
  "https://framerusercontent.com/images/LghHgZwkx7OdfTxGVKlZI7QEj4c.jpg",
  "https://framerusercontent.com/images/NlAvHJkUF6vft1aLdN9scBxhMqc.jpg",
  "https://framerusercontent.com/images/gpZUjvJb2EuCQhnC1OhnNYZjLE.jpg",
  "https://framerusercontent.com/images/IjWUnROlg4N4pxmMLtLy4YYQIhA.jpg",
];

const wavsImagesCol2 = [
  "https://framerusercontent.com/images/DpUyoxyJCotQeRd9dRQaZFPrnY.jpg",
  "https://framerusercontent.com/images/M3hkUNW5eQ8bUZDjER1mLZDherI.jpg",
  "https://framerusercontent.com/images/VEaOb4j624SWDMk16JDWY1BBq7k.jpg",
  "https://framerusercontent.com/images/HeW5fw6FpLzuB1GsTbi2jGUtn8.jpg",
];

const ScrollingColumn: React.FC<{ images: string[]; direction: 'up' | 'down' }> = ({ images, direction }) => (
  <div className="h-[800px] w-full overflow-hidden relative mask-vertical">
    <div className={`absolute left-0 top-0 flex flex-col space-y-10 w-full ${direction === 'up' ? 'animate-scroll-vertical-up' : 'animate-scroll-vertical-down'}`}>
      {[...images, ...images].map((src, index) => (
        <img key={index} src={src} alt="" className="w-full h-64 object-cover rounded-md" />
      ))}
    </div>
  </div>
);

const WavsPromo: React.FC = () => {
  return (
    <section id="wavs" className="bg-[#0a0a0a] relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-radial-gradient from-[#0d0d0d] to-[#0a0a0a]"></div>
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <img src="https://framerusercontent.com/images/xQuYljv010ukvINEZhNAABEMOI.png" alt="WAVS Logo" className="w-32 h-auto" />
          <h3 className="font-instrument-sans font-bold text-4xl sm:text-5xl lg:text-6xl mt-8 bg-clip-text text-transparent bg-gradient-to-b from-white from-60% to-gray-400">
            Start using the world's best samples
          </h3>
          <p className="mt-6 text-xl text-gray-400">
            Get 20% off your first month subscription at WAVS. <br />
            Use code <strong className="text-white">MNT20</strong> for 20% off your first month subscription at WAVS
          </p>
          <a
            href="https://wavs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-8 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition-colors duration-300 font-semibold text-lg"
          >
            Learn more
          </a>
        </div>

        <div className="lg:w-1/2 grid grid-cols-2 gap-6 h-[800px]">
          <ScrollingColumn images={wavsImagesCol1} direction="up" />
          <ScrollingColumn images={wavsImagesCol2} direction="down" />
        </div>
      </div>
    </section>
  );
};

export default WavsPromo;
