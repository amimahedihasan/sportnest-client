import { Selection, Button, Dropdown, Header, Label } from "@heroui/react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const CategoryDropdown = ({ onChange }) => {
  const [selected, setSelected] = useState(new Set([]));

  const handleChange = (keys) => {
    setSelected(keys);

    const value = Array.from(keys)[0]; // get selected value
    onChange(value);
  };

  return (
    <Dropdown>
      <Button
        aria-label="Category"
        className="
    inline-flex items-center gap-2
    px-4 py-2.5
    bg-green-600 hover:bg-green-700
    border-none rounded-2xl
    text-white text-sm font-medium
    transition-all
  "
      >
        <SlidersHorizontal size={16} />
        Category
        <ChevronDown size={14} className="text-green-200" />
      </Button>

      <Dropdown.Popover className="min-w-[240px]">
        <Dropdown.Menu
          selectedKeys={selected}
          selectionMode="single"
          onSelectionChange={handleChange}
        >
          <Dropdown.Section>
            <Header>Sports</Header>

            <Dropdown.Item id="Football" textValue="Football">
              <Dropdown.ItemIndicator />
              <Label>Football</Label>
            </Dropdown.Item>

            <Dropdown.Item id="Cricket" textValue="Cricket">
              <Dropdown.ItemIndicator />
              <Label>Cricket</Label>
            </Dropdown.Item>

            <Dropdown.Item id="Badminton" textValue="Badminton">
              <Dropdown.ItemIndicator />
              <Label>Badminton</Label>
            </Dropdown.Item>

            <Dropdown.Item id="Tennis" textValue="Tennis">
              <Dropdown.ItemIndicator />
              <Label>Tennis</Label>
            </Dropdown.Item>

            <Dropdown.Item id="Basketball" textValue="Basketball">
              <Dropdown.ItemIndicator />
              <Label>Basketball</Label>
            </Dropdown.Item>

            <Dropdown.Item id="Volleyball" textValue="Volleyball">
              <Dropdown.ItemIndicator />
              <Label>Volleyball</Label>
            </Dropdown.Item>

            <Dropdown.Item id="Other" textValue="Other">
              <Dropdown.ItemIndicator />
              <Label>Other</Label>
            </Dropdown.Item>




          </Dropdown.Section>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default CategoryDropdown;