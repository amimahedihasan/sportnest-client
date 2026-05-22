"use client";

import CountUp from "react-countup";
import { Users, MapPin, CalendarCheck, Headphones } from "lucide-react";

const stats = [
  {
    id: 1,
    title: "Active Players",
    value: 500,
    suffix: "+",
    icon: Users,
  },
  {
    id: 2,
    title: "Sports Venues",
    value: 120,
    suffix: "+",
    icon: MapPin,
  },
  {
    id: 3,
    title: "Bookings Completed",
    value: 10000,
    suffix: "+",
    icon: CalendarCheck,
  },
  {
    id: 4,
    title: "Customer Support",
    value: "24/7",
    icon: Headphones,
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-[#f5fff2]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Growing <span className="text-green-800">Community</span>
          </h2>
          <p className="text-gray-500 mt-3">
            Thousands of players trust SportNest for their daily games.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100  hover:border-green-700  hover:-translate-y-2 transition-all duration-300 text-center group"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-2xl bg-green-100 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>

                {/* Counter */}
                <h3 className="text-4xl font-extrabold text-gray-800">
                  {typeof stat.value === "number" ? (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      separator=","
                      enableScrollSpy
                      scrollSpyDelay={200}
                    />
                  ) : (
                    stat.value
                  )}
                  {stat.suffix}
                </h3>

                {/* Title */}
                <p className="text-gray-500 mt-2 text-sm">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;