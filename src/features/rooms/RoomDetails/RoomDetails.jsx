import { Link, useParams } from "react-router-dom";
import img1 from "../../../assets/img1.avif";
import img2 from "../../../assets/img2.avif";
import img3 from "../../../assets/img3.avif";
import img4 from "../../../assets/img1.avif";
import { useEffect, useState } from "react";
import {
  fetchSingleRoom,
  fetchRoomAmenities,
  
} from "../../../services/rooms.service";
import { checkRoomAvailability } from "../../../services/availability.service";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import {notify} from "../../../utils/utils"

function RoomDetails() {
  const { id } = useParams();
  const [roomDetails, setRoomDetails] = useState({});
  const [roomAmenities, setRoomAmenities] = useState([]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [availableRoom, setAvailableRooms] = useState(null);

  const today = new Date().toISOString().split('T')[0];


  useEffect(() => {
    async function getRoomDetails() {
      const data = await fetchSingleRoom(id);
      setRoomDetails(data);
    }

    getRoomDetails();
  }, []);

  useEffect(() => {
    async function getRoomAmenities() {
      const data = await fetchRoomAmenities(id);
      setRoomAmenities(data);
    }

    getRoomAmenities();
  }, []);

  const handleSubmitAvailabilityInputs = async (e) => {
    e.preventDefault();
    try{
   const data = await checkRoomAvailability(checkIn, checkOut, id);
    if (data.length > 0) {
      setAvailableRooms(data);
    } else {
      setAvailableRooms([]);
    }

    }catch(error){
     notify("Error, please check the dates")
    }
 
  };

  const rooms = {
    images: [img1, img2, img3, img4, img3],
    isAvailable: true,
  };

 
  return (
    <div className="px-4 md:px-12 py-10">
      {/* Gallery  */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-10">
        <img
          alt="kk"
          src={rooms.images[0]}
          className="w-full h-72 md:h-[420px] md:col-span-2 md:row-span-2 object-cover rounded-xl"
        />

        {rooms.images.slice(1, 5).map((img, i) => (
          <div key={i} className="relative">
            <img src={img} className="w-full h-52 object-cover rounded-xl" />

            {i === 2 && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl text-white font-medium cursor-pointer">
                View all photos
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* 1 */}
        <div className="md:col-span-2 space-y-6">
          {/* Title */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {roomDetails.room_name}
            </h1>
          </div>

          {/* Highlights */}
          <div className="flex gap-3 flex-wrap">
            {roomAmenities.map((item) => (
              <span
                key={item.id}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
              >
                {item.room_amenities.name}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {roomDetails.description}
          </p>

          {/* Extra Info */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <p> {roomDetails.adults_capacity} adult</p>
            <p> {roomDetails.children_capacity} child</p>
            <p> {roomDetails.size} </p>
            <p> {roomDetails.view} </p>
          </div>
        </div>
        {/* 2 */}
        <div className="rounded-xl p-6 shadow-xl h-fit lg:sticky lg:top-24">
          <p className="text-2xl font-bold">
            ${roomDetails.price_per_night}
            <span className="text-sm text-gray-500"> / night</span>
          </p>

          {availableRoom !== null &&
            (availableRoom.length > 0 ? (
              <p className="text-green-600">Room is available</p>
            ) : (
              <p className="text-red-500">Room is not available </p>
            ))}

          {/* Date Inputs */}
          <form onSubmit={handleSubmitAvailabilityInputs}>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Input type="date" onChange={(e) => setCheckIn(e.target.value)}  min={today}/>

              <Input
                type="date"
                onChange={(e) => setCheckOut(e.target.value)}
              />

              <Button type="submit">Check Availability</Button>

              {availableRoom === null ? null : (
                <Link
                  to={`/booking/${id}/${checkIn}/${checkOut}`}
                  className="mt-4 px-4 text-center
                   py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition disabled:opacity-50 cursor-pointer"
                >
                  Book Now
                </Link>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
