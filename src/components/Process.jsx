import React from 'react';
import { Rocket, Settings, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Rocket,
    title: 'Discover',
    text: 'Map your systems, data, and moments of leverage. Define success and constraints with clarity.',
  },
  {
    icon: Settings,
    title: 'Implement',
    text: 'Build agentic workflows with strong guardrails, testing, and observability from day one.',
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    text: 'Expand autonomy across functions with governance, continuous learning, and measurable ROI.',
  },
];

const Process = () => {
  return (
    <section className="relative w-full bg-[#070b13] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Our 3-Step Path to Ambient Intelligence
        </h2>

        <div className="relative mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-3">
          {/* connector line */}
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-0.5 -translate-y-1/2 bg-gradient-to-r from-teal-500/40 via-teal-400/30 to-teal-500/40 md:block" />

          {steps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="relative rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500/10 ring-1 ring-teal-400/30">
                <Icon className="h-7 w-7 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
