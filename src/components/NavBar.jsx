import { NavLink } from 'react-router-dom';

const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Articles', to: '/articles' },
];

const navLinkClassName = ({ isActive }) =>
    [
        'rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300 ',
        isActive
        ? 'bg-blue-600 text-white shadow-md'
        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600',
    ].join('');
    
const NavBar = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white/90 shadow-sm backdrop-blur-md border-b border-gray-200">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                <NavLink to="/" className="flex items-center gap-3 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:scale-105 transition-transform">
                        <span className="text-xl font-bold text-white">Z</span>
                    </div>
                    <p className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Zandra
                    </p>
                </NavLink>

                <nav className="hidden items-center gap-2 md:flex">
                    {links.map((link) => (
                        <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default NavBar;