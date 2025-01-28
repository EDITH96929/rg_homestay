import { useState } from "react"

function Home() {
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState(1)

  const rooms = [
    {
      title: "Luxury Suite",
      price: 299,
      description: "Experience ultimate comfort in our spacious luxury suite.",
      amenities: ["King-size bed", "Ocean view", "Jacuzzi"],
    },
    {
      title: "Family Room",
      price: 199,
      description: "Perfect for families, our family room offers ample space for everyone.",
      amenities: ["Two queen beds", "Kid's play area", "Kitchenette"],
    },
    {
      title: "Standard Room",
      price: 99,
      description: "Cozy and comfortable, our standard room is perfect for solo travelers or couples.",
      amenities: ["Queen bed", "Work desk", "En-suite bathroom"],
    },
  ]

  return (
    <div>
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Rovero</h1>
          <p className="text-xl mb-8">Experience luxury and comfort like never before</p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Book Now
          </button>
        </div>
      </section>

      <section className="container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-serif font-bold mb-6 text-center">Find Your Perfect Stay</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Check In</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Check Out</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button className="btn-primary w-full">Search</button>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-12">
        <h2 className="text-3xl font-serif font-bold mb-6 text-center">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{room.title}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <ul className="mb-4">
                  {room.amenities.map((amenity, i) => (
                    <li key={i} className="text-sm text-gray-600">
                      • {amenity}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">${room.price}</span>
                  <button className="btn-secondary">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home

