import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#070b13] py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Ambiio — Built with calm precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
