import {
    Box,
    Button, Flex, Heading, Image, Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalFooter, ModalHeader, ModalOverlay,
    Text, useDisclosure
} from "@chakra-ui/react"
import { useRef, useState } from "react"

export default function MyOrderModal({cart}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = useState('inside')

    const btnRef = useRef(null)
    return (
        <>


            <Button mt={3} ref={btnRef} onClick={onOpen}>
                My orders
            </Button>

            <Modal
                onClose={onClose}
                finalFocusRef={btnRef}
                isOpen={isOpen}
                scrollBehavior={"inside"}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>My orders</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

              {cart.reverse().length>0?<>
                {cart.map((item)=>(
  <Flex marginTop="5px" border={'1px solid grey'} justifyContent={'space-between'}>
  <Box>
  <Text>{item.dish_name}</Text>
  <Text>{item.dish_currency} {item.dish_price}</Text>
  <Text>Quantity: {item.count}</Text>
  </Box>
 <Image src={item.dish_image} w={'60px'} h={'60px'} />
 </Flex>
                        ))}
                     
              
              </>:<Heading>No orders</Heading>}



                      
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}