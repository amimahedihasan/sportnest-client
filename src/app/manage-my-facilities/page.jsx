
import ManageFacilites from "@/components/shared/ManageFacilites";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const ManageFacility = async () => {
  const token = await auth.api.getToken({
    headers: await headers()
  })

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/manage-my-facilities`, {
    headers: {
      authorization: `Bearer ${token.token}`
    }
  })
  const data = await res.json();
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
  })
  const user = session?.user
  const filterData = data.filter(item => item.owner_email === user.email)
  return (
    <div className='mt-5 container mx-auto'>
      <h1 className=' text-3xl md:text-4xl text-center font-bold p-5'>Manage My Facilities</h1>


      <div className="flex flex-col gap-5 mb-10 ">
        {
          filterData.length ? (
            filterData.map((item) => (
              <ManageFacilites key={item._id} item={item} />
            ))
          ) : (
            <div className="text-center py-10 space-y-2 text-gray-500">
              <p className="text-lg">No facilities yet</p>
              <p className="text-sm">Start by adding your first facility 🚀</p>
              <Link href={'/add-facilities'}>
                <button className="group mt-3  text-[17px] font-bold border-none cursor-pointer rounded-[0.75em] bg-green-800">
                  <span className="block border-2 border-green-800 rounded-[0.75em] px-5 py-2 bg-white text-green-800 -translate-y-1 transition-transform duration-100 ease-in hover:translate-y-[-0.33em] active:translate-y-0">
                    <span className="flex items-center gap-1"> Add Facility <FaArrowRightLong
                      className="group-hover:translate-x-2 duration-300" /></span>
                  </span>
                </button>
              </Link>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default ManageFacility;