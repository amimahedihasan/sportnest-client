import BookingCard from '@/components/shared/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const BookingsPage = async () => {
  const token = await auth.api.getToken({
    headers: await headers()
  })
  const session = await auth.api.getSession({
    headers: await headers() 
  })
  const user = session?.user

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings`, {
    headers: {
      authorization: `Bearer ${token.token}`
    }
  })
  const data = await res.json()

  const filterData = data.filter(item => item.user_email  == user?.email)
 
  return (
    <div className='mt-5 container mx-auto'>

      <h1 className='text-3xl md:text-4xl font-bold text-center'>My Bookings</h1>
      <div className='flex flex-col gap-5 my-10'>
        {
          filterData.length ? (filterData.map(item => <BookingCard key={item._id} item={item} />)) :
            (<div className="text-center py-10 space-y-2 text-gray-500">
              <p className="text-lg">No Bookings yet</p>
              <p className="text-sm">let's Book Your First Venu.. 🚀</p>
              <Link href={'/all-facilities'}>
                <button className="group mt-3  text-[17px] font-bold border-none cursor-pointer rounded-[0.75em] bg-green-800">
                  <span className="block border-2 border-green-800 rounded-[0.75em] px-5 py-2 bg-white text-green-800 -translate-y-1 transition-transform duration-100 ease-in hover:translate-y-[-0.33em] active:translate-y-0">
                    <span className="flex items-center gap-1">Booking <FaArrowRightLong
                      className="group-hover:translate-x-2 duration-300" /></span>
                  </span>
                </button>
              </Link>
            </div>)

        }
      </div>

    </div>
  );
};

export default BookingsPage;