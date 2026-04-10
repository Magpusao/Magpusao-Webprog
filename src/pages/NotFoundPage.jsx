import React from 'react';
import Button from '../components/Button';
import NavBar from '../components/NavBar';

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-100 text-zinc-900">
      <NavBar />
      <main className="flex-grow flex flex-col items-center justify-center p-8 text-center pt-20">
        <h1 className="text-8xl font-extrabold text-blue-900 mb-4">404</h1>
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Page Not Found</h2>
        <p className="text-lg text-blue-600 mb-8 max-w-md">
          The link you followed to get here must be broken, or the page has been removed.
        </p>
        <Button to="/" variant="primary" className="mt-4">Return Home</Button>
      </main>
      <footer className="py-6 text-center text-sm font-semibold tracking-widest text-zinc-500 uppercase bg-zinc-200 mt-auto">
        MATCHA
      </footer>
    </div>
  );
}
 
export default NotFoundPage;