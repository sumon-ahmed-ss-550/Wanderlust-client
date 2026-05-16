"use client";
import { AlertDialog, Button } from "@heroui/react";
import { MdDeleteForever } from "react-icons/md";

const ProjectDelete = ({ userId }) => {
  const handleDeleteButton = async () => {
    const res = await fetch(`http://localhost:5000/product/${userId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    window.location.reload();
  };

  return (
    <AlertDialog>
      <Button variant="danger" className="rounded-none">
        <MdDeleteForever />
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete project permanently?
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
                onClick={handleDeleteButton}
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

export default ProjectDelete;
