import { useEffect, useState } from 'react';

function Title({ title }: { title: string }) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0; // Start fading after 100px scroll
      const fadeEnd = 300; // Fully faded at 300px scroll

      let newOpacity = 1;
      if (scrollY > fadeStart) {
        newOpacity = Math.max(
          0.5,
          1 - (scrollY - fadeStart) / (fadeEnd - fadeStart)
        );
      }

      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[50vh] w-full">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: "url('/media/title_bg.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Title with Fade Effect */}
      <div className="relative flex h-[50vh] w-full items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{ backgroundImage: "url('/media/title_bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <h1
          className="relative text-6xl text-white transition-opacity duration-300"
          style={{ opacity }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}

export default Title;
