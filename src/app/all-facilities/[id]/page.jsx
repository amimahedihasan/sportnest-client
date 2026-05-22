import BookNowModal from "@/components/shared/BookNowModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";

const FacilityDetailsPage = async ({ params }) => {
  const { id } = await params;
  const token = await auth.api.getToken({
    headers: await headers()
  })


  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-facilities/${id}` , {
    headers: {
      authorization: `Bearer ${token.token}`
    }
  })
  const data = await res.json();
  const { image, description, price_per_hour, location, facility_type, available_slots, booking_count, capacity, name, _id } = data


  return (
    <div className='mt-5 container mx-auto'>
      <h1 className='text-4xl font-bold py-5'>Facility Details</h1>

      <div className="p-5 my-5 flex flex-col md:flex-row items-start gap-10 shadow-2xl border rounded-2xl">
        <div className="flex-1">
          <Image
            className="h-120 object-cover w-full rounded-2xl"
            src={image}
            alt={name}
            width={500}
            height={500}
          />
        </div>

        <div className="flex-1 space-y-5">
          <h1 className="text-4xl font-bold tracking-tight">
            {name}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-700">

            <p className="flex items-center gap-1 text-lg font-medium">
              <CiLocationOn className="text-red-500 text-xl" />
              {location}
            </p>

            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>

            <p className="text-xl font-semibold text-green-600">
              ${price_per_hour}
              <span className="text-sm text-gray-500 font-normal"> /hour</span>
            </p>

          </div>

          <div className="grid grid-cols-2  gap-4 mt-6">

            <div className="p-5 rounded-xl bg-gray-50 border hover:shadow-md transition">
              <h2 className="text-sm text-gray-500">Facility Type</h2>
              <p className="text-xl font-bold mt-1">{facility_type}</p>
            </div>

            <div className="p-5 rounded-xl bg-gray-50 border hover:shadow-md transition">
              <h2 className="text-sm text-gray-500">Available Slots</h2>
              <p className="text-xl font-bold mt-1">{available_slots}</p>
            </div>

            <div className="p-5 rounded-xl bg-gray-50 border hover:shadow-md transition">
              <h2 className="text-sm text-gray-500">Booking Count</h2>
              <p className="text-xl font-bold mt-1">{booking_count}</p>
            </div>

            <div className="p-5 rounded-xl bg-gray-50 border hover:shadow-md transition">
              <h2 className="text-sm text-gray-500">Capacity</h2>
              <p className="text-xl font-bold mt-1">{capacity}</p>
            </div>

          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">About this facility</h3>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>

          <BookNowModal data={data} />
        </div>
      </div>

    </div>
  );
};

export default FacilityDetailsPage;