
// CancellationModal.js
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, Button } from "@chakra-ui/react";

export const CancellationModal = ({ isOpen, onClose, onCancel }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cancelación</ModalHeader>
        <ModalBody>
          {/* Agrega aquí el contenido del modal de cancelación */}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={() => { onCancel(); onClose(); }}>
            Cancelar reserva
          </Button>
          <Button variant="ghost" onClick={onClose}>Volver</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};