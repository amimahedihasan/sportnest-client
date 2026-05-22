"use client";

import { useState } from "react";
import FacilityCard from "@/components/shared/FacilityCard";
import Search from "@/components/shared/Search";
import CategoryDropdown from "@/components/shared/SortBy";

const FacilitiesClient = ({
  initialFacilities,
  initialSearch,
  initialCategory,
}) => {
  const [facilities, setFacilities] = useState(initialFacilities);
  const [searchText, setSearchText] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const fetchFacilities = async (text, category) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/all-facilities?search=${text}&category=${category}`
    );

    const data = await res.json();
    setFacilities(data);
  };

  return (
    <div className="pt-5">
      <h1 className="text-center text-3xl font-bold">
        All Facilities
      </h1>

      {/* Search */}
      <div className="container mx-auto mt-5">
        <Search
          onSearch={(text) => {
            setSearchText(text);
            fetchFacilities(text, selectedCategory);
          }}
        />
      </div>

      {/* Category */}
      <div className="container mx-auto flex justify-end mt-2">
        <CategoryDropdown
          onChange={(value) => {
            setSelectedCategory(value);
            fetchFacilities(searchText, value);
          }}
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 container mx-auto mt-5 mb-10">
        {facilities.map((f) => (
          <FacilityCard key={f._id} facility={f} />
        ))}
      </div>
    </div>
  );
};

export default FacilitiesClient;