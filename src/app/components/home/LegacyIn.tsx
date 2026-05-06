// import {  useRef } from "react";
// import {  useGSAP } from "@gsap/react";
// import gsap from "gsap";

// export default function LegacyIn() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const card1 = useRef<HTMLDivElement>(null);
//   const card2 = useRef<HTMLDivElement>(null);
//   const card3 = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     gsap.to(card1.current, {
//      scale:0.8,
//         duration:3,
//         // rotateY:360,
//         opacity:0,
//       scrollTrigger: {
//         trigger: card1.current,
//         start: "top 10%",
//         end: "bottom 30%",
//         scrub: true,
//        markers: true,
//        pin: true,

//       },
//     });
//   },
// {scope: containerRef});

//   return (
//     <div
//       ref={containerRef}
//       className=" flex flex-col items-center gap-12 min-h-screen py-[15vh]"
//     >
//       <div
//         ref={card1}
//         className="bg-blue-500 p-6 rounded-lg shadow-lg max-w-md text-black min-h-36 py-44"
//       >
//         <h3 className="text-2xl font-bold mb-2">2019 - Founded</h3>
//         <p>Started with a mission to change digital marketing</p>
//       </div>

//       <div
//         ref={card2}
//         className="bg-yellow-500 p-6 rounded-lg shadow-lg max-w-md text-black min-h-screen"
//       >
//         <h3 className="text-2xl font-bold mb-2">2020 - Growth</h3>
//         <p>Expanded team and services</p>
//       </div>

//       <div
//         ref={card3}
//         className="bg-orange-500 p-6 rounded-lg shadow-lg max-w-md text-black min-h-screen"
//       >
//         <h3 className="text-2xl font-bold mb-2">2021 - Scale</h3>
//         <p>Reached global clients</p>
//       </div>
//     </div>
//   );
// }

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    year: "2019",
    tag: "Chapter 01",
    title: "Founded",
    desc: "Started with a mission to change digital marketing.",
    bg: "bg-blue-900",
  },
  {
    year: "2021",
    tag: "Chapter 02",
    title: "Award Winning",
    desc: "Recognized as the UK's best SEO agency.",
    bg: "bg-orange-900",
  },
  {
    year: "2023",
    tag: "Chapter 03",
    title: "Global Expansion",
    desc: "Offices across 4 continents.",
    bg: "bg-green-900",
  },
  {
    year: "2023",
    tag: "Chapter 03",
    title: "Global Expansion",
    desc: "Offices across 4 continents.",
    bg: "bg-yellow-900",
  },
];

export default function LegacyIn() {
  const container = useRef<HTMLDivElement>(null);

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 0%",
        end: `bottom 16%`, // important!
        scrub: true,
        pin: true,
        markers: true,

      },
    });

    // animate cards one by one
    tl.fromTo(
      ".card:not(:first-child)",
      { x: 600, opacity: 1 },
      {
        x: 0,
        opacity: 1,
        stagger: 1, // 🔥 key for one-by-one
      }
    );
  });

  return () => ctx.revert();
}, []);

  return (
    <div ref={container} className=" flex items-center justify-center py-40 my-20">
      {/* <div className="h-screen flex items-center justify-center text-white/40">
        ↓ Scroll to explore
      </div> */}
      <div className="relative w-72 h-[300px]">
        {CARDS.map((card, i) => {
          return (
            // ✅ Unique section ref per index — NOT id="parent" on every div
            <div key={i} className="card absolute">
              <div
                className={`${card.bg} rounded-2xl p-10 shadow-2xl flex flex-col justify-end`}
              >
                <span className="text-white/40 text-xs tracking-widest uppercase mb-3">
                  {card.tag}
                </span>
                <h2 className="text-5xl font-black text-white mb-4">
                  {card.title}
                </h2>
                <p className="text-white/70 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

   
    </div>
  );
}
