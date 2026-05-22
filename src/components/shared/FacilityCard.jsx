import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdOutlineSportsScore, MdSportsVolleyball } from 'react-icons/md';

const FacilityCard = ({ facility }) => {
  const { image, price_per_hour, location, facility_type, name, _id } = facility
  return (
    <div className='p-5 md:p-5 lg:p-0'>

      <div className='relative group'>
        <div className='overflow-hidden rounded-2xl'>
          <Image
            className='h-90  group-hover:scale-110 duration-300 object-cover w-full '
            src={image}
            alt={name}
            width={200}
            height={200}
          />
        </div>

        <div className='absolute bottom-0 backdrop-blur-[2px] w-full p-3 space-y-2'>
          <h1 className='text-white font-bold text-xl drop-shadow-lg'>{name}</h1>
          <div className='flex justify-between items-center'>
            <p className=' flex items-center bg-white/50 px-2 py-1 font-semibold rounded-2xl '> <CiLocationOn /> {location}</p>
            <p className='bg-white/50 px-2 py-1 rounded-2xl flex items-center '> <MdSportsVolleyball />{facility_type}</p>
          </div>
          <p className=' font-semibold bg-white/50 px-2  py-1 rounded-2xl w-29'>${price_per_hour} <span className='text-sm text-gray-700'>/per hour</span> </p>
          <Link href={`/all-facilities/${_id}`}>
            <button className="= w-full mt-1  text-[17px] font-bold border-none cursor-pointer rounded-[0.75em] bg-white/20">
              <span className="block border-2 border-white/50 rounded-[0.75em] px-5 py-2 bg-white text-black -translate-y-1 transition-transform duration-100 ease-in hover:translate-y-[-0.33em] active:translate-y-0">
                <span className="flex justify-center items-center gap-1"> Book Now  <FaArrowRightLong /></span>
              </span>
            </button>
           
          </Link>
        </div>
      </div>



    </div>
  );
};

export default FacilityCard;