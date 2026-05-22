import Image from "next/image";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { MdSportsVolleyball } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const ManageFacilites = ({ item }) => {
  const { image, description, price_per_hour, location, facility_type, available_slots, booking_count, capacity, name, _id } = item;

  return (
    <div className="px-5">

      <div className="shadow-xl border flex flex-col md:flex-row gap-10 p-5 rounded-xl">
        <div>
          <Image
            className="object-cover rounded-xl h-50 w-50"
            src={image}
            alt={name}
            width={200}
            height={200}
          />
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">{name}</h1>
            <div className="flex gap-2">
              <EditModal data={item} />
              <DeleteModal data={item} />
            </div>

          </div>
          <h1 className="flex gap-1 items-center"> <span className="flex gap-1 text-muted items-center" ><MdSportsVolleyball/> Facility Type: </span>   <span className="font-semibold">{facility_type}</span></h1>
          <h1 className=" flex gap-1 items-center"> <span className="flex gap-1 text-muted items-center"><CiLocationOn/> Location:</span> <span className="font-semibold">{location}</span></h1>
          <h1 className=""> <span className="text-muted">Price Per Hour:</span>  <span className="font-semibold">${price_per_hour}</span></h1>
          <h1 className=""> <span className="text-muted">Available Slots:</span> <span className="font-semibold">{available_slots}</span></h1>
          
        </div>
      </div>

    </div>
  );
};

export default ManageFacilites;