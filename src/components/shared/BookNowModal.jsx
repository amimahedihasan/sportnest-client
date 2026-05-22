"use client";
import { authClient } from "@/lib/auth-client";
import { Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const BookNowModal = ({ data }) => {
  const [hours, setHours] = useState(1);
  const { data: session, isPending } = authClient.useSession()
  if (isPending) {
    return;
  }
  const user = session?.user
  const { _id, email } = user;

  const { price_per_hour, name, image } = data;
  const totalPrice = price_per_hour * hours;


  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    const { bookingDate, timeSlot, hours, facilityName } = data;

    const bookingData = {
      facility_name: facilityName,
      facility_id: _id,
      user_email: email,
      booking_date: bookingDate,
      time_slot: timeSlot,
      hours: hours,
      image: image,
      total_price: totalPrice,
      status: "pending",
    }


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })

    const booking = await res.json()
    toast.success('Booking Successfull')
    redirect('/all-facilities')
  }
  return (
    <div >

      <Modal >
        <Modal.Trigger >
          <button className="w-full rounded-[0.75em] bg-black border-none cursor-pointer text-[17px] font-bold">
            <span className="block border-2 border-black rounded-[0.75em] px-5 py-2 bg-green-800 text-white translate-y-[-0.2em] transition-transform duration-100 ease-in hover:-translate-y-[0.33em] active:translate-y-0">
              <span className="flex items-center gap-2"> <MdOutlineBookmarkAdd /> Book Now</span>
            </span>
          </button>
        </Modal.Trigger>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md mt-10">
              <Modal.CloseTrigger />

              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">

                    <TextField defaultValue={name} className="w-full" name="facilityName">
                      <Label>Facility Name</Label>
                      <Input required placeholder="Enter facility name" />
                    </TextField>

                    <TextField className="w-full" name="bookingDate">
                      <Label>Booking Date</Label>
                      <Input required type="date" />
                    </TextField>

                    <TextField className="w-full" name="timeSlot">
                      <Label>Time Slot</Label>
                      <Input required placeholder="e.g. 10:00 AM - 12:00 PM" />
                    </TextField>

                    <TextField className="w-full" name="hours">
                      <Label>Hours</Label>

                      <Input
                        required
                        type="number"
                        min="1"
                        value={hours}
                        onChange={(e) => setHours(Number(e.target.value))}
                        placeholder="Enter hours"
                      />
                    </TextField>

                    <div className="p-4 rounded-xl bg-gray-100 border">
                      <p className="text-sm text-gray-500">Total Price</p>

                      <h2 className="text-2xl font-bold text-green-600">
                        ${totalPrice}
                      </h2>
                    </div>
                    <Modal.Footer>

                      <button
                        type="submit"
                        className="rounded-[0.75em] bg-black border-none cursor-pointer text-[17px] font-bold"
                      >
                        <span className="block border-2 border-black rounded-[0.75em] px-5 py-2 bg-green-800 text-white -translate-y-[0.2em] transition-transform duration-100 ease-in hover:-translate-y-[0.33em] active:translate-y-0">
                          Confirm Booking
                        </span>
                      </button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>

            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>

    </div >
  );
};

export default BookNowModal;