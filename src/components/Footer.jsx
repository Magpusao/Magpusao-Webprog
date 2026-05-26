import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-blue-900 bg-blue-950 px-4 py-10 text-blue-50 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-blue-300 bg-blue-600 text-xl font-extrabold text-white shadow-lg">
              Z
            </span>
            <span className="text-2xl font-extrabold text-white">Zandra</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-blue-100">
            A playful web project for matcha features, curious articles, and simple React page experiments.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="rounded-full border border-blue-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-50 transition hover:bg-blue-800">
              React
            </a>
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer" className="rounded-full border border-blue-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-50 transition hover:bg-blue-800">
              Vite
            </a>
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="rounded-full border border-blue-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-50 transition hover:bg-blue-800">
              Tailwind
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-blue-200">Explore</h4>
          <ul className="mt-4 space-y-3 text-sm text-blue-100">
            <li><Link to="/" className="transition hover:text-white">Home</Link></li>
            <li><Link to="/about" className="transition hover:text-white">About</Link></li>
            <li><Link to="/articles" className="transition hover:text-white">Articles</Link></li>
            <li><Link to="/auth/signin" className="transition hover:text-white">Sign In</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-blue-200">Project</h4>
          <ul className="mt-4 space-y-3 text-sm text-blue-100">
            <li>WebProg2 Client</li>
            <li>React Router pages</li>
            <li>Responsive card layout</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-blue-800 pt-6 text-sm text-blue-200 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {currentYear} Zandra. All rights reserved.</p>
        <p className="font-semibold uppercase tracking-[0.2em]">Created for WebProg2</p>
      </div>
    </footer>
  );
};

export default Footer;
