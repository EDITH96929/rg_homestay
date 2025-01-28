import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">About</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/company">Company</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
            <li>
              <Link to="/offers">Offers</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Service</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/booking">Hotel Booking</Link>
            </li>
            <li>
              <Link to="/guide">Travel Guide</Link>
            </li>
            <li>
              <Link to="/restaurant">Restaurant</Link>
            </li>
            <li>
              <Link to="/destination">Destination</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/terms">Terms & Services</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Address</h3>
          <p>25 Blackforest, Jalan Nepor</p>
          <p>Delhi, Indonesia</p>
          <p>+62 0123 4567 (Office)</p>
          <p>+62 0123 4567 (Fax)</p>
          <p>hello@rovero.com</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/logo.png" alt="Rovero" className="h-8 mr-2" />
            <span>© 2023</span>
          </div>
          <div className="flex space-x-4">
            <FaFacebookF className="h-5 w-5" />
            <FaTwitter className="h-5 w-5" />
            <FaGoogle className="h-5 w-5" />
            <FaLinkedinIn className="h-5 w-5" />
          </div>
        </div>
      </div>
    </footer>
  )
}

