"use client";

import { Label, SearchField, Button } from "@heroui/react";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="flex justify-center items-center w-full px-4">

      <SearchField className="w-full max-w-2xl">
        <Label className="hidden">Search</Label>

        <SearchField.Group
          className="
            bg-white
            border
            border-green-200
            rounded-2xl
            shadow-sm
            hover:border-green-400
            focus-within:border-green-500
            focus-within:ring-4
            focus-within:ring-green-100
            transition-all
            overflow-hidden
            flex
            items-center
          "
        >

          {/* Icon */}
          <div className="pl-4 text-gray-400 flex items-center shrink-0">
            <Search size={20} />
          </div>

          {/* Input */}
          <SearchField.Input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search facilities..."
            className="
              flex-1
              min-w-0
              px-3
              py-3
              text-gray-700
              placeholder:text-gray-400
              bg-transparent
              outline-none
              border-none
            "
          />

          {/* Clear */}
          <div className="mr-1 flex items-center shrink-0">
            <SearchField.ClearButton className="text-gray-400 hover:text-red-500 transition" />
          </div>

          {/* Button */}
          <Button
            onPress={handleSearch}
            className="
              bg-green-600
              hover:bg-green-700
              text-white
              px-4
              sm:px-5
              py-3
              rounded-none
              h-auto
              min-h-full
              font-medium
              shrink-0
              text-sm
              sm:text-base
            "
          >
            Search
          </Button>

        </SearchField.Group>
      </SearchField>

    </div>
  );
};

export default SearchBox;