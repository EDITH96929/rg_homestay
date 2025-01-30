import "react"
import BookingForm from "../components/BookingForm"
import RoomCard from "../components/RoomCard"
import "../styles/HomePage.css"

const rooms = [
  {
    id: 1,
    name: "Luxury Super Delux",
    description: "Ipsor incididunt ut labore et dolore magna liqu lit anim ad minim veniam",
    price: 299,
    status: "Available",
    payment: "30% Advanced",
    beds: 2,
    reviews: 12,
    // image: "/images/luxury-super-delux.jpg",
  },
  {
    id: 2,
    name: "Simple Family Room",
    description: "Ipsor incididunt ut labore et dolore magna liqu lit anim ad minim veniam",
    price: 399,
    status: "Available",
    payment: "30% Advanced",
    beds: 2,
    reviews: 8,
    // image: "/images/simple-family-room.jpg",
  },
  {
    id: 3,
    name: "Luxury Family Delux",
    description: "Ipsor incididunt ut labore et dolore magna liqu lit anim ad minim veniam",
    price: 499,
    status: "Available",
    payment: "30% Advanced",
    beds: 3,
    reviews: 15,
    // image: "/images/luxury-family-delux.jpg",
  },
]

export default function HomePage() {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "black" }}>Welcome to Our Hotel</h1>
      <section className="hero">
        <div className="hero-content">
          <h2 style={{ color: "black" }}>Rooms</h2>
          <p style={{ color: "black" }}>Ipsor incididunt ut labore et dolore magna liqu</p>
        </div>
      </section>
      <div className="container">
        <BookingForm />
        <div className="rooms-grid">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </main>
  )
}

