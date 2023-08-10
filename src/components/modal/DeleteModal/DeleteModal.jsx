import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Toaster from "../../notification/Toaster";
import { showErrorNotification } from "../../notification/notificationService";

function DeleteModal({ modalClose, deleteData }) {
  function handleClick() {
    showErrorNotification("data deleted");
    deleteData();
    modalClose();
  }

  return (
    <div>
      <Modal isOpen={true} toggle={modalClose}>
        <ModalHeader>Delete Confirmation</ModalHeader>
        <ModalBody>Are you sure you want to delete this item?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleClick}>
            Delete
          </Button>
          <Button color="secondary" onClick={modalClose}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Toaster />
    </div>
  );
}

export default DeleteModal;
