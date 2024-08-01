// ConfirmationModal.js
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, Button } from "@chakra-ui/react";

import { RoomCardConfirm } from "./RoomCardConfirm";

export const ConfirmationModal = ({ isOpen, onClose, onAccept }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirmación</ModalHeader>
        <ModalBody>
          
          {/* Agrega aquí el contenido del modal de confirmación */}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={() => { onAccept(); onClose(); }}>
            Confirmar
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
