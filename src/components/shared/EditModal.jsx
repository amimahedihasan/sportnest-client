"use client"
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import toast from "react-hot-toast";
import { BiEdit } from "react-icons/bi";
const EditModal = ({ data }) => {
  const { data: session } = authClient.useSession()
  const user = session?.user

  const { image, description, price_per_hour, owner_email, location, facility_type, available_slots, booking_count, capacity, name, _id } = data

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    const addData = {
      ...data,
      owner_email: user?.email
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-facilities/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },

      body: JSON.stringify(addData),

    })

    toast.success('Update Successfully')
    const undateData = await res.json()
    window.location.reload()
  }
  return (
    <div className="">
      <Modal>

        <Button variant="outline" className={"flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100 transition-colors"}>
          <BiEdit /> Edit
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-3xl mt-20">
              <Modal.CloseTrigger />
              <Modal.Header>

                <Modal.Heading>Edit Facility</Modal.Heading>

              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-lg  space-y-3 border my-5">

                    <div className="grid md:grid-cols-2 gap-6">

                      {/* Name */}
                      <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                          Name
                        </label>
                        <input
                          defaultValue={name}
                          required
                          type="text"
                          name="name"
                          placeholder="Enter facility name"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      {/* Facility Type */}
                      <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                          Facility Type
                        </label>

                        <select
                          defaultValue={facility_type}
                          required
                          name="facility_type"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="" disabled>
                            Select facility type
                          </option>

                          <option value="Football">Football</option>
                          <option value="Cricket">Cricket</option>
                          <option value="Tennis">Tennis</option>
                          <option value="Badminton">Badminton</option>
                          <option value="Basketball">Basketball</option>
                          <option value="Volleyball">Volleyball</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Location */}
                      <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                          Location
                        </label>
                        <input
                          defaultValue={location}
                          required
                          type="text"
                          name="location"
                          placeholder="Enter location"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      {/* Price Per Hour */}
                      <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                          Price Per Hour
                        </label>
                        <input
                          defaultValue={price_per_hour}
                          required
                          type="number"
                          name="price_per_hour"
                          placeholder="$50"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      {/* Capacity */}
                      <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                          Capacity
                        </label>
                        <input
                          defaultValue={capacity}
                          required
                          type="number"
                          name="capacity"
                          placeholder="Enter capacity"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      {/* Available Slots */}
                      <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                          Available Slots
                        </label>
                        <input

                          defaultValue={available_slots}
                          required
                          type="text"
                          name="available_slots"
                          placeholder="10AM - 12PM"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      {/* Owner Email */}
                      {/* <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                          Owner Email
                        </label>
                        <input
                          defaultValue={owner_email}
                          required
                          type="email"
                          name="owner_email"
                          placeholder="owner@example.com"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div> */}

                      {/* Booking Count */}
                      <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                          Booking Count
                        </label>
                        <input
                          required
                          type="number"
                          name="booking_count"
                          placeholder="0"
                          defaultValue={booking_count}
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                    </div>
                    {/* Image URL */}
                    <div>
                      <label className="block mb-2 font-semibold text-gray-700">
                        Image URL
                      </label>
                      <input
                        defaultValue={image}
                        required
                        type="url"
                        name="image"
                        placeholder="https://example.com/image.jpg"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    {/* Description */}
                    <div>
                      <label className="block mb-2 font-semibold text-gray-700">
                        Description
                      </label>
                      <textarea
                        defaultValue={description}
                        required
                        name="description"
                        rows="5"
                        placeholder="Write facility description..."
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                      ></textarea>
                    </div>

                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit" slot="close">Update</Button>
                    </Modal.Footer>

                  </form>
                </Surface>
              </Modal.Body>

            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditModal;