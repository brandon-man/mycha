import { CgShoppingCart } from 'react-icons/cg'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    IconButton
  } from '@chakra-ui/react'
  import { useRef } from 'react';

function ShoppingCart(props) {
  const { onAdd, cartItems } = props
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return (
      <>
        <Button 
        as={IconButton} 
        ref={btnRef} 
        onClick={onOpen} 
        icon={<CgShoppingCart fontSize={25} color="black" />} 
        colorScheme="black" 
        variant="ghost"
         />
        <Drawer
          onAdd={onAdd} 
          cartItems={cartItems}
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Cart</DrawerHeader>
            <DrawerBody>
              Your cart is empty
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default ShoppingCart;