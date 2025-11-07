import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#070b13] text-white">
      <Hero />
      <Services />
      <Process />
      {/* Contact anchor target for CTA */}
      <section id="contact" className="bg-[#070b13] py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h3 className="text-2xl font-semibold">Let’s map your path to autonomy</h3>
          <p className="mt-2 text-gray-300">
            Share a few details and we’ll reach out with a tailored strategy session.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 grid grid-cols-1 gap-4 text-left sm:grid-cols-2"
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-teal-400/60"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-teal-400/60"
              required
            />
            <input
              type="text"
              placeholder="Company"
              className="sm:col-span-2 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-teal-400/60"
            />
            <textarea
              placeholder="What would you like to automate?"
              rows={4}
              className="sm:col-span-2 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-teal-400/60"
            />
            <button
              type="submit"
              className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-teal-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-teal-500/20 transition hover:bg-teal-400 hover:shadow-teal-400/30 focus:outline-none focus:ring-2 focus:ring-teal-400/60"
            >
              Request Strategy Call
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
