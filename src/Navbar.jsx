import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif font-bold text-indigo-600">
            Rovero
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/about" className="text-gray-600 hover:text-indigo-600">
              About
            </Link>
            <Link to="/rooms" className="text-gray-600 hover:text-indigo-600">
              Rooms
            </Link>
            <Link to="/reservation" className="text-gray-600 hover:text-indigo-600">
              Reservation
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-indigo-600">
              Contact
            </Link>
          </div>
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

