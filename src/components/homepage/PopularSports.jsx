import {
  FaFootballBall,
  FaBasketballBall,
  FaTableTennis,
} from "react-icons/fa";

import {
  GiCricketBat,
  GiShuttlecock,
  GiTennisRacket,
} from "react-icons/gi";

const sports = [
  {
    name: "Football",
    icon: <FaFootballBall />,
  },
  {
    name: "Cricket",
    icon: <GiCricketBat />,
  },
  {
    name: "Tennis",
    icon: <GiTennisRacket />,
  },
  {
    name: "Badminton",
    icon: <GiShuttlecock />,
  },
  {
    name: "Basketball",
    icon: <FaBasketballBall />,
  },
  {
    name: "Table Tennis",
    icon: <FaTableTennis />,
  },
];

const PopularSports = () => {
  return (
    <section className="py-20 bg-[#f8fff6]">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold">
            Popular <span className="text-green-800">Sports</span>
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Explore and book venues for your favorite sports.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {sports.map((sport, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-2xl
                p-8
                flex flex-col
                items-center
                justify-center
                shadow-sm
                border border-gray-100
                hover:border-green-700
                hover:-translate-y-2
                transition-all duration-300
                cursor-pointer
              "
            >
              {/* Icon */}
              <div
                className="
                  text-5xl
                  text-green-800
                  mb-5
                  transition-transform duration-300
                  group-hover:scale-110
                "
              >
                {sport.icon}
              </div>

              {/* Name */}
              <h2 className="font-semibold text-lg text-gray-800">
                {sport.name}
              </h2>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PopularSports;