import React from 'react';
import Button from '../components/Button';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-100 text-zinc-900">
      <NavBar />
      <main className="flex-grow px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-6xl gap-8 rounded-3xl border-2 border-blue-900 bg-white p-6 shadow-xl sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-500">
              Error 404
            </p>
            <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-blue-950 sm:text-6xl">
              This page drifted away.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-blue-700 sm:text-base">
              The route you opened does not match an existing page. Head back home or browse the article collection.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/" variant="primary">Return Home</Button>
              <Button to="/articles">View Articles</Button>
            </div>
          </div>

          <div className="order-1 rounded-[1.25rem] border-2 border-blue-200 bg-blue-50 p-5 lg:order-2">
            <div className="flex aspect-video flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-300 bg-white text-center">
              <p className="text-8xl font-black leading-none text-blue-900 sm:text-9xl">404</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-500">
                Page Not Found
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
 
export default NotFoundPage;
