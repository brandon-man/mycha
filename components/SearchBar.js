import { 
    Input,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    IconButton,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useRef } from 'react';

function SearchBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return (
        <>
        <Button 
        as={IconButton} 
        ref={btnRef} 
        onClick={onOpen} 
        icon={<AiOutlineSearch fontSize={25} />} 
        colorScheme="black" 
        variant="ghost"
         />
        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
                <InputGroup>
                <InputLeftElement pointerEvents='none' children={<AiOutlineSearch/>} />
            <Input placeholder='Search...' />
            </InputGroup>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default SearchBar;