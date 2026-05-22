import Image from "next/image";
import { MdAccessTime, MdSportsVolleyball } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import BookingDeleteModal from "/BookingDeleteModal";
import { IoBookmarksOutline } from "react-icons/io5";
import { Chip } from "@heroui/react";
import { Clock } from "@gravity-ui/icons";

const BookingCard = ({ item }) => {

  const { image, status, hours, time_slot, total_price, facility_id, user_email, booking_date, facility_name, _id } = item;

  return (
    <div className="p-5 md:p-0">

      <div className="shadow-xl border flex flex-col md:flex-row gap-10 p-5 rounded-xl">
        <div>
          <Image
            className="object-cover rounded-xl h-50 w-50"
            src={image}
            alt={facility_name}
            width={200}
            height={200}
          />
        </div>

        <div className="flex-1 space-y-2">

          <div className="flex justify-between items-center">
            <Chip color="warning">
              <Clock width={12} />
              <Chip.Label>{status}</Chip.Label>
            </Chip>
            <BookingDeleteModal data={item} />
          </div>
          <h1 className="text-2xl font-bold">{facility_name}</h1>

          <h1 className="flex gap-1 items-center"> <span className="flex gap-1 text-muted items-center" ><IoBookmarksOutline /> Booking Date: </span>   <span className="font-semibold">{booking_date}</span></h1>
          <h1 className=" flex gap-1 items-center"> <span className="flex gap-1 text-muted items-center"><MdAccessTime /> Time Slot:</span> <span className="font-semibold">{time_slot}</span></h1>
          <h1 className=""> <span className="text-muted">Total Price:</span>  <span className="font-semibold">${total_price}</span></h1>
        </div>
      </div>

    </div>
  );
};

export default BookingCard;