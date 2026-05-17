import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import useReservation from "../../hooks/useReservation";
import { notify } from "../../utils/utils";

function Booking() {

  const {
    checkIn,
    checkOut,
    
    roomDetails,
    nightsCountInHotel,
    
    totalPrice,
    guestInfo,
    setGuestInfo,

    bookedRoomInfo,
    setBookedRoomInfo,

    handleBookingSubmit,

  } = useReservation();

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-2xl shadow">
      {/* Room Details */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-2xl sm:text-3xl text-red-500 my-4">
        <h3>{roomDetails[0]?.room_name}</h3>
        <h3>{roomDetails[0]?.price_per_night}$</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14">

        <div>
          {/* Guest Info */}
          <div className="space-y-4">
            {/* First Name */}
            <Input
              label="FullName"
              placeholder="Alex"
              value={guestInfo.fullName}
              onChange={(e) =>
                setGuestInfo({ ...guestInfo, fullName: e.target.value })
              }
            />

            <Input
              label="Email"
              placeholder="alex@email.com"
              value={guestInfo.email}
              onChange={(e) =>
                setGuestInfo({ ...guestInfo, email: e.target.value })
              }
            />

            <Input
              label="Phone"
              placeholder="+20 1xxxxxxxxx"
              value={guestInfo.phone}
              onChange={(e) =>
                setGuestInfo({ ...guestInfo, phone: e.target.value })
              }
            />

            <Input
              label="Country"
              placeholder="Country"
              value={guestInfo.nationality}
              onChange={(e) =>
                setGuestInfo({ ...guestInfo, nationality: e.target.value })
              }
            />

            <Input
              label="National ID"
              placeholder="ID Number"
              value={guestInfo.guestNationalId}
              onChange={(e) =>
                setGuestInfo({ ...guestInfo, guestNationalId: e.target.value })
              }
            />
          </div>
        </div>

        <div className="space-y-4">
          {/* Check-in */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Check-in
              <Input readOnly defaultValue={checkIn} />
            </label>
          </div>

          {/* Check-out */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Check-out
              <Input readOnly defaultValue={checkOut} />
            </label>
          </div>



          {/* Adults */}
          <div className="grid grid-cols-2 gap-1 ">
            <label className="text-sm font-medium">
              Adults count
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => {
                    bookedRoomInfo.adultsCount <= 0
                      ? notify("Minimum is one adult")
                      : setBookedRoomInfo({...bookedRoomInfo, adultsCount: bookedRoomInfo.adultsCount - 1});
                  }}
                >
                  -
                </Button>

                <span className="text-base font-semibold pt-4">
                  {bookedRoomInfo.adultsCount}
                </span>

                <Button
                  onClick={() => {
                    bookedRoomInfo.adultsCount >= roomDetails[0].adults_capacity
                      ? notify(
                          "This room capacity is not accepting more then this number of adults",
                      
                        )
                      : setBookedRoomInfo({...bookedRoomInfo, adultsCount: bookedRoomInfo.adultsCount + 1});
                  }}
                >
                  +
                </Button>
              </div>
            </label>

            <label className="text-sm font-medium my-1">
              Children count
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => {
                    bookedRoomInfo.childrenCount < 1
                      ? notify("Minimum is 0")
                      : setBookedRoomInfo({...bookedRoomInfo, childrenCount :bookedRoomInfo.childrenCount - 1 });
                  }}
                >
                  -
                </Button>
                <span className="text-base font-semibold pt-4">
                  {bookedRoomInfo.childrenCount}
                </span>
                <Button
                  onClick={() => {
                    bookedRoomInfo.childrenCount >= roomDetails[0].children_capacity
                      ? notify(
                          "The type of rooms not accepting more than this of children"
                        )
                      : setBookedRoomInfo({...bookedRoomInfo, childrenCount :bookedRoomInfo.childrenCount + 1 });
                  }}
                >
                  +
                </Button>
              </div>
            </label>
          </div>

          {/* Total Price */}
          <div className="p-3 bg-gray-50 rounded-lg flex justify-between text-sm sm:text-base">
            <span>Total price of {nightsCountInHotel} nights.</span>
            <span className="font-semibold">{totalPrice}$</span>
          </div>

          {/* Button */}
          <Button
            type="submit"
            onClick={handleBookingSubmit}
            className="w-full py-3 rounded-lg bg-black text-white text-base font-medium hover:bg-gray-800 transition"
          >
            Book Now
          </Button>
        </div>

      </div>

    </div>
  );
}

export default Booking;
