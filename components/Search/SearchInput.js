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
  InputLeftElement,
} from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import { useRef } from "react";

function SearchInput(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { searchTerm, handleChange, children } = props;
  return (
    <>
      <Button
        as={IconButton}
        ref={btnRef}
        onClick={onOpen}
        icon={<MdSearch fontSize={25} color="black" />}
        colorScheme="black"
        variant="ghost"
      />
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <InputGroup pr="4.5rem">
              <InputLeftElement pointerEvents="none" children={<MdSearch />} />
              <Input
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search..."
                onKeyUp={handleChange}
              />
            </InputGroup>
            {children}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SearchInput;
