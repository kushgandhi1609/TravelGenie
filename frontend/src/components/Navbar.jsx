import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
        >
          TravelGenie
        </Link>

        <div className="flex items-center gap-6 font-medium text-slate-300">
          <Link to="/" className="hover:text-cyan-400 transition">
            Home
          </Link>

          <Link to="/dashboard" className="hover:text-cyan-400 transition">
            Dashboard
          </Link>

          <Link to="/create-trip" className="hover:text-cyan-400 transition">
            Create Trip
          </Link>

          <Link to="/expenses" className="hover:text-cyan-400 transition">
            Expenses
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;