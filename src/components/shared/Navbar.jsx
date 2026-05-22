"use client"
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { MdOutlineLogin } from "react-icons/md"
import { useState } from "react";
import Image from "next/image";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { TbCategory } from "react-icons/tb";
import { authClient } from "@/lib/auth-client";
import { Dropdown, Label } from "@heroui/react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession()
  if (isPending) {
    return;
  }
  const user = session?.user

  const logout = async () => {
    await authClient.signOut()
  }
  return (
    <div>
      <nav className="bg-white shadow-md  w-full z-100">
        <div className="max-w-7xl mx-auto py-2  flex items-center justify-between">

          <div>
            <Image
              src={'/assets/logo.png'}
              alt="SportNest"
              width={200}
              height={200}
            />
          </div>
          {/* Center - Nav Links (desktop) */}
          <ul className="hidden md:flex items-center gap-8">
            <li><Link href={'/'} className="text-gray-600 hover:text-green-800 font-medium transition flex items-center gap-1 hover:underline"><BiHome /> Home</Link></li>
            <li><Link href={'/all-facilities'} className="text-gray-600 hover:text-green-800 font-medium transition flex items-center gap-1 hover:underline"> <TbCategory /> All Facilities</Link></li>
          </ul>

          {/* Right - Login Button (desktop) */}
          {
            user ?
              <div className="hidden md:inline-flex">
                <Dropdown>
                  <Button className="px-4 py-2 text-sm rounded-lg" aria-label="Menu" variant="secondary">
                    <Avatar size="sm">
                      <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
                      <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                    </Avatar>
                    <h1 className="text-black">{user?.name}</h1> <RiArrowDropDownLine className="text-black text-xl" />
                  </Button>

                  <Dropdown.Popover>
                    <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                      <Dropdown.Item id="new-file" textValue="New file">
                        <Label>
                          <p className="text-muted">Signed in with</p>
                          <p>{user.email}</p>
                        </Label>
                      </Dropdown.Item>
                      <Dropdown.Item id="add-facilities" textValue="Add Facilities">
                        <Link href={'/add-facilities'} className="block w-full">
                          Add Facilities
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item id="my-bookings" textValue="My Bookings">
                        <Link href={'/my-bookings'} className="block w-full">
                          My Bookings
                        </Link>
                      </Dropdown.Item>

                      <Dropdown.Item id="edit-file" textValue="Edit file">
                        <Link href={'/manage-my-facilities'} className="block w-full">
                          Manage My Facilities
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item onClick={logout} id="delete-file" textValue="Delete file" variant="danger">
                        <Label>Logout</Label>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Popover>
                </Dropdown>
              </div>

              : <Link className="hover:scale-105 duration-300" href={'/login'}>

                <button className="md:inline-flex hidden text-[17px] font-bold border-none cursor-pointer rounded-[0.75em] bg-green-800">
                  <span className="block border-2 border-green-800 rounded-[0.75em] px-5 py-2 bg-white text-green-800 -translate-y-1 transition-transform duration-100 ease-in hover:translate-y-[-0.33em] active:translate-y-0">
                    <span className="flex items-center gap-1"><MdOutlineLogin /> Login</span>
                  </span>
                </button>
              </Link>
          }

          {/* Hamburger (mobile) */}
          <button className="md:hidden text-2xl text-gray-800" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col px-6 pb-4 gap-3">
            <Link href={'/'} className="text-gray-700 font-medium hover:text-gray-900">Home</Link>
            <Link href={'/all-facilities'} className="text-gray-700 font-medium hover:text-gray-900">All Facilities</Link>
            {
              user ?
                <>
                  <Dropdown >
                    <Button className="px-4 py-2 text-sm rounded-lg" aria-label="Menu" variant="secondary">
                      <Avatar size="sm">
                        <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
                        <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                      </Avatar>
                      <h1 className="text-black">{user?.name}</h1> <RiArrowDropDownLine className="text-black text-xl" />
                    </Button>

                    <Dropdown.Popover>
                      <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                        <Dropdown.Item id="new-file" textValue="New file">
                          <Label>
                            <p className="text-muted">Signed in with</p>
                            <p>{user.email}</p>
                          </Label>
                        </Dropdown.Item>
                        <Dropdown.Item id="add-facilities" textValue="Add Facilities">
                          <Link href={'/add-facilities'} className="block w-full">
                            Add Facilities
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item id="copy-link" textValue="Copy link">
                          <Link href={'/my-bookings'} className="block w-full">
                            My Bookings
                          </Link>
                        </Dropdown.Item>

                        <Dropdown.Item id="edit-file" textValue="Edit file">
                          <Link href={'/manage-my-facilities'} className="block w-full">
                            Manage My Facilities
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={logout} id="delete-file" textValue="Delete file" variant="danger">
                          <Label>Logout</Label>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Popover>
                  </Dropdown>
                </>

                : <Link className="hover:scale-105 duration-300" href={'/login'}>
                  <button className="inline-flex  md:hidden text-[17px] font-bold border-none cursor-pointer rounded-[0.75em] bg-green-800">
                    <span className="block border-2 border-green-800 rounded-[0.75em] px-5 py-2 bg-white text-green-800 -translate-y-1 transition-transform duration-100 ease-in hover:translate-y-[-0.33em] active:translate-y-0">
                      <span className="flex items-center gap-1"><MdOutlineLogin /> Login</span>
                    </span>
                  </button>
                </Link>
            }
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

