

import { Avatar } from "@heroui/react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    text: "Super smooth booking experience.",
    name: "Oliver Smith",
    sport: "Football",
    image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=3",
  },
  {
    text: "Found a turf within minutes.",
    name: "James Carter",
    sport: "Cricket",
    image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=12",
  },
  {
    text: "Booking courts feels effortless now.",
    name: "Ethan Walker",
    sport: "Badminton",
    image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=10",
  },
  {
    text: "Real-time availability is a game changer.",
    name: "William Johnson",
    sport: "Tennis",
    image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=7",
  },
  {
    text: "Finally a proper sports booking platform.",
    name: "Noah Thompson",
    sport: "Futsal",
    image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=8",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50 ">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            What <span className="text-green-800">Players Say</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Real feedback from SportNest users
          </p>
        </div>

        <Marquee pauseOnHover speed={50} gradient={false}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="mx-4 w-70 h-50 bg-white shadow-md rounded-xl p-5 border"
            >
              <Avatar>
                <Avatar.Image alt="John Doe" src={t.image} />
                <Avatar.Fallback>JD</Avatar.Fallback>
              </Avatar>
              <p className="text-gray-600 italic">“{t.text}”</p>

              <div className="mt-4">
                <p className="font-semibold text-gray-800">{t.name}</p>
                <p className="text-sm text-gray-500">{t.sport}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;