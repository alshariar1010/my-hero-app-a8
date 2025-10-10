import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const getActiveClass = (path) => location.pathname === path ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600';

  return (
    // header add
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-600 flex items-center">
          <div>
            <img className="w-10 h-10" src="/logo.png" alt="" />
          </div>
        </Link>
        <nav className="hidden md:flex space-x-8 text-sm">
          <Link to="/" className={`hover:text-purple-600 py-1 ${getActiveClass('/')}`}>Home</Link>
          <Link to="/apps" className={`hover:text-purple-600 py-1 ${getActiveClass('/apps')}`}>Apps</Link>
          <Link to="/installation" className={`hover:text-purple-600 py-1 ${getActiveClass('/installation')}`}>Installation</Link>
        </nav>
        <a href="https://github.com/alshariar1010" target="_blank" rel="noopener noreferrer" className="bg-linear-to-t from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-sm flex items-center text-sm hover:bg-purple-700">
          <span className="mr-1"><i class="fa-brands fa-github"></i></span>Contribute
        </a>
      </div>
    </header>
  );
};

export default Header;