function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About Rovero</h3>
              <p className="text-sm">
                Luxury accommodations for the discerning traveler. Experience comfort like never before.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="text-sm">
                <li className="mb-2">
                  <a href="#" className="hover:text-indigo-400">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-indigo-400">
                    Rooms
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-indigo-400">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-indigo-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p className="text-sm mb-2">123 Hotel Street, City, Country</p>
              <p className="text-sm mb-2">Phone: +1 234 567 8900</p>
              <p className="text-sm mb-2">Email: info@rovero.com</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-sm mb-4">Subscribe to our newsletter for special offers.</p>
              <input type="email" placeholder="Your email" className="w-full p-2 text-gray-800 rounded mb-2" />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded w-full hover:bg-indigo-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2023 Rovero. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  