import { useState } from "react"
import RoomCard from "../components/RoomCard"

const rooms = [
  {
    title: "Luxury Super Delux",
    price: 299,
    description:  
      "Ipsor incididunt ut labore et dolore magna liqu Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    status: "Available",
    payment: "30% Advanced",
    guest: 2,
    beds: 1,
    rating: 5,
    reviews: 12,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rovero%20-%20Hotel%20&%20Booking%20Service%20Website%20PSD%20Template.jpg-kM3eARhtLE8DSfM7SlesCk4pNPxJZx.jpeg",
  },
  {
    title: "Simple Family Room",
    price: 399,
    description:
      "Ipsor incididunt ut labore et dolore magna liqu Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    status: "Available",
    payment: "30% Advanced",
    guest: 4,
    beds: 2,
    rating: 4,
    reviews: 8,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rovero%20-%20Hotel%20&%20Booking%20Service%20Website%20PSD%20Template.jpg-kM3eARhtLE8DSfM7SlesCk4pNPxJZx.jpeg",
  },
  {
    title: "Luxury Family Delux",
    price: 499,
    description:
      "Ipsor incididunt ut labore et dolore magna liqu Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    status: "Available",
    payment: "30% Advanced",
    guest: 6,
    beds: 3,
    rating: 5,
    reviews: 15,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rovero%20-%20Hotel%20&%20Booking%20Service%20Website%20PSD%20Template.jpg-kM3eARhtLE8DSfM7SlesCk4pNPxJZx.jpeg",
  },
]

export default function LandingPage() {
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState(1)

  return (
    <main>
      <section className="hero-section relative flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Rooms</h1>
          <p>Ipsor incididunt ut labore et dolore magna liqu</p>
        </div>
      </section>

      <section className="bg-white shadow-lg max-w-4xl mx-auto -mt-20 relative z-20 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CHECK IN</label>
            <input
              type="date"
              className="book-input w-full"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CHECK OUT</label>
            <input
              type="date"
              className="book-input w-full"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">GUESTS</label>
            <select className="book-input w-full" value={guests} onChange={(e) => setGuests(Number(e.target.value))}>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button className="btn-primary w-full">CHECK AVAILABILITY</button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}

        <div className="text-center mt-8">
          <button className="btn-secondary">LOAD MORE</button>
        </div>
      </section>
    </main>
  )
}

