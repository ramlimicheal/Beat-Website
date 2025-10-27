import React from 'react';

const Marquee: React.FC = () => {
  const text = "Bundle & Save: Buy 2 Get 1  •  Buy 3 Get 2  •  Buy 4 Get 3  •  Buy 5 Get 5";
  const repeatedText = Array(5).fill(text).join("  •  ");

  return (
    <div className="bg-[rgb(129,109,242)] overflow-hidden whitespace-nowrap">
      <div className="py-3 animate-scroll-horizontal">
        <p className="font-jersey-15 text-xl md:text-2xl text-black uppercase tracking-wider">
          {repeatedText}
        </p>
      </div>
    </div>
  );
};

export default Marquee;
