import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="bg-black/90 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-sm">📞 234-456-7890</span>
          <span className="text-sm">✉️ booking@rovero.com</span>
        </div>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <img src="/logo.png" alt="Rovero" className="h-8" />
        </Link>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-4">
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/rooms" className="nav-link">
              Rooms
            </Link>
            <Link to="/reservation" className="nav-link">
              Reservation
            </Link>

            <Link to="/contact" className="nav-link">
              Contact
            </Link>

             <Link to="/contact" className="nav-link">
              login
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaGoogle />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <select className="bg-transparent">
              <option>EN</option>
              <option>ES</option>
            </select>
            <select className="bg-transparent">
              <option>USD</option>
              <option>EUR</option>
            </select>
            <button className="nav-link">Login</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

