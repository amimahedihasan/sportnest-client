import Link from "next/link";
import { Home, SearchX } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className=" bg-[#f8fff6] flex items-center justify-center px-6 pt-5 pb-10 ">
      <div className="max-w-xl text-center">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#22c55e]/10 p-6 rounded-full">
            <SearchX className="w-16 h-16 text-[#16a34a]" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#15803d]">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-600 leading-relaxed">
          Looks like the page you are trying to visit does not exist or has
          been moved somewhere else.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            href="/"
            className="flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white px-6 py-3 rounded-xl font-medium transition"
          >
            <Home className="w-5 h-5" />
            Back To Home
          </Link>

          <Link
            href="/all-facilities"
            className="border border-[#16a34a] text-[#15803d] hover:bg-[#16a34a] hover:text-white px-6 py-3 rounded-xl font-medium transition"
          >
            Explore Facilities
          </Link>

        </div>

        {/* Decorative Text */}
        <p className="mt-10 text-sm text-gray-400">
          SportNest • Play Better • Book Faster
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;