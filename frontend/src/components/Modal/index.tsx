import { 
  Button, 
  useDisclosure, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalCloseButton, 
  ModalBody, 
  Image
} from '@chakra-ui/react'
import { useRef } from 'react'
import { IChildren } from './../../interface/index';



export const StyleModal = ({children}: IChildren) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <>
    <Button onClick={onOpen}>Open Modal</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Imagem do veiculo</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
              {children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
