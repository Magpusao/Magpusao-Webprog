import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-100 text-zinc-900">
      <NavBar />
      <main className="flex-grow pb-16 pt-20">
        <Outlet />
      </main>
      <footer className="py-6 text-center text-sm font-semibold tracking-widest text-zinc-500 uppercase bg-zinc-200 mt-auto">
        MATCHA
      </footer>
    </div>
  );
};

export default Layout;