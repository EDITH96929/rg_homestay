import PropTypes from "prop-types"
import { FaStar } from "react-icons/fa"

export default function RoomCard({ room }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="relative">
        <img
          src={room.image || "/placeholder.svg"}
          alt={room.title}
          className="w-full h-[300px] object-cover rounded-lg"
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < room.rating ? "text-yellow-400" : "text-gray-300"} />
          ))}
          <span className="text-gray-500">{room.reviews} Reviews</span>
        </div>

        <h2 className="text-2xl font-bold">{room.title}</h2>
        <p className="text-gray-600">{room.description}</p>

        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold text-[#B5965E]">${room.price}</span>
          <span className="text-gray-500">/NIGHT</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">STATUS</p>
            <p>{room.status}</p>
          </div>
          <div>
            <p className="text-gray-600">PAYMENT</p>
            <p>{room.payment}</p>
          </div>
          <div>
            <p className="text-gray-600">GUEST</p>
            <p>{room.guest}</p>
          </div>
          <div>
            <p className="text-gray-600">BEDS</p>
            <p>{room.beds}</p>
          </div>
        </div>

        <div className="flex space-x-4">
          <button className="btn-primary">BOOK NOW</button>
          <button className="btn-secondary">MORE DETAILS</button>
        </div>
      </div>
    </div>
  )
}

RoomCard.propTypes = {
  room: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    payment: PropTypes.string.isRequired,
    guest: PropTypes.number.isRequired,
    beds: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
  }).isRequired,
}

