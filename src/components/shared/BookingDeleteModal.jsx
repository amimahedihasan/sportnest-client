"use client";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";

const BookingDeleteModal = ({ data }) => {
  const { facility_name, _id } = data
  const handleDlete = async (e) => {
    e.preventDefault()
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings/${_id}`, {
      method: 'DELETE',
      headers: {
        'contenet-type': 'application/json'
      }
    })
    const data = await res.json()
    toast.error('Booking Deleted')
    window.location.reload()
  }

  return (
    <div>
      <AlertDialog>
        <Button className={'text-red-500 border rounded-lg border-red-500'} variant="outline"> <BiTrash /> Cancle</Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>Delete booking permanently?</AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete <strong>{facility_name}</strong> and all of its
                  data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button onClick={handleDlete} slot="close" variant="danger">
                  Confirm
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>


    </div>
  );
};

export default BookingDeleteModal;