import React from 'react';

const artists = [
  "https://framerusercontent.com/images/8Xo1b5xRBemYs6WlzcOnkKAs6NA.webp",
  "https://framerusercontent.com/images/A9uLgquyWXOxrkEwNHLw64Jj5c.webp",
  "https://framerusercontent.com/images/DhLtVtqztqhq88zwmlZzlSdNV2E.jpeg",
  "https://framerusercontent.com/images/Hc6ea31W3vc4075ehJMPOixiqx8.webp",
  "https://framerusercontent.com/images/TnmmVEAoHrqy9jpa94KsHiaXN0.jpg",
  "https://framerusercontent.com/images/jPb7cHxlGHN9jSmXAhyHMvVYCE.jpeg",
  "https://framerusercontent.com/images/8AEuZBOv0B0lHqyMx2v3EJdtvk.jpg",
  "https://framerusercontent.com/images/EjGrnCtD9nR8SUYPnUcDRfQjvE.jpeg",
  "https://framerusercontent.com/images/eC0eoa1mwCimJSSrtu3wzlycz8k.jpeg",
  "https://framerusercontent.com/images/WAP75tKpKc76Ld9MNoqomQUk.jpg",
  "https://framerusercontent.com/images/TIVEID4Kf3jkOZZ6Dq3ZAuBSCU.webp",
  "https://framerusercontent.com/images/gGjqKcNYuSm32rDyeN1GahoI4.webp",
];

const ArtistImage: React.FC<{ src: string }> = ({ src }) => (
  <div className="flex-shrink-0 w-60 h-64 rounded-md border-[10px] border-[#171717] opacity-60 overflow-hidden">
    <img src={src} alt="" className="w-full h-full object-cover" />
  </div>
);

const ArtistMarquee: React.FC<{ images: string[], reverse?: boolean }> = ({ images, reverse = false }) => (
  <div className={`flex space-x-6 ${reverse ? 'animate-scroll-horizontal' : 'animate-scroll-horizontal'}`} style={{animationDirection: reverse ? 'reverse' : 'normal', animationDuration: '80s'}}>
    {images.map((src, i) => <ArtistImage key={i} src={src} />)}
    {images.map((src, i) => <ArtistImage key={i + images.length} src={src} />)}
  </div>
);

const FeaturedArtists: React.FC = () => {
  return (
    <section className="bg-[#0d0d0d] py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png')] opacity-[0.03] bg-repeat" style={{backgroundSize: '34.5px auto'}}></div>
      
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <img src="https://framerusercontent.com/images/q1bHqeBsMReVOcaiovBQo6swfQ.png" alt="Mantra Logo" className="h-14 w-auto"/>
            <p className="font-instrument-sans text-sm mt-2 text-gray-300">Beats By Mantra</p>
          </div>
          <h2 className="font-instrument-sans font-bold text-4xl sm:text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white from-60% to-gray-400">
            Produced by Mantra
          </h2>
          <p className="max-w-4xl text-gray-400 font-instrument-sans text-lg md:text-xl leading-relaxed">
            Future / Mø / Rihanna / Dua Lipa / Pop Smoke / Bad Bunny / Tory Lanez / Ne-Yo / Will Smith / Trey Songz / Stefflon Don / Jacob Latimore / Sean Kingston / Kota The Friend /
          </p>
        </div>
      </div>
      
      <div className="relative flex flex-col space-y-6">
        <div className="w-full overflow-hidden mask-gradient">
          <ArtistMarquee images={artists.slice(0, 6)} />
        </div>
        <div className="w-full overflow-hidden mask-gradient">
          <ArtistMarquee images={artists.slice(6)} reverse />
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;
