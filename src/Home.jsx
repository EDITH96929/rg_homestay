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
