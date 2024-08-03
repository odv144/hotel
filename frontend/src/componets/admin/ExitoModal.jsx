import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const ExitoModal = ({isOpen, onClick, onClose,submissionStatus,msjOk,msjError}) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {submissionStatus === "success" ? "Éxito" : "Error"}
        </ModalHeader>
        <ModalBody>
          {submissionStatus === "success"
            ? msjOk
            : msjError
        }
        </ModalBody>
        <ModalFooter>
          <Button
            variant={'filled'}
            bg={submissionStatus==='success'? 'green.500': 'red.500'}
            mr={3}
            onClick={onClick}
            
          >
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ExitoModal;
