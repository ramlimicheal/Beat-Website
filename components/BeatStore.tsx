import React from 'react';

const DealButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm md:text-base text-gray-300 hover:bg-white/10 w-full text-center transition-colors">
    <h5 className="font-semibold">{children}</h5>
  </button>
);

const PaymentIcons: React.FC = () => {
  const icons = [
    "https://framerusercontent.com/images/tpaBpjdZEvAma7Ux81qBMBAbo.png",
    "https://framerusercontent.com/images/ZpuMJ58d2nMvTkoYvkM0o5eqlzQ.png",
    "https://framerusercontent.com/images/27W75yAc3Z2rnouxITnv1UZP3NE.png",
    "https://framerusercontent.com/images/gUynqUMSGKT2jQLZxReaN8buoQ.png",
    "https://framerusercontent.com/images/0MqwsD1ktvAkWXyMJdQuVJpbQr0.png",
    "https://framerusercontent.com/images/Qu6mUu2NlguBOFguL5ohVq6DLX8.png",
    "https://framerusercontent.com/images/i5rs1aAFzwEQX0toxAKafeBf4M.png",
    "https://framerusercontent.com/images/92vu5JYhKE8B8NA8lAupHjqrU.png",
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
      {icons.map((src, index) => (
        <img key={index} src={src} alt="" className="h-6 object-contain" />
      ))}
    </div>
  );
};

const BeatStore: React.FC = () => {
  return (
    <section id="beatstore" className="bg-[#0a0a0a] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="font-instrument-sans font-bold text-4xl md:text-5xl lg:text-7xl tracking-tighter text-white">
          Radio-Ready Beats
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Pick your beats, check out, and get your files and licenses by email within minutes.
        </p>
        <a href="#player" className="mt-4 px-4 py-2 text-sm border border-white rounded-md text-gray-200 hover:bg-white/10 transition-colors">
          Tip: Looking for a specific beat?
        </a>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          <DealButton>Buy 2, Get 1 Free</DealButton>
          <DealButton>Buy 3, Get 2 Free</DealButton>
          <DealButton>Buy 4, Get 3 Free</DealButton>
          <DealButton>Buy 5, Get 5 Free</DealButton>
        </div>

        <div id="player" className="w-full mt-12">
           <iframe 
              src="https://player.beatstars.com/?storeId=147869" 
              width="100%" 
              height="800" 
              className="max-w-5xl mx-auto rounded-lg border border-[#171717]"
              style={{ minHeight: '800px' }}
            >
              -- none --
            </iframe>
        </div>

        <div className="mt-16 w-full">
          <h6 className="text-gray-400 uppercase tracking-[2.3px] font-bold">Payment methods</h6>
          <PaymentIcons />
        </div>

      </div>
    </section>
  );
};

export default BeatStore;
