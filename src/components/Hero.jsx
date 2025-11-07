import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#070b13]">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Ambient overlay to deepen contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#070b13]/60 via-[#070b13]/40 to-[#070b13]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        {/* Ambient Orb representation (subtle, glassy glow) */}
        <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-teal-400/10 to-cyan-400/10 ring-1 ring-white/10 backdrop-blur-md shadow-[0_0_60px_10px_rgba(34,197,94,0.08)]" />

        <h1 className="mb-4 text-4xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl md:text-6xl">
          Your Business, Autonomously.
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-base text-gray-300 sm:text-lg">
          Minimal, precise, and quietly powerful. We build autonomous systems that run your operations with ambient intelligence.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-md bg-teal-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-teal-500/20 transition hover:bg-teal-400 hover:shadow-teal-400/30 focus:outline-none focus:ring-2 focus:ring-teal-400/60"
        >
          Schedule Your Free Automation Strategy Call
        </a>
      </div>
    </section>
  );
};

export default Hero;
