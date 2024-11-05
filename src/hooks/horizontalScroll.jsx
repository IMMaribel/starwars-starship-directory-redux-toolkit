import React, { useEffect, useRef } from 'react';
import { animate, scroll } from 'motion';
import listPage from '../assets/listPage.png';
import detailsShip from '../assets/detailsShip.png';

const HorizontalScrollGallery = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const items = itemsRef.current;
    const section = sectionRef.current;

    scroll(
      animate("ul", {
        transform: [`translateX(0)`, `translateX(-${items.length - 2}00vw)`]
      }),
      { target: section }
    );

    scroll(animate(".progress", { scaleX: [0, 1] }), {
      target: section
    });

    const segmentLength = 1 / items.length;
    items.forEach((item, i) => {
      const header = item.querySelector("h2");

      scroll(animate(header, { x: [200, -200] }), {
        target: section,
        offset: [
          [i * segmentLength, 1],
          [(i + 1) * segmentLength, 0]
        ]
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="mx-56 relative min-h-screen">
      <div className="progress fixed transform origin-left " />
      <ul className="flex-row">
        <li ref={(el) => (itemsRef.current[0] = el)} className="min-w-full flex items-center pt-32">
          <img src={listPage} alt="List Page" className="w-60 mb-8 rounded-4xl" />
          <h2 className="text-2xl font-chackra text-white">Explore iconic starships</h2>
        </li>
        <li ref={(el) => (itemsRef.current[1] = el)} className="min-w-full flex flex-row-reverse items-center -pt-32">
          <img src={detailsShip} alt="Details Ship" className="w-60 mb-8 rounded-4xl" />
          <h2 className="text-2xl font-chackra text-white">Discover starship details</h2>
        </li>
      </ul>
    </section>
  );
};

export default HorizontalScrollGallery;