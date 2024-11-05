import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-4xl font-bold">
          My Portfolio
        </Link>
        <div className="px-[80%]">
          <Link to="/" className="text-gray-300 text-3xl mx-3 hover:text-white">Home</Link>
          <Link to="/about" className="text-gray-300 text-3xl mx-3 hover:text-white">About</Link>
          <Link to="/contact" className="text-gray-300 text-3xl mx-3 hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
