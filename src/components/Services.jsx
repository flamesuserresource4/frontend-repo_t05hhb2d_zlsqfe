import React from 'react';

const services = [
  {
    tag: 'Ignition',
    title: 'AI Ignition Package',
    desc: 'Identify high-leverage automations across ops and revenue. Rapid pilots with measurable impact.',
  },
  {
    tag: 'Orbit',
    title: 'Autonomy Orbit',
    desc: 'Deploy autonomous agents and workflows across your stack with robust guardrails and observability.',
  },
  {
    tag: 'Continuum',
    title: 'Scaling Continuum',
    desc: 'Scale from pilot to production with governance, data flywheels, and continuous improvement loops.',
  },
];

const Services = () => {
  return (
    <section className="relative w-full bg-[#070b13] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Find Your Path to Full Autonomy
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10"
              style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.03) inset' }}
            >
              {/* glass sheen */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{background:'radial-gradient(1200px 200px at 0% -10%, rgba(255,255,255,0.08), transparent 60%)'}} />

              <span className="text-sm font-medium text-teal-400">{s.tag}</span>
              <h3 className="mt-2 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-gray-300">{s.desc}</p>

              <a
                href="#services"
                className="mt-6 inline-flex items-center text-teal-400 transition hover:text-teal-300"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
