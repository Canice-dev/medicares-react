import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white py-4 px-5">
      <section className="max-w-300 mx-auto flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl font-bold text-gray-800">Medicares</h1>
        </Link>
        <nav className="hidden md:block">
          <Link
            to="/"
            className="px-4 py-1 hover:bg-blue-200 hover:text-blue-600 rounded-md font-medium transition-colors duration-700 w-full"
          >
            Home
          </Link>
          <Link
            to="#services"
            className="px-4 py-1 hover:bg-blue-200 hover:text-blue-600 rounded-md font-medium transition-colors duration-700 w-full"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="px-4 py-1 hover:bg-blue-200 hover:text-blue-600 rounded-md font-medium transition-colors duration-700 w-full"
          >
            About
          </Link>
        </nav>
        <div>
          <button className="hidden md:block border border-gray-800 px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors duration-700">
            Contact Us
          </button>

          {!isOpen ? (
            <button className="md:hidden" onClick={handleMenuOpen}>
              <Menu size={24} />
            </button>
          ) : (
            <button className="md:hidden" onClick={handleMenuOpen}>
              <X size={24} />
            </button>
          )}
        </div>
      </section>

      {isOpen && (
        <nav className="mt-3 md:hidden flex flex-col gap-4">
          <ul className="flex flex-col items-start gap-4">
            <li className="text-lg hover:text-gray-600">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-lg hover:text-gray-600">
              <Link to={"#"}>Service</Link>
            </li>
            <li className="text-lg hover:text-gray-600">
              <Link to={"/about"}>About</Link>
            </li>
          </ul>

          <button className="border border-gray-800 px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors duration-700 w-full">
            Contact Us
          </button>
        </nav>
      )}
      <div className="hidden md:flex divider w-full h-px bg-gray-300 max-w-300 mx-auto px-4 mt-3"></div>
    </header>
  );
};

export default Header;
