import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  IconButton,
  Divider
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';

import { useRef } from 'react';
import DrawerMenu from './DrawerMenu';
import SocialMediaLinks from './SocialMediaLinks';

 function HamDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return (
      <>
        <Button 
        display={{ base: 'block', md: 'none', lg: 'none' }}
        as={IconButton} 
        ref={btnRef} 
        onClick={onOpen} 
        icon={<HamburgerIcon />} 
        colorScheme="black" 
        variant="ghost"
        aria-label="Open Menu"
         />
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bgGradient='linear(rgb(239, 238, 222) 0%, rgb(208, 240, 192) 25%, rgb(167, 219, 66) 50%)' py={4}>
            <DrawerCloseButton />
            <DrawerHeader />
            <DrawerBody>
              <DrawerMenu />
            </DrawerBody>
            <Divider borderColor='gray.600' />
            <DrawerFooter>
              <SocialMediaLinks />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default HamDrawer;
