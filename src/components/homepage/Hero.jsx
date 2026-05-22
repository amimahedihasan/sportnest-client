"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className=" pt-5 pb-10 bg-gray-50 ">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >

        <SwiperSlide>
          <div className="flex flex-col gap-5 p-5 md:flex-row pb-15 container mx-auto justify-between items-center">
            <div className="animate__animated animate__slideInLeft">
              <h1 className="text-5xl font-bold"> <span className="text-green-800">Where Champions </span> <br /> Reserve Their Arena.</h1>
              <p className="text-xl text-muted mt-3">Easy booking for premium sports facilities, tournaments, <br /> and training sessions.</p>

              <Link href={'/all-facilities'}>
                 <button className="group mt-3  text-[17px] font-bold border-none cursor-pointer rounded-[0.75em] bg-green-800">
                  <span className="block border-2 border-green-800 rounded-[0.75em] px-5 py-2 bg-white text-green-800 -translate-y-1 transition-transform duration-100 ease-in hover:translate-y-[-0.33em] active:translate-y-0">
                    <span className="flex items-center gap-1">Explore Facilities  <FaArrowRightLong
                      className="group-hover:translate-x-2 duration-300" /></span>
                  </span>
                </button>
              </Link>
            </div>

            <div className="overflow-hidden">
              <Image
                className="w-140 hover:scale-110 duration-300 h-120 rounded-xs object-cover"
                src={'/assets/banner.jpg'}
                alt="Hero Image"
                width={1000}
                height={1000}
              />
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>

          {/* Football  */}
          <div className="flex  flex-col gap-5 p-5 md:flex-row  pb-15 container mx-auto justify-between items-center">
            <div >
              <h1 className="text-5xl font-bold"> <span className="text-green-800">Book Football Turf  </span> <br /> for Your Next Match</h1>
              <p className="text-xl text-muted mt-3">Gather your squad. Dominate the field.</p>

              <Link href={'/all-facilities'}>
                 <button className="group mt-3  text-[17px] font-bold border-none cursor-pointer rounded-[0.75em] bg-green-800">
                  <span className="block border-2 border-green-800 rounded-[0.75em] px-5 py-2 bg-white text-green-800 -translate-y-1 transition-transform duration-100 ease-in hover:translate-y-[-0.33em] active:translate-y-0">
                    <span className="flex items-center gap-1"> See Football Venu <FaArrowRightLong
                      className="group-hover:translate-x-2 duration-300" /></span>
                  </span>
                </button>
              </Link>
            </div>

            <div className="overflow-hidden">
              <Image
                className="w-140 hover:scale-110 duration-300 h-120 rounded-xs object-cover"
                src={'/assets/football.jpg'}
                alt="Hero Image"
                width={1000}
                height={1000}
              />
            </div>

          </div>

        </SwiperSlide>

        <SwiperSlide>

          {/* cricekt */}

          <div className="flex  flex-col gap-5 p-5 md:flex-row  pb-15 container mx-auto justify-between items-center">
            <div>
              <h1 className="text-5xl font-bold"> <span className="text-green-800">Your Cricket Ground </span> <br /> is Just a Click Away</h1>
              <p className="text-xl text-muted mt-3">From casual matches to tournaments — book easily</p>

              <Link href={'/all-facilities'}>
                <button className="group mt-3  text-[17px] font-bold border-none cursor-pointer rounded-[0.75em] bg-green-800">
                  <span className="block border-2 border-green-800 rounded-[0.75em] px-5 py-2 bg-white text-green-800 -translate-y-1 transition-transform duration-100 ease-in hover:translate-y-[-0.33em] active:translate-y-0">
                    <span className="flex items-center gap-1"> See Cricket Venu <FaArrowRightLong
                      className="group-hover:translate-x-2 duration-300" /></span>
                  </span>
                </button>
              </Link>
            </div>

            <div className=" overflow-hidden">
              <Image
                className="w-140 hover:scale-110 duration-300 h-120 rounded-xs object-cover"
                src={'/assets/cricket.jpg'}
                alt="Hero Image"
                width={1000}
                height={1000}
              />
            </div>

          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  );
};

export default Hero;