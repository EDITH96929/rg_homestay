import { useState } from "react";

function Home() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(null);


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
  ];

 return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <section className="bg-indigo-500 text-white py-16 text-center">
        <h1 className="text-5xl font-bold">Welcome to Rovero</h1>
        <p className="text-lg mt-3">Experience luxury and comfort like never before</p>
      </section>

      <section className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center">Find Your Perfect Stay</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div>
            <label className="block text-sm font-medium">Check In</label>
            <input type="date" className="w-full p-2 border rounded" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium">Check Out</label>
            <input type="date" className="w-full p-2 border rounded" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium">Guests</label>
            <select className="w-full p-2 border rounded" value={guests} onChange={(e) => setGuests(Number(e.target.value))}>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition">Search</button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto my-12">
        <h2 className="text-2xl font-semibold text-center">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {rooms.map((room, index) => (
            <div key={index} className={`bg-white p-6 rounded-lg shadow-md transition hover:shadow-lg ${selectedRoom === index ? 'border-2 border-indigo-500' : ''}`}>
              <div className="h-40 bg-gray-200 rounded"></div>
              <h3 className="text-xl font-semibold mt-4">{room.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{room.description}</p>
              <ul className="mt-3 text-sm text-gray-500">
                {room.amenities.map((amenity, i) => (
                  <li key={i}>• {amenity}</li>
                ))}
              </ul>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-indigo-600">${room.price}</span>
                <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition" onClick={() => setSelectedRoom(index)}>
                  {selectedRoom === index ? "Selected" : "Book Now"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
