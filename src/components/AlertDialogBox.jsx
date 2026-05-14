"use client";
import { AlertDialog, Button } from "@heroui/react";
import { RiDeleteBin6Line } from "react-icons/ri";

const AlertDialogBox = ({ data, deleteData }) => {
  const handleDeleteData = async (userId) => {
    await deleteData(userId);
  };

  return (
    <AlertDialog>
      <Button className="border border-[#EF4444] rounded-none bg-transparent text-[#EF4444]">
        <RiDeleteBin6Line /> Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete user permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={() => handleDeleteData(data._id)}
                slot="close"
                variant="danger"
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default AlertDialogBox;
